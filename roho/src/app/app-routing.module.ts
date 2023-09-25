import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [{path : 'home', component: HomeComponent},
{path : 'activities', component: ActivitiesComponent},
{path : 'contact', component: ContactComponent},
{path : 'donate', component: DonateComponent},
{path: '', redirectTo: ' home ', pathMatch: 'full'}];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
