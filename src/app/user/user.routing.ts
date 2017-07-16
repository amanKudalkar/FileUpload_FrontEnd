import {Routes,RouterModule} from '@angular/router';
import {FileUploadComponent} from './file-upload.component';
import {UserWelcomeComponent} from './user-welcome.component';

export const USER_ROTES:Routes = [
    {path: '', component: UserWelcomeComponent, pathMatch: 'full'},
    {path: 'fileUpload', component: FileUploadComponent}
]
