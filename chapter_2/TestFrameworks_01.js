function createReservation(passenger, flight) {
    return {
        passengerInfo: passenger,
        flightInfo: flight
    };
}

module.exports = createReservation;