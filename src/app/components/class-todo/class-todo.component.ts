import { Component, OnInit, ViewChild,
  Output,
  EventEmitter,
  Input } from '@angular/core';

import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { first } from 'rxjs';
import { ClassService } from 'src/app/services/class.service';
import { ClassInterface } from 'src/app/types/class.interface';

@Component({
  selector: 'app-class-todo',
  templateUrl: './class-todo.component.html',
  styleUrls: ['./class-todo.component.scss']
})
export class ClassTodoComponent implements OnInit{
  @ViewChild("formDirective") formDirective!: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter;

  form1!: FormGroup;
  form2!: FormGroup;
  post!: ClassInterface[];
  isOpen1 = false;
  isOpen2 = false;

  constructor( 
    private classService: ClassService,
  ){}

  ngOnInit(){
    this.form1 = this.createFormGroup1();
    this.form2 = this.createFormGroup2();

    console.log("Fetching classes");
    this.classService.getClass().subscribe(posts => {
      this.post = posts
      this.classService.classData = posts
      console.log(this.post);
    });
  }


  createFormGroup1(): FormGroup {
    
    return new FormGroup({
      start: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      end: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
      ]),
      day: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  createFormGroup2(): FormGroup {
    return new FormGroup({
      id: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }




  onSubmit1(formData: Pick<ClassInterface, "start"| "end" | "title" | "day"  >): void {
    console.log(formData.start)
    console.log(formData.end)
    console.log(formData.title)
    console.log(formData.day)
    this.classService
      .createClass(formData)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);
      });
    this.form1.reset();
    this.form2.reset();
    this.formDirective.resetForm();
  }

  onSubmit2(formData: string): void {
    console.log(formData)
    this.classService
      .deleteClass(formData)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);
      });
    this.form2.reset();
    this.form1.reset();
    this.formDirective.resetForm();
  }
}