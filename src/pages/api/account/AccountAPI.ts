import axios from "axios";

const API_URL = "https://gary-coffee-main.herokuapp.com/api/v1/staff/account/";

export async function checkAccount(phone: string) {
  const url = API_URL + phone;
  console.log(url);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      credentials: "same - origin",
      AUTHORIZATION: `Bearer ${localStorage.getItem("access_token")}`,
    },
  };

  try {
    const res = await axios.get(url, axiosConfig);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export async function addAccountBalance(body: any) {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      credentials: "same - origin",
      AUTHORIZATION: `Bearer ${localStorage.getItem("access_token")}`,
    },
  };
  try {
    const res = await axios.put(API_URL, JSON.stringify(body), axiosConfig);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export async function createAccount(body: any) {
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
