import React from 'react';
import classes from './ContactPage.module.css'
import locationIcon from '../../public/imgs/location.svg'
import phoneIcon from '../../public/imgs/phone2.svg'
import emailIcon from '../../public/imgs/email.svg'
import clockIcon from '../../public/imgs/clock.svg'
import Header from "../layout/Header.jsx";

function ContactPage() {
    return (
        <>
            <Header/>
            <div className={classes.colorContainer}>
                <section className={classes.contactContainer}>
                    <h1>Контакты</h1>
                    <p>Свяжитесь с нами для консультации</p>

                    <ul className={classes.contactUlContainer}>
                        <li>
                            <img src={locationIcon} alt="location-icon"/>
                            <dd>Адрес</dd>
                            <dt>г. Москва, ул. Примерная, д. 123</dt>
                        </li>

                        <a href="tel:+78125094189">
                            <li>
                                <img src={phoneIcon} alt="phone-icon"/>
                                <dd>Телефон</dd>
                                <dt>+78125094189</dt>
                            </li>
                        </a>

                        <li>
                            <img src={emailIcon} alt="email-icon"/>
                            <dd>Email</dd>
                            <dt>ritualpamyatniki@inbox.ru</dt>
                        </li>

                        <li>
                            <img src={clockIcon} alt="clock-icon"/>
                            <dd>Режим работы</dd>
                            <dt>Пн-Вс: 9:00 - 18:00</dt>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
}

export default ContactPage;