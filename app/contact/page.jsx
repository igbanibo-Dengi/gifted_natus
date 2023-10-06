"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { ToastSimple } from "@/components/toastButton";

const page = () => {
  return (
    <main className="container pt-32 pb-20">
      <header className="text-center pb-20">
        <p className="leading-none text-[28px] md:text-[35px] font-bold capitalize text-center">
          Contact
        </p>
      </header>
      <section className="flex w-full flex-col md:flex-row max-w-[1000px] mx-auto gap-10 md:gap-0">
        <div className="flex flex-col gap-4 basis-1/2">
          <div>
            <h2 className="uppercase text-[30px]">posta addreess</h2>
            <p className="capitalize">gifted natus foundation</p>
          </div>
          <div>
            <h2 className="uppercase text-[30px]">TElephone</h2>
            <p className="capitalize">*234 125 2125 255</p>
          </div>
          <div>
            <h2 className="uppercase text-[30px]">email</h2>
            <p className="text-primary">giftednatusfoundation@gmail.com</p>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col gap-5">
          <Input type="name" placeholder="Enter your name" />
          <Input type="email" placeholder="Enter a valid email address" />
          <Input type="phone" placeholder="Enter toyr phone number" />
          <Textarea placeholder="Type your message here." id="message-2" />
          <div className="w-fit">
            <ToastSimple />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
