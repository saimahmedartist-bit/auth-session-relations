import Link from 'next/link';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Authentication App🚀</h1>
      <p className={styles.subtitle}>Advanced Auth System with Next.js, Express, PostgreSQL, Prisma & Redis</p>

      <div className={styles.buttonGroup}>
        <Link href="/register">
          <button className={styles.button}>Register Here</button>
        </Link>

        <Link href="/login">
          <button className={styles.button}>Login Here</button>
        </Link>
      </div>
    </div>
  );
}
