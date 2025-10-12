import fs from "fs";
import path from "path";

export default async function GuestPage({
  params,
}: {
  params: Promise<{ guestId: string }>;
}) {
  const { guestId } = await params; // 👈 обов’язково await

  const clientId = "example"; // фіксований клієнт поки що

  const filePath = path.join(
    process.cwd(),
    `src/app/invitation/wedding/charm/${clientId}/data.json`
  );

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const guest = data.guests?.find(
    (g: { id: string; name: string }) => g.id === guestId
  );

  if (!guest) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-[#37585c] text-white">
        <h1>Гостя не знайдено 😢</h1>
        <p>Можливо, посилання застаріле або було введене з помилкою.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#37585c] text-[#f5eee3]">
      <h1 className="text-3xl font-semibold mb-4">
        Привіт, {guest.name.split(" ")[0]}!
      </h1>

      <p className="mb-2 text-lg">
        {data.hero.names} запрошують тебе на своє весілля 💍
      </p>

      <p className="mb-6 text-sm text-gray-200">{data.hero.date}</p>

      <a
        href={`/invitation/wedding/charm/${clientId}`}
        className="border border-[#f5eee3] px-4 py-2 rounded hover:bg-[#f5eee3] hover:text-[#37585c] transition"
      >
        Переглянути запрошення
      </a>
    </main>
  );
}
