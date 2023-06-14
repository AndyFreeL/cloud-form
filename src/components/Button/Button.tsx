import React, {FC, ReactNode} from 'react';
import s from './Button.module.scss'
import cn from 'classnames'

interface ButtonProps {
    children: ReactNode,
    type?:any,
    variant?:string,
    id?:string
    onClick?:()=>void
}

const Button:FC<ButtonProps> = (props) => {
    return (
        <button onClick={props.onClick} id={props.id} type={props.type} className={cn(s.button,{[s.secondary]:props.variant==='secondary'})}>
            {props.children}
        </button>
    );
};

export default Button;