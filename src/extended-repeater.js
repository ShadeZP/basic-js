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
        additionalRepeatStr = additionalRepeatStr + addition + additionSeparator;
    }

    additionalRepeatStr = additionalRepeatStr + addition;

    for (let i = 1; i<repeatTimes; i++) {
        repeatStr = repeatStr + str + additionalRepeatStr + separator;
    }

    repeatStr = repeatStr +str + additionalRepeatStr;

    return repeatStr;
};
  