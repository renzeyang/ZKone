function jsTwo(arr){
	var newArr = [];
	var a = b = 5
	for(var i=0;i<arr.length;i++){
		if(newArr.indexOf(arr[i])===-1){
			newArr.push(arr[i])
		}
	}
	return newArr
}
