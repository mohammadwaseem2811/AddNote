import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNoteRoutingModule } from './add-note-routing.module';
import { AddNoteComponent } from './add-note.component';


@NgModule({
  declarations: [AddNoteComponent],
  imports: [
    CommonModule,
    AddNoteRoutingModule
  ]
})
export class AddNoteModule { }
