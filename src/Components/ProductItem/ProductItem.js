import React from 'react'

const ProductItem = ({produit}) => {
    console.log(produit);
    return (
    
          <tr>
              <td><button>Click Me</button></td>
              <td>{produit.name}</td>
              <td><img src={produit.imgSrc} alt="" width="150"/></td>
              <td>{produit.price}</td>
          </tr>
        
    )
}

export default ProductItem
