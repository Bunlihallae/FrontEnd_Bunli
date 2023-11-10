import React, { useState } from "react";
import "./hint.css";
import lipStickImg from "../../assets/립스틱.png"
import toothPasteImg from "../../assets/치약.png"
import rubbyGloveImg from "../../assets/고무장갑.png"
const LipStick = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
        <p id="lipStick" onClick={openModal}></p>
        <button className="product__btn"onClick={openModal} style={{background:"none",border:"none",marginLeft:""}}>립스틱</button>
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
              x
            </span>
            <div className="modal-content">
                <div className="product__img"><img clasName="rubbyGloveImg"src={lipStickImg} width="100" height="250"  ></img></div>
                <div className="product__content"><div className="product__title">립스틱</div>립스틱, 립밤, 선스틱은 냉동실에 2시간 이상 얼려두면 스틱과 스틱 안에 남아있는 내용물을 깔끔하게 분리할 수 있어요. 남은 내용물(화장품)은 일반쓰레기로 버리고, 뚜껑과 용기(스틱)는 플라스틱 등 재질에 맞게 분리 배출해요</div>
          </div>
        </div>
      )}
    </div>
  );
};

const ToothPaste = () => {
    const [isModalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    return (
      <div>
            <p id="toothPaste" onClick={openModal}></p>
          <button className="product__btn"onClick={openModal} style={{background:"none",border:"none"}}>치약</button>
        {isModalOpen && (
          <div className="modal">
            <span className="close" onClick={closeModal}>
                x
              </span>
              <div className="modal-content">
                  <div className="product__img"><img clasName="toothPasteImg"src={toothPasteImg} width="100" height="250"  alt="치약이미지"></img></div>
                  <div className="product__content"><div className="product__title">치약</div>가장 많이 버려지는 품목 중 하나인 플라스틱 용기류는 내용물을 비우고 물로 헹구는 등 이물질을 제거해 배출한다. 단, 물로 헹굴 수 없는 구조의 용기류(치약 용기 등)는 일반 쓰레기로 배출해요</div>
            </div>
          </div>
        )}
      </div>
    );
  };
  const RubbyGlove = () => {
    const [isModalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    return (
      <div>
            <p id="rubbyGlove" onClick={openModal}></p>
          <button className="product__btn"onClick={openModal} style={{background:"none",border:"none",marginLeft:""}}>고무장갑</button>
        {isModalOpen && (
          <div className="modal">
            <span className="close" onClick={closeModal}>
                x
              </span>
              <div className="modal-content">
                  <div className="product__img"><img clasName="lipStickImg"src={rubbyGloveImg} width="100" height="250"  ></img></div>
                  <div className="product__content"><div className="product__title">고무장갑</div>
                  고무장갑, 라텍스장갑, 니트릴장갑 등 고무 재질은 재활용이 어려워서 분리 수거되지 않으니 모두 일반쓰레기(종량제봉투) 로 버려주세요. -우리가 사용하는 대부분의 고무 제품은 합성 고무 제품으로 재활용이 불가능해요.</div>
            </div>
          </div>
        )}
      </div>
    );
  };

export {LipStick,ToothPaste,RubbyGlove};
