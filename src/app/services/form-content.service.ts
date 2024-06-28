import { Injectable } from '@angular/core';
import { Template } from '../interface';


@Injectable({
  providedIn: 'root'
})
export class FormContentService {
  templateForm!:Template;
  constructor() {
   }
   sendData(data: Template) {
    this.templateForm=data;
      console.log(data);
   }
     receiveData() {
    
    return this.templateForm;
 }
}
