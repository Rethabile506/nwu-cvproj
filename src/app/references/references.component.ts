import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/models/joke';
import { JokeService } from '../../services/joke/joke.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
  joke:Joke;
  constructor(private jokeService: JokeService) {}

  ngOnInit(): void {

    this.jokeService.getJoke().subscribe((j:Joke)=> this.joke = j);
  }

  goToLink(url: string){
    window.open(url, "_blank");
}

}
