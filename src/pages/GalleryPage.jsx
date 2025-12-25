import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../layout/Header.jsx";
import classes from "./GalleryPage.module.css"

function GalleryPage() {
    const [categories, setCategories] = useState([]);
    const [images, setImages] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (activeCategory) {
            fetchImagesByCategory(activeCategory);
        }
    }, [activeCategory]);

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://funeralapi.onrender.com/api/v1/gallary/');
            const validCategories = response.data.filter(category => category && category.trim() !== '');
            setCategories(validCategories);
            if (validCategories.length > 0 && !activeCategory) {
                setActiveCategory(validCategories[0]);
            }
        } catch (error) {
            console.error('Ошибка при загрузке категорий:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchImagesByCategory = async (categoryName) => {
        try {
            setLoading(true);
            const response = await axios.get(`https://funeralapi.onrender.com/api/v1/gallary/${categoryName}`);
            if (response.data && response.data.length > 0) {
                const allImages = response.data.flatMap(gallery =>
                    gallery.images.map(img => ({
                        ...img,
                        category: gallery.category
                    }))
                );
                setImages(allImages);
            } else {
                setImages([]);
            }
        } catch (error) {
            console.error('Ошибка при загрузке изображений:', error);
            setImages([]);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <>
            <Header/>
            <div className={classes.colorContainer}>
                <section className={classes.galleryContainer}>
                    <h1>Галерея Памятников от «Ритуал-Регион»</h1>
                    <a href="tel:+78125094189" className={classes.consultationButton}>
                        Бесплатная консультация
                    </a>

                    <ul className={classes.categoryContainer}>
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className={`${classes.categoryItem} ${activeCategory === category ? classes.selectedCategory : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>

                    {loading && <div className={classes.loading}>Загрузка...</div>}

                    <ul className={classes.imgsContainer}>
                        {images.length > 0 ? (
                            images.map((img) => (
                                <li key={img.id} className={classes.imageItem}>
                                    <img
                                        src={img.url}
                                        alt={`Изображение ${img.id}`}
                                        className={classes.galleryImage}
                                    />
                                </li>
                            ))
                        ) : (
                            !loading && <li className={classes.noImages}>Нет изображений для этой категории</li>
                        )}
                    </ul>
                </section>
            </div>
        </>
    );
}

export default GalleryPage;