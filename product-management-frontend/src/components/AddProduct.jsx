import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { insertProduct } from '../services/ProductService'

const AddProduct = () => {

  const [name, setName] = useState([''])
  const [price, setPrice] = useState([''])
  const [quantity, setQuantity] = useState([''])

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddProduct = async () => {
    let product = {
      name: name,
      price: price,
      quantity: quantity
    }
    try {
      const newProduct = await insertProduct(product);
      console.log('New product created:', newProduct);
    } catch (error) {
      console.error('Error creating product:', error.message);
      // Xử lý lỗi, ví dụ hiển thị thông báo lỗi, v.v.
    }
  }

  return (
    <div className='container'>
      <h1>Add Product</h1>

      <div className='row'>
        <div className='text-center'>

          <div className="card">
            <div className="card-body">

              <div>
                <div className="form-group">
                  <label>Product Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter Product Name"
                    onChange={handleNameChange}
                  />
                  <label>Product Price</label>
                  <input type="number" className="form-control" id="price" placeholder="Enter Product Price"
                    onChange={handlePriceChange}
                  />
                  <label>Product Quantity</label>
                  <input type="number" className="form-control" id="qty" placeholder="Enter Product Quantity"
                    onChange={handleQuantityChange}
                  />

                </div>

                <Link to="/listproducts">
                  <button className="btn btn-success" style={{ margin: '10px 5px 0 0' }} onClick={handleAddProduct}>Save</button>
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


export default AddProduct