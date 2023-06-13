/** @format */

import React from "react";
import { IconType } from "react-icons";

type Props = {
    name: string;
    details: string;
    Icon: IconType;
};

function FeatureL({ name, details, Icon }: Props) {
    return (
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <Icon className="sm:w-16 sm:h-16 w-10 h-10" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-indigo-300 text-lg title-font font-medium mb-2">
                    {name}
                </h2>
                <p className="leading-relaxed text-base">{details}</p>
            </div>
        </div>
    );
}

export default FeatureL;
