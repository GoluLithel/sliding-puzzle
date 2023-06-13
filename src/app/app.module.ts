import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SuffledImageComponent } from './suffled-image/suffled-image.component';
import { ImagePartComponent } from './image-part/image-part.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomePageComponent,
    SuffledImageComponent,
    ImagePartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
