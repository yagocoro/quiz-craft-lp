"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-1.png"
                alt="About"
                className="dark:hidden"
                width={500}
                height={500}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                情報の自動抽出による問題作成
              </h2>
              <p>
                入力された情報から重要な情報を自動で抽出し、そのデータを基に問題を作成します。面倒なデータの収集や問題作成の手間を削減し、効率的な学習を促進することが可能です。学習内容をすぐに理解し、知識の定着を助ける独自のAIが、研修の質を高めます。
              </p>

            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                  進捗の可視化とフィードバック機能
              </h2>
              <p>ユーザーの回答進捗と成績をリアルタイムで追跡し、学習状を視覚的に表示します。さらに、クイズ回答後には正解と解説が提供され、学習者の理解を一層深めることができます。このフィードバックは、知識の定着と学習のモチベーション向上に役立ちます。
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-2.png"
                alt="About"
                className="dark:hidden"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
        <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
            <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
                <div className="flex items-center gap-8 lg:gap-32.5">
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -20,
                            },

                            visible: {
                                opacity: 1,
                                x: 0,
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
                    >
                        <Image
                            src="/images/about/about-3.png"
                            alt="About"
                            className="dark:hidden"
                            width={500}
                            height={500}
                        />
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: 20,
                            },

                            visible: {
                                opacity: 1,
                                x: 0,
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="animate_right md:w-1/2"
                    >
                        <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                            最先端AIを最大限活用したユーザー体験
                        </h2>
                        <p>
                            OpenAI APIを中心とした世界最先端のAI、優れたプロンプト作成力、そして国内でいち早く生成AIに取り組んでいるデジタルレシピのプロダクト開発力を組み合わせました。
                            さらに、それらを持続可能でスケーラブルなサービス設計に反映させ、学習ツールとしての品質と革新性を追求し続けることで、ユーザーの皆様には常に最良の学習経験を提供します。
                        </p>

                    </motion.div>
                </div>
            </div>
        </section>
    </>
  );
};

export default About;
