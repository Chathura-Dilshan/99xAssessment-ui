import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {User} from '../../guest-user-creation/user';
import {NgForm} from '@angular/forms';
import {UserCreationService} from '../../guest-user-creation/user-creation.service';
import {MatSnackBar} from '@angular/material';
import {take} from 'rxjs/operators';
import {Roles} from '../../../authentication/Roles';
import {RoleService} from '../../role/role.service';

@Component({
  selector: 'app-user-cretion',
  templateUrl: './user-cretion.component.html',
  styleUrls: ['./user-cretion.component.scss']
})
export class UserCretionComponent implements OnInit {

  @Input() user: User;
  @ViewChild('userCreationForm', {static: true}) userCreationForm: NgForm;
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  rolesList: Roles[];
  filteredRolesList: Roles[];



  constructor(private userCreationService: UserCreationService,
              private snackBar: MatSnackBar,
              private roleService: RoleService) {
  }

  ngOnInit() {
    if (this.user == null) {
      this.user = new User();
    }

    this.roleService.findRoleByStatus().pipe(take(1)).subscribe(
        response => {
          this.rolesList = response;
          this.filterRoleList();
        }
    );
  }

  saveUser(): void {
    this.userCreationService.postUser(this.user).pipe(take(1)).subscribe(user => {
          this.user = user;
          this.snackBar.open('Sing in success', 'success', {
            duration: 3000
          });
        },
        error => {
          this.snackBar.open(error.error, 'error', {
            duration: 3000
          });
        }
    )
  }

  filterRoleList() {
    const search = this.user.roleSearch;
    if (search !== '') {
      this.filteredRolesList = this.rolesList.filter((role: Roles) => {
        if (role.roleName.toLowerCase().indexOf(search) > -1) {
          return role;
        }
      });
    } else {
      this.filteredRolesList = this.rolesList;
    }
  }

  resetForm() {
    this.userCreationForm.resetForm();
  }

}
