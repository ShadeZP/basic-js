module.exports = function repeater(str, {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
}) {
    let repeatStr = ''
    let additionalRepeatStr =''



    for (let i = 1; i<additionRepeatTimes; i++) {
        additionalRepeatStr += addition + additionSeparator;
    }

    for (let i = 1; i<repeatTimes; i++) {
        repeatStr = repeatStr + str + separator + additionalRepeatStr;
    }

    repeatStr += str;

    return repeatStr;
};
  