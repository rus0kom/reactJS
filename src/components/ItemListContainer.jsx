import react from "react";
import Title from "./Title";

export const ItemListCointainer = (props) => {
    return(
        <Title greeting={props.texto}/>
    )
}

export default ItemListCointainer;