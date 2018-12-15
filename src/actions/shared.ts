import { setUser } from './user';

export function login(username: string) {
    return (dispatch: Function) => {
        dispatch(setUser(username))
    }
};