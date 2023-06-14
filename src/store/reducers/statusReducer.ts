import {StatusAction, StatusActionTypes, StatusState} from '../../types/status'

const initialState: StatusState = {
    status:null,
    error:null
}

export const statusReducer = (state = initialState, action: StatusAction) => {
    switch (action.type) {
        case StatusActionTypes.FETCH_FORM:
            return state
        case StatusActionTypes.FETCH_FORM_SUCCESS:
            return {...state, status:action.payload}
        case StatusActionTypes.FETCH_FORM_ERROR:
            return {...state, status:action.payload}
        case StatusActionTypes.CLEAR_STATUS:
            return state=initialState
        default:
            return state
    }
}