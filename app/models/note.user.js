module.exports = class User {
  constructor(name){
    const numberShot = 3;
    this.name = name;
    this._shot = numberShot;

  }
  getName(){
    return this._location;
  }
  setName(location) {
    this._location = location;
  }
  getLocation(){
    return this._location;
  }
  setLocation(location) {
    this._location = location;
  }
  lowerShot(){
    this.shot -= 1;
  }
  reloadShot(){
    this.shot = numberShot;
  }


}
