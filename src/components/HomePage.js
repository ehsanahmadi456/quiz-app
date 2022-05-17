import React from 'react';
import { useNavigate } from "react-router-dom";

// Styles
import styles from "./HomePage.module.css";

const HomePage = () => {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate("/")
    }

    return (
        <div className={styles.card}>
            <p className={styles.headCard}>Quiz</p>
            <div className={styles.mainCard}>
                <p className={styles.text}>Are you ready?</p>
                <button className={styles.buttonSubmit} onClick={clickHandler}>Yes</button>
            </div>
            <p className={styles.footerCard}>Lets to start Quiz!</p>
        </div>
    );
};

export default HomePage;