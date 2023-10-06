import Link from "next/link";
import React from "react";
import { GiGraduateCap, GiSkills } from "react-icons/gi";
import { MdSportsSoccer } from "react-icons/md";

const Aof = () => {
  return (
    <section className=" dark:bg-zinc-950  bg-slate-300 pb-20">
      <main className="container py-20">
        <h2 className=" text-2xl md:text-3xl font-semibold text-center uppercase">
          Areas Of Focus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-5 lg:gap-20 items-center justify-between lg:px-10 mt-28">
          <div className="relative h-full justify-between dark:bg-white dark:text-black bg-white text-center flex flex-col gap-4 pt-20">
            <span className="text-white p-5 bg-transparent absolute text-[60px] w-full flex justify-center items-center -top-16">
              <div className="bg-purple-500 p-5 rounded-full">
                <GiGraduateCap classname="" />
              </div>
            </span>
            <h3 className="text-[20px] sm:text-[30px] text-foreground dark:text-gray-900 font-semibold uppercase">
              Education
            </h3>
            <p className="px-4">
              Working to advance education resources in our community.
            </p>
            <Link
              href="/"
              className="py-4 text-white bg-purple-500 hover:bg-purple-400"
            >
              Learn More
            </Link>
          </div>
          <div className="relative h-full justify-between dark:bg-white dark:text-black bg-white text-center flex flex-col gap-4 pt-20">
            <span className="text-white p-5 bg-transparent absolute text-[60px] w-full flex justify-center items-center -top-16">
              <div className="bg-orange-500 p-5 rounded-full">
                <GiSkills classname="" />
              </div>
            </span>

            <h3 className="text-[20px] sm:text-[30px] text-foreground dark:text-gray-900 font-semibold uppercase">
              Empowerment
            </h3>
            <p className="px-4">Via the G-Skill training scheme.</p>
            <Link
              href="/"
              className="py-4 text-white bg-orange-500 hover:bg-orange-400"
            >
              Learn More
            </Link>
          </div>
          <div className="relative h-full justify-between dark:bg-white dark:text-black bg-white text-center flex flex-col gap-4 pt-20">
            <span className="text-white p-5 bg-transparent absolute text-[60px] w-full flex justify-center items-center -top-16">
              <div className="bg-blue-500 p-5 rounded-full">
                <MdSportsSoccer classname="" />
              </div>
            </span>

            <h3 className="text-[20px] sm:text-[30px] text-foreground dark:text-gray-900 font-semibold uppercase">
              Sports
            </h3>
            <p className="px-4">
              Through the anuual Bayelsa State Unity football tournament.
            </p>
            <Link
              href="/"
              className="py-4 text-white bg-blue-500 hover:bg-blue-400"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Aof;
