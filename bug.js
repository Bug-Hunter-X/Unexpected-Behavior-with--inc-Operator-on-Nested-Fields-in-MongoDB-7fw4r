```javascript
// Incorrect usage of $inc operator for updating a nested field
db.collection('myCollection').updateOne({"_id": ObjectId("someId")}, {"$inc": {"nested.field": 1}});
```