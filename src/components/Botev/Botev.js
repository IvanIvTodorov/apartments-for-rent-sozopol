import style from "./Botev.Module.css"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { LangContext } from "../../contexts/Language";
import { useContext } from "react";


export const Botev = ({BotevPhotos}) => {
    const {lang} = useContext(LangContext);

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
                <h2>Къде можете да ни намерите</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.3573603865625!2d27.698564475629567!3d42.41859319355605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6c75d8a6deda7%3A0x53c17e26e8158da1!2z0JDQv9Cw0YDRgtCw0LzQtdC90YIg0KXRgNC40YHRgtC-INCR0L7RgtC10LIgLyBIcmlzdG8gQm90ZXYgYXBhcnRtZW50!5e0!3m2!1sbg!2sbg!4v1687796210571!5m2!1sbg!2sbg" 
                className="botev-map">
                </iframe>           
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
            </section>
        );
    };
};