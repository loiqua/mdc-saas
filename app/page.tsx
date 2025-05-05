"use client";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { Cursor, Typewriter } from "react-simple-typewriter";
import ButtonProvider from "./components/ButtonProvider";
export default function Home() {
  return (
    <section className="flex items-center justify-center h-screen w-full mx-auto flex-col gap-4">
      <Image
        width={100}
        height={100}
        alt="Logo de la Minute De Code"
        src={logo}
        className="mb-4 object-contain"
      />
      <h1 className="text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center">
        <Typewriter
          typeSpeed={50}
          words={["welcome", "Bienvenue", "Tongasoa"]}
          loop={0}
        />
        <span>
          <Cursor />
        </span>
      </h1>
      <p className="text-center text-gray-500 text-lg md:text-xl">
        join us in this adventure
      </p>
      <ButtonProvider />
    </section>
  );
}
