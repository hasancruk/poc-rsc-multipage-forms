import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const formName = "support-us";
  return (
    <main className={styles.main}>
      <Link href={`/${formName}/your-donation`}>Donate</Link>
    </main>
  );
}
