import { ToastrService } from 'ngx-toastr';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  Id;
  title:string;
  description:string;
  objIndex;
  objData:any={}
  constructor(private activateR:ActivatedRoute,private route: Router,
     private common: CommonService, private toast: ToastrService) { 
    this.activateR.paramMap.subscribe((params: any) => {
      this.Id = params.params.Id
    })
  }

  ngOnInit(): void {
    //Find index of specific object using findIndex method.    
    this.objIndex = this.common.toDoList.findIndex((obj => obj.id === Number (this.Id)));

    //Log object to Console.
    console.log("Before update: ", this.common.toDoList[this.objIndex])
    this.title = this.common.toDoList[this.objIndex].title;
    this.description = this.common.toDoList[this.objIndex].description;

  }

  onEdit(){
   this.common.toDoList[this.objIndex].title = this.title;
   this.common.toDoList[this.objIndex].description = this.description;
   this.route.navigateByUrl('/list-note');
   this.toast.success('Updated Successfully'); 
  }
}
