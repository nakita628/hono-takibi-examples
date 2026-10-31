import { createRoute, z } from '@hono/zod-openapi'

type CircularType = { string?: string; children?: CircularType[] }

const StringEnumSchema = z.enum(['available', 'pending', 'sold']).openapi('StringEnum')

const CircularSchema: z.ZodType<CircularType> = z
  .lazy(() =>
    z
      .object({
        string: z.string().exactOptional(),
        children: z.array(CircularSchema).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Circular')

export const putAnythingStringsRoute = createRoute({
  method: 'put',
  path: '/anything/strings',
  tags: ['Strings'],
  summary: '`format` data types',
  description:
    'Handling of `format` data types on `type: string` schemas.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)\n\n* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)',
  operationId: 'string_formatSupport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              binary: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
              'binary (with default)': z
                .file()
                .default('data:text/plain;name=file1.txt;base64,dGVzdDE=')
                .openapi({ type: 'string', format: 'binary' }),
              blob: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Strings with `format: blob` should render a `<textarea>`.',
                  example: 'This is some example content for this parameter.',
                }),
              date: z.iso.date().exactOptional(),
              'date (with pattern)': z.iso
                .date()
                .regex(/(\d{4})-(\d{2})-(\d{2})/)
                .exactOptional()
                .openapi({
                  description: 'This accepts a pattern of matching `(\\d{4})-(\\d{2})-(\\d{2})`',
                }),
              'date-time': z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    "Unsupported due to the varying ways that `date-time` is utilized in API definitions for representing dates, the [lack of wide browser support for the input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Browser_compatibility), and that it's not [RFC 3339](https://tools.ietf.org/html/rfc3339) compliant.",
                }),
              html: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Strings with `format: html` should render a `<textarea>`.',
                }),
              json: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This is a special ReadMe data type to render a `<textarea>` to be parsed as JSON',
                }),
              string: z.string().exactOptional(),
              password: z.string().exactOptional(),
              'password (minLength: 5, maxLength: 20)': z
                .string()
                .min(5)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'This `format: password` input has a `minLength` and `maxLength` configured.',
                }),
              url: z.url().exactOptional(),
              'unknown-format': z.string().exactOptional(),
            })
            .openapi({ required: ['binary (with default)'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingStringsRoute = createRoute({
  method: 'post',
  path: '/anything/strings',
  tags: ['Strings'],
  summary: 'String support',
  description:
    'Support and handling of `type: string` schemas.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)\n\n* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)',
  operationId: 'string_schemaSupport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              stock: z.string().exactOptional(),
              'description (markdown)': z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This is a string with a **markdown** description: [link](ref:action-object)',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ title: 'This string has a `title` property.' }),
              required: z.string().openapi({ description: 'This string should be required.' }),
              default: z
                .string()
                .default('default value')
                .exactOptional()
                .openapi({ description: 'This string has a `default` of `default value`.' }),
              'default (null)': z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'This string has a `default` of `null`.' }),
              'default (required)': z
                .string()
                .default('default value')
                .openapi({
                  description: 'This string has a `default` of `default value` and is required.',
                }),
              nullable: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'This string has is `nullable`.' }),
              enum: z.enum(['available', 'pending', 'sold']).exactOptional(),
              'enum (with default)': z
                .enum(['available', 'pending', 'sold'])
                .default('available')
                .exactOptional()
                .openapi({ description: 'This enum has a `default` of `available`.' }),
              'enum (with default and required)': z
                .enum(['available', 'pending', 'sold'])
                .default('available')
                .exactOptional()
                .openapi({
                  description: 'This enum has a `default` of `available` and is required.',
                }),
              'enum (with empty option)': z
                .enum(['', 'available', 'pending', 'sold'])
                .exactOptional()
                .openapi({
                  description:
                    'This enum has a an empty string (`""`) as one of its available options.',
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
            .openapi({ required: ['required', 'default (required)'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingStringsTopLevelPayloadsRoute = createRoute({
  method: 'post',
  path: '/anything/strings/top-level-payloads',
  tags: ['Strings'],
  summary: 'Top-level payloads',
  description:
    "Handling of a `requestBody` payload that's a single `type: string`.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)\n\n* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)",
  operationId: 'string_topLevel',
  request: { body: { content: { 'application/json': { schema: z.string() } } } },
  responses: { 200: { description: 'OK' } },
})

export const patchAnythingStringsTopLevelPayloadsRoute = createRoute({
  method: 'patch',
  path: '/anything/strings/top-level-payloads',
  tags: ['Strings'],
  summary: 'Top-level payloads (JSON)',
  description:
    "Handling of a `requestBody` payload that's a single `type: string` but `format: json`.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)\n\n* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)",
  operationId: 'string_topLevelJSON',
  request: { body: { content: { 'application/json': { schema: z.string() } } } },
  responses: { 200: { description: 'OK' } },
})

export const putAnythingNumbersRoute = createRoute({
  method: 'put',
  path: '/anything/numbers',
  tags: ['Numbers'],
  summary: '`format` data types',
  description:
    'Handling `format` data types on `type: integer` and `type: number` schemas.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)\n\n* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)',
  operationId: 'number_formatSupport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'integer (format: int8)': z.int().exactOptional(),
              'integer (format: uint8)': z.int().exactOptional(),
              'integer (format: int16)': z.int().exactOptional(),
              'integer (format: uint16)': z.int().exactOptional(),
              'integer (format: int32)': z.int32().exactOptional(),
              'integer (format: int32, multipleOf: 2)': z
                .int32()
                .multipleOf(2)
                .exactOptional()
                .openapi({
                  description:
                    'This `integer` input has `multipleOf: 2` set on itself to control the increment/decrement value set.',
                }),
              'integer (format: uint32)': z.uint32().exactOptional(),
              'integer (format: int64)': z
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
              'integer (format: uint64)': z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.uint64(),
                )
                .exactOptional()
                .openapi({ type: 'integer', format: 'uint64' }),
              'number (format: float)': z.float32().exactOptional(),
              'number (format: double)': z.float64().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingNumbersRoute = createRoute({
  method: 'post',
  path: '/anything/numbers',
  tags: ['Numbers'],
  summary: 'Number support',
  description:
    'Support and handling of `type: integer` and `type: number` schemas.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)\n\n* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)',
  operationId: 'number_schemaSupport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'integer (stock)': z.int().exactOptional(),
              'integer (markdown description)': z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'This is an `integer` with a **markdown** description: [link](ref:action-object)',
                }),
              'integer (title)': z
                .int()
                .exactOptional()
                .openapi({ title: 'This integer has a `title` property.' }),
              'integer (required)': z
                .int()
                .openapi({ description: 'This integer should be required.' }),
              'integer (default)': z
                .int()
                .default(1234)
                .exactOptional()
                .openapi({ description: 'This integer has a `default` of `1234`.' }),
              'integer (default null)': z
                .int()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'This integer has a `default` of `null`.' }),
              'integer (default, required)': z
                .int()
                .default(1234)
                .openapi({
                  description: 'This integer has a `default` of `1234` and is required.',
                }),
              'integer (nullable)': z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'This integer is `nullable`.' }),
              'integer (minimum / maximum)': z
                .int()
                .min(100)
                .max(999)
                .exactOptional()
                .openapi({
                  description: 'This integer has a `minimum` of `100` and `maximum` of `999`.',
                }),
              'number (stock)': z.number().exactOptional(),
              'number (markdown description)': z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'This is a `number` with a **markdown** description: [link](ref:action-object)',
                }),
              'number (title)': z
                .number()
                .exactOptional()
                .openapi({ title: 'This number has a `title` property.' }),
              'number (required)': z
                .number()
                .openapi({ description: 'This number should be required.' }),
              'number (default)': z
                .number()
                .default(12.34)
                .exactOptional()
                .openapi({ description: 'This number has a `default` of `12.34`.' }),
              'number (default null)': z
                .number()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'This number has a `default` of `null`.' }),
              'number (default, required)': z
                .number()
                .default(12.34)
                .openapi({
                  description: 'This number has a `default` of `12.34` and is required.',
                }),
              'number (nullable)': z
                .number()
                .nullable()
                .exactOptional()
                .openapi({ description: 'This number is `nullable`..' }),
            })
            .openapi({
              required: [
                'integer (required)',
                'integer (default, required)',
                'number (required)',
                'number (default, required)',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const patchAnythingNumbersRoute = createRoute({
  method: 'patch',
  path: '/anything/numbers',
  tags: ['Numbers'],
  summary: 'Top-level payloads',
  description:
    "Handling of a `requestBody` payload that's a single `type: integer`.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)\n\n* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)",
  operationId: 'number_topLevel',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingBooleansRoute = createRoute({
  method: 'post',
  path: '/anything/booleans',
  tags: ['Booleans'],
  summary: 'Boolean support',
  description:
    'Support and handling of `type: boolean` schemas.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)\n\n* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)',
  operationId: 'boolean_schemaSupport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              stock: z.boolean().exactOptional(),
              'description (markdown)': z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'This is a `boolean` with a **markdown** description: [link](ref:action-object)',
                }),
              title: z
                .boolean()
                .exactOptional()
                .openapi({ title: 'This boolean has a `title` property.' }),
              required: z.boolean().openapi({ description: 'This boolean should be required.' }),
              default: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'This boolean has a `default` of `false`.' }),
              'default (required)': z
                .boolean()
                .default(false)
                .openapi({ description: 'This boolean has a `default` of `false`.' }),
              'inferred from enum': z
                .union([z.literal(true), z.literal(false)])
                .exactOptional()
                .openapi({
                  description:
                    'Though this is missing a `type` declaration it should be treated as `boolean` because it contains an enum of `true` and `false`.',
                }),
            })
            .openapi({ required: ['required', 'default (required)'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const patchAnythingBooleansRoute = createRoute({
  method: 'patch',
  path: '/anything/booleans',
  tags: ['Booleans'],
  summary: 'Top-level payloads',
  description:
    "Handling of a `requestBody` payload that's a single `type: boolean`.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)\n\n* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)",
  operationId: 'boolean_topLevel',
  request: { body: { content: { 'application/json': { schema: z.boolean() } } } },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingArraysRoute = createRoute({
  method: 'post',
  path: '/anything/arrays',
  tags: ['Arrays'],
  summary: 'Array support',
  description:
    'Support and handling of `type: array` schemas.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)\n\n* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)',
  operationId: 'array_schemaSupport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              stock: z.array(z.any()).exactOptional(),
              'with markdown description': z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'This is an `array` with a **markdown** description: [link](ref:action-object)',
                }),
              'with title': z
                .array(z.any())
                .exactOptional()
                .openapi({ title: 'This array has a `title` property.' }),
              'array<any>': z.array(z.any()).exactOptional(),
              'array<any> (but no `items` property)': z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Techncally this is a malformed schema, but we support it (for legacy reasons) and repair it to have `items: {}` when we generate JSON Schema for the form.\n\nThough its supported, not all OpenAPI validators allow it though so our support may regress at some point in the future.',
                }),
              'array<string>': z.array(z.string()).exactOptional(),
              'array<string> (with overall `null` default)': z
                .array(z.string())
                .nullable()
                .default(null)
                .exactOptional(),
              'array<string> (loaded via a $ref)': z.array(StringEnumSchema).exactOptional(),
              'array<integer>': z
                .array(
                  z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64(),
                    )
                    .openapi({ type: 'integer', format: 'int64' }),
                )
                .exactOptional(),
              'array<number>': z.array(z.float32()).exactOptional(),
              'array<boolean>': z.array(z.boolean()).exactOptional(),
              'array<object>': z
                .array(
                  z
                    .object({
                      string: z.string().exactOptional(),
                      integer: z.int().exactOptional(),
                      number: z.number().exactOptional(),
                      boolean: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              'array<object> (additionalProperties)': z.array(z.looseObject({})).exactOptional(),
              'array<array<object>>': z
                .array(
                  z.array(
                    z.object({ string: z.string().exactOptional() }).openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingArraysTopLevelPayloadsRoute = createRoute({
  method: 'post',
  path: '/anything/arrays/top-level-payloads',
  tags: ['Arrays'],
  summary: 'Top-level payloads (objects)',
  description:
    "Handling of a `requestBody` payload that's a `type: array` composed of objects.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)\n\n* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)",
  operationId: 'array_topLevelObjects',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                string: z.string().exactOptional(),
                integer: z.int().exactOptional(),
                number: z.number().exactOptional(),
                boolean: z.boolean().exactOptional(),
                array: z.array(z.any()).exactOptional(),
                object: z.looseObject({}).exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const patchAnythingArraysTopLevelPayloadsRoute = createRoute({
  method: 'patch',
  path: '/anything/arrays/top-level-payloads',
  tags: ['Arrays'],
  summary: 'Top-level payloads (primitives)',
  description:
    "Handling of a `requestBody` payload that's a `type: array` composed of primitives.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)\n\n* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)",
  operationId: 'array_topLevelPrimitives',
  request: { body: { content: { 'application/json': { schema: z.array(z.string()) } } } },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingObjectsRoute = createRoute({
  method: 'post',
  path: '/anything/objects',
  tags: ['Objects'],
  summary: 'Object support',
  description:
    'Support and handling of `type: object` schemas.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)\n\n* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)',
  operationId: 'object_schemaSupport',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              object: z
                .object({
                  string: z.string().exactOptional(),
                  integer: z.int().exactOptional(),
                  number: z.number().exactOptional(),
                  object: z
                    .object({ string: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  array: z.array(z.string()).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              'object (with `title`)': z
                .object({
                  string: z.string().exactOptional(),
                  integer: z.int().exactOptional(),
                  number: z.number().exactOptional(),
                  object: z
                    .object({ string: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  array: z.array(z.string()).exactOptional(),
                })
                .exactOptional()
                .openapi({ title: 'This object has a `title` property.', required: [] }),
              'object (without an explicit `type`)': z
                .object({
                  property1: z
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
                  property2: z
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
                })
                .exactOptional()
                .openapi({
                  description:
                    'Though this object is missing an explicit `type: object` property it should still be recognized as an object because it has `properties`.',
                  required: [],
                }),
              'object (additionalProperties)': z.looseObject({}).exactOptional(),
              'object (without `properties`)': z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Because this object is missing a `properties` declaration we should treat it as if `additionalProperties: true` were present on it so the enduser can still use it with the form.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingCircularRoute = createRoute({
  method: 'post',
  path: '/anything/circular',
  tags: ['Circular references'],
  summary: 'Nested circular $ref',
  description:
    'Handling of a nested `$ref` that recursively references itself.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#referenceObject)\n\n* [3.1.0 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#referenceObject)',
  operationId: 'circular_handling',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ circular: CircularSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const patchAnythingCircularRoute = createRoute({
  method: 'patch',
  path: '/anything/circular',
  tags: ['Circular references'],
  summary: 'Top-level circular $ref',
  description:
    'Handling of a top-level request body `$ref` that recursively references itself.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#referenceObject)\n\n* [3.1.0 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#referenceObject)',
  operationId: 'circular_topLevel',
  request: { body: { content: { 'application/json': { schema: CircularSchema } } } },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingRawBodyTopLevelPayloadsRoute = createRoute({
  method: 'post',
  path: '/anything/raw_body/top-level-payloads',
  tags: ['ReadMe-flavors'],
  summary: 'Top-level RAW_BODY (string)',
  description:
    "This is a special value on ReadMe to denote a top level property. This can be done better using JSON Schema, but from ReadMe's dash, this is the only way to do it.\n\n<https://docs.readme.com/docs/raw-body-content>",
  operationId: 'raw_body_topLevel',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ RAW_BODY: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const patchAnythingRawBodyTopLevelPayloadsRoute = createRoute({
  method: 'patch',
  path: '/anything/raw_body/top-level-payloads',
  tags: ['ReadMe-flavors'],
  summary: 'Top-level RAW_BODY (JSON)',
  description:
    "This is a special value on ReadMe to denote a top level property. This can be done better using JSON Schema, but from ReadMe's dash, this is the only way to do it.\n\n<https://docs.readme.com/docs/raw-body-content>",
  operationId: 'raw_body_topLevelJSON',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ RAW_BODY: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingQuirksRoute = createRoute({
  method: 'post',
  path: '/anything/quirks',
  tags: ['Quirks'],
  summary: 'Missing schema type',
  description:
    'Handling cases for when `type` is missing from a schema.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)\n\n* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)',
  operationId: 'quirks_missingType',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'missing type': z
                .any()
                .default('default value')
                .exactOptional()
                .openapi({
                  description:
                    'Though this request body property is missing a `type` declaration we should stil render a `string` input box so that the user can interact with it.',
                }),
              'missing type (on completely empty schema)': z.any().exactOptional(),
              'implicit array': z
                .unknown()
                .superRefine((val, ctx) => {
                  if (Array.isArray(val)) {
                    {
                      const Schema = z.int()
                      for (let i = 0; i < val.length; i++) {
                        if (!Schema.safeParse(val[i]).success) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    }
                  }
                })
                .exactOptional()
                .openapi({
                  description:
                    "This array property is missing an explicit `type: array` but since it has an `items` declaration we're implicitly treating it as an array.",
                }),
              'implicit object': z
                .object({ name: z.string().default('buster').exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    "This object property is missing an explicit `type: object` but since it has an `properties` declaration we're implicitly treating it as an object.",
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const putAnythingQuirksPolymorphismRoute = createRoute({
  method: 'put',
  path: '/anything/quirks/polymorphism',
  tags: ['Quirks'],
  summary: 'Incompatible allOf schemas on a root requestBody',
  description:
    "When an `allOf` sits at the top of a request body schema and it cannot be merged, we're unable to render out anything for an input because there's no usable schema for us.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)\n\n* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)",
  operationId: 'quirks_entirelyIncompatibleAllOf',
  request: {
    body: { content: { 'application/json': { schema: z.string().and(z.int()) } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingQuirksPolymorphismRoute = createRoute({
  method: 'post',
  path: '/anything/quirks/polymorphism',
  tags: ['Quirks'],
  summary: 'Incompatible nested allOf schemas',
  description:
    'Handling cases for when a nested `allOf` cannot be merged together.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)\n\n* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)',
  operationId: 'quirks_incompatibleNestedAllOf',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              incompatible: z
                .string()
                .and(z.int())
                .exactOptional()
                .openapi({
                  description:
                    "This property consists of an `allOf` of a `string` and an `integer` schema. Since these two schemas are incompatible and we're unable to merge them per the `allOf` rules, we instead eliminate the `allOf` and render out a `string` instead.\n\nThis is obviously less than ideal but it assures that the user can still interact with the property.",
                }),
              compatible: z
                .object({ name: z.string().exactOptional() })
                .openapi({ required: [] })
                .and(
                  z
                    .object({ name: z.any().exactOptional().openapi({ example: 'buster' }) })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Unlike the `incompatible` property above this `allOf` consists of two objects that **can** be merged.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const patchAnythingQuirksPolymorphismRoute = createRoute({
  method: 'patch',
  path: '/anything/quirks/polymorphism',
  tags: ['Quirks'],
  summary: 'Incompatible allOf schemas on a root requestBody (with other schema properties)',
  description:
    "Like `quirks_entirelyIncompatibleAllOf`, when we're to merge an `allOf` together we eliminate it, however this schema here has additional properties (`description`) alongside that `allOf` so it's not a wholly empty schema and we can use it. Unfortunately since we don't have any of the real data for the request body to use we treat this as a string input with a `format` of `json` so that the user can input a raw JSON input to make their request with.\n\nUnfortunately in this case we don't support `description` on the root schema so it won't show up, but a large input box still will for the user. Obviously all of this less than ideal as we're losing request body schema data but since the `allOf` present is incompatible it's unusable and this is the best we can do under the circumstances.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)\n\n* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)",
  operationId: 'quirks_partiallyUsableIncompatibleAllOf',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.string().and(z.int()).openapi({ description: 'I am a description' }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})
