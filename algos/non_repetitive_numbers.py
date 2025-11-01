from typing import List


def find_amount_non_repetitive_numbers(numbers: List[int]) -> int:
    if len(numbers) <= 0:
        return 0

    return len(set(numbers))
