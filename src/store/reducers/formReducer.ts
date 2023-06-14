import {FormAction, FormActionTypes, FormState} from '../../types/form'

const initialState: FormState = {
        nickname: '',
        name: '',
        sername: '',
        phone: '',
        email: '',
        sex: '',
        advantages: [],
        radio: '',
        checkbox: [],
        about: ''
}

export const formReducer = (state = initialState, action: FormAction) => {
    switch (action.type) {
        case FormActionTypes.SET_FORM_STATE:
            return {...state, ...action.payload}
        case FormActionTypes.CLEAR_FORM_STATE:
            return state = initialState
        default:
            return state
    }
}