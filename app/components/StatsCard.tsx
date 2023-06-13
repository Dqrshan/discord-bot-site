/** @format */

import React from "react";
import { IconType } from "react-icons";
import CountUp from "react-countup";

type Props = {
    name: string;
    count: number;
    Icon: IconType;
};

function StatsCard({ name, count, Icon }: Props) {
    return (
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-slate-400 px-4 py-6 rounded-lg items-center justify-center flex gap-4 backdrop-brightness-[80%] shadow-lg">
                <h1 className="text-5xl">
                    <Icon />
                </h1>
                <span className="flex flex-col">
                    <h2 className="title-font font-medium text-3xl text-white">
                        <CountUp start={0} end={count} />
                    </h2>
                    <p className="leading-relaxed">{name}</p>
                </span>
            </div>
        </div>
    );
}

export default StatsCard;
