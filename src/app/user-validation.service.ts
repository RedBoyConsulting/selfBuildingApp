import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserValidationService {
  items = [];
  constructor(
    private http: HttpClient
  ) { }
  getItems() {
    return this.items;
  }
  loginUser(usr_pwd) {
    this.items.push(usr_pwd);
  }
  getLoginUser() {
    return this.http.get('/assets/password.json')
  }
}