import React from "react";
import { Table } from "react-bootstrap";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ produits,handleClick}) => {
  return (
    <div>
      <Table striped bordered hover className="mx-5 my-5">
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

export default ProductList;
