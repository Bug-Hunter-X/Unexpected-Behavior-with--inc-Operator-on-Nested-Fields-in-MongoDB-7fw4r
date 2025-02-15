# Unexpected Behavior with $inc Operator on Nested Fields in MongoDB

This repository demonstrates an issue encountered when using the `$inc` operator in MongoDB to update nested fields.  The provided code attempts to increment a nested field, but due to an improper structure, it fails to produce the expected result.  The solution provides the correct approach to ensure the nested field is properly updated.

## Bug Description
The initial code incorrectly applies the `$inc` operator to a nested field. If the nested field doesn't pre-exist, the update operation fails silently or behaves unexpectedly.  This issue can lead to data inconsistencies and debugging challenges.

## Solution
The solution utilizes the dot notation for the nested field correctly to achieve the desired update, which also handles cases where the nested field might not exist.