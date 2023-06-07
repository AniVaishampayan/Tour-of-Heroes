import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  //  hero = 'Windstorm';
 
 hero:Hero={
  id:1,
  name:'Windstorm'
 };
//  heroes = HEROES;
heroes: Hero[] = [];
 selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id},hero name=${hero.name}`,);
}
constructor(private heroService: HeroService,private messageService: MessageService){}
// getHeroes(): void {
//   this.heroes = this.heroService.getHeroes();
// }
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
ngOnInit(): void {
  this.getHeroes();
}
}
