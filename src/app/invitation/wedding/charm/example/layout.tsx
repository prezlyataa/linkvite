import { fontPrata } from "../../../../../lib/fonts";
import "../../../../../styles/global.css";

export default function CharmTemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={`${fontPrata.className} (antialiased)`}>{children}</body>
    </html>
  );
}
