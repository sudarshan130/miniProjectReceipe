import { Component } from '@angular/core';
import { RecipeService } from '../shared/service/recipe.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers : [
    RecipeService
  ]
})
export class RecipeComponent  {
  // currentSelectedRecipe:any;

  // constructor(private recServ : RecipeService){
  //   this.recServ.recipeEmitter.subscribe((receivedData: any)=>{
  //     // console.log('this is from subscribe=>>',receivedData);
  //     this.currentSelectedRecipe=receivedData;
    
  //   })
    
  // }
  // catchListEvent(eve :any){
  //   console.log('event is cathed by parent recipe main',eve);
  //   this.currentSelectedRecipe=eve;

  // }
  
}
