import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input } from 'antd';
import {
    selectUser,
    selectNextUserId,
    asyncAddUser,
    asyncEditUser,
} from '../../store/usersSlice';
import Title from '../Title/Title';
import "./styles.css";
import { validate } from '../../utils/formHelpers';

const Form = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();

    let mode = '';
    let currentId = '';

    if (location.pathname.split('/')[1] === 'add') {
        mode = 'add'
    } else {
        mode = 'edit'
        currentId = location.pathname.split('/')[2];
    }

    const maxId = useSelector(selectNextUserId);
    const user = useSelector(selectUser(Number(currentId)))

    const intialValues = {
        id: maxId,
        name: "",
        email: "",
        username: "",
        address: {
            city: ""
        }
    };

    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        if (mode === 'add') {
            dispatch(asyncAddUser(formValues));
        } else {
            dispatch(asyncEditUser(formValues));
        }
        setTimeout(() => goHome(), 3000);
    };

    const goHome = () => {
        history.push("/");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (user) {
            const intialValues = {
                id: user.id,
                name: user.name,
                email: user.email,
                address: {
                    city: user.city,
                },
                username: user.username,
            };
            setFormValues(intialValues);
        }
    }, [user]);

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submit();
        }
        // eslint-disable-next-line
    }, [formErrors]);

    return (
        <div className="container">

            {mode === 'add' ?
                <Title className="title--smaller" title="Add user" />
                :
                <Title className="title--smaller" title="Edit user" />
            }

            {Object.keys(formErrors).length === 0 && isSubmitting && (
                <span className="success-msg">Form submitted successfully</span>
            )}

            <form onSubmit={handleSubmit} noValidate>

                <div className="form-row">
                    <label htmlFor="name">Name</label>
                    <Input
                        type="name"
                        name="name"
                        id="name"
                        maxLength={32}
                        bordered
                        value={formValues.name}
                        onChange={handleChange}
                        className={formErrors.name && "form-row__input-error"}
                    />
                    {formErrors.name && (
                        <span className="form-row__error">{formErrors.name}</span>
                    )}
                </div>

                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        maxLength={40}
                        value={formValues.email}
                        onChange={handleChange}
                        className={formErrors.email && "form-row__input-error"}
                    />
                    {formErrors.email && (
                        <span className="form-row__error">{formErrors.email}</span>
                    )}
                </div>

                <div className="form-buttons">
                    <Button
                        className="form-buttons__button"
                        type="primary"
                        onClick={() => history.push("/")}>
                        Cancel
                    </Button>
                    <Button
                        className="form-buttons__button"
                        onClick={handleSubmit}
                        disabled={Object.keys(formErrors).length === 0 && isSubmitting}
                        type="primary">
                        OK
                    </Button>
                </div>

            </form>
        </div>
    );
};

export default Form;
