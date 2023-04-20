import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

function ItemListContainer(props) {
    const { categoriaId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setItems(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setItems(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))    
        }
    }, [categoriaId])

return (
    <ItemList items={items}/>
);


}

export default ItemListContainer;