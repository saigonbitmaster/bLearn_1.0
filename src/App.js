import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TakeMcq from "./takeQuizWithApi";
import Result from "./showResult";
import TakeMcqStatic from "./takeQuizStatic";

//use TakeMcq to test with quizzes from APIs, use TakeMcqStatic to test with static data in data/data.js
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<TakeMcq />} />
          <Route path="result" element={<Result />} />
          <Route path="*" element={<TakeMcq />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
