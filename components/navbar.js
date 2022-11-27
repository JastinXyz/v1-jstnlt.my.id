import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { MdCode } from "react-icons/md";
import { IoIosPaperPlane, IoMdHome, IoMdPerson } from "react-icons/io";
import Logo from "./dust/logo";

export default function Navbar() {
    const [open, setOpen] = useState({
        class: "top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex",
        state: false
    });

    const [dark, setDark] = useState(false);
    const themeSwitch = () => {
      let html = document.querySelector("html");
      let themeNow = html.getAttribute("data-theme");
      if(!dark && themeNow !== "dracula") {
        html.setAttribute("data-theme", "dracula");
        localStorage.setItem("theme", "dracula");
        setDark(true);
      } else {
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        setDark(false);
      }
    }

    useEffect(() => {
      let theme = localStorage.getItem("theme");
      if (theme === "dracula") {
        document.querySelector("#sunIcon").classList.remove("swap-off");
        document.querySelector("#sunIcon").classList.add("swap-on");
        document.querySelector("#moonIcon").classList.remove("swap-on");
        document.querySelector("#moonIcon").classList.add("swap-off");
      }

      document.querySelector("html").setAttribute("data-theme", theme);
      setDark(theme === "dracula");
    }, []);

    return (
      <>
        <nav className="navbar bg-base-100 fixed z-[999] h-24 select-none px-6">
          <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
            <div className="flex items-center justify-start w-1/4 h-full pr-4">
              <Logo />
            </div>
            <div className={open.class}>
              <div className="flex-col w-full h-auto overflow-hidden bg-base-100 rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-base-900 md:hidden"
                >
                  JstnLT<span className="text-indigo-600">.</span>
                </Link>
                <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                  <a
                    href="#"
                    id="tohome"
                    className="text-indigo-600 transition delay-100 inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-base-700 hover:text-indigo-700 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                  >
                    <IoMdHome className="inline w-5 h-5 md:w-auto md:h-auto" />{" "}
                    Home
                  </a>
                  <a
                    href="#about"
                    id="toabout"
                    className="transition delay-100 inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-base-700 hover:text-indigo-700 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                  >
                    <IoMdPerson className="inline w-5 h-5 md:w-auto md:h-auto" />{" "}
                    About
                  </a>
                  <a
                    href="#projects"
                    id="toprojects"
                    className="transition delay-100 inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-base-700 hover:text-indigo-700 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                  >
                    <MdCode className="inline w-5 h-5 md:w-auto md:h-auto" />{" "}
                    Projects
                  </a>
                  <a
                    href="#contact"
                    id="tocontact"
                    className="transition delay-100 inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-base-700 hover:text-indigo-700 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                  >
                    <IoIosPaperPlane className="inline w-5 h-5 md:w-auto md:h-auto" />{" "}
                    Contact
                  </a>
                </div>
                <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                  <a
                    href="/github"
                    className="group w-full px-6 py-2 mb-2 md:mb-0 mr-0 text-base-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto"
                  >
                    <FaGithub className="w-6 h-6 inline md:mr-0 mr-2 group-hover:text-gray-600 transition ease-in-out delay-100 duration-100" />
                    <span className="md:hidden">Github</span>
                  </a>
                  <label className="swap swap-rotate hidden md:grid">
                    <input
                      type="checkbox"
                      className="themeSwitch"
                      id="themeSwitch1"
                      onChange={themeSwitch}
                      title="Theme Switch"
                    />
                    <svg
                      id="sunIcon"
                      className="swap-off fill-current w-9 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <svg
                      id="moonIcon"
                      className="swap-on fill-current w-9 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <label className="swap swap-rotate grid md:hidden mr-12">
              <input
                type="checkbox"
                className="themeSwitch"
                id="themeSwitch2"
                onChange={themeSwitch}
                title="Theme Switch"
              />
              <svg
                id="sunIcon"
                className="swap-off fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                id="moonIcon"
                className="swap-on fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <div
              onClick={() => {
                open.state
                  ? setOpen({
                      class: open.class.replace("flex fixed", "hidden"),
                      state: false,
                    })
                  : setOpen({
                      class: open.class.replace("hidden", "flex fixed"),
                      state: true,
                    });
              }}
              className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100"
            >
              <svg
                className={open.state ? "hidden" : "w-6 h-6 text-black"}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
                x-cloak=""
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg
                className={open.state ? "w-6 h-6 text-black" : "hidden"}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                x-cloak=""
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
        </nav>
      </>
    );
}