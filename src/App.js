import React, { Component } from 'react';
import './App.css';
import GuestList from "./components/GuestList";

class App extends Component {
    state ={
        isFiltered: false,
        pendingGuest:"",
        guests:[
            {
                name:'Thomi',
                isConfrimed: false,
                isEditing:false,
            },
            {
                name:'Jasir',
                isConfrimed: true,
                isEditing:false,
            },
            {
                name:'Pono',
                isConfrimed: true,
                isEditing:false,
            }
        ]
    }

    toggleConfirmationAt = indexToChange => this.setState({
        guests:this.state.guests.map((guest, index) =>{
            if(index === indexToChange){
                return{
                    ...guest,
                    isConfrimed: !guest.isConfrimed
                };
            }
            return guest;
        })
    });

    toggleGuestPropertyAt = (property, indexToChange) => this.setState({
        guests:this.state.guests.map((guest, index) =>{
            if(index === indexToChange){
                return{
                    ...guest,
                    [property]: !guest[property]
                };
            }
            return guest;
        })
    });

    //toggleConfirmationAt = index => this.toggleGuestPropertyAt("isConfirmed",index);

    removeGuestAt = index =>
        this.setState({
            guests:[
                ...this.state.guests.slice(0, index),
                ...this.state.guests.slice(index + 1)
            ]
        });

    toggleEditingAt = index => this.toggleGuestPropertyAt("isEditing",index);

    setNameAt = (name, indexToChange) => this.setState({
        guests:this.state.guests.map((guest, index) =>{
            if(index === indexToChange){
                return{
                    ...guest,
                    name
                };
            }
            return guest;
        })
    });

    toggleFilter = () => this.setState({
        isFiltered:!this.state.isFiltered
    });

    handleNameInput = e => this.setState({ pendingGuest: e.target.value});

    newGuestSubmitValue = e => {
        e.preventDefault();
        this.setState({
            guests:[
                {
                    name: this.state.pendingGuest,
                    isConfrimed: false,
                    isEditing: false
                },
                ...this.state.guests
            ],
            pendingGuest: ''
        });
    }
    getTotalInvited = () => this.state.guest.length;

    // getAttendingGuests = () =>
    // getUnconfirmedgGuests = () =>

    render() {
    return (
        <div className="App">
            <header>
                <h1>Reservation VIP</h1>
                <p>Reservation Apps</p>
                <form onSubmit={this.newGuestSubmitValue}>
                    <input
                        onChange={this.handleNameInput}
                        value={this.state.pendingGuest}
                        type="text"  placeholder="Invite Someone"/>
                        <button type="submit" name="submit" value="submit">Submit</button>
                </form>
            </header>
            <div className="main">
                <div>
                    <h2>Invitees</h2>
                    <label>
                        <input type="checkbox"
                        onChange={this.toggleFilter}
                        checked={this.state.isFiltered}/> Hide those who haven't responded
                    </label>
                </div>
                <table className="counter">
                    <tbody>
                    <tr>
                        <td>Attending:</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Unconfirmed:</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>3</td>
                    </tr>
                    </tbody>
                </table>
                <GuestList
                    guests={this.state.guests}
                    toggleConfirmationAt={this.toggleConfirmationAt}
                    toggleEditingAt={this.toggleEditingAt}
                    setNameAt={this.setNameAt}
                    isFiltered={this.state.isFiltered}
                    removeGuestAt={this.removeGuestAt}
                />
            </div>
        </div>
    );
  }
}

export default App;
