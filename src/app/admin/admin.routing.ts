import { FileViewComponent } from './file-view.component';
import { AdminWelcomeComponent } from './admin-welcome.component';
import {Routes,RouterModule} from '@angular/router';

export const ADMIN_ROTES:Routes = [
    {path: '', component: AdminWelcomeComponent, pathMatch: 'full'},
    {path: 'viewFile', component: FileViewComponent}
]
