import { createRoute, z } from '@hono/zod-openapi'

const ArticleSchema = z
  .object({
    abstract: z.string().exactOptional(),
    blog_name: z.string().exactOptional(),
    byline: z.string().exactOptional(),
    created_date: z.string().exactOptional(),
    des_facet: z.array(z.string()).exactOptional(),
    geo_facet: z.array(z.string()).exactOptional(),
    headline: z.string().exactOptional(),
    item_type: z.string().exactOptional(),
    kicker: z.string().exactOptional(),
    material_type_facet: z.string().exactOptional(),
    multimedia: z
      .array(
        z
          .object({
            caption: z.string().exactOptional(),
            copyright: z.string().exactOptional(),
            format: z.string().exactOptional(),
            height: z.int().exactOptional(),
            subtype: z.string().exactOptional(),
            type: z.string().exactOptional(),
            url: z.string().exactOptional(),
            width: z.int().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    org_facet: z.string().exactOptional(),
    per_facet: z.array(z.string()).exactOptional(),
    published_date: z.string().exactOptional(),
    related_urls: z
      .array(
        z
          .object({
            suggested_link_text: z.string().exactOptional(),
            url: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    section: z.string().exactOptional(),
    short_url: z.string().exactOptional(),
    source: z.string().exactOptional(),
    subsection: z.string().exactOptional(),
    thumbnail_standard: z.string().exactOptional(),
    title: z.string().exactOptional(),
    updated_date: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Article')

const ApikeySecurityScheme = { in: 'query', name: 'api-key', type: 'apiKey' }

export const getContentJsonRoute = createRoute({
  method: 'get',
  path: '/content.json',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            description:
              'The complete URL of a specific news item, URL-encoded or backslash-escaped',
            in: 'query',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of Articles',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z.array(ArticleSchema).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getContentSourceSectionJsonRoute = createRoute({
  method: 'get',
  path: '/content/{source}/{section}.json',
  request: {
    params: z.object({
      source: z
        .enum(['all', 'nyt', 'iht'])
        .openapi({
          param: {
            description:
              'Limits the set of items by originating source\n\nall = items from both The New York Times and The International New York Times\nnyt = New York Times items only\niht = International New York Times items only\n',
            in: 'path',
            name: 'source',
            required: true,
            schema: { enum: ['all', 'nyt', 'iht'], type: 'string' },
            'x-consoleDefault': 'all',
          },
        }),
      section: z
        .string()
        .openapi({
          param: {
            description:
              'Limits the set of items by one or more sections\nall | One or more section names, separated by semicolons\n\n To get all sections, specify all. To get a particular section or sections, use the section names returned by this request:\n http://api.nytimes.com/svc/news/v3/content/section-list.json\n',
            in: 'path',
            name: 'section',
            required: true,
            schema: { type: 'string' },
            'x-consoleDefault': 'all',
          },
        }),
    }),
    query: z.object({
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the number of results, between 1 and 20',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 20, type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Sets the starting point of the result set',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of Articles',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z.array(ArticleSchema).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getContentSourceSectionTimePeriodJsonRoute = createRoute({
  method: 'get',
  path: '/content/{source}/{section}/{time-period}.json',
  request: {
    params: z.object({
      source: z
        .enum(['all', 'nyt', 'iht'])
        .openapi({
          param: {
            description:
              'Limits the set of items by originating source\n\nall = items from both The New York Times and The International New York Times\nnyt = New York Times items only\niht = International New York Times items only\n',
            in: 'path',
            name: 'source',
            required: true,
            schema: { enum: ['all', 'nyt', 'iht'], type: 'string' },
          },
        }),
      section: z
        .string()
        .openapi({
          param: {
            description:
              'Limits the set of items by one or more sections\nall | One or more section names, separated by semicolons\n\n To get all sections, specify all. To get a particular section or sections, use the section names returned by this request:\n http://api.nytimes.com/svc/news/v3/content/section-list.json\n',
            in: 'path',
            name: 'section',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'time-period': z
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
            description: 'Limits the set of items by time published, integer in number of hours',
            in: 'path',
            name: 'time-period',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the number of results, between 1 and 20',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 20, type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Sets the starting point of the result set',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of Articles',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z.array(ArticleSchema).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
