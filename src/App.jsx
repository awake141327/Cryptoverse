import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout, Typography } from "antd";

import {
  Navbar,
  Exchanges,
  CryptoCurrencies,
  News,
  HomePage,
  CryptoDetails,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/crypto-currencies" element={<CryptoCurrencies />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse 2024
            <br />
            All rights reserved
          </Typography.Title>
        </div>
      </div>
    </div>
  );
}

export default App;
