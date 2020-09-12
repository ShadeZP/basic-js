module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  if (!Array.isArray(members)) {
    return false;
  }

  name = [];

  members.forEach(element => {
    if (typeof element === 'string') {
      name.push(element.trim().toUpperCase()[0]);
    };
  });
  return name.sort().join('')
};
