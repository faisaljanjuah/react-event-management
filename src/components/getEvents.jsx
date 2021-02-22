const events = [
    {
        _id: "day815",
        date: "2020-02-08T19:00:00.000Z",
        events: [
            {
                _id: "ev34",
                startTime: "2020-02-09T04:00:00.000Z",
                endTime: "2020-02-09T06:30:00.000Z",
                eventTitle: "Random Title",
                description: "Random Description"
            },
            {
                _id: "ev35",
                startTime: "2020-02-09T06:45:00.000Z",
                endTime: "2020-02-09T08:30:00.000Z",
                eventTitle: "Random Title",
                description: "Random Description"
            }
        ]
    },
    {
        _id: "day816",
        date: "2020-02-17T19:00:00.000Z",
        events: [
            {
                _id: "ev36",
                startTime: "2020-02-18T11:00:00.000Z",
                endTime: "2020-02-18T17:30:00.000Z",
                eventTitle: "Random Title",
                description: "Random Description"
            }
        ]
    },
    {
        _id: "day817",
        date: "2020-02-22T19:00:00.000Z",
        events: [
            {
                _id: "ev37",
                startTime: "2020-02-23T05:00:00.000Z",
                endTime: "2020-02-23T06:30:00.000Z",
                eventTitle: "Weekly Meeting",
                description: "Weekly Description"
            }
        ]
    },
    {
        _id: "day818",
        date: "2020-02-23T19:00:00.000Z",
        events: [
            {
                _id: "ev38",
                startTime: "2020-02-24T05:00:00.000Z",
                endTime: "2020-02-24T06:30:00.000Z",
                eventTitle: "Weekly Meeting",
                description: "Weekly Description"
            },
            {
                _id: "ev39",
                startTime: "2020-02-24T11:45:00.000Z",
                endTime: "2020-02-24T12:30:00.000Z",
                eventTitle: "Evening Title",
                description: "Evening Description"
            }
        ]
    },
    {
        _id: "day819",
        date: "2020-02-15T19:00:00.000Z",
        events: [
            {
                _id: "ev40",
                startTime: "2020-02-16T06:00:00.000Z",
                endTime: "2020-02-16T06:30:00.000Z",
                eventTitle: "Half Hour Title",
                description: "Half Hour Description"
            },
            {
                _id: "ev41",
                startTime: "2020-02-15T21:45:00.000Z",
                endTime: "2020-02-16T10:30:00.000Z",
                eventTitle: "After Lunch Title",
                description: "After Lunch Description"
            }
        ]
    },
    {
        _id: "day820",
        date: "2020-02-25T19:00:00.000Z",
        events: [
            {
                _id: "ev42",
                startTime: "2020-02-26T05:00:00.000Z",
                endTime: "2020-02-26T06:30:00.000Z",
                eventTitle: "Last Title",
                description: "Last Description"
            }
        ]
    },

    {
        _id: "day821",
        date: "2020-03-01T19:00:00.000Z",
        events: [
            {
                _id: "ev46",
                startTime: "2020-03-02T06:00:00.000Z",
                endTime: "2020-03-02T06:30:00.000Z",
                eventTitle: "Half March Title",
                description: "Half Hour Description"
            },
            {
                _id: "ev47",
                startTime: "2020-03-02T09:45:00.000Z",
                endTime: "2020-03-02T10:30:00.000Z",
                eventTitle: "After March Title",
                description: "After Lunch Description"
            }
        ]
    },
    {
        _id: "day822",
        date: "2020-03-02T19:00:00.000Z",
        events: [
            {
                _id: "ev48",
                startTime: "2020-03-03T05:00:00.000Z",
                endTime: "2020-03-03T06:30:00.000Z",
                eventTitle: "Last March",
                description: "Last Description"
            }
        ]
    }
];

export function getEvents() {
    return events;
}