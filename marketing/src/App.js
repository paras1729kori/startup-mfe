import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "../components/Landing.js";
import Pricing from "../components/Pricing.js";

export default () => {
  return (
    <div>
      <StyledEngineProvider>
        <Router>
          <Routes>
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Router>
      </StyledEngineProvider>
    </div>
  );
};
