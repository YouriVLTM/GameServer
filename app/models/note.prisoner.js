const User = require('./note.user.js');

module.exports = class Prisoner extends User {
  constructor(name){
    super(name);
    this._function = "Prisoner";
  }



}
