import React from 'react';
import LineItem from './LineItem';


const ItemsList = ({items, handleCheck, hanndleDelete})=>{
    return(
        <ul>
        {items.map((item)=>(
            <LineItem
                item={item}
                key={item.id}
                handleCheck={handleCheck}
                hanndleDelete={hanndleDelete}
            />
    ))}
    </ul>

    )
            }
            export default ItemsList