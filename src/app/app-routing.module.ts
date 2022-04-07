import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "../app/app.component";
import { AuthLoginComponent } from "../app/auth-login/auth-login.component";
import { StudyDesignComponent } from "../app/study-design/study-design.component";

const routes: Routes = [
  {
    path: 'login', component:AuthLoginComponent
  },
  {
    path: 'dashboard', component:AppComponent
  },
  {
    path: 'study-design', component:StudyDesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
