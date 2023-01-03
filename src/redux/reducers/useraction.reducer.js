import { Types } from '../../config/actionTypes'
import { loadFromLocalStorage } from '../../helper/LocalstorageHelper'

var nullState = { 
    loggedIn: false, 
    token : null , 
    userData : null
} 
const user = loadFromLocalStorage();
const initialState = user ? { loggedIn: user.loggedIn , token : user.token , userData : user.userData } : nullState ;

export function authentication(state = initialState, action) {
    
    switch (action.type) {
        case Types.LOGIN:
            return {
                loggedIn: true,
                token: action.payload.token,
                userData: action.payload.userData
            };

        case Types.EDIT:
            return {
                ...state,
                token: action.payload.token,
                userData: action.payload.userData
            };

        case Types.LOGOUT:
            return {
                loggedIn: false,
                token: null,
                userData: null,
            }

        default:
            return state
    }
}