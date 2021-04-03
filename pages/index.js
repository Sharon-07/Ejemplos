import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ejemplos en <a href="https://redeshamminggolay.vercel.app/">Matlab!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
        <p>Ejemplo 1</p>
        </div>

        <div className={styles.grid}>
        <p>Ejemplo 2</p>
        </div>

        <div className={styles.grid}>
        <p>Ejemplo 3</p>
        </div>

        <div className={styles.grid}>
        <p>Ejemplo 4</p>
        </div>

        <div className={styles.grid}>
        <p>Ejemplo 1</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
