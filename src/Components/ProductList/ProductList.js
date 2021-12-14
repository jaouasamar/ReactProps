import React from "react";
import { Table } from "react-bootstrap";
import ProductItem from "../ProductItem/ProductItem";
import PropTypes from 'prop-types';

const ProductList = ({ produits,handleClick}) => {
  return (
    <div>
      <Table striped bordered hover className="mx-auto">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
            {produits.map((elt,index) => <ProductItem produit={elt} key={index} handleClick={handleClick}/>)}
        </tbody>
      </Table>
    </div>
  );
};
ProductList.propTypes = {
    produits: PropTypes.array,
    handleClick: PropTypes.func

}
export default ProductList;
