/** @format */

import Link from "next/link";
import React from "react";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

type Props = {
    name: string;
    role: string;
    image: string;
    socials: Social;
};

function TeamCard({ name, role, image, socials }: Props) {
    return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-slate-400 border-2 p-4 rounded-lg backdrop-brightness-90">
                <img
                    alt="team"
                    className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={image}
                />
                <div className="flex-grow">
                    <h2 className="text-slate-300 text-xl title-font font-medium">
                        {name}
                    </h2>
                    <p className="text-slate-500 text-base">{role}</p>
                    <div className="inline-flex gap-2 mt-1">
                        {socials.github && (
                            <Link
                                href={socials.github}
                                target="_blank"
                                className="text-xl hover:text-slate-500"
                            >
                                <FaGithub />
                            </Link>
                        )}
                        {socials.insta && (
                            <Link
                                href={socials.insta}
                                target="_blank"
                                className="text-xl hover:text-slate-500"
                            >
                                <FaInstagram />
                            </Link>
                        )}
                        {socials.discord && (
                            <Link
                                href={socials.discord}
                                target="_blank"
                                className="text-xl hover:text-slate-500"
                            >
                                <FaDiscord />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;

type Social = {
    github?: string;
    insta?: string;
    discord?: string;
};
