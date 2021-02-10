import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncDeleteUser } from '../../store/usersSlice';
import {
    DeleteOutlined,
    LoadingOutlined,
} from '@ant-design/icons';

const DeleteUser = ({ id }) => {

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const handleDeleteUser = () => {
        setLoading(true);
        dispatch(asyncDeleteUser({
            id: id,
        }))
    }

    useEffect(() => {
        if (loading) {
            setTimeout(() => setLoading(false), 10000)
        }
    }, [loading]);


    return (
        <>
            { loading ?
                (<LoadingOutlined style={{ fontSize: '22px', color: '#1890ff' }} />) :
                (<DeleteOutlined
                    style={{ fontSize: '22px', color: '#D11A2A' }}
                    onClick={handleDeleteUser} />)
            }
        </>
    )
}

export default DeleteUser;