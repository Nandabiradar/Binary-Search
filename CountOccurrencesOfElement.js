function BinarySearch(A,target,firstIndex){
		  var low=0, 
		       high = A.length-1,
			mid,
			result = -1;
			while(low <= high ){
			   mid = Math.floor((low+ high)/2);
				if(target == A[mid]){
			          result = mid;
			            if(firstIndex){
			                 high = mid-1;// this is for first ocuurance toword left (lower indeces )
			                }
				    else{   
			              	low = mid+1;// this is for Last occurrence  toword right (higher indices) 
			                }
				}
				else if(target < A[mid]){
					high = mid-1;
				}
				else low = mid+1;
				
			}
			return result;
		};

function countNumberOcuurance(A, target){
  var firstIndex, lastIndex;
   firstIndex = BinarySearch(A,target,true);
     if(firstIndex === -1)
       {
         return -1;
       }
    else{
        lastIndex = BinarySearch(A,target,false);
      }
  /*var lastIndex = BinarySearch(A,target,false);
     if (lastIndex === -1){
        return -1;
     }*/
     return lastIndex- firstIndex+1;
}
var A = [1,2,3,4,4,4,4,5,5,6,6,6,7,8];
console.log(countNumberOcuurance(A,5));
