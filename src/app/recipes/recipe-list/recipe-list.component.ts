import { Component, OnInit, Input } from '@angular/core';
import {RecipeService} from './../../recipes/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
 
  recipe : any[];
  viewRecipes:any;
  flag:boolean
 


  constructor(private recipeservice :RecipeService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
this.flag=false;
    this.recipeservice.getRecipe().subscribe((data) =>{
      this.recipe = data as any[];
      console.log(this.recipe);
    });
    
  }
  onSelected(rec){
    this.flag=true;
    this.viewRecipes=rec;
    console.log( this.viewRecipes);
  }

  // onNewRecipe(){
  //   this.router.navigate(['recipe-detail'], {relativeTo: this.route});
  // }
  viewRecipe(recipeName){
    
    console.log(recipeName);
   }
}
