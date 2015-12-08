	/*this function for binary search with ittration 
	 itarion is allway good performanced 
	time complexisi take log(n) or O(log n)
	*/
function binarySearch(arr,target){
			var start = 0,
				end = arr.length-1,
				mid,
				element;
			while(start <= end){
				mid = Math.floor ((start + end)/2);
				//mid = Math.floor ((start + end) >> 1);// this is good for performance base.
				element= arr[mid];
				if(target < element)
				{
					end = mid-1; 
				}
				else if(target > element){
					start = mid +1;
				}
				else
					return mid
			}
			return -1;
		}
		var arr = [1, 3, 6, 10, 14, 15, 18, 20, 25, 33, 36, 40, 43, 44, 48, 50];
console.log(binarySearch(arr,43));


