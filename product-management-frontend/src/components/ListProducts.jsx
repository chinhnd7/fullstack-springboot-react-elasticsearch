import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/ProductService'

import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Product'
import { Link } from 'react-router-dom'

const ListProducts = () => {
    const [listProduct, setListProduct] = useState([])

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const response = await getProducts();
                setListProduct(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataAsync();
    }, []);

    console.log(listProduct);

    return (
        <div>
            <h1 className="text-center">List Of Products Page</h1>
            <Link to="/addproduct">
                <div class="btn btn-lg btn-secondary fw-bold border-yellow bg-gray">Add Product</div>
            </Link>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope='col'>Product Id</th>
                        <th scope='col'>Product Name</th>
                        <th scope='col'>Product Price</th>
                        <th scope='col'>Product Quantity</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {listProduct.map(product => (
                        <tr key={product.id}>
                            <Product product={product} />
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ListProducts