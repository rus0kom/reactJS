import react, {useState} from 'react';

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <>
        <div className="input-group input-spinner mb3 d-flex">
            <input className="border-dark" placeholder="" value={count} type="number"/>
            <button className="btn btn-icon btn-dark" type="button" onClick={increase} disabled={count >= stock}>+</button>
            <button className="btn btn-icon btn-dark" type="button" onClick={decrease} disabled={count <= 0}>-</button>
         </div>
         <div className="d-flex">
            <button type="button" className="btn btn-dark" disabled={stock <= 0} onClick={() => onAdd(count)}>Comprar!</button>
        </div>
    </>
    )
}

export default ItemCount;