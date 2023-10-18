import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { HomeComponent } from './home/home.component';
import { CoolButtonComponent } from './cool-button/cool-button.component';
import { ChicacometroComponent } from './chicacometro/chicacometro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImageDisplayComponent,
    HomeComponent,
    CoolButtonComponent,
    ChicacometroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
