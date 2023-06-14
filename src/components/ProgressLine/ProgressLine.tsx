import React from 'react';
import s from './ProgressLine.module.scss'
import MainLayout from "../../layouts/MainLayout/MainLayout";
import cn from 'classnames'
import {useLocation} from "react-router-dom";

const ProgressLine = () => {
    const {pathname} = useLocation()

    return (
        <div className={s.progressContainer}>
            <div className={cn(s.progressContainer__point,
                {[s.active]:pathname==='/step1'},
                {[s.completed]:pathname!=='/step1'})}></div>
            <div className={cn(s.progressContainer__point,
                {[s.active]:pathname==='/step2'},
                {[s.completed]:pathname==='/step3'})}></div>
            <div className={cn(s.progressContainer__point,
                {[s.active]:pathname==='/step3'})}></div>
            <div className={s.progressContainer__line}>
                <div
                    className={cn(s.progressContainer__progress,{[s.half]:pathname==='/step2'},{[s.full]:pathname==='/step3'})}></div>
                <div className={s.progressContainer__steps}>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressLine;