import React from 'react'
import PropTypes from 'prop-types';

const ProductItem = ({produit,handleClick}) => {
    // console.log(produit);
    return (
    
          <tr>
              <td><button onClick={()=>handleClick(produit.name)}>Click Me</button></td>
              <td>{produit.name}</td>
              <td><img src={produit.imgSrc} alt="" width="150"/></td>
              <td>{produit.price}</td>
          </tr>
        
    )
}
ProductItem.propTypes =
{
    produit:PropTypes.object
}

export default ProductItem
