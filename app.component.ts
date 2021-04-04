import { Component } from '@angular/core';

interface ContactData{
  firstName:string;
  lastName:string;
  phone:string;
  email:string;
  state:string;
  comments:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateForms';

  public contact:ContactData={
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    state:"",
    comments:"",
  }

  public states=[
    ["Pk","Pakistan"],
    ["VA","Virginia"],
    ["CA","California"],
    ["TX","Texas"],
    ["FL","Florida"],
    ["MD","Maryland"],
  ];
  public submitForm(){
    console.log(this.contact);
  }

}
