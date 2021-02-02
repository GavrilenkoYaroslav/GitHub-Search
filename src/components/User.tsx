import React from 'react';
import styles from '../assets/css/User.module.css';
import {useHistory} from "react-router-dom";
import {userSearchType} from "../api/api";

export const User: React.FC<{user: userSearchType}> = ({ user }) => {
    const history = useHistory();
    return (
        <div onClick={() => history.push(`/user/${user.login}`)} className={styles.container}>
            <img src={user.avatar_url} alt={''}/>
            <strong>
                { user.login }
            </strong>
        </div>
    );
};