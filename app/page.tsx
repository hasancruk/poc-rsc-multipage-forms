import Link from "next/link";

export default function Home() {
  const formName = "support-us";
  return (
    <main className="main">
      <Link href={`/${formName}/your-donation`}>Donate</Link>
    </main>
  );
}
