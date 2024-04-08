class BankAccount {
  static #accountNumbers = new Set(); // To store unique account numbers

  constructor(accountNumber, ownerName, balance) {
    if (BankAccount.#accountNumbers.has(accountNumber)) {
      throw new Error("This account number already declared");
    }
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
    BankAccount.#accountNumbers.add(accountNumber);
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}TK. New balance = ${this.balance}TK`);
    } else {
      console.log("Invalid deposit amount.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}TK. New balance = ${this.balance}TK`);
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: ${this.balance}TK`);
  }
}

// Create two instances of the BankAccount class
const account1 = new BankAccount(200001, "John Doe", 1000);
const account2 = new BankAccount(200002, "Jane Smith", 500);

// Demonstrate functionality
account1.deposit(200);
account1.withdraw(300);
account1.displayAccountInfo();

console.log("\n");

account2.deposit(300);
account2.withdraw(700);
account2.displayAccountInfo();
