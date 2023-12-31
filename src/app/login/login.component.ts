import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private service: LoginService, private router:Router, private route: ActivatedRoute){};

  ngOnInit(): void {
      if(this.service.isLogin()){
        this.router.navigate(['/perfil']);
      }
  }

  async login(){
    let bandera= await this.service.loginGoogle();
      if(bandera){
        this.router.navigate(["/perfil"]);
        window.location.reload();
      }
  }
}
