import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import { getEvents } from './getEvents';

class GetDays extends Component {

    firstDayOfMonth = (yy, mm) => {
        return moment(`${yy}-${mm}`, "YYYY-MM").startOf('month').format('d');
    }
    daysCount = (yy, mm) => {
        return moment(`${yy}-${mm}`, "YYYY-MM").daysInMonth();
    }
    addEvent = (date) => {
        const eventDetails = { _id: "", title: "", eventDate: "", startTime: "", endTime: "", description: "" };
        eventDetails.eventDate = date;
        this.props.addEvent(true, eventDetails, "Add");
    }

    formatTime = (t) => {
        t = new Date(t);
        return t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // 02:30PM
    }

    render() {

        const allEvents = getEvents();
        // creating date-wise Object to reduce Iterations...
        let eventsOfMonth = {};
        allEvents.forEach(item => {
            let eventDate = new Date(item.date); // ISO date to "Date Object"
            eventDate = eventDate.toLocaleDateString('en-us', { month: 'short', day: 'numeric', year: 'numeric' }); // output => Feb 9, 2020
            eventDate = eventDate.replace(/[^A-Za-z0-9]/g, ''); // output => Feb92020
            eventsOfMonth[eventDate] = item.events;
        });

        const today = new Date();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let sd = this.props.getAllDays; // selected Date
        let yy = sd.selectedYear, mm = sd.selectedMonth, dd = sd.selectedDate;
        mm = mm + 1;
        let allDays = moment(`${yy}-${mm}`, "YYYY-MM");
        let blankDaysBefore = [], daysOfMonth = [], blanksDaysAfter = [];
        // visible dates of previous month
        let lastDateOfPrev = parseInt(allDays.subtract(1, 'months').endOf('month').format('D'));
        let decrementer = parseInt(this.firstDayOfMonth(yy, mm));
        let countBefore = parseInt(this.firstDayOfMonth(yy, mm));
        for (let i = 0; i < countBefore; i++) { // blank Dates On Start Of Month
            decrementer--;
            let date = (lastDateOfPrev - decrementer);
            blankDaysBefore.push(<td key={`0${i}`} className="date blankDay">
                <div className="dayOfMonth">
                    <span>{date}</span>
                    <div className="eventActions">
                        <span className="icon add">Add</span>
                    </div>
                </div>
            </td>);
            // blankDaysBefore.push(<td key={`0${i}`} onClick={() => this.props.setDate(date, mm, 'prev')} className="date blankDay">{date}</td>); // blank Dates On Start Of Month
        }
        const dim = parseInt(this.daysCount(yy, mm));
        for (let date = 1; date <= dim; date++) {  // dates of month
            let className = (
                yy === today.getFullYear() &&
                mm === (today.getMonth() + 1) &&
                date === today.getDate()
            ) ? 'date weekDay today' : 'date weekDay';
            // blankData.eventDate = new Date(`${mm} ${date} ${yy}`);
            const eventDate = `${months[mm - 1]}${date}${yy}`;
            // daysOfMonth.push(<td key={date} className={className} onClick={() => this.props.setDate(date, mm, yy)}>
            daysOfMonth.push(<td key={date} className={className}>
                <div className="dayOfMonth">
                    <span>{date}</span>
                    <div className="eventActions">
                        {/* <span className="icon edit">Edit</span>
                        <span className="icon delete">Delete</span> */}
                        <span className="icon add" onClick={() => this.addEvent(new Date(`${mm} ${date} ${yy}`))}>Add</span>
                    </div>
                </div>
                {
                    eventsOfMonth[eventDate]
                    && <div className="eventList">
                        {
                            eventsOfMonth[eventDate].map(i => {
                                i.eventDate = (new Date(`${mm} ${date} ${yy}`)).toISOString();
                                return (
                                    <div data-toggle="modal" data-target="#viewEventPopup" className="event" key={i._id} onClick={() => this.props.showEvent(i)}>
                                        <span className="startTime">{this.formatTime(i.startTime)}</span>
                                        <span className="title">{i.eventTitle}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </td>);
        }
        // visible dates of next month
        let total = blankDaysBefore.length + daysOfMonth.length;
        let nextMonth = 1;
        while (total % 7 !== 0) {
            total++;
            let date = nextMonth;
            blanksDaysAfter.push(<td key={total} className="date blankDay">
                <div className="dayOfMonth">
                    <span>{date}</span>
                    <div className="eventActions">
                        <span className="icon add">Add</span>
                    </div>
                </div>
            </td>);
            // blanksDaysAfter.push(<td key={total} className="date blankDay" onClick={() => this.props.setDate(date, mm, 'next')}>{date}</td>);
            nextMonth++;
        }
        let slots = _.chunk([...blankDaysBefore, ...daysOfMonth, ...blanksDaysAfter], 7);
        const dateRows = slots.map((dr, i) => <tr key={`tr${i}`} className="calendarRow dates">{dr}</tr>);
        return dateRows;
    }
}

export default GetDays;