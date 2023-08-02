import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
            <Link to={`/viewproduct/${product.id}`}>
                <button className="btn btn-outline-info">View</button>
            </Link>
            <Link to={`/updateproduct/${product.id}`}>
                <button className="btn btn-outline-info" style={{marginLeft: '10px'}}>Update</button>
            </Link>
            <Link to={`/deleteproduct/${product.id}`}>
                <button className="btn btn-outline-danger" style={{marginLeft: '10px'}}>Delete</button>
            </Link>
            </td>
        </>
    )
}

export default Product