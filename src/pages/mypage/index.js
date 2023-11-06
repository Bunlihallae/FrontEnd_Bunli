import MenuBar from "../components/menuBar";
import productList from "../giftshop/product";

const MyPage = () => {
  return (
    <div>
      <MenuBar />
      <div className="mypageTopClass">
        <div className="userInfo">
          <i class="fa-solid fa-user"></i>
          <div className="user">
            <div className="name">박준형</div>
            <div className="mileage">21300p</div>
          </div>
        </div>
        <div className="giftInfo"></div>
      </div>
    </div>
  );
};

export default MyPage;
