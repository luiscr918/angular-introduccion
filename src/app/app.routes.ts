import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { Page404Component } from './pages/page404/page404.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'usuarios', component:UsuariosComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'**', component:Page404Component}
    

];
