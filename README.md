# UC Planner JS SDK

Universal npm module to interact with [ACM-Planner/main-api](https://github.com/ACM-Planner/main-api).

## Install

Install this module with:

```sh
npm install --save uc-planner-sdk
```

This module depends on [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

### Browsers and React-Native

Modern browsers support this feature and `fetch` is a global function you can use.

You can use [`whatwg-fetch`](https://github.com/github/fetch) to support older platforms (not required in React-Native):

```sh
npm install --save whatwg-fetch
```

And somewhere at the begining of your code:

```js
import 'whatwg-fetch'
```

Then:

```js
import plannerSDK from 'uc-planner-sdk'

const client = plannerSDK({ fetch })

client.courses({ name: 'MAT', year: 2016, period: 2 }).then(result => {
  const courses = result.data
  const page = result.page
  // ...
}).catch(err => {
  // ...
})
```

### Node.js

On a Node.js enviorement you can import [`node-fetch`](https://github.com/bitinn/node-fetch):

```sh
npm install --save node-fetch
```

```js
const fetch = require('node-fetch')
const plannerSDK = require('uc-planner-sdk')

const client = plannerSDK({ fetch })

client.courseSections('MAT1610', { year: 2016, period: 1 }).then(result => {
  const sections = result.data
  const page = result.page
  // ...
})

```

## Usage

```js
import plannerSDK from 'uc-planner-sdk'

const client = plannerSDK({ fetch })

client.courseSection('MAT1610', 1, { year: 2016, period: 1 }).then(result => {
  const section = result.data
})
```

> See more examples in [test/index.test.js](./test/index.test.js).

## Development

Clone this repository:

```sh
git clone https://github.com/ACM-Planner/planner-js-sdk.git
cd planner-js-sdk
```

Install dependencies:

```sh
npm install
```

## Testing

Run test located at `test` directory with:

```sh
npm test
```
