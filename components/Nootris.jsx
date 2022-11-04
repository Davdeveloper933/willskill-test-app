import styles from '../styles/Nootris.module.scss'
import Image from 'next/image';

const Nootris = () => {
    return (
        <section className={styles.Nootris}>
            <div className='container'>
                <div className={styles.Nootris__inner}>
                    <div className={styles.Nootris__innerText}>
                        <h1>
                            АКТИВИРУЙ ИММУНИТЕТ!
                        </h1>
                        <h2>
                            Всего пять секунд в день помогут укрепить иммунитет и повысить защитные силы организма
                        </h2>
                        <div className={styles.Nootris__helps}>
                            <h2>
                                NOOTRIS ПОМОГАЕТ
                            </h2>
                            <h3>Вашему организму во время пандемии и сезонных простуд</h3>
                        </div>
                    </div>
                    <div  className={styles.Nootris__innerImage} >
                                <Image fill src={require('../public/img/lemon.png')} alt="lemon" />       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Nootris;