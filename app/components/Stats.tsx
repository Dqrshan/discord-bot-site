/** @format */
"use client";

import React from "react";
import StatsCard from "./StatsCard";
import { stats } from "@/public/stats";
import Heading from "./Heading";

type Props = {};

function Stats({}: Props) {
    return (
        <div>
            <section className="text-slate-400 body-font">
                <div className="container px-4 py-16 mx-auto">
                    <Heading text="Statistics" />
                    <div className="flex flex-wrap text-center items-center justify-center">
                        {stats.map((stat) => (
                            <StatsCard
                                name={stat.name}
                                Icon={stat.Icon}
                                count={stat.count}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Stats;
