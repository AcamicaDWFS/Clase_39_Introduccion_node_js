const opp = (oppType, arrNum, opp) => arrNum.reduce((a, b) => {
    let identifier = opp[oppType][1];
    return eval(a + identifier + b);
})

module.exports = { opp };