// Mediator interface
interface ChatMediator {
	sendMessage(message: string, user: User): void;
}

// Concrete Mediator
class ChatRoom implements ChatMediator {
	private users: User[] = [];

	addUser(user: User): void {
		this.users.push(user);
	}

	sendMessage(message: string, user: User): void {
		this.users.forEach((u) => {
			if (u !== user) {
				u.receiveMessage(message);
			}
		});
	}
}

// Colleague interface
interface User {
	name: string;
	send(message: string): void;
	receiveMessage(message: string): void;
}

// Concrete Colleague
class ChatUser implements User {
	constructor(private mediator: ChatRoom, public name: string) {
		mediator.addUser(this);
	}

	send(message: string): void {
		console.log(`${this.name} sends: ${message}`);
		this.mediator.sendMessage(message, this);
	}

	receiveMessage(message: string): void {
		console.log(`${this.name} receives: ${message}`);
	}
}

// Usage
const mediator = new ChatRoom();

const user1 = new ChatUser(mediator, "Alice");
const user2 = new ChatUser(mediator, "Bob");
const user3 = new ChatUser(mediator, "Charlie");

user1.send("Hello, everyone!");
user2.send("Hey, Alice!");
user3.send("Hi, Bob!");
