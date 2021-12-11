import React from 'react'


const ProductList = ({name,city}) => {
    console.log(name)
    return (
        <div>
            <h1>{name}</h1>
            <h2>{city}</h2>
        </div>
    )
}

export default ProductList
