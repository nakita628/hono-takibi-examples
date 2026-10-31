import { createRoute, z } from '@hono/zod-openapi'

const PetSchema = z
  .object({
    id: z
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
    name: z.string().exactOptional(),
    status: z
      .enum(['available', 'pending', 'sold'])
      .exactOptional()
      .openapi({ description: 'An enum with available options' }),
  })
  .openapi({ required: [] })
  .openapi('Pet')

export const postAnythingAllParamTypesIdId2Route = createRoute({
  method: 'post',
  path: '/anything/all-param-types/{id}/{id2}',
  summary: 'Utilizes all available parameter types.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Path ID',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
      id2: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id2',
            in: 'path',
            description: 'Another path ID',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    cookies: z.object({
      cookieString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cookieString',
            in: 'cookie',
            description: 'Cookie value that accepts a string',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cookieInt: z
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
            name: 'cookieInt',
            in: 'cookie',
            description: 'Cookie that accepts an integer',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    query: z.object({
      queryParam: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'queryParam',
            in: 'query',
            description: 'Query string parameter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      queryParam2: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'queryParam2',
            in: 'query',
            description: 'Another query string parameter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'x-header-value': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-header-value',
            in: 'header',
            description: 'Custom header',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-header-data': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-header-data',
            in: 'header',
            description: 'Another custom header',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Pet object that needs to be added to the store',
      content: { 'application/json': { schema: PetSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})
