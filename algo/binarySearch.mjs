export class BinarySearch {


    constructor(searched, arr) {
        this.searched = searched;
        this.arr = arr;

        this.binarySearch(searched, arr);
    }

// ma solution
    binarySearch(el, arr) {
        
    }

    sortingTab(arr) {
        let sorted = [];
        let max= 0;
        for(let i = 0 ; i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i];
                sorted.push(max);
            }
        }
        return sorted;
    }

}