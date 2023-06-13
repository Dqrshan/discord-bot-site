/** @format */

import { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

const inter = Outfit({ subsets: ["latin"], weight: ["500"] });

const data = {
    title: "Discord Bot",
    description: "A simple discord bot site",
    image: "https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg",
    theme: "#7dd3fc"
};

export const metadata: Metadata = {
    title: data.title,
    description: data.description,
    authors: [{ name: "Lorenz", url: "https://darshan.studio/" }],
    themeColor: data.theme,
    openGraph: {
        title: data.title,
        description: data.description,
        images: data.image,
        type: "website",
        siteName: data.title,
        url: "https://dash-bot.vercel.app/"
    },
    twitter: {
        title: data.title,
        description: data.description,
        images: data.image,
        card: "summary",
        creator: "Lorenz"
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
