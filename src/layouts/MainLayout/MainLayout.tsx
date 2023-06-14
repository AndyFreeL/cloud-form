import React, {FC,ReactNode} from 'react';
import s from './MainLayout.module.scss'

interface MainLayoutProps{
    title?:string,
    children:  ReactNode,
    br?:string
}

const MainLayout:FC<MainLayoutProps> = ({children, br,title}) => {
    return (
        <div style={{borderRadius:br}} className={s.main}>
            {children}
        </div>
    );
};

export default MainLayout;