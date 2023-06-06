/** @format */

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Premium from "@/components/Premium";
import Stats from "@/components/Stats";
import Team from "@/components/Team";

export default function Home() {
    return (
        <div>
            <section id="header" className="">
                <Header />
            </section>
            <section id="hero">
                <Hero />
            </section>
            <section id="stats">
                <Stats />
            </section>
            <section id="features">
                <Features />
            </section>
            <section id="premium">
                <Premium />
            </section>
            <section id="team">
                <Team />
            </section>
            <section id="footer">
                <Footer />
            </section>
        </div>
    );
}
