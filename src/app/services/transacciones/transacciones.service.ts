import { Injectable } from "@angular/core";
import { GeneralService } from "../general/general.service";
import axios from "axios";

@Injectable({
    providedIn:'root'
})
export class TransaccionService{

    constructor(private service:GeneralService){}

    async getDataUser() {
        let user=window.localStorage.getItem("idUser")
        try{
            let response=await axios.get(this.service.baseUrl+"usuario/"+user);
            return response.data;
        }catch(error){
            window.alert("Ha ocurrido un error!");
        }
    }

    async updateUser(nombre:String, edad:number, alimentacion:number, vida:number, sexo:number){
        let user=window.localStorage.getItem("idUser")
        try{
            let response=await axios.put(this.service.baseUrl+"usuario",
            {
                claveUsuario: user,
                edad: edad,
                idEstiloAlimentacion: alimentacion,
                idEstiloVida: vida,
                idSexo: sexo,
                nombre: nombre
              })
            if(response.status=204){
                window.alert("Cambios guardados con exito!");
                window.location.reload();
            }
        }catch(error){
            window.alert("Ha ocurrido un error!");
        }
    }

    async saveCalculo(altura:number, sistema:number, peso:number){
        let user=window.localStorage.getItem("idUser")
        try{
            let fecha=this.fecha();
            await axios.post(this.service.baseUrl+"medidas",
            {
                altura: altura,
                claveUsuario: user,
                fecha: fecha,
                idSistema: sistema,
                peso: peso
              })

        }catch(error){
            window.alert("Error a guardar el calculo!");
        }
    }

    fecha(){
        let fecha=new Date();
        let year = fecha.getFullYear();
        var month = ('0' + (fecha.getMonth() + 1)).slice(-2);
        var day = ('0' + fecha.getDate()).slice(-2);

        let newFecha = year + '/' + month + '/' + day;

        return newFecha;
    }

    async getAllCalculos(){
        let user=window.localStorage.getItem("idUser")
        try{
            let response=await axios.get(this.service.baseUrl+"medidas/allByUser/"+user)
            return response.data;
        }catch(error){
            window.alert("Error al cargar el contenido!");
        }
    }
}