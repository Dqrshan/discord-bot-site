/** @format */

"use client";

import Link from "next/link";
import React, { Fragment } from "react";
import {
    FaGithub,
    FaPaperPlane,
    FaDiscord,
    FaUpload,
    FaGem
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";

type Props = {};

function Header({}: Props) {
    return (
        <header className="sticky top-0 z-20 text-slate-400 body-font backdrop-blur-md backdrop-brightness-75 shadow-lg">
            <div className="container mx-auto md:flex hidden flex-wrap p-3 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <a className="mr-5 head-link">Invite</a>
                    <a className="mr-5 head-link">Support</a>
                    <a className="mr-5 head-link">Vote</a>
                    <a className="head-link">Premium</a>
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg"
                        alt="Logo"
                        className="w-12 h-12 rounded-full"
                    />
                    <span className="ml-3 text-2xl font-semibold tracking-wider uppercase xl:block lg:hidden">
                        Discord Bot
                    </span>
                </a>
                <div className="inline-flex lg:w-2/5 lg:justify-end ml-5 lg:ml-0">
                    <Link
                        href={"https://github.com/Dqrshan/discord-bot-site"}
                        target="_blank"
                    >
                        <button className="bg-slate-800 py-1 px-3 focus:outline-none hover:bg-inherit rounded-2xl text-base mt-4 md:mt-0 gap-2 border-2 border-slate-800 ease shadow-lg">
                            <span className="inline-flex py-1 px-3 gap-2 justify-center items-center">
                                <FaGithub />
                                <p className="text-lg">GitHub</p>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* mobile menu */}
            <Menu as="div">
                <div className="container mx-auto md:hidden flex flex-wrap p-3 flex-row items-center justify-between">
                    <a className="flex order-first lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg"
                            alt="Logo"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="ml-3 text-lg font-semibold tracking-wider uppercase xl:block lg:hidden">
                            Discord Bot
                        </span>
                    </a>
                    <Menu.Button className={"text-white text-xl"}>
                        <FiMenu />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Menu.Items className="absolute z-20 gap-y-2 right-0 mt-2 mr-2 origin-top-right rounded-lg shadow-lg focus:outline-none bg-gradient-to-br from-slate-500 to-slate-400">
                        <div className="flex flex-col text-left p-2">
                            <Menu.Item>
                                <Link
                                    href="https://darshan.studio"
                                    target="_blank"
                                    className="head-menu"
                                >
                                    <FaPaperPlane />
                                    <p>Invite</p>
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link
                                    href="https://darshan.studio"
                                    target="_blank"
                                    className="head-menu"
                                >
                                    <FaDiscord />
                                    <p>Support</p>
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link
                                    href="https://darshan.studio"
                                    target="_blank"
                                    className="head-menu"
                                >
                                    <FaUpload />
                                    <p>Vote</p>
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link
                                    href="https://darshan.studio"
                                    target="_blank"
                                    className="head-menu"
                                >
                                    <FaGem />
                                    <p>Premium</p>
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link
                                    href="https://github.com/Dqrshan/discord-bot-site"
                                    target="_blank"
                                    className="head-menu"
                                >
                                    <FaGithub />
                                    <p>GitHub</p>
                                </Link>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </header>
    );
}

export default Header;
