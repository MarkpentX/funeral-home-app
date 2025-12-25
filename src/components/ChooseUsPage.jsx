import React from 'react';
import checkMarkIcon from '../../public/imgs/check-mark.svg'
import classes from './ChooseUsPage.module.css'

function ChooseUsPage() {
    const choose_us = [
        {
            name: "Высокое качество",
            text: "Используем только натуральный гранит и мрамор высшего качества из лучших месторождений"
        },
        {
            name: "Индивидуальный подход",
            text: "Создаем уникальные памятники по вашему эскизу с учетом всех пожеланий"
        },
        {
            name: "Гарантия качества",
            text: "Предоставляем гарантию на все наши изделия и профессиональный монтаж"
        }
    ];

    return (
        <section className={classes.chooseUsContainer}>
            <h2>Почему выбирают нас</h2>

            <ul className={classes.chooseItemsContainer}>
                {choose_us.map(item => (
                    <li>
                        <img src={checkMarkIcon} alt="check-mark-icon"/>
                        <h4>{item.name}</h4>
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ChooseUsPage;