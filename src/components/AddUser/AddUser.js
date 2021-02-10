import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './styles.css';

const AddUser = () => {
    return (
        <div >
            <Link className="add-user-link" to='add'><Button type="primary">ADD USER</Button></Link>
        </div>
    )
}

export default AddUser;