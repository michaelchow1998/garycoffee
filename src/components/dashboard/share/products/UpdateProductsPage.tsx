import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";

import ProductCard from "./ProductCard";
function UpdateProductsPage() {
  const productsState = useSelector((state: RootState) => state.products);
  const products: Array<any> = productsState.items;

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-5">
        {products.map(function (product) {
          return (
            <ProductCard
              name={product.product_name}
              shortName={product.short_name}
              price={product.price}
              stock={product.stock}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UpdateProductsPage;
