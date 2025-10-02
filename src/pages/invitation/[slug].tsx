import { useRouter } from "next/router";
import Header from "@/components/invitation/Header";

export default function InvitationPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Тимчасові дані для різних запрошень
  // В майбутньому це буде завантажуватись з бази даних
  // const invitationData = {
  //   bride: "Ольга",
  //   groom: "Дмитро",
  //   date: "27 вересня 2025",
  // };

  console.log("slug", slug);

  return (
    <main className="min-h-screen">
      <Header />
    </main>
  );
}
