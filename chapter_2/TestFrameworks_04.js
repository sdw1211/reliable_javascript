function createReservation(passenger, flight, saver) {
    var reservation = {
        passengerInformation : passenger,
        flightInformation : flight
    };

    saver.saveReservation(reservation);

    return reservation;
}

module.exports = createReservation;