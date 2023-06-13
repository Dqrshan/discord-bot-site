/** @format */

import Link from "next/link";
import React from "react";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
    return (
        <div>
            <footer className="text-slate-400 body-font backdrop-brightness-75">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <span className="ml-3 text-xl">Discord Bot</span>
                    </a>
                    <p className="text-sm text-slate-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-slate-800 sm:py-2 sm:mt-0 mt-4">
                        © 2023 —
                        <a
                            href="https://darshan.studio/"
                            className="text-slate-300 hover:underline decoration-1 ml-1 ease"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @Lorenz
                        </a>
                    </p>
                    <span className="inline-flex gap-3 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link
                            href={"https://github.com/Dqrshan"}
                            target="_blank"
                            className="text-slate-400 w-5 h-5 text-xl hover:text-slate-500 ease"
                        >
                            <FaGithub />
                        </Link>
                        <Link
                            href={"https://instagram.com/bruh.darshan"}
                            target="_blank"
                            className="text-slate-400 w-5 h-5 text-xl hover:text-slate-500 ease"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            href={"https://dsc.gg/electrabot"}
                            target="_blank"
                            className="text-slate-400 w-5 h-5 text-xl hover:text-slate-500 ease"
                        >
                            <FaDiscord />
                        </Link>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
