import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { HomeComponent } from './components/home/home.component';
import { ApplyComponent } from './components/apply/apply.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { DescriptionComponent } from './components/description/description.component';
import { AppliedComponent } from './components/applied/applied.component';

const routes: Routes = [
  { path: 'jobs', component: JobsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: 'description/:id', component: DescriptionComponent },
  { path: 'applied', component: AppliedComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
