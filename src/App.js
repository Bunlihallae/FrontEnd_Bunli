import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Giftshop from "./pages/giftshop";
import GiftDetail from "./pages/giftDetail";
import MyPage from "./pages/mypage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Giftshop />}></Route>
          <Route path="/giftshop" element={<Giftshop />}></Route>
          <Route path="/giftshop/:product_id" element={<GiftDetail />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
