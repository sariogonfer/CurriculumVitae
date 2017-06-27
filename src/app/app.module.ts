import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { ReportComponent } from './report/report.component';
import { ReportService } from './report/report.service';
import { StudiesComponent } from './studies/studies.component';
import { StudiesService } from './studies/studies.service';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './skills/skills.service';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceService } from './experience/experience.service';


const appRoutes: Routes = [{
    path: '',
    component: TerminalComponent,
    children: [
      { path: '', redirectTo: 'report', pathMatch: 'full' },
      { path: 'report', component: ReportComponent },
      { path: 'studies', component: StudiesComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'experience', component: ExperienceComponent },
    ]
  }]

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    ReportComponent,
    StudiesComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule
  ],
  providers: [ReportService, StudiesService, SkillsService, ExperienceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
