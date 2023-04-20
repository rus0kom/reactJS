import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useFetcher, useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
   const [items, setItems] = useState({});
   const { id } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', id);
        getDoc(queryDoc)
            .then(res => setItems({id: res.id, ...res.data()}))
    }, [id])
   
    return ( <ItemDetail items={items}/> );
};
 
export default ItemDetailContainer;