import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './models/data.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  data: Observable<Data>;
  data: Data[];
  frequency: number;

  constructor(private http: HttpClient) {
    // this.data = this.http.get<Data>('./assets/data.json');
    this.http.get<Data[]>('./assets/data.json').subscribe(response => {
      this.data = response;
    });
  }

  update(value) {
    this.frequency = value;

  }

  addEntry(letter, frequency) {
    const d = {} as Data;
    d.letter = letter;
    d.frequency = frequency;
    const tmp = [d];
    this.data = this.data.concat(tmp);
  }
}
