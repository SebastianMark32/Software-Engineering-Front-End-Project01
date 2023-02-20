import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JobInterface } from '../types/job.interface';

@Injectable({ providedIn: 'root'}
)
export class JobService {
  constructor(private httpClient: HttpClient) {}
  
  public jobData!: JobInterface[];

  getJobs(): Observable<JobInterface[]> {
    return this.httpClient.get<JobInterface[]>(
      'http://localhost:3000/job'
    );
  }

  createJob(
    formData: Partial<JobInterface>
  ): Observable<JobInterface[]> {
    return this.httpClient.post<JobInterface[]>(
      'http://localhost:3000/job',
      {
        due: formData.due,
        name: formData.name,
      }
    );
  }

  deleteLink(name: string): Observable<{}> {
    return this.httpClient.delete(`http://localhost:3000/job/${name}`);
  }
}