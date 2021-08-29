import { LoginGuard } from './login.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {  
    path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'list-note',
        pathMatch: 'full'
      },
      {
        path: 'list-note',
        canActivate: [LoginGuard],
        loadChildren: () => import('./list-note/list-note.module').then(module => module.ListNoteModule)
      },
      {
        path: 'add-note',
        canActivate: [LoginGuard],
        loadChildren: () => import('./add-note/add-note.module').then(module => module.AddNoteModule)
      },
      {
        path: 'edit-note/:Id',
        canActivate: [LoginGuard],
        loadChildren: () => import('./edit-note/edit-note.module').then(module => module.EditNoteModule)
      },
    ]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(module => module.LoginModule)
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
