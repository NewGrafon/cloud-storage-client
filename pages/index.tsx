import Head from "next/head";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Крутой текст про нашу компанию</h1>
          <h2>Предложение зарегистрироваться</h2>
          <button><a href="dashboard/auth">кнопка на регистрацию</a></button>
      </main>
    </>
  );
}
