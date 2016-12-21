import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Area }           from './area';

@Injectable()
export class AreaService {

  constructor(private http: Http) {}

  list() {
    console.log('list');
    return this.http
               .get(`http://localhost:3000/v1/areas`)
               .map(this.extractData)
               .catch(this.handleError);
  }

  private extractData(res: Response) {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('Bad response status: ' + res.status);
      }
      let body = res.json();
      console.log('-----------------body');
      console.log(body);
      return body || { };
    }

    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
