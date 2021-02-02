import React from 'react';
import styles from '../assets/css/Header.module.css';

export const Header: React.FC = () => {
    return (
        <span className={styles.title}>
                GitHub Searcher
        </span>
    );
};