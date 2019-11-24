module.exports = class User {
  constructor(name){
    this.id = uuid.v1();
    this.setName(name);
    this.numberShot = 20;
    this.shot = this.numberShot;
    this.location = null;
    this.takedAttributes = new Array();
    this.cancele1tAttributes = new Array();
    this.getMessageBoolean = true;
    this.death = false;
    this.price = 0;
    this.leave = false;

    /* test */
    //this.addAttribute(3);
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

  leave() {
    this.leave = true;
  }

  getLeave(){
    return this.leave;
  }
  setLeave(bool) {
    this.leave = bool;
  }

  getPrice(){
    return this.price;
  }
  addPrice(price) {
    this.price += price;
  }

  getLocation(){
    return this.location;
  }
  setLocation(location) {
    this.location = location;
  }
  getattributes(){
    return this.takedAttributes;
  }
  addAttribute(attributeId) {
    this.takedAttributes.push(parseInt(attributeId));
  }
  getCancele1ttributes(){
    return this.takedAttributes;
  }
  addCancele1tAttribute(attributeId) {
    this.cancele1tAttributes.push(parseInt(attributeId));
  }

  getDeath(){
    return this.death;
  }
  setDeath(death) {
    this.death = death;
  }

getShot(){
  return this.shot;
}
  loseShot(){
    if(this.shot > 0){
      this.shot -= 1;
    }else{
      throw new Error("Kogels op");
    }

  }

  hitShot(){
    this.setDeath(true);
  }

  reloadShot(){
    if(this.shot == this.numberShot){
      return false;
    }else{
      this.setDeath(false);
      this.shot = this.numberShot;
      return true;
    }

  }


}
