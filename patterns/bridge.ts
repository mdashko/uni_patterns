// Implementor: DrawingAPI
interface DrawingAPI {
	drawCircle(x: number, y: number, radius: number): void;
	drawSquare(x: number, y: number, side: number): void;
}

// Concrete Implementor: SVGDrawingAPI
class SVGDrawingAPI implements DrawingAPI {
	drawCircle(x: number, y: number, radius: number): void {
		console.log(`Drawing circle at (${x}, ${y}) with radius ${radius} using SVG`);
	}

	drawSquare(x: number, y: number, side: number): void {
		console.log(`Drawing square at (${x}, ${y}) with side ${side} using SVG`);
	}
}

// Concrete Implementor: CanvasDrawingAPI
class CanvasDrawingAPI implements DrawingAPI {
	drawCircle(x: number, y: number, radius: number): void {
		console.log(
			`Drawing circle at (${x}, ${y}) with radius ${radius} using Canvas`
		);
	}

	drawSquare(x: number, y: number, side: number): void {
		console.log(`Drawing square at (${x}, ${y}) with side ${side} using Canvas`);
	}
}

// Abstraction: Shape
abstract class Shape {
	protected drawingAPI: DrawingAPI;

	constructor(drawingAPI: DrawingAPI) {
		this.drawingAPI = drawingAPI;
	}

	abstract draw(): void;
}

// Refined Abstraction: Circle
class Circle extends Shape {
	private x: number;
	private y: number;
	private radius: number;

	constructor(x: number, y: number, radius: number, drawingAPI: DrawingAPI) {
		super(drawingAPI);
		this.x = x;
		this.y = y;
		this.radius = radius;
	}

	draw(): void {
		this.drawingAPI.drawCircle(this.x, this.y, this.radius);
	}
}

// Refined Abstraction: Square
class Square extends Shape {
	private x: number;
	private y: number;
	private side: number;

	constructor(x: number, y: number, side: number, drawingAPI: DrawingAPI) {
		super(drawingAPI);
		this.x = x;
		this.y = y;
		this.side = side;
	}

	draw(): void {
		this.drawingAPI.drawSquare(this.x, this.y, this.side);
	}
}

// Usage
const svgDrawingAPI = new SVGDrawingAPI();
const canvasDrawingAPI = new CanvasDrawingAPI();

const circle = new Circle(10, 10, 5, svgDrawingAPI);
circle.draw();

const square = new Square(20, 20, 10, canvasDrawingAPI);
square.draw();
