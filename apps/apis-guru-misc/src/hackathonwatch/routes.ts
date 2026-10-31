import { createRoute, z } from '@hono/zod-openapi'

export const getHackathonsComingJsonRoute = createRoute({
  method: 'get',
  path: '/hackathons/coming.json',
  tags: ['hackathons'],
  summary: 'Return a list of coming hackathons',
  operationId: 'GET-hackathons-coming---format-',
  request: {
    query: z.object({
      page: z
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
            description: 'Specify the page of coming hackathons.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getHackathonsIdJsonRoute = createRoute({
  method: 'get',
  path: '/hackathons/{id}.json',
  tags: ['hackathons'],
  summary: 'Return the detail of a given hackathon',
  operationId: 'GET-hackathons--id---format-',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'ID of the hackathon for detail information',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getSwaggerDocJsonRoute = createRoute({
  method: 'get',
  path: '/swagger_doc.json',
  tags: ['swagger_doc'],
  summary: 'Swagger compatible API description',
  operationId: 'GET-swagger_doc---format-',
  responses: { 200: { description: 'No response was specified' } },
})

export const getSwaggerDocNameJsonRoute = createRoute({
  method: 'get',
  path: '/swagger_doc/{name}.json',
  tags: ['swagger_doc'],
  summary: 'Swagger compatible API description for specific API',
  operationId: 'GET-swagger_doc--name---format-',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Resource name of mounted API',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})
