import { createRoute, z } from '@hono/zod-openapi'

export const getAnythingStringsRoute = createRoute({
  method: 'get',
  path: '/anything/strings',
  tags: ['Enums'],
  summary: 'Number enum support',
  description:
    'Support and handling of enums on `type: number` schemas.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)\n\n* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)',
  operationId: 'number_enumSupport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enum: z
                .union([z.literal(0), z.literal(1), z.literal(2)])
                .exactOptional()
                .openapi({ description: "A regular ol' enum" }),
              'enum *required': z
                .union([z.literal(0), z.literal(1), z.literal(2)])
                .openapi({ description: "A regular ol' enum" }),
              'enum (with default)': z
                .union([z.literal(0), z.literal(1), z.literal(2)])
                .default(1)
                .exactOptional()
                .openapi({ description: 'This enum has a `default` of `1`.' }),
              'enum (with default) *required': z
                .union([z.literal(0), z.literal(1), z.literal(2)])
                .default(2)
                .openapi({
                  description:
                    'A required enum with a default (if a field is required it should probably always have a default, eh?)',
                }),
              'enum (with example)': z
                .union([z.literal(0), z.literal(1), z.literal(2)])
                .exactOptional()
                .openapi({ description: 'This enum has a `example` of `1`.', example: 1 }),
              'enum (with example) *required': z
                .union([z.literal(0), z.literal(1), z.literal(2)])
                .openapi({
                  description: 'This enum has a `example` of `1` and is required.',
                  example: 1,
                }),
              'enum (with empty option)': z
                .union([z.literal(''), z.literal(0), z.literal(1), z.literal(2)])
                .exactOptional()
                .openapi({
                  description:
                    'This enum has an empty string (`""`) as one of its available options.',
                }),
              'enum (with duplicate options)': z
                .union([z.literal(''), z.literal(''), z.literal(0), z.literal(2), z.literal(2)])
                .exactOptional()
                .openapi({
                  description:
                    'This enum has multiple duplicate options, they should get deduped in the UI',
                }),
            })
            .openapi({
              required: [
                'enum *required',
                'enum (with default) *required',
                'enum (with example) *required',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const putAnythingStringsRoute = createRoute({
  method: 'put',
  path: '/anything/strings',
  tags: ['Enums'],
  summary: 'Boolean enum support',
  description:
    'Support and handling of enums on `type: boolean` schemas.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)\n\n* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)',
  operationId: 'boolean_enumSupport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enum: z
                .union([z.literal(true), z.literal(false)])
                .exactOptional()
                .openapi({ description: "A regular ol' enum" }),
              'enum *required': z
                .union([z.literal(true), z.literal(false)])
                .openapi({ description: "A regular ol' enum" }),
              'enum (with default)': z
                .union([z.literal(true), z.literal(false)])
                .default(false)
                .exactOptional()
                .openapi({ description: 'This enum has a `default` of `false`.' }),
              'enum (with default) *required': z
                .union([z.literal(true), z.literal(false)])
                .default(true)
                .openapi({
                  description:
                    'A required enum with a default (if a field is required it should probably always have a default, eh?)',
                }),
            })
            .openapi({
              required: [
                'enum *required',
                'enum (with default) *required',
                'enum (with example) *required',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingStringsRoute = createRoute({
  method: 'post',
  path: '/anything/strings',
  tags: ['Enums'],
  summary: 'String enum support',
  description:
    'Support and handling of enums on `type: string` schemas.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)\n\n* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)',
  operationId: 'string_enumSupport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enum: z
                .enum(['available', 'pending', 'sold'])
                .exactOptional()
                .openapi({ description: "A regular ol' enum" }),
              'enum *required': z
                .enum(['available', 'pending', 'sold'])
                .openapi({ description: "A regular ol' enum" }),
              'enum (with default)': z
                .enum(['available', 'pending', 'sold'])
                .default('available')
                .exactOptional()
                .openapi({ description: 'This enum has a `default` of `available`.' }),
              'enum (with default) *required': z
                .enum(['available', 'pending', 'sold'])
                .default('available')
                .openapi({
                  description:
                    'A required enum with a default (if a field is required it should probably always have a default, eh?)',
                }),
              'enum (with example)': z
                .enum(['available', 'pending', 'sold'])
                .exactOptional()
                .openapi({
                  description: 'This enum has a `example` of `pending`.',
                  example: 'pending',
                }),
              'enum (with example) *required': z
                .enum(['available', 'pending', 'sold'])
                .openapi({
                  description: 'This enum has a `example` of `pending` and is required.',
                  example: 'pending',
                }),
              'enum (with non-value example)': z
                .enum(['available', 'pending', 'sold'])
                .exactOptional()
                .openapi({
                  description:
                    "This enum has an example that isn't part of the enum, so the option does not get hidden",
                  example: 'Choose...',
                }),
              'enum (with non-value example) *required': z
                .enum(['available', 'pending', 'sold'])
                .openapi({
                  description:
                    "This enum has an example that isn't part of the enum, so the option does not get hidden",
                  example: 'Choose...',
                }),
              'enum (with empty option)': z
                .enum(['', 'available', 'pending', 'sold'])
                .exactOptional()
                .openapi({
                  description:
                    'This enum has an empty string (`""`) as one of its available options.',
                }),
              'enum (with duplicate options)': z
                .enum(['', '', 'available', 'available'])
                .exactOptional()
                .openapi({
                  description:
                    'This enum has multiple duplicate options, they should get deduped in the UI',
                }),
              'enum (with empty option and empty default)': z
                .literal('')
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'This enum has a an empty string (`""`) as its only available option, and that same value is set as its `default`.',
                }),
            })
            .openapi({
              required: [
                'enum *required',
                'enum (with default) *required',
                'enum (with example) *required',
                'enum (with non-value example) *required',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})
