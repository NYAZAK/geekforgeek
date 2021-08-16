export class LinearSearch {

    constructor(el, arr) {
        this.el = el;
        this.arr = arr;

        this.linearSearch(el, arr);
    }
// ce que j'ai fait
     linearSearch(searched, arr) {  
        let index;
         for(let i = 0; i < arr.length; i++){
           
             if(arr[i] === searched) {
                index = i
                return console.log("Element searched is at the index " + index); 
            }   
         }
            return console.log(-1, 'your element doesn\'t exist' );
          
    }
// correction :

            search(arr, n, x)
        {
            let i;
            for (i = 0; i < n; i++)
             if (arr[i] == x)
                 return i;
            return -1;
        }       

   
}