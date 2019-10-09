module.exports = class User {
  constructor(name){
    this.id = uuid.v1();
    this.setName(name);    
    const numberShot = 3;
    this._shot = numberShot;
    this.location = null;




  }

  getId(){
    return this.id;
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
