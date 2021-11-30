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

        let projectUser = loadFromLocalStorage();
        let userData = projectUser.userData

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
        localStorage.removeItem('projectUser');
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