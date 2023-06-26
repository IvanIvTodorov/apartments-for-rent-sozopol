import style from "./Footer.Module.css";
import { LangContext } from "../../contexts/Language";
import { useContext } from "react";

export const Footer = () => {
    const {lang} = useContext(LangContext);
    if (lang === 'BG') {
        return (
            <footer>
                <p>
                <i className="fa-solid fa-phone"></i>ЗА РЕЗЕРВАЦИИ:<a href="#">+359878194841</a> <i className="fa-solid fa-phone"></i>
                </p>
            </footer>
        )
    };

    if (lang === 'EN') {
        return (
            <footer>
                <p>
                <i className="fa-solid fa-phone"></i>FOR RESERVATIONS:<a href="#">+359878194841</a> <i className="fa-solid fa-phone"></i>
                </p>
            </footer>
        )
    }
   
}