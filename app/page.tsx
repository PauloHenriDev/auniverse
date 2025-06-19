import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-center">Bem-vindo ao Auniverse!</h1>
      <Link href="/personagens/Izuku-Midoriya">
        <p>izuku midoriya</p>
      </Link>
    </main>
  );
}