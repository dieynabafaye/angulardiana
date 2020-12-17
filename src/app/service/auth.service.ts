import { Injectable } from '@angular/core';
import {Utilisateur} from '../model/UtilisateurClass';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  //fonction de connexion
  register(credential: any){
    return this.http.post(`${this.baseUrl}/api/login`, credential);
  }

  saveToken(token:string){
    localStorage.setItem('ACCESS_TOKEN', token);
  }
  estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
