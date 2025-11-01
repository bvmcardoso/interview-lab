class Solution:

    def median_two_sorted(self, nums1, nums2):
        if not nums1 and not nums2:
            return False

        mixed_array = nums1 + nums2
        array_len = len(mixed_array)
        array_sum = float(sum(mixed_array))
        result = array_sum / array_len
        return result


nums1 = [2, 2, 4, 4]
nums2 = [2, 2, 2, 4, 4]

my_solution = Solution()
my_solution.median_two_sorted(nums1, nums2)
