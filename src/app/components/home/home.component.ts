import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// Jere define the elements that will have the homepage

  public title: string;
  public subtitle: string;
  public autor : string;

  constructor() {
    this.title="APP To search Jobs";

    this.subtitle = "Student at CCT College";
    this.autor = "by Jose Miguel Gonzales  ";
   }

  ngOnInit(): void {
  }

}
