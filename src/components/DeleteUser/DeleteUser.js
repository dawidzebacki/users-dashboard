import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncDeleteUser } from '../../store/usersSlice';
import { DeleteOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';

const DeleteUser = ({ id }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const handleDeleteUser = () => {
        setLoading(true);
        dispatch(asyncDeleteUser({
            id: id,
        }))
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        if (loading) {
            setTimeout(() => setLoading(false), 10000)
        }
    }, [loading]);

    return (
        <>
            <DeleteOutlined
                style={{ fontSize: '22px', color: '#D11A2A' }}
                onClick={showModal} />

            <Modal
                title="Delete user"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={() => handleDeleteUser(id)}>
                        Delete
                    </Button>,
                ]}>
                <p>Are you sure that do you want to delete this user?</p>
            </Modal>
        </>
    )
}

export default DeleteUser;