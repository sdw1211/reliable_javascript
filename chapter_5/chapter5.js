const Conference = {};
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
        , add: function(attendee) {
            if (!this.contains(attendee)) {
                attendees.push(attendee);
            }
        }, remove: attendee => {
            const searchIndex = attendees.findIndex(attendee);

            if (searchIndex > -1) {
                attendees.splice(searchIndex, 1);
            }
        }, iterate: callback => {
            attendees.forEach(callback);
        }
    };
};

Conference.checkInRecorder = () => {
    return {
        recordCheckIn: attendee => {

        }
    };
};

Conference.checkInService = checkInRecorder => {
    return {
        checkIn: attendee => {
            attendee.checkedIn();
            checkInRecorder.recordCheckIn(attendee);
        }
    }
};


module.exports = Conference;