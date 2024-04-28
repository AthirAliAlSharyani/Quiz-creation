import { Input } from "@/components/ui/input";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

import InputBox from "@/components/InputBox";

import Button from "@/components/Buttons";
import DropOptions from "@/components/DropdownOptions";
export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center my-10 ">
      {/* //from flowbite */}
      <h1 className="mb-3 text-4xl font-extrabold leading-none tracking-tight text-purple-600 md:text-5xl lg:text-6xl dark:text-white mt-5">
        Welcome to Quiz Creator...
      </h1>
      <section className="p-10 my-10 rounded-lg shadow-xl w-[65%] border-2 border-purple-300">
        {/* Flowbite? */}
        <InputBox />

        <DropOptions />
        <div className=" flex items-center justify-center">
          <Button />
        </div>
      </section>
    </section>
  );
}
