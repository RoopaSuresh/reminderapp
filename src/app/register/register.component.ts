import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

uname=""
pswd=""
id=""


userid="User id please"
username="Enter your username"
password="Enter your password"


//register group model creation
registerForm=this.fb.group({
  //form array creation
  uname: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  id: ['',[Validators.required,Validators.pattern('[0-9 ]*')]],
  pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]
})




  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

//register
// register(){
// var uname=this.uname
// var userid=this.id
// var pswd=this.pswd


// const result=this.ds.register(uname,userid,pswd)
// if(result){
// alert("successfully registered")
// this.router.navigateByUrl("")
// }
// else{
//   alert("User already exist please login")
// }

// }


// //register reactive form
// register(){
//   var uname=this.registerForm.value.uname
//   var userid=this.registerForm.value.id
//   var pswd=this.registerForm.value.pswd
  
//   console.log(this.registerForm.value);

//   //to check if the register form is valid or not
// if(this.registerForm.valid){
//   const result=this.ds.register(uname,userid,pswd)
//   if(result){
//     alert("successfully registered")
//     this.router.navigateByUrl("")
//     }
//     else{
//       alert("User already exist please login")
//     }
// }
//     else{
//       alert("invalid form")
//     }
//   }
  

  //register after integration with backend
  register() {
    // console.log(this.registerForm.get('uname')?.errors);

    var uname = this.registerForm.value.uname
    var userid = this.registerForm.value.id
    var pswd = this.registerForm.value.pswd



    if (this.registerForm.valid) {
      //asynchronous
      this.ds.register(uname, userid, pswd) //removing the assigning part since asynchronous cannot be done so


        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            this.router.navigateByUrl("")

          }
        },
          (result) => {
            alert(result.error.message)
          }
        )
    }
    else {
      alert("invalid form")
    }



  }


























}
