import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

// Styles
import styles from "./Result.module.css";

// Context
import { QuizContext } from '../context/QuizContextProvider';

const Result = () => {

    const {question, score, setScore} = useContext(QuizContext);
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    const clickHandler = () => {
        setScore(0);
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
                    <div className={styles.score}>
                        <span>Your Question finished</span>
                        <p>{score}/4</p>
                    </div>
                    <div className={styles.play}>
                        <span>Do you want to play again?</span>
                        <button onClick={clickHandler}>Yes</button>
                    </div>
                </div>
                <p className={styles.footerCard}>Result!</p>
            </div>
        </div>
    );
};

export default Result;