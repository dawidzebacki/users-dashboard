import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectApiResponse,
} from '../../store/usersSlice';
import { notification } from 'antd';
import { WarningOutlined } from '@ant-design/icons';

import { apiError } from '../../store/usersSlice';

const ApiError = () => {

    const dispatch = useDispatch();
    const API = useSelector(selectApiResponse);

    const openNotification = () => {
        notification.open({
            message: 'API Issue',
            duration: 5,
            description:
                'API responded with an incorrect message, the expected action could not be performed.',
            icon: <WarningOutlined style={{ color: '#ffa940' }} />,
        });
    };

    useEffect(() => {
        if (API.status !== 200) {
            openNotification();
            const error = {
                statusText: "",
                status: 200
            }
            dispatch(apiError(error))
        }
        // eslint-disable-next-line
    }, [API]);

    return (
        <>
        </>
    )
}

export default ApiError;