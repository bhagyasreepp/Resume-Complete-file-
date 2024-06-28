import { Component, OnInit } from '@angular/core';
import { Template } from '../interface';
import { FormContentService } from '../services/form-content.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})

export class TemplateComponent implements OnInit {
  templateForm!: Template;
  constructor(private formContentService: FormContentService){

  }
  ngOnInit(): void {
    this.templateForm=this.formContentService.receiveData();
    console.log(this.templateForm);
  }

}
