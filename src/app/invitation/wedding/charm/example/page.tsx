import fs from "fs";
import path from "path";
import type { Metadata } from "next";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Details from "./components/Details";
import Program from "./components/Program";
import DressCode from "./components/DressCode";
import Gifts from "./components/Gifts";
import LoveStory from "./components/LoveStory";
import Footer from "./components/Footer";

import "../../../../../styles/global.css";

async function loadWeddingData() {
  const filePath = path.join(
    process.cwd(),
    "src/app/invitation/wedding/charm/example/data.json"
  );

  const rawData = await fs.promises.readFile(filePath, "utf8");
  return JSON.parse(rawData);
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await loadWeddingData();
  const { names } = data.hero || {};

  const title = names
    ? `${names} — Весільне запрошення`
    : "Весільне запрошення";

  return {
    title,
    description: "Запрошення на весілля",
    openGraph: {
      title,
      description: "Приєднуйтеся до святкування нашого особливого дня 💍",
    },
    icons: { icon: "/tab-icon-letter.png" },
  };
}

export default async function CharmTemplate() {
  const data = await loadWeddingData();

  return (
    <main className="overflow-hidden bg-[var(--charm-bg)] text-[var(--charm-text)]">
      <Header header={data.header} />
      <Hero hero={data.hero} />
      <Countdown countdown={data.countdown} />
      <Details details={data.details} />
      <Program program={data.program} />
      <DressCode dressCode={data.dressCode} />
      <Gifts gifts={data.gifts} />
      <LoveStory loveStory={data.loveStory} />
      <Footer footer={data.footer} />
    </main>
  );
}
