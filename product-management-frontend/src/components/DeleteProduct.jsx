import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { deleteProduct, viewProduct } from '../services/ProductService';
import { Link } from 'react-router-dom';

const DeleteProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const getProductAsync = async () => {
            try {
                const response = await viewProduct(id);
                setProduct(response);
            } catch (error) {
                console.error('Error get product by Id:', error);
            }
        };

        getProductAsync();
    }, []);

    const handleDeleteProduct = async () => {
        try {
            const response = await deleteProduct(id);
        } catch (error) {
            console.error('Error delete product by Id:', error);
        }
        
    }

    return (
        <div>
            <div className="my-3 p-3 bg-body rounded shadow-sm">
                <h6 className="border-bottom pb-2 mb-0" style={{alignItems: 'center', textAlign: 'center', fontSize: '30px', fontStyle: 'italic'}}>Product Delete Confirm</h6>

                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <div id='information'>
                        <div className="d-flex text-body-secondary pt-3">
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em"></text></svg>
                            <p className="pb-3 mb-0 small lh-sm border-bottom">
                                <strong className="d-block text-gray-dark">ID</strong>
                                {product.id}
                            </p>
                        </div>
                        <div className="d-flex text-body-secondary pt-3">
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em"></text></svg>
                            <p className="pb-3 mb-0 small lh-sm border-bottom">
                                <strong className="d-block text-gray-dark">Name</strong>
                                {product.name}
                            </p>
                        </div>
                        <div className="d-flex text-body-secondary pt-3">
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em"></text></svg>
                            <p className="pb-3 mb-0 small lh-sm border-bottom">
                                <strong className="d-block text-gray-dark">Price</strong>
                                {product.price}
                            </p>
                        </div>
                        <div className="d-flex text-body-secondary pt-3">
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#28a745"></rect><text x="50%" y="50%" fill="#fff" dy=".3em"></text></svg>
                            <p className="pb-3 mb-0 small lh-sm border-bottom">
                                <strong className="d-block text-gray-dark">Quantity</strong>
                                {product.quantity}
                            </p>
                        </div>
                    </div>
                    <div id='group-button'>
                        <Link to="/listproducts">
                            <button className="btn btn-success" style={{ margin: '10px 5px 0 0' }} onClick={handleDeleteProduct}>Yes! Delete</button>
                        </Link>

                        <Link to="/listproducts">
                            <button className="btn btn-link" style={{ margin: '10px 0 0 5px' }}>Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteProduct