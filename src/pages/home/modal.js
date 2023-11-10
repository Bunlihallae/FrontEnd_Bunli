import styles from "./modal.module.css";
import { userInfoApi } from "../../apis/userApi";
import { useState, useEffect } from "react";
import "./modal.module.css";
import logo from "../components/img/icon.png";
function Modal({ setModalOpen }) {
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

  const [Info, setInfo] = useState({
    user_id: 1,
    user_name: "세라",
    user_mileage: 31233,
    user_address: "인천 연수구 송도동 인천아파트 A동 B호",
    order_id: 1,
  });

  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <img className={styles.mypage__logo} src={logo} alt="logo"></img>
      <button className={styles.close} onClick={closeModal}>
        X
      </button>
      <div className={styles.user__info}>
        <div className={styles.user__icon}>
          <i
            className="fa-solid fa-user fa-flip fa-6x"
            style={{ color: "blue" }}
          ></i>
        </div>
        <div className={styles.user__name}>{Info.user_name}</div>
        <div className={styles.user__mileage}>{Info.user_mileage} P</div>
      </div>
      <div className={styles.modal__scrollable}>
        <div>{Info.order_id}</div>
        <div>{Info.order_id}</div>
        <div>{Info.order_id}</div>
        <div>{Info.order_id}</div>
        <div>{Info.order_id}</div>
        <div>{Info.order_id}</div>
        <div>{Info.order_id}</div>
        <div>{Info.order_id}</div>
      </div>
    </div>
  );
}
export default Modal;
