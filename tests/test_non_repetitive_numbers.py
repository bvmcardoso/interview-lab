from algos.non_repetitive_numbers import find_amount_non_repetitive_numbers


def test_amount_non_repetitive_numbers():
    nums = [1, 2, 3, 1, 2, 3, 3, 2, 1, 4, 5, 6, 6, 5, 4]
    result = find_amount_non_repetitive_numbers(nums)
    assert result == 6
