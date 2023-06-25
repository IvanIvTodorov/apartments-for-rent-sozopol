import style from "./Header.Module.css";

export const Header = () => {
    return (
        <header>
            <section className="top-header">
                <ul>
                    <li>
                        <a href="#">Апартамент Христо Ботев</a>
                    </li>
                    <li>
                        <a href="#">Апартамент Одеса</a>
                    </li>
                    <li>
                        <a href="#">За Созопол</a>
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