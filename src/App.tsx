import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Airdrop from "./page/Airdrop";
import DailyReport from "./page/DailyReport";
import Friends from "./page/Friends";
import Ranking from "./page/Ranking";
import Welcome from "./page/Welcome";
import Layout from "./Layout";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="daily" element={<DailyReport />} />
          <Route path="friends" element={<Friends />} />
          <Route path="airdrop" element={<Airdrop />} />
          <Route path="*" element={<Ranking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
