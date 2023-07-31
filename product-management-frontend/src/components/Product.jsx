import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({product}) => {
    return (
        <>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
        </>
    )
}

export default Product