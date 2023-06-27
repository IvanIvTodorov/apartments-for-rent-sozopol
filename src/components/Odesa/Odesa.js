import style from "./Odesa.Module.css"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { LangContext } from "../../contexts/Language";
import { useContext } from "react";



export const Odesa = ({ OdesaPhotos }) => {
    const { lang } = useContext(LangContext);

    if (lang === 'BG') {
        return (
            <section className="odesa-photos">
                <h2>АПАРТАМЕНТ ОДЕСА - ГАЛЕРИЯ</h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="1em">
                        {OdesaPhotos.map((image, i) => (
                            <img
                                className="odesa-img"
                                key={i}
                                src={image.image}
                                alt={image.alt}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
                <h2>Къде можете да ни намерите</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.5235633813204!2d27.697201375853204!3d42.41658937118779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6c7be0ae1d153%3A0xa82dcaa43176b859!2z0JDQv9Cw0YDRgtCw0LzQtdC90YIg0J7QtNC10YHQsCAvIE9kZXNzYSBhcGFydG1lbnQ!5e0!3m2!1sbg!2sbg!4v1687793263536!5m2!1sbg!2sbg"
                    className="odesa-map">
                </iframe>
                <h2>Цени и удобства</h2>
                <section className="prices-odesa">
                    <section className="price">
                        <div>
                            <h5>Септември - юни</h5>
                            <p>120 BGN</p>
                        </div>
                        <div>
                            <h5>Юли - август</h5>
                            <p>150 BGN</p>
                        </div>
                    </section>
                    <section className="comfort">
                        <section className="comfort-item">
                            <p>Интернет<i class="fa-solid fa-wifi"></i></p>
                            <p>Телевизия<i class="fa-solid fa-tv"></i></p>
                            <p>Хладилник<i class="fa-solid fa-temperature-low"></i></p>
                        </section>
                        <section className="comfort-item">
                            <p>Климатик<i class="fa-solid fa-snowflake"></i></p>
                            <p>Котлони<i class="fa-solid fa-fire-burner"></i></p>
                            <p>Посуда<i class="fa-solid fa-utensils"></i></p>
                        </section>
                    </section>
                </section>
            </section>
        );
    };

    if (lang === 'EN') {
        return (
            <section className="odesa-photos">
                <h2>APARTMENT ODESSA - GALLERY</h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="1em">
                        {OdesaPhotos.map((image, i) => (
                            <img
                                className="odesa-img"
                                key={i}
                                src={image.image}
                                alt={image.alt}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
                <h2>OUR ADDRESS</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.5235633813204!2d27.697201375853204!3d42.41658937118779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6c7be0ae1d153%3A0xa82dcaa43176b859!2z0JDQv9Cw0YDRgtCw0LzQtdC90YIg0J7QtNC10YHQsCAvIE9kZXNzYSBhcGFydG1lbnQ!5e0!3m2!1sbg!2sbg!4v1687793263536!5m2!1sbg!2sbg"
                    className="odesa-map">
                </iframe>
                <h2>Prices and comfort</h2>
                <section className="prices-odesa">
                    <section className="price">
                        <div>
                            <h5>September - June</h5>
                            <p>65 EUR</p>
                        </div>
                        <div>
                            <h5>July - August</h5>
                            <p>80 EUR</p>
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