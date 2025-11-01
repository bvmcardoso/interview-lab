class SlidingWindow:
    @staticmethod
    def max_subarray(nums, k):
        window_sum = sum(nums[:k])
        max_sum = window_sum

        for i in range(k, len(nums)):
            window_sum += nums[i] - nums[i - k]
            max_sum = max(max_sum, window_sum)

        return max_sum


nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
k = 4
print(SlidingWindow.max_subarray(nums, k))
