import styled from "styled-components";
export const HomeBody = styled.div`
    text-align: center;
    font-family: nanumgothic;

    // 비우기 버튼
    #removeBtn{
        display: inline-block;
        width: 20%;
        margin: 0 auto;
        font-size: 170%;
        cursor: pointer;
        line-height: 2.5;
        text-align: center;
        transition: all 0.3s;
        border-radius: 10px;
    }
    #removeBtn:hover{
        color: #A67951;
    }
    //쓰레기 이미지 박스
    #trashBox{
        margin-top: 20px;
        margin-bottom: 40px;
        img:nth-child(1) {
            width: 20%;
            height: 20%;
            text-align: center;
            padding-top:3px;
            margin-bottom: 10px;
        }

        p:nth-child(2) {
            font-size: 250%;
        }
    }

`