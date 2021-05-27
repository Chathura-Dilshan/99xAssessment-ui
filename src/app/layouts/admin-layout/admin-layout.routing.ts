import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {AuthGaurdService} from '../../authentication/auth-gaurd.service';
import {ItemComponent} from '../../item/item.component';

export const AdminLayoutRoutes: Routes = [

    {path: 'dashboard', canActivate: [AuthGaurdService], component: DashboardComponent},
    {path: 'item', canActivate: [AuthGaurdService], component: ItemComponent},
];
