import React from 'react';
import classes from './ContactUs.module.css'

function ContactUs() {
    return (
        <section className={classes.contactUsContainer}>
            <h2>Готовы заказать памятник?</h2>
            <p>Свяжитесь с нами для консультации и расчета стоимости</p>
            <a href="tel+78125094189">Связаться с нами</a>
        </section>
    );
}

export default ContactUs;