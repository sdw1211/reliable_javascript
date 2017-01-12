class DIContainer {
    constructor() {
        this.messages = {
            registerRequiresArgs : `이 생성자 함수는 인자가 3개 있어야 합니다: 문자열, 문자열 배열, 함수.`
        };
        this.registrations = [];
    }

    register(name, dependencies, func) {
        if (typeof name !== 'string'
            || !Array.isArray(dependencies)
            || typeof func !== 'function') {
                throw new Error(this.messages.registerRequiresArgs);
        }

        for(let dependency of dependencies) {
            if (typeof dependency !== 'string') {
                throw new Error(this.messages.registerRequiresArgs);
            }
        }

        this.registrations[name] = {func: func};
    }

    get(name) {
        return this.registrations[name] && this.registrations[name].func();
    }
}

module.exports = DIContainer;