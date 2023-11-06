import cycle from "./img/icon.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userInfoApi } from "../../apis/userApi";

const MenuBar = () => {
  const token = localStorage.getItem("token");

  const [info, setInfo] = useState({
    user_id: 1,
    nickname: "세라",
    user_mileage: 31233,
    user_address: "인천 연수구 송도동 인천아파트 A동 B호",
    order_id: 1,
  });
  const userInfo = async (token) => {
    try {
      await userInfoApi(token).then((res) => {
        console.log(res);
        setInfo(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userInfo(token);
  }, [token]);

  return (
    <div className="menu">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div className="menuLeft">
          <img src={cycle} alt="cycle" />
          <div>분리할래?</div>
        </div>
      </Link>
      <div className="menuRight">
        <Link to="/giftshop" style={{ textDecoration: "none", color: "black" }}>
          <i class="fa-solid fa-gift"></i>
        </Link>
        <Link to="/mypage" style={{ textDecoration: "none", color: "black" }}>
          <div className="mypage">마이페이지</div>
        </Link>
        <div className="coin">
          <i class="fa-solid fa-coins"></i>
          <div>{info.user_mileage}P</div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
