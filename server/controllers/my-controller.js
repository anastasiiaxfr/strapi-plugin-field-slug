'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('slug')
      .service('myService')
      .getWelcomeMessage();
  },
});
