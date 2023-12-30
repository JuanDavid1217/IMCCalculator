import { Component, OnInit } from '@angular/core';
import { TransaccionService } from '../services/transacciones/transacciones.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit{
  peso=0;
  tipoPeso="kg"
  altura=0;
  tipoAltura="m"
  vida="";
  comida="";
  imc=0;
  fecha="";
  
  items:any=[]

  constructor(private service:TransaccionService){};

  async ngOnInit(){
      let data=await this.service.getAllCalculos();
      for(let i=0; i<data.length; i++){
        let item={
          peso:0,
          tipoPeso:"",
          tipoAltura:"",
          altura:0,
          vida:"",
          comida:"",
          imc:0,
          fecha:""
        }
        item.peso=data[i].peso;
        item.tipoPeso=data[i].sistema=="Internacional"?"kg":"lib";
        item.tipoAltura=data[i].sistema=="Internacional"?"m":"in";
        item.altura=data[i].altura;
        item.vida=data[i].estiloVida;
        item.comida=data[i].estiloAlimentacion;
        item.imc=data[i].sistema=="Internacional"?(item.peso/Math.pow(item.altura,2)):((item.peso/Math.pow(item.altura,2))*703);
        item.fecha=data[i].fecha;
        this.items.push(item);
      }
      
  }
}
