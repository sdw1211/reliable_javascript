const AOP = require('./aop_00.js');

describe('AOP', () => {

    let targetObj, executionsPoints;

    beforeEach(() => {
        targetObj = {
            targetFn: () => {
                executionsPoints.push('targetFn');
            }
        };

        executionsPoints = [];
        
    });

    it('타깃 함수를 호출 시 어드바이스를 실행하도록 한다.', () => {

        let executedAdvise = false;
        const advice = () => {
            executedAdvise = true;
        };

        AOP.around('targetFn', advice, targetObj);
        targetObj.targetFn();
        expect(executedAdvise).toBe(true);
    });

    it('어드바이스가 타깃 호출을 래핑한다.', () => {

        const wrappingAdvice = targetInfo => {
            executionsPoints.push('wrappingAdvice - 처음');
            targetInfo.fn();
            executionsPoints.push('wrappingAdvice - 끝');
        };

        AOP.around('targetFn', wrappingAdvice, targetObj);
        targetObj.targetFn();
        expect(executionsPoints).toEqual(['wrappingAdvice - 처음', 'targetFn', 'wrappingAdvice - 끝']);
    });

    it('마지막 어드바이스가 기존 어드바이스에 대해 실행되는 방식으로 체이닝할 수 있다.', () => {
        var adviceFactory = adviceID => targetInfo => {
            executionsPoints.push(`wrappingAdvice - 처음 ${adviceID}`);
            targetInfo.fn();
            executionsPoints.push(`wrappingAdvice - 끝 ${adviceID}`);
        };

        AOP.around('targetFn', adviceFactory('안쪽'), targetObj);
        AOP.around('targetFn', adviceFactory('바깥쪽'), targetObj);

        targetObj.targetFn();

        expect(executionsPoints).toEqual([
            'wrappingAdvice - 처음 바깥쪽',
            'wrappingAdvice - 처음 안쪽',
            'targetFn',
            'wrappingAdvice - 끝 안쪽',
            'wrappingAdvice - 끝 바깥쪽'
        ]);
    });
});