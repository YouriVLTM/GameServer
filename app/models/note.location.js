module.exports = class Location {
  constructor(latitude,longitude){
    if (typeof latitude !== 'undefined' || typeof longitude !== 'undefined') {
      this.setLatitude(latitude);
      this.setLongitude(longitude);
    }else{
      this.setLatitude(1.2);
      this.setLongitude(1.3);
    }


      }

  setLatitude(latitude){
    this.latitude = latitude;
  }
  getLatitude(){
    return this.name;
  }

  setLongitude(longitude){
    this.longitude = longitude;
  }
  getLongitude(){
    return this.longitude;
  }

  getLocaction(){
    return {latitude: getLatitude(), longitude: getLongitude() };
  }

}
