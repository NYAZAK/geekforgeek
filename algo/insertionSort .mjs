export class InsertionSort {
    constructor(arr) {
        this.arr = arr;

        this.insertionSort(arr);

    }


    insertionSort(arr) {
        let len = arr.length;


        for(let i = 0; i < len ; i++) {
            let j = i -1 ;
            let temp = arr[i];
           while(j >= 0 && arr[j] > temp) {
               arr[j + 1] = arr[j]
               j--
           }
           arr[j+1] = temp
        }
        return console.log(arr);
    }




}