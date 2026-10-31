import { createRoute, z } from '@hono/zod-openapi'

const RefSchema = z.int().openapi('Ref')

const RefWithRefSchema = z
  .object({
    code: z.int().exactOptional(),
    text: z.string().exactOptional(),
    array: z.array(RefSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RefWithRef')

export const postPostRoute = createRoute({
  method: 'post',
  path: '/post',
  summary: 'Should allow additionalProperties in JSON schema',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'object with `additionalProperties: true`': z.looseObject({}).exactOptional(),
              'object with `additionalProperties: false` and no other properties': z
                .strictObject({})
                .exactOptional(),
              'object with `additionalProperties: { type: integer }`': z
                .record(z.string(), z.int())
                .exactOptional(),
              'object with `additionalProperties: { type: object, properties: ... }`': z
                .record(
                  z.string(),
                  z
                    .object({ code: z.int().exactOptional(), text: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              'object with `additionalProperties: { type: object, properties: ... }` and custom title':
                z
                  .record(
                    z.string(),
                    z
                      .object({ code: z.int().exactOptional(), text: z.string().exactOptional() })
                      .openapi({ title: 'This is a custom title', required: [] }),
                  )
                  .exactOptional(),
              'object with `additionalProperties: { type: array, items: { type: integer } }`': z
                .record(z.string(), z.array(z.int()))
                .exactOptional(),
              'object with `additionalProperties: $ref, simple`': z
                .record(z.string(), RefSchema)
                .exactOptional(),
              'object with `additionalProperties: $ref, with $ref`': z
                .record(z.string(), RefWithRefSchema)
                .exactOptional(),
              'object with `additionalPropeties` within an allOf': z
                .strictObject({ primitiveProperty: z.string().exactOptional() })
                .openapi({ required: [] })
                .and(
                  z
                    .strictObject({ alt_primitiveProperty: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Technically this is not valid to the spec. The `additionalProperties` rejections should cancel out each others new field but we indicate we want this to work by enabling [json-schema-merge-allof](https://npm.im/json-schema-merge-allof)'s `ignoreAdditionalProperties` option",
                }),
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
            .object({
              'object with `additionalProperties: true`': z.looseObject({}).exactOptional(),
              'object with `additionalProperties: { type: integer }`': z
                .record(z.string(), z.int())
                .exactOptional(),
              'object with `additionalProperties: { type: object, properties: ... }`': z
                .record(
                  z.string(),
                  z
                    .object({ code: z.int().exactOptional(), text: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              'object with `additionalProperties: { type: object, properties: ... }` and custom title':
                z
                  .record(
                    z.string(),
                    z
                      .object({ code: z.int().exactOptional(), text: z.string().exactOptional() })
                      .openapi({ title: 'This is a custom title', required: [] }),
                  )
                  .exactOptional(),
              'object with `additionalProperties: { type: array, items: { type: integer } }`': z
                .record(z.string(), z.array(z.int()))
                .exactOptional(),
              'object with `additionalProperties: $ref, simple`': z
                .record(z.string(), RefSchema)
                .exactOptional(),
              'object with `additionalProperties: $ref, with $ref`': z
                .record(z.string(), RefWithRefSchema)
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
