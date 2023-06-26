import { Home } from "../Home/Home.js";
import { Routes, Route } from "react-router-dom"
import { Botev } from "../Botev/Botev.js";
import { Odesa } from "../Odesa/Odesa.js";


export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Botev" element={<Botev />} />
            <Route path="/Odesa" element={<Odesa />} />
        </Routes>
    );
};