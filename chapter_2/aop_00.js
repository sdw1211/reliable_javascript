const AOP = {
    around : (fnName, advice, fnObj) => {
        const fn = fnObj[fnName]; 
        fnObj[fnName] = () => {
            const targetContext = {};
            advice.call(targetContext, {fn});
        }
    }
};

module.exports = AOP;