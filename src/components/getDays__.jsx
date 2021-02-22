import React from 'react';
import moment from 'moment';
import _ from 'lodash';

class GetDays extends React.Component {
    firstDayOfMonth = (yy, mm) => {
        return moment(`${yy}-${mm}`, "YYYY-MM").startOf('month').format('d');
    }
    daysCount = (yy, mm) => {
        return moment(`${yy}-${mm}`, "YYYY-MM").daysInMonth();
    }
    render() {
        let sd = this.props.getAllDays; // selected Date
        let yy = sd.selectedYear, mm = sd.selectedMonth, dd = sd.selectedDate;
        mm = mm + 1;
        let allDays = moment(`${yy}-${mm}`, "YYYY-MM");
        let blankDaysBefore = [], daysOfMonth = [], blanksDaysAfter = [];
        // visible dates of previous month
        let lastDateOfPrev = parseInt(allDays.subtract(1, 'months').endOf('month').format('D'));
        let decrementer = parseInt(this.firstDayOfMonth(yy, mm));
        let countBefore = parseInt(this.firstDayOfMonth(yy, mm));
        for (let i = 0; i < countBefore; i++) {
            decrementer--;
            let date = (lastDateOfPrev - decrementer);
            blankDaysBefore.push(<td key={`0${i}`} className="date blankDay">
                <div className="dayOfMonth">
                    <span>{date}</span>
                    <div className="eventActions">
                        <span className="icon add">Add</span>
                    </div>
                </div>
            </td>); // blank Dates On Start Of Month
            // blankDaysBefore.push(<td key={`0${i}`} onClick={() => this.props.setDate(date, mm, 'prev')} className="date blankDay">{date}</td>); // blank Dates On Start Of Month
        }
        const dim = parseInt(this.daysCount(yy, mm));
        for (let date = 1; date <= dim; date++) {
            let className = date === dd ? 'date weekDay today' : 'date weekDay';
            // daysOfMonth.push(<td key={date} className={className} onClick={() => this.props.setDate(date, mm, yy)}>
            daysOfMonth.push(<td key={date} className={className}>
                <div className="dayOfMonth">
                    <span>{date}</span>
                    <div className="eventActions">
                        {/* <span className="icon edit">Edit</span>
                        <span className="icon delete">Delete</span> */}
                        <span className="icon add">Add</span>
                    </div>
                </div>
            </td>); // dates of month
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