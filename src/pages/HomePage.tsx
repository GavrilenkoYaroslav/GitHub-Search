import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from '../assets/css/HomePage.module.css';
import {API, userSearchType} from "../api/api";
import {User} from "../components/User";
import {useDebouncedCallback} from "use-debounce";
import {Preloader} from "../components/Preloader";

export const HomePage = () => {
    const [term, setTerm] = useState<string>('');
    const [inputValue, setInputValue] = useState<string>('');
    const [users, setUsers] = useState<Array<userSearchType>|null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getUsers = async () => {
            try {
                setLoading(true);
                const response = await API.findUsers(term);
                setUsers(response.items);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        if (localStorage.getItem('term')){
            setInputValue(localStorage.getItem('term')!);
            setTerm(localStorage.getItem('term')!);
        }

        if (term) {
            getUsers();
        } else {
            setUsers(null);
        }

    }, [term]);

    const onSearch = () => {
        setTerm(inputValue);
        localStorage.setItem('term', inputValue);
    };

    const debounced = useDebouncedCallback(onSearch, 1000);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        debounced.callback();
    };

    return (
        <>
            <div className={styles.searchbar}>
                <input placeholder={`let's find someone...`} value={inputValue} onChange={onInputChange}/>
            </div>

            {loading && <Preloader/>}

            <div>
                {users && users.map((user, index) => <User key={index} user={user}/>)}
            </div>
        </>
    );
};