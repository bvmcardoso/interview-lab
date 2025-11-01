from typing import List


class Solution:
    def isBalanced(self, s) -> str:
        open_to_close = {
            "[": "]",
            "{": "}",
            "(": ")",
        }

        stack = []

        if not s:
            return "NO"

        for char in s:
            # Opening
            if char in open_to_close:
                stack.append(char)
            # Closing
            elif char in open_to_close.values():
                if not stack:
                    return "NO"
                last_stack_item = stack.pop()
                if last_stack_item == open_to_close[last_stack_item]:
                    continue

        if len(stack) == 0:
            return "YES"
        else:
            return "NO"


chars = "()[][]{}{}[]()"
chars = "({})[{}]((([]{}{}[]())))"
chars = "]["
solution = Solution()
print(solution.isBalanced(chars))

open_to_close = {
    "[": "]",
    "{": "}",
    "(": ")",
}
