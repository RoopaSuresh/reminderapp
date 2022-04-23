import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // //welcome user
  // user:any

  // date: any
  date=Date
  // date=Date
  // event: any
  event=""
  userid: any
  uname: any

  // //dashboard form creation
  // dashboardForm=this.fb.group({
  // // date: ['',[Validators.required,Validators.pattern('[0-9 ]*')]],
  // date: ['',[Validators.required]],

  // // event: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  // event: ['',[Validators.required]]



  // })





  constructor(private ds: DataService, private router:Router) {

    // //welcome user
    // this.user=this.ds.currentUname

    // if(localStorage.getItem('currentId')){
    //   this.uname=JSON.parse(localStorage.getItem('currentUname')||'')
    //   this.userid=JSON.parse(localStorage.getItem('currentId')||'')

    // }


  }



  ngOnInit(): void {
  }


  // addEvent() {
  //   var date = this.date
  //   var event = this.event

  //   console.log(date);
  //   console.log(event);



  //   const result = this.ds.addEvent(this.userid, date, event)

  //   if (result) {
  //     alert("Reminder added successfully")
  //   }
  //   else {
  //     alert("Invalid username/password")
  //   }
  // }


  // //addEvent after mongo db
  addEvent() {
    var date = this.date
    var event = this.event
    let userid=JSON.parse(localStorage.getItem("currentId")||'')
    console.log(date);
    console.log(event);
    console.log(userid);
    



    this.ds.addEvent(userid, date, event)

      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
          this.router.navigateByUrl("dashboard")
          this.event=""
        }

      },
        (result) => {
          alert(result.error.message)
        }
      )




  }

  // //addevent after mongo db and reactive form
  // addEvent(){
  //   var date=this.dashboardForm.value.date
  //   var event=this.dashboardForm.value.event

  //   console.log(date);
  //   console.log(event);

  //   if(this.dashboardForm.valid){
  //         this.ds.addEvent(this.userid, date, event)
  //         .subscribe((result: any) => {
  //           if (result) {
  //             alert(result.message)

  //           }
  //         },
  //           (result) => {
  //             alert(result.error.message)
  //           }
  //         )
  //         this.dashboardForm.reset()
  //     }
  //     else {
  //       alert("invalid form")
  //     }



  //   }


// addEvent(){

//   var date=this.date
//   var event=this.event

//   // let uname=localStorage.getItem("currentUname")
//   // console.log(uname);

//   this.ds.addEvent(date,event,this.userid)
//   .subscribe((result:any)=>{
//     if(result){
//       alert(result.message)
//       // this.router.navigateByUrl("")
//       this.event=""
//     }
//   },
//   (result)=>{
//     alert(result.error.message)
//   })
  

// }






// viewEvent
viewEvent(){
  this.router.navigateByUrl("eventform")
}

//logout
logout(){
  localStorage.removeItem("currentId")
  localStorage.removeItem("currentUname")
this.router.navigateByUrl("")
}




















}


















