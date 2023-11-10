import { userInfoApi } from "../../apis/userApi";
import { useState, useEffect } from "react";
import userImg from "../../assets/userImg.svg";
import productList from "../giftshop/product.js";
import { Link } from "react-router-dom";

function NewModal() {
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

  useEffect(() => {
    userInfo(token);
  }, [token]);

  return (
    <div className="myPageModalFirstClass">
      <div className="ModalBorder">
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
          </div>
        </div>
        <div className="purchaseLine">
          -------------- 구매한 기프티콘 ---------------
        </div>

        <div className="giftList">
          {/* {
                info.order_id.map((e)=>{
                    return(
                        <div></div>
                    )
                })
            } */}

          {productList.map((e) => {
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
          })}
        </div>
      </div>
    </div>
  );
}
export default NewModal;
