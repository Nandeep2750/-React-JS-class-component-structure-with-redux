import { Types } from '../../config/actionTypes';
import { store } from '../store/store';

function login(userAllData) {
    return dispatch => {

        let userData = {}
        userData.token = userAllData.token

        dispatch({
            type: Types.LOGIN,
            payload: { userData: userData, token: userData.token }
        });
    };
}

function edit(userAllData) {
    return dispatch => {

        let projectUser = store.getState().authentication;
        let userData = projectUser.userData

        userData.token = userAllData.token

        dispatch({
            type: Types.EDIT,
            payload: { userData: userData, token: userData.token }
        });
    };
}

function logout() {
    return dispatch => {
        dispatch({
            type: Types.LOGOUT,
            payload: { userData: null, token: null }
        });
    }
}

export const userActions = {
    login,
    edit,
    logout,
};