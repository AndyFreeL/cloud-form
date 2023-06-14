import React, {FC, forwardRef} from 'react';
import s from './Input.module.scss';
import cn from 'classnames';
import {InputMask} from "primereact/inputmask";

interface InputProps {
    error?: string,
    helpertext?: string,
    id: string,
    value?:string,
    label?: string,
    placeholder: string,
    type: string,
    onChange?: (param: any) => void,
    count?: any,
    limit?:any
}

const Input: FC<InputProps> = forwardRef((props, ref: any) => {


    return (
        <div className={s.input}>
            <label className={s.input__label}>{props.label}</label>

            {props.type === 'textarea' &&
                <div>
                <textarea className={cn(s.input__field, s.input__textarea, {[s.error]: props.error})}
                          {...props}
                          ref={ref}
                          value={props.value}
                />
                    <div className={s.input__count}>
                        <div className={s.input__count_red}>{props.helpertext}</div>
                        <div><span className={cn({[s.input__count_red]:props.count > props.limit})}>{props.count}</span>/{props.limit}</div>
                    </div>
                </div>

            }

            {props.type === 'phone'
                && <InputMask className={cn(s.input__field, {[s.error]: props.error})}
                              {...props}
                              type='text'
                              ref={ref}
                              value={props.value}
                              mask="+7 (999) 999-99-99"
                />
            }

            {props.type === 'text'
                && <input className={cn(s.input__field, {[s.error]: props.error})}
                          {...props}
                          type='text'
                          value={props.value}
                          ref={ref}
                />
            }

            {/*{props.inputtype === 'phone'*/}
            {/*    ? <InputMask className={cn(s.input__field, {[s.error]: props.error})}*/}
            {/*                 {...props}*/}
            {/*                 type='text'*/}
            {/*                 ref={ref}*/}
            {/*                 autoClear={false}*/}
            {/*                 mask="+7 (999) 999-99-99"*/}
            {/*    />*/}
            {/*    : <input className={cn(s.input__field, {[s.error]: props.error})}*/}
            {/*             {...props}*/}
            {/*             type='text'*/}
            {/*             ref={ref}*/}
            {/*    />*/}
            {/*}*/}
            {props.type !== 'textarea' && <div className={s.input__helper}>
                {props.helpertext}
            </div>}

        </div>
    );
});

export default Input;