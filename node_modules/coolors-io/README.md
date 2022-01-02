# coolors-io

## A simple JS script to parse or generate Coolors.co URLs to/from an array of hex values

_Note: this project is in no way affiliated with Coolors.co and makes no guarantees about the stability of the coolors API. Based on the API as observed on 06/20/2020_

## Purpose:

Coolors.co has a great interface for rapidly creating color palettes and I wanted a way to more easily integrate it into my dev work

### About Coolors URLs

Coolors URLs follow the format:

```
https://coolors.co/HEX-HEX-HEX-HEX-HEX-HEX
```

For example:

```
https://coolors.co/c3f73a-95e06c-68b684-094d92-1c1018
```

Notes:

- Coolors URLs do not include '#'
- Coolors URLs can have 1 - 10 hex values
  - Less than one will point to the landing page
  - More than ten will return a 404 error
- The order of hex values is significant in Coolors URLs and is preserved in parse and gen

### Getting Started

```
npm install coolors-io
```

### coolors.parse

```
  import { parse } from 'coolors-io'

  const exampleCoolor = 'https://coolors.co/243cf2-9e8f19-a81470-4553bf-4a5396'

  parse(exampleCoolor)
    // returns [ '#898952', '#b2945b', '#d0e562', '#b6d369', '#93c48b' ]
    .then(console.log)
```

### coolors.gen

```
  import { gen } from 'coolors-io'

  const exampleArray = ['feffef', '#ffeffe']

  gen(exampleArray)
    // returns https://coolors.co/feffef-ffeffe
    .then(console.log)
```
