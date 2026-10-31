import { createRoute, z } from '@hono/zod-openapi'

export const getVCmsApiBuilderIdIndexRoute = createRoute({
  method: 'get',
  path: '/_v/cms/api/{builderId}/',
  tags: ['Pages'],
  summary: 'Get all Content Types',
  description: 'Gets data from all Content Types.',
  operationId: 'GetAllContentTypes',
  request: {
    params: z.object({
      builderId: z
        .string()
        .openapi({
          param: {
            description: 'Builder ID specified in the settings of the CMS app.',
            in: 'path',
            name: 'builderId',
            required: true,
            schema: { example: 'faststore', type: 'string' },
            style: 'simple',
          },
          example: 'faststore',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              contentTypes: z
                .array(
                  z
                    .object({
                      configurationSchemaSets: z
                        .array(
                          z
                            .object({
                              configurations: z
                                .array(
                                  z
                                    .object({})
                                    .openapi({
                                      description:
                                        'Object with custom configurations of the Content Type tab.',
                                    }),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Custom configurations of the Content Type tab. Varies depending on the Content Type schema defined in the FastStore project.',
                                }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Name of the Content Type tab.' }),
                            })
                            .openapi({
                              description: 'Object with data about a specific Content Type tab.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Array with data of the `configurationSchemaSets` tabs specified in the FastStore project.',
                        }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Content Type identifier specified in the FastStore project.',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Content Type name specified in the FastStore project.',
                        }),
                    })
                    .openapi({
                      description: 'Object with data of a specific Content Type.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'Array with data of each Content Type.' }),
            })
            .openapi({ description: '', title: '', required: [] }),
          example: {
            contentTypes: [
              { configurationSchemaSets: [], id: 'home', name: 'Home Page' },
              {
                configurationSchemaSets: [
                  {
                    configurations: [
                      {
                        name: 'Collection',
                        schema: {
                          description: 'Definition of a Collection for the CMS',
                          oneOf: [
                            {
                              description: 'Configure a Category',
                              properties: {
                                categoryId: { title: 'Category ID', type: 'string' },
                                sort: {
                                  default: '""',
                                  enum: [
                                    '""',
                                    'discount:desc',
                                    'release:desc',
                                    'name:asc',
                                    'name:desc',
                                    'orders:desc',
                                    'price:asc',
                                    'price:desc',
                                  ],
                                  enumNames: [
                                    'Relevance',
                                    'Discount',
                                    'Release date',
                                    'Name, ascending',
                                    'Name, descending',
                                    'Sales',
                                    'Price: Low to High',
                                    'Price: High to Low',
                                  ],
                                  title: 'Default ordering',
                                  type: 'string',
                                },
                              },
                              required: ['categoryId', 'sort'],
                              title: 'Category',
                              type: 'object',
                            },
                            {
                              description: 'Configure a Brand',
                              properties: {
                                brandId: { title: 'Brand ID', type: 'string' },
                                sort: {
                                  default: '""',
                                  enum: [
                                    '""',
                                    'discount:desc',
                                    'release:desc',
                                    'name:asc',
                                    'name:desc',
                                    'orders:desc',
                                    'price:asc',
                                    'price:desc',
                                  ],
                                  enumNames: [
                                    'Relevance',
                                    'Discount',
                                    'Release date',
                                    'Name, ascending',
                                    'Name, descending',
                                    'Sales',
                                    'Price: Low to High',
                                    'Price: High to Low',
                                  ],
                                  title: 'Default ordering',
                                  type: 'string',
                                },
                              },
                              required: ['brandId', 'sort'],
                              title: 'Brand',
                              type: 'object',
                            },
                            {
                              description: 'Configure a Collection',
                              properties: {
                                clusterId: { title: 'Collection ID', type: 'string' },
                                seo: {
                                  properties: {
                                    description: {
                                      default: 'Page description',
                                      description: 'Suggested for search engines',
                                      title: 'Description (Meta description)',
                                      type: 'string',
                                    },
                                    slug: {
                                      default: '/path/to/page',
                                      description:
                                        "Final part of the page's address. No spaces allowed.",
                                      pattern: '^/([a-zA-Z0-9]|-|/|_)*',
                                      title: 'URL slug',
                                      type: 'string',
                                    },
                                    title: {
                                      default: 'Page title',
                                      description:
                                        'Appears in the browser tab and is suggested for search engines',
                                      title: 'Title',
                                      type: 'string',
                                    },
                                  },
                                  required: ['title', 'description', 'slug'],
                                  title: 'Seo',
                                  type: 'object',
                                  widget: { 'ui:ObjectFieldTemplate': 'GoogleSeoPreview' },
                                },
                                sort: {
                                  default: '""',
                                  enum: [
                                    '""',
                                    'discount:desc',
                                    'release:desc',
                                    'name:asc',
                                    'name:desc',
                                    'orders:desc',
                                    'price:asc',
                                    'price:desc',
                                  ],
                                  enumNames: [
                                    'Relevance',
                                    'Discount',
                                    'Release date',
                                    'Name, ascending',
                                    'Name, descending',
                                    'Sales',
                                    'Price: Low to High',
                                    'Price: High to Low',
                                  ],
                                  title: 'Default ordering',
                                  type: 'string',
                                },
                              },
                              required: ['clusterId', 'sort', 'seo'],
                              title: 'Collection',
                              type: 'object',
                            },
                          ],
                          title: 'Collection',
                        },
                      },
                    ],
                    name: 'Parameters',
                  },
                ],
                id: 'plp',
                name: 'PLP',
              },
              {
                configurationSchemaSets: [
                  {
                    configurations: [
                      {
                        name: 'siteMetadataWithSlug',
                        schema: {
                          description: 'Configure global site metadata',
                          properties: {
                            description: {
                              default: 'A beautifuly designed site for general VTEX stores',
                              title: 'Meta tag description',
                              type: 'string',
                            },
                            slug: {
                              default: '/landing-page-url',
                              title: 'URL Slug',
                              type: 'string',
                            },
                            title: {
                              default: 'Store Theme | VTEX FastStore',
                              description: 'Display this title when no other tile is available',
                              title: 'Default page title',
                              type: 'string',
                            },
                            titleTemplate: {
                              default: '%s | Store Theme',
                              title: 'Title template to be used in category/product pages',
                              type: 'string',
                            },
                          },
                          title: 'Site Metadata',
                          type: 'object',
                          widget: { 'ui:ObjectFieldTemplate': 'GoogleSeoPreview' },
                        },
                      },
                    ],
                    name: 'SEO',
                  },
                ],
                id: 'institutionalPage',
                name: 'Institutional page',
              },
            ],
          },
        },
      },
      headers: z.object({}),
    },
    404: { description: 'Not Found', content: {}, headers: z.object({}) },
    500: { description: 'Internal Server Error', content: {}, headers: z.object({}) },
  },
})

export const getVCmsApiBuilderIdContentTypeRoute = createRoute({
  method: 'get',
  path: '/_v/cms/api/{builderId}/{content-type}',
  tags: ['Pages'],
  summary: 'Get all CMS pages by Content Type',
  description: 'Gets data from all pages of a given Content Type.',
  operationId: 'GetPagesbyContentType',
  request: {
    params: z.object({
      builderId: z
        .string()
        .openapi({
          param: {
            description: 'Builder ID specified in the settings of the CMS app.',
            in: 'path',
            name: 'builderId',
            required: true,
            schema: { example: 'faststore', type: 'string' },
            style: 'simple',
          },
          example: 'faststore',
        }),
      'content-type': z
        .string()
        .openapi({
          param: {
            description: 'Content Type identifier defined in the FastStore project.',
            in: 'path',
            name: 'content-type',
            required: true,
            schema: { example: 'plp', type: 'string' },
            style: 'simple',
          },
          example: 'plp',
        }),
    }),
    query: z.object({
      versionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Version ID presented in the URL path of a CMS preview.',
            explode: true,
            in: 'query',
            name: 'versionId',
            schema: { example: 'e7263fc8-bc68-4052-9e25-dd5a2572d3bb', type: 'string' },
            style: 'form',
            required: false,
          },
          example: 'e7263fc8-bc68-4052-9e25-dd5a2572d3bb',
        }),
      releaseId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Release ID presented in the URL path of a CMS preview.',
            explode: true,
            in: 'query',
            name: 'releaseId',
            schema: { example: '6196c277c6dce15f9709a2a7', type: 'string' },
            style: 'form',
            required: false,
          },
          example: '6196c277c6dce15f9709a2a7',
        }),
      'filters[{field}]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter results by a property of the page (e.g., `filters[status]`) or by a nested custom field of the `parameters` object (e.g., `filters[parameters.collection.sort]`).\n*Replace {field} with the desired property.*',
            explode: true,
            in: 'query',
            name: 'filters[{field}]',
            schema: { example: 'published', type: 'string' },
            style: 'form',
            required: false,
          },
          example: 'published',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Document ID presented in the URL path of a CMS preview.',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Name of the page created via the CMS interface.',
                        }),
                      parameters: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Object with the configuration values of a `configurationSchemaSets` tab. Varies depending on the Content Type schema defined in the FastStore project.',
                        }),
                      sections: z
                        .array(
                          z
                            .object({
                              data: z
                                .object({})
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Custom field values of the Section. Varies depending on the Section schema defined in the FastStore project.',
                                }),
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Section ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Section name.' }),
                            })
                            .openapi({
                              description: 'Object with data about a specific section.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Sections that compose the page.' }),
                      status: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Current status of the page.' }),
                      type: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Name of the Content Type defined in the FastStore project.',
                        }),
                      versionId: z.string().exactOptional().openapi({ description: 'Version ID.' }),
                      versionStatus: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Version status.' }),
                    })
                    .openapi({
                      description: 'Object with data from a specific page.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description: 'Array with data from all pages of the given Content Type.',
                }),
              hasNextPage: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates if there are more items to fetch.' }),
              totalItems: z
                .int()
                .exactOptional()
                .openapi({ description: 'Total number of results.' }),
            })
            .openapi({ description: '', required: [] }),
          example: {
            data: [
              {
                id: 'd05d3db8-62b2-4f0b-9b70-d6d25ff29b6e',
                name: 'Electronics',
                parameters: { collection: { brandId: '123', sort: '""' } },
                sections: [
                  {
                    data: {
                      content:
                        '{"blocks":[{"key":"dtg7g","text":"-","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
                    },
                    id: '1632244409269',
                    name: 'RichText',
                  },
                  {
                    data: {
                      content:
                        '{"blocks":[{"key":"2qtft","text":",","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
                    },
                    id: '1632244445091',
                    name: 'RichText',
                  },
                ],
                status: 'published',
                type: 'plp',
                versionId: 'ed51d1cd-e020-4f16-b48b-ca83e720472d',
                versionStatus: 'published',
              },
              {
                id: '4ab6388d-79e6-492f-adda-3e251b85eeb6',
                name: 'Beauty',
                parameters: {
                  collection: {
                    clusterId: '1182',
                    seo: { description: 'beauty products', slug: '/beauty', title: 'Page title' },
                    sort: '""',
                  },
                },
                sections: [
                  {
                    data: {
                      alt: 'beauty',
                      description: 'beauty products',
                      desktop: {
                        srcSet:
                          'https://storecomponents.vtexassets.com/assets/vtex.file-manager-graphql/images/dda7c17e-5182-4439-b5af-94f651e2d835___1ef09be73ec9e80c719da13432666441.jpeg',
                      },
                      mobile: {
                        srcSet:
                          'https://storecomponents.vtexassets.com/assets/vtex.file-manager-graphql/images/ed8ef334-c1e5-4269-8728-34dbffeda424___1ef09be73ec9e80c719da13432666441.jpeg',
                      },
                      title: 'beauty',
                    },
                    id: '1643319987751',
                    name: 'SearchBanner',
                  },
                ],
                status: 'published',
                type: 'plp',
                versionId: '95f940d4-584e-4b3d-9872-8c713ba42583',
                versionStatus: 'published',
              },
            ],
            hasNextPage: false,
            totalItems: 2,
          },
        },
      },
      headers: z.object({}),
    },
    404: { description: 'Not Found', content: {}, headers: z.object({}) },
    500: { description: 'Internal Server Error', content: {}, headers: z.object({}) },
  },
})

export const getVCmsApiBuilderIdContentTypeDocumentIdIndexRoute = createRoute({
  method: 'get',
  path: '/_v/cms/api/{builderId}/{content-type}/{document-id}/',
  tags: ['Pages'],
  summary: 'Get CMS page',
  description: 'Gets all data from a given page.',
  operationId: 'GetCMSpage',
  request: {
    params: z.object({
      builderId: z
        .string()
        .openapi({
          param: {
            description: 'Builder ID specified in the settings of the CMS app.',
            in: 'path',
            name: 'builderId',
            required: true,
            schema: { example: 'faststore', type: 'string' },
            style: 'simple',
          },
          example: 'faststore',
        }),
      'content-type': z
        .string()
        .openapi({
          param: {
            description: 'Content Type ID defined in the FastStore project.',
            in: 'path',
            name: 'content-type',
            required: true,
            schema: { example: 'plp', type: 'string' },
            style: 'simple',
          },
          example: 'plp',
        }),
      'document-id': z
        .string()
        .openapi({
          param: {
            description: 'Document ID presented in the URL path of a CMS preview.',
            in: 'path',
            name: 'document-id',
            required: true,
            schema: { example: '5af643b5-9a6d-48f2-9b34-919dd762c908', type: 'string' },
            style: 'simple',
          },
          example: '5af643b5-9a6d-48f2-9b34-919dd762c908',
        }),
    }),
    query: z.object({
      versionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Version ID presented in the URL path of a CMS preview.',
            explode: true,
            in: 'query',
            name: 'versionId',
            schema: { example: 'e7263fc8-bc68-4052-9e25-dd5a2572d3bb', type: 'string' },
            style: 'form',
            required: false,
          },
          example: 'e7263fc8-bc68-4052-9e25-dd5a2572d3bb',
        }),
      releaseId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Release ID presented in the URL path of a CMS preview.',
            explode: true,
            in: 'query',
            name: 'releaseId',
            schema: { example: '6196c277c6dce15f9709a2a7', type: 'string' },
            style: 'form',
            required: false,
          },
          example: '6196c277c6dce15f9709a2a7',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().openapi({ description: 'Document ID.' }),
              name: z.string().openapi({ description: 'Name of the page created in the CMS app.' }),
              sections: z
                .array(
                  z
                    .object({
                      data: z
                        .object({})
                        .openapi({
                          description:
                            'Content of the Section. Varies depending on the Section schema defined in the FastStore project.',
                        }),
                      id: z.string().openapi({ description: 'Section ID.' }),
                      name: z.string().openapi({ description: 'Section name.' }),
                    })
                    .openapi({
                      description: 'Object with data about a specific section.',
                      required: ['id', 'name', 'data'],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'Sections that compose the page.' }),
              status: z.string().openapi({ description: 'Current status of the page.' }),
              type: z
                .string()
                .openapi({
                  description: 'Name of the Content Type defined in the FastStore project.',
                }),
              versionId: z.string().exactOptional().openapi({ description: 'Version ID.' }),
              versionStatus: z.string().exactOptional().openapi({ description: 'Version status' }),
            })
            .openapi({
              description: 'Object containing the data related to a specific page.',
              example: {
                id: 'ad2fd81d-a53c-4281-8d01-a4fc2f274db3',
                name: 'Home',
                sections: [
                  {
                    data: {
                      actionLink: 'link.url.com',
                      dismissible: true,
                      icon: 'Bell',
                      linkText: 'alert link',
                      text: 'alert text',
                    },
                    id: '1651804180614',
                    name: 'Alert',
                  },
                  {
                    data: {
                      imageAlt: 'hero image',
                      imageSrc:
                        'https://storeframework.vtexassets.com/assets/vtex.file-manager-graphql/images/299f7d32-bb6a-40fd-82a0-4af5573ba572___17239443c00c1e894cff10ca05018058.jpg',
                      link: '/office',
                      linkText: 'See all',
                      subtitle:
                        'At FastStore you can shop the best tech of 2022. Enjoy and get 10% off on your first purchase.',
                      title: 'New Products Available',
                    },
                    id: '1647286556072',
                    name: 'Hero',
                  },
                  {
                    data: {
                      after: '0',
                      first: 5,
                      selectedFacets: [{ key: 'productClusterIds', value: '140' }],
                      sort: 'score_desc',
                      title: 'Most Wanted!',
                    },
                    id: '1649293076336',
                    name: 'ProductShelf',
                  },
                  {
                    data: {
                      after: '0',
                      first: 3,
                      selectedFacets: [{ key: 'productClusterIds', value: '141' }],
                      sort: 'score_desc',
                      title: 'Just Arrived',
                    },
                    id: '1649293548351',
                    name: 'ProductTiles',
                  },
                  {
                    data: {
                      actionLabel: 'See all',
                      actionPath: '/office',
                      caption: 'Enjoy and get 10% off on your first purchase!!',
                      title: 'Receive our news and promotions in advance.',
                    },
                    id: '1647286735093',
                    name: 'BannerText',
                  },
                  {
                    data: {
                      after: '0',
                      first: 5,
                      selectedFacets: [{ key: 'productClusterIds', value: '142' }],
                      sort: 'score_desc',
                      title: 'Deals & Promotions',
                    },
                    id: '1649293131632',
                    name: 'ProductShelf',
                  },
                ],
                status: 'published',
                type: 'home',
                versionId: 'e3867e2c-7082-4fe6-83ed-c473242b6970',
                versionStatus: 'publishing',
              },
              required: ['id', 'name', 'type', 'status'],
              title: '',
            }),
        },
      },
      headers: z.object({}),
    },
    404: { description: 'Not Found', content: {}, headers: z.object({}) },
    500: { description: 'Internal Server Error', content: {}, headers: z.object({}) },
  },
})
