import React, { useContext } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

// Components
import HomePage from './components/HomePage';
import Quiz from './components/Quiz';
import Result from './components/Result';

// Context
import QuizContextProvider from './context/QuizContextProvider';

function App() {
  return (
    <QuizContextProvider>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </QuizContextProvider>
  );
}

export default App;
