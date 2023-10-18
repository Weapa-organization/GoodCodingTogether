import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoolButtonComponent } from './cool-button/cool-button.component';
import { HomeComponent } from './home/home.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { ChicacometroComponent } from './chicacometro/chicacometro.component';

const routes: Routes = [
  { path: 'image-display', component: ImageDisplayComponent},
  { path: 'cool-button', component: CoolButtonComponent},
  { path: 'chicacometro', component: ChicacometroComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
