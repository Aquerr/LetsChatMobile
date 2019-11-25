import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController} from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'login-modal',
  templateUrl: './loginModal.page.html',
  styleUrls: ['./loginModal.page.scss'],
})
export class LoginModalPage implements OnInit {

  constructor(public modalController: ModalController, public loadingController: LoadingController, private http: HTTP) {

  }


  ngOnInit() {
  }

  cancelLogin() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Logowanie...',
      duration: 2000
    });
    await loading.present;

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async login() {
    await this.presentLoading();

    const credentials = { username: '', password: ''};
    credentials.username = 'Nerdi';
    credentials.password = 'brzuszek';

    const response = await this.http.post('https://secretchat.bartlomiejstepien.pl/login', credentials, null);
    console.log(response);
  }
}
