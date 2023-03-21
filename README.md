# Strapi plugin: custom-slug
---
This plugin adds a Slug field to Strapi.
Slug has autocomplete default generated value in format: post-year-month-day-hours-minutes-seconds, same for all locales.

## Instalation
Install the plugin in your Strapi project.
- npm i custom-slug
<!-- - in root folder cd config folder and touch plugins.js
  paste this: 

```
    module.exports = {
    // ...
    'custom-slug': {
      enabled: true
    },
    //...
    }
``` -->
- npm run build > npm run develop
- go to admin > Content Type Builder > choose content type > click to button Add another field (to this collection type) > select tab CUSTOM > click on slug plugin tile > add name to field label > click on button finish > click on button save.
- go to tab Advanced settings and check it off Enable localization for this field to FALSE

[content-type-builder](http://localhost:1337/admin/plugins/content-type-builder/content-types/)


## Description
This is Slug Custom Field plugin which generate automatically rewritable values on entity creation, like: post-year-month-day-hours-minutes-seconds and saves the same value for all locales in slug.
      
- autocomplete uniq default value 
- same slug value to all locales 
- rewritable data 
- not deletable data (it's bug for changing in feature release) 

## Screenshots

![demo1](./assets/demo1.jpg)
![demo2](./assets/demo2.jpg)
![demo3](./assets/demo3.jpg)

## Demo
[watch](https://www.veed.io/embed/19187aa4-f152-4325-a50a-3fd62cec9eb4)

