/** @format */

import React from "react";
import { FaDiscord, FaPaperPlane } from "react-icons/fa";

type Props = {};

function Hero({}: Props) {
    return (
        <div>
            <section className="text-slate-400 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font lg:text-4xl text-3xl mb-4 font-medium text-white">
                            A multipurpose{" "}
                            <br className="hidden lg:inline-block" />
                            Discord bot
                        </h1>
                        <p className="mb-8 leading-relaxed drop-shadow-lg text-sm lg:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur augue velit, iaculis pretium ex
                            eget, congue tincidunt lacus. Morbi nec suscipit
                            purus, non sagittis risus. Ut at urna risus.
                            Suspendisse potenti. Curabitur non arcu pretium mi
                            mattis mattis in a nisl. Integer id volutpat ex.
                            Etiam id magna neque. Donec.
                        </p>
                        <div className="flex justify-center">
                            <button className="hero-btn border-green-600 bg-green-600">
                                <FaPaperPlane />
                                <p>Invite</p>
                            </button>
                            <button className="ml-4 hero-btn border-indigo-600 bg-indigo-600">
                                <FaDiscord />
                                <p>Discord</p>
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg md:order-none order-first mb-6 md:mb-0 lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center border-8 border-slate-500 rounded-xl shadow-lg"
                            alt="hero"
                            src="https://cdnb.artstation.com/p/assets/images/images/039/238/501/large/rambo-discord-banner-fall-no-logo.jpg?1625335274"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
