import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'services in angular'
  
  ngOnInit(): void {
  }

  users: any;
  constructor(private api: ApiService,private httpClient : HttpClient ){

    this.api.users().subscribe((data)=>{
     console.warn("data",data);
     this.users=data
    });
  }

  getUserFormData(data: any){
   
    this.api.saveUsers(data).subscribe((result)=>{
      console.warn(result);
    })

  }

  name: string = '';
  age!: number;
  found!: boolean;

  
  onNameKeyUp(event: any){
     this.name = event.target.value;
     this.found = false;

  }

  getProfile(){
    
    this.httpClient.get(`http://localhost:3000/users/?name=${this.name}`)
    .subscribe(
      (data: any[any]) => {
        console.log(data);
        // if(data.length){
        //   this.age = data[1].age;
        //   this.found = true;
        }
        
    )
  }
  
 
  

 

  

}

