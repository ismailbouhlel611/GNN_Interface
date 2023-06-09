import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    LOGOUT,
    ADMIN_LOADED_SUCCESS,
    ADMIN_LOADED_FAIL,
    GET_ALL_USERS_SUCCESS,
} from '../actions/types';

const initialState={
    access:localStorage.getItem('access'),
    refresh:localStorage.getItem('refresh'),
    isAuthenticated:null,
    isAdmin:null,
    user:null,
    users:[]
};

export default function(state = initialState,action){
    const {type,payload} = action;

    switch(type){
        case GET_ALL_USERS_SUCCESS:
            return{
                ...state,
                users: payload,
            }
        case ADMIN_LOADED_SUCCESS:
            return{
                ...state,
                isAdmin:true
            }
        case ADMIN_LOADED_FAIL:
            return{
                ...state,
                isAdmin:false
            }
        case AUTHENTICATED_SUCCESS:
            return{
                ...state,
                isAuthenticated:true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('access',payload.access);
            localStorage.setItem('refresh',payload.refresh);
            return{
                ...state,
                isAuthenticated:true,
                access:payload.access,
                refresh:payload.refresh
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated:false
            }
        case USER_LOADED_SUCCESS:
            return{
                ...state,
                user:payload
            }
        case AUTHENTICATED_FAIL:
            return{
                ...state,
                isAuthenticated:false
            }
        case USER_LOADED_FAIL:
            return{
                ...state,
                user:null
            }    
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return{
                ...state,
                access:null,
                refresh:null,
                isAuthenticated:false,
                user:null
            }
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case ACTIVATION_FAIL:
        case ACTIVATION_SUCCESS:
            return{
                ...state
            }
        default:
            return state
    }
}
