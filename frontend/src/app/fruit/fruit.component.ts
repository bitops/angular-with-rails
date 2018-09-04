import { Component, OnInit } from '@angular/core';
import { Fruit } from 'src/app/fruit';
import { FruitService } from 'src/app/fruit.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {  

  fruit: Fruit = new Fruit('placeholder', 'whatever');  

  constructor(private fruitService: FruitService) { }

  ngOnInit() {
    this.fruitService.getFruit().subscribe(val => {
      this.fruit = val;      
    });
  }

}
