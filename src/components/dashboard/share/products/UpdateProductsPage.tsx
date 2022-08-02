import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import ProductDetail from "./ProductDetail";
import ProductCard from "./ProductCard";
function UpdateProductsPage() {
  interface Product {
    id: string;
    location: string;
    bean: string;
    price: number;
    stock: number;
    description: string;
    product_name: string;
    short_name: string;
    image_url: string;
  }

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [targetProductName, setTargetProductName] = useState("");
  const [chosenProduct, setChosenProduct] = useState({});
  const productsState = useSelector((state: RootState) => state.products);
  const products: Array<any> = productsState.items;

  useEffect(() => {
    const target = products.find(
      (product) => product.short_name === targetProductName
    );
    setChosenProduct(target);
  }, [targetProductName]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-5">
        {!isDetailsOpen &&
          products.map(function (product) {
            return (
              <ProductCard
                name={product.product_name}
                shortName={product.short_name}
                price={product.price}
                stock={product.stock}
                setIsDetailsOpen={setIsDetailsOpen}
                setTargetProductName={setTargetProductName}
              />
            );
          })}
      </div>
      {isDetailsOpen && (
        <ProductDetail
          chosenProduct={chosenProduct as Product}
          setIsDetailsOpen={setIsDetailsOpen}
        />
      )}
    </div>
  );
}

export default UpdateProductsPage;
