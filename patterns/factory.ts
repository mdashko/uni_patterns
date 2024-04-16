class CoffeeShop {
	private static instance: CoffeeShop | null = null;
	private name: string;
	private location: string;

	private constructor(name: string, location: string) {
		this.name = name;
		this.location = location;
	}

	public static getInstance(name: string, location: string): CoffeeShop {
		if (!CoffeeShop.instance) {
			CoffeeShop.instance = new CoffeeShop(name, location);
		}
		return CoffeeShop.instance;
	}

	public getName(): string {
		return this.name;
	}

	public getLocation(): string {
		return this.location;
	}

	public serveCoffee(): void {
		console.log(`Coffee served at ${this.name} in ${this.location}`);
	}
}

// Usage
const coffeeShop1 = CoffeeShop.getInstance("Starbeans", "Main Street");
console.log(coffeeShop1.getName()); // Output: Starbeans
console.log(coffeeShop1.getLocation()); // Output: Main Street
coffeeShop1.serveCoffee(); // Output: Coffee served at Starbeans in Main Street

const coffeeShop2 = CoffeeShop.getInstance("Java Junction", "Broadway");
console.log(coffeeShop2.getName()); // Output: Starbeans (same as coffeeShop1)
console.log(coffeeShop2.getLocation()); // Output: Main Street (same as coffeeShop1)
coffeeShop2.serveCoffee(); // Output: Coffee served at Starbeans in Main Street (same as coffeeShop1)

console.log(coffeeShop1 === coffeeShop2); // Output: true, since both instances refer to the same object
