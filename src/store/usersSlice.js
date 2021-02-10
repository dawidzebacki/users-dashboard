import { createSlice } from '@reduxjs/toolkit';
import { fetchAllUsers } from '../api/apiHandler';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        api: {
            statusText: "",
            status: 200,
        }
    },
    reducers: {
        fetchUsers: (state, action) => {
            state.users = action.payload
        },
        apiError: (state, action) => {
            state.api.statusText = action.payload.statusText;
            state.api.status = action.payload.status;
        }
    },
});

export const { fetchUsers, apiError } = usersSlice.actions;

export const asyncFetchUsers = () => {
    return async dispatch => {
        const data = await fetchAllUsers();

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

export const selectUsers = state => state.users.users;
export const selectApiResponse = state => {
    return {
        status: state.users.api.status,
        statusText: state.users.api.statusText,
    }
}

export default usersSlice.reducer;
