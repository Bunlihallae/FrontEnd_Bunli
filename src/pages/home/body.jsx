import { HomeBody } from "./style";
import { useState, useEffect, useRef } from "react";
import firstImg from "../../assets/stage1_v2.png";
import secondImg from "../../assets/stage5_v3.png";
import thirdImg from "../../assets/stage-3.png";
import fourthImg from "../../assets/stage-4.png";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();

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
      if (currentTime <= 235900) {
        setImageIndex(1); // secondImg
      } else if (currentTime <= 80000) {
        setImageIndex(2); // thirdImg
      } else if (currentTime == 0) {
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
      updateImageIndex();
    }, [second]);

    return (
      <div>
        <img src={images[imageIndex]}></img>
        <p>
          {hour} : {minute}
        </p>
      </div>
    );
  };

  //버튼 클릭 시
  const handleOnClick = (e) => {
    //게임 화면으로 라우팅
    console.log("게임 화면으로 이동");
    navigate("/game");
  };

  return (
    <HomeBody>
      <div>
        <div id="trashBox">
          <Timer hh="24" mm="0" ss="0" />
        </div>
        <button onClick={handleOnClick} id="removeBtn">
          비우기
        </button>
      </div>
    </HomeBody>
  );
}

export default Body;
