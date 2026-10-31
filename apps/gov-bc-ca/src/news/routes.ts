import { createRoute, z } from '@hono/zod-openapi'

const DataModelSchema = z
  .object({
    key: z.string().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DataModel')

const ArticleSchema = DataModelSchema.and(
  z
    .object({ editionName: z.string().exactOptional(), htmlBody: z.string().exactOptional() })
    .openapi({ required: [] }),
).openapi('Article')

const AssetSchema = z
  .object({
    key: z.string().exactOptional(),
    label: z.string().exactOptional(),
    length: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('Asset')

const DataIndexSchema = DataModelSchema.and(
  z
    .object({
      featurePostKey: z.string().exactOptional(),
      kind: z.string().exactOptional(),
      name: z.string().exactOptional(),
      topPostKey: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('DataIndex')

const CategorySchema = DataIndexSchema.and(
  z
    .object({
      audioUri: z.string().exactOptional(),
      featurePostKey: z.string().exactOptional(),
      flickrUri: z.string().exactOptional(),
      isActive: z.boolean().exactOptional(),
      name: z.string().exactOptional(),
      topPostKey: z.string().exactOptional(),
      twitterFeedUsername: z.string().exactOptional(),
      youtubeUri: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Category')

const ContactSchema = z
  .object({
    emailAddress: z.string().exactOptional(),
    fullName: z.string().exactOptional(),
    mobileNumber: z.string().exactOptional(),
    phoneNumber: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Contact')

const DocumentContactSchema = z
  .object({ details: z.string().exactOptional(), title: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DocumentContact')

const DocumentSchema = z
  .object({
    byline: z.string().exactOptional(),
    contacts: z.array(DocumentContactSchema).exactOptional(),
    detailsHtml: z.string().exactOptional(),
    headline: z.string().exactOptional(),
    languageId: z.int32().exactOptional(),
    pageTitle: z.string().exactOptional(),
    subheadline: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Document')

const EditionSchema = DataModelSchema.and(
  z
    .object({ htmlBody: z.string().exactOptional(), name: z.string().exactOptional() })
    .openapi({ required: [] }),
).openapi('Edition')

const EditionImageSchema = DataModelSchema.and(
  z
    .object({
      fileName: z.string().exactOptional(),
      imageBytes: z.string().exactOptional(),
      imageType: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('EditionImage')

const FacebookPostSchema = DataModelSchema.and(
  z
    .object({
      content: z.string().exactOptional(),
      facebookObjectId: z.int32().exactOptional(),
      pictureUri: z.string().exactOptional(),
      postComments: z.int32().exactOptional(),
      postLikes: z.int32().exactOptional(),
      postShares: z.int32().exactOptional(),
      poster: z.string().exactOptional(),
      posterLikes: z.int32().exactOptional(),
      posterLogo: z.string().exactOptional(),
      posterSubtitle: z.string().exactOptional(),
      type: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('FacebookPost')

const HomeSchema = DataIndexSchema.and(
  z
    .object({
      featurePostKey: z.string().exactOptional(),
      liveWebcastFlashMediaManifestUrl: z.string().exactOptional(),
      liveWebcastM3uPlaylist: z.string().exactOptional(),
      name: z.string().exactOptional(),
      topPostKey: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Home')

const KeyValuePair_2Schema = z
  .object({
    key: z.string().exactOptional().openapi({ readOnly: true }),
    value: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('KeyValuePair_2')

const MinisterSchema = DataModelSchema.and(
  z
    .object({
      details: z.string().exactOptional(),
      emailHtml: z.string().exactOptional(),
      headline: z.string().exactOptional(),
      photo: z.string().exactOptional(),
      post: z.string().exactOptional(),
      summary: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Minister')

const ResourceLinkSchema = DataModelSchema.and(
  z.object({ uri: z.string().exactOptional() }).openapi({ required: [] }),
).openapi('ResourceLink')

const MinistrySchema = CategorySchema.and(
  z
    .object({
      audioUri: z.string().exactOptional(),
      childMinistryKey: z.string().exactOptional(),
      contactUser: ContactSchema.exactOptional(),
      displayAdditionalName: z.string().exactOptional(),
      featurePostKey: z.string().exactOptional(),
      flickrUri: z.string().exactOptional(),
      isActive: z.boolean().exactOptional(),
      ministerName: z.string().exactOptional(),
      ministryUrl: z.string().exactOptional(),
      name: z.string().exactOptional(),
      newsletterLinks: z.array(ResourceLinkSchema).exactOptional(),
      parentMinistryKey: z.string().exactOptional(),
      secondContactUser: ContactSchema.exactOptional(),
      serviceLinks: z.array(ResourceLinkSchema).exactOptional(),
      topPostKey: z.string().exactOptional(),
      topicLinks: z.array(ResourceLinkSchema).exactOptional(),
      twitterFeedUsername: z.string().exactOptional(),
      weekendContactNumber: z.string().exactOptional(),
      youtubeUri: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Ministry')

const NewsletterSchema = DataModelSchema.and(
  z
    .object({
      description: z.string().exactOptional(),
      editions: z.array(KeyValuePair_2Schema).exactOptional(),
      ministryName: z.string().exactOptional(),
      name: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Newsletter')

const PostSchema = DataModelSchema.and(
  z
    .object({
      assetUrl: z.string().exactOptional(),
      atomId: z.string().exactOptional(),
      azureAssets: z.array(AssetSchema).exactOptional(),
      documents: z.array(DocumentSchema).exactOptional(),
      facebookPictureUri: z.string().exactOptional(),
      hasMediaAssets: z.boolean().exactOptional(),
      isNewsOnDemand: z.boolean().exactOptional(),
      keywords: z.string().exactOptional(),
      kind: z.string().exactOptional(),
      leadMinistryKey: z.string().exactOptional(),
      location: z.string().exactOptional(),
      ministryKeys: z.array(z.string()).exactOptional(),
      publishDate: z.iso.datetime({ offset: true }).exactOptional(),
      redirectUri: z.string().exactOptional(),
      reference: z.string().exactOptional(),
      sectorKeys: z.array(z.string()).exactOptional(),
      serviceKeys: z.array(z.string()).exactOptional(),
      socialMediaHeadline: z.string().exactOptional(),
      socialMediaSummary: z.string().exactOptional(),
      summary: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Post')

const SectorSchema = CategorySchema.and(
  z
    .object({
      audioUri: z.string().exactOptional(),
      featurePostKey: z.string().exactOptional(),
      flickrUri: z.string().exactOptional(),
      isActive: z.boolean().exactOptional(),
      name: z.string().exactOptional(),
      topPostKey: z.string().exactOptional(),
      twitterFeedUsername: z.string().exactOptional(),
      youtubeUri: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Sector')

const ServiceSchema = CategorySchema.and(
  z
    .object({
      audioUri: z.string().exactOptional(),
      featurePostKey: z.string().exactOptional(),
      flickrUri: z.string().exactOptional(),
      isActive: z.boolean().exactOptional(),
      name: z.string().exactOptional(),
      topPostKey: z.string().exactOptional(),
      twitterFeedUsername: z.string().exactOptional(),
      youtubeUri: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Service')

const SlideSchema = DataModelSchema.and(
  z
    .object({
      actionLabel: z.string().exactOptional(),
      actionUri: z.string().exactOptional(),
      facebookPostUri: z.string().exactOptional(),
      headline: z.string().exactOptional(),
      image: z.string().exactOptional(),
      imageType: z.string().exactOptional().openapi({ readOnly: true }),
      justify: z.string().exactOptional(),
      slideId: z.uuid().exactOptional(),
      summary: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Slide')

const TagSchema = CategorySchema.and(
  z
    .object({
      audioUri: z.string().exactOptional(),
      featurePostKey: z.string().exactOptional(),
      flickrUri: z.string().exactOptional(),
      isActive: z.boolean().exactOptional(),
      name: z.string().exactOptional(),
      topPostKey: z.string().exactOptional(),
      twitterFeedUsername: z.string().exactOptional(),
      youtubeUri: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Tag')

const ThemeSchema = CategorySchema.and(
  z
    .object({
      audioUri: z.string().exactOptional(),
      featurePostKey: z.string().exactOptional(),
      flickrUri: z.string().exactOptional(),
      isActive: z.boolean().exactOptional(),
      name: z.string().exactOptional(),
      topPostKey: z.string().exactOptional(),
      twitterFeedUsername: z.string().exactOptional(),
      youtubeUri: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Theme')

export const getApiFacebookPostsByUriRoute = createRoute({
  method: 'get',
  path: '/api/FacebookPosts/ByUri',
  tags: ['FacebookPosts'],
  summary: 'Get a Facebook post based on a Uri',
  operationId: 'FacebookPosts_GetByUri',
  request: {
    query: z.object({
      uri: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'uri',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: FacebookPostSchema },
        'text/json': { schema: FacebookPostSchema },
        'text/plain': { schema: FacebookPostSchema },
      },
    },
  },
})

export const getApiHomeRoute = createRoute({
  method: 'get',
  path: '/api/Home',
  tags: ['Home'],
  summary: 'Returns the top level content for the home page',
  operationId: 'Home_Get',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: HomeSchema },
        'text/json': { schema: HomeSchema },
        'text/plain': { schema: HomeSchema },
      },
    },
  },
})

export const getApiMinistriesRoute = createRoute({
  method: 'get',
  path: '/api/Ministries',
  tags: ['Ministries'],
  summary: 'Get all ministries',
  operationId: 'Ministries_GetAll',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(MinistrySchema) },
        'text/json': { schema: z.array(MinistrySchema) },
        'text/plain': { schema: z.array(MinistrySchema) },
      },
    },
  },
})

export const getApiMinistriesKeyRoute = createRoute({
  method: 'get',
  path: '/api/Ministries/{key}',
  tags: ['Ministries'],
  summary: 'Get the Ministry associated with the ministry key',
  operationId: 'Ministries_GetOne',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MinistrySchema },
        'text/json': { schema: MinistrySchema },
        'text/plain': { schema: MinistrySchema },
      },
    },
  },
})

export const getApiMinistriesKeyMinisterRoute = createRoute({
  method: 'get',
  path: '/api/Ministries/{key}/Minister',
  tags: ['Ministries'],
  summary: 'Get the Minister associated with the ministry key',
  operationId: 'Ministries_GetMinister',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MinisterSchema },
        'text/json': { schema: MinisterSchema },
        'text/plain': { schema: MinisterSchema },
      },
    },
  },
})

export const getApiNewslettersRoute = createRoute({
  method: 'get',
  path: '/api/Newsletters',
  tags: ['Newsletters'],
  summary: 'Get all newsletters',
  operationId: 'Newsletters_GetAll',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(NewsletterSchema) },
        'text/json': { schema: z.array(NewsletterSchema) },
        'text/plain': { schema: z.array(NewsletterSchema) },
      },
    },
  },
})

export const getApiNewslettersImagesGuidRoute = createRoute({
  method: 'get',
  path: '/api/Newsletters/Images/{guid}',
  tags: ['Newsletters'],
  summary:
    'Get the image object reference by of a Newsletter Edition associated with the image guid',
  operationId: 'Newsletters_GetImage',
  request: {
    params: z.object({
      guid: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'guid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: EditionImageSchema },
        'text/json': { schema: EditionImageSchema },
        'text/plain': { schema: EditionImageSchema },
      },
    },
  },
})

export const getApiNewslettersNewsletterKeyRoute = createRoute({
  method: 'get',
  path: '/api/Newsletters/{newsletterKey}',
  tags: ['Newsletters'],
  summary: 'Get a specific newsletter',
  operationId: 'Newsletters_GetOne',
  request: {
    params: z.object({
      newsletterKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'newsletterKey', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: NewsletterSchema },
        'text/json': { schema: NewsletterSchema },
        'text/plain': { schema: NewsletterSchema },
      },
    },
  },
})

export const getApiNewslettersNewsletterKeyEditionsEditionKeyRoute = createRoute({
  method: 'get',
  path: '/api/Newsletters/{newsletterKey}/Editions/{editionKey}',
  tags: ['Newsletters'],
  summary: 'Returns a specific edition of a newsletter',
  operationId: 'Newsletters_GetEdition',
  request: {
    params: z.object({
      newsletterKey: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'newsletterKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editionKey: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'editionKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: EditionSchema },
        'text/json': { schema: EditionSchema },
        'text/plain': { schema: EditionSchema },
      },
    },
  },
})

export const getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyRoute = createRoute({
  method: 'get',
  path: '/api/Newsletters/{newsletterKey}/Editions/{editionKey}/Articles/{articleKey}',
  tags: ['Newsletters'],
  summary: 'Get an article belonging to a Newsletter edition',
  operationId: 'Newsletters_GetArticle',
  request: {
    params: z.object({
      newsletterKey: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'newsletterKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editionKey: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'editionKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      articleKey: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'articleKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ArticleSchema },
        'text/json': { schema: ArticleSchema },
        'text/plain': { schema: ArticleSchema },
      },
    },
  },
})

export const getApiPostsRoute = createRoute({
  method: 'get',
  path: '/api/Posts',
  tags: ['Posts'],
  summary: 'Get the posts associated with the keys in the list passed in.',
  operationId: 'Posts_Get',
  request: {
    query: z.object({
      postKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'postKeys',
            required: false,
            schema: { default: '', items: { type: 'string' }, type: 'array' },
          },
          default: '',
        }),
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(PostSchema) },
        'text/json': { schema: z.array(PostSchema) },
        'text/plain': { schema: z.array(PostSchema) },
      },
    },
  },
})

export const getApiPostsKeysIndexKindIndexKeyRoute = createRoute({
  method: 'get',
  path: '/api/Posts/Keys/{indexKind}/{indexKey}',
  tags: ['Posts'],
  summary: 'Get all keys for the specified index (newsroom or category)',
  operationId: 'Posts_GetAllKeys',
  request: {
    params: z.object({
      indexKind: z
        .string()
        .openapi({
          param: {
            description: 'home or one of categories',
            in: 'path',
            name: 'indexKind',
            required: true,
            schema: { type: 'string' },
          },
        }),
      indexKey: z
        .string()
        .openapi({
          param: {
            description:
              'default or one key of the categories (ministries, sectors, services, tags, themes)',
            in: 'path',
            name: 'indexKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      postKind: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'One of: releases, stories, factsheets, updates or default (releases+stories+factsheets)',
            in: 'query',
            name: 'postKind',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'number of posts to return',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: '', format: 'int32', type: 'integer' },
          },
          default: '',
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'number of posts to skip',
            in: 'query',
            name: 'skip',
            required: false,
            schema: { default: '', format: 'int32', type: 'integer' },
          },
          default: '',
        }),
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(KeyValuePair_2Schema) },
        'text/json': { schema: z.array(KeyValuePair_2Schema) },
        'text/plain': { schema: z.array(KeyValuePair_2Schema) },
      },
    },
  },
})

export const getApiPostsKeysReferenceRoute = createRoute({
  method: 'get',
  path: '/api/Posts/Keys/{reference}',
  tags: ['Posts'],
  summary: 'Get the post key associated with the reference.',
  operationId: 'Posts_GetKeyFromReference',
  request: {
    params: z.object({
      reference: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'reference',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: KeyValuePair_2Schema },
        'text/json': { schema: KeyValuePair_2Schema },
        'text/plain': { schema: KeyValuePair_2Schema },
      },
    },
  },
})

export const getApiPostsLatestIndexKindIndexKeyRoute = createRoute({
  method: 'get',
  path: '/api/Posts/Latest/{indexKind}/{indexKey}',
  tags: ['Posts'],
  summary: 'Get the latest posts of postKind for the specified index (default or category)',
  operationId: 'Posts_GetLatest',
  request: {
    params: z.object({
      indexKind: z
        .string()
        .openapi({
          param: {
            description: 'home or one of categories',
            in: 'path',
            name: 'indexKind',
            required: true,
            schema: { type: 'string' },
          },
        }),
      indexKey: z
        .string()
        .openapi({
          param: {
            description:
              'default or one key of the categories (ministries, sectors, services, tags, themes)',
            in: 'path',
            name: 'indexKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      postKind: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'One of: releases, stories, factsheets, updates or default (releases+stories except top/feature)',
            in: 'query',
            name: 'postKind',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'number of posts to return',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: '', format: 'int32', type: 'integer' },
          },
          default: '',
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'number of posts to skip',
            in: 'query',
            name: 'skip',
            required: false,
            schema: { default: '', format: 'int32', type: 'integer' },
          },
          default: '',
        }),
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(PostSchema) },
        'text/json': { schema: z.array(PostSchema) },
        'text/plain': { schema: z.array(PostSchema) },
      },
    },
  },
})

export const getApiPostsLatestMediaUriMediaTypeRoute = createRoute({
  method: 'get',
  path: '/api/Posts/LatestMediaUri/{mediaType}',
  tags: ['Posts'],
  summary: 'Gets the latest Social Media post for the social media type passed in.',
  operationId: 'Posts_GetLatestMediaUri',
  request: {
    params: z.object({
      mediaType: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'mediaType',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/plain': { schema: z.string() },
      },
    },
  },
})

export const getApiPostsKeyRoute = createRoute({
  method: 'get',
  path: '/api/Posts/{key}',
  tags: ['Posts'],
  summary: 'Get the post associated with the key',
  operationId: 'Posts_GetOne',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PostSchema },
        'text/json': { schema: PostSchema },
        'text/plain': { schema: PostSchema },
      },
    },
  },
})

export const getApiResourceLinksRoute = createRoute({
  method: 'get',
  path: '/api/ResourceLinks',
  tags: ['ResourceLinks'],
  summary: 'Get all resource links',
  operationId: 'ResourceLinks_GetAll',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(ResourceLinkSchema) },
        'text/json': { schema: z.array(ResourceLinkSchema) },
        'text/plain': { schema: z.array(ResourceLinkSchema) },
      },
    },
  },
})

export const getApiSectorsRoute = createRoute({
  method: 'get',
  path: '/api/Sectors',
  tags: ['Sectors'],
  summary: 'Get all Sectors',
  operationId: 'Sectors_GetAll',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SectorSchema) },
        'text/json': { schema: z.array(SectorSchema) },
        'text/plain': { schema: z.array(SectorSchema) },
      },
    },
  },
})

export const getApiSectorsKeyRoute = createRoute({
  method: 'get',
  path: '/api/Sectors/{key}',
  tags: ['Sectors'],
  summary: 'Get the sector associated with the key',
  operationId: 'Sectors_GetOne',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SectorSchema },
        'text/json': { schema: SectorSchema },
        'text/plain': { schema: SectorSchema },
      },
    },
  },
})

export const getApiServicesRoute = createRoute({
  method: 'get',
  path: '/api/Services',
  tags: ['Services'],
  summary: 'Get all Services',
  operationId: 'Services_GetAll',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(ServiceSchema) },
        'text/json': { schema: z.array(ServiceSchema) },
        'text/plain': { schema: z.array(ServiceSchema) },
      },
    },
  },
})

export const getApiServicesKeyRoute = createRoute({
  method: 'get',
  path: '/api/Services/{key}',
  tags: ['Services'],
  summary: 'Get the service associated with the passed key',
  operationId: 'Services_GetOne',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ServiceSchema },
        'text/json': { schema: ServiceSchema },
        'text/plain': { schema: ServiceSchema },
      },
    },
  },
})

export const getApiSlidesRoute = createRoute({
  method: 'get',
  path: '/api/Slides',
  tags: ['Slides'],
  summary: 'Get all Slides',
  operationId: 'Slides_GetAll',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SlideSchema) },
        'text/json': { schema: z.array(SlideSchema) },
        'text/plain': { schema: z.array(SlideSchema) },
      },
    },
  },
})

export const getApiSlidesIdRoute = createRoute({
  method: 'get',
  path: '/api/Slides/{id}',
  tags: ['Slides'],
  summary: 'Get the slide associated to the id',
  operationId: 'Slides_GetOne',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SlideSchema },
        'text/json': { schema: SlideSchema },
        'text/plain': { schema: SlideSchema },
      },
    },
  },
})

export const getApiTagsRoute = createRoute({
  method: 'get',
  path: '/api/Tags',
  tags: ['Tags'],
  summary: 'Get all Tags',
  operationId: 'Tags_GetAll',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(TagSchema) },
        'text/json': { schema: z.array(TagSchema) },
        'text/plain': { schema: z.array(TagSchema) },
      },
    },
  },
})

export const getApiTagsKeyRoute = createRoute({
  method: 'get',
  path: '/api/Tags/{key}',
  tags: ['Tags'],
  summary: 'Get the Tag associated with the key',
  operationId: 'Tags_GetOne',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: TagSchema },
        'text/json': { schema: TagSchema },
        'text/plain': { schema: TagSchema },
      },
    },
  },
})

export const getApiThemesRoute = createRoute({
  method: 'get',
  path: '/api/Themes',
  tags: ['Themes'],
  summary: 'Get all Themes',
  operationId: 'Themes_GetAll',
  request: {
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(ThemeSchema) },
        'text/json': { schema: z.array(ThemeSchema) },
        'text/plain': { schema: z.array(ThemeSchema) },
      },
    },
  },
})

export const getApiThemesKeyRoute = createRoute({
  method: 'get',
  path: '/api/Themes/{key}',
  tags: ['Themes'],
  summary: 'Get the Theme associated with the key',
  operationId: 'Themes_GetOne',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .default('1.0')
        .openapi({
          param: {
            description: 'The requested API version',
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { default: '1.0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ThemeSchema },
        'text/json': { schema: ThemeSchema },
        'text/plain': { schema: ThemeSchema },
      },
    },
  },
})
