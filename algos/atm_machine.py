class ATM:
    def withdraw(self, amount):
        bills = [500, 200, 100, 50, 20, 10, 5, 2, 1]
        combinations = ""
        for bill in bills:
            if amount == 0:
                break
            if bill > amount:
                continue
            notes = amount // bill
            if bill <= 2:
                combinations += f"{notes} coins of {bill}\n"
            elif notes > 1:
                combinations += f"{notes} bills of {bill}\n"
            else:
                combinations += f"{notes} bill of {bill}\n"
            amount -= notes * bill
        return combinations


atm = ATM()
print(atm.withdraw(434))
