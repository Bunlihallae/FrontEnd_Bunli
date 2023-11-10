import axios from "axios";

const url = "http://localhost:8080";

// 해당 지역에 해당하는 상품리스트 받기
export const giftListApi = (region) => {
  return axios.get(`${url}/product/shop?area=${region}`);
};

// 해당 상품의 상품 세부정보 받기
export const giftDetailApi = (product_id) => {
  return axios.get(`${url}/product/shop/${product_id}`);
};

//해당상품 구매요청하기
export const orderGiftApi = (orderInfo, token) => {
  return axios.post(`${url}/product/shop/${orderInfo.product_id}`, orderInfo, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
