import React from "react";
import { useCartContext } from "../CartContext";
import CartItem from "./CartItem"
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const { cart, removeProduct, clearCart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Homero Simpson',
            email: 'soyhomeroelmalo@gmail.com',
            phone: '12321321',
            address: 'calle siempreviva 123'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const Buy = () =>{
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
            .then(({ id }) => console.log(id))
    }

    
    return (
    <>
        {cart.length == 0 ? (
            <>
            <br/>
                <Link className="btn btn-icon btn-dark" to =  "/">No hay items! Agrega uno, Volver<i className="bi bi-cart3"></i></Link>
            </>
    ) : ( 
        <>
        {cart.map((product) => (
                <CartItem key={product.id} product={product} removeProduct={removeProduct}/>
    ))}
    <br/>
    <br/>
    <br/>
    <div className="btn-group" role="group">
    <button className="btn btn-icon btn-dark" onClick={()=> clearCart()}>Vaciar carrito <i className="bi bi-cart3"></i></button>
    <Link className="btn btn-icon btn-dark" to = "/">Volver a la seccion de compras</Link>
    </div>
    <br/><br/><br/>
    <button className="btn btn-icon btn-dark" onClick={()=> Buy()}>El producto casi es tuyo, finaliza la compra clickeando aqui</button>
    <br/><br/><br/>
    <h1 className="bg-dark text-light text-center">El precio total es: ${totalPrice()}</h1>
        </>
    )}
   </>
    )
};

export default Cart;

