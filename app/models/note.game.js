
module.exports = class Game {
  constructor(name){
    this.id = uuid.v1();
    this.setName(name);
    this.users = new Array();
    this.placeId = null;
    this.placeName = null;
    this.active = false;
  }

  getId(){
    return this.id;
  }

  getName(name){
    return this.name;
  }

  setName(name){
    console.log("set name");
    if(this.isValidName(name)){
        this.name = name;
    }else{
      throw new Error('The name is Invallid');
    }
  }

  isValidName(name){
    if(name !=''){
      return true;
    }
    return false;
  }



  getUsers(){
    return this.users;
  }
  getUser(id){
    this.users.forEach(function(user){
      if(user.id = id){
        return user;
      }
    });
    throw new Error('User not found');
  }
  addUser(newUser){
    this.users.push(newUser);
  }
  removeUser(userId){
    getUser(userId).pop();
  }

  getPlaceId(){
    return this.placeId;
  }
  setPlaceId(placeId){
    let _mapsjson = this.getMapsJsonFile();
    if(placeId < 0 || placeId > _mapsjson.length){
      throw new Error("Place Id is invalid");
    }
    this.placeId = placeId;
    this.placeName = _mapsjson[this.placeId].name;
  }

  getPlaceName(){
    return this.placeName;
  }

  getActive(){
    return this.active;
  }
  setActive(boolean){
    this.active = boolean;
  }

  getMapsJsonFile(){
    return require('./note.maps.json');
  }






/*
  setLocation(location) {
    this.locationId = location;
    // get setname

  }
  getLocation() {
    if(this.locationId != null){
      return {locationId : this.locationId, isValid :true};
    }
    // default locationId choice
    //let data = require('./note.maps.json');
    return {isValid : false};
  }

  getLocationName(){
    if(this.locationId != null){
      let _mapsjson = require('./note.maps.json');
      return {locationName : _mapsjson[this.locationId].name, isValid :true};
    }
    return {isValid : false};
  }

*/


}
