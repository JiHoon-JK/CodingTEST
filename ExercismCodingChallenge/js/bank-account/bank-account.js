//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    // Initial value starts with 0. (_balance is 0)
    this._balance = 0;
    // Initial status starts with false.
    this.status = false;
  }

  open() {
    // When open() again after open(), the if statement to check.
    if(this.status === true){
        // throw ValueError as an error
        throw new ValueError();
    }
    // changes status to true.
    this.status = true;
  }

  close() {
    // ① without open(), call close() ② close() twice
    if(this.status === false){
        // throw ValueError as an error.
        throw new ValueError();
    }
    // changes status to false and set Initial value to 0.
    this.status = false;
    this._balance = 0;
  }

  deposit(money) {
    // ① money is negative (<0) ② no open()
    if((money < 0)|| (this.status === false)){
        // throw ValueError as an error.
        throw new ValueError;
    }
    // add money to _balance.
    this._balance += money;
  }

  withdraw(money) {
    // ① money is negative (<0) ② no open() ③ Withdrawing more money than you have
    if((money < 0) || (this.status === false) || (this._balance < money)){
        // throw ValueError as an error.
        throw new ValueError;
    }
    // subtract money to _balance.
    this._balance -= money;
  }

  get balance() {
    // when status is false, throw ValueError.
    if (this.status === false){
        throw new ValueError;
    }
    // return _balance
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
