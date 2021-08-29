import { ToastrService } from 'ngx-toastr';
import { CommonService } from './../common.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css']
})
export class ListNoteComponent implements OnInit {
  title='';
  description='';
  list=[];
  @ViewChild('closeBtn') closeBtn: ElementRef;  

  id=2;
  constructor(private common: CommonService, private toast: ToastrService) {
    this.list= this.common.toDoList
   }

  ngOnInit(): void {

  }

  addNewOpt(){
    this.id++;
    this.common.toDoList.push({'id':this.id,'title':this.title,'description':this.description})
    this.title='';
    this.description='';
    this.toast.success('New List Added');
    this.closeBtn.nativeElement.click();

  }
  onDelete(id){
    this.common.toDoList.splice(this.common.toDoList.findIndex(a => a.id === id) , 1)
    this.toast.success('Deleted')
  }
}
