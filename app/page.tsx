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
            <div className="h-screen bg-gradient-to-tr from-slate-700 to-slate-800 overflow-x-hidden overflow-scroll z-0">
                <Header />
                <section className="divide-y-2 divide-slate-600">
                    <section>
                        <Hero />
                        <Stats />
                    </section>
                    <Features />
                    <Premium />
                    <Team />
                </section>
                <Footer />
            </div>
        </>
    );
}
