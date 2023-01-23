import React from "react";
import { Route, Routes } from "react-router-dom";
import SavedCards from "./SavedCards";
import GDCards from "./GDCards";
import Transictions from "./Transictions";
import Settings from "./Settings";

function NavPages() {
    return (
      <div>
        <Routes>
          <Route path="/" />
          <Route path="/SavedCards" element={<SavedCards />} />
          <Route path="/GDCards" element={<GDCards />} />
          <Route path="/Transictions" element={<Transictions />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
    );
  }
  export default NavPages