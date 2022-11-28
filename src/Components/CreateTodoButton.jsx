import React from 'react';
import "../styles/CreateTodoButton.css"

const CreateTodoButton = ({setOpenModal}) => {
    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
    }

    return (
        <div className="modal__container">
            <button onClick={onClickButton} className="modal__button">+</button>
        </div>
    );
}

export default CreateTodoButton;