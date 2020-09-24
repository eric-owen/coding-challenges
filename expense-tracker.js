const myAccount = {
    name: 'eric',
    expenses: [],
    income: [],
    addExpense(item, amount) {
        this.expenses.push({
            description: item,
            cost: amount
        })
    },
    accountSum() {
        let expense = 0
        let income = 0
        let balance = 0
        myAccount.expenses.forEach(function (item, index) {
            expense += item.cost
        })
        myAccount.income.forEach(function (item, index) {
            income += item.cost
        })

        balance = income - expense


        console.log(`${this.name} has $${balance} in their account. $${income} is in income and $${expense} is in expenses`)

    },
    addIncome(item, amount) {
        this.income.push({
            description: item,
            cost: amount
        })

    }
}


myAccount.addExpense('car payment', 200)
myAccount.addExpense('cat food', 35)
myAccount.addExpense('bills', 120)
myAccount.addIncome('paycheck', 1200)
myAccount.addIncome('babysittting', 53)

myAccount.accountSum()

console.log(myAccount)