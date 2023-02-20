import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ThesisInterface } from '../types/thesis.interface';

@Injectable({providedIn: 'root'})
export class ThesisService {
  constructor(private httpClient: HttpClient) {}

  public thesisData!: ThesisInterface[];

  getThesis(): Observable<ThesisInterface[]> {
    return this.httpClient.get<ThesisInterface[]>(
      'http://localhost:3000/thesis'
    );
  }

  createThesis(
    formData: Partial<ThesisInterface>
  ): Observable<ThesisInterface[]> {
    return this.httpClient.post<ThesisInterface[]>(
      'http://localhost:3000/thesis',
      {
        name: formData.name,
        link: formData.link,
      }
    );
  }

  deleteLink(name: string): Observable<{}> {
    return this.httpClient.delete(`http://localhost:3000/thesis/${name}`);
  }
}