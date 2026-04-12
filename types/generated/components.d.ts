import type { Schema, Struct } from '@strapi/strapi';

export interface GalleryGalleryContent extends Struct.ComponentSchema {
  collectionName: 'components_gallery_gallery_contents';
  info: {
    displayName: 'gallery-content';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'gallery.gallery-content': GalleryGalleryContent;
    }
  }
}
