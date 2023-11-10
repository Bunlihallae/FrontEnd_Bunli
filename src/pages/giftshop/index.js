import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import productList from "./product";
import { Link } from "react-router-dom";
import MenuBar from "../components/menuBar.js";
import { giftListApi } from "../../apis/giftShopApi.js";

const Giftshop = () => {
  const [region, setRegion] = useState("충청도");

  const click0 = () => {
    setRegion("충청도");
  };
  const click1 = () => {
    setRegion("강원도");
  };
  const click2 = () => {
    setRegion("전라도");
  };
  const click3 = () => {
    setRegion("제주도");
  };

  const [giftList, setGiftList] = useState([]);

  const getGiftList = async (region) => {
    try {
      await giftListApi(region).then((res) => {
        setGiftList(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGiftList(region);
  }, [region]);

  return (
    <div>
      <MenuBar />
      {/* <div className="giftshopTopClass">
        <div className="giftshopTop">
          <Link
            to="/giftshop"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
            }}
          >
            <i class="fa-solid fa-gift"></i>
            기프티콘 샵
          </Link>
        </div>
        <div className="category">
          <Button onClick={click0} data-checked={region === "충청도"}>
            충청도
          </Button>
          <Button onClick={click1} data-checked={region === "강원도"}>
            강원도
          </Button>
          <Button onClick={click2} data-checked={region === "전라도"}>
            전라도
          </Button>
          <Button onClick={click3} data-checked={region === "제주도"}>
            제주도
          </Button>
        </div>

        <div className="products">
          {giftList.map((e) => {
            return (
              <Link
                to={`/giftshop/${e.product_id}`}
                key={e.product_id}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="product">
                  <img src={e.product_image} alt="gift" />
                  <div className="name">{e.product_name}</div>
                  <div className="price">{e.product_price}P</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div> */}

      <div className="giftshopTopClass">
        <div className="giftshopTop">
          <Link
            to="/giftshop"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
            }}
          >
            <i class="fa-solid fa-gift"></i>
            기프티콘 샵
          </Link>
        </div>
        <div className="category">
          <Button onClick={click0} data-checked={region === "충청도"}>
            충청도
          </Button>
          <Button onClick={click1} data-checked={region === "강원도"}>
            강원도
          </Button>
          <Button onClick={click2} data-checked={region === "전라도"}>
            전라도
          </Button>
          <Button onClick={click3} data-checked={region === "제주도"}>
            제주도
          </Button>
        </div>

        <div className="products">
          {productList
            .filter((e) => {
              if (region === "충청도") return e.region === "충청도";
              if (region === "강원도") return e.region === "강원도";
              if (region === "전라도") return e.region === "전라도";
              if (region === "제주도") return e.region === "제주도";
            })
            .map((e) => {
              return (
                <Link
                  to={`/giftshop/${e.giftId}`}
                  key={e.giftId}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="product">
                    <img src={e.giftImage} alt="gift" />
                    <div className="name">{e.giftName}</div>
                    <div className="price">{e.giftPrice}P</div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Giftshop;
