import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // string interpolation
  caption = "lets get started"


  // property binding
  userid = "User id please"
  password = "Password"

  // <!-- event binding using $event -->
  id = ""
  pswd = ""
  uname = ""


  //login group model creation
  //1)form group creation
  loginForm = this.fb.group({
    //2)form array creation
    // acno: [''],
    //acno for validation
    id: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],

    // pswd: [''],
    //pswd for validation
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],


  })









  // database:any={
  //   1000:{userid:1000,uname:"Zoya",password:1000,event:[]},
  //   1001:{userid:1001,uname:"Lisa",password:1001,event:[]},
  //   1002:{userid:1002,uname:"Jay",password:1002,event:[]}
  // }



  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  // event binding
  // login(){
  //   alert("login clicked")
  // }

  // <!-- event binding using $event -->
  // useridchange(event:any){
  // this.id=event.target.value
  // console.log(this.id);
  // }


  // <!-- event binding using $event -->
  // pswdchange(event:any){
  //   this.pswd=event.target.value
  //   console.log(this.pswd);
  //   }


  //login
  // login(){
  // var userid=this.id
  // var pswd=this.pswd
  // let database=this.database

  // if(userid in database){
  //   if(pswd==database[userid]["password"]){
  //     alert("login success")
  //     this.router.navigateByUrl("dashboard")
  //   }
  //   else{
  //     alert("incorrect password")
  //   }
  // }
  // else{
  //   alert("user does not exist")
  // }
  // }


  // //login after login service
  // login(){
  //   var userid=this.id
  //   var pswd=this.pswd
  //   const result=this.ds.login(userid,pswd)

  // if(result){
  //   alert("login success")
  //   this.router.navigateByUrl("dashboard")
  // }

  //   }

  //login after loginform
  // login(){
  //   var userid=this.id
  //   var pswd=this.pswd
  //   const result=this.ds.login(userid,pswd)

  // if(result){
  //   alert("login success")
  //   this.router.navigateByUrl("dashboard")
  // }

  //   }


  // //login reactive form
  // login() {
  //   var userid = this.loginForm.value.id
  //   var pswd = this.loginForm.value.pswd
  //   if (this.loginForm.valid) {
  //     const result = this.ds.login(userid, pswd)

  //     if (result) {
  //       alert("login success")
  //       this.router.navigateByUrl("dashboard")
  //     }
  //   }
  //   else{
  //     alert("Invalid form")
  //   }


  // }


  //login after integrating with backend
  login() {
    var userid = this.loginForm.value.id
    var pswd = this.loginForm.value.pswd


    if (this.loginForm.valid) {
      //asynchronous call login
      this.ds.login(userid, pswd)

        .subscribe((result: any) => {
          if (result) {
            localStorage.setItem('currentId', JSON.stringify(result.currentId))
            // localStorage.setItem('currentUname', JSON.stringify(result.currentUname))
            // localStorage.setItem('token', JSON.stringify(result.token))
            alert(result.message)
            this.router.navigateByUrl("dashboard")
          }
        },
          (result) => {
            alert(result.error.message)
          }
        )

    }
    else {
      alert("Invalid form")
    }


  }

























}
