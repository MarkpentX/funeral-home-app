import React, {useState} from 'react';
import blueCrossIcon from '../../public/imgs/blue_cross.svg'
import classes from './ModalWindow.module.css'
import axios from "axios";

function ModalWindow({onClose}) {
    const [name, setName] = useState()
    const [phone, setPhone] = useState()

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await axios.post('https://funeralapi.onrender.com/api/v1/product/send-request', {
                name: name,
                phone: phone,
            }
        )
        if (response.status === 200) {
            onClose()
            alert("Заявка успешно подана, ожидайте ответа нашего менеджера в течении 24ч")
        }
    }

    return (
        <div className={classes.modalOverlay} >
            <section className={classes.modalWindowContainer}>
                <img src={blueCrossIcon} alt="blue-cross-icon" onClick={onClose}/>
                <h2 onClick={handleSubmit}>Оставить заявку</h2>

                <form onSubmit={handleSubmit} className={classes.formContainer}>

                    <input type="text" name="name" placeholder="Имя" onChange={(e) => setName(e.target.value)}/>
                    <input type="phone" name="phone" placeholder="Телефон" onChange={(e) => setPhone(e.target.value)}/>

                    <button>Отправить</button>
                </form>

                <p>
                    Нажимая на эту кнопку я соглашаюсь
                    <strong> на обработку персональных данных</strong><
            /p>
            </section>
        </div>
    );
}

export default ModalWindow;