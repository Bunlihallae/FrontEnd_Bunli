import React from "react";
import logo from "../../images/bunli-logo.png";
import "./Login.css";
import google from "../../images/GoogleLogin.png";
import kakao from "../../images/KakaoLogin.png";
const Login = () => {
    return (
        <div className="hi">
            <div>
                <img className="logo" src={logo} alt="logoimage"></img>
                <div className="title">분리할래?</div>
            
            <div className="login__button">
            <div>
            <img  className="googleLogin__button" src={google} alt="GoogleLoginButton"></img>
            </div>

            <div>
            <img  className="kakaoLogin__button"src={kakao} alt="KakaoLoginButton"></img>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
