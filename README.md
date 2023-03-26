![41t: official](https://img.shields.io/badge/41t-official-%23FBBF24)

# Model

A small project for simplified creation of classes with protected properties.

Creates an abstract model class for further inheritance and implementation of methods.


## Run Locally

Clone the project

```bash
git clone https://github.com/Ishi-Inanis/model
```

Go to the project directory


## Usage

```js
const <YourNameNewModelClass> = Model({
    <property>: {
        type: function,
        [set: boolean],     // default true
        [get: boolean],     // default true
        [required: boolean] // default false
    } 
});
```


## Examples

1.
```js
const TestModel = Model({
  name: { type: String, set: true, get: true, required: true },
  num: { type: Number, set: true, get: true }
});

const test = new TestModel({ name: '', num: 0 });

console.log(test);
```

2.
```js
const TestModel = Model({
  name: { type: String, set: true, get: true, required: true },
  num: { type: Number, set: true, get: true }
});

class Test extends TestModel {
  constructor(params) {
    super(params);
  }
}

console.log(new Test({ name: '', num: 0 }));
```


## Roadmap

 * [ ] Add all primitive type support
 * [ ] Add unit tests


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Ishi-Inanis/model/blob/main/LICENSE.md)
