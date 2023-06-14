import {FormAction, FormActionTypes} from "../../types/form";

export const setFormState = (data:any):FormAction=>{
    return {type:FormActionTypes.SET_FORM_STATE,payload:data}
}