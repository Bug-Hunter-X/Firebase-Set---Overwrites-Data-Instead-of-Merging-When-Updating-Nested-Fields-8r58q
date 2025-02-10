# Firebase Set() Overwrite Issue

This repository demonstrates an uncommon error in Firebase where the `set()` method overwrites existing document data when updating nested fields, instead of merging the new data.

## Problem
The `set()` method in Firebase, when used incorrectly with nested objects, will replace the entire document instead of updating only the specified nested field.  This can lead to unintended data loss.

## Solution
The solution is to use the `update()` method instead of `set()` when modifying nested fields.  This method merges the provided data with the existing data in the document.

## How to Reproduce
1. Clone this repository.
2. Install the Firebase SDK: `npm install firebase`
3. Configure your Firebase project (replace placeholders in the code).
4. Run `node bug.js`.  Observe the data in the Firebase console after running this script.  You'll see that all existing data is replaced.
5. Run `node bugSolution.js`. Observe that the data is now correctly merged without data loss.

## Related Issues
- This bug stems from misunderstanding the difference between `set()` and `update()` in Firebase.
- Proper understanding of data merging is crucial to avoid data loss and consistency issues.
