function twoSum(nums: number[], target: number): number[] {
    let hash: { [key: string]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        let possible = target - nums[i];
        if (hash[possible] !== undefined) {
            return [hash[possible], i]
        } else {
            hash[nums[i]] = i;
        }
    }
};