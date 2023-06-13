/** @format */

import Features from "@/app/components/Features";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Premium from "@/app/components/Premium";
import Stats from "@/app/components/Stats";
import Team from "@/app/components/Team";

export default function Home() {
    return (
        <>
            <div className="h-screen bg-gradient-to-tr from-slate-700 to-slate-800 overflow-scroll z-0">
                <Header />
                <section id="hero" className="shadow-lg">
                    <Hero />
                </section>
                <section id="stats" className="shadow-lg">
                    <Stats />
                </section>
                <section id="features" className="shadow-lg">
                    <Features />
                </section>
                <section id="premium" className="shadow-lg">
                    <Premium />
                </section>
                <section id="team" className="shadow-lg">
                    <Team />
                </section>
                <section id="footer">
                    <Footer />
                </section>
            </div>
        </>
    );
}
