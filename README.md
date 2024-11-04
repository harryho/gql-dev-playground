#  GraphQL Dev Playground


## How to use this repo

Launch the repo as local playground to exam any new schema"

## Getting Started

```
npm install && npm run dev
```

## Add new type to file schema.graphql

## Add the relevant resolver and backend api

## Verify the new schema on local GraphQL Server


### Test existing schema

- Sample of query which uses model mapping

```gql
query TaskQuery {
  todoList {
    title
    state
    owner_id 
    user {
      name 
      email
    }
  }
}
```


### Reference Documentation
For further reference, please consider the following sections:

* [Official TypeScript documentation]([https://docs.gradle.org](https://www.typescriptlang.org/docs/))







