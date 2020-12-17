import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  getToken(credential:any){
    this.authService.register(credential).subscribe((data:any)=>{
      console.log(data)
      this.authService.saveToken(data.token)
      this.router.navigate(['/admin']);
    }
    )
  }

}
