import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users$!: Observable<User[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.users$ = this.http.get<User[]>('https://localhost:7149/api/users/');
  }
}
