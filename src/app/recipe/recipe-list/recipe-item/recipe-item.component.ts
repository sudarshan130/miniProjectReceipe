import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeService } from 'src/app/shared/service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent{
  @Input('recData') rec :any;
  @Input('recIndex')ind : any;
  // @Output ('itemClickHandler') itemClickHandler = new EventEmitter();

  constructor(private recServ : RecipeService){}

  // recipeClick(){
  //   // this.itemClickHandler.emit(this.rec);
  //   this.recServ.recipeEmitter.emit(this.rec);
  // }
}
