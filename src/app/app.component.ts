import { Component } from '@angular/core';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Chirpus Pizza';
  allItems:MenuItem[] = [
    {
      item: "Chicken Fingers",
      category: "Dinner",
      price: 11.99
    },
    {
      item: "Pizza",
      category: "Dinner",
      price: 11.99
    },
    {
      item: "Wings",
      category: "Sides",
      price: 8.99
    },
    {
      item: "Breadsticks",
      category: "Sides",
      price: 4.99
    },
    {
      item: "Ceasar Salad",
      category: "Salad",
      price: 5.99
    },
    {
      item: "Cinnamon Roll",
      category: "Dessert",
      price: 8.99
    }
  ];

// Create a method called getByCategory()
// This should take in a string called Cat
// This should return an array of MenuItem where Cat matches Category
  getByCategory(Cat:string):MenuItem[]{
    let menuItems: MenuItem[] = []
    this.allItems.forEach((c) => {
      if(c.category == Cat){
        menuItems.push(c);
      }
      
    });
    
    return menuItems;

  }

  getUniqueCategory():string[]{
    let result:string[] = [];
    this.allItems.forEach((c) => {
      if(result.includes(c.category) == false){
        result.push(c.category)
      }
    });

    return result;
  }


}

