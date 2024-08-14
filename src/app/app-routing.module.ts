import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';

const routes: Routes = [
  {
    path:' ', redirectTo:'/albums', pathMatch:'full'
  },
  {path:'albums', component:AlbumComponent},
  {path:'login', component:LoginComponent},
  { path: 'album/:id', component: AlbumDescriptionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
