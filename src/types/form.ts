export interface FormState {
        nickname: string,
        name: string,
        surname: string,
        phone: string,
        email: string,
        sex: string,
        advantages: [],
        radio: null | string,
        checkbox: [],
        about: string,
}

export enum FormActionTypes {
    SET_FORM_STATE = 'SET_FORM_STATE',
    CLEAR_FORM_STATE = 'CLEAR_FORM_STATE'
}

interface SetFormStateAction {
    type: FormActionTypes.SET_FORM_STATE
    payload: any;
}
interface ClearFormStateAction {
    type: FormActionTypes.CLEAR_FORM_STATE
}



export type FormAction = SetFormStateAction | ClearFormStateAction