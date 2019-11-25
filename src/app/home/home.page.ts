import { Component } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {LoginModalPage} from '../loginModal/loginModal.page';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(public modalController: ModalController, public alertController: AlertController) {}

    async testMethod() {
        const alert = await this.alertController.create({
            header: 'ALERT!',
            subHeader: 'SEX',
            buttons: ['OK']
        });
        await alert.present();
    }

    async showLogin() {
        const modal = await this.modalController.create({
            component: LoginModalPage
        });
        return await modal.present();
    }
}
