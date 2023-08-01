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
                <button className="btn btn-info">View</button>
            </Link>
            </td>
        </>
    )
}

export default Product