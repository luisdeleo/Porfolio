import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Inicio', component: HeaderComponent, children:[
  { path: 'Presentacion', component: PresentationComponent },
  { path: 'Experiencia', component: ExperienceComponent },
  { path: 'Trabajos', component: JobsComponent },
  { path: 'Educacion', component: EducationComponent },
  { path: 'Contacto', component: ContactComponent },  ]
},
  { path: '**', redirectTo: '/Inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
