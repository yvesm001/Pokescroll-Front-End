import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MyPokedex from "./pages/MyPokedex";
import MyParty from "./pages/MyParty";
import PokemonDetails from "./pages/PokemonDetails";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MyPokedex" element={<MyPokedex />} />
        <Route path="/PokemonDetails/:pokemonId" element={<PokemonDetails />} />
        <Route path="/MyParty" element={<MyParty />} />
        <Route path="About" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
