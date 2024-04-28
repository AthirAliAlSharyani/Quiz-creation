"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import useQuiz from "@/app/store";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { quiz } from "@/app/questions/question";
type CategoryType = {
  id: number;
  name: string;
};

type Question = {
  id: number;
  question_category: string;
  question: string;
  answers: string[];
  correctAnswer: string;
};
const Type = ["True/False", "Multiple Choice"];
const Level = ["Easy", "Medium", "Hard"];

export default function DropOptions() {
  const [questionCategory, setquestion_category] = useState<Question[]>([]);
  const { questions } = quiz;
  //const { question_category } = questions[questionCategory];

  const [categories, setCategories] = useState<Question[]>([]);
  const addCategory = useQuiz((state: any) => state.addCategory);
  const config = useQuiz((state: any) => state.config);
  // Effect to extract and set unique categories from questions on component mount
  useEffect(() => {
    const uniqueCategoryNames = Array.from(
      new Set(questions.map((question) => question.question_category))
    );
    const uniqueCategories = uniqueCategoryNames.map((name) => ({
      name: name,
    }));
    setCategories(uniqueCategories);
  }, []);

  const addLevel = useQuiz((state: any) => state.addLevel);
  const addType = useQuiz((state: any) => state.addType);

  // useEffect(() => {
  //   async function fetchCategory() {
  //     const { trivia_categories } = await (
  //       await fetch("https://opentdb.com/api_category.php")
  //     ).json();
  //     setCategories([...trivia_categories]);
  //   }
  //   fetchCategory();
  // });

  const [selectedCategory, setSelectedCategory] = useState("");

  // Handle change event from the dropdown
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <section className="flex justify-evenly items-center py-5 w-full">
      <div className="px-7 py-4 w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex outline-none justify-between w-full px-4 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-gray-100">
            {!setSelectedCategory ? setSelectedCategory : "Select Category"}
            <ChevronDownIcon />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuSeparator />
            {categories.map((category) => (
              <DropdownMenuItem
                key={category.name}
                onClick={() => addCategory(category.id, category.name)}
              >
                {category.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="px-7 py-4 w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex outline-none justify-between w-full px-10 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-gray-100">
            {config.level ? config.level : "SELECT LEVEL "} <ChevronDownIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Level</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Level.map((e) => (
              <DropdownMenuItem onClick={() => addLevel(e)} key={e}>
                {e}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="px-7 py-4 w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex outline-none justify-between w-full px-10 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-gray-100">
            {config.type ? config.type : " SELECT TYPE "} <ChevronDownIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Type</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Type.map((e) => (
              <DropdownMenuItem onClick={() => addType(e)} key={e}>
                {e}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
}
