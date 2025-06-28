import { useRouter } from "next/router";
export default function InvitationPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-white">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center">
        <h1 className="text-2xl font-bold mb-4">Запрошення: {slug}</h1>
        <p className="mb-2">Дата події: 12 серпня 2025</p>
        <p className="mb-6">Місце: Ресторан Озеро, Львів</p>
        <a href="https://maps.google.com" className="underline text-pink-600">
          Переглянути на карті
        </a>
      </div>
    </main>
  );
}
