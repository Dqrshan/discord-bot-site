/** @format */

import React from "react";
import Heading from "./Heading";
import PremiumCard from "./PremiumCard";
import PremiumPopularCard from "./PremiumPopularCard";

type Props = {};

function Premium({}: Props) {
    return (
        <div>
            <section className="text-slate-400 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <Heading text="Premium" />
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Whatever cardigan tote bag tumblr hexagon brooklyn
                            asymmetrical.
                        </p>
                        <div className="flex mx-auto border-2 border-sky-300 rounded overflow-hidden mt-6">
                            <button className="py-1 px-4 bg-sky-300 text-slate-700 focus:outline-none">
                                Monthly
                            </button>
                            <button className="py-1 px-4 text-slate-300 focus:outline-none">
                                Annually
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <PremiumCard
                            key={"A"}
                            benefits={[
                                "Vexillologist pitchfork",
                                "Tumeric plaid portland",
                                "Hexagon neutra unicorn"
                            ]}
                            plan="START"
                            price="Free"
                        />
                        <PremiumCard
                            key={"B"}
                            benefits={[
                                "Vexillologist pitchfork",
                                "Tumeric plaid portland",
                                "Hexagon neutra unicorn"
                            ]}
                            plan="BUSINESS"
                            price="$15"
                        />
                        <PremiumPopularCard
                            key={"C"}
                            benefits={[
                                "Vexillologist pitchfork",
                                "Tumeric plaid portland",
                                "Hexagon neutra unicorn",
                                "Mixtape chillwave tumeric"
                            ]}
                            plan="PRO"
                            price="$30"
                        />
                        <PremiumCard
                            key={"D"}
                            benefits={[
                                "Vexillologist pitchfork",
                                "Tumeric plaid portland",
                                "Hexagon neutra unicorn"
                            ]}
                            plan="MASTER"
                            price="$45"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Premium;
