import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Header from "./components/Header";
import "../../../../../styles/global.css";

async function getClientData() {
  const filePath = path.join(
    process.cwd(),
    "src/app/invitation/wedding/charmTemplate/example/data.json"
  );
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return data;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getClientData();

  return {
    title: data.hero?.names ?? "Весільне запрошення",
    description: "Запрошення на весілля",
    openGraph: {
      title: data.hero?.names ?? "Весільне запрошення",
      description: "Приєднуйтеся до святкування нашого особливого дня",
    },
    icons: {
      icon: "/tab-icon-letter.png",
    },
  };
}

export default async function CharmTemplate() {
  const data = await getClientData();

  console.log("clientData: ", data);

  return (
    <main>
      <Header />
      {/* Потім передаєш дані в інші компоненти */}
      {/* <Hero data={data.hero} /> */}
      {/* <Countdown data={data.countdown} /> */}
    </main>
  );
}
