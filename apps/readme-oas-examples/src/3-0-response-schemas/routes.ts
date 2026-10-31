import { createRoute, z } from '@hono/zod-openapi'

type NodeType = { children?: NodeType[] }

const NodeSchema: z.ZodType<NodeType> = z
  .lazy(() => z.object({ children: z.array(NodeSchema).exactOptional() }).openapi({ required: [] }))
  .openapi('Node')

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
    name: z.string().openapi({ example: 'doggie' }),
    name2: z.string().exactOptional().openapi({ example: 'doggie' }),
    name3: z.string().exactOptional().openapi({ example: 'doggie' }),
    name4: z.string().exactOptional().openapi({ example: 'doggie' }),
    name5: z.string().exactOptional().openapi({ example: 'doggie' }),
    name6: z.string().exactOptional().openapi({ example: 'doggie' }),
    name7: z.string().exactOptional().openapi({ example: 'doggie' }),
    name8: z.string().exactOptional().openapi({ example: 'doggie' }),
    name9: z.string().exactOptional().openapi({ example: 'doggie' }),
    name10: z.string().exactOptional().openapi({ example: 'doggie' }),
    name11: z.string().exactOptional().openapi({ example: 'doggie' }),
    name12: z.string().exactOptional().openapi({ example: 'doggie' }),
    name13: z.string().exactOptional().openapi({ example: 'doggie' }),
    name14: z.string().exactOptional().openapi({ example: 'doggie' }),
    name15: z.string().exactOptional().openapi({ example: 'doggie' }),
    name16: z.string().exactOptional().openapi({ example: 'doggie' }),
    name17: z.string().exactOptional().openapi({ example: 'doggie' }),
    name18: z.string().exactOptional().openapi({ example: 'doggie' }),
    name19: z.string().exactOptional().openapi({ example: 'doggie' }),
    photoUrls: z.array(z.string()),
    status: z
      .enum(['available', 'pending', 'sold'])
      .exactOptional()
      .openapi({ description: 'pet status in the store' }),
  })
  .openapi({ required: ['name', 'photoUrls'] })
  .openapi('Pet')

const ObjectSchema = z
  .object({
    primitive: z.string().exactOptional().openapi({ title: 'primitive title' }),
    'read-only': z.string().exactOptional().openapi({ readOnly: true }),
    'write-only': z.string().exactOptional().openapi({ writeOnly: true }),
    object: z
      .object({ primitive: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    array: z
      .array(z.object({ primitive: z.boolean().exactOptional() }).openapi({ required: [] }))
      .exactOptional(),
    pets: z.array(PetSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Object')

export const getAnythingArrayOfPrimitivesRoute = createRoute({
  method: 'get',
  path: '/anything/array-of-primitives',
  summary: 'Array of primitives',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(z.string()) } } },
  },
})

export const getAnythingObjectRoute = createRoute({
  method: 'get',
  path: '/anything/object',
  summary: 'Object (also demonstrates readonly/writeonly)',
  request: { body: { content: { 'application/json': { schema: ObjectSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ObjectSchema } } },
  },
})

export const getAnythingMarkdownRoute = createRoute({
  method: 'get',
  path: '/anything/markdown',
  summary: 'Markdown',
  responses: {
    200: {
      description: 'Test\n - Bullet one\n - Bullet two\n *italics*',
      content: { 'application/json': { schema: ObjectSchema } },
    },
    400: { description: 'OK', content: { 'application/json': { schema: ObjectSchema } } },
  },
})

export const getAnythingArrayOfObjectsRoute = createRoute({
  method: 'get',
  path: '/anything/array-of-objects',
  summary: 'Array of objects',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(ObjectSchema) } } },
  },
})

export const getAnythingPolymorphismRoute = createRoute({
  method: 'get',
  path: '/anything/polymorphism',
  summary: 'Polymorphism',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.xor([z.string().openapi({ title: 'first object' }), PetSchema, z.string()]),
        },
      },
    },
  },
})

export const getAnythingRecursiveRoute = createRoute({
  method: 'get',
  path: '/anything/recursive',
  summary: 'Recursive $ref lookup',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(NodeSchema) } } },
  },
})

export const getAnythingReturnsAsJsonButIsActuallyStringRoute = createRoute({
  method: 'get',
  path: '/anything/returns-as-json-but-is-actually-string',
  summary: 'Returns as JSON, but is actually a simple string',
  description:
    "This example is to ensure that we don't hard fail out on attempting to parse a non-JSON string as JSON, and instead fallback to the standard syntax highlighter.",
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.uuid(),
          examples: { response: { value: '96fab4bb-ff68-43e2-94d8-7046f3173d9c' } },
        },
      },
    },
  },
})

export const getMultipleResponsesObjectRoute = createRoute({
  method: 'get',
  path: '/multiple-responses/object',
  summary: 'Object',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ hello: z.string().exactOptional(), there: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'A 400 error response',
      content: {
        'application/json': {
          schema: z
            .object({ obi: z.string().exactOptional(), wan: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
