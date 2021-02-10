const fetchAllUsers = async () => {
    try {
        const fetchResponse = await fetch(`${process.env.REACT_APP_API_ENDPOINT}`);

        if (fetchResponse.ok === true) {
            const data = await fetchResponse.json();
            return data;
        }

        return fetchResponse;

    } catch (e) {
        return e;
    }
}

const addUserAPI = async (user) => {
    const settings = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };

    try {
        const fetchResponse = await fetch(`${process.env.REACT_APP_API_ENDPOINT}`, settings);

        if (fetchResponse.ok === true) {
            const data = await fetchResponse.json();
            return data;
        }

        return fetchResponse;

    } catch (e) {
        return e;
    }
}

const editUserAPI = async (user) => {
    const settings = {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };

    try {
        const fetchResponse = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/${user.id}`, settings);

        if (fetchResponse.ok === true) {
            const data = await fetchResponse.json();
            return data;
        }

        return fetchResponse;

    } catch (e) {
        return e;
    }
}

const deleteUserAPI = async (user) => {
    const settings = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };

    try {
        const fetchResponse = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/${user.id}`, settings);

        if (fetchResponse.ok === true) {
            const data = await fetchResponse.json();
            return data;
        }

        return fetchResponse;

    } catch (e) {
        return e;
    }
}

export { fetchAllUsers, addUserAPI, editUserAPI, deleteUserAPI };