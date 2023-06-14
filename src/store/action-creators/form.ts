import {FormAction, FormActionTypes} from "../../types/form";
import axios from 'axios';
import {Dispatch} from "react";
import {StatusAction, StatusActionTypes} from "../../types/status";


export const setFormState = (data:any):FormAction=>{
    return {type:FormActionTypes.SET_FORM_STATE,payload:data}
}

export const clearFormState = ()=>{
    return {type:FormActionTypes.CLEAR_FORM_STATE}
}

export const clearStatus = ()=>{
    return {type:StatusActionTypes.CLEAR_STATUS}
}

export const postForm = (form: any) => {
    return async (dispatch: Dispatch<StatusAction>) => {
        try {
            dispatch({type: StatusActionTypes.FETCH_FORM})
            const response=await axios.post('https://api.sbercloud.ru/content/v1/bootcamp/frontend/', form)
            dispatch({type:StatusActionTypes.FETCH_FORM_SUCCESS, payload:response.data.status})
        } catch (e) {
            dispatch({type:StatusActionTypes.FETCH_FORM_ERROR, payload:'error'})
        }
    }
}