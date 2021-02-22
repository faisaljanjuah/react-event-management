import React, { Component } from 'react';
import Popup from './modal';
import Calendar from './calendar';


class Schedule extends Component {
    state = {

    }
    render() {
        return (
            <div className="schedule-app">
                {/* <button data-toggle="modal" data-target=".schPopup">Open Modal</button> */}
                <Calendar />
                <Popup title="This is Header" />
            </div>
        );
    }
}

export default Schedule;