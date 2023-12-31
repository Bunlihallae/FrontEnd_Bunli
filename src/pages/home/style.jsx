import styled from "styled-components";
import backgroundImg from "../../assets/mainBackground.png";
import recyclebinImg from "../../assets/recylebinImg.png";
import storeImg from "../../assets/storeImg.svg";
import userImg from "../../assets/userImg.svg";
import lipStickImg from "../../assets/립스틱.png"
import toothPasteImg from "../../assets/치약.png"
import rubbyGloveImg from "../../assets/고무장갑.png"
export const HomeBody = styled.div`
  font-family: nanumgothic;
  text-align: center;

  #background {
    height: 100vh;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;

    #iconBox {
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      color: white;
      width: 100px;

      #mypage {
        background-image: url(${userImg});
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;
        width: 65px;
        height: 65px;
        margin-right: 17px;
        margin-top: 20px;
        margin-bottom: 15px;
      }

      #game {
        background-image: url(${recyclebinImg});
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        width: 100px;
        height: 100px;
        margin-top: 15px;
      }
      #store {
        background-image: url(${storeImg});
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        width: 70px;
        height: 70px;
        margin-right: 17px;
        margin-top: 15px;
      }
      #lipStick {
        background-image: url(${lipStickImg});
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        width: 50px;
        height: 100px;
        margin-top: 15px;
        margin-right:25px
      }
      #rubbyGlove {
        background-image: url(${rubbyGloveImg});
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        width: 50px;
        height: 100px;
        margin-top: 15px;
        margin-right:25px
      }
      #toothPaste {
        background-image: url(${toothPasteImg});
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        width: 50px;
        height: 100px;
        margin-top: 15px;
        margin-right:25px
      }
      #font1 {
        font-size: 12px;
        margin-right: 19px;
        margin-top: 5px;
      }
      #font2 {
        font-size: 12px;
        margin-right: 33px;
        margin-top: 5px;
      }
      #font3 {
        font-size: 12px;
        margin-right: 40px;
        margin-top: 13px;
        color: white;
      }
    }
  }

  //쓰레기 이미지 박스
  #trashBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 40px;
    margin-bottom: 40px;
    margin-left: 0;
    margin-right: 0;
    width: 300px;

    img:nth-child(1) {
      width: 200px;
      height: 20%;
      text-align: center;
      padding-top: 3px;
      margin-bottom: 10px;
    }

    p:nth-child(2) {
      font-size: 250%;
    }
  }

  // 모바일에서는 하단 바에 아이콘
  @media screen and (max-width: 600px) {
    #iconBox {
      align-items: center;
      text-align: center;
      flex-direction: row;
    }
    #trashBox {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
