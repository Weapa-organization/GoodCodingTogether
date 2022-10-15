import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoolButtonComponent } from './cool-button/cool-button.component';
import { HomeComponent } from './home/home.component';
import { ImageDisplayComponent } from './image-display/image-display.component';


const routes: Routes = [
  { path: 'image-display', component: ImageDisplayComponent},
  { path: 'cool-button', component: CoolButtonComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
