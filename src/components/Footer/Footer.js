import style from "./Footer.Module.css";
import { LangContext } from "../../contexts/Language";
import { useContext } from "react";

export const Footer = () => {
    const {lang} = useContext(LangContext);
    if (lang === 'BG') {
        return (
            <footer>
                <p>
                <i className="fa-solid fa-phone"></i>ЗА РЕЗЕРВАЦИИ:
                <img width="25" height="25" src="https://img.icons8.com/fluency/48/bulgaria.png" alt="bulgaria"/>
                <a href="tel:+359878194897">+359878194841</a>
                <img width="25" height="25" src="https://img.icons8.com/fluency/48/czech-republic-circular.png" alt="czech-republic-circular"/>
                <a href="tel:+420608194825">+420608194825</a>
                <i className="fa-solid fa-phone"></i>
                </p>
            </footer>
        )
    };

    if (lang === 'EN') {
        return (
            <footer>
                <p>
                <i className="fa-solid fa-phone"></i>
                FOR RESERVATIONS:
                <img width="25" height="25" src="https://img.icons8.com/fluency/48/bulgaria.png" alt="bulgaria"/>
                <a href="tel:+359878194897">+359878194841</a>
                <img width="25" height="25" src="https://img.icons8.com/fluency/48/czech-republic-circular.png" alt="czech-republic-circular"/>
                <a href="tel:+420608194825">+420608194825</a> 
                <i className="fa-solid fa-phone"></i>
                </p>
            </footer>
        )
    }
   
}