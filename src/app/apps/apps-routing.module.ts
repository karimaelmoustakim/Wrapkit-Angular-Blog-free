import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import {FormCongeComponent} from './form-conge/form-conge.component';
import {FormsComponent} from './forms/forms.component';
import {FormAbscenceComponent} from "./form-abscence/form-abscence.component";


import { FullComponent } from './layout/full/full.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'signin', component: FormCongeComponent},
      { path: 'forms', component: FormsComponent},
      { path: 'formAbscence', component: FormAbscenceComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
