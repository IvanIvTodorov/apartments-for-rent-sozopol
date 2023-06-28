import style from "./Botev.Module.css"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { LangContext } from "../../contexts/Language";
import { useContext } from "react";


export const Botev = ({ BotevPhotos }) => {
    const { lang } = useContext(LangContext);

    if (lang === 'BG') {
        return (
            <section className="botev-photos">
                <h2>АПАРТАМЕНТ Христо Ботев - ГАЛЕРИЯ</h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="1em">
                        {BotevPhotos.map((image, i) => (
                            <img
                                className="botev-img"
                                key={i}
                                src={image.image}
                                alt={image.alt}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
                <h2>Къде може да ни намерите</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.3573603865625!2d27.698564475629567!3d42.41859319355605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6c75d8a6deda7%3A0x53c17e26e8158da1!2z0JDQv9Cw0YDRgtCw0LzQtdC90YIg0KXRgNC40YHRgtC-INCR0L7RgtC10LIgLyBIcmlzdG8gQm90ZXYgYXBhcnRtZW50!5e0!3m2!1sbg!2sbg!4v1687796210571!5m2!1sbg!2sbg"
                    className="botev-map">
                </iframe>
                <h2>Цени и удобства</h2>
                <section className="prices-botev">
                    <section className="price">
                        <div>
                            <h5>Септември - юни</h5>
                            <p>100 BGN</p>
                        </div>
                        <div>
                            <h5>Юли - август</h5>
                            <p>130 BGN</p>
                        </div>
                    </section>
                    <section className="comfort">
                        <section className="comfort-item">
                            <p>Интернет<i className="fa-solid fa-wifi"></i></p>
                            <p>Телевизия<i className="fa-solid fa-tv"></i></p>
                            <p>Хладилник<i className="fa-solid fa-temperature-low"></i></p>
                        </section>
                        <section className="comfort-item">
                            <p>Климатик<i className="fa-solid fa-snowflake"></i></p>
                            <p>Котлони<i className="fa-solid fa-fire-burner"></i></p>
                            <p>Посуда<i className="fa-solid fa-utensils"></i></p>
                        </section>
                    </section>
                </section>
            </section>
        );
    };

    if (lang === 'EN') {
        return (
            <section className="botev-photos">
                <h2>APARTMENT HRISTO BOTEV - GALLERY</h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="1em">
                        {BotevPhotos.map((image, i) => (
                            <img
                                className="botev-img"
                                key={i}
                                src={image.image}
                                alt={image.alt}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
                <h2>OUR ADDRESS</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.3573603865625!2d27.698564475629567!3d42.41859319355605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6c75d8a6deda7%3A0x53c17e26e8158da1!2z0JDQv9Cw0YDRgtCw0LzQtdC90YIg0KXRgNC40YHRgtC-INCR0L7RgtC10LIgLyBIcmlzdG8gQm90ZXYgYXBhcnRtZW50!5e0!3m2!1sbg!2sbg!4v1687796210571!5m2!1sbg!2sbg"
                    className="botev-map">
                </iframe>
                <h2>Prices and comfort</h2>
                <section className="prices-botev">
                    <section className="price">
                        <div>
                            <h5>September - June</h5>
                            <p>55 EUR</p>
                        </div>
                        <div>
                            <h5>July - August</h5>
                            <p>70 EUR</p>
                        </div>
                    </section>
                    <section className="comfort">
                        <section className="comfort-item">
                            <p>Internet<i class="fa-solid fa-wifi"></i></p>
                            <p>TV<i class="fa-solid fa-tv"></i></p>
                            <p>Refrigerator<i class="fa-solid fa-temperature-low"></i></p>
                        </section>
                        <section className="comfort-item">
                            <p>Air-conditioning<i class="fa-solid fa-snowflake"></i></p>
                            <p>Stove<i class="fa-solid fa-fire-burner"></i></p>
                            <p>Utensils<i class="fa-solid fa-utensils"></i></p>
                        </section>
                    </section>
                </section>
            </section>           
        );
    };
};