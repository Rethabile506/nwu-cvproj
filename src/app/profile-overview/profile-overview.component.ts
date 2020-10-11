import { Component, OnInit } from '@angular/core';
import {JokeService} from '../../services/joke/joke.service';
import {Joke} from '../../models/joke';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css']
})
export class ProfileOverviewComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
  }
  
  

}
