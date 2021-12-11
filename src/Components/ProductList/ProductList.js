import React from "react";
import { Table } from "react-bootstrap";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ produits }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
            {produits.map((elt,index) => <ProductItem produit={elt} key={index}/>)}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
