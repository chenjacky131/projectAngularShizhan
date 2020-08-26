import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'news',
    component: NewsComponent
  },
  {
    path:'newsDetail',
    component: NewsDetailComponent
  },
  {
    path:'newsDetail/:id',
    component: NewsDetailComponent
  },
  {
    path:'**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
