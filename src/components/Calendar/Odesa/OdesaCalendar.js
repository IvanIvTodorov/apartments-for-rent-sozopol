import { Fragment, useContext, useState } from "react"
import style from "./OdesaCalendar.Module.css"
import { January2024 } from "./2024/January2024"
import { February2024 } from "./2024/February2024"
import { March2024 } from "./2024/March2024"
import { April2024 } from "./2024/April2024"
import { May2024 } from "./2024/May2024"
import { June2024 } from "./2024/June2024"
import { July2024 } from "./2024/July2024"
import { August2024 } from "./2024/August2024"
import { September2024 } from "./2024/September2024"
import { October2024 } from "./2024/October2024"
import { November2024 } from "./2024/November2024"
import { December2024 } from "./2024/December2024"
import { LangContext } from "../../../contexts/Language.js";

const monthEn = ["January", "February", "March",
    "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];

const monthBg = ['Януари', 'Февруари', 'Март', 'Април', 'Май',
    'Юни', 'Юли', 'Август', 'Септември', 'Октомври',
    'Ноември', 'Декември']


export const CalendarOdesa = () => {
    const { lang } = useContext(LangContext);

    let date = new Date();
    const [curMonth, setCurMonth] = useState(date.getMonth());

    let year = date.getFullYear();

    const goPrev = (curMonth) => {
        if (curMonth === 0) {
            setCurMonth(11);
        } else {
            setCurMonth(curMonth - 1);
        }
    };

    const goNext = (curMonth) => {
        if (curMonth === 11) {
            setCurMonth(0);
        } else {
            setCurMonth(curMonth + 1);
        }
    }

    return (
        <section className="calendar">
            <ul className="month">
                <li onClick={() => goPrev(curMonth)} className="prev">&#10094;</li>
                {lang === 'EN' && <li>{monthEn[curMonth]} - {year}</li>}
                {lang === 'BG' && <li>{monthBg[curMonth]} - {year}</li>}              
                <li onClick={() => goNext(curMonth)} className="next">&#10095;</li>
            </ul>
            <ul className="days">
                {lang === 'EN' && <section>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                    <li>Sun</li>
                </section>}
                {lang === 'BG' && <section>
                    <li>Пон</li>
                    <li>Вт</li>
                    <li>Ср</li>
                    <li>Чет</li>
                    <li>Пет</li>
                    <li>Съб</li>
                    <li>Нед</li>
                </section>}

                {curMonth === 0 && <January2024 />}
                {curMonth === 1 && <February2024 />}
                {curMonth === 2 && <March2024 />}
                {curMonth === 3 && <April2024 />}
                {curMonth === 4 && <May2024 />}
                {curMonth === 5 && <June2024 />}
                {curMonth === 6 && <July2024 />}
                {curMonth === 7 && <August2024 />}
                {curMonth === 8 && <September2024 />}
                {curMonth === 9 && <October2024 />}
                {curMonth === 10 && <November2024 />}
                {curMonth === 11 && <December2024 />}
                {lang === 'BG' && <p className="agenda">В червено са отбелязани дните, в които апартамента е зает!</p>}
                {lang === 'EN' && <p className="agenda">The days when the apartment is occupied are marked in red!</p>}
            </ul>
        </section>
    );
};