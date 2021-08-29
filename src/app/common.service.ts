import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  constructor() { }
  toDoList= [
    {
    'id':1,
    'title':'Test1',
    'description':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis accusantium totam quidem quas assumenda dolore incidunt fugit magnam hic, '
  },
  {
    'id':2,
    'title':'Test2',
    'description':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis accusantium totam quidem quas assumenda dolore incidunt fugit magnam hic, '
  },

];
}
