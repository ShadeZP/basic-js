module.exports = function countCats(matrix) {
    // remove line with error and write your code here
    let count = 0;
    matrix.forEach(element => {
      element.forEach(elem => { 
        if (elem === "^^") {
          count++;
        }      
      })
    });
    return count;
};
