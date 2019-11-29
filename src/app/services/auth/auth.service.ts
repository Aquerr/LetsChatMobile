import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {LetsChat} from '../../letschat';
import {tap} from 'rxjs/operators';
import {User} from '../../entities/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  authedUser: User;

  constructor(private httpClient: HttpClient, private storage: NativeStorage) { }

  login(username: string, password: string) {
    return this.httpClient.post(LetsChat.LETSCHAT_URL + '/api/login', { login: username, password}).pipe(tap<User>(user => {
      if (user.name !== '') {
        console.log('We got the user!');
        this.authedUser = user;
      }
      // this.isLoggedIn = true;
    }));
  }

  register(username: string, password: string, repeatPassword: string) {

  }

  logout() {

  }

  getAuthedUser(): User {
    return this.authedUser;
  }
}
