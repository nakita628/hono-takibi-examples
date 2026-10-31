import { createRoute, z } from '@hono/zod-openapi'

const CategorySchema = z
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
      .openapi({ type: 'integer', format: 'int64', deprecated: true }),
    name: z.string().exactOptional().openapi({ deprecated: true }),
  })
  .openapi({ required: [] })
  .openapi('Category')

const TagSchema = z
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
  })
  .openapi({ required: [] })
  .openapi('Tag')

const TagDeprecatedSchema = z
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
      .openapi({ type: 'integer', format: 'int64', deprecated: true }),
    name: z.string().exactOptional().openapi({ deprecated: true }),
  })
  .openapi({ required: [] })
  .openapi('TagDeprecated')

const StatusSchema = z
  .enum(['available', 'pending', 'sold'])
  .openapi({ deprecated: true, description: 'pet status in the store' })
  .openapi('Status')

const StatusWrapperSchema = z
  .object({ status: StatusSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('StatusWrapper')

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
      .default(40n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 40,
        description:
          'This `requestBody` schema property is marked as deprecated.\n\nhttps://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schema-object',
        deprecated: true,
        example: 25,
      }),
    category: CategorySchema.exactOptional(),
    category_alt: CategorySchema.exactOptional().openapi({
      description:
        'Though this loads a `$ref` to the `Category` schema, and that contains deprecated properties within itself, this `category_alt` parameter is also deprecated.',
      deprecated: true,
    }),
    name: z.string().openapi({ deprecated: true, example: 'doggie' }),
    photoUrls: z
      .array(z.string().openapi({ deprecated: true, example: 'https://example.com/photo.png' }))
      .openapi({ deprecated: true }),
    tags: z.array(TagSchema).exactOptional().openapi({ deprecated: true }),
    tags_alt: z
      .array(TagDeprecatedSchema)
      .exactOptional()
      .openapi({
        description:
          'Unlike the `tags` parameter, this is **not** deprecated, but the contents within itself are.',
      }),
    status: StatusSchema.exactOptional(),
    polymorphism: z
      .object({
        oneOf: z
          .xor([
            StatusWrapperSchema.openapi({ title: 'option 1' }),
            StatusWrapperSchema.openapi({ title: 'option 2' }),
          ])
          .exactOptional()
          .openapi({
            description: "This is a `oneOf` that's marked as deprecated.",
            deprecated: true,
          }),
        allOf: StatusWrapperSchema.openapi({ title: 'option 1' })
          .and(StatusWrapperSchema.openapi({ title: 'option 2' }))
          .exactOptional()
          .openapi({
            description: "This is a `allOf` that's marked as deprecated.",
            deprecated: true,
          }),
        anyOf: z
          .union([
            StatusWrapperSchema.openapi({ title: 'option 1' }),
            StatusWrapperSchema.openapi({ title: 'option 2' }),
          ])
          .exactOptional()
          .openapi({
            description: "This is a `anyOf` that's marked as deprecated.",
            deprecated: true,
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['name', 'photoUrls'] })
  .openapi('Pet')

export const postAnythingRoute = createRoute({
  method: 'post',
  path: '/anything',
  description:
    'https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject',
  request: {
    query: z.object({
      filter: z
        .enum(['active', 'inactive'])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'This query parameter is explicitly **not** deprecated.',
            explode: true,
            schema: { type: 'string', enum: ['active', 'inactive'] },
            required: false,
          },
        }),
      filterLegacy: z
        .enum(['active', 'inactive'])
        .exactOptional()
        .openapi({
          param: {
            name: 'filterLegacy',
            in: 'query',
            deprecated: true,
            description:
              'This query parameter is deprecated.\n\nhttps://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object',
            explode: true,
            schema: { type: 'string', enum: ['active', 'inactive'] },
            required: false,
          },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .enum(['available', 'pending', 'sold'])
              .default('available')
              .openapi({ deprecated: true }),
          ),
        )
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            deprecated: true,
            required: true,
            explode: true,
            schema: {
              type: 'array',
              items: {
                deprecated: true,
                type: 'string',
                enum: ['available', 'pending', 'sold'],
                default: 'available',
              },
            },
          },
        }),
    }),
    body: {
      description: 'Pet object that needs to be added to the store',
      content: { 'application/json': { schema: PetSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PetSchema) } },
    },
    400: { description: 'Invalid status value' },
  },
  deprecated: true,
})
