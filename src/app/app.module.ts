import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {GuestUserCreationDialogComponent, LoginComponent} from './session/login/login.component';
import {AuthenticationService} from './authentication/authentication.service';
import {MatDialogModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSnackBarModule, MatTabsModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {AuthGaurdService} from './authentication/auth-gaurd.service';
import {HttpService} from './authentication/http.service';
import {GuestUserCreationComponent} from './session/guest-user-creation/guest-user-creation.component';
import {UserCreationService} from './session/guest-user-creation/user-creation.service';
import {ItemService} from './item/item.service';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        MatSnackBarModule,
        MatDialogModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        MatRadioModule,
        MatTabsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        AdminLayoutComponent,
        GuestUserCreationComponent,
        GuestUserCreationDialogComponent

    ],
    providers: [
        AuthenticationService,
        AuthGaurdService,
        HttpService,
        UserCreationService,
        MatDialogModule,
        ItemService
    ],
    entryComponents: [
        GuestUserCreationDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
