import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from '../assets/css/UserPage.module.css';
import {useParams, useHistory} from 'react-router-dom';
import {API, repoType, singleUserType} from "../api/api";
import {Preloader} from "../components/Preloader";
import {Repo} from "../components/Repo";

const UserPage: React.FC = () => {
    const params: {login: string} = useParams();
    const history = useHistory();
    const [user, setUser] = useState<singleUserType|null>(null);
    const [repos, setRepos] = useState<Array<repoType>|null>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getUser = async () => {
            try {
                setLoading(true);
                const response = await API.getUser(params.login);
                setUser(response);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        getUser();

    }, [params.login]);

    useEffect(() => {
        const getRepos = async () => {
            try {
                const response = await API.getRepos(user!.login);
                setRepos(response);
            } catch (e) {
                console.error(e);
            }
        };

        if (user) {
            getRepos();
        }

    }, [user]);

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    let filtered = repos;

    if (repos && inputValue) {
        filtered = repos.filter(repo => repo.name.toUpperCase().includes(inputValue.toUpperCase()));
    }

    return (
        <>
        <hr/>
            <span onClick={()=> history.push('/')} className={styles.goBack}>Go back</span>

            {loading && <Preloader/>}

            {user && <>
                <div className={styles.info}>
                    <img src={user.avatar_url} alt={''}/>
                    <div>
                        <span>{`Name: ${user.name ? user.name : '-'}`}</span>
                        <span>{`Email: ${user.email ? user.email : '-'}`}</span>
                        <span>{`Location: ${user.location ? user.location : '-'}`}</span>
                        <span>{`Join Date: ${user.created_at ? user.created_at.slice(0,10) : '-'}`}</span>
                        <span>{`Followers: ${user.followers}`}</span>
                        <span>{`Following: ${user.following}`}</span>
                    </div>
                </div>

                <div className={styles.bio}>
                    {!!user.bio && user.bio}
                </div>

                <div className={styles.searchbar}>
                    <input placeholder={`search repo...`} value={inputValue} onChange={ onSearch }/>
                </div>

                <div className={styles.repos}>
                    {(filtered && !!filtered.length) ?
                        filtered.map((repo, index) => <Repo key={index} repo={repo}/>) :
                    <span>No repositories</span>
                    }
                </div>
            </>}
        </>
    );
};

export default UserPage;