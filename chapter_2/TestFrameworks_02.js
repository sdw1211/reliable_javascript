function createReservation(passenger, flight) {
    return {
        passengerInformation : passenger,
        flightInformation : flight
    }
}

module.exports = createReservation;