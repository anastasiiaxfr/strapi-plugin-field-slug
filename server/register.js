'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'slug',
    plugin: 'slug',
    type: 'string',
  });
};
