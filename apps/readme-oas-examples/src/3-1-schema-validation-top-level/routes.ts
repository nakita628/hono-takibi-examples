import { createRoute, z } from '@hono/zod-openapi'

export const getAnythingNumbersRoute = createRoute({
  method: 'get',
  path: '/anything/numbers',
  summary: 'Number validation',
  description:
    'This operation has a top-level `jsonSchemaDialect` set to abide by [JSON Schema Draft 04](https://json-schema.org/specification-links.html#draft-4).',
  request: {
    query: z.object({
      'id-exclusive-required': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().gt(10).lt(20).multipleOf(2),
        )
        .default(12)
        .openapi({
          param: {
            in: 'query',
            name: 'id-exclusive-required',
            schema: {
              $schema: 'https://json-schema.org/draft/2020-12/schema#',
              type: 'number',
              exclusiveMinimum: 10,
              exclusiveMaximum: 20,
              multipleOf: 2,
              default: 12,
              example: 14,
            },
            required: true,
          },
          $schema: 'https://json-schema.org/draft/2020-12/schema#',
          example: 14,
        }),
      'id-exclusive-required-schema-v4': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().gt(10).lt(20).multipleOf(2),
        )
        .default(12)
        .openapi({
          param: {
            in: 'query',
            name: 'id-exclusive-required-schema-v4',
            schema: {
              type: 'number',
              minimum: 10,
              maximum: 20,
              exclusiveMinimum: true,
              exclusiveMaximum: true,
              multipleOf: 2,
              default: 12,
              example: 14,
            },
            required: true,
          },
          example: 14,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})
