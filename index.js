
function arrayF_1() {
	let array = [1, 2, 3, 4];
	let x = array.pop();

	console.log(x); // Output: 4
	console.log(array); // Output: [1, 2, 3]
}

function arrayF_2() {
	let array1 = [1, 3, 2, 0];
	let array2 = ["JavaScript", "Java", "Python"];
	let array3 = ["b", 3, 1, "c", "a"];

	let originalArray1 = [...array1];
	   
	console.log('Sorted array1:', array1.sort());
	console.log('Sorted array2:', array2.sort());
	console.log('Sorted array3:', array3.sort());

	console.log('Original array1:', originalArray1);
}

arrayF_1();
arrayF_2();

