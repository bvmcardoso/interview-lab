// O que é scope ? É onde a variável pode ser vista.

function createCounter() {
  let counter = 0;

  function incrementCounter() {
    counter++;
    console.log(counter);
  }

  return incrementCounter;
}

const counterOne = createCounter();
counterOne();
counterOne();
counterOne();
counterOne();
counterOne();
counterOne();
counterOne();
counterOne();
counterOne();
counterOne();

function createBankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
      console.log('Your deposit of ' + amount + ' has been made successfully.');
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log('After withdrawing ', amount, 'your new balance is ', balance);
      } else {
        console.log('Insufficient funds');
      }
    },
    getBalance() {
      console.log('Your balance is ', balance);
    },
  };
}

const bankAccount = createBankAccount();
bankAccount.deposit(100);
bankAccount.withdraw(70);
bankAccount.getBalance();
