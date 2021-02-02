import React from 'react';
import {Preloader} from "../components/Preloader";

export const withSuspense = (Component: React.ComponentType) => {
    return (props: any) => {
        return(
        <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
        );
    };
};