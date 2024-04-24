"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropOptions from "@/components/dropDownOption";
import Button from "@/components/Button";
import useQuiz from "./store";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center my-10">
      <h1 className=" align-middle mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Welcome to quiz creation!
      </h1>
      <section className="p-10 my-10 rounded-lg shadow-xl w-[75%]">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of question
          </label>
          <input
            type="number"
            defaultValue={10}
            min={0}
            max={20}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Number of question"
            required
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <DropOptions />
          <Button />
        </div>
      </section>
    </section>
  );
}
