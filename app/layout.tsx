import "./globals.css";

export const metadata = {
  title: "Auniverse",
  description: "Universo Alternativo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
