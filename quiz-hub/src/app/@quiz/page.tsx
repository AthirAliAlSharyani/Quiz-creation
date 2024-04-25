"use client";
import React, { useEffect, useState } from "react";
import useQuiz from "../store";
import { quiz } from "../questions/question";

export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };
  return (
    <>
      <section className="justify-center flex flex-col  items-center mt-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Question Number :
          <span className="text-blue-600 dark:text-blue-500">
            {" "}
            {activeQuestion}
          </span>
          .
        </h1>
        <p className="text-xl">Score: {(result.score / 25) * 100}%</p>
        {!showResult ? (
          <section className="shadow-2xl my-10 p-10 w-[90%] rounder-lg flext flex-col justify-center item-center shadow-blue-200">
            <h4 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-blue-600 dark:text-blue-500 md:text-4xl lg:text-6xl">
              {questions[activeQuestion].question}
            </h4>

            <div className="flex justify-evenly items-center my-10 flex-wrap w-[90%]">
              {answers.map((answer, idx) => (
                <button
                  onClick={() => onAnswerSelected(answer, idx)}
                  key={idx}
                  type="button"
                  className="w-[33%] shadow-blue-200 rounderd-lg shadow-2xl py-3.5 my-4 px-5 mr-2 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none
             bg-white rounded-lg border border-blue-600 hover:bg-blue-600
             hover:text-white focus:z-10 focus:ring-4 focus:ring-blue-800 dark:focus:ring-gray-700 dark:bg-gray-800
              dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  {answer}
                </button>
              ))}
              {checked ? (
                <button
                  onClick={nextQuestion}
                  type="button"
                  className="w-[33%] shadow-blue-200 rounderd-lg shadow-2xl py-3.5 my-4 px-5 mr-2 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-600  hover:bg-blue-900
            hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  {activeQuestion === question.length - 1 ? "Finish" : "Next"}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  type="button"
                  className="  w-[33%] shadow-blue-200 rounderd-lg shadow-2xl py-3.5 my-4 px-5 mr-2 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-600  hover:bg-blue-900
                hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  {activeQuestion === question.length - 1 ? "Finish" : "Next"}
                </button>
              )}
            </div>
          </section>
        ) : (
          <>
            <p>
              total questio: <span>{questions.length - 1}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
          </>
        )}
      </section>
    </>
  );
}
