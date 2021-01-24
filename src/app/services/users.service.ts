import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Usuario } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  private url = "https://randomuser.me/api/";


  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url); 
  }

}
