import { NgModule, Component,ViewEncapsulation } from "@angular/core";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";
import { Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HighlightTag } from 'angular-text-input-highlight';
import { Observable,  Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';
import {text_response} from "./text-response";
import { map, filter, switchMap } from 'rxjs/operators';
import { Service} from './service';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'hack-male';
 
  text = "wow, you GUYS, i think the Boss Lady is on her period...";

  /*tags: HighlightTag[] = [{
    indices: { start: 9, end: 12 },
    cssClass: 'bg-blue'
  }];*/
  tags: HighlightTag[] = [];
  constructor(private _service: Service){
  }

  ngOnInit(): void {
   
    /*let hdrs = new Headers();
    hdrs.append("Access-Control-Allow-Origin", "*");
    hdrs.append("Access-Control-Allow-Headers","*");*/
    /*let hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json');
    hdrs.append('Access-Control-Allow-Origin','*');
    hdrs.append('Access-Control-Allow-Credentials','true');
      let  _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    this.http.get('https://pof9jxlitj.execute-api.us-east-2.amazonaws.com/prod/hello-world',_options ).subscribe(data => {
      console.log(data);
    });
    console.log(this.tags.length);*/
    
    
  }
/*
  public PostText(payload: string): Observable<HighlightTag[]> {
    
      let hdrs = new HttpHeaders();
      hdrs.append('Content-Type', 'application/json');
      hdrs.append('Access-Control-Allow-Origin','*');
      hdrs.append('Access-Control-Allow-Credentials','true');
        let  _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      var v =  this.http.post('https://pof9jxlitj.execute-api.us-east-2.amazonaws.com/prod/filter-text', {
        InputText : this.text
      },_options)
        .subscribe(
          res => {
            console.log(res);
            console.log('Local Response' + JSON.stringify(this.response));
            this.response.problematicTerms.forEach(element => {
              console.log(element.FemReplacement);
              this.tags.push({indices : {start:element.startIndex,end:element.endIndex}, cssClass:'bg-red',data:{user:1}},);
              console.log('tag count' + this.tags.length);
              return this.tags;
            });
          },
          err => {
            console.log("Error occured");
          }
        );
        console.log('final' +this.tags.length);
        return this.tags;
  }*/
  
   onSubmit(){
    
    this._service.post("wow, you GUYS, i think the Boss Lady is on her period...").subscribe(
      data => {
        // refresh the list
        let t: HighlightTag[] = [];
        data.problematicTerms.forEach(element => {
          console.log(element);
          this.tags.push({indices : {start:element.startIndex,end:element.endIndex}, cssClass:'bg-red',data:{user:1}});
          
        });
        console.log(JSON.stringify(this.tags));
      },
      error => {
        console.error("Error from service");
        console.log(error);
        return Observable.throw(error);
      }
   );
   
   }

  /*onSubmit(){
    let hdrs = new HttpHeaders();
    hdrs.append('Content-Type', 'application/json');
    hdrs.append('Access-Control-Allow-Origin','*');
    hdrs.append('Access-Control-Allow-Credentials','true');
      let  _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    this.http.post<text_response>('https://pof9jxlitj.execute-api.us-east-2.amazonaws.com/prod/filter-text', {
      InputText : this.text
    },_options)
      .subscribe(
        res => {
          console.log(res);
          this.response = res;
          console.log('Local Response' + JSON.stringify(this.response));
          this.response.problematicTerms.forEach(element => {
            console.log(element.FemReplacement);
            this.tags.push({indices : {start:element.startIndex,end:element.endIndex}, cssClass:'bg-red',data:{user:1}});
            console.log('tag count' + this.tags.length);
          });
        },
        err => {
          console.log("Error occured");
        }
      );
      console.log('final' +this.tags.length);
  }*/
  
}
