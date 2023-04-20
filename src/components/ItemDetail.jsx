import { useState } from "react";
import ItemCount from "./ItemCount";
import { useNavigate, Link } from "react-router-dom";  
import { useCartContext } from "../CartContext"; 



const ItemDetail = ({ items }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(items, quantity);
    }

     const { title, price, stock, pictureUrl, id } = items;
    return (<>
    
        <div className="card mb-3" style={{ maxwidth: "500px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={pictureUrl} className="img-fluid rounded-start" alt="..."/>
            </div>
                <div className="col-md-8">
                     <div className="card-body">
                        <h1 className="card-title">{items.title}</h1>
                        <p className="card-text">{items.description}</p>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <h3>Stock restante: {items.stock}  El valor es de : ${items.price}</h3>
                        {
                            goToCart
                            ? <Link to="/cart"><button className="btn btn-icon btn-dark">Ir a la seccion de compras</button></Link>
                            : <ItemCount initial={0} stock={stock} onAdd={onAdd} />
                        }
                        <br/><br/><br/>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
        
        
        </>  );
};

export default ItemDetail;