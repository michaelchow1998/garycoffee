import React, { useEffect, useState } from "react";
import { refillSingleProduct } from "../../../../pages/api/product/productAPI";
import { productsFetch } from "../../../../store/slice/productsSlice";
import { useDispatch } from "react-redux";
interface Props {
  name: string;
  shortName: string;
  price: number;
  stock: number;
  setIsDetailsOpen: Function;
  setTargetProductName: Function;
}

const ProductCard: React.FC<Props> = ({
  name,
  shortName,
  price,
  stock,
  setIsDetailsOpen,
  setTargetProductName,
}) => {
  const dispatch = useDispatch();
  const [updateBar, setUpdateBar] = useState(false);

  const [formValues, setFormValues] = useState({
    inputStock: 0,
    inputPrice: price,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  const updateBtnHandler = () => {
    setFormValues({
      inputStock: 0,
      inputPrice: price,
    });
    setUpdateBar(!updateBar);
  };
  const openDetailsBtnHandler = () => {
    setTargetProductName(shortName);
    setTimeout(() => {
      setIsDetailsOpen(true);
    }, 1000);
  };

  const submitBtnHandler = async () => {
    setIsLoading(true);
    await refillSingleProduct(
      shortName,
      formValues.inputStock,
      formValues.inputPrice
    );
    dispatch(productsFetch() as any);
    setIsLoading(false);

    setUpdateBar(!updateBar);
  };

  return (
    <div className="max-w-sm bg-gray-800 rounded-lg border border-gray-200 shadow-md mt-4">
      {isLoading && (
        <div className="flex mt-8 w-[258px] h-[100px] relative left-[33%] top-[30%]">
          <div role="status">
            <svg
              className="inline w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {!isLoading && (
        <div className="flex flex-col items-center pb-10 p-2 py-4">
          {!updateBar && (
            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg mt-4"
              src="./images/coffee.jpg"
              alt="Coffee"
            />
          )}
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
          {updateBar && (
            <div className="flex flex-col mt-5 gap-4">
              <div className="flex  items-center justify-center">
                <div className={`bg-gray-400 p-1 font-semibold px-1`}>
                  Stock
                </div>
                <input
                  type="number"
                  name="inputStock"
                  value={formValues.inputStock}
                  onChange={handlerChange}
                  className="p-1"
                ></input>
              </div>
              <div className="flex items-center justify-center">
                <div className={`bg-gray-400 p-1 font-semibold px-2`}>
                  Price
                </div>
                <input
                  type="number"
                  name="inputPrice"
                  value={formValues.inputPrice}
                  onChange={handlerChange}
                  className="p-1"
                ></input>
              </div>
              <button
                className="bg-indigo-600 rounded-lg text-white hover:bg-indigo-800"
                onClick={submitBtnHandler}
              >
                Confirm
              </button>
            </div>
          )}
          <div className="flex gap-4">
            <button
              className=" w-10 h-10 rounded-full bg-gray-400 mt-4 flex items-center justify-center hover:bg-gray-600"
              onClick={updateBtnHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button
              className=" w-10 h-10 rounded-full bg-gray-400 mt-4 flex items-center justify-center hover:bg-gray-600"
              onClick={openDetailsBtnHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
