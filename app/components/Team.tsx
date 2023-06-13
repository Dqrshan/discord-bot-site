/** @format */

import React from "react";
import Heading from "./Heading";
import TeamCard from "./TeamCard";
import { team } from "@/public/team";

type Props = {};

function Team({}: Props) {
    return (
        <section className="text-slate-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <Heading text="Team" />
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Whatever cardigan tote bag tumblr hexagon brooklyn
                        asymmetrical gentrify, subway tile poke farm-to-table.
                        Franzen you probably haven't heard of them.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center">
                    {team.map((user) => (
                        <TeamCard
                            name={user.name}
                            role={user.role}
                            image={user.image}
                            socials={user.socials}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
