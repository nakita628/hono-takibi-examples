import { createRoute, z } from '@hono/zod-openapi'

const NewQuoteSchema = z
  .object({
    author: z.string().exactOptional().openapi({ description: 'Author name of quote.' }),
    quote: z.string().openapi({ description: 'The Quote.' }),
    tags: z.array(z.string()).exactOptional().openapi({ description: 'Array of tags/categories.' }),
  })
  .openapi({ required: ['quote'] })
  .openapi('NewQuote')

type QuoteType = z.infer<typeof NewQuoteSchema> & { id: string; image?: string; length?: number }

const QuoteSchema: z.ZodType<QuoteType> = z
  .lazy(() =>
    NewQuoteSchema.and(
      z
        .object({
          id: z
            .string()
            .openapi({
              description: 'Unique identifier representing a specific quote in theysaidso.com.',
            }),
          image: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Image URL that can be used for background to display this quote.',
            }),
          length: z.int32().exactOptional().openapi({ description: 'Length of the quote string.' }),
        })
        .openapi({ required: ['id'] }),
    ),
  )
  .openapi('Quote')

const QODSchema = QuoteSchema.and(
  z
    .object({ date: z.string().openapi({ description: 'Date this quote of the day belongs to' }) })
    .openapi({ required: ['date'] }),
).openapi('QOD')

const QuoteResponseSchema = z
  .object({
    contents: z
      .object({
        quotes: z.array(QuoteSchema).exactOptional().openapi({ description: 'List of quotes' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    success: z
      .string()
      .exactOptional()
      .openapi({ description: 'Metadata about this successful call' }),
  })
  .openapi({ required: [] })
  .openapi('QuoteResponse')

const XTheySaidSoApiSecretSecurityScheme = {
  in: 'header',
  name: 'X-TheySaidSo-Api-Secret',
  type: 'apiKey',
}

export const getQodRoute = createRoute({
  method: 'get',
  path: '/qod',
  tags: ['Quote of the day'],
  description:
    'Gets `Quote of the Day`. Optional `category` param determines the category of returned quote of the day\n',
  request: {
    query: z.object({
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'QOD Category',
            in: 'query',
            name: 'category',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      language: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description: 'Language of the QOD. The language must be supported in our QOD system.',
            in: 'query',
            name: 'language',
            required: false,
            schema: { default: 'en', format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200  response',
      content: {
        'application/json': {
          schema: QuoteResponseSchema,
          examples: {
            response: {
              value:
                '{\n    "success": {\n        "total": 1\n    },\n    "contents": {\n        "quotes": [\n            {\n                "quote": "Do not worry if you have built your castles in the air. They are where they should be. Now put the foundations under them.",\n                "length": "122",\n                "author": "Henry David Thoreau",\n                "tags": [\n                    "dreams",\n                    "inspire",\n                    "worry"\n                ],\n                "category": "inspire",\n                "date": "2016-11-21",\n                "title": "Inspiring Quote of the day",\n                "background": "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg",\n                "id": "mYpH8syTM8rf8KFORoAJmQeF"\n            }\n        ]\n    }\n}',
            },
          },
        },
      },
    },
    400: { description: '400  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQodCategoriesRoute = createRoute({
  method: 'get',
  path: '/qod/categories',
  tags: ['Quote of the day'],
  description: 'Gets a list of `Quote of the Day` Categories.\n',
  request: {
    query: z.object({
      language: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Language of the QOD category. The language must be supported in our QOD system.',
            in: 'query',
            name: 'language',
            required: false,
            schema: { default: 'en', format: 'string', type: 'string' },
          },
        }),
      detailed: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return detailed information of the categories. Note the data format changes between the two values of this switch.',
            in: 'query',
            name: 'detailed',
            required: false,
            schema: { default: false, format: 'boolean', type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    400: { description: '400  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQodLanguagesRoute = createRoute({
  method: 'get',
  path: '/qod/languages',
  tags: ['Quote of the day'],
  description: 'Gets a list of supported languages for `Quote of the Day`. \n',
  responses: { 200: { description: '200  response', content: {} } },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQshowRoute = createRoute({
  method: 'get',
  path: '/qshow',
  tags: ['Qshow'],
  description: 'Gets a details about a qshow.\n',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Qshow ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const putQshowRoute = createRoute({
  method: 'put',
  path: '/qshow',
  tags: ['Qshow'],
  description: 'Create and add a new qshow to your private collection.',
  request: {
    query: z.object({
      title: z
        .string()
        .openapi({
          param: {
            description: 'Qshow title',
            in: 'query',
            name: 'title',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Qshow description',
            in: 'query',
            name: 'description',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Tags for the qshow',
            explode: true,
            in: 'query',
            name: 'tags',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const deleteQshowRoute = createRoute({
  method: 'delete',
  path: '/qshow',
  tags: ['Qshow'],
  description: 'Delete a qshow.\n',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Qshow ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const patchQshowRoute = createRoute({
  method: 'patch',
  path: '/qshow',
  tags: ['Qshow'],
  description: 'Update an existing qshow.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Qshow ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Qshow title',
            in: 'query',
            name: 'title',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Qshow description',
            in: 'query',
            name: 'description',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Tags for the qshow',
            explode: true,
            in: 'query',
            name: 'tags',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQshowListRoute = createRoute({
  method: 'get',
  path: '/qshow/list',
  tags: ['Qshow'],
  description: 'Get the list of Qshows in They Said So platform.',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Response is paged. This parameter controls where response starts the listing at',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      public: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should include public qshows or not in the list',
            in: 'query',
            name: 'public',
            required: false,
            schema: { default: false, format: 'boolean', type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQshowQuotesRoute = createRoute({
  method: 'get',
  path: '/qshow/quotes',
  tags: ['Qshow'],
  description: 'Get the quotes in a given Qshow.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Qshow ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const postQshowQuotesAddRoute = createRoute({
  method: 'post',
  path: '/qshow/quotes/add',
  tags: ['Qshow'],
  description: 'Add a quote to a given Qshow.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Qshow ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      quoteid: z
        .string()
        .openapi({
          param: {
            description: 'Quote ID to add the qshow collection',
            in: 'query',
            name: 'quoteid',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const postQshowQuotesRemoveRoute = createRoute({
  method: 'post',
  path: '/qshow/quotes/remove',
  tags: ['Qshow'],
  description: 'Remove a quote to a given Qshow.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Qshow ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      quoteid: z
        .string()
        .openapi({
          param: {
            description: 'Quote ID to remove from the qshow collection',
            in: 'query',
            name: 'quoteid',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteRoute = createRoute({
  method: 'get',
  path: '/quote',
  tags: ['Quote', 'Private Quotes'],
  description: 'Gets a `Quote` with a given `id`.',
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Quote ID',
            in: 'query',
            name: 'id',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200  response',
      content: {
        'application/json': {
          schema: QuoteResponseSchema,
          examples: {
            response: {
              value:
                '{\n  "success": {\n    "total": 1\n  },\n  "contents": {\n    "quote": "The day soldiers stop bringing you their problems is the day you have stopped leading them. They have either lost confidence that you can help them or concluded that you do not care. Either case is a failure of leadership.",\n    "author": "Colin Powell",\n    "id": "XLa1AmylKv1XF_dXcyhvdweF",\n    "language": "en",\n    "sfw": "sfw",\n    "permalink": "https://theysaidso.com/quote/colin-powell-the-day-soldiers-stop-bringing-you-their-problems-is-the-day-you-ha",\n    "requested_category": "inspire",\n    "categories": [\n      "confidence",\n      "leadership",\n      "management",\n      "tod"\n    ]\n  }\n}',
            },
          },
        },
      },
    },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const putQuoteRoute = createRoute({
  method: 'put',
  path: '/quote',
  tags: ['Private Quotes'],
  description: 'Add a new quote to your private collection.',
  request: {
    query: z.object({
      quote: z
        .string()
        .openapi({
          param: {
            description: 'Quote',
            in: 'query',
            name: 'quote',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      author: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Quote Author',
            in: 'query',
            name: 'author',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma Separated tags',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      language: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Language. If not supplied an auto detection mechanism will be used to detect a language.',
            in: 'query',
            name: 'language',
            required: false,
            schema: { default: 'en', format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const postQuoteRoute = createRoute({
  method: 'post',
  path: '/quote',
  tags: ['Private Quotes'],
  description:
    "Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.",
  request: {
    query: z.object({
      quote: z
        .string()
        .openapi({
          param: {
            description: 'Quote',
            in: 'query',
            name: 'quote',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      author: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Quote Author',
            in: 'query',
            name: 'author',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma Separated tags',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      language: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Language. If not supplied an auto detection mechanism will be used to detect a language.',
            in: 'query',
            name: 'language',
            required: false,
            schema: { default: 'en', format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const deleteQuoteRoute = createRoute({
  method: 'delete',
  path: '/quote',
  tags: ['Private Quotes'],
  description:
    'Delete a quote. The user needs to be the owner of the quote to be able to delete it.\n',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Quote ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const patchQuoteRoute = createRoute({
  method: 'patch',
  path: '/quote',
  tags: ['Private Quotes'],
  description: 'Update a quote',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Quote ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      quote: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Quote',
            in: 'query',
            name: 'quote',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      author: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Quote Author',
            in: 'query',
            name: 'author',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      language: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Language. If not supplied an auto detection mechanism will be used to detect a language.',
            in: 'query',
            name: 'language',
            required: false,
            schema: { default: 'en', format: 'string', type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma Separated tags',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteAuthorsPopularRoute = createRoute({
  method: 'get',
  path: '/quote/authors/popular',
  tags: ['Quote'],
  description: 'Gets a list of popular author names in the system. \n',
  request: {
    query: z.object({
      language: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Language. A same author may have quotes in two or more different languages. So for example \'Mahatma Gandhi\' may be returned for language "en"(English), and "மஹாத்மா காந்தி" may be returned when the language is "ta" (Tamil).',
            in: 'query',
            name: 'language',
            required: false,
            schema: { default: 'en', format: 'string', type: 'string' },
          },
        }),
      detailed: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Should return detailed author information such as `birthday`, `death date`, `occupation`, `description` etc. Only available at certain subscription levels.',
            in: 'query',
            name: 'detailed',
            required: false,
            schema: { default: false, format: 'boolean', type: 'boolean' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Response is paged. This parameter controls where response starts the listing at',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 5, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    400: { description: '400  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteAuthorsSearchRoute = createRoute({
  method: 'get',
  path: '/quote/authors/search',
  tags: ['Quote'],
  description: 'Gets a list of author names in the system. \n',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Text string to search for in author names',
            in: 'query',
            name: 'query',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      language: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Language. A same author may have quotes in two or more different languages. So for example \'Mahatma Gandhi\' may be returned for language "en"(English), and "மஹாத்மா காந்தி" may be returned when the language is "ta" (Tamil).',
            in: 'query',
            name: 'language',
            required: false,
            schema: { default: 'en', format: 'string', type: 'string' },
          },
        }),
      detailed: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Should return detailed author information such as `birthday`, `death date`, `occupation`, `description` etc. Only available at certain subscription levels.',
            in: 'query',
            name: 'detailed',
            required: false,
            schema: { default: false, format: 'boolean', type: 'boolean' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Response is paged. This parameter controls where response starts the listing at',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    400: { description: '400  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteCategoriesPopularRoute = createRoute({
  method: 'get',
  path: '/quote/categories/popular',
  tags: ['Quote'],
  description: 'Gets a list of popular `Quote` Categories.\n',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Response is paged. This parameter controls where response starts the listing at',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 5, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: '200  response', content: {} } },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteCategoriesSearchRoute = createRoute({
  method: 'get',
  path: '/quote/categories/search',
  tags: ['Quote'],
  description: 'Gets a list of `Quote` Categories matching the query string.\n',
  request: {
    query: z.object({
      query: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Text string to search for in the categories',
            in: 'query',
            name: 'query',
            required: false,
            schema: { default: 0, format: 'string', type: 'string' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Response is paged. This parameter controls where response starts the listing at',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 2, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: '200  response', content: {} } },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const putQuoteDislikeRoute = createRoute({
  method: 'put',
  path: '/quote/dislike',
  tags: ['Quote'],
  description:
    "Dislike the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.",
  request: {
    query: z.object({
      quote_id: z
        .string()
        .openapi({
          param: {
            description: 'Quote ID',
            in: 'query',
            name: 'quote_id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const postQuoteDislikeRoute = createRoute({
  method: 'post',
  path: '/quote/dislike',
  tags: ['Quote'],
  description:
    "Dislike the given Quote as a user of the API Key. Same as `put` but a convenient alias for those clients that don't support `put` cleanly.",
  request: {
    query: z.object({
      quote_id: z
        .string()
        .openapi({
          param: {
            description: 'Quote ID',
            in: 'query',
            name: 'quote_id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const deleteQuoteDislikeRoute = createRoute({
  method: 'delete',
  path: '/quote/dislike',
  tags: ['Quote'],
  description: 'Remove the disLike for the given Quote as a user of the API Key.',
  request: {
    query: z.object({
      quote_id: z
        .string()
        .openapi({
          param: {
            description: 'Quote ID',
            in: 'query',
            name: 'quote_id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteImageRoute = createRoute({
  method: 'get',
  path: '/quote/image',
  tags: ['Quote Images'],
  description:
    'Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`\n',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Quote Image id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      binary: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Should the response be a direct file download of the image or a base64 encoded image file wrapped in json?',
            in: 'query',
            name: 'binary',
            required: false,
            schema: { default: true, format: 'boolean', type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const putQuoteImageRoute = createRoute({
  method: 'put',
  path: '/quote/image',
  tags: ['Quote Images'],
  description:
    'Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!\n',
  request: {
    query: z.object({
      quote_id: z
        .string()
        .openapi({
          param: {
            description: 'Quote id',
            in: 'query',
            name: 'quote_id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      bgimage_id: z
        .string()
        .default('theysaidso_default_background_image')
        .exactOptional()
        .openapi({
          param: {
            description: 'Background Image id ( Will override bgcolor if supplied)',
            in: 'query',
            name: 'bgimage_id',
            required: false,
            schema: {
              default: 'theysaidso_default_background_image',
              format: 'string',
              type: 'string',
            },
          },
        }),
      bg_color: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Background Color(if background image id is not supplied)',
            in: 'query',
            name: 'bg_color',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      font_id: z
        .string()
        .default('theysaidso_default_font')
        .exactOptional()
        .openapi({
          param: {
            description: 'Font id',
            in: 'query',
            name: 'font_id',
            required: false,
            schema: { default: 'theysaidso_default_font', format: 'string', type: 'string' },
          },
        }),
      text_color: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Text Color',
            in: 'query',
            name: 'text_color',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      text_size: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Text/font size',
            in: 'query',
            name: 'text_size',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      halign: z
        .string()
        .default('center')
        .exactOptional()
        .openapi({
          param: {
            description: 'Horizontal text Alignment Value',
            in: 'query',
            name: 'halign',
            required: false,
            schema: { default: 'center', format: 'string', type: 'string' },
          },
        }),
      valign: z
        .string()
        .default('center')
        .exactOptional()
        .openapi({
          param: {
            description: 'Vertical text Alignment Value',
            in: 'query',
            name: 'valign',
            required: false,
            schema: { default: 'center', format: 'string', type: 'string' },
          },
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Image Width(By default this takes the width of the background image)',
            in: 'query',
            name: 'width',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Image Height(By default this takes the height of the background image)',
            in: 'query',
            name: 'height',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      branding: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Disable They Said So branding (Only available in certain subscription levels. Ignored in other levels)',
            in: 'query',
            name: 'branding',
            required: false,
            schema: { default: false, format: 'boolean', type: 'boolean' },
          },
        }),
      include_transparent_layer: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Should include a transparent layer between the text and the background image? This helps when the background image is bright and obscures the text.',
            in: 'query',
            name: 'include_transparent_layer',
            required: false,
            schema: { default: true, format: 'boolean', type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const deleteQuoteImageRoute = createRoute({
  method: 'delete',
  path: '/quote/image',
  tags: ['Quote Images'],
  description:
    'Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.\n',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Quote Image ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const postQuoteImageBackgroundRoute = createRoute({
  method: 'post',
  path: '/quote/image/background',
  tags: ['Quote Images'],
  description: 'Add an image for use later as a quote background image.',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              image: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Image file to add to your collection (png/jpg/gif are supported)',
                }),
              tags: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional comma separated tags' }),
            })
            .openapi({ required: ['image'] }),
        },
      },
    },
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const deleteQuoteImageBackgroundRoute = createRoute({
  method: 'delete',
  path: '/quote/image/background',
  tags: ['Quote Images'],
  description:
    'Delete a background image file. The user needs to be the owner of the background image to be able to delete it.\n',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Font ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteImageBackgroundListRoute = createRoute({
  method: 'get',
  path: '/quote/image/background/list',
  tags: ['Quote Images'],
  description: 'Lists background images in your private collection. \n',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Response is paged. This parameter determines where the response should start.',
            in: 'query',
            name: 'start',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteImageBackgroundSearchRoute = createRoute({
  method: 'get',
  path: '/quote/image/background/search',
  tags: ['Quote Images'],
  description: 'Searches for a background image with a given tag. \n',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Tag string',
            in: 'query',
            name: 'query',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const postQuoteImageBackgroundTagsAddRoute = createRoute({
  method: 'post',
  path: '/quote/image/background/tags/add',
  tags: ['Quote Images'],
  description: 'Add a tag to a given Image.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Image ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      tags: z
        .string()
        .openapi({
          param: {
            description: 'Comma Separated tags',
            in: 'query',
            name: 'tags',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const postQuoteImageBackgroundTagsRemoveRoute = createRoute({
  method: 'post',
  path: '/quote/image/background/tags/remove',
  tags: ['Quote Images'],
  description: 'Remove a tag from a given Image.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Image ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      tags: z
        .string()
        .openapi({
          param: {
            description: 'Comma Separated tags',
            in: 'query',
            name: 'tags',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const postQuoteImageFontRoute = createRoute({
  method: 'post',
  path: '/quote/image/font',
  tags: ['Quote Images'],
  description:
    'Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              font: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Font file to add to your collection (ttf/otf are supported)',
                }),
              tags: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional comma separated tags' }),
            })
            .openapi({ required: ['font'] }),
        },
      },
    },
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const deleteQuoteImageFontRoute = createRoute({
  method: 'delete',
  path: '/quote/image/font',
  tags: ['Quote Images'],
  description:
    'Delete a font file. The user needs to be the owner of the font to be able to delete it.\n',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Font ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteImageFontListRoute = createRoute({
  method: 'get',
  path: '/quote/image/font/list',
  tags: ['Quote Images'],
  description: 'Lists background images in your private collection. \n',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Response is paged. This parameter determines where the response should start.',
            in: 'query',
            name: 'start',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteImageFontSearchRoute = createRoute({
  method: 'get',
  path: '/quote/image/font/search',
  tags: ['Quote Images'],
  description: 'Searches for a font with a given tag. \n',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Tag string',
            in: 'query',
            name: 'query',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const postQuoteImageFontTagsAddRoute = createRoute({
  method: 'post',
  path: '/quote/image/font/tags/add',
  tags: ['Quote Images'],
  description: 'Add a tag to a given font.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Font ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      tags: z
        .string()
        .openapi({
          param: {
            description: 'Comma Separated tags',
            in: 'query',
            name: 'tags',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const postQuoteImageFontTagsRemoveRoute = createRoute({
  method: 'post',
  path: '/quote/image/font/tags/remove',
  tags: ['Quote Images'],
  description: 'Remove a tag from a given Font.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Font ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      tags: z
        .string()
        .openapi({
          param: {
            description: 'Comma Separated tags',
            in: 'query',
            name: 'tags',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteImageSearchRoute = createRoute({
  method: 'get',
  path: '/quote/image/search',
  tags: ['Quote Images'],
  description:
    'Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author. \n',
  request: {
    query: z.object({
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Quote Category',
            in: 'query',
            name: 'category',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      author: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Quote Author',
            in: 'query',
            name: 'author',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      private: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Should search private collection. Default searches public image collection.',
            in: 'query',
            name: 'private',
            required: false,
            schema: { default: false, format: 'boolean', type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const putQuoteLikeRoute = createRoute({
  method: 'put',
  path: '/quote/like',
  tags: ['Quote'],
  description:
    "Like the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.",
  request: {
    query: z.object({
      quote_id: z
        .string()
        .openapi({
          param: {
            description: 'Quote ID',
            in: 'query',
            name: 'quote_id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const postQuoteLikeRoute = createRoute({
  method: 'post',
  path: '/quote/like',
  tags: ['Quote'],
  description:
    "Like the given Quote as a user of the API Key. Same as `PUT` but a convenient alias for those clients that don't support `PUT` cleanly.",
  request: {
    query: z.object({
      quote_id: z
        .string()
        .openapi({
          param: {
            description: 'Quote ID',
            in: 'query',
            name: 'quote_id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const deleteQuoteLikeRoute = createRoute({
  method: 'delete',
  path: '/quote/like',
  tags: ['Quote'],
  description: 'Remove the Like for the given Quote as a user of the API Key.',
  request: {
    query: z.object({
      quote_id: z
        .string()
        .openapi({
          param: {
            description: 'Quote ID',
            in: 'query',
            name: 'quote_id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteListRoute = createRoute({
  method: 'get',
  path: '/quote/list',
  tags: ['Private Quotes'],
  description: 'Get the list of quotes in your private collection.',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Response is paged. This parameter controls where response starts the listing at',
            in: 'query',
            name: 'start',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Response is paged. This parameter controls how many is returned in the result.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 10, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteRandomRoute = createRoute({
  method: 'get',
  path: '/quote/random',
  tags: ['Quote'],
  description:
    'Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.',
  request: {
    query: z.object({
      language: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description: 'Language of the Quote. The language must be supported in our system.',
            in: 'query',
            name: 'language',
            required: false,
            schema: { default: 'en', format: 'string', type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'No of quotes to return. The max limit depends on the subscription level.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 1, format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200  response',
      content: {
        'application/json': {
          schema: QuoteResponseSchema,
          examples: {
            response: {
              value:
                '{\n    "success": {\n        "total": 1\n    },\n    "contents": {\n        "quotes": [\n            {\n                "quote": "The day soldiers stop bringing you their problems is the day you have stopped leading them. They have either lost confidence that you can help them or concluded that you do not care. Either case is a failure of leadership.",\n                "length": "222",\n                "author": "Colin Powell",\n                "tags": [\n                    "confidence",\n                    "leadership",\n                    "management"\n                ],\n                "category": "management",\n                "id": "XLa1AmylKv1XF_dXcyhvdweF"\n            }\n        ]\n    }\n}',
            },
          },
        },
      },
    },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const getQuoteSearchRoute = createRoute({
  method: 'get',
  path: '/quote/search',
  tags: ['Quote'],
  description:
    'Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. ',
  request: {
    query: z.object({
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Quote Category',
            in: 'query',
            name: 'category',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      author: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Quote Author',
            in: 'query',
            name: 'author',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      minlength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Quote minimum Length',
            in: 'query',
            name: 'minlength',
            required: false,
            schema: { default: 100, format: 'int32', type: 'integer' },
          },
        }),
      maxlength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(300)
        .exactOptional()
        .openapi({
          param: {
            description: 'Quote maximum Length',
            in: 'query',
            name: 'maxlength',
            required: false,
            schema: { default: 300, format: 'int32', type: 'integer' },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'keyword to search for in the quote',
            in: 'query',
            name: 'query',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      private: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should search private collection? Default searches public collection.',
            in: 'query',
            name: 'private',
            required: false,
            schema: { default: false, format: 'boolean', type: 'boolean' },
          },
        }),
      language: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description: 'Language of the Quote. The language must be supported in our system.',
            in: 'query',
            name: 'language',
            required: false,
            schema: { default: 'en', format: 'string', type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'No of quotes to return. The max limit depends on the subscription level.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 1, format: 'integer', type: 'integer' },
          },
        }),
      sfw: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should search only SFW (Safe For Work) quotes?',
            in: 'query',
            name: 'sfw',
            required: false,
            schema: { default: false, format: 'boolean', type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200  response',
      content: {
        'application/json': {
          schema: QuoteResponseSchema,
          examples: {
            response: {
              value:
                '{\n    "success": {\n        "total": 1\n    },\n    "contents": {\n        "quotes": [\n            {\n                "quote": "The day soldiers stop bringing you their problems is the day you have stopped leading them. They have either lost confidence that you can help them or concluded that you do not care. Either case is a failure of leadership.",\n                "length": "222",\n                "author": "Colin Powell",\n                "tags": [\n                    "confidence",\n                    "leadership",\n                    "management"\n                ],\n                "category": "management",\n                "id": "XLa1AmylKv1XF_dXcyhvdweF"\n            }\n        ]\n    }\n}',
            },
          },
        },
      },
    },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const postQuoteTagsAddRoute = createRoute({
  method: 'post',
  path: '/quote/tags/add',
  tags: ['Private Quotes'],
  description: 'Add a tag to a given Quote.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Quote ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      tags: z
        .string()
        .openapi({
          param: {
            description: 'Comma Separated tags',
            in: 'query',
            name: 'tags',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})

export const postQuoteTagsRemoveRoute = createRoute({
  method: 'post',
  path: '/quote/tags/remove',
  tags: ['Private Quotes'],
  description: 'Remove a tag from a given quote.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Quote ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      tags: z
        .string()
        .openapi({
          param: {
            description: 'Comma Separated tags',
            in: 'query',
            name: 'tags',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
    404: { description: '404  response', content: {} },
  },
  security: [{ 'X-TheySaidSo-Api-Secret': [] }],
})
