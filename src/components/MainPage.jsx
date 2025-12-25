import React from 'react';
import classes from './MainPage.module.css'
// import mainIcon from '/public/imgs/main.png'
import phoneIcon from '/public/imgs/phone.svg'

function MainPage() {
    return (
        <section className={classes.mainPageContainer}>
            <div className={classes.mainContent}>
                <h1>Бюро «Ритуал-Регион» в Липецк, Тамбов, Ярославль, Рязань, Калуга, Казань, Волгоград</h1>
                <p>
                    Потеря близкого — трудное время, требующее деликатности и надёжной поддержки.
                    Наша компания предоставляет услуги изготовления и установки памятников в Липецке, Тамбове, Ярославле, Рязани, Калуге, Казани и Волгограде.
                    Мы работаем с 2005 года, используя качественные материалы и современное оборудование.
                    Каждый памятник выполняем с уважением к памяти усопшего, соблюдая традиции и учитывая пожелания семьи.
                </p>{/*<img className={classes.mainIcon} src={mainIcon} alt="main-icon"/>*/}
                <a
                    href="tel:+78125094189">
                    <img src={phoneIcon} alt="phone-icon"/>
                    Бесплатная консультация
                </a>
            </div>
        </section>
    );
}

export default MainPage;