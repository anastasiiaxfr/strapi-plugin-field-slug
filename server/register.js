'use strict';

module.exports = ({ strapi }) => {
  // registeration phase
  strapi.customFields.register({
    name: 'slug',
    plugin: 'custom-slug',
    type: 'string',
  });
};
