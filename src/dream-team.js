const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  
  members = members.filter(name => typeof name === 'string')
  .map(name => name.replace(/ /g, '')[0].toUpperCase())
  .sort()
  .join('');
  
  return members || false;
}

module.exports = {
  createDreamTeam
};
