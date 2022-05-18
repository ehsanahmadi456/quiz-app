import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Styles
import styles from "./HomePage.module.css";

const Result = () => {

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
                    <span>Your Question finished</span>
                    <p>{}/{}</p>
                </div>
                <p className={styles.footerCard}>Lets to start Quiz!</p>
            </div>
        </div>
    );
};

export default Result;