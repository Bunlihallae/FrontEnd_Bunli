import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Giftshop from "./pages/giftshop";
import GiftDetail from "./pages/giftDetail";
import MyPage from "./pages/mypage";
import Start from "./pages/start/start"
import Home from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Start/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/giftshop" element={<Giftshop />}></Route>
          <Route path="/giftshop/:product_id" element={<GiftDetail />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
      
        </Routes>
      </Router>
    </>
  );
}

export default App;




