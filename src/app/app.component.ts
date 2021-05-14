import { Component } from '@angular/core';
import { cribs } from './data/cribs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  cribs: any;
  
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/posts/1'; 
  readonly ROOT_URL2 = 'https://ki7ulj4aa3.execute-api.us-east-1.amazonaws.com/dev/pets';
  
  constructor(private http: HttpClient) {
    this.cribs = http.get(this.ROOT_URL2);
    // this.cribs = [{"a": 1},{"b": 2}];
  }
}
