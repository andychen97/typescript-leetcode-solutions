function containsDuplicate(nums: number[]): boolean {
    let counter: { [key: string]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        if (counter[nums[i]]) return true;
        else counter[nums[i]] = 1;
    }
    return false;
};