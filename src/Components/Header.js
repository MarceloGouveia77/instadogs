import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../Components/Assets/dogs.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/" aria-label="Dogs - Home">
                    <Logo />
                </Link>
                <Link className={styles.login} to="/login">
                    Login / Criar
                </Link>
            </nav>
        </header>
    )
}

export default Header
