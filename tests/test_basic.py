from algos.main import __name__ as main_name


def test_import():
    print("pytest is working fine.")
    assert main_name == "algos.main"
