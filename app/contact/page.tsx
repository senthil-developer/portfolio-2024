"use client";

import EarthCanva from "@/components/EarthCanva";

import React, { useActionState, useRef } from "react";
import { sendMail } from "@/server/email";

const ContactPage = () => {
  return (
    <div className="flex h-full w-full  items-center justify-center overflow-y-hidden">
      <div className="flex h-screen w-full items-center justify-center px-4 pt-8">
        <form
          action={sendMail}
          className="glass-blur relative  flex w-full max-w-[600px] flex-col rounded-2xl  p-2 after:rounded-inherit
"
        >
          <div className="pt-8 ">
            <h1 className="group flex w-fit flex-col rounded-md text-2xl hover:transition-all hover:duration-300">
              Contact
              <span className="w-[20%] rounded-md border-b-4 border-[#f83bff] duration-300 group-hover:w-[80%] group-hover:transition-all group-hover:duration-300" />
            </h1>

            <p className="py-4 text-lg">
              Submit the form below or shoot me{" "}
              <a
                className="inline-block bg-gradient-to-r from-[#D9AFD9] from-10% to-[#97D9E1] to-100% bg-clip-text font-bold text-transparent"
                href="mailto:senthildeveloper4@gmail.com"
              >
                E-mail
              </a>
            </p>
          </div>
          <input
            className=" bg-transparent  p-2 "
            type="text"
            placeholder="Name"
            name="user_name"
            required
          />
          <input
            className="my-4 bg-transparent  p-2"
            type="email"
            placeholder="E-mail"
            name="user_email"
            required
          />
          <textarea
            placeholder="Message"
            className=" bg-transparent  p-2"
            required
            name="message"
            rows={10}
          ></textarea>
          <button className="w-30 mx-auto my-8 rounded-full bg-[#f83bff]/80 p-2 px-4 hover:bg-[#f83bff]/50 hover:transition-all hover:duration-300 ">
            Contact me
          </button>
        </form>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-[100%]">
        <EarthCanva />
      </div>
    </div>
  );
};

export default ContactPage;
