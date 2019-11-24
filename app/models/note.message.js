
module.exports = class Message {
  constructor(title,message){
    this.id = uuid.v1();
    this.title = title;
    this.message = message;
    this.readFunctionUsers = false;
    this.readFunctionUsers = new Array();
    this.readUsers = new Array();
    this.buttonUrl = null;
    this.buttonName = "Sluiten";

  }

  getId(){
    return this.id;
  }



  getReadUsers(){
    return this.readUsers;
  }
  addReadUser(userId){
    this.readUsers.push(userId);
  }
  removeUser(userId){
    getUser(userId).pop();
  }

  getReadFunctionUsers(){
    return this.readFunctionUsers;
  }
  addReadFunctionUsers(functi){
    this.readFunctionUsers.push(functi);
  }

  getReadFunctionUsers(){
    return this.readFunctionUsers;
  }
  setreadFunctionUsers(boolean){
    this.readFunctionUsers= boolean;
  }

  getTitle(){
    return this.title;
  }
  setTitle(title){
    this.title= title;
  }

  getButtonUrl(){
    return this.buttonUrl;
  }
  setButtonUrl(url){
    this.buttonUrl= url;
  }

  getButtonName(){
    return this.buttonName;
  }
  setButtonName(name){
    this.buttonName= name;
  }

  getMessage(){
    return this.message;
  }
  setMessage(message){
    this.message= message;
  }



}
