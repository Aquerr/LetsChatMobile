import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {LetsChat} from '../../letschat';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private httpClient: HttpClient, private storage: NativeStorage) { }

  login(username: string, password: string) {
    return this.httpClient.post(LetsChat.LETSCHAT_URL + '/login', { login: username, password}).pipe(tap(token => {
      // this.isLoggedIn = true;
    }));
  }

  register(username: string, password: string, repeatPassword: string) {

  }

  logout() {

  }
}
