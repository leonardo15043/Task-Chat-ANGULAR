import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'tasks', component: TasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
