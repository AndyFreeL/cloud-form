import React, {FC, forwardRef} from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import s from './MainPage.module.scss'
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import cn from "classnames";
import {setFormState} from "../../store/action-creators/form";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const schema = yup.object().shape({
    email: yup
        .string()
        .email('Введите корректный Email!')
        .required('Поле Email обязательно для заполнения!')
})


const MainPage = () => {
    const {phone,email} =useTypedSelector(state => state.form)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues:{email:email, phone:phone},
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const links = [
        {id: 1, name: 'Telegram', url: 'https://t.me/AndyFree00'},
        {id: 2, name: 'GitHub', url: 'https://github.com/AndyFreeL'},
        {id: 3, name: 'Resume', url: 'https://barnaul.hh.ru/resume/3e47db16ff078d66d60039ed1f63494f637230'},
    ];

    const onSubmit = (data: {}) => {
        dispatch(setFormState(data))
        navigate('/step1')
    }

    return (
        <MainLayout>
            <div className={s.container}>
                <div className={s.profile}>
                    <div className={s.avatar}><img src="/ava.jpg" alt="avatar"/></div>
                    <div className={s.text}>
                        <div className={s.text__name}>Андрей Меркульев</div>
                        <div className={s.text__links}>
                            {links.map(link =>
                                <a target='_blank' href={link.url} className={s.text__link} key={link.id}>
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.710016 1.96935L2.08181 0.524489C2.15733 0.444944 2.26221 0.399902 2.37189 0.399902H4.83441C4.9405 0.399902 5.04224 0.442045 5.11725 0.51706L6.48294 1.88275C6.55795 1.95776 6.6597 1.9999 6.76578 1.9999H12.4344C12.5405 1.9999 12.6422 2.04205 12.7173 2.11706L13.2829 2.68275C13.358 2.75776 13.4001 2.8595 13.4001 2.96559V10.6342C13.4001 10.7403 13.358 10.842 13.2829 10.9171L12.7173 11.4827C12.6422 11.5578 12.5405 11.5999 12.4344 11.5999H1.59C1.46983 11.5999 1.35602 11.5459 1.28005 11.4528L0.690151 10.7296C0.631907 10.6582 0.600098 10.5689 0.600098 10.4768V2.24476C0.600098 2.14227 0.639443 2.04368 0.710016 1.96935Z"
                                            fill="#CCCCCC"/>
                                    </svg>
                                    <div>{link.name}</div>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.input}>
                        <Input
                            type='phone'
                            id='field-phone'
                            {...register('phone')}
                            label='phone'
                            value={phone}
                            placeholder='+7 (900) 000-00-00'/>
                    </div>

                    <div className={s.input}>
                        <Input
                            type='text'
                            error={errors.email && 'true'}
                            helpertext={errors?.email?.message?.toString()}
                            id='field-email'
                            {...register('email')}
                            label='email'
                            placeholder='tim.jennings@example.com'/>

                    </div>
                    <div className={s.button}>
                        <Button id='button-start' type='submit'><span>Начать</span></Button>
                    </div>
                </Form>

            </div>
        </MainLayout>
    );
};





export default MainPage;