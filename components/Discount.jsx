import styles from '../styles/Discount.module.scss'
import Image from 'next/image';

const Discount = () => {
    return (
        <section className={styles.Discount}>
            <div className='container'>
                <div className={styles.Discount__inner}>
                    <h1 className={styles.Discount__title}>
                        ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА <span>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
                    </h1>
                    <div className={styles.Discount__price}>
                        <h2 className={styles.Discount__priceOld}>750₽</h2>
                        <h2 className={styles.Discount__priceNew}>690₽</h2>
                    </div>
                    <div className={styles.Discount__box}>
                        <div className={styles.Discount__item}>
                            <div>
                                <Image alt="ginger" src={require('../public/img/ginger.png')} />
                            </div>
                            <h4>
                                Содержит <span>имбирь</span>
                            </h4>
                        </div>
                        <div className={styles.Discount__item}>
                            <div>
                                <Image alt="nootris" src={require('../public/img/nootris.png')} />
                            </div>
                            <h4 className={styles.Discount__delivery}>
                                + Бесплатная доставка
                                <span>Специальная цена</span>
                            </h4>
                        </div>
                        <div className={styles.Discount__item}>
                        <div>
                                <Image alt="virus" src={require('../public/img/virus.png')} />
                            </div>
                            <h4>
                                Нейтрализует<span>вирусы</span>
                            </h4>
                        </div>
                    </div>
                    <div className={styles.Discount__buttonWrapper}>
                        <button>Оформить заказ!</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discount;