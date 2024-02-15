import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { PublicationsComponent } from './publications/publications.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { EbookComponent } from './ebook/ebook.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path :'',component :HomeComponent},
  {path :'home',component :HomeComponent},
  {path : 'about', component :AboutComponent},
  {path : 'articles', component :ArticlesComponent},
  {path : 'events', component: EventsComponent},
  {path : 'publications', component : PublicationsComponent},
  {path : 'ebook', component : EbookComponent},
  {path : 'video', component : VideoComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'search' , component : SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
