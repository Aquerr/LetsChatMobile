import { Component, Input, OnInit } from '@angular/core';
import { User } from '../entities/user';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {

  @Input() user: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getAuthedUser();
  }
}
