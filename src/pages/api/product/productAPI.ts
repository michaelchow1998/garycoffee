import axios from "axios";

const API_URL = "https://gary-coffee-main.herokuapp.com/api/v1/staff/products/";

export async function refillSingleProduct(
  shortName: string,
  inputStock: number,
  inputPrice: number
) {
  const url = API_URL + shortName;
  const body = {
    short_name: shortName,
    stock: inputStock,
    price: inputPrice,
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      credentials: "same - origin",
      AUTHORIZATION: `Bearer ${localStorage.getItem("access_token")}`,
    },
  };
  try {
    const res = await axios.put(url, JSON.stringify(body), axiosConfig);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
