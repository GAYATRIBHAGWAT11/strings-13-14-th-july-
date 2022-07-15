let nums1=[1,2,3]
let nums2=[4,5,6]
let nums3=[7,8,9]
console.log(nums1.concat('gayatri',nums2,nums3));
console.log(nums1,'gayatri',nums2,nums3);


// so=>

console.log(([...nums1,'gayatri',nums2,nums3]));
console.log(([...nums1,'gayatri',...nums2,...nums3]));