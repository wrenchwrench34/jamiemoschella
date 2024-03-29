# 5. Control Flow

So far, we have learned several key components to how programs are structured in Serene. However, it would be hard to implement anything practical with only what we have shown so far, as we haven't shown much of the logic necessary for describing any form of procedure. Here we discuss the control flow constructs that enable us to write practical programs.

## Conditional Statements

A conditional statement (or an if/else statement) allows a program to check a condition and do something different based on the value of that condition.

```serene
function absoluteValue(x: Int) -> Int {
	if (x < 0) {
		return -x
	} else {
		return x
	}
}
```

## Loops

Serene has two looping constructs: "for loops" and "while loops".

```serene
function findMax(u: Vector{Int}) -> Int {
	var max = Int.bottom	//lowest possible Int value
	for (x in u) {	//iterates through the elements of u
		if (x > max) {
			set max = x
		}
	}
	return max
}

function findMax2(u: Vector{Int}) -> Int {
	var max = Int.bottom
	for (i = 0, u.length()) {	//iterates from 0 up to (but not including) the length of u
		if (u[i] > max) {
			set max = u[i]
		}
	}
	return max
}

function findMax3(u: Vector{Int}) -> Int {
	var max = Int.bottom
	var i: Int = 0
	while (i < u.length()) {
		if (u[i] > max) {	
			set max = u[i]
		}
	}
	return max
}
```

## Match

A Match statement takes a single object as its parameter and it allows you to write multiple paths of execution based on the value of the object.

```serene
function makeChoice() -> Bool {
	while (True) {
        var input = readLine()
        match (input) {
            "" -> continue
            "y", "Y" -> return True
            "n", "N" -> return False
            else -> {
            	print "Input is invalid, try again"
            	continue
            }
        }
	}
}
```
