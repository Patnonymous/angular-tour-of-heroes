import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "../hero.service";
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // List of Hero's.
  heroes: Hero[] = [];


  constructor(private heroService: HeroService) { }

  // Call getHeroes when initialized.
  ngOnInit(): void {
    this.getHeroes();
  }


  // Use the heroService to get the data.
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
