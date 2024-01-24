import Link from "next/link";

export default function Home() {
  const formName = "support-us";
  const giftaidForms = [
    "cancer-research",
    "cancer-research-ivr",
    "stand-up-to-cancer",
  ];
  return (
    <main className="main">
      <Link href={`/${formName}/your-donation`}>Donate</Link>
      {giftaidForms.map((form, i) => {
        return (
          <Link key={i} href={`/giftaid/${form}/details`}>
            CRUK Giftaid {form}
          </Link>
        );
      })}
    </main>
  );
}
