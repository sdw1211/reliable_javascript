var createReservation = require('./TestFrameworks_02.js');

describe('createReservation(passenger, fligtht)', function() {
    var testPassenger, testFlight, testRservation;

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

        testRservation = createReservation(testPassenger, testFlight);

    });

    it('주어진 passenger 를 passengerInfomation 프로퍼티에 할당한다.', function() {
        expect(testRservation.passengerInformation).toBe(testPassenger);
    });

     it('주어진 passenger 를 flightInformation 프로퍼티에 할당한다.', function() {
        expect(testRservation.flightInformation).toBe(testFlight);
    });
   
});