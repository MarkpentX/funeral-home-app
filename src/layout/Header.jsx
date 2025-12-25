import React, { useState, useEffect } from 'react';
import classes from './Header.module.css';
import logoIcon from '/public/imgs/logo.png';
import telegramIcon from '/public/imgs/telegram.svg';
// import maxIcon from '/public/imgs/max.svg';
import menuIcon from '/public/imgs/menu.svg';
import crossIcon from '/public/imgs/cross.svg';
import { Link } from "react-router-dom";

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        if (mobileOpen) {
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.classList.remove('mobile-menu-open');
        }
        return () => document.body.classList.remove('mobile-menu-open');
    }, [mobileOpen]);

    return (
        <>
            <header className={classes.headerContainer}>
                <Link to="/">
                    <img src={logoIcon} alt="logo" className={classes.logoIcon} />
                </Link>

                <ul className={classes.contactsContainer}>
                    <li><a href="https://t.me/RitualPamyatniki"><img src={telegramIcon} alt="tg"/></a></li>
                    {/*<li><a href="https://max.ru"><img src={maxIcon} alt="max"/></a></li>*/}
                </ul>

                <address className={classes.addressContainer}>
                    Ростов-на-Дону пр-т. Буденновский 61/12 <br/>
                    Тел: +78125094189 <br/>
                    <a href="mailto:ritualpamyatniki@inbox.ru">ritualpamyatniki@inbox.ru</a><br/>
                    Часы работы: <span>Круглосуточно</span>
                </address>

                <a className={classes.tellAgent} href="tel:+78125094189">Вызвать Агента</a>

                <nav className={classes.navigationContainer}>
                    <ul className={classes.menuLinks}>
                        <li className={classes.menuItem}><Link to="/">Главная</Link></li>
                        <li className={classes.menuItem}><Link to="/gallery">Галерея</Link></li>
                        <li className={classes.menuItem}><Link to="/monuments">Памятники</Link></li>
                        <li className={classes.menuItem}><Link to="/contact">Контакты</Link></li>
                    </ul>
                </nav>

                <button
                    className={classes.menuButton}
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <img src={menuIcon} alt="menu"/>
                </button>

                {mobileOpen && (
                    <div className={classes.mobileMenu}>
                        <button className={classes.crossButton} onClick={() => setMobileOpen(false)}>
                            <img src={crossIcon} alt="close"/>
                        </button>

                        <ul className={classes.mobileMenuList} onClick={e => e.stopPropagation()}>
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/gallery">Галерея</Link></li>
                            <li><Link to="/monuments">Памятники</Link></li>
                            <li><Link to="/contact">Контакты</Link></li>
                        </ul>
                    </div>
                )}
            </header>
        </>
    );
}

export default Header;