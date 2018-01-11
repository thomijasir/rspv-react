import React from 'react';
import PropTypes from 'prop-types';
import Guest from "./Guest";

const GuestList = props => {

    GuestList.propTypes ={
        guests:PropTypes.array.isRequired,
        toggleConfirmationAt:PropTypes.func.isRequired,
        toggleEditingAt:PropTypes.func.isRequired,
        setNameAt:PropTypes.func.isRequired,
        isFiltered:PropTypes.bool.isRequired,
        removeGuestAt: PropTypes.func.isRequired
    };

    return(
        <ul>
            {props.guests.filter(guest => !props.isFiltered || guest.isConfrimed).map((guest, index) =>
                <Guest
                    key={index}
                    name={guest.name}
                    isConfrimed={guest.isConfrimed}
                    isEditing={guest.isEditing}
                    handleConfirmation={() => props.toggleConfirmationAt(index)}
                    handleToggleEditing={() => props.toggleEditingAt(index)}
                    setName={text => props.setNameAt(text,index)}
                    handleRemove={() => props.removeGuestAt(index)}
                />
            )}
        </ul>
    );
}

export default GuestList;