import { useState,React } from "react";
import styles from '../styles/Header.module.scss'
import Image from 'next/image';

const Header = () => {
    const navItems = [
        {name:'FAQ',link:''},
        {name:'Оплата и доставка',link:''},
        {name:'Возврат',link:''},
        {name:'Исследования',link:''},
        {name: 'Личный кабинет',link:''}
    ];
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <header className={styles.Header}>
            <div className='container'>
                <div className={isNavExpanded? styles.Header__mobileMenu+' '+styles.Header__mobileMenu_expanded: styles.Header__mobileMenu}>
                        <nav>
                            {navItems.map((item,indx) => <a key={indx} href={item.link}>{item.name}</a>)}
                            <a href='tel:888006000990'>8 8 (800) 600-09-90</a>
                        </nav>
                        <button className={styles.Header__mobileMenu__close}
                                                            onClick={() => {
                                                                setIsNavExpanded(!isNavExpanded);
                                                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width="20" height="20"><path d="M11.398-1.2C10.324-1.2 9.25-.79 8.43.032L.03 8.43a4.194 4.194 0 000 5.941L30.661 45 .03 75.629a4.194 4.194 0 000 5.941l8.4 8.4a4.194 4.194 0 005.941 0L45 59.339l30.629 30.63a4.194 4.194 0 005.941 0l8.399-8.399a4.194 4.194 0 000-5.941L59.339 45l30.63-30.629a4.194 4.194 0 000-5.941L81.57.03a4.194 4.194 0 00-5.941 0L45 30.661 14.371.03a4.194 4.194 0 00-2.973-1.23zm0 0" fill="#fff"/></svg>
                        </button>
                </div>
                <div className={styles.Header__inner}>
                    <button className={styles.Header__mobMenuOpen}
                            onClick={() => {
                                setIsNavExpanded(!isNavExpanded);
                            }}
                    >
                        <Image src={require('../public/img/hamburger.svg')} alt='hamburger icon' />
                    </button>
                    <a href="" className={styles.logo}>
                        <Image width={120} src={require('../public/img/logo.svg')} alt='logo' />
                    </a>
                    <nav>
                    {navItems.map((item,indx) => <a key={indx} href={item.link}>{item.name}</a>)}
                    <a href='tel:888006000990'>8 8 (800) 600-09-90</a>
                </nav>
                <div className={styles.shopCart}>
                    <Image width={32} src={require('../public/img/basket.svg')} alt='basket' />
                    <div className={styles.shopCart__counter}>
                        <span>1</span>
                    </div>
                </div>
                </div>
            </div>
        </header>
    );
}

export default Header;