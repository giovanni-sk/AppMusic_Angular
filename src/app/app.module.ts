import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { ChronometreComponent } from './chronometre/chronometre.component';
import { SearchComponent } from './search/search.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AlbumDescriptionComponent } from './album-description/album-description.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ChronometreComponent,
    SearchComponent,
    AlbumDetailComponent,
    LoginComponent,
    AlbumDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
