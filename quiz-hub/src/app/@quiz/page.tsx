"use client";
import React, { useEffect, useState } from "react";
import useQuiz from "../store";
import { ShuffleIcon } from "@radix-ui/react-icons";

export default function Quiz() {
  const [questions, setQuestion] = useState([]);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const config = useQuiz((state) => state.config);
  const setScore = useQuiz((state) => state.setScore);

  useEffect(() => {
    async function getQuestion() {
      setLoading(true);
      const { results } = await (
        await fetch(
          `https://opentdb.com/api.php?amount=${config.numberOfQuestion}&category=${config.category.id}&difficulty=${config.level}&type=${config.type}`
        )
      )
        // await fetch(
        //   `https://opentdb.com/api.php?amount=${config.numberOfQuestion}&category=${config.category.id}difficulty=${config.level}type=${config.type}`
        // )
        .json();

      let shuffleResults = results.map((e) => {
        let value = [...e.incorrect_answer, e.correct_answer]
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);
        e.answers = [...value];
        return e;
      });
      console.log(shuffleResults);
      setQuestion([...shuffleResults]);
      setLoading(false);
    }

    getQuestion;
  });

  return (
    <section className="justify-center flex flex-col  items-center mt-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Question Number
        <span className="text-blue-600 dark:text-blue-500"> #1</span>.
      </h1>
      <p className="text-xl">Score: 0</p>
      <section className="shadow-2xl my-10 p-10 w-[90%] rounder-lg flext flex-col justify-center item-center shadow-blue-200">
        <h4 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-blue-600 dark:text-blue-500 md:text-4xl lg:text-6xl">
          {questions.length}
        </h4>
        <div className="flex justify-evenly items-center my-10 flex-wrap w-[90%]">
          <button
            type="button"
            className="w-[33%] shadow-blue-200 rounderd-lg shadow-2xl py-3.5 my-4 px-5 mr-2 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none
             bg-white rounded-lg border border-blue-600 hover:bg-blue-600
             hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800
              dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
          <button
            type="button"
            className="w-[33%] shadow-blue-200 rounderd-lg shadow-2xl py-3.5 my-4 px-5 mr-2 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none
             bg-white rounded-lg border border-blue-600 hover:bg-blue-600
             hover:text-white focus:z-10 focus:ring-4
              focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
               dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
          <button
            type="button"
            className="w-[33%] shadow-blue-200 rounderd-lg shadow-2xl py-3.5 my-4 px-5 mr-2 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none
             bg-white rounded-lg border border-blue-600 hover:bg-blue-600
             hover:text-white focus:z-10 focus:ring-4
              focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
               dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
          <button
            type="button"
            className="w-[33%] shadow-blue-200 rounderd-lg shadow-2xl py-3.5 my-4 px-5 mr-2 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-600  hover:bg-blue-600
            hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
          <button
            type="button"
            className="w-[33%] shadow-blue-200 rounderd-lg shadow-2xl py-3.5 my-4 px-5 mr-2 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-600  hover:bg-blue-900
            hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Next
          </button>
        </div>
      </section>
    </section>
  );
}
