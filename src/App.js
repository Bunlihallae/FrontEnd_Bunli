import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Giftshop from "./pages/giftshop";
import GiftDetail from "./pages/giftDetail";
import Game from "./pages/game";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/giftshop" element={<Giftshop />}></Route>
          <Route path="/giftshop/:product_id" element={<GiftDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
