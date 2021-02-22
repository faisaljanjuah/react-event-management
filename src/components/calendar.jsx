import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import GetDays from './getDays';

class Calendar extends Component {

    weekdaysShort = moment.weekdaysShort();
    months = moment.months();

    state = {
        today: moment(new Date()),
        currentMY: {
            selectedYear: parseInt(moment().format('YYYY')),
            selectedMonth: parseInt(moment().format('MM') - 1),
            selectedDate: parseInt(moment().format('D'))
        }
    }

    setToday = () => {
        const currentMY = { ...this.state.currentMY };
        currentMY.selectedYear = parseInt(moment(new Date()).format('YYYY'));
        currentMY.selectedMonth = parseInt(moment(new Date()).format('MM') - 1);
        currentMY.selectedDate = parseInt(moment(new Date()).format('D'));
        this.setState({ currentMY });
    }

    onChange = (e) => {
        const elm = e.currentTarget.name;
        const currentMY = { ...this.state.currentMY };
        currentMY[elm] = parseInt(e.currentTarget.value);
        this.setState({ currentMY });
    }

    setDate = (date, month, check) => {
        month--;
        const currentMY = { ...this.state.currentMY };
        currentMY.selectedDate = date;
        currentMY.selectedMonth = month;
        if (check === 'next') {
            if (month === 11) {
                currentMY.selectedMonth = 0;
                currentMY.selectedYear = currentMY.selectedYear + 1;
            }
            else { currentMY.selectedMonth = currentMY.selectedMonth + 1; }
        }
        else if (check === 'prev') {
            if (month === 0) {
                currentMY.selectedMonth = 11;
                currentMY.selectedYear = currentMY.selectedYear - 1;
            }
            else { currentMY.selectedMonth = currentMY.selectedMonth - 1; }
        }
        this.setState({ currentMY });
    }

    prevMonth = (sl) => {
        const currentMY = { ...this.state.currentMY };
        const selectedM = (sl.selectedMonth);
        if (selectedM < 1) {
            currentMY.selectedMonth = 11; // 11 is December
            currentMY.selectedYear = currentMY.selectedYear - 1;
        }
        else { currentMY.selectedMonth = currentMY.selectedMonth - 1; }
        this.setState({ currentMY });
    }

    nextMonth = (sl) => {
        const currentMY = { ...this.state.currentMY };
        const selectedM = (sl.selectedMonth);
        if (selectedM > 10) {
            currentMY.selectedMonth = 0; // 0 is January
            currentMY.selectedYear = currentMY.selectedYear + 1;
        }
        else { currentMY.selectedMonth = currentMY.selectedMonth + 1; }
        this.setState({ currentMY });
    }

    render() {
        const state = this.state;
        const weekdays = this.weekdaysShort.map(day => <th key={day} className="day weekDay">{day}</th>); // days in header
        const monthDigits = [];
        const allMonths = this.months;
        allMonths.map((md, d) => {
            monthDigits.push(d); return null;
        });
        const allYears = _.range(parseInt(state.today.format('YYYY')) - 100, parseInt(state.today.format('YYYY')) + 101); // array of 200 years
        return (
            <div className="eventCalendar">
                <div className="calendarHeader">
                    <div className="prevMonth changeMonth"><button onClick={() => this.prevMonth(state.currentMY)}>&#10094; <span>Prev Month</span></button></div>
                    <div className="currentMonthYear">
                        <button onClick={this.setToday}>Today</button>
                        <select name="selectedMonth" className="dateSelect selectMonth" onChange={this.onChange} value={state.currentMY.selectedMonth}>
                            {allMonths.map((am, m) => { return <option key={am} value={monthDigits[m]}>{am}</option> })}
                        </select>
                        <select name="selectedYear" className="dateSelect selectYear" onChange={this.onChange} value={state.currentMY.selectedYear}>
                            {allYears.map(ay => <option key={ay}>{ay}</option>)}
                        </select>
                    </div>
                    <div className="nextMonth changeMonth"><button onClick={() => this.nextMonth(state.currentMY)}><span>Next Month</span> &#10095;</button></div>
                </div>
                <table className="calendarTable">
                    <thead>
                        <tr className="calendarRow days">
                            {weekdays}
                        </tr>
                    </thead>
                    <tbody>
                        <GetDays getAllDays={state.currentMY} setDate={this.setDate} />
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Calendar;