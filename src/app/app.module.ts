import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeDataService } from './resume-data.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainRoutingModule } from './main/main-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    LandingPageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainRoutingModule
  ],
  providers: [ ResumeDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
