/** @format */

import Image from "next/image";
import React from "react";

type Props = {};

function Header({}: Props) {
    return (
        <div>
            <header className="sticky text-neutral-400 bg-neutral-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <a className="mr-5 hover:text-white">Invite</a>
                        <a className="mr-5 hover:text-white">Support</a>
                        <a className="mr-5 hover:text-white">Vote</a>
                        <a className="hover:text-white">Premium</a>
                    </nav>
                    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
                        <img
                            src="https://cdn.shopify.com/s/files/1/1061/1924/products/Robot_Emoji_Icon_7070a254-26f7-4a54-8131-560e38e34c2e_grande.png?v=1571606114"
                            alt="Logo"
                            className="w-16 h-16 rounded-full"
                        />
                        <span className="ml-3 text-xl xl:block lg:hidden">
                            Discord Bot
                        </span>
                    </a>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <button className="inline-flex items-center bg-neutral-800 border-0 py-1 px-3 focus:outline-none hover:bg-neutral-700 rounded text-base mt-4 md:mt-0">
                            GitHub
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-4 h-4 ml-1"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
