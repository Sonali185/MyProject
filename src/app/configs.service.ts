import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  constructor(private myhttp: HttpClient) {

   }
   createUser(userConfig:any) {
    let myObec = {
      "name": userConfig.username,
      "job": userConfig.password
    };

    return this.myhttp.post('https://reqres.in/api/users', myObec)
  }
}
