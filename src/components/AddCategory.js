import React, { useState } from "react";
import PropTypes from 'prop-types'

const AddCategory = ({ setCategorias }) => {
    const [inputValue, setInputValue] = useState('');

    const handleOnchange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategorias(categorias => [inputValue, ...categorias]);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleOnchange} />
        </form>
    );
};

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory;
