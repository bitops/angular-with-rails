import { Fruit } from './fruit';

describe('Fruit', () => {
  
  it('has a name', () => {    
    const fruit = new Fruit("Banana");    
    expect(fruit.name).toEqual("Banana");
  });

  it('knows its number of calories', () => {    
    const fruit = new Fruit("Banana");    
    expect(fruit.calorieCount()).toEqual(80);
  });
});
