import { useState, useEffect } from "react";
import { PaperClipIcon } from "@heroicons/react/solid";
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

interface Props {
  chosenProduct: Product;
  setIsDetailsOpen: Function;
}

const ProductDetail: React.FC<Props> = ({
  chosenProduct,
  setIsDetailsOpen,
}) => {
  const closeDetailsBtnHandler = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Product Information
        </h3>
        <p className="mt-1 max-w-2xl text-xl text-black font-bold">
          {chosenProduct.product_name} ({chosenProduct.short_name})
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Product Id</dt>
            <dd className="mt-1 text-sm text-gray-900">{chosenProduct.id}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Full Name</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {chosenProduct.product_name}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Bean</dt>
            <dd className="mt-1 text-sm text-gray-900">{chosenProduct.bean}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {chosenProduct.location}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Price</dt>
            <dd className="mt-1 text-sm text-gray-900">
              ${chosenProduct.price}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Stock</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {chosenProduct.stock} Units
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {chosenProduct.description}
            </dd>
          </div>
          <div className="sm:col-span-2 flex justify-center">
            <button
              className="bg-indigo-600 px-2 py-1 rounded-lg text-white hover:bg-indigo-800"
              onClick={closeDetailsBtnHandler}
            >
              Back Products Page
            </button>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProductDetail;
