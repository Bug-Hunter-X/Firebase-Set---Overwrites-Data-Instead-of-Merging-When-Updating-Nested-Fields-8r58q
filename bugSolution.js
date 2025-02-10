The solution involves replacing `set()` with `update()` to correctly merge data:

```javascript
// Correct usage of update()
db.collection('users').doc('userId').update({
  'address.street': 'New Street',
  'address.city': 'New City'
});

// This correctly merges the address fields without affecting other fields in the document.
```

Using `update()` with dot notation ensures that only the specified nested fields are modified, preserving existing data in the document.