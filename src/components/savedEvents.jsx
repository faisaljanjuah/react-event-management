const events = [
    {
        _id: "day815",
        start: "Dec 09 2019",
        end: "Dec 09 2019",
        events: [
            {
                _id: "ev34",
                stime: "10:00 AM",
                etime: "11:30 AM",
                title: "Random Title",
                description: "Random Description"
            },
            {
                _id: "ev35",
                stime: "11:45 AM",
                etime: "01:30 PM",
                title: "Random Title",
                description: "Random Description"
            }
        ]
    },
    {
        _id: "day816",
        start: "Dec 18 2019",
        end: "Dec 19 2019",
        events: [
            {
                _id: "ev36",
                stime: "04:00 PM",
                etime: "10:30 AM",
                title: "Random Title",
                description: "Random Description"
            }
        ]
    },
    {
        _id: "day817",
        start: "Dec 23 2019",
        end: "Dec 23 2019",
        events: [
            {
                _id: "ev37",
                stime: "10:00 AM",
                etime: "11:30 AM",
                title: "Weekly Meeting",
                description: "Weekly Description"
            }
        ]
    },
    {
        _id: "day818",
        start: "Dec 24 2019",
        end: "Dec 24 2019",
        events: [
            {
                _id: "ev38",
                stime: "10:00 AM",
                etime: "11:30 AM",
                title: "Weekly Meeting",
                description: "Weekly Description"
            },
            {
                _id: "ev39",
                stime: "04:45 AM",
                etime: "05:30 PM",
                title: "Evening Title",
                description: "Evening Description"
            }
        ]
    },
    {
        _id: "day819",
        start: "Dec 16 2019",
        end: "Dec 16 2019",
        events: [
            {
                _id: "ev40",
                stime: "11:00 AM",
                etime: "11:30 AM",
                title: "Half Hour Title",
                description: "Half Hour Description"
            },
            {
                _id: "ev41",
                stime: "02:45 AM",
                etime: "03:30 PM",
                title: "After Lunch Title",
                description: "After Lunch Description"
            }
        ]
    },
    {
        _id: "day820",
        start: "Dec 26 2019",
        end: "Dec 26 2019",
        events: [
            {
                _id: "ev42",
                stime: "10:00 AM",
                etime: "11:30 AM",
                title: "Last Title",
                description: "Last Description"
            }
        ]
    }
];

export function getEvents() {
    return events;
}