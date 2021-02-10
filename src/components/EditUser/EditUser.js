
import React from 'react';
import { Link } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';

const EditUser = ({ id }) => {

    return (
        <>
            <Link to={`edit/${id}`}>
                <EditOutlined style={{ fontSize: '22px', color: '#1890ff' }} />
            </Link>
        </>
    )
}

export default EditUser;