import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QnComponent } from './qn/qn.component';

const routes: Routes = [
	{path:'qn',component:QnComponent},
	{path:'**', redirectTo:'qn'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
