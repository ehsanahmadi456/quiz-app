import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

// Styles
import styles from "./Quiz.module.css";

// Context
import { QuizContext } from '../context/QuizContextProvider';

const Quiz = () => {
    
    const {question, score, setScore} = useContext(QuizContext);
    const [complete, setComplete] = useState(true);
    const [number, setNumber] = useState(0);
    const [answerUser, setAnswerUser] = useState("");
    const [animate, setAnimate] = useState(false);
    const exam = question[number];
    const navigate = useNavigate();

    const nextHandler = async () => {
        setNumber(number+1);
        scoreHandler();
    }

    const previousHandler = () => {
        if (number === 1) setComplete(true);
        if (number > 0) {
            setNumber(number-1);
        }
    }

    const scoreHandler = () => {
        if (answerUser === exam.answer) {
            console.log("TRUE");
            setScore(score+1)
        }
    }

    const finishHandler = () => {
        if (answerUser === exam.answer) {
            console.log("TRUE");
            setScore(score+1)
        }
        setTimeout(() => {
            navigate("/result");
        }, 900);
        setAnimate(true);
    }

    return (
        <div className={styles.container}>
            <div className={animate ? styles.animationCard : styles.card}>
                <p className={styles.headCard}>Quiz</p>
                <div className={styles.mainCard} style={{display: "flex", flexDirection: "column"}}>
                    <p className={styles.question}>{exam.qs}</p>

                    <div className={styles.mainQuestions}>
                        <button onClick={() => setAnswerUser("option1")}>{exam.option1}</button>

                        <button onClick={() => setAnswerUser("option2")}>{exam.option2}</button>

                        <button onClick={() => setAnswerUser("option3")}>{exam.option3}</button>

                        <button onClick={() => setAnswerUser("option4")}>{exam.option4}</button>
                    </div>
                </div>
                <div className={styles.buttons}>
                    {
                        number === 3 ? <button className={styles.nextButton} onClick={finishHandler}>Finish</button> :
                        <button className={styles.nextButton} onClick={nextHandler}>Next</button>
                    }
                </div>
                <p className={styles.footerCard}>Answer Question!</p>
            </div>
        </div>
    );
};

export default Quiz;