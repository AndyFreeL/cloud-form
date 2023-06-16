import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Form from "../../components/Form/Form";
import s from './Step1Page.module.scss'
import Input from "../../components/Input/Input";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import ProgressLine from "../../components/ProgressLine/ProgressLine";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import {setFormState} from "../../store/action-creators/form";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const schema = yup.object().shape({
    nickname:yup
        .string()
        .required("Nickname is a required field")
        .max(30, 'Must be exactly 30 digits')
        .matches(/^[a-zA-Z0-9]*$/, "Nickname should not contain spec symbols"),
    name: yup
        .string()
        // .matches(/^([^0-9]*)$/, "Name should not contain numbers")
        .matches(/^[a-zA-Z-]*$/, "Name should not contain numbers or spec symbols")
        .required("Name is a required field")
        .max(50, 'Must be exactly 50 digits'),
    surname: yup
        .string()
        .matches(/^[a-zA-Z-]*$/, "Sername should not contain numbers or spec symbols")
        .matches(/^[a-zA-Z0-9!@#$%\\^&*)(+=._-]*$/, "Surname should not contain spec")
        .max(50, 'Must be exactly 50 digits')
        .required("Sername is a required field"),
})


const Step1Page = () => {
    const{nickname,surname,name, sex}=useTypedSelector(state => state.form)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}, getValues} = useForm({
        defaultValues:{nickname:nickname, surname:surname, name:name, sex:sex},
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })
    const onSubmit = (data:{}) => {
        dispatch(setFormState(data))
        navigate('/step2')
    }
    const goToPreviousPage=()=>{
        dispatch(setFormState(getValues()))
        navigate(-1)
    }

    return (
        <MainLayout br='12px'>
            <div className={s.container}>
                <div className={s.progress}>
                    <ProgressLine/>
                </div>
                <Form
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.input}><Input
                        error={errors.nickname && 'true'}
                        helpertext={errors?.nickname?.message?.toString()}
                        id='field-nickname'
                        type='text'
                        {...register('nickname')}
                        label='nickname'
                        placeholder='Nickname'/>
                    </div>
                    <div className={s.input}><Input
                        error={errors.name && 'true'}
                        helpertext={errors?.name?.message?.toString()}
                        type='text'
                        id='field-name'
                        {...register('name')}
                        label='name'
                        placeholder='Name'/>
                    </div>
                    <div className={s.input}><Input
                        error={errors.surname && 'true'}
                        helpertext={errors?.surname?.message?.toString()}
                        id='field-surname'
                        type='text'
                        {...register('surname')}
                        label='surname'
                        placeholder='Surname'/>
                    </div>
                    <div className={s.sex}>
                        <select
                            {...register('sex')}
                            title='sex'
                            className={s.sex__select}
                            name='sex'
                            id='field-sex'>
                            <option value=''>Не выбрано</option>
                            <option id='field-sex-option-man' value="man">man</option>
                            <option id='field-sex-option-women' value="women">women</option>
                        </select>
                    </div>
                    <div className={s.buttons}>
                        <Button variant='secondary' type='button' onClick={()=> goToPreviousPage()}>Назад</Button>
                        <Button id='button-next' type='submit'>Далее</Button>
                    </div>
                </Form>
            </div>
        </MainLayout>
    );
};

export default Step1Page;