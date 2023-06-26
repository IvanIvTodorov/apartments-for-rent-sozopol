import { Home } from "../Home/Home.js";
import { Routes, Route } from "react-router-dom"
import { Botev } from "../Botev/Botev.js";
import { Odesa } from "../Odesa/Odesa.js";
import {OdesaPhotos} from "../Odesa/OdesaPhotos.js";
import {BotevPhotos} from "../Botev/BotevPhotos.js";


export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Botev" element={<Botev BotevPhotos={BotevPhotos}/>} />
            <Route path="/Odesa" element={<Odesa OdesaPhotos={OdesaPhotos}/>} />
        </Routes>
    );
};