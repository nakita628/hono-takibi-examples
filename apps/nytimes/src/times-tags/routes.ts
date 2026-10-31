import { createRoute, z } from '@hono/zod-openapi'

const ApikeySecurityScheme = { in: 'query', name: 'api-key', type: 'apiKey' }

export const getTimestagsRoute = createRoute({
  method: 'get',
  path: '/timestags',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Your search query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .enum(['Des', 'Geo', 'Org', 'Per'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you do not specify a value for filter (see the Optional Parameters), your query will be matched to tags in all four Times dictionaries: subject, geographic location, organization and person. To use more than one, separate with commas.\n',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { enum: ['Des', 'Geo', 'Org', 'Per'], type: 'string' },
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Sets the maximum number of results',
            in: 'query',
            name: 'max',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of tags',
      content: { 'application/json': { schema: z.array(z.array(z.string())) } },
    },
  },
})
