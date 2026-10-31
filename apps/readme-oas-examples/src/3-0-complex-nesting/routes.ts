import { createRoute, z } from '@hono/zod-openapi'

const FlatObjectSchema = z
  .object({
    string: z.string().exactOptional(),
    boolean: z.boolean().exactOptional(),
    number: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FlatObject')

const ArrayOfPrimitivesSchema = z.array(z.string()).openapi('ArrayOfPrimitives')

const ArrayOfFlatObjectsSchema = z.array(FlatObjectSchema).openapi('ArrayOfFlatObjects')

const ObjectOfObjectsAndArraysSchema = z
  .object({
    singleObject: FlatObjectSchema.exactOptional().openapi({ description: 'Simple flat object' }),
    arrayOfPrimitives: ArrayOfPrimitivesSchema.exactOptional().openapi({
      description: 'Array of primitives',
    }),
    arrayOfObjects: ArrayOfFlatObjectsSchema.exactOptional().openapi({
      description: 'Array of objects',
    }),
    primitive: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ObjectOfObjectsAndArrays')

const ArrayOfObjectsOfObjectsAndArraysSchema = z
  .array(ObjectOfObjectsAndArraysSchema)
  .openapi('ArrayOfObjectsOfObjectsAndArrays')

const ObjectWithArraySchema = z
  .object({
    Array: z
      .array(
        z
          .object({
            inputs: z
              .array(
                z
                  .object({
                    'input 1': z.string().exactOptional(),
                    'input 2': z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            nums: z
              .array(z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]))
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({
    title: 'Metadata Object',
    description: 'Metadata for defining additional objects related to your API',
    required: [],
  })
  .openapi('ObjectWithArray')

const ObjectOfAdditionalPropertiesObjectPolymorphismSchema = z
  .record(
    z.string(),
    z
      .object({
        primitive: z.string().exactOptional(),
        boolean: z.boolean().exactOptional(),
        metadata: z
          .xor([
            z.object({}).openapi({ title: ' ' }),
            FlatObjectSchema.openapi({ title: 'Flat object option 1' }),
            FlatObjectSchema.openapi({ title: 'Flat object option 2' }),
            FlatObjectSchema.openapi({ title: 'Flat object option 3' }),
            ObjectWithArraySchema.openapi({ title: 'Object with depth' }),
          ])
          .nullable()
          .exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ObjectOfAdditionalPropertiesObjectPolymorphism')

const ObjectOfEverythingSchema = z
  .object({
    objectOfObjectsAndArrays: ObjectOfObjectsAndArraysSchema.exactOptional().openapi({
      description: 'Object containing objects and arrays',
    }),
    arrayOfObjectsOfObjectsAndArrays:
      ArrayOfObjectsOfObjectsAndArraysSchema.exactOptional().openapi({
        description: 'Array of objects (containing objects and arrays)',
      }),
    objectOfAdditionalProperties:
      ObjectOfAdditionalPropertiesObjectPolymorphismSchema.exactOptional().openapi({
        description:
          "Object containing an `additionalProperties` declaration that's comprised of a polymorphic `oneOf`.",
      }),
    string: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ObjectOfEverything')

const MultischemaOfEverythingSchema = z
  .xor([
    z.xor([
      ArrayOfObjectsOfObjectsAndArraysSchema,
      z
        .object({
          objEverything: ObjectOfEverythingSchema.exactOptional(),
          flatObj: FlatObjectSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    ]),
    ArrayOfPrimitivesSchema,
    ArrayOfFlatObjectsSchema,
    FlatObjectSchema,
    ObjectOfEverythingSchema,
  ])
  .openapi('MultischemaOfEverything')

export const putAnythingTopLevelArrayRoute = createRoute({
  method: 'put',
  path: '/anything/top-level-array',
  summary: 'Array of Everything',
  description:
    'This payload is an array containing a complex payload of arrays, objects, and primitives.',
  request: {
    body: { content: { 'application/json': { schema: z.array(ObjectOfEverythingSchema) } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ObjectOfEverythingSchema) } },
    },
  },
})

export const postAnythingTopLevelArrayRoute = createRoute({
  method: 'post',
  path: '/anything/top-level-array',
  summary: 'Simple Array',
  description: 'This payload is an array containing a simple flat object.',
  request: { body: { content: { 'application/json': { schema: ArrayOfFlatObjectsSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ArrayOfFlatObjectsSchema } },
    },
  },
})

export const postAnythingTopLevelObjectSimpleRoute = createRoute({
  method: 'post',
  path: '/anything/top-level-object/simple',
  summary: 'Simple Object',
  description: 'This payload is an object comprised of simple flat objects.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              nestedObject_1: FlatObjectSchema.exactOptional(),
              nestedObject_2: FlatObjectSchema.exactOptional(),
              nestedObject_3: FlatObjectSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ nestedObject: FlatObjectSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postTopLevelObjectOfEverythingRoute = createRoute({
  method: 'post',
  path: '/top-level-object/of-everything',
  summary: 'Object of Everything',
  request: { body: { content: { 'application/json': { schema: ObjectOfEverythingSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ObjectOfEverythingSchema } },
    },
  },
})

export const postMultischemaOfEverythingRoute = createRoute({
  method: 'post',
  path: '/multischema/of-everything',
  summary: 'Multischema of Everything',
  request: { body: { content: { 'application/json': { schema: MultischemaOfEverythingSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MultischemaOfEverythingSchema } },
    },
  },
})
