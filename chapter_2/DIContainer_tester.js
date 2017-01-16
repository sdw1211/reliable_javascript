const DIContainer = require('./DIContainer_00.js');


describe('DIContainer', () => {
    let container;

    beforeEach(() => {
        container = new DIContainer;
    });

    describe('register(name, dependencies, func)', () => {
        it('인자가 하나라도 빠졌거나 타입이 잘못되면 예외를 던진다', () => {
            const badArgs = [
                []
                , ['name']
                , ['name', ['dependency1', 'dependency2']]
                , ['name', () => {}]
                , [1, ['a', 'b'], () => {}]
                , ['name', [1,2], () => {}]
                , ['name', ['a', 'b'], 'aaaaaa']
            ];

            badArgs.forEach(args => {
                
                expect(() => {
                    container.register.apply(container, args);
                }).toThrowError(container.messages.registerRequiresArgs);
            });
        });
    });

    describe('get(name)', () => {
        it('성명이 등록되어 있지 않으면 undefined를 반환한다.', () => {
            expect(container.get('notDefined')).toBeUndefined();
        });
        it('등록된 함수를 실행한 결과를 반환한다.', () => {
            const name = 'MyName', returnFromRegisteredFunction = "something";

            container.register(name, [], function() {
                return returnFromRegisteredFunction;
            });


            expect(container.get(name)).toBe(returnFromRegisteredFunction);
        });
        it('등록된 함수에 의존성을 제공한다.', () => {
            const main = 'main', dep1='dep1', dep2='dep2';
            let mainFunc;

            container.register(main, [dep1, dep2], function(dep1Func, dep2Func) {
                return function() {
                    return dep1Func() + dep2Func();
                };
            });

            container.register(dep1, [], function() {
                return function() {
                    return 1;
                };
            });

            container.register(dep2, [], function() {
                return function() {
                    return 2;
                };
            });

            mainFunc = container.get(main);
            expect(mainFunc()).toBe(3);
        });
    });


});