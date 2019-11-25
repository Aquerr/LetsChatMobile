import {Component} from '@angular/core';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth/auth.service';

@Component({
    selector: 'login-modal',
    templateUrl: './loginModal.page.html',
    styleUrls: ['./loginModal.page.scss'],
})
export class LoginModalPage {

  username: string;
  password: string;
  loader: any;

    constructor(public alertController: AlertController, public modalController: ModalController, public loadingController: LoadingController,
                public httpClient: HttpClient, private authService: AuthService, private navController: NavController) {

    }

    cancelLogin() {
        this.modalController.dismiss({
            dismissed: true
        });
    }

    async presentLoading(message: string) {
        this.loader = await this.loadingController.create({
            message,
            duration: undefined
        });
        this.loader.present();
    }

    async dismissLoading() {
        await this.loader.dismiss();
    }

    async login(form: NgForm) {
        await this.presentLoading('Logowanie...');

        console.log('Form username: ' + form.value.username);
        console.log('Form password: ' + form.value.password);

        this.authService.login(form.value.username, form.value.password).subscribe(async (response) => {

            await this.dismissLoading();
            // Preform logging here...
            console.log(response);

            // Close login modal
            await this.modalController.dismiss({
                dismissed: true
            });
            // TODO: Open main LetsChat page.

        }, (async error => {
            await this.dismissLoading();
            const alert = await this.alertController.create({
                header: 'Błąd!',
                subHeader: 'Logowanie nie powiodło się.'
            });

            await alert.present();
            console.log(error);
        }));
    }
}
