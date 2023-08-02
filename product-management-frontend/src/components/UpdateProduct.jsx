import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { updateProduct, viewProduct } from '../services/ProductService'

const UpdateProduct = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({})
  
  useEffect(() => {
    const getProductAsync = async () => {
      try {
        const response = await viewProduct(id);
        setProduct(response)
      } catch (error) {
        console.error('Error get product by Id:', error);
      }
    };

    getProductAsync();
  }, []);

  const handleNameChange = (event) => {
    setProduct({ ...product, name: event.target.value });
  };
  const handlePriceChange = (event) => {
    setProduct({ ...product, price: event.target.value });
  };
  const handleQuantityChange = (event) => {
    setProduct({ ...product, quantity: event.target.value });
  };

  const handleUpdateProduct = async () => {
    try {
      const resultProduct = await updateProduct(id, product);
    } catch (error) {
      console.error('Error updating product fe:', error.message);
    }
  }

  return (
    <div className='container'>
      <h1 style={{ alignItems: 'center', textAlign: 'center', fontSize: '30px', fontStyle: 'italic' }}>Update Product</h1>

      <div className='row'>
        <div className='text-center'>

          <div className="card">
            <div className="card-body">

              <div>
                <div className="form-group">
                  <label style={{ alignItems: 'center', textAlign: 'center', fontSize: '20px', fontStyle: 'normal' }}>Product ID</label>
                  <textarea className="form-control" style={{height:'20px'}} id="id"
                    value={product.id}
                  />
                  <label style={{ alignItems: 'center', textAlign: 'center', fontSize: '20px', fontStyle: 'normal' }}>Product Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter Product Name"
                    value={product.name} onChange={handleNameChange}
                  />
                  <label style={{ alignItems: 'center', textAlign: 'center', fontSize: '20px', fontStyle: 'normal' }}>Product Price</label>
                  <input type="number" className="form-control" id="price" placeholder="Enter Product Price"
                    value={product.price} onChange={handlePriceChange}
                  />
                  <label style={{ alignItems: 'center', textAlign: 'center', fontSize: '20px', fontStyle: 'normal' }}>Product Quantity</label>
                  <input type="number" className="form-control" id="qty" placeholder="Enter Product Quantity"
                    value={product.quantity} onChange={handleQuantityChange}
                  />
                </div>

                <Link to="/listproducts">
                  <button className="btn btn-success" style={{ margin: '10px 5px 0 0' }} onClick={handleUpdateProduct}>Update</button>
                </Link>

                <Link to="/listproducts">
                  <button className="btn btn-danger" style={{ margin: '10px 0 0 5px' }}>Cancel</button>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


export default UpdateProduct