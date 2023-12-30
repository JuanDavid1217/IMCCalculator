import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit{
  

  constructor(private router:Router, private rout:ActivatedRoute, private service:LoginService){};

  login=false;
  opcion="login"
  locacion="IMC CALCULATOR"

  ngOnInit(): void {
    if(this.service.isLogin()){
      this.login=true;
      this.opcion="logout";
    }
  }

    
  visible=false;


  onVisible(){
    this.visible=this.visible==false?true:false;
  }

  async loginAndLogout(){
    if(this.login==false){
      let bandera= await this.service.loginGoogle();
      if(bandera){
        this.router.navigate(["/perfil"]);
        this.login=true;
        this.opcion="logout"
      }
    }else{
      this.service.logout();
      this.login=false;
      this.opcion="login";
      
    }
  }

  navegar(option:number){
    switch(option){
      case 1:
        this.router.navigate(['/perfil'])
        break;
      case 2:
        this.router.navigate(['/'])
        break;
      default:
        this.router.navigate(['/historial'])
    }
    this.visible=false;
  }
}
