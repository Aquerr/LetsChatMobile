import {Gender} from './gender';

export class User {
    id: number;
    name: string;
    birthDate: Date;
    email: string;
    location: string;
    gender: Gender;
    avatar: string;
    registrationDate: Date;
}
