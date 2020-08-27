import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { ChildRouterComponent } from './components/child-router/child-router.component';
import { Child1Component } from './components/child-router/child1/child1.component';
import { Child2Component } from './components/child-router/child2/child2.component';
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
    path:'childRouter',
    component: ChildRouterComponent,
    children: [
      {
        path:'child1',
        component: Child1Component
      },
      {
        path:'child2',
        component: Child2Component
      },
      {
        path: '**',
        redirectTo: 'child1'
      },
    ]
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
