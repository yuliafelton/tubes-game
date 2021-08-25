import React from 'react';
import './AddButton.css';


function addButton({onAdd}) {
    return (
        <button onClick={onAdd} className="add-button">
            ADD TUBE
        </button>
    );
}

export default addButton;
