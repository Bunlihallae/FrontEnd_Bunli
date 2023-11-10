import { userInfoApi, userLogoutApi } from "../../apis/userApi";
import { useState, useEffect } from "react";
import userImg from "../../assets/userImg.svg";
import productList from "../giftshop/product.js";
import { Link, useNavigate } from "react-router-dom";
import { giftDetailApi } from "../../apis/giftShopApi/giftShopApi.js";

function NewModal() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    user_id: 1,
    user_name: "박준형",
    user_mileage: 31233,
    user_address: "서울특별시 광진구 화양동 105번지",
    order_id: [1, 3],
  });

  const token = localStorage.getItem("token");
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

  const Logout = async (token) => {
    try {
      await userLogoutApi(token).then((res) => {
        navigate("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [productDetail, setProductDetail] = useState({});
  const getDetail = async (product_id) => {
    try {
      await giftDetailApi(product_id).then((res) => {
        setProductDetail(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userInfo(token);
  }, [token]);

  return (
    <div className="myPageModalFirstClass">
      <div className="ModalBorder">
        <div className="modalTop">ITunes.exe - 응용 프로그램 오류</div>
        <div className="myPageBox">
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <button className="toHome">X</button>
          </Link>
          <div className="userBox">
            <img src={userImg} alt="user" />
            <div className="userInfo">
              <div className="userName">{info.user_name}</div>
              <div className="userRegion">{info.user_address}</div>
              <div className="userMileage">
                현재 마일리지 : {info.user_mileage}P
              </div>
              <div className="userTime">잔여시간 : 00:00</div>
              <button onClick={Logout} className="logout">
                로그아웃
              </button>
            </div>
          </div>
          <div className="purchaseLine">
            -------------- 구매한 기프티콘 ---------------
          </div>

          <div className="giftList">
            {info.order_id.map((e) => {
              getDetail(e);
              return (
                <Link
                  to={`/giftshop/${productDetail.product_id}`}
                  key={productDetail.product_id}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="product">
                    <img src={productDetail.product_image} alt="gift" />
                    <div className="name">{productDetail.product_name}</div>
                  </div>
                </Link>
              );
            })}

            {/* {productList.map((e) => {
              return (
                <Link
                  to={`/giftshop/${e.giftId}`}
                  key={e.giftId}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="product">
                    <img src={e.giftImage} alt="gift" />
                    <div className="name">{e.giftName}</div>
                  </div>
                </Link>
              );
            })} */}
          </div>
        </div>
        <div className="OKbutton">
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <button>확인</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NewModal;
