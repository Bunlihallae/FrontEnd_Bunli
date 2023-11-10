import { HomeBody } from "./style";
import { useState, useEffect, useRef } from "react";
import firstImg from "../../assets/stage1_v2.png";
import secondImg from "../../assets/stage5_v3.png";
import thirdImg from "../../assets/stage-3.png";
import fourthImg from "../../assets/stage-4.png";
import backgroundImg from "../../assets/mainBackground.png";
import userImg from "../../assets/userImg.svg";
import { useNavigate } from "react-router-dom";
import { userInfoApi } from "../../apis/userApi.js";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlice.js";

function Body() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});
  const getUserInfo = async (token) => {
    try {
      await userInfoApi(token).then((res) => {
        setUserInfo(res.data);
        dispatch(
          login({
            user_id: userInfo.user_id,
            token: token,
            user_name: userInfo.user_name,
            user_mileage: userInfo.user_mileage,
            user_address: userInfo.user_address,
          })
        );
      });
    } catch (err) {
      console.log(err);
    }
  };

  // 타이머 기능
  const intToString = (num) => {
    return String(num).padStart(2, "0");
  };

  const Timer = ({ hh, mm, ss }) => {
    const HH = hh ? parseInt(hh) : 0;
    const MM = mm ? parseInt(mm) : 0;
    const SS = ss ? parseInt(ss) : 0;

    const count = useRef(HH * 60 * 60 + MM * 60 + SS);
    const interval = useRef(null);

    const [hour, setHour] = useState(intToString(HH));
    const [minute, setMinute] = useState(intToString(MM));
    const [second, setSecond] = useState(intToString(SS));
    const [imageIndex, setImageIndex] = useState(0);

    const images = [firstImg, secondImg, thirdImg, fourthImg];

    const updateImageIndex = () => {
      const currentTime =
        parseInt(hour) * 10000 + parseInt(minute) * 100 + parseInt(second);
      if (currentTime > 230000 && currentTime <= 235955) {
        setImageIndex(1); // secondImg
      } else if (currentTime > 110000 && currentTime <= 230000) {
        setImageIndex(2); // thirdImg
      } else if (currentTime == 110000) {
        setImageIndex(3); // thirdImg
      }
    };

    useEffect(() => {
      interval.current = setInterval(() => {
        count.current -= 1;

        setHour(intToString(parseInt(count.current / 3600)));
        setMinute(intToString(parseInt((count.current % 3600) / 60)));
        setSecond(intToString(count.current % 60));
      }, 1000);

      // interval clear
      return () => {
        clearInterval(interval.current);
      };
    }, []);

    useEffect(() => {
      getUserInfo(token);
      updateImageIndex();
    }, [second]);

    return (
      <div>
        {/* <img src={images[imageIndex]}></img> */}
        <p>
          {hour} : {minute} : {second}
        </p>
      </div>
    );
  };

  const navigate = useNavigate();

  // 유저 아이콘 클릭 시
  const handleOnMypage = (e) => {
    // 마이페이지로 라우팅
    navigate("/mypage");
  };

  // 휴지통 아이콘 클릭 시
  const handleOnGame = (e) => {
    // 게임으로 라우팅
    navigate("/game");
  };

  // 상점 아이콘 클릭 시
  const handleOnStore = (e) => {
    //상점으로 라우팅
    navigate("/giftshop");
  };

  return (
    <HomeBody>
      <div id="background">
        <div id="trashBox">
          <Timer hh="24" mm="0" ss="0" />
        </div>
        <div id="iconBox">
          <p id="mypage" onClick={handleOnMypage}></p>
          <p id="font1">마이페이지</p>
          <p id="game" onClick={handleOnGame}></p>
          <p id="font2">게임시작</p>
          <p id="store" onClick={handleOnStore}></p>
          <p id="font3">상점</p>
        </div>
      </div>
    </HomeBody>
  );
}

export default Body;
