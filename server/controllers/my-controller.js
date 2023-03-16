'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('custom-slug')
      .service('myService')
      .getWelcomeMessage();
  },
});
