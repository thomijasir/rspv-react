import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

const PendingGuest = props => {

    PendingGuest.propTypes ={
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
                handleNameEdits={e => props.setName(e.target.value)}>{props.name}
                </GuestName>
        </li>
    );

};

export default PendingGuest;