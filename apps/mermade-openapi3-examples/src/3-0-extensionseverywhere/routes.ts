import { createRoute, z } from '@hono/zod-openapi'

const GeoSchema = z
  .object({ latitude: z.number().exactOptional(), longitude: z.number().exactOptional() })
  .openapi({ description: 'A geographical coordinate', required: [] })
  .openapi('Geo')

const WannaBeThingSchema = z
  .object({ name: z.string() })
  .openapi({
    'x-an-extension-null': null,
    'x-an-extension-primitive': 1,
    'x-an-extension-array': [],
    'x-an-extension-object': {},
    discriminator: { propertyName: 'name' },
    required: ['name'],
  })
  .openapi('WannaBeThing')

const ThingSchema = z
  .object({ id: z.number(), name: z.string() })
  .openapi({
    'x-an-extension-null': null,
    'x-an-extension-primitive': 1,
    'x-an-extension-array': [],
    'x-an-extension-object': {},
    required: ['id', 'name'],
  })
  .openapi('Thing')

const ServerErrorSchema = z
  .object({ message: z.string(), location: GeoSchema.exactOptional() })
  .openapi({
    'x-an-extension-null': null,
    'x-an-extension-primitive': 1,
    'x-an-extension-array': [],
    'x-an-extension-object': {},
    required: ['message'],
  })
  .openapi('ServerError')

const ErrorSchema = z
  .object({ messages: z.array(z.string()) })
  .openapi({
    'x-an-extension-null': null,
    'x-an-extension-primitive': 1,
    'x-an-extension-array': [],
    'x-an-extension-object': {},
    required: ['messages'],
  })
  .openapi('Error')

const ServerErrorResponse = {
  description: 'Server error',
  content: { 'application/json': { schema: ServerErrorSchema } },
}

const ApiKeyParamsSchema = z
  .string()
  .openapi({ param: { in: 'query', name: 'apiKey', required: true, schema: { type: 'string' } } })

const NameParamsSchema = z
  .enum(['foo', 'bar', 'baz'])
  .exactOptional()
  .openapi({
    param: {
      name: 'name',
      in: 'query',
      allowEmptyValue: true,
      schema: { type: 'string', format: 'password', enum: ['foo', 'bar', 'baz'] },
      required: false,
    },
  })

const FooArrParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split('|') : [item],
          ),
    z
      .array(
        z
          .array(
            z
              .string()
              .regex(/^[hmy]/)
              .min(2)
              .max(10),
          )
          .default(['hello', 'me']),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .default([['hello', 'you'], ['me']])
  .exactOptional()
  .openapi({
    param: {
      name: 'fooArr',
      in: 'query',
      description:
        'an array of array of strings no bigger than 10 characters beginning with h y or m',
      style: 'pipeDelimited',
      schema: {
        type: 'array',
        items: {
          type: 'array',
          default: ['hello', 'me'],
          items: { type: 'string', maxLength: 10, minLength: 2, pattern: '^[hmy]' },
        },
        uniqueItems: true,
        default: [['hello', 'you'], ['me']],
      },
      required: false,
    },
  })

const BarIntParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().gt(5).max(100).multipleOf(5),
  )
  .exactOptional()
  .openapi({
    param: {
      'x-an-extension-null': null,
      'x-an-extension-primitive': 1,
      'x-an-extension-array': [],
      'x-an-extension-object': {},
      in: 'query',
      description: 'an integer which is a multiple of 5 but bigger than 5 and no bigger than 100',
      name: 'barInt',
      schema: {
        type: 'integer',
        minimum: 5,
        maximum: 100,
        exclusiveMinimum: true,
        exclusiveMaximum: false,
        multipleOf: 5,
      },
      required: false,
    },
  })

export const getThingyrefRoute = createRoute({
  method: 'get',
  path: '/thingyref',
  description: "this is a method used by a path which isn't 'x-not-a-path-but-used-in-ref'",
  responses: { default: { description: 'too lazy to make a 200' } },
})

export const getThingRoute = createRoute({
  method: 'get',
  path: '/thing',
  description: 'has no operation id, no parameters',
  request: { query: z.object({ apiKey: ApiKeyParamsSchema }) },
  responses: { default: { description: 'too lazy to make a 200' } },
})

export const putThingRoute = createRoute({
  method: 'put',
  path: '/thing',
  operationId: 'uploadThing',
  request: {
    query: z.object({ apiKey: ApiKeyParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              thing: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'file to upload',
                  'x-an-extension-null': null,
                  'x-an-extension-primitive': 1,
                  'x-an-extension-array': [],
                  'x-an-extension-object': {},
                }),
            })
            .openapi({ required: ['thing'] }),
        },
      },
    },
  },
  responses: { default: { description: 'Updated' } },
})

export const postThingRoute = createRoute({
  method: 'post',
  path: '/thing',
  operationId: 'upsert',
  request: {
    query: z.object({ apiKey: ApiKeyParamsSchema }),
    body: { content: { 'application/json': { schema: WannaBeThingSchema } } },
  },
  responses: {
    200: {
      description: 'Updated',
      content: {
        'application/json': {
          schema: ThingSchema,
          examples: { response: { value: { name: 'Puma', id: 'Dog' } } },
        },
      },
      headers: z.object({
        Location: z
          .string()
          .exactOptional()
          .openapi({ description: 'Location of new resource', param: { required: false } }),
      }),
    },
    201: {
      description: 'Created',
      headers: z.object({
        Location: z
          .string()
          .exactOptional()
          .openapi({ description: 'Location of new resource', param: { required: false } }),
      }),
    },
    204: { description: 'Updated no content' },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    500: {
      description: 'Server error',
      content: { 'application/json': { schema: ServerErrorSchema } },
    },
    501: {
      description: 'Inline schema',
      content: {
        'application/json': { schema: z.looseObject({}).openapi({ description: 'why not' }) },
      },
    },
    default: ServerErrorResponse,
  },
  deprecated: true,
})

export const deleteThingRoute = createRoute({
  method: 'delete',
  path: '/thing',
  tags: ['foo', 'bar', 'baz'],
  summary: 'interesting endpoint which deletes something for the sake of it.',
  description: 'deletes name',
  externalDocs: {
    description: 'foo',
    url: 'http://www.axway.com',
    'x-an-extension-null': null,
    'x-an-extension-primitive': 1,
    'x-an-extension-array': [],
    'x-an-extension-object': {},
  },
  operationId: 'deleteNameUnique',
  request: {
    query: z.object({
      apiKey: ApiKeyParamsSchema,
      name: NameParamsSchema,
      fooArr: FooArrParamsSchema,
      barInt: BarIntParamsSchema,
    }),
  },
  responses: { 201: { description: 'done' } },
})

export const patchThingRoute = createRoute({
  method: 'patch',
  path: '/thing',
  description: 'updates name',
  request: {
    query: z.object({
      apiKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'Overrides the path item parameters',
            schema: { type: 'number' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: { 204: { description: 'done' } },
})
