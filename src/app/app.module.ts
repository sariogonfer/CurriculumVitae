import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { ReportService } from './report/report.service';
import { StudiesComponent } from './studies/studies.component';
import { StudiesService } from './studies/studies.service';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './skills/skills.service';


const appRoutes: Routes = [{
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'report', pathMatch: 'full' },
      { path: 'report', component: ReportComponent },
      { path: 'studies', component: StudiesComponent },
      { path: 'skills', component: SkillsComponent },
    ]
  }]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ReportComponent,
    StudiesComponent,
    SkillsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule
  ],
  providers: [ReportService, StudiesService, SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
