import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ContactViewComponent } from './views/contact-view/contact-view.component';
import { PortfolioViewComponent } from './views/portfolio-view/portfolio-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeViewComponent},
  {path: 'contact', component: ContactViewComponent},
  {path: 'portfolio', component: PortfolioViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
