import { Component, OnInit, ViewChild,
  Output,
  EventEmitter,
  Input } from '@angular/core';

import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { first } from 'rxjs';
import { JobInterface } from 'src/app/types/job.interface';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-todo',
  templateUrl: './job-todo.component.html',
  styleUrls: ['./job-todo.component.scss']
})
export class JobTodoComponent implements OnInit{
  @ViewChild("formDirective") formDirective!: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter;
  form1!: FormGroup;
  post!: JobInterface[];
  isOpen1 = false;

  constructor( 
    private jobService: JobService,
  ){}

  ngOnInit(){
    this.form1 = this.createFormGroup1();

    console.log("Fetching jobs");
    this.jobService.getJobs().subscribe(posts => {
      this.post = posts
      this.jobService.jobData = posts
      console.log(this.post);
    });
  }

  createFormGroup1(): FormGroup {
    
    return new FormGroup({
      due: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  onSubmit1(formData: Pick<JobInterface, "name"| "due">): void {
    console.log(formData.name)
    console.log(formData.due)
    this.jobService
      .createJob(formData)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);
      });
    this.form1.reset();
    this.formDirective.resetForm();
  }

}
