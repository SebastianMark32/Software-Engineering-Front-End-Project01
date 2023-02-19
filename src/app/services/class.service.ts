import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { ClassInterface } from '../types/class.interface';


@Injectable({providedIn: 'root'})
export class ClassService {

  constructor(private http: HttpClient) {}
  public classData!: ClassInterface[]

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  getClass(): Observable<ClassInterface[]> {
    return this.http.get<ClassInterface[]>(
      'http://localhost:3000/class'
    );
  }

  createClass(
    formData: Partial<ClassInterface>,
  ): Observable<ClassInterface> {
    return this.http.post<ClassInterface>(
      'http://localhost:3000/class',
      {
        start: formData.start,
        end: formData.end,
        title: formData.title,
        day: formData.day,
      },
      
    );
  }
  

  deleteClass(id: string): Observable<{}> {
    return this.http.delete(`http://localhost:3000/class/${id}`,
    );
  }
}