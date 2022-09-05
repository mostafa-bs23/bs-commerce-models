# bs-commerce-models

[![npm (scoped)](https://img.shields.io/npm/v/bs-commerce-models.svg)](https://www.npmjs.com/package/bs-commerce-models)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/bs-commerce-models.svg)](https://www.npmjs.com/package/bs-commerce-models)

Removes all spaces from a string.

## Install

```
$ npm install bs-commerce-models
```

## Usage

```ts
// => Import types from bs-commerce-models in your desired ts file
import {CreateCustomerRequest} from 'bs-commerce-models'

// => Then use it for typescript verification
const customerDemo = <CreateCustomerRequest>{
    phone: "string",
    email: "string",
    otp: 1,
    name: "string",
    password: "string"
}

console.log(customerDemo)

```