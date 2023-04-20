import React from "react";
import { useCartContext } from "../CartContext";

const CartItem = ({ product }) => {
    const { removeProduct } = useCartContext();
    return ( 
        <div>
            <div className="card" style={{ width: "15rem" }}>
            <img className="card-img-top" src={product.pictureUrl} alt="Card image cap" />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{`El precio es de: $${product.price} `}</p>
                <p className="card-text">{`${product.stock} unidades disponibles`}</p>
                <p className="card-text">{`${product.quantity} unidades a comprar`}</p>
            </div>
        </div>
            <button className="btn btn-icon btn-dark" onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
     );
}
 
export default CartItem;