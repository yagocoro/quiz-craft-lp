import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "QuizCraft - AI時代の新しい学習体験",
  description: "手元の資料からワンクリックで問題を自動で作成。引用元を明記した解説も自動生成されます。",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <CTA />
      <FAQ />
      <Pricing />
    </main>
  );
}
