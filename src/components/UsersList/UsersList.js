import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Space } from 'antd';
import { selectUsers } from '../../store/usersSlice';

import DeleteUser from '../DeleteUser/DeleteUser';
import EditUser from '../EditUser/EditUser';

import './styles.css';

const UsersList = () => {

    const usersList = useSelector(selectUsers);

    const columns = [
        {
            title: 'Id',
            className: 'table',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            sorter: (a, b) => {
                const prev = a.username.toLowerCase();
                const next = b.username.toLowerCase();

                if (prev < next) return -1;
                else if (prev > next) return 1;
                return 0;
            }
        },
        {
            title: 'E-mail',
            key: 'email',
            dataIndex: 'email',
        },
        {
            title: 'City',
            key: 'city',
            render: (record) => {
                return record.address.city
            }
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (record) => (
                <Space size="middle">
                    <EditUser id={record.id} name={record.name} email={record.email} />
                    <DeleteUser id={record.id} />
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table rowClassName="table" columns={columns} dataSource={usersList} rowKey="id" />
        </>
    )
}

export default UsersList;