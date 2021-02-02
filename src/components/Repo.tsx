import React from 'react';
import styles from '../assets/css/Repo.module.css';
import {repoType} from "../api/api";

export const Repo: React.FC<{repo: repoType}> = ({repo}) => {
    return (
        <a href={repo.html_url} target={'_blank'} rel="noreferrer">
        <div className={styles.container}>
            <span>
                {repo.name}
            </span>
            <div>
                <span>
                    {`${repo.forks} Forks`}
                </span>
                <span>
                    {`${repo.stargazers_count} Stars`}
                </span>
            </div>
        </div>
        </a>
    );
};