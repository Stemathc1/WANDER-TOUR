
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Gallery from './Gallery';
import Detail from './Detail';

export function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Gallery />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>

  );
}
