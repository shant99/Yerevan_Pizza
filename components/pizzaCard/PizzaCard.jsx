


import Image from "next/image";
import Link from "next/link";
import styles from "./PizzaCard.module.css";

const PizzaCard = ({id}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${id}`} >
       <Image src="/pizza.png" alt="" width="500" height="500" />
      </Link>
       <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;