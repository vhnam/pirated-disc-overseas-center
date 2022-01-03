const slugify = require("slugify");

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;

    if (data.name) {
      event.params.data.slug = slugify(data.name, {
        lower: true,
      });
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;

    if (data.name) {
      event.params.data.slug = slugify(data.name, {
        lower: true,
      });
    }
  },
};
