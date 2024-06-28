import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {path: '', component:ResumeFormComponent},
  {path:'template',component:TemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
