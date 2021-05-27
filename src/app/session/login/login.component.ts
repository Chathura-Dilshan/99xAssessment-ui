import {Component, Inject, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {User} from '../guest-user-creation/user';
import {LoginData} from '../../authentication/login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() loginData: LoginData;
  // @Input() user: User;
  invalidLogin: boolean;
  defaultColDef: any;
  dialogRef: MatDialogRef<GuestUserCreationDialogComponent>;


  constructor(private authService: AuthenticationService,
              private router: Router,
              private snackBar: MatSnackBar,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    if (this.loginData == null) {
      this.loginData = new LoginData();
    }
  }

  login() {
    if (this.authService.authenticate(this.loginData)) {

      // console.log(this.authService.authenticate(this.loginData));
      // this.router.navigate(['/dashboard']);
      this.router.navigate(['dashboard']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
      console.log('aaaaaaaaaaaaaaaaaaaa chathura')

    }
  }

  openDialog(parmas) {
    this.dialogRef = this.dialog.open(GuestUserCreationDialogComponent, {
      disableClose: false,
      width: '400px', height: '600px',
      data: {}
    });

    this.dialogRef.afterClosed().subscribe(result => {
    });
  }

}

@Component({
  selector: 'app-guest-user-creation-modal',
  template: '<app-guest-user-creation  (onCancel)="closeModal($event)"></app-guest-user-creation>'
})
export class GuestUserCreationDialogComponent {
  // tslint:disable-next-line:max-line-length
  constructor(public dialogRef: MatDialogRef<GuestUserCreationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  closeModal(userSeq) {
    this.dialogRef.close(userSeq);
  }
}
