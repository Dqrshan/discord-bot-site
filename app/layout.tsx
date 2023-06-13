/** @format */

import { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

const inter = Outfit({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
    title: "Discord Bot",
    description: "A simple Discord bot website",
    authors: [{ name: "Lorenz", url: "https://darshan.studio/" }]
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
