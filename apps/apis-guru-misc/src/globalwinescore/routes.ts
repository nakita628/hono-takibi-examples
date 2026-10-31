import { createRoute, z } from '@hono/zod-openapi'

const TokenAuthenticationSecurityScheme = {
  description: 'See Authentication section above',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getGlobalwinescoresIndexRoute = createRoute({
  method: 'get',
  path: '/globalwinescores/',
  tags: ['GlobalWineScore'],
  summary: 'List all historical GWS',
  description: 'Returns all available GWS',
  operationId: 'listHistoricalGWS',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            example: 'Token <YOUR-API-TOKEN>',
            in: 'header',
            name: 'Authorization',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    query: z.object({
      wine_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The exact `id` of the wine. Can be used multiple times (e.g `?wine_id=114959&wine_id=114952`) <br/> If you need to find the `wine_id` for your wines, use our <a href="https://api.globalwinescore.com/search/" target="_blank">search page</a>\n',
            example: [114959, 114952],
            explode: true,
            in: 'query',
            name: 'wine_id',
            schema: { items: { type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      vintage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The vintage you want to search against.',
            example: '2000',
            in: 'query',
            name: 'vintage',
            schema: { type: 'string' },
            required: false,
          },
        }),
      color: z
        .enum(['red', 'white', 'pink'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The lowercase color of the wine.',
            in: 'query',
            name: 'color',
            schema: { enum: ['red', 'white', 'pink'], type: 'string' },
            required: false,
          },
        }),
      is_primeurs: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only show the <a href="See https://en.wikipedia.org/wiki/En_primeur">en primeur</a> GlobalWineScores\n',
            in: 'query',
            name: 'is_primeurs',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      lwin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'L-WIN wine identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)\n',
            example: '1014033',
            in: 'query',
            name: 'lwin',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lwin_11: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'L-WIN wine/vintage identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)\n',
            example: '10140332000',
            in: 'query',
            name: 'lwin_11',
            schema: { type: 'string' },
            required: false,
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
          z.int().min(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            schema: { default: 100, minimum: 0, type: 'integer' },
            required: false,
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
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            example: 100,
            in: 'query',
            name: 'offset',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      ordering: z
        .enum(['date', '-date', 'score', '-score'])
        .default('-date')
        .exactOptional()
        .openapi({
          param: {
            description: 'Which field to use when ordering the results.',
            in: 'query',
            name: 'ordering',
            schema: {
              default: '-date',
              enum: ['date', '-date', 'score', '-score'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: '', content: {} } },
})

export const getGlobalwinescoresLatestIndexRoute = createRoute({
  method: 'get',
  path: '/globalwinescores/latest/',
  tags: ['GlobalWineScore'],
  summary: 'List all latest GWS',
  description: 'Returns the latest GWS available per wine/vintage.',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            example: 'Token <YOUR-API-TOKEN>',
            in: 'header',
            name: 'Authorization',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    query: z.object({
      wine_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The exact `id` of the wine. Can be used multiple times (e.g `?wine_id=114959&wine_id=114952`) <br/> If you need to find the `wine_id` for your wines, use our <a href="https://api.globalwinescore.com/search/" target="_blank">search page</a>\n',
            example: [114959, 114952],
            explode: true,
            in: 'query',
            name: 'wine_id',
            schema: { items: { type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      vintage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The vintage you want to search against.',
            example: '2000',
            in: 'query',
            name: 'vintage',
            schema: { type: 'string' },
            required: false,
          },
        }),
      color: z
        .enum(['red', 'white', 'pink'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The lowercase color of the wine.',
            in: 'query',
            name: 'color',
            schema: { enum: ['red', 'white', 'pink'], type: 'string' },
            required: false,
          },
        }),
      is_primeurs: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only show the <a href="See https://en.wikipedia.org/wiki/En_primeur">en primeur</a> GlobalWineScores\n',
            in: 'query',
            name: 'is_primeurs',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      lwin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'L-WIN wine identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)\n',
            example: '1014033',
            in: 'query',
            name: 'lwin',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lwin_11: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'L-WIN wine/vintage identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)\n',
            example: '10140332000',
            in: 'query',
            name: 'lwin_11',
            schema: { type: 'string' },
            required: false,
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
          z.int().min(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            schema: { default: 100, minimum: 0, type: 'integer' },
            required: false,
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
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            example: 100,
            in: 'query',
            name: 'offset',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      ordering: z
        .enum(['date', '-date', 'score', '-score'])
        .default('-date')
        .exactOptional()
        .openapi({
          param: {
            description: 'Which field to use when ordering the results.',
            in: 'query',
            name: 'ordering',
            schema: {
              default: '-date',
              enum: ['date', '-date', 'score', '-score'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: '', content: {} } },
})
