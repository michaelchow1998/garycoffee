import React, { useEffect } from "react";

interface Props {
  name: string;
  shortName: string;
  price: number;
  stock: number;
}

const ProductCard: React.FC<Props> = ({ name, shortName, price, stock }) => {
  useEffect(() => {
    console.log("hi");
  }, []);

  return (
    <div className="max-w-sm bg-gray-800 rounded-lg border border-gray-200 shadow-md ">
      <div className="flex flex-col items-center pb-10 p-2">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src="./images/coffee.jpg"
          alt="Coffee"
        />
        <h5 className="mb-1 text-lg font-medium text-white">{name}</h5>
        <span className="text-sm text-gray-400 ">{shortName}</span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <div className="inline-flex items-center py-2 px-4 text-sm  font-bold text-center text-indigo-600 bg-white rounded-lg border border-gray-300  focus:ring-4 focus:outline-none ">
            Stock: {stock}
          </div>
          <div className="inline-flex items-center py-2 px-4 text-sm font-bold text-center text-indigo-600 bg-white rounded-lg border border-gray-300 focus:ring-4 focus:outline-none  ">
            Price: ${price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
