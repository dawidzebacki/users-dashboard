import { createSlice } from '@reduxjs/toolkit';
import {
    fetchUsersAPI,
    addUserAPI,
    editUserAPI,
    deleteUserAPI
} from '../api/apiHandler';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        api: {
            statusText: "",
            status: 200,
        }
    },
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    reducers: {
        fetchUsers: (state, action) => {
            state.users = action.payload
        },
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload.id)
        },
        editUser: (state, action) => {
            state.users.map((user) => {
                if (user.id === action.payload.id) {
                    user.name = action.payload.name
                    user.email = action.payload.email
                }
                return user;
            })
        },
        apiError: (state, action) => {
            state.api.statusText = action.payload.statusText;
            state.api.status = action.payload.status;
        }
    },
});

export const {
    fetchUsers,
    addUser,
    deleteUser,
    editUser,
    apiError
} = usersSlice.actions;

export const asyncFetchUsers = () => {
    return async dispatch => {
        const data = await fetchUsersAPI();

        if (data.ok === false) {
            const error = {
                statusText: data.statusText,
                status: data.status
            }
            dispatch(apiError(error))
        } else {
            dispatch(fetchUsers(data))
        }

    }
};

export const asyncAddUser = (user) => {
    return async dispatch => {
        const data = await addUserAPI(user);

        if (data.ok === false) {
            const error = {
                statusText: data.statusText,
                status: data.status
            }
            dispatch(apiError(error))
        } else {
            dispatch(addUser(user));
        }

    }
};

export const asyncEditUser = (user) => {
    return async dispatch => {
        const data = await editUserAPI(user);

        if (data.ok === false) {
            const error = {
                statusText: data.statusText,
                status: data.status
            }
            dispatch(apiError(error))
        } else {
            dispatch(editUser(data));
        }

    }
};

export const asyncDeleteUser = (user) => {
    return async dispatch => {
        const data = await deleteUserAPI(user);

        if (data.ok === false) {
            const error = {
                statusText: data.statusText,
                status: data.status
            }
            dispatch(apiError(error))
        } else {
            dispatch(deleteUser(user));
        }

    }
};

export const selectUsers = state => state.users.users;

export const selectUser = id => state => {
    return state.users.users.find(user => user.id === id);
};

export const selectNextUserId = state => {

    if (state.users.users.length > 1) {
        return Math.max(...state.users.users.map(el => el.id)) + 1;
    }

    return 1;
};

export const selectApiResponse = state => {
    return {
        status: state.users.api.status,
        statusText: state.users.api.statusText,
    }
};

export default usersSlice.reducer;
