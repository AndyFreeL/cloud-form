export interface StatusState {
    status: null | string,
    error: null | string
}

export enum StatusActionTypes {
    FETCH_FORM = 'FETCH_FORM',
    FETCH_FORM_SUCCESS = 'FETCH_FORM_SUCCESS',
    FETCH_FORM_ERROR = 'FETCH_FORM_ERROR',
    CLEAR_STATUS = 'CLEAR_STATUS'
}


interface FetchFormStatusAction {
    type: StatusActionTypes.FETCH_FORM
}

interface FetchFormSuccessStatusAction {
    type: StatusActionTypes.FETCH_FORM_SUCCESS;
    payload: any;
}

interface FetchFormErrorStatusAction {
    type: StatusActionTypes.FETCH_FORM_ERROR;
    payload: string;
}

interface ClearStatusAction {
    type: StatusActionTypes.CLEAR_STATUS;
}


export type StatusAction = FetchFormStatusAction | FetchFormSuccessStatusAction | FetchFormErrorStatusAction | ClearStatusAction