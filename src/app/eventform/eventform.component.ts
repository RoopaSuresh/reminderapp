import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit {

reminders:any
userid:any


  constructor(private ds:DataService) {


    this.userid = JSON.parse(localStorage.getItem('currentId') || '')
    //asynchronous
    this.reminders = this.ds.viewEvent(this.userid)
      .subscribe((result: any) => {
        if (result) {
          this.reminders = result.event
        }
      },
        result => {
          alert(result.message)
        }
      )





   }

  ngOnInit(): void {
  }

}
