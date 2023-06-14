import React, {FC, ReactNode} from 'react';
import s from './Form.module.scss'

interface FormProps {
    children: ReactNode,
    onSubmit: any
}

const Form: FC<FormProps> = ({children, onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className={s.form} noValidate>
            {children}
        </form>
    );
};

export default Form;