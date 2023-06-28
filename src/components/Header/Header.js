import style from "./Header.Module.css";
import { Link } from "react-router-dom";
import { LangContext } from "../../contexts/Language";
import { useContext } from "react";


export const Header = () => {
    const {lang, setLang} = useContext(LangContext);

    const setLanguage = (language) => {
        setLang(language);
        console.log('here');
    }

    if (lang === 'BG') {
        return (
            <header>
                <section className="top-header">
                    <ul className="nav">
                        <li>
                            <Link to="/">Начало</Link>
                        </li>
                        <li>
                            <Link to="/Botev">Апартамент Христо Ботев</Link>
                        </li>
                        <li>
                            <Link to="/Odessa">Апартамент Одеса</Link>
                        </li>
                    </ul>
                    <p>
                        <img onClick={() => setLanguage("EN")} width="20" height="20" src="https://img.icons8.com/fluency/48/great-britain-circular.png" alt="great-britain-circular" />
                        <a href="#" onClick={() => setLanguage("EN")}>EN</a>
    
                        <img onClick={() => setLanguage("BG")} width="20" height="20" src="https://img.icons8.com/fluency/48/bulgaria.png" alt="bulgaria" />
                        <a href="#" onClick={() => setLanguage("BG")}>BG</a>
                    </p>
                </section>
                <section className="bottom-header">
                    <h1>АПАРТАМЕНТИ ПОД НАЕМ</h1>
                    <h3>В СОЗОПОЛ</h3>
                </section>
            </header>
        );
    };

    if (lang === 'EN') {
        return (
            <header>
                <section className="top-header">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Botev">Apartment Hristo Botev</Link>
                        </li>
                        <li>
                            <Link to="/Odessa">Apartment Odessa</Link>
                        </li>
                    </ul>
                    <p>
                        <img onClick={() => setLanguage("EN")} width="20" height="20" src="https://img.icons8.com/fluency/48/great-britain-circular.png" alt="great-britain-circular" />
                        <a href="#" onClick={() => setLanguage("EN")}>EN</a>
    
                        <img onClick={() => setLanguage("BG")} width="20" height="20" src="https://img.icons8.com/fluency/48/bulgaria.png" alt="bulgaria" />
                        <a href="#" onClick={() => setLanguage("BG")}>BG</a>
                    </p>
                </section>
                <section className="bottom-header">
                    <h1>APARTMENTS FOR RENT</h1>
                    <h3>IN SOZOPOL</h3>
                </section>
            </header>
        )
    }
};