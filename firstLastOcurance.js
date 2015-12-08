

		//This program for finding/ searchin First and last ocurance in array
		function BinarySearch(A,target){
		  var start=0, 
			  end = A.length-1,
			  mid,
			  result = -1;
			while(start <= end ){
			   mid = Math.floor((start+ end /2));
				if(target ==A[mid]){
				    result = mid;
					end = mid-1;// this is for first ocuurance
					start = mid+1;// this is for Last occurance  
				}
				else if(target < A[mid]){
					end = mid-1;
				}
				else start = mid+1;
				
			}
			return result;
		}
		var A = [2,4,10,10,10,14,20];
console.log(BinarySearch(A,10));//3
console.log(BinarySearch(A,11));//-1 
