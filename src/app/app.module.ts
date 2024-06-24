import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { TodoAddComponent } from './todos/todo-add/todo-add.component';
import { TodoFooterComponent } from './todos/todo-footer/todo-footer.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
