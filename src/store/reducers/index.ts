import {combineReducers} from 'redux';
import {formReducer} from './formReducer'
import {statusReducer} from "./statusReducer";


export const rootReducer = combineReducers({
    form: formReducer,
    status: statusReducer
})

export type RootState = ReturnType<typeof rootReducer>