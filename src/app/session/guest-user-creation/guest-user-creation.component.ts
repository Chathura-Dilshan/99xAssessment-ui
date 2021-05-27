import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {User} from './user';
import {take} from 'rxjs/operators';
import {UserCreationService} from './user-creation.service';
import {MatSnackBar} from '@angular/material';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-guest-user-creation',
    templateUrl: './guest-user-creation.component.html',
    styleUrls: ['./guest-user-creation.component.scss']
})
export class GuestUserCreationComponent implements OnInit {
    @Input() user: User;
    @ViewChild('guestUserCreationForm', {static: true}) guestUserCreationForm: NgForm;
    @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();



    constructor(private userCreationService: UserCreationService,
                private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        if (this.user == null) {
            this.user = new User();
        }
    }

    register(): void {
        this.user.userType = 'GUEST_USER';
        console.log(this.user);
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

    resetForm() {
        this.guestUserCreationForm.resetForm();
    }

}
