import { Component } from '@angular/core';
import { FormContentService } from '../services/form-content.service';
import { Template } from '../interface';
import { TemplateComponent } from '../template/template.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})

export class ResumeFormComponent {
  constructor(private formContentService: FormContentService,private router:Router){

  }
formData: Template = {
  name: "",
  email: "",
  phone: 0,
  url1: "",
  url2: "",
  skills:[],
  qualifications:[],
  projects:[],
  achievements: [] 


};

newQualification={
  title: '',
  desc:'',
  grade:''
};

newProject={
  title:'',
  desc:''
};

newAchievement = {
  title: '',
  description: ''
};
  OnSubmit(){
    console.log(this.formData)
    this.formContentService.sendData(this.formData);
    this.router.navigate(['/template']);


  }
  addEducation(){
      this.formData.qualifications.push({
        title: this.newQualification.title,
        desc: this.newQualification.desc,
        grade: this.newQualification.grade
      })
  }
  
  removeEducation(index: number){
    this.formData.qualifications.splice(index,1);
  }

  addProject(){
    this.formData.projects.push({
      title: this.newProject.title,
      desc: this.newProject.desc
    });
    this.newProject={title: '', desc: ''};
  }

  removeProject(index:number){
    this.formData.projects.splice(index,1);
  }


  addAchievement() {
    this.formData.achievements.push({ 
      title: this.newAchievement.title, 
      description: this.newAchievement.description 
    });
    this.newAchievement = { title: '', description: '' };
  }

  removeAchievement(index: number) {
    this.formData.achievements.splice(index, 1);
  }

}
