import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';
import { HighlightTag } from '../../node_modules/angular-text-input-highlight';
import {text_response, problematicterm} from './text-response';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class Service {

    constructor(private http:HttpClient) {
    }

    // NOTE: all API calls in this file use simple endpoints served by
    // an Express app in the file app.js in the repo root. See that file
    // for all back-end code.

    // Uses http.get() to load data from a single API endpoint
    get() {
        return this.http.get('https://pof9jxlitj.execute-api.us-east-2.amazonaws.com/prod/hello-world',httpOptions ).subscribe(data => {
            console.log(data);
          });
    }

    // send a POST request to the API to create a new data object
    post(text:string) {
        return this.http.post<text_response>('https://pof9jxlitj.execute-api.us-east-2.amazonaws.com/prod/filter-text', {
            InputText : text
          }, httpOptions);
        
    }

}