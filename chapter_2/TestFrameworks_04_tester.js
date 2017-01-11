var createReservation = require('./TestFrameworks_04.js');
var ReservationSaver = require('./TestFrameworks_04_saver.js');

describe('createReservation(passenger, fligtht)', function() {
    var testPassenger, testFlight, testRservation, testSaver;

    beforeEach(function() {
        testPassenger = {
            firstName : '윤지',
            lastName: '김'
        };

        testFlight = {
            number: '3443',
            carrier: '대한항공',
            destination: '울산'
        };

        testSaver = new ReservationSaver();
        spyOn(testSaver, 'saveReservation');
        testRservation = createReservation(testPassenger, testFlight, testSaver);

    });

    it('주어진 passenger 를 passengerInfomation 프로퍼티에 할당한다.', function() {
        expect(testRservation.passengerInformation).toBe(testPassenger);
    });

    it('주어진 passenger 를 flightInformation 프로퍼티에 할당한다.', function() {
        expect(testRservation.flightInformation).toBe(testFlight);
    });
   
    it('예약 정보를 저장한다.', function() {
        expect(testSaver.saveReservation).toHaveBeenCalled();
    });
});