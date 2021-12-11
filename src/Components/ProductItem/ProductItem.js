import React from 'react'

const ProductItem = ({produit,handleClick}) => {
    console.log(produit);
    return (
    
          <tr>
              <td><button onClick={()=>handleClick(produit.name)}>Click Me</button></td>
              <td>{produit.name}</td>
              <td><img src={produit.imgSrc} alt="" width="150"/></td>
              <td>{produit.price}</td>
          </tr>
        
    )
}

export default ProductItem
