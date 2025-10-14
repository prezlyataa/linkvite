import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Details from "./components/Details";
import Program from "./components/Program";
import "../../../../../styles/global.css";

async function getClientData() {
  const filePath = path.join(
    process.cwd(),
    "src/app/invitation/wedding/charm/example/data.json"
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
      <Hero
        image={data.hero.image}
        names={data.hero.names}
        date={data.hero.date}
        buttonText={data.hero.buttonText}
      />
      <Countdown {...data.countdown} />
      <Details
        restaurantImage={data.banquet.restaurantImage}
        churchImage={data.ceremony.churchImage}
      />
      <Program title={data.program.title} items={data.program.items} />
    </main>
  );
}
