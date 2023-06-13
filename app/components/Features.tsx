/** @format */

import React from "react";
import Heading from "./Heading";
import { FaAnchor, FaExternalLinkAlt, FaGamepad, FaUser } from "react-icons/fa";
import FeatureL from "./FeatureL";
import FeatureR from "./FeatureR";

type Props = {};

function Features({}: Props) {
    return (
        <div>
            <section className="text-slate-400 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <Heading text="Features" />
                    </div>
                    <FeatureL
                        name="Feature"
                        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue velit, iaculis pretium ex eget, congue tincidunt lacus. Morbi nec suscipit purus, non sagittis risus. Ut at urna risus. Suspendisse potenti. Curabitur non arcu pretium mi mattis mattis in a nisl. Integer id volutpat ex. Etiam id magna neque. Donec."
                        Icon={FaUser}
                    />
                    <FeatureR
                        name="Feature"
                        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue velit, iaculis pretium ex eget, congue tincidunt lacus. Morbi nec suscipit purus, non sagittis risus. Ut at urna risus. Suspendisse potenti. Curabitur non arcu pretium mi mattis mattis in a nisl. Integer id volutpat ex. Etiam id magna neque. Donec."
                        Icon={FaAnchor}
                    />
                    <FeatureL
                        name="Feature"
                        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue velit, iaculis pretium ex eget, congue tincidunt lacus. Morbi nec suscipit purus, non sagittis risus. Ut at urna risus. Suspendisse potenti. Curabitur non arcu pretium mi mattis mattis in a nisl. Integer id volutpat ex. Etiam id magna neque. Donec."
                        Icon={FaGamepad}
                    />
                    <button className="flex gap-2 items-center justify-center mx-auto text-white bg-indigo-500 border-2 border-indigo-500 py-2 px-6 focus:outline-none hover:bg-inherit rounded-xl text-lg ease">
                        <p>Documentation</p>
                        <FaExternalLinkAlt />
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Features;
