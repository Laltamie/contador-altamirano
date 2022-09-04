import React from "react";
import "./ItemListContainer.css"


const ItemListContainer = ({greeting}) => {
    return(
        <div className="greeting py-10">
            <h2>{greeting}</h2>
        </div>
    );
};

export default ItemListContainer;