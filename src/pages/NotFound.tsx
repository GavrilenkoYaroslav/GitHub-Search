import React from 'react';
import styles from '../assets/css/NotFound.module.css';
import { Player } from "@lottiefiles/react-lottie-player"
import {NavLink} from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div className={styles.homeForTheLama}>
            <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_4ll9qg6q.json"
                style={{ width: "50%" }}/>
            <h1>NOT FOUND</h1>
            <NavLink to='/'>Go home</NavLink>
        </div>
    );
};

export default NotFound;