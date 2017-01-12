const Attendee = (service, messenger, attendeeId) => {
    if (!(this instanceof Attendee)) {
        return new Attendee(attendeeId);
    }

    this.attendeeId = attendeeId;
    this.service = service;
    this.messenger = messenger;
};

Attendee.prototype.reserve = sessionId => {
    if (this.service.reserve(this.attendeeId, sessionId)) {
        this.messenger.success(`좌석 예약이 완료되었습니다.! 고객님은 ${this.service.getRemainingReservations()} 좌석을 추가 예약하실 수 있습니다.`)
    } else {
        this.messenger.failure(`죄송합니다. 해당 좌석은 예약하실 수 없습니다.`);
    }
};