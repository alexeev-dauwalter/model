function Model(args) {
  const primitives = ['string', 'number', 'boolean'],
    typeParams = {
      type: 'function',
      set: 'boolean',
      get: 'boolean',
      required: 'boolean'
    };


  for (let key in args) {
    for (let param in args[key]) {
      if (
        args[key][param] !== undefined &&
        typeof args[key][param] !== typeParams[param]
      ) throw new Error(`\`${param}\` must be \`${typeParams[param]}\` or \`undefined\` in \`${key}\``);
    }
  }

  class NewModel {
    constructor(props) {
      for (let key in args) {
        if (
          primitives.indexOf(args[key].type.name.toLowerCase()) === -1 &&
          args[key].required === false
        ) throw new Error(`\`${key}\` cannot be required because \`${args[key].type.name}\` is non-primitive`);

        if (
          args[key].required === true &&
          props[key] === undefined
        ) throw new Error(`\`${key}\` is required`);

        this[key] = props[key];
      }
    }
  };

  const defineObject = {};
  for (let key in args) {
    defineObject[key] = {};

    if (args[key].set) defineObject[key].set = function (value) {
      if (
        typeof value !== args[key].type.name.toLowerCase() &&
        !(value instanceof args[key].type)
      ) throw new Error(`\`${key}\` must be \`${args[key].type.name.toLowerCase()}\``);

      this[`#${key}`] = value;
    };

    if (args[key].get) defineObject[key].get = function () {
      return this[`#${key}`];
    };
  }
  Object.defineProperties(NewModel.prototype, defineObject);

  return NewModel;
}