import style from "./Header.Module.css";
import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <header>
            <section className="top-header">
                <ul>
                    <li>
                        <Link to="/Botev"><a href="#">Апартамент Христо Ботев</a></Link>
                    </li>
                    <li>
                        <Link to="/Odesa"><a href="#">Апартамент Одеса</a></Link>
                    </li>
                    <li>
                        <Link to="ZaSozopol"><a href="#">За Созопол</a></Link>
                    </li>
                </ul>
                <p>
                    <section>
                        <img width="20" height="20" src="https://img.icons8.com/fluency/48/great-britain-circular.png" alt="great-britain-circular" />
                        <a href="#">EN</a>
                    </section>
                    <section>
                        <img width="20" height="20" src="https://img.icons8.com/fluency/48/bulgaria.png" alt="bulgaria" />
                        <a href="#">BG</a>
                    </section>
                </p>
            </section>
            <section className="bottom-header">
                <h1>АПАРТАМЕНТИ ПОД НАЕМ</h1>
                <h3>В СОЗОПОЛ</h3>
            </section>
        </header>
    );
};