module.exports = class Location {
  constructor(){
    this.latlng = null;
    /*if (typeof latitude !== 'undefined' || typeof longitude !== 'undefined') {
      this.setLocation({lat:latitude,lng:longitude});
    }else{
      this.setLocation({lat:1,lng:1});
    }
    */
}


  setLocation(location){
    this.latlng = location;
  }

  getLocation(){
    return this.latlng;
  }

}
