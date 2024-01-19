import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const formName = "support-us";

  return (
    <main className={styles.main}>
      <Link href={`/${formName}/your-donation`}>Donate</Link>
    </main>
  );
}
