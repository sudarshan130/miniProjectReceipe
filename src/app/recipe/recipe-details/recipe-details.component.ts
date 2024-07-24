import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/shared/service/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent  {
// @Input('recDataFromParent') rec : any;
rec:any;
 constructor(private activeRoute : ActivatedRoute, private recServe : RecipeService){

  this.activeRoute.params.subscribe((param :any)=>{
    console.log(param.id)
    this.rec = this.recServe.getRecipeObjUsingIndex(+param.id);
  })
 }



}
