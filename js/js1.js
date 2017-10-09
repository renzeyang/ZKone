function jsOne(arr){
	var obj = {};
	var newArr = []
	for(var i=0;i<arr.length;i++){
		obj[arr[i]] = ""
	}
	for(var key in obj){
		newArr.push(key)
	}
    return newArr
}
