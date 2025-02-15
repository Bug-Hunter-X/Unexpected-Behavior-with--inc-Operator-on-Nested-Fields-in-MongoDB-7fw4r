```javascript
// Correct usage of $inc operator for updating a nested field
db.collection('myCollection').updateOne({"_id": ObjectId("someId")}, {"$inc": {"nested.field": 1}}, {upsert: true});
//If the nested field does not exist, it will be created.  If the nested field is an array, you need to use the positional operator $ to update the correct element in the array.
```