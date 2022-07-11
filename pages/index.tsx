import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yerevan Pizza</title>
        <meta name="description" content="Yerevan Pizza" />
        <link rel="icon" href="/pizza-icon.ico" />
      </Head>

      <Featured />
      <PizzaList />
    </div>
  );
};

export default Home;
