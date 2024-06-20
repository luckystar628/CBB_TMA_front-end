import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Airdrop from "./page/Airdrop";
import DailyReport from "./page/DailyReport";
import Friends from "./page/Friends";
import Ranking from "./page/Ranking";
import Welcome from "./page/Welcome";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/daily" element={<DailyReport />} />
        <Route path="/rank" element={<Ranking />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/airdrop" element={<Airdrop />} />
      </Routes>
    </Router>
  );
}

export default App;
