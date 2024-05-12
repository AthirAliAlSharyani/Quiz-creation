"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQuizConfig } from "@/app/store";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import questions from "@/app/questions/question"; // Ensure this path is correct

type CategoryType = {
  id: number;
  name: string;
};

export default function DropdownOptions() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [levels, setLevels] = useState<CategoryType[]>([]);
  const [types, setTypes] = useState<CategoryType[]>([]);

  const config = useQuizConfig((state: any) => state.config);
  const addCategory = useQuizConfig((state: any) => state.addCategory);
  const addLevel = useQuizConfig((state: any) => state.addLevel);
  const addType = useQuizConfig((state: any) => state.addType);

  useEffect(() => {
    // Extract unique categories, levels, and types from questions
    const uniqueCategories = Array.from(
      new Set(questions.map((q) => q.question_category))
    ).map((category, index) => ({
      id: index + 1,
      name: category,
    }));
    const uniqueLevels = Array.from(new Set(questions.map((q) => q.level))).map(
      (level, index) => ({
        id: index + 1,
        name: level,
      })
    );
    const uniqueTypes = Array.from(
      new Set(questions.map((q) => q.question_type))
    ).map((type, index) => ({
      id: index + 1,
      name: type,
    }));

    setCategories(uniqueCategories);
    setLevels(uniqueLevels);
    setTypes(uniqueTypes);
  }, []);

  const addQuestionNumber = useQuizConfig(
    (state: any) => state.addQuestionNumber
  );

  return (
    <>
      <div className="relative">
        <input
          type="number"
          defaultValue={"Enter number of questions"}
          max={10}
          min={3}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            addQuestionNumber(e.currentTarget.value ?? "")
          }
          id="floating_outlined"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-purple-900 bg-gray-50 rounded-lg border-1 border-gray-300 appearance-none dark:text-gray-50 dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_outlined"
          className="absolute text-sm text-purple-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          Number of questions
        </label>
      </div>
      <section className="flex justify-evenly items-center py-5">
        <div className="px-7 py-4 border-purple-400 border-2 rounded-xl w-1/3 mx-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex outline-none justify-between w-full">
              {config.category.name || "SELECT CATEGORY"} <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="overflow-y-scroll">
              <DropdownMenuLabel>
                {config.category.name || "SELECT CATEGORY"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category.id}
                  onClick={() => addCategory(category.id, category.name)}
                >
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="px-7 py-4 border-purple-400 border-2 rounded-xl w-1/3 mx-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex outline-none justify-between w-full">
              {config.level || "SELECT LEVEL"} <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                {config.level || "SELECT LEVEL"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {levels.map((level) => (
                <DropdownMenuItem
                  key={level.id}
                  onClick={() => addLevel(level.name)}
                >
                  {level.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="px-7 py-4 border-purple-400 border-2 rounded-xl w-1/3 mx-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex outline-none justify-between w-full">
              {config.type || "SELECT TYPE"} <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                {config.type || "SELECT TYPE"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {types.map((type) => (
                <DropdownMenuItem
                  key={type.id}
                  onClick={() => addType(type.name)}
                >
                  {type.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </>
  );
}
