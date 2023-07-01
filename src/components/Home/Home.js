import style from "./Home.Module.css";
import odesaPanorama from "../../img/Odesa/Pnorama1.jpg";
import botevPicture from "../../img/Botev/hol1.jpg";
import { Link } from "react-router-dom";
import { LangContext } from "../../contexts/Language";
import { useContext } from "react";

export const Home = () => {
    const { lang } = useContext(LangContext);

    if (lang === 'BG') {
        return (
            <section className="home-section">
                <section className="apartments">
                    <Link to="/Odessa" className="link">
                        <h4 className="odesa-h4">АПАРТАМЕНТ ОДЕСА</h4>
                        <section className="odesa">
                            <img src={odesaPanorama} alt="apartment-odesa" />
                            <p>
                                Апартамент Одеса се намира в непосредствена близост до плаж "Харманите"
                                в град Созопол, с невероятна морска гледка. Готов да предложи удобство и
                                уют. Напълно оборудван, посрещайки всяка ваша нужда!
                            </p>
                        </section>
                    </Link>

                    <Link to="/Botev" className="link">
                        <h4>АПАРТАМЕНТ ХРИСТО БОТЕВ</h4>
                        <section className="botev">
                            <p>
                                Апартамент Христо Ботев се намира на еднакво разстояние между Централен
                                плаж и плаж "Харманите" в град Созопол, в непосредствена близост до
                                детски парк. Предлагайки Ви спокойствието и комфорта, които заслужавате!
                            </p>
                            <img
                                src={botevPicture}
                                alt="apartment-hristo-botev"
                            />
                        </section>
                    </Link>
                </section>
            </section>
        );
    }

    if (lang === 'EN') {
        return (
            <section className="home-section">
                <section className="apartments">
                    <Link to="/Odessa" className="link">
                        <h4>APARTMENT ODESSA</h4>
                        <section className="odesa">
                            <img src={odesaPanorama} alt="apartment-odesa" />
                            <p>
                                Apartment Odessa is located on ''Harmanite'' beach in the city of Sozopol, with an incredible sea view. Offering comfort and coziness. Fully equipped, meeting all of your requirements!
                            </p>
                        </section>
                    </Link>

                    <Link to="/Botev" className="link">
                        <h4>APARTMENT HRISTO BOTEV</h4>
                        <section className="botev">
                            <p>
                                Apartment Hristo Botev is located between Central Beach and "Harmanite" Beach in the city of Sozopol, in close proximity to a children's park. Offering you the peace and comfort you deserve!
                            </p>
                            <img
                                src={botevPicture}
                                alt="apartment-hristo-botev"
                            />
                        </section>
                    </Link>
                </section>
            </section>
        );
    }

};