# Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: assigning an array of strings to a parameter expecting a single string.  The error message is clear, but understanding the underlying type system is crucial for effective TypeScript development.

## The Bug

The `greeter` function expects a single string as input.  However, the `user` variable is an array of strings.  This type mismatch leads to a compilation error.

## The Solution

The solution depends on the intended behavior.  If you want to greet each element in the array, you'll need to iterate over it.  If you only want to greet the first element, you can access it by index.