import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransaccionService } from '../services/transacciones/transacciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  Aoption:any=1;
  Voption:any=1;
  nombre="";
  edad=0;
  sexo=1;

  constructor(private service:TransaccionService){}

  async ngOnInit(){
      let response=await this.service.getDataUser();
      this.nombre=response.nombre;
      this.edad=response.edad;
      if(response.sexo=="M"){
        this.sexo=1;
      }else{
        this.sexo=2;
      }
      if(response.estiloAlimentacion=="Mala"){
        this.Aoption=3;
      }else if(response.estiloAlimentacion=="Regular"){
        this.Aoption=2;
      }else{
        this.Aoption=1;
      }
      if(response.estiloVida=="Sedentario"){
        this.Voption=2;
      }else{
        this.Voption=1;
      }
  }

    async actualizar(){
      let response=await this.service.updateUser(this.nombre, this.edad, this.Aoption, this.Voption, this.sexo);
    }
  
  onChangeSexo(option:any){
    let value:number=option;
    this.sexo=value;
    console.log(this.sexo);
  }
}
