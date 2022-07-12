import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinsMarket from "./components/CoinsMarkets/CoinsMarket.js";
import SingleCoin from "./components/CoinsMarkets/SingleCoin.js";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CoinsMarket />} />
          <Route exact path="/coins/:id" element={<SingleCoin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
