"use client";
import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { FaCross } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const ContactUs = () => {
  const [formValue, SetFromValue] = useState({
    name: "",
    email: "",
    massage: "",
  });

  const [currentDate, setCurrentDate] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString());
      setCurrentTime(now.toLocaleTimeString());
    };

    updateDateTime();
  }, []);

  // function currentDate() {
  //   const months = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  //   const now = new Date();
  //   const d = now.getDay();
  //   const m = now.getMonth();
  //   const y = now.getFullYear();
  //   const currentDate = `${d}-${months[m]}-${y}`;
  //   return currentDate;
  // }
  const handleChange = (e) => {
    SetFromValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(open);
  return (
    <section
      className={`fixed z-50 ease-in-out transition delay-150  ${
        open ? "bottom-0 " : "-bottom-[60%] hover:-bottom-[56%]"
      }  md:left-[25%] left-0 md:-translate-x-2 md:max-w-[50%] w-full md:w-fit flex justify-center items-center`}
    >
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="w-full rounded-md bg-gray-900 border border-gray-500">
        <div
          className="px-4 py-5 flex cursor-pointer justify-between items-center"
          onClick={() => setOpen(!open)}
        >
          <span>Contact us</span>{" "}
          <span>
            {!open ? (
              <MdKeyboardArrowDown className="w-14" />
            ) : (
              <BsX className="w-14" />
            )}
          </span>
        </div>
        <div className="h-[1px] w-full bg-gray-500"></div>
        <div className="py-8 px-4">
          <div className="mb-5 px-4 text-sm">
            <span className="text-purple">const</span>{" "}
            <span className="text-yellow">contactDetails</span>{" "}
            <span className="text-sky-500">=</span> <span>{"{"}</span>
            <div>
              <div className="text-green">
                <span className="text-red-500">gmail: </span> {"'"}
                23tushar.bawane1996@gmail.com{"'"}
              </div>
              <div className="text-yellow">
                <span className="text-red-500">phone: </span> +918669024423
              </div>
              <div className="text-green">
                <span className="text-red-500">address: </span>
                {"'"}adarsh nagar, ward no.3, sevagram, wardha.{"'"}
              </div>
            </div>
            <span>{"}"}</span>
          </div>
          <p className="px-4 text-sm mb-4">
            Please use the form provided to send me a message. Be sure to
            include your name, email address, and a brief description of your
            inquiry or feedback. I strive to respond to all messages promptly
          </p>
          <code>
            <form onSubmit={handleSubmit}>
              {/* <span className="pb-2">{"{"}</span> */}
              <div className="px-4 flex items-start">
                <span className="me-3">{`[${currentTime}] `} </span>
                <label htmlFor="name" className="text-red-500">
                  name :
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your Name ...."
                  className="min-w-[4rem] bg-transparent border-none focus-visible:border-b  focus-visible:outline-none ms-4"
                  onChange={handleChange}
                />
                <span className="text-white">{","}</span>
              </div>
              <div className="px-4 flex items-start">
                <span className="me-3">{`[${currentTime}] `} </span>

                <label htmlFor="email" className="text-red-500 ">
                  email :
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Enter your email ...."
                  className="min-w-[4rem] bg-transparent border-none focus-visible:border-b  focus-visible:outline-none ms-4"
                  onChange={handleChange}
                />
                <span className="text-white">{","}</span>
              </div>
              <div className="px-4 flex items-start">
                <span className="me-3">{`[${currentTime}] `} </span>

                <label htmlFor="msg" className="text-red-500">
                  massage :
                </label>
                <textarea
                  id="Msg"
                  name="massage"
                  cols={3}
                  placeholder="Enter your massage ...."
                  className="min-w-[16rem] bg-transparent resize-none border-none focus-visible:border-b  focus-visible:outline-none ms-4"
                  onChange={handleChange}
                />
                <span className="text-white">{","}</span>
              </div>
              {/* <span className="pt-2">{"}"}</span> */}
              <div className="py-3 px-4">
                <button type="submit" className="hover:text-yellow">
                  send massage
                </button>
              </div>
            </form>
          </code>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
