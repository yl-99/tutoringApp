import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private router:Router){}
  goToPage(PageName:string):void{

    
     this.router.navigate([`${PageName}`]);
   // else
   // outerrormessgae
  }

}
