import {Roles} from '../../authentication/Roles';


export class User {
    userSeq: number;
    username: string;
    password: string;
    email: string;
    firstName: string;
    roles: Roles[];
    rolesList: number[];
    userType: string;
    roleSearch = '';
}
