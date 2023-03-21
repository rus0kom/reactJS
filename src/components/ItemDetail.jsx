import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";   

const ItemDetail = ({ item }) => {

    const [goToCart, setGoToCart] = useState(false);


    const onAdd = (quantity) => {
        setGoToCart(true);
    }

     const { title, price, stock, pictureUrl, id } = item;
    return (<>
    
        <div className="card mb-3" style={{ maxwidth: "500px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={pictureUrl} className="img-fluid rounded-start" alt="..."/>
            </div>
                <div className="col-md-8">
                     <div className="card-body">
                        <h1 className="card-title">{item.title}</h1>
                        <p className="card-text">{item.description}</p>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <h3>Stock restante: {item.stock}  El valor es de : ${item.price}</h3>
                        {
                            goToCart
                            ? <Link to="/cart"><button className="btn btn-icon btn-dark">Ir a la seccion de compras</button></Link>
                            : <ItemCount initial={3} stock={stock} onAdd={onAdd} />
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