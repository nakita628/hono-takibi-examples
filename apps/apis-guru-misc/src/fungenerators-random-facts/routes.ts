import { createRoute, z } from '@hono/zod-openapi'

const XFungeneratorsApiSecretSecurityScheme = {
  in: 'header',
  name: 'X-Fungenerators-Api-Secret',
  type: 'apiKey',
}

export const getFactRoute = createRoute({
  method: 'get',
  path: '/fact',
  tags: ['Random Facts', 'Private Facts'],
  description: 'Get a Fact belonging to the id.',
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of the fact to fetch',
            in: 'query',
            name: 'id',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const putFactRoute = createRoute({
  method: 'put',
  path: '/fact',
  tags: ['Private Facts'],
  description: 'Add a Fact entry to the database (private collection).',
  request: {
    query: z.object({
      fact: z
        .string()
        .openapi({
          param: {
            description: 'Fact Text',
            in: 'query',
            name: 'fact',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      category: z
        .string()
        .openapi({
          param: {
            description: 'Category of the fact',
            in: 'query',
            name: 'category',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      subcategory: z
        .string()
        .openapi({
          param: {
            description: 'Sub Category of the fact',
            in: 'query',
            name: 'subcategory',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      tags: z
        .string()
        .openapi({
          param: {
            description: 'Tags',
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
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const deleteFactRoute = createRoute({
  method: 'delete',
  path: '/fact',
  tags: ['Private Facts'],
  description: 'Delete a Fact entry identified by the id.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Fact ID',
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
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getFactCategoriesRoute = createRoute({
  method: 'get',
  path: '/fact/categories',
  tags: ['Random Facts'],
  description: 'Get a random Fact.',
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
            description: 'start',
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
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getFactFodRoute = createRoute({
  method: 'get',
  path: '/fact/fod',
  tags: ['Fact of the day'],
  description: 'Get fact of the day for the given category.',
  request: {
    query: z.object({
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Category to get the fact of the day from. Must be one from the list returned from /fact/fod/categories',
            in: 'query',
            name: 'category',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getFactFodCategoriesRoute = createRoute({
  method: 'get',
  path: '/fact/fod/categories',
  tags: ['Fact of the day'],
  description: 'Get the list of supported fact of the day categories.',
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getFactNumbersRoute = createRoute({
  method: 'get',
  path: '/fact/numbers',
  tags: ['Number Facts'],
  description: 'Get a random fact about a number',
  request: {
    query: z.object({
      number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Number value',
            in: 'query',
            name: 'number',
            required: true,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 Success response', content: {} },
    401: { description: '401 Unauthorized response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getFactOnthisdayBornRoute = createRoute({
  method: 'get',
  path: '/fact/onthisday/born',
  tags: ['On this day'],
  description:
    'Returns a random ( famous/ relatively famous ) person born on a given day and month',
  request: {
    query: z.object({
      month: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional month (1-12). Defaults to current month',
            in: 'query',
            name: 'month',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      day: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional day of the month (1- 28/30/31 based on the month). Defaults to current day of the month.',
            in: 'query',
            name: 'day',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getFactOnthisdayDiedRoute = createRoute({
  method: 'get',
  path: '/fact/onthisday/died',
  tags: ['On this day'],
  description:
    'Returns a random ( famous/ relatively famous ) person died on a given day and month',
  request: {
    query: z.object({
      month: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional month (1-12). Defaults to current month',
            in: 'query',
            name: 'month',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      day: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional day of the month (1- 28/30/31 based on the month). Defaults to current day of the month.',
            in: 'query',
            name: 'day',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getFactOnthisdayEventRoute = createRoute({
  method: 'get',
  path: '/fact/onthisday/event',
  tags: ['On this day'],
  description:
    'Returns a random ( famous/ relatively famous ) historic event on a given day and month',
  request: {
    query: z.object({
      month: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional month (1-12). Defaults to current month',
            in: 'query',
            name: 'month',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      day: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional day of the month (1- 28/30/31 based on the month). Defaults to current day of the month.',
            in: 'query',
            name: 'day',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getFactRandomRoute = createRoute({
  method: 'get',
  path: '/fact/random',
  tags: ['Random Facts'],
  description: 'Get a random Fact for a given category(optional) and subcategory(optional).',
  request: {
    query: z.object({
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Category to get the fact from',
            in: 'query',
            name: 'category',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      subcategory: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sub Category to get the fact from',
            in: 'query',
            name: 'subcategory',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getFactSearchRoute = createRoute({
  method: 'get',
  path: '/fact/search',
  tags: ['Random Facts'],
  description:
    'Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Text to search for in the facts',
            in: 'query',
            name: 'query',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Category to get the fact from',
            in: 'query',
            name: 'category',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      subcategory: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sub Category to get the fact from',
            in: 'query',
            name: 'subcategory',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})
