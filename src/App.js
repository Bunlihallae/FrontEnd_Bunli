import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Giftshop from "./pages/giftshop";
import GiftDetail from "./pages/giftDetail";
import MyPage from "./pages/mypage";
import Signup from "./pages/signup"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/giftshop" element={<Giftshop />}></Route>
          <Route path="/giftshop/:product_id" element={<GiftDetail />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
