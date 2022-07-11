import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css";

function Featured() {
  const [index, setIndex] = useState(0);
  const images = [
      {src: "/featured1.png" , info: {
          sub1: '50%'
      }},
      {src: "/featured2.png" ,info: {
        sub1: '30%'
    } },
      {src: "/featured3.png" ,info: {
        sub1: '40%'
    } }

  ];
  function handleArrow(direction) {
    if(direction==="l"){
        setIndex(index !== 0 ? index-1 : 2)
    }
    if(direction==="r"){
        setIndex(index !== 2 ? index+1 : 0)
    }
  }
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/arrowl.png"
          layout="fill"
          objectFit="contain"
          alt="arrow left"
        />
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
          
        {images.map((item, i) => (
          <div className={styles.imgContainer} key={i}>
              <div className={styles.info}> {item.info.sub1} </div> 
            <Image src={item.src} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/arrowr.png"
          layout="fill"
          objectFit="contain"
          alt="arrow right"
        />
      </div>
    </div>
  );
}

export default Featured;
