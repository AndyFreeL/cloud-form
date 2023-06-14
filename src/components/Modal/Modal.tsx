import React, {useEffect} from 'react';
import s from './Modal.module.scss';
import Button from "../Button/Button";
import cn from 'classnames';
import {useNavigate} from "react-router-dom";
import {useActions} from "../../hooks/useActions";


const Modal = (props: any) => {
    const navigate = useNavigate()
    const {clearStatus, clearFormState} = useActions()

    // @ts-ignore
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, []);

    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                {props.status === 'error'
                    ?
                    <div>
                        <div className={cn(s.content__title, s.error)}>
                            <span>Ошибка</span>
                            <div onClick={()=>clearStatus()}>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="28" rx="14" fill="black" opacity="0.04"/>
                                    <path
                                        d="M9.40385 8.6965C9.59911 8.50123 9.91569 8.50123 10.111 8.6965L14.0002 12.5857L17.8892 8.69665C18.0845 8.50138 18.4011 8.50138 18.5963 8.69665L19.3034 9.40375C19.4987 9.59902 19.4987 9.9156 19.3034 10.1109L15.4144 13.9999L19.3033 17.8889C19.4986 18.0841 19.4986 18.4007 19.3033 18.596L18.5962 19.3031C18.401 19.4984 18.0844 19.4984 17.8891 19.3031L14.0002 15.4141L10.111 19.3032C9.91577 19.4985 9.59919 19.4985 9.40393 19.3032L8.69682 18.5961C8.50156 18.4009 8.50156 18.0843 8.69682 17.889L12.5859 13.9999L8.69674 10.1107C8.50148 9.91545 8.50148 9.59886 8.69674 9.4036L9.40385 8.6965Z"
                                        fill="#B3B3B3"/>
                                </svg>
                            </div>

                        </div>
                        <div className={s.content__image}>
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="80" height="80" rx="40" fill="#E84E58" opacity="0.15"/>
                                <path
                                    d="M39.9998 20.7998C29.4014 20.7998 20.7998 29.4014 20.7998 39.9998C20.7998 50.5982 29.4014 59.1998 39.9998 59.1998C50.5982 59.1998 59.1998 50.5982 59.1998 39.9998C59.1998 29.4014 50.5982 20.7998 39.9998 20.7998ZM32.4095 31.4835C32.7319 31.161 33.2548 31.161 33.5772 31.4835L40 37.9062L46.4225 31.4838C46.745 31.1613 47.2678 31.1613 47.5903 31.4838L48.758 32.6515C49.0805 32.974 49.0805 33.4968 48.758 33.8192L42.3355 40.2417L48.7579 46.6641C49.0804 46.9865 49.0804 47.5094 48.7579 47.8318L47.5902 48.9996C47.2677 49.322 46.7449 49.322 46.4224 48.9996L40 42.5772L33.5773 48.9998C33.2549 49.3223 32.7321 49.3223 32.4096 48.9998L31.2419 47.8321C30.9194 47.5096 30.9194 46.9868 31.2419 46.6643L37.6645 40.2417L31.2417 33.819C30.9193 33.4965 30.9193 32.9737 31.2417 32.6512L32.4095 31.4835Z"
                                    fill="#E84E58"/>
                            </svg>
                        </div>
                        <div className={cn(s.content__button, s.error)}>
                            <Button onClick={()=>clearStatus()}>Закрыть</Button>
                        </div>
                    </div>
                    :
                    <div>
                        <div className={s.wrapper}>
                            <div className={s.content}>
                                <div className={s.content__title}><span>Форма успешно отправлена</span></div>
                                <div className={s.content__image}>
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="40" fill="#05AE71" opacity="0.15"/>
                                        <path
                                            d="M20.8 40C20.8 29.4016 29.4016 20.8 40 20.8C50.5985 20.8 59.2001 29.4016 59.2001 40C59.2001 50.5985 50.5985 59.2001 40 59.2001C29.4016 59.2001 20.8 50.5985 20.8 40ZM47.4093 32.9903C46.9678 32.6817 46.3556 32.7557 46.0058 33.16L37.8957 42.5311L33.715 38.7738C33.3165 38.4157 32.7008 38.4157 32.3023 38.7738L30.7329 40.1842C30.2891 40.5831 30.2891 41.264 30.7329 41.6629L36.5953 46.9314C36.7874 47.1041 37.0396 47.2001 37.3016 47.2001H38.9073C39.2144 47.2001 39.5058 47.0683 39.7033 46.8401L49.3568 35.6856C49.7452 35.2368 49.6585 34.5625 49.1684 34.2199L47.4093 32.9903Z"
                                            fill="#05AE71"/>
                                    </svg>
                                </div>
                                <div className={s.content__button}>
                                    <Button onClick={()=>{
                                        clearStatus()
                                        clearFormState()
                                        navigate('/')
                                    }}>На главную</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>

    );
};

export default Modal;

