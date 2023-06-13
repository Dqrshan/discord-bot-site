/** @format */

import React from "react";

type Props = {
    plan: string;
    price: string;
    benefits: string[];
};

function PremiumPopularCard({ plan, price, benefits }: Props) {
    return (
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-sky-300 flex flex-col relative overflow-hidden backdrop-brightness-90">
                <span className="bg-sky-300 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                </span>
                <h2 className="text-sm tracking-widest text-slate-400 title-font mb-1 font-medium">
                    {plan}
                </h2>
                <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-slate-500">
                    <span>{price}</span>
                    <span className="text-lg ml-1 font-normal text-slate-500">
                        /mo
                    </span>
                </h1>
                {benefits.map((b) => (
                    <p className="flex items-center text-slate-400 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-300 text-slate-700 rounded-full flex-shrink-0">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                className="w-3 h-3"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        {b}
                    </p>
                ))}
                <button className="flex items-center mt-auto text-slate-700 hover:text-slate-300 bg-sky-300 border-2 border-sky-300 ease py-2 px-4 w-full focus:outline-none hover:bg-inherit rounded">
                    Purchase
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-auto"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                <p className="text-xs text-neutral-400 mt-3">
                    Literally you probably haven't heard of them jean shorts.
                </p>
            </div>
        </div>
    );
}

export default PremiumPopularCard;
