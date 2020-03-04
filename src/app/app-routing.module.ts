import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceGiftCardComponent } from './place-gift-card/place-gift-card.component';


const routes: Routes = [
  {path:'place-gift-card',component:PlaceGiftCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
