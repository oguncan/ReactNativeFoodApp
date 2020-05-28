class Meal {
    constructor(id, categoryIds, title, affordability, complexity, imageURL, duration, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactose){
        this.id=id;
        this.categoryIds=categoryIds;
        this.title=title;
        this.affordability=affordability;
        this.complexity=complexity;
        this.imageURL=imageURL;
        this.duration=duration;
        this.ingredients=ingredients;
        this.steps=steps;
        this.isGlutenFree=isGlutenFree;
        this.isVegan=isVegan;
        this.isVegetarian=isVegetarian;
        this.isLactose=isLactose;
    }
}
export default Meal;