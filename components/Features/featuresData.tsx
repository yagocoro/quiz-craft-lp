import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-02.svg",
    title: "問題作成",
    description:
      "社内マニュアルや営業資料などのPDFやWordを元にした問題作成を行います。",
  },
  {
    id: 2,
    icon: "/images/icon/icon-05.svg",
    title: "どんな環境でも操作しやすい回答画面",
    description:
      "スマートフォンでもタブレットでもPCでも直感的に回答できる画面",
  },
  {
    id: 3,
    icon: "/images/icon/icon-01.svg",
    title: "回答管理",
    description:
      "回答者ごとの問題の正誤、問題ごとの正解率などが一目でわかります。",
  },
];

export default featuresData;
