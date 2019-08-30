# Apollo Client Bug Report

## Intended outcome
You should be able to have optional (i.e. nullable) fields in local queries.
If the return value of a local resolver does not have a property, that property
should have a value of null in the query's result. Similarly, if the @client
field is pulled directly from the cache, and it lacks a property, that property
should be replaced with null.

## Actual outcome
The query fails.

## How to reproduce the issue
In index.js, replace 
```
client.cache.writeData({
  data: DATA_WHICH_WORKS
});
```
with 
```
client.cache.writeData({
  data: DATA_WHICH_SHOULD_WORK
});
```
The expected behavior for the value of `useQuery(GET_ENCLOSURE_INFO).data` to 
be:
```
{
  hasMoat: true,
  numberOfMonkeys: 5
  numberOfTrees: null
}
```