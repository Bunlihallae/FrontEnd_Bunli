import axios from "axios";

const url = "http://localhost:8080";

export const userInfoApi = (token) => {
  return axios.get(`${url}/user/info`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

