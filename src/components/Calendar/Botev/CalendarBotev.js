import { Fragment, useContext, useState } from "react"
import style from "./CalendarBotev.Module.css"
import { January2023 } from "./2023/January2023"
import { February2023 } from "./2023/February2023"
import { March2023 } from "./2023/March2023"
import { April2023 } from "./2023/April2023"
import { May2023 } from "./2023/May2023"
import { June2023 } from "./2023/June2023"
import { July2023 } from "./2023/July2023"
import { August2023 } from "./2023/August2023"
import { September2023 } from "./2023/September2023"
import { October2023 } from "./2023/October2023"
import { November2023 } from "./2023/November2023"
import { December2023 } from "./2023/December2023"
import { LangContext } from "../../../contexts/Language.js";

const monthEn = ["January", "February", "March",
    "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];

const monthBg = ['Януари', 'Февруари', 'Март', 'Април', 'Май',
    'Юни', 'Юли', 'Август', 'Септември', 'Октомври',
    'Ноември', 'Декември']


export const CalendarBotev = () => {
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

                {curMonth === 0 && <January2023 />}
                {curMonth === 1 && <February2023 />}
                {curMonth === 2 && <March2023 />}
                {curMonth === 3 && <April2023 />}
                {curMonth === 4 && <May2023 />}
                {curMonth === 5 && <June2023 />}
                {curMonth === 6 && <July2023 />}
                {curMonth === 7 && <August2023 />}
                {curMonth === 8 && <September2023 />}
                {curMonth === 9 && <October2023 />}
                {curMonth === 10 && <November2023 />}
                {curMonth === 11 && <December2023 />}
                {lang === 'BG' && <p className="agenda">В червено са отбелязани дните, в които апартамента е зает!</p>}
                {lang === 'EN' && <p className="agenda">The days when the apartment is occupied are marked in red!</p>}
            </ul>
        </section>
    );
};