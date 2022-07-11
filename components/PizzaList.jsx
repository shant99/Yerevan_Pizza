import styles from '../styles/PizzaList.module.css'
import PizzaCard from './pizzaCard/PizzaCard'

function PizzaList(){
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The best Pizza In Town</h1>
            <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
          <PizzaCard id={1}/>
          <PizzaCard id={2}/>
          <PizzaCard id={3}/>
          <PizzaCard id={4}/>
          <PizzaCard id={5}/>
          <PizzaCard id={6}/>
          <PizzaCard id={7}/>
          <PizzaCard id={8}/>
      </div>
        </div>
    )
}

export default PizzaList