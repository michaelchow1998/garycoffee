import axios from "axios";

const API_URL = "https://gary-coffee-main.herokuapp.com/api/v1/staff/orders/";

export async function createOrder(body: any) {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      credentials: "same - origin",
      AUTHORIZATION: `Bearer ${localStorage.getItem("access_token")}`,
    },
  };
  try {
    const res = await axios.post(API_URL, JSON.stringify(body), axiosConfig);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchOrderById(id: string) {
  const url = API_URL + id;
  console.log(url);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      credentials: "same - origin",
      AUTHORIZATION: `Bearer ${localStorage.getItem("access_token")}`,
    },
  };

  try {
    const res = await axios.get(API_URL, axiosConfig);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
