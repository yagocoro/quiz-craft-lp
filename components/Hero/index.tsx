"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Hero = () => {

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center gap-8 flex-col">
            <div className="">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white text-center">
                2023年11月β版としてリリース
              </h4>
              <h1 className="mb-15 text-4xl md:text-6xl font-bold text-black dark:text-white leading-tight text-center">
                全く新しい学びの形が
                <br className={"md:hidden"}/>
                ここに。
              </h1>
              <p className="text-center text-xl">
                学習教材も、学習方法も、学習環境も、全てが変わる。
                <br/>


                個人でも企業研修でも、あなたの学びを、もっと楽しく自由に。
              </p>
              <div className="mt-10 flex items-center justify-center">

                <Link
                    href="https://app.quiz-craft.jp/login"
                    className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primary"
                    target={"_blank"}
                >
                  会員登録(無料)
                </Link>
              </div>
              <p className="text-center text-sm mt-5">
                クレジットカードの登録は必要ありません。
                <br />
              </p>

            </div>

            <div className="animate_right lg:block justify-center">
              <div className="relative 2xl:-mr-7.5 justify-center max-w-2xl margin-auto">
                <video src={"/videos/demo.mp4"} loop muted playsInline poster={"/images/hero/poster.png"} controls />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
