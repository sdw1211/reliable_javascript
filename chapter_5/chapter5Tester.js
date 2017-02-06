const Conference = require('./chapter5.js');

describe('Conference.attendeeCollection', () => {
    describe('contains(attendee)', () => {
        // contain test
        let collection, attendee;
        
        beforeEach(() => {
            collection = Conference.attendeeCollection();
            attendee = Conference.attendee('David', 'Seo');
            collection.add(attendee);
            collection.add(Conference.attendee('De', 'Hes'));
            collection.add(Conference.attendee('Yo', 'aaa'));
            collection.add(Conference.attendee('Anna', 'SDD'));
        });

        it('David Seo가 있는지 여부 체크', () => {
            expect(collection.contains(attendee)).toBe(true);
        });

    });

    describe('add(attendee)', () => {
        // add test
    });

    describe('remove(attendee)', () => {
        // remove test
    });

    describe('iterate(callback)', () => {
        let collection, callbackSpy;

        function addAttendeesToCollection(attendeeArray) {
            attendeeArray.forEach(attendee => {
                collection.add(attendee);
            });
        }

        function verifyCallbackWasExecutedForEachAttendee(attendeeArray) {
            expect(callbackSpy.calls.count()).toBe(attendeeArray.length);

            const allCalls = callbackSpy.calls.all();
            for (let i=0; i < attendeeArray.length; i++) {
                expect(allCalls[i].args[0]).toBe(attendeeArray[i]);
            }
        }

        beforeEach(() => {
            collection = Conference.attendeeCollection();
            callbackSpy = jasmine.createSpy();
        });

        it('빈 컬랙션에서는 콜백을 실행하지 않는다', () => {
            collection.iterate(callbackSpy);
            expect(callbackSpy).not.toHaveBeenCalled();
        });

        it('원소가 하나뿐인 컬렉션은 콜백을 한 번만 실행한다', () => {
            var attendees = [
                Conference.attendee('윤지', '김')
            ];

            addAttendeesToCollection(attendees);
            collection.iterate(callbackSpy);

            verifyCallbackWasExecutedForEachAttendee(attendees);
        });

        it('컬렉션 원소마다 한 번씩 콜백을 실행한다', () => {
            var attendees = [
                Conference.attendee('Tom', 'Kazansky'),
                Conference.attendee('Charlotte', 'Blackwood'),
                Conference.attendee('태영', '김')
            ];

            addAttendeesToCollection(attendees);
            collection.iterate(callbackSpy);

            verifyCallbackWasExecutedForEachAttendee(attendees);

        });
    });

    describe('Conference.checkInService', () => {
        var checkInService, checkInRecorder, attendee;

        beforeEach(() => {
            checkInRecorder = Conference.checkInRecorder();
            spyOn(checkInRecorder, 'recordCheckIn');

            checkInService = Conference.checkInService(checkInRecorder);
            attendee = Conference.attendee('동우', '서');
        });

        describe('checkInService.checkIn(attendee)', () => {
            it('참가자를 체크인 처리한 것으로 표시한다', () => {
                checkInService.checkIn(attendee);
                expect(attendee.isCheckedIn()).toBe(true);
            });

            it('체크인을 등록한다', () => {
                checkInService.checkIn(attendee);
                expect(checkInRecorder.recordCheckIn).toHaveBeenCalledWith(attendee);
            });
        });

    });
});