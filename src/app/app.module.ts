import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { PapersComponent } from './papers/papers.component';
import { PapersService } from './papers/papers.service';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';
import { BuildingComponent } from './building/building.component';


const appRoutes: Routes = [{
    path: '',
    component: TerminalComponent,
    children: [
      { path: '', redirectTo: 'report', pathMatch: 'full' },
      { path: 'report', component: ReportComponent },
      { path: 'studies', component: StudiesComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'papers', component: PapersComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'building', component: BuildingComponent },
    ]
  }]

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    ReportComponent,
    StudiesComponent,
    SkillsComponent,
    ExperienceComponent,
    PapersComponent,
    ContactComponent,
    BuildingComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ReportService,
    StudiesService,
    SkillsService,
    ExperienceService,
    PapersService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
