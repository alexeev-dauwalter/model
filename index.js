function Model(objectKeys) {
  class NewModel {
    constructor(...args) {
      let index = 0;

      for (let argument in objectKeys) {
        this[`#${argument}`] = args[index++];
      }
    }
  }

  const defineObject = {};
  for (let argument in objectKeys) {
    defineObject[argument] = {
      get() {
        return this[`#${argument}`];
      },

      set(value) {
        if (typeof value !== objectKeys[argument]) throw new Error(`\`${argument}\` must be \`${objectKeys[argument]}\``);
        this[`#${argument}`] = value;
      }
    };
  }
  Object.defineProperties(NewModel.prototype, defineObject);

  return NewModel;
}