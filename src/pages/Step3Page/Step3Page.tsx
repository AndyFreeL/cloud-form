import React, {useState} from 'react';
import ProgressLine from "../../components/ProgressLine/ProgressLine";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import s from "../Step3Page/Step3Page.module.scss";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../components/Button/Button";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import {setFormState} from "../../store/action-creators/form";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Modal from "../../components/Modal/Modal";
import {useDispatch} from "react-redux";
import {useActions} from "../../hooks/useActions";


const schema = yup.object().shape({
    about:yup
        .string()
        .max(200, 'Must be exactly 200 digits')
})

const Step3Page = () => {
    const dispatch = useDispatch()
    const {postForm} = useActions()
    const form=useTypedSelector(state => state.form)
    const {status}=useTypedSelector(state => state.status)
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues:{about:form.about},
        mode: 'all',
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: {}) => {
        dispatch(setFormState(data))
    }

    return (
        <MainLayout br='12px'>
            <div className={s.container}>
                <div className={s.progress}>
                    <ProgressLine/>
                </div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.about}>
                        <Input
                            error={errors.about && 'true'}
                            helpertext={errors?.about?.message?.toString()}
                            id='field-name'
                            {...register('about')}
                            type='textarea'
                            label='About'
                            placeholder='placeholder'
                            onChange={e => setCount(e.target.value.replace(/\s/g, '').length)}
                            count={count}
                            limit={200}
                        />
                    </div>
                    <div className={s.buttons}>
                        <Button variant='secondary' type='submit' onClick={() => navigate(-1)}>Назад</Button>
                        <Button id='button-next' type='button' onClick={()=>postForm(form)}>Отправить</Button>
                    </div>
                </Form>
            </div>
            {status && <Modal status={status}/>}

        </MainLayout>
    );
};

export default Step3Page;