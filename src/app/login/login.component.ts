import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="welcome to SBI"
  acNumber=`Accont no pls`
  acno=""
  pswd=""
users:any={
  1000:{acno:1000,username:"akil",password:"userone",balance:3000},
  1001:{acno:1001,username:"aki",password:"usertwo",balance:30300},
  1002:{acno:1002,username:"ai",password:"userthree",balance:33000},
  1003:{acno:1003,username:"akuji",password:"userfour",balance:30000},

}

  constructor() { }

  ngOnInit(): void {
  }
accNumber(event:any){
  console.log(event.target.value);
  this.acno=event.target.value
  
}
pswdchange(event:any){
  console.log(event.target.value);
  this.pswd=event.target.value
  
}

login(){
  var acno=this.acno;
  var pswd=this.pswd;
  let accDetails=this.users
    if(acno in accDetails){
      if(pswd==accDetails[acno]["password"])
    {
      alert("login succesfully")
        }
        else{
          alert("invalid password")
        }
    
      }
     else{
       alert("invalid account no")
     } 
  }

}