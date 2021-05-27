import {User} from '../session/guest-user-creation/user';
import {Roles} from './Roles';

export class UserRole {
    userRoleSeq: number;
    userSeq: number;
    roleSeq: number;
    user: User;
    role: Roles;
}
