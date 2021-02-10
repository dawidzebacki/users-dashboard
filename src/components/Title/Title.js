import React from 'react';
import './styles.css';

const Title = ({ title, className }) => {
    return <h1 className={`title ${className}`}>{title}</h1>
}

export default Title;