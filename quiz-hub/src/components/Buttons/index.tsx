"use client";
import React from "react";
import { useQuizConfig } from "@/app/store";

export default function Button() {
  const changeStatus = useQuizConfig((state: any) => state.changeStatus);
  const handleStart = () => {
    changeStatus("start");
  };
  return (
    <>
      <button
        onClick={handleStart}
        type="button"
        className="m-auto text-lg font-medium focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg mb-2 mt-4 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 py-4 px-10 w-1/2 h-16"
      >
        Start Quiz
      </button>
    </>
  );
}
