function twoSum(nums: number[], target: number): number[] {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let possible = target - nums[i];
        if (map[possible] !== undefined) {
            return [map[possible], i]
        } else {
            map[nums[i]] = i;
        }
    }
};