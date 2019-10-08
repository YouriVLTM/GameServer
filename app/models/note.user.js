module.exports = class User {
  constructor(name){
    const numberShot = 3;
    this.setName(name);
    this._shot = numberShot;
    this.location = null

  }
  getName(){
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getLocation(){
    return this.location;
  }
  setLocation(location) {
    this.location = location;
  }
  lowerShot(){
    this.shot -= 1;
  }
  reloadShot(){
    this.shot = numberShot;
  }


}
