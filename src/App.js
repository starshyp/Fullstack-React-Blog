import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NavBar from "./components/NavBar";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <div id="page-body">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/article/:name" element={<ArticlePage />} />
            <Route path="/articles-list" element={<ArticlesListPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
