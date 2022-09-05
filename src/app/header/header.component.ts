import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title= 'hello this is me '

users: any;

  constructor(private api: ApiService) {
    api.users().subscribe((data=>{
      console.log("data",data);
      this.users=data;
    }))
   }

  ngOnInit(): void {
  }

}
