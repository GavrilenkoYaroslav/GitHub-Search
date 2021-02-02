import React from 'react';
import styles from '../assets/css/Preloader.module.css';

export const Preloader: React.FC = () => {
    return (
        <div className={styles.wrap}>
            <span>
                Loading...
            </span>
        </div>
    );
};