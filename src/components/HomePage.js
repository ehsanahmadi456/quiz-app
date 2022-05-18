import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Styles
import styles from "./HomePage.module.css";

// Icons
import icon1 from "../assest/icons/Ellipse-64.svg";
import icon2 from "../assest/icons/Group-226.svg";
import icon3 from "../assest/icons/Vector-34.svg";

const HomePage = () => {

    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    const clickHandler = () => {
        setAnimate(true);
        setTimeout(() => {
            navigate("/quiz")
        }, 900);
    }

    return (
        <div className={styles.container}>
            <div className={animate ? styles.animationCard : styles.card}>
                <p className={styles.headCard}>Quiz</p>
                <div className={styles.mainCard}>
                    <img className={styles.icon1} src={icon1} alt="image" />
                    <img className={styles.icon2} src={icon2} alt="image" />
                    <img className={styles.icon3} src={icon3} alt="image" />
                    <p className={styles.text}>Are you ready?</p>
                    <button className={styles.buttonSubmit} onClick={clickHandler}>Yes</button>
                </div>
                <p className={styles.footerCard}>Lets to start Quiz!</p>
            </div>
        </div>
    );
};

export default HomePage;