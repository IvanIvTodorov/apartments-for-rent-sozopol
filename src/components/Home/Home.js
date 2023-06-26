import style from "./Home.Module.css";
import odesaPanorama from "../../img/Odesa/Pnorama1.jpg";
import botevPicture from "../../img/Botev/66224925_2358776481069880_6276619275994136576_n.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <section className="home-section">
            <section className="apartments">
                <Link to="/Odesa" className="link">
                <h4>АПАРТАМЕНТ ОДЕСА</h4>
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
};