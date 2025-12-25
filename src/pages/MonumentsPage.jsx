import React, { useEffect, useState } from 'react';
import classes from './MonumentsPage.module.css';
import axios from 'axios';
import Header from "../layout/Header.jsx";
import ModalWindow from "../components/ModalWindow.jsx";

function MonumentsPage() {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleModalForm(){
        setIsModalOpen(!isModalOpen);
    }

    // Получение категорий
    async function handleGetCategories() {
        try {
            const response = await axios.get('https://funeralapi.onrender.com/api/v1/product/categories');
            const cats = response.data;
            setCategories(cats);
            if (cats.length > 0) {
                setActiveCategory(cats[0]); // по умолчанию первая категория
            }
        } catch (error) {
            console.error('Ошибка при получении категорий:', error);
        }
    }

    // Получение продуктов по категории
    async function handleGetProducts(category) {
        try {
            const response = await axios.get(`https://funeralapi.onrender.com/api/v1/product/${category}`);
            setProducts(response.data);
        } catch (error) {
            console.error('Ошибка при получении продуктов:', error);
        }
    }

    // При первом рендере — получить категории
    useEffect(() => {
        handleGetCategories();
    }, []);

    // При изменении активной категории — получить продукты
    useEffect(() => {
        if (activeCategory) {
            handleGetProducts(activeCategory);
        }
    }, [activeCategory]);

    return (
        <>
            <Header/>

            <section className={classes.MonumentsPageContainer}>

                <div className={classes.descriptionContainer}>
                    <h2>Памятники на могилу в Липецк, Тамбов, Ярославль, Рязань, Калуга, Казань, Волгоград</h2>
                    <p>Наша компания «Ритуал-регион» работает в сфере изготовления и установки надгробных сооружений, памятников более 10 лет. За это время мы смогли создать сплоченный творческий коллектив, состоящий из проектировщиков, дизайнеров, архитекторов, художников, скульпторов, каменотесов, монтажников, которые воплотят в камне всю Вашу скорбь о близких и родных людях, ушедших из жизни. Принципиальной концепцией нашей работы является индивидуальный подход к каждому заказчику. Учитывая все пожелания заказчика, мы спроектируем, изготовим и установим на кладбище надгробное сооружение любой сложности, от ритуальной таблички до самого сложного мемориального комплекса. Мы предложим Вам изделия из 10 видов камня и «Габбро», изделия из натурального камня для декора памятников, накладную фурнитуру и другие аксессуары религиозной тематики, гранитные и металические ограждения, скамейки, фотокерамику (фарфор), что является одним из самых популярных элементов оформления памятников, позволяющим сохранить память о близком человеке в идеальном качестве на долгие годы. Художники-граверы высшего класса оформят памятник, сделают высокохудожественный портрет, в том числе и цветной, шрифтовики вырубят в камне буквы обычные, глубокой рубки, рельефные, по желанию покроют сусальным золотом. Каменотесы и резчики по камню создадут памятник любой формы и сложности, облагородят камень любыми типами фаски. Профессиональная бригада монтажников установит памятник на любом кладбище в вашем доме региона.</p>
                    <button onClick={handleModalForm}>Бесплатная консультация</button>
                </div>

                <div className={classes.colorDiv}>
                    <div className={classes.categoriesContainer}>
                        <h2>Категории памятников</h2>
                        <ul className={classes.categoryContainer}>
                            {categories.map((item) => (
                                <li
                                    key={item}
                                    onClick={() => setActiveCategory(item)}
                                    className={`${classes.categoryItem} ${activeCategory === item ? classes.selectedCategory : ''}`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={classes.productsContainer}>
                        <h2>Макеты памятников</h2>
                        <p>В наличии множественный выбор элитных памятников. На странице предоставлены все макеты. </p>

                        <section className={classes.productsGrid}>
                            {products.map((product) => (
                                <article key={product.id} className={classes.productGridItem}>
                                    <img src={product.img} alt={product.title} />
                                    <h4>{product.title}</h4>
                                    <h3>от {product.price.toLocaleString('ru-RU')} ₽</h3>
                                    <button onClick={handleModalForm}>Заказать</button>
                                </article>
                            ))}
                        </section>
                    </div>
                </div>
                {isModalOpen && (
                    <ModalWindow onClose={handleModalForm} />
                )}
            </section>
        </>
    );
}

export default MonumentsPage;
