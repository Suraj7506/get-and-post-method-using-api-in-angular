import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  title = 'This Is Footer Component'
  users: any;
  constructor(private api: ApiService) { 
    api.users().subscribe((data)=>{
  console.log("data",data);
  this.users=data;
    })
  };



  ngOnInit(): void {
  }

}
