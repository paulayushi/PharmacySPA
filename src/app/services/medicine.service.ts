import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../models/medicine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
baseUrl = environment.apiUrl;

constructor(private httpSvc: HttpClient) { }

getMedicines(): Observable<Medicine[]> {
  return this.httpSvc.get<Medicine[]>(this.baseUrl + 'medicine');
}

createContact(contact: Medicine): Observable<any> {
  return this.httpSvc.post(this.baseUrl + 'medicine/createmedicine', contact);
}

}
