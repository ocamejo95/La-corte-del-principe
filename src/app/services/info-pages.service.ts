import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  constructor(private http: HttpClient) {
  }

  getInfoPage(): Observable<any> {
    return this.http.get(environment.URL_INFO_PAGE);
  }
}
