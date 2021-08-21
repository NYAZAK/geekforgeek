export class SelectionSort {

    constructor(arr) {
        this.arr = arr;
        this.selectionSort(arr);

    }


    selectionSort(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            let min = i;
            for(let j = i + 1; j < len; j++) {
                if(arr[min] > arr[j]) {
                    min = j;
                }
            }
            if(min !== i) {
                let temporary = arr[i];
                arr[i] = arr[min];
                arr[min] = temporary
            }
        }
        return console.log(arr);
    } 

}