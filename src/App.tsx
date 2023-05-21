import React from "react";
import { Outlet } from 'react-router-dom';
import './App.scss';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <main>
        <Header/>
        <div className="main-container">
          <Outlet/>
        </div>
        <Footer/>
    </main>
  );
};

export default App;
