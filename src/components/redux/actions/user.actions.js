import { Types } from '../../config/actionTypes';
import { saveToLocalStorage, loadFromLocalStorage } from '../../helper/LocalstorageHelper'

function login(userAllData) {
    return dispatch => {

        let userData = {}
        userData.token = userAllData.token

        saveToLocalStorage(userData)

        dispatch({ 
            type : Types.LOGIN, 
            payload : { userData : userData , token : userData.token }
        });
    };
}

function edit(userAllData) {
    return dispatch => {

        let digicaseUser = loadFromLocalStorage();
        let userData = digicaseUser.userData

        userData.token = userAllData.token

        saveToLocalStorage(userData)

        dispatch({ 
            type : Types.EDIT, 
            payload : { userData : userData , token : userData.token }
        });
    };
}

function logout() {
    return dispatch => {
        var userData = localStorage.removeItem('digicaseUser');
        dispatch({ 
            type: Types.LOGOUT, 
            payload : { userData : null , token : null }
        });
    }
}

export const userActions = {
    login,
    edit,
    logout,
};