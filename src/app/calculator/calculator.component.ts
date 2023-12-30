import { Component } from '@angular/core';
import { TransaccionService } from '../services/transacciones/transacciones.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  constructor(private service:TransaccionService, private login:LoginService){}

  imc = 0;
  estado = "...";
  peso=0;
  altura=0;
  opcion=1;

  async calcular(){
    if(this.opcion==1){
      this.imc=this.peso/Math.pow(this.altura, 2);
    }else{
      this.imc=(this.peso/Math.pow(this.altura, 2))*703;
    }
    if(this.login.isLogin()){
      await this.service.saveCalculo(this.altura, this.opcion, this.peso);
    } 
  }

  onChange(option:any){
    this.opcion=option;
  }
}
