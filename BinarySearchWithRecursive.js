	// this is BinarySearch with Recursive function 
		function BinarySearch(A, start, end, target){
			  var mid = Math.floor((start + end)/2);
				if(start > end){ 
					return -1
				}
			if(target == A[mid]){
				return A[mid];
			}
			else if( target < A[mid] ){
				  return BinarySearch( A, start, mid-1, target);
			}
			else {
				return BinarySearch(A, mid+1,end , target);
			}
		}
		var A = [1, 3, 6, 10, 14, 15, 18, 20, 25, 33, 36, 40, 43, 44, 48, 50];
console.log(BinarySearch(A,0,15,43));//43 
console.log(BinarySearch(A,0,15,11));//-1 

