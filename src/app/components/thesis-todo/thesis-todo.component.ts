import { Component, OnInit, ViewChild,
  Output,
  EventEmitter,
  Input } from '@angular/core';

import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { first } from 'rxjs';
import { ThesisService } from 'src/app/services/thesis.service';
import { ThesisInterface } from 'src/app/types/thesis.interface';

@Component({
  selector: 'app-thesis-todo',
  templateUrl: './thesis-todo.component.html',
  styleUrls: ['./thesis-todo.component.scss']
})
export class ThesisTodoComponent implements OnInit{
  @ViewChild("formDirective") formDirective!: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter;
  form1!: FormGroup;
  post!: ThesisInterface[];
  isOpen1 = false;

  constructor( 
    private thesisService: ThesisService,
  ){}

  ngOnInit(){
    this.form1 = this.createFormGroup1();

    console.log("Fetching jobs");
    this.thesisService.getThesis().subscribe(posts => {
      this.post = posts
      this.thesisService.thesisData = posts
      console.log(this.post);
    });
  }

  createFormGroup1(): FormGroup {
    
    return new FormGroup({
      link: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  onSubmit1(formData: Pick<ThesisInterface, "name"| "link">): void {
    console.log(formData.name)
    console.log(formData.link)
    this.thesisService
      .createThesis(formData)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);
      });
    this.form1.reset();
    this.formDirective.resetForm();
  }
}
