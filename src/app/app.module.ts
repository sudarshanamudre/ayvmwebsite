import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './publications/publications.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { EbookComponent } from './ebook/ebook.component';
import { VideoComponent } from './video/video.component';
import { ThemetogglebuttonComponent } from './themetogglebutton/themetogglebutton.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PublicationsComponent,
    ArticlesComponent,
    EventsComponent,
    ContactComponent,
    SearchComponent,
    EbookComponent,
    VideoComponent,
    ThemetogglebuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
