# Bangladesh Locality API

[![Star IT Ltd](https://staritltd.com/wp-content/uploads/2019/10/Web_Logo_of_Star_IT_158x80.png)](https://staritltd.com)

🔥 An Isomorphic Locality API to retrive Post Office, Sub District, District & Division of Bangladesh. Works on node, react-native & browsers. 🔥

## Installation & Usage

### For node/react-native

Install with your favorite package manager.

Using Yarn:

```
yarn add bangladesh-locality-api
```

Using NPM:

```
npm i bangladesh-locality-api
```

Now import with ESM or CommonJS Syntax:

#### Using Named Exports

```typescript
import { division } from 'bangladesh-locality-api';
```

#### Using Default Exports

```typescript
import BDApi from 'bangladesh-locality-api';
```

### For Browser

Add a script tag with the umd bundle from unpkg or release page.

```html
<script src="https://unpkg.com/bangladesh-locality-api"></script>
```

Now you will have `BDApi` global in the window object.

## Example

```typescript
import BDApi from 'bangladesh-locality-api';

const main = async () => {
  try {
    const districts = await BDApi.districts('Dhaka');
    console.log(districts);
  } catch (error) {
    console.error(error);
  }
};

main();
```

## API

```typescript
// To be decided.
```

## License

This package is licensed under the MIT License.

## Contribution

Any kind of contribution is welcome. Thanks!

## Disclaimer

All APIS OF THIS PACKAGE ARE CONSIDERED UNSTABLE ACROSS VERSION UNTILL 1.0.
