import { Types } from '../../config/actionTypes'

const initialState = { loggedIn: false, token: null, userData: null };

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