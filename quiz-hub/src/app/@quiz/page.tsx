"use client";
// Import necessary libraries and components
import { useEffect, useState } from "react";
import { useQuizConfig } from "../store"; // Make sure this path is correct and the store is properly configured
import { Skeleton } from "@/components/ui/skeleton";
import { Player } from "@lottiefiles/react-lottie-player";
import questionsData from "@/app/questions/question"; // Ensure this path is correct

export default function Quiz() {
  // State for storing quiz questions and tracking quiz status
  const [questions, setQuestions] = useState<any>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Access configuration from the global state
  const config = useQuizConfig((state: any) => state.config);

  // Effect to load and filter questions based on configuration
  useEffect(() => {
    setLoading(true);
    const filteredQuestions = questionsData
      .filter(
        (q) =>
          q.level === config.level &&
          q.question_category === config.category.name &&
          q.question_type === config.type
      )
      .slice(0, config.numberOfQuestion);

    setQuestions(filteredQuestions);
    setLoading(false);
  }, [config.category, config.level, config.numberOfQuestion, config.type]);

  // Function to handle answer selection
  const [score, setScore] = useState(0);

  const [answeredCorrectly, setAnsweredCorrectly] = useState(
    Array(questions.length).fill(false)
  );

  const [lastAnswers, setLastAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isAnswerCorrect = selectedAnswer === currentQuestion.correctAnswer;

    // Check if this question was previously answered (lastAnswers[currentQuestionIndex] is not null)
    // and if the last answer was correct
    if (lastAnswers[currentQuestionIndex] !== null) {
      if (
        lastAnswers[currentQuestionIndex] === currentQuestion.correctAnswer &&
        !isAnswerCorrect
      ) {
        // If previously correct but now incorrect, decrease score
        setScore((prevScore) => prevScore - 1);
      } else if (
        lastAnswers[currentQuestionIndex] !== currentQuestion.correctAnswer &&
        isAnswerCorrect
      ) {
        // If previously incorrect but now correct, increase score
        setScore((prevScore) => prevScore + 1);
      }
    } else {
      // If this is the first answer given for this question
      if (isAnswerCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
    }

    // Update the last answer given for this question
    const updatedLastAnswers = [...lastAnswers];
    updatedLastAnswers[currentQuestionIndex] = selectedAnswer;
    setLastAnswers(updatedLastAnswers);
  };
  // Function to handle moving to the next question or completing the quiz
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  // Render component based on the current state
  return (
    <section className="flex flex-col justify-center items-center p-20">
      {loading ? (
        <div className="flex flex-col">
          <Skeleton className="w-[600px] h-[60px] my-10 rounded-sm" />
          <Skeleton className="w-[600px] h-[500px] rounded-sm" />
        </div>
      ) : isQuizCompleted ? (
        <div className="flex flex-col justify-center items-center">
          <Player
            src="https://assets6.lottiefiles.com/packages/lf20_touohxv0.json"
            className="player"
            loop
            autoplay
            style={{ height: "400px", width: "400px" }}
          />
          <h1 className="mt-10 text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Your score:
            <span className="font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
              {score}
            </span>
          </h1>
          <button
            onClick={() => window.location.reload()}
            className="bg-purple-600 hover:bg-purple-400 my-10 text-white font-semibold py-2 px-10 border border-purple-400 rounded shadow"
          >
            Start Over
          </button>
        </div>
      ) : questions.length > 0 ? (
        <div className="shadow-2xl my-10 p-10 w-[90%] rounded-lg flex flex-col justify-center items-center shadow-blue-200">
          <h4 className="mb-4 text-center text-xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-4xl text-purple-600 dark:text-purple-500">
            {questions[currentQuestionIndex].question}
          </h4>

          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-purple-900 md:text-5xl lg:text-6xl dark:text-white">
            Question No{" "}
            <span className="text-purple-600 dark:text-purple-500">
              #{currentQuestionIndex + 1}
            </span>
            .
          </h1>

          <div className="flex justify-evenly items-center w-full my-20 flex-wrap">
            {questions[currentQuestionIndex].answers.map((answer, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(answer)}
                // Disable further interaction after an answer is selected
                className={`w-[40%] my-4 bg-white hover:bg-purple-600  focus:bg-lime-300 focus:text-black hover:text-purple-100 text-purple-800 font-semibold py-4 px-4 rounded-lg shadow-xl 
              
             }`}
              >
                {answer}
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            // Enable the "Next" button only if an answer has been selected
            className={`mt-4 bg-purple-600 hover:bg-purple-400 text-white font-semibold py-2 px-10 border border-purple-600 rounded shadow 
    
  }`}
          >
            {currentQuestionIndex + 1 === questions.length ? "Done" : "Next"}
          </button>
        </div>
      ) : (
        <div className="  font-sans text-lg leading-relaxed justify-center border-2 border-cyan-200">
          <center>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-20 h-20 text-red-600 mt-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </center>
          <h2 className=" justify-center m-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 text-3xl">
            You either did not choose any question category
            <br />
            OR there are no available questions for the selected category.
            <br />
            <center> Please try again!</center>
          </h2>
          <center>
            <a href="/">
              {" "}
              <button
                className={`m-10 bg-purple-600 hover:bg-purple-400 text-white font-semibold py-2 px-10 border border-purple-600 rounded shadow `}
              >
                Back
              </button>
            </a>
          </center>
        </div>
        //   <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        //     You either not choose any question category OR no available
        //     questions for the selected category. please try again!
        //   </h2>
        // </div>
      )}
    </section>
  );
}
