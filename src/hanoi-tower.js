module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let answer = {
        turns : Math.pow (2, disksNumber),
        seconds : turns*turnsSpeed*3600,
    }
    
    return answer;
}