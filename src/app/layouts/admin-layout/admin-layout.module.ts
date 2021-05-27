import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';

import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule
} from '@angular/material';
import {QRCodeModule} from 'angularx-qrcode';
import {NgxPrintModule} from 'ngx-print';

import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {RoleCreationComponent} from '../../session/role/role-creation/role-creation.component';
import {RoleService} from '../../session/role/role.service';
import {UserCretionComponent} from '../../session/user/user-cretion/user-cretion.component';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {ItemComponent} from '../../item/item.component';
import {ItemCreationComponent} from '../../item/item-creation/item-creation.component';
import {ItemService} from '../../item/item.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatTabsModule,
        MatCardModule,
        QRCodeModule,
        NgxPrintModule,
        ZXingScannerModule,
        NgxMatSelectSearchModule,
        MatRadioModule,
        MatIconModule,
        // BrowserModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatTableModule,
    ],
    declarations: [
        UserProfileComponent,
        DashboardComponent,
        RoleCreationComponent,
        UserCretionComponent,
        ItemComponent,
        ItemCreationComponent
    ],
    providers: [
        RoleService,
        ItemService
    ]
})

export class AdminLayoutModule {
}
