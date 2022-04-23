import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentId = ""
  currentUname = ""

  database: any = {
    1000: { userid: 1000, uname: "Zoya", password: 1000, event: [] },
    1001: { userid: 1001, uname: "Lisa", password: 1001, event: [] },
    1002: { userid: 1002, uname: "Jay", password: 1002, event: [] }
  }


  constructor(private http: HttpClient) {

    // calling getData function 
    // this.getData()

  }


  //to store data in local storage
  storeData() {
    localStorage.setItem("databasepjct", JSON.stringify(this.database))
    if (this.currentId) {
      localStorage.setItem("currentId", JSON.stringify(this.currentId))
    }
    if (this.currentUname) {
      localStorage.setItem("currentUname", JSON.stringify(this.currentUname))
    }
  }

  //to det data from local storage
  getData() {
    if (localStorage.getItem("databasepjct")) {
      this.database = JSON.parse(localStorage.getItem("databasepjct") || '')
    }
    if (localStorage.getItem("currentId")) {
      this.currentId = JSON.parse(localStorage.getItem("currentId") || '')
    }
    if (localStorage.getItem("currentUname")) {
      this.currentUname = JSON.parse(localStorage.getItem("currentUname") || '')
    }
  }





  // //login
  // login(userid:any,pswd:any){
  //   let database=this.database

  //   if(userid in database){
  //     if(pswd==database[userid]["password"]){
  // userid=this.currentId
  // return true
  //     }
  //     else{
  //       alert("incorrect password")
  //       return false
  //     }
  //   }
  //   else{
  //     alert("user does not exist")
  //     return false
  //   }
  //   }

  // //login after local storage
  // login(userid: any, pswd: any) {
  //   let database = this.database

  //   if (userid in database) {
  //     if (pswd == database[userid]["password"]) {
  //       userid = this.currentId
  //       // this.currentUname=database[userid].uname
  //       this.storeData()
  //       return true
  //     }
  //     else {
  //       alert("incorrect password")
  //       return false
  //     }
  //   }
  //   else {
  //     alert("user does not exist")
  //     return false
  //   }
  // }

  //login after integrating with backend
  login(userid: any, pswd: any) {

    //request body
    const data = {
      userid, pswd
    }

    //login API
    return this.http.post('http://localhost:3000/login', data)


  }











  // //login after welcome user
  // login(userid:any,pswd:any){
  //   let database=this.database

  //   if(userid in database){
  //     if(pswd==database[userid]["password"]){
  // userid=this.currentId
  // this.currentUname=database[userid]["uname"]
  // return true
  //     }
  //     else{
  //       alert("incorrect password")
  //       return false
  //     }
  //   }
  //   else{
  //     alert("user does not exist")
  //     return false
  //   }
  //   }


  // //register
  // register(uname: any, userid: any, pswd: any) {
  //   if (userid in this.database) {
  //     return false
  //   }
  //   else {
  //     this.database[userid] = {
  //       userid,
  //       uname,
  //       password: pswd,
  //       event: []
  //     }
  //     console.log(this.database);
  //     return true

  //   }
  // }

  //register after integrating with backend
  register(uname: any, userid: any, pswd: any) {
    //json data
    const data = {
      //the variable names should be same as that given in thunderclient's register body or it should be same with what is inside the register bracket above
      uname, userid,pswd
    }

    //register API
    return this.http.post('http://localhost:3000/register',data)

  }












  // //dashboard
  // //addevent
  // addEvent(userid: any, date: any, event: any) {
  //   if (userid in this.database) {
  //     this.database[userid]["event"].push({
  //       date, event
  //     })
  //     console.log(this.database[userid]["event"]);

  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }



//dashboard addEvent after mongo db
// addEvent(userid:any,date:any,event:any){
  addEvent(userid:any,date:any,event:any){
const data={
  userid,date,event
}

//dashboard addEvent API
return this.http.post('http://localhost:3000/addEvent',data)
}



//viewEvent
viewEvent(userid:any){
  const data={
    userid
  }

  //viewEvent API
  return this.http.post('http://localhost:3000/viewEvent',data)
}











}
