import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Serviços */
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

import { AddTodoComponent } from './add-todo/add-todo.component';

/* Componentes */
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tabNumber: 1}},
  { path: 'todos', component: TodosComponent, data: { tabNumber: 2}},
  { path: 'todos/add', component: AddTodoComponent},
  { path: 'notes', component: NotesComponent, data: { tabNumber: 3}},
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/:id', component: EditNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
