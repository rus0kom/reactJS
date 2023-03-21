import React from "react";
import data from "../data/ItemsData";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
    const { categoriaId } = useParams();
    console.log(categoriaId)
    const ItemsDATABASE = { data };
    const [items, setItems] = useState([]);

    console.log("%c Render ItemListContainer", "color: green");
    console.log(items);

    useEffect(
        () => {
            let promiseItems = new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(data);     
                    },
                    2000);
            });
        
            promiseItems.then(
                (respuesta)  => {
                    const products = respuesta;
                    if(categoriaId) {
                        setItems(data.filter((product)   => product.category === categoriaId));
                    } else {
                        setItems(products);
                    }
                }, []
            ).catch(
                (errorMsg) => console.error(errorMsg)
            )
        },
        [categoriaId]
    );
    


return (
    <ItemList items={items}/>
);


}

export default ItemListContainer;