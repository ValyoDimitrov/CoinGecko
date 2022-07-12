import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCoinsMarkets from "./components/CoinsMarkets/AllCoinsMarkets.js";
import SingleCoin from "./components/CoinsMarkets/SingleCoin.js";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AllCoinsMarkets />} />
          <Route exact path="/coins/:id" element={<SingleCoin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
