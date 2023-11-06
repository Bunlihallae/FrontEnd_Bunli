import { Link, useParams } from "react-router-dom";
import productList from "../giftshop/product";
import React, { useEffect, useState } from "react";
import MenuBar from "../components/menuBar.js";
import { giftDetailApi, orderGiftApi } from "../../apis/giftShop.js";

const GiftDetail = () => {
  const token = localStorage.getItem("token");

  const { product_id } = useParams();
  const [giftDetail, setGiftDetail] = useState({});
  const [orderInfo, setOrderInfo] = useState({
    product_id: product_id,
    product_price: 15000,
    user_id: 1,
  });

  const getGiftDetail = async (product_id) => {
    try {
      await giftDetailApi(product_id).then((res) => {
        setGiftDetail(res.data);
        setOrderInfo({
          ...orderInfo,
          product_price: res.data.product_price,
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  const orderGift = async (orderInfo, token) => {
    try {
      await orderGiftApi(orderInfo, token).then((res) => {
        alert("상품 구매!");
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGiftDetail(product_id);
  }, []);

  return (
    <div>
      <MenuBar />
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

      {/* <div className="giftDetailTopClass">
        <img src={giftDetail.product_image} alt="image" />
        <div className="contents">
          <div className="name">{giftDetail.product_name}</div>
          <div className="content">{giftDetail.product_detail}</div>
          <div className="price">{giftDetail.product_price}P</div>
          <button className="Button" onClick={orderGift}>구매</button>
        </div>
      </div> */}
      <div className="giftDetailTopClass">
        <img src={productList[0].giftImage} alt="image" />
        <div className="contents">
          <div className="name">{productList[0].giftName}</div>
          <div className="content">{productList[0].giftContent}</div>
          <div className="price">{productList[0].giftPrice}P</div>
          <button className="Button" onClick={orderGift}>
            구매
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftDetail;
