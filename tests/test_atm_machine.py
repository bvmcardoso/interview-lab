from algos.atm_machine import ATM


def test_withdraw_four_three_four():
    atm = ATM()
    assert (
        atm.withdraw(434)
        == "2 bills of 200\n1 bill of 20\n1 bill of 10\n2 coins of 2\n"
    )
