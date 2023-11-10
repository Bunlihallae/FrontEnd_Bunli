import { Link, useParams } from "react-router-dom";
import productList from "../giftshop/product";
import React, { useEffect, useState } from "react";
import MenuBar from "../components/menuBar/menuBar.js";
import {
  giftDetailApi,
  orderGiftApi,
} from "../../apis/giftShopApi/giftShopApi.js";

const GiftDetail = () => {
  const token = localStorage.getItem("token");

  const { product_id } = useParams();
  const [giftDetail, setGiftDetail] = useState({});
  const [orderInfo, setOrderInfo] = useState({
    product_id: product_id,
    product_price: 0,
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
        alert(
          "상품 구매 완료되었습니다.\n자동으로 주소지로 상품이 배송됩니다."
        );
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

      <div className="giftDetailTopClass">
        <img src={giftDetail.product_image} alt="image" />
        <div className="contents">
          <div className="name">{giftDetail.product_name}</div>
          <div className="content">{giftDetail.product_detail}</div>
          <div className="price">{giftDetail.product_price}P</div>
          <button className="Button" onClick={orderGift}>
            구매
          </button>
        </div>
      </div>
      {/* <div className="giftDetailTopClass">
        <img src={productList[0].giftImage} alt="image" />
        <div className="contents">
          <div className="name">{productList[0].giftName}</div>
          <div className="content">{productList[0].giftContent}</div>
          <div className="price">{productList[0].giftPrice}P</div>
          <button className="Button" onClick={orderGift}>
            구매
          </button>
        </div>
      </div> */}
      <div className="productRuleFirst">
        <div className="ruleTop">구매 시 주의해 주세요:</div>
        <div>1. 배송 밑 운송:</div>
        <div>
          주문하신 특산물은 신속한 배송을 위해 노력하겠습니다. 그러나 운송
          과정에서의 손상을 방지하기 위해 적절한 포장을 사용하고 있습니다.
        </div>
        <div>2. 환불 정책:</div>
        <div>
          만약 제품에 문제가 있거나 만족하지 않을 경우, 7일 이내에 환불 및 교환
          신청이 가능합니다. 자세한 내용은 환불 정책을 참고해 주세요.
        </div>
        <div>3. 품질 보장:</div>
        <div>
          저희는 고품질의 지역 특산물만을 판매합니다. 그러나 제품 수렴 시 상황에
          따라 다를 수 있으니 수렴 후 제품 상태를 확인해 주시기 바랍니다.
        </div>
        <div>4. 법규 및 규정:</div>
        <div>
          저희는 모든 거래에서 관련 법규와 규정을 준수합니다. 소비자의 권리와
          안전을 보장하기 위해 최선을 다하고 있습니다.
        </div>
      </div>
    </div>
  );
};

export default GiftDetail;
