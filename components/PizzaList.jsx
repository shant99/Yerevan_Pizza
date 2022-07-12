import styles from '../styles/PizzaList.module.css'
import PizzaCard from './pizzaCard/PizzaCard';
import {v4} from 'uuid';

function PizzaList({pizzaList = []}){
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The best Pizza In Town</h1>
            <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {
            pizzaList.map((item) => {
                return <PizzaCard key={v4()} pizza={item} />
            })
        }
      </div>
        </div>
    )
}

export default PizzaList