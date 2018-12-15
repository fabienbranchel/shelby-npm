export const SET_USER = 'SET_USER';

export interface IUserAction {
    type: string,
    user: string
}

export function setUser(user: string): IUserAction {
    return {
        type: SET_USER,
        user
    }
}
