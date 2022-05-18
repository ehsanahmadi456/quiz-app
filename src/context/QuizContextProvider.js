import React, { useState, createContext, Children } from 'react';

export const QuizContext = createContext();

const QuizContextProvider = ({children}) => {

    const [question, setQuestion] = useState([
        {
            qs: "A: Which of this is not a programming language?",
            option1: "PHP",
            option2: "JavaScript",
            option3: "MC-01",
            option4: "Python",
            answer: "option3",
        },
        {
            qs: "B: What year was JavaScript launched?",
            option1: "1995",
            option2: "1998",
            option3: "2001",
            option4: "1996",
            answer: "option1",
        },
        {
            qs: "C: Which of this is not a javascript framework?",
            option1: "Vue",
            option2: "Java",
            option3: "React",
            option4: "Angular",
            answer: "option2",
        },
        {
            qs: "D: Which language runs in a web browser?",
            option1: "JavaScript",
            option2: "C",
            option3: "Java",
            option4: "Python",
            answer: "option4",
        }
    ]);

    return (
        <QuizContext.Provider value={question}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizContextProvider;