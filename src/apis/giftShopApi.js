import axios from "axios";

const url = "http://localhost:8080";

export const giftListApi = (region) => {
  return axios.get(`${url}/product/shop?area=${region}`);
};

export const giftDetailApi = (product_id) => {
  return axios.get(`${url}/product/shop/${product_id}`);
};

export const orderGiftApi = (orderInfo, token) => {
  return axios.post(
    `${url}/product/shop/order/${orderInfo.product_id}`,
    orderInfo,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
