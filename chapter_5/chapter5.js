const Conference = Conference || {};
Conference.attendee = (firstName, lastName) => {
    let checkedIn = false, first = firstName || 'none', last = lastName || 'none';

    return {
        getFullName: () => `${first} ${last}`
        , isCheckedIn: () => checkedIn
        , checkedIn: () => {
            checkedIn = true;
        }
    };

};

Conference.attendeeCollection = () => {
    var attendees = [];

    return {
        contains: attendee => attendees.includes(attendee)
        , add: attendee => {
            if (!this.contains(attendee)) {
                attendees.push(attendee);
            }
        }, remove: attendee => {
            const searchIndex = attendees.findIndex(attendee);

            if (searchIndex > -1) {
                attendees.splice(searchIndex, 1);
            }
        }, iterate: callback => {

        }
    };
};

module.exports = Conference;