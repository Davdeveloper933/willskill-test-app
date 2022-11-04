import { useState } from "react";
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
                            <Image src={require('../src/img/close.svg')} alt='close icon' />
                        </button>
                </div>
                <div className={styles.Header__inner}>
                    <button className={styles.Header__mobMenuOpen}
                            onClick={() => {
                                setIsNavExpanded(!isNavExpanded);
                            }}
                    >
                        <Image src={require('../src/img/hamburger.svg')} alt='hamburger icon' />
                    </button>
                    <a href="" className={styles.logo}>
                        <Image width={120} src={require('../src/img/logo.svg')} alt='logo' />
                    </a>
                    <nav>
                    {navItems.map((item,indx) => <a key={indx} href={item.link}>{item.name}</a>)}
                    <a href='tel:888006000990'>8 8 (800) 600-09-90</a>
                </nav>
                <div className={styles.shopCart}>
                    <Image width={32} src={require('../src/img/basket.svg')} alt='basket' />
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