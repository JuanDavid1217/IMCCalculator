import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { auth } from '../configurations/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import axios from 'axios';
import { GeneralService } from './general/general.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router, private route:ActivatedRoute, private service:GeneralService) { }
  
  provider = new GoogleAuthProvider();

  isLogin(){
    let id=window.localStorage.getItem("idUser");
    if(id!=null){
      return true;
    }else{
      return false;
    }
  }

  async loginGoogle(){
    /*signInWithPopup(auth, this.provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      window.localStorage.setItem("idUser", user.uid);
      this.router.navigate(["/perfil"]);
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });*/
    let response = await signInWithPopup(auth, this.provider);
    if(response!=null){
      const credential = GoogleAuthProvider.credentialFromResult(response);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = response.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      window.localStorage.setItem("idUser", user.uid);
      let responseAPI;
      try{
        responseAPI=await axios.get(this.service.baseUrl+"usuario/"+user.uid);
      }catch(error){
          response=await axios.post(this.service.baseUrl+"usuario", {claveUsuario:user.uid}, {headers:this.service.header});
      }
      return true;
    }else{
      return false;
    }
  }

  logout(){
    signOut(auth).then(() => {
      // Sign-out successful.
      window.localStorage.removeItem("idUser");
      this.router.navigate(["/"]);
    }).catch((error) => {
      // An error happened.
    });
  }
}
