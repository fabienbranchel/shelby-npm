import { SET_USER, IUserAction } from '../actions/user';

export default function authedUser(state = null, action: IUserAction): any {
    switch (action.type) {
        case SET_USER:
            return action.user;
        default:
            return state;
    }
}
