import React from 'react';

import ItemsList from './ItemsList';


const Content = ({items, handleCheck, hanndleDelete})=>{
   

return(
    <main>
        {(items.length)?(
            <ItemsList
            items={items}
            handleCheck={handleCheck}
            hanndleDelete={hanndleDelete}
            />
        ):(
            <p> Your list is empty </p>
        )
        }
        </main>
        )}
                    
                    export default Content

















