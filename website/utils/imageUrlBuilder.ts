const imageUrlBuilder = (src: string) =>
  `${process.env.NEXT_PUBLIC_STRAPI_URL}${src}`;

export default imageUrlBuilder;
