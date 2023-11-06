import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Giftshop from "./pages/giftshop";
import GiftDetail from "./pages/giftDetail";
import MyPage from "./pages/mypage";
import Login from "./pages/login/Login"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Giftshop />}></Route>
          <Route path="/giftshop" element={<Giftshop />}></Route>
          <Route path="/giftshop/:product_id" element={<GiftDetail />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
