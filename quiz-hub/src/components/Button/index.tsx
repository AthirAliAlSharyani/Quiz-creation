import React from "react";

export default function Button() {
  return (
    <div>
      <button
        type="button"
        className="px-20 py-3  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg  mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Start Quiz
      </button>
    </div>
  );
}