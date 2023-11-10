import { useState } from "react";
import Modal from "./modal";
import React from "react";
import NewSideBar from "../components/menuBar/newSideBar";

const MyPage = () => {
  // 모달창 노출 여부 state
  // const [modalOpen, setModalOpen] = useState(true);

  // 모달창 노출
  // const showModal = () => {
  //   setModalOpen(true);
  // };

  return (
    <div className="myPageFirstClass">
      <NewSideBar />
      {/* <button onClick={showModal}>모달 띄우기</button> */}
      {/* {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>} */}
      <Modal />
    </div>
  );
};

export default MyPage;
