import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

const Guest = props => {

    Guest.propTypes ={
        isConfrimed:PropTypes.bool.isRequired,
        isEditing:PropTypes.bool.isRequired,
        handleConfirmation:PropTypes.func.isRequired,
        handleToggleEditing:PropTypes.func.isRequired,
        setName:PropTypes.func.isRequired,
        handleRemove:PropTypes.func.isRequired

    };


    return(
        <li>
            <GuestName
                isEditing={props.isEditing}
                handleNameEdits={e => props.setName(e.target.value)}>{props.name}</GuestName>
            <label>
                <input type="checkbox"
                       checked={props.isConfrimed}
                        onChange={props.handleConfirmation}/> Confirmed
            </label>
            <button onClick={props.handleToggleEditing}>{props.isEditing ? "Save" : "Edit"}</button>
            <button onClick={props.handleRemove}>Remove</button>
        </li>
    );

};

export default Guest;