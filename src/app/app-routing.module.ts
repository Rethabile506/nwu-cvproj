import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { ReferencesComponent } from './references/references.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {path: '',   redirectTo: '/overview', pathMatch: 'full'},
  {path: 'overview', component: ProfileOverviewComponent},
  {path: 'personal', component: PersonalInformationComponent},
  {path: 'education', component: EducationComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'references', component: ReferencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
