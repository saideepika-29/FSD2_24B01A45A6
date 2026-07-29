class BankAccount {
    public static readonly bankName: string = "State Bank of India";
    public static totalAccounts: number = 0;
    private accountHolder: string;
    private accountNumber: number;
    private balance: number;
    constructor(name: string, accNo: number, initialBalance: number) {
        this.accountHolder = name;
        this.accountNumber = accNo;
        this.balance = initialBalance;
        BankAccount.totalAccounts++;
    }
    // Deposit money
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`₹${amount} deposited successfully.`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    // Withdraw money
    public withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Invalid withdrawal amount.");
        } else if (amount > this.balance) {
            console.log("Insufficient balance.");
        } else {
            this.balance -= amount;
            console.log(`₹${amount} withdrawn successfully.`);
        }
    }

    // Display account details
    public displayBalance(): void {
        console.log("\n------ Account Details ------");
        console.log(`Bank Name      : ${BankAccount.bankName}`);
        console.log(`Account Holder : ${this.accountHolder}`);
        console.log(`Account Number : ${this.accountNumber}`);
        console.log(`Balance        : ₹${this.balance}`);
    }

    // Static method
    public static showBankInfo(): void {
        console.log(`Bank: ${BankAccount.bankName}`);
        console.log(`Total Accounts: ${BankAccount.totalAccounts}`);
    }
}

BankAccount.showBankInfo();

const acc1 = new BankAccount("Deepika", 1001, 5000);
const acc2 = new BankAccount("Rahul", 1002, 10000);

acc1.deposit(2000);
acc1.withdraw(1500);
acc1.displayBalance();

acc2.deposit(500);
acc2.withdraw(12000);
acc2.displayBalance();

BankAccount.showBankInfo();