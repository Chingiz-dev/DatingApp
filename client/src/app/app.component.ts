import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'The Dating app';
  public users$!: Observable<User[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.users$ = this.http.get<User[]>('http://localhost:5236/api/users');
  }
}
