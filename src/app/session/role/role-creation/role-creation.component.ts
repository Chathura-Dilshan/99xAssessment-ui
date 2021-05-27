import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {take} from 'rxjs/operators';
import {Roles} from '../../../authentication/Roles';
import {RoleService} from '../role.service';

@Component({
  selector: 'app-role-creation',
  templateUrl: './role-creation.component.html',
  styleUrls: ['./role-creation.component.scss']
})
export class RoleCreationComponent implements OnInit {

  role: Roles;
  @Input() isUpdate: Boolean;
  @Input() isNew: Boolean;
  @ViewChild('roleCreationForm', {static: true}) roleCreationForm: NgForm;
  @Input() statusList: any[];
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private roleService: RoleService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.role == null) {
      this.role = new Roles();
      this.isUpdate = false;
      this.isNew = false;
    }
  }

  saveRole(): void {
    this.roleService.postRole(this.role).pipe(take(1)).subscribe(role => {
          this.role = role;
          this.snackBar.open('Role Saved', 'success', {
            duration: 3000
          });
          this.isUpdate = true;
          this.isNew = true;
        },
        error => {
          this.snackBar.open(error.error, 'success', {
            duration: 3000
          });
        }
    )
  }
}
