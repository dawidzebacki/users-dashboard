import React, { useState, useEffect } from 'react';
import { useSelector, } from 'react-redux';
import {
    selectApiResponse,
} from '../../store/usersSlice';

const ApiError = () => {

    const API = useSelector(selectApiResponse);

    const [err, setErr] = useState(false);

    useEffect(() => {
        if (API.status !== 200) {
            setErr(true);
        }
    }, [API]);

    return (
        <>
            {err && <p>error api</p>}
        </>
    )
}

export default ApiError;