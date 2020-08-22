import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  
  constructor(private http:HttpClient) { }

  readonly URL = "https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json";

  getRecipe(){
    return this.http.get(this.URL);
  }
 
  

}
