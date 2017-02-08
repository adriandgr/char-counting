##Problem

Write a function `countLetters` that can return to us all the unique characters that exist in a string that is passed into the function.

Furthermore, the function should also report back how many instances of each letter were found in the string.

Functions can only return one thing. That thing can (as we've seen) be a primitive data type, like a number, a boolean, `null` or a string.

However, our function `countLetters` needs to return an object that can represent the stats for the sentence it is given: all the characters found in the input string, and their respective counts.

What should the object returned back by `countLetters` look like?

Perhaps it could return an object where each unique character encountered is a property of the object and the value for that property/key should be the number of occurrences for that character.

So `countLetters("lighthouse in the house")` would return this:

```javascript
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
```

Note that we are skipping and not counting spaces.

##Approach

Start a new project (new folder) and remember to `git init` and commit frequently. You should also connect the repository with a new empty public repository on your GitHub profile.

