// Write a function called `containsTwice` that accepts a number and an array,
// and returns `true` if that number appears in the array twice, and `false`
// otherwise.
//
//     containsTwice(5, [1, 2, 3, 4, 5]);
//     //=> false
//
//     containsTwice("hello", [ "hello", "world", "hello" ]);
//     //=> true
//
//     containsTwice(true, [ true, false, false, true ]);
//     //=> true
//
//     containsTwice(10, [10, 10, 10, 10, 10]);
//     //=> false
//
var containsTwice = function (num,arr) {
	var c=0;
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i]==num)
		{
			c=c+1;
		}
	}
	if(c == 2)
		{
			return "true"
		}
	else
	{
		return "false"
	}
	
};
console.log(containsTwice(5,[5,2,3,4,5]));


// Generalize the previous solution into a function called `containsNTimes` so
// that it can check for a value an arbitrary number of times.
//
//     containsNTimes(3, "hello", [ "hello", "hello", "hello" ]);
//     //=> true
//
//     containsNTimes(5, true, [ true, true, true, true, false ]);
//     //=> false
//
//     containsNTimes(0, 5, [ 1, 2, 3, 4, 5 ]);
//     //=> false
//
var containsNTimes = function (num,num1,arr) {
	var c =0;
	for (var i=0;i<arr.length;i++)
	{
		if(arr[i]==num1)
		{
			c=c+1;
		}
	}
	if(c== num)
		{
			return "true";
		}
	else
	{
		return "false"
	}
};
console.log(containsNTimes(0,5,[1,2,3,4,0]));


// Write a function called `atLeastOneEven` that returns `true` if at least one of
// the numbers in input array is even, false otherwise. It should throw an error if
// the argument is not an array.
//
//     atLeastOneEven([ 3, 5, 6, 7, 9 ]);
//     //=> true
//
//     atLeastOneEven([]);
//     //=> false
//
//     atLeastOneEven([ 101, 203, 401 ]);
//     //=> false
//
//     atLeastOneEven("hello");
//     //=> input should be an array!
//
var atLeastOneEven = function (arr) {
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i] % 2 == 0)
		{
			return "true";
			break;
		}
		
	}
	if ((arr[arr.length-1] % 2 !==0) && (typeof(arr)=="object") )
		{
			return "false"
		}

	if(typeof(arr)!="object")
	{
		return "input should be an array"
	}
	if ( arr==[])
	{
		return "false"
	}
};
console.log(atLeastOneEven(["wedf"]))


// Write a function called `allStrings` that accepts an array as an argument and
// returns `true` if all of the values in the array are strings. It should
// return false if they are not all strings, and throw an error if the input is
// not an array.
//
//     allStrings([ "these", "are", "all", "strings" ]); //=> true
//
//     allStrings([ "these", "are", "not", 5 ]); //=> false
//
//     allStrings([ ]); //=> true
//
//     allStrings("hello"); //=> input should be an array!
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds a non-string entry in the array.
//
var allStrings = function (arr) {
	var c =0;
	if(typeof(arr)=="object")
	{
		for(var i=0;i<arr.length;i++)
		{
			if(typeof(arr[i])!="string")
			{
				c=c+1;
			}
		
		}
		if(c == 0)
		{
			return "true"
		}
		if(c != 0)
		{
			return "false"
		}
	}
	else
	{
		return "input should be an array!"
	}
};
console.log(allStrings("edsfwef"))

// Write a function that accepts two arrays, and returns true if any of the
// values in the first array appear twice in the second array. You might want to
// reuse the function `containsNTimes` or `containsTwice` from above. It should
// throw an error if either of the inputs are not arrays.
//
//
//     containsAnyTwice([1, 2], ["hello", 1, "world", 1]);
//     //=> true
//
//     containsAnyTwice([], ["always", "will", "return", "false"]);
//     //=> false
//
//     containsAnyTwice(["hello", "world"], ["hello", "hello", "world", "world"]);
//     //=> true
//
//     containsAnyTwice("hello", ["hello", "world"]);
//     //=> containsAnyTwice expects two arguments, both of which should be an array.
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds an element in the first array that appears twice in the second
// array.
//
var containsAnyTwice = function (arr1,arr2) {
	var c=0;
	if((typeof(arr1)=="object")&&(typeof(arr2)=="object"))
	{
		for(var i=0;i<arr1.length;i++)
		{
			for( var j=0;j<arr2.length;j++)
			{
				if(arr1[i]==arr2[j])
				{
					c=c+1;
				}
			}
		
	
		if(c==2)
		{
			return "true"
		}
		else
		{
			return "false"
		}
	}
	}
	else
	{
		return "containsAnyTwice expects two arguments, both of which should be an array"
	}
};
console.log(containsAnyTwice(["hello", "world"], ["hello", "hello", "world", "world"]))
console.log(containsAnyTwice(["hello", "world"], ["hello", "world"]));
console.log( containsAnyTwice("hello", ["hello", "world"]));


// In the previous problem, we determined whether or not an array contains any
// of a list of values exactly twice. In this problem, we'll actually return
// those values appearing twice.  Create a new function that returns an array of
// only the values from the first array that appear twice in the second array.
//
// For this problem, you'll create a new array, and you'll use its `push`
// function to add elements to the end. You'll most likely want to use the
// `containsTwice` function you created in the previous exercise.
//
// The difficulty here will be in avoiding duplicates. You may want to use the
// `indexOf` method of the resulting array to confirm that you're not adding a
// value a second time.
//
//     getValuesAppearingTwice(["hello", 1, "world", 1]);
//     //=> [ 1 ]
//
//     getValuesAppearingTwice(["always", "will", "return", "empty"]);
//     //=> []
//
//     getValuesAppearingTwice(["hello", "hello", "world", "world", "goodbye"]);
//     //=> [ "hello", "world" ]
//
//     getValuesAppearingTwice(["hello", "world", "goodbye"])
//     //=> []
//
var getValuesAppearingTwice = function (arr) {
	var c=0;
	var arr2=[];
	for(i=0;i<arr.length;i++)
	{
		for(j=i+1;j<arr.length;j++)
		{
			if(arr[i]==arr[j])
			{
				arr2.push(arr[i]);
			}
		}
	}
	return arr2;

};
console.log(getValuesAppearingTwice(["hello", 1, "world", 1]));
console.log(getValuesAppearingTwice(["hello", "hello", "world", "world", "goodbye"]));


// Using a standard `for` loop, along with the `push` function, write a function
// called `range` that accepts two numbers, `begin` and `end`, and returns an array
// that contains all of the integers starting at `begin` and ending at `end`
// (including `begin` and `end`). For example:
//
//     range(5,10);
//     //=> [5, 6, 7, 8, 9, 10]
//
//     range(0,3);
//     //=> [0, 1, 2, 3]
//
//     range(10,3);
//     //=> [10, 9, 8, 7, 6, 5, 4, 3]
//
// It should throw an error when either of the arguments are not numbers.
//
//     range("hello", "world");
//     //=> arguments to range must be numbers
//
var range = function (n1,n2) {
	var a1=[];
	if(n1<n2)
	{
		for(var i=n1;i<=n2;i++)
		{
			a1.push(i);
		}
		return  a1;
	}
	if (n1>n2)
	{
		for(var i=n1;i>=n2;i--)
		{
			a1.push(i);
		}
		return a1;
	}
};
console.log(range(5,10));
console.log(range(10,3));


// Using the `isHTMLElement` and `getTagName` function from one of the previous
// sections, write a function called `mapToTags` that accepts an array of HTML
// elements and returns a new array that consists of only the tags associated with
// those HTML elements. It should throw an error if any of the elements are not
// HTML elements, or if the input is not an array.
//
//     mapToTags(["<p>this is a paragraph</p>", "<span>this is a span</span>", "<li>this is a list item</li>"]);
//     //=> ["p", "span", "li"]
//
//     mapToTags([]);
//     //=> []
//
//     mapToTags(["<p>this is a paragraph</p>", "this is a tweet"]);
//     //=> "this is a tweet" is not an HTML element!
//
//     mapToTags(5);
//     //=> wat?
//
//     mapToTags([ "not an html element" ]);
//     //=> all entries must be html elements!
//
var mapToTags = function (arr) {
	a2=[];

	for(var i=0;i<arr.length;i++)
	{
		var b=arr[i].indexOf(">");
		var a=arr[i].indexOf("<")
		var c=arr[i].slice(a+1,b);
		
		a2.push(c);
		if(arr[i].charAt(0) != "<")
		{
			return "all entries must be html elements!"
		}

	}
	return a2;
};
console.log(mapToTags(["<p>this is a paragraph</p>", "<span>this is a span</span>", "<li>this is a list item</li>"]));
console.log(mapToTags([ "not an html element" ]));


// Write a function called `filterToLol` which accepts an array of tweets and
// returns an array that consists only of those that contain `lol` (upper, lower,
// or mixed-case). It should throw an error if the input is not an array or if any
// of the elements are not strings.
//
//     filterToLol(["hello world!", "this is a tweet lol", "this is a tweet omg"]);
//     //=> ["this is a tweet lol"]
//
//     filterToLol(["lol", "LOL", "LoL", "omg", "lollerskates"]);
//     //=> ["lol", "LOL", "LoL", "lollerskates"]
//
//     filterToLol(["omg", "this is a tweet"]);
//     //=> []
//
//     filterToLol(5);
//     //=> no can do.
//
//     filterToLol(["this is a string", false, 5]);
//     //=> all entries must be strings!
//
var filterToLol = function (arr) {
	arr2=[];
	if(typeof(arr)=="object")
	{
		for(var i=0;i<arr.length;i++)
		{
			if(typeof(arr[i])=="string")
			{
				s=arr[i].toLowerCase();
				if(s.indexOf("lol")!= -1)
				{
					arr2.push(arr[i])
				}
			}
			
		
		else
		{
			return "all entries must be string"
		}
	 }
	}
	else
	{
		return "no can do"
	}
	return arr2;

};
console.log(filterToLol(["hello world!", "this is a tweet lol", "this is a tweet omg"]));
console.log(filterToLol(["lol", "LOL", "LoL", "omg", "lollerskates"]));
