import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import axios from 'axios'

const Home: NextPage = ({pizzaList}: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yerevan Pizza</title>
        <meta name="description" content="Yerevan Pizza" />
        <link rel="icon" href="/pizza-icon.ico" />
      </Head>

      <Featured />
      <PizzaList pizzaList={pizzaList}/>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products')

  return {
    props: {
      pizzaList: res.data
    }
  }
}

export default Home;
