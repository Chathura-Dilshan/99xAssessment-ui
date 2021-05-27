import {Injectable} from '@angular/core';
import {LoginData} from './login-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {HttpService} from './http.service';
import {map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AuthenticationService {

    logData: any;
    auth: any[] = [];
    private userAuthorityList: string[];


    constructor(private router: Router,
                private http: HttpClient,
                private httpService: HttpService,
                private snackBar: MatSnackBar) {
        // localStorage.removeItem('username');
    }

    public authenticate(loginData: LoginData) {
        console.log('loginData', loginData);

        // const headers = new HttpHeaders({
        //   'Access-Control-Allow-Origin' : 'http://localhost:4200/'
        // });
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(loginData.username + ':' + loginData.password)});

        return this.http.post(HttpService.SERVICE_PATH + 'users/login', loginData, {headers: headers})
            .pipe(map(res => res))
            .subscribe(
                data => {
                    this.logData = null;
                    this.logData = data;
                    if (data == null) {
                        console.log('loginData1', loginData);
                        localStorage.clear();
                        this.router.navigate(['login']);
                        this.snackBar.open('Username or password invalid', 'Error', {
                            duration: 3000,
                            panelClass: ['red-snackbar'],
                            verticalPosition: 'top'
                        });

                        return false;
                    } else {
                        localStorage.clear();
                        localStorage.setItem('username', loginData.username);
                        localStorage.setItem('password', loginData.password);

                        this.auth = [];
                        for (const argument of this.logData.roles) {
                            this.auth.push(argument.roleName);
                            // if (this.auth.indexOf(argument) === -1) {
                            //
                            // }
                        }

                        // console.log(this.auth);
                        localStorage.setItem('authorityList', JSON.stringify(this.auth));
                        this.router.navigate(['dashboard']);
                        return true;
                    }


                },
                err => {
                    console.log('loginDataerr', loginData);
                    localStorage.clear();
                    this.router.navigate(['login']);
                    this.snackBar.open('Username or password invalid', 'Error', {
                        duration: 3000,
                        panelClass: ['red-snackbar'],
                        verticalPosition: 'top'
                    });

                    return false;
                }
            );

    }

    isUserLoggedIn(documentLink) {
        // console.log('documentLink=', documentLink);
        const user = localStorage.getItem('username');
        this.userAuthorityList = JSON.parse(localStorage.getItem('authorityList'));
        let enableView = false;
        const role = documentLink;
        if (this.userAuthorityList !== null && user !== null) {
            for (const userAuth of this.userAuthorityList) {
                if (userAuth === role) {
                    enableView = true;
                    break;
                }
            }
        }
        return enableView;
        // if (!(user === null)) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['login']);
    }


}
