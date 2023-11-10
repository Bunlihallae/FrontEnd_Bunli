import React from "react";
import { Link } from "react-router-dom";

const NewMenu = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="newMenuFirstClass">
      <div className="mypage">
        {token ? <i class="fa-solid fa-user"></i> : "Login"}
      </div>
      <div className="trash">
        <i class="fa-solid fa-trash"></i>
      </div>
      <div className="giftshop">
        <Link
          to="/giftshop"
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "black",
          }}
        >
          <i class="fa-solid fa-gift"></i>
        </Link>
      </div>
    </div>
  );
};

export default NewMenu;
