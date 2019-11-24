const User = require('./note.user.js');

module.exports = class Agent extends User {
  constructor(name){
    super(name);
    this._function = "Agent";
    this.icon = "agent.png"
  }

  getFunction(){
    return this._function;
  }



}
