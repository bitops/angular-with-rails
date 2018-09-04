export class Fruit {

  name: string;
  url: string;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }

  calorieCount(): number {
    if(this.name == "Banana") {
      return 80;
    }
    return null;
  }
  
}
