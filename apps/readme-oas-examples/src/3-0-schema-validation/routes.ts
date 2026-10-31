import { createRoute, z } from '@hono/zod-openapi'

export const getAnythingNumbersRoute = createRoute({
  method: 'get',
  path: '/anything/numbers',
  summary: 'Number validation',
  request: {
    query: z.object({
      'id-required': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(10).max(20).multipleOf(2),
        )
        .default(12)
        .openapi({
          param: {
            in: 'query',
            name: 'id-required',
            schema: {
              type: 'number',
              minimum: 10,
              maximum: 20,
              multipleOf: 2,
              default: 12,
              example: 14,
            },
            required: true,
          },
          example: 14,
        }),
      'id-optional': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(10).max(20).multipleOf(2),
        )
        .default(12)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id-optional',
            schema: {
              type: 'number',
              minimum: 10,
              maximum: 20,
              multipleOf: 2,
              default: 12,
              example: 14,
            },
            required: false,
          },
          example: 14,
        }),
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
      'id-exclusive-optional': z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id-exclusive-optional',
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
            required: false,
          },
          example: 14,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingStringsRoute = createRoute({
  method: 'get',
  path: '/anything/strings',
  summary: 'String validation',
  request: {
    query: z.object({
      'name-length-required': z
        .string()
        .min(10)
        .max(20)
        .default('this is a default')
        .openapi({
          param: {
            in: 'query',
            name: 'name-length-required',
            schema: {
              type: 'string',
              minLength: 10,
              maxLength: 20,
              default: 'this is a default',
              example: 'this is an example',
            },
            required: true,
          },
          example: 'this is an example',
        }),
      'name-length-optional': z
        .string()
        .min(10)
        .max(20)
        .default('this is a default')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name-length-optional',
            schema: {
              type: 'string',
              minLength: 10,
              maxLength: 20,
              default: 'this is a default',
              example: 'this is an example',
            },
            required: false,
          },
          example: 'this is an example',
        }),
      'name-pattern-required': z
        .string()
        .regex(/a\w+b/)
        .default('aDEFAULTb')
        .openapi({
          param: {
            in: 'query',
            name: 'name-pattern-required',
            schema: {
              type: 'string',
              pattern: 'a\\w+b',
              default: 'aDEFAULTb',
              example: 'aEXAMPLEb',
            },
            required: true,
          },
          example: 'aEXAMPLEb',
        }),
      'complex-pattern-required': z
        .string()
        .regex(
          /^(?:{[0-9a-fA-F]{4}(?:-?[0-9a-fA-F]{4}){7}}|[0-9a-fA-F]{4}(?:-?[0-9a-fA-F]{4}){7})$/,
        )
        .openapi({
          param: {
            in: 'query',
            name: 'complex-pattern-required',
            description:
              "OpenAPI 3.0.3, which defaults to JSON Schema v4, does not provide the unicode flag to the input tooltip regex validation. This means that the following regex should work. It won't work if unicode is enabled because it has unescaped brace literals ",
            schema: {
              type: 'string',
              pattern:
                '^(?:{[0-9a-fA-F]{4}(?:-?[0-9a-fA-F]{4}){7}}|[0-9a-fA-F]{4}(?:-?[0-9a-fA-F]{4}){7})$',
            },
            required: true,
          },
        }),
      'name-pattern-optional': z
        .string()
        .regex(/a\w+b/)
        .default('aDEFAULTb')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name-pattern-optional',
            schema: {
              type: 'string',
              pattern: 'a\\w+b',
              default: 'aDEFAULTb',
              example: 'aEXAMPLEb',
            },
            required: false,
          },
          example: 'aEXAMPLEb',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingJsonschemaFormatsRoute = createRoute({
  method: 'get',
  path: '/anything/jsonschema-formats',
  summary: 'Formats defined by JSON Schema',
  request: {
    query: z.object({
      'date-time': z.iso
        .datetime({ offset: true })
        .default('1985-04-12T23:20:50.52Z')
        .openapi({
          param: {
            in: 'query',
            name: 'date-time',
            schema: {
              type: 'string',
              format: 'date-time',
              default: '1985-04-12T23:20:50.52Z',
              example: '1996-12-19T16:39:57-08:00',
            },
            required: true,
          },
          example: '1996-12-19T16:39:57-08:00',
        }),
      date: z.iso
        .date()
        .default('1985-04-12')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            schema: {
              type: 'string',
              format: 'date',
              default: '1985-04-12',
              example: '1996-12-19',
            },
            required: false,
          },
          example: '1996-12-19',
        }),
      time: z
        .string()
        .regex(
          /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
        )
        .default('23:20:50.52')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'time',
            schema: {
              type: 'string',
              format: 'time',
              default: '23:20:50.52',
              example: '16:39:57-08:00',
            },
            required: false,
          },
          format: 'time',
          example: '16:39:57-08:00',
        }),
      duration: z.iso
        .duration()
        .default('TBD')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'duration',
            schema: { type: 'string', format: 'duration', default: 'TBD', example: 'TBD' },
            required: false,
          },
          example: 'TBD',
        }),
      email: z
        .email()
        .default('default@readme.io')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'email',
            schema: {
              type: 'string',
              format: 'email',
              default: 'default@readme.io',
              example: 'example@readme.io',
            },
            required: false,
          },
          example: 'example@readme.io',
        }),
      'idn-email': z
        .string()
        .default('用户@例子.广告')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'idn-email',
            schema: {
              type: 'string',
              format: 'idn-email',
              default: '用户@例子.广告',
              example: 'अजय@डाटा.भारत',
            },
            required: false,
          },
          example: 'अजय@डाटा.भारत',
        }),
      hostname: z
        .hostname()
        .default('readme.io')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'hostname',
            schema: {
              type: 'string',
              format: 'hostname',
              default: 'readme.io',
              example: 'readme.com',
            },
            required: false,
          },
          example: 'readme.com',
        }),
      'idn-hostname': z
        .string()
        .default('Bücher.example')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'idn-hostname',
            schema: {
              type: 'string',
              format: 'idn-hostname',
              default: 'Bücher.example',
              example: 'Bücher.example',
            },
            required: false,
          },
          example: 'Bücher.example',
        }),
      ipv4: z
        .ipv4()
        .default('127.0.0.1')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ipv4',
            schema: { type: 'string', format: 'ipv4', default: '127.0.0.1', example: '127.0.0.1' },
            required: false,
          },
          example: '127.0.0.1',
        }),
      ipv6: z
        .ipv6()
        .default('0:0:0:0:0:0:0:1')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ipv6',
            schema: {
              type: 'string',
              format: 'ipv6',
              default: '0:0:0:0:0:0:0:1',
              example: '0:0:0:0:0:0:0:1',
            },
            required: false,
          },
          example: '0:0:0:0:0:0:0:1',
        }),
      uri: z
        .url()
        .default('http://www.ietf.org/rfc/rfc2396.txt')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'uri',
            schema: {
              type: 'string',
              format: 'uri',
              default: 'http://www.ietf.org/rfc/rfc2396.txt',
              example: 'mailto:John.Doe@example.com',
            },
            required: false,
          },
          example: 'mailto:John.Doe@example.com',
        }),
      'uri-reference': z
        .string()
        .default('/default')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'uri-reference',
            schema: {
              type: 'string',
              format: 'uri-reference',
              default: '/default',
              example: '/example',
            },
            required: false,
          },
          example: '/example',
        }),
      iri: z
        .string()
        .default('https://en.wiktionary.org/wiki/Ῥόδος')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iri',
            schema: {
              type: 'string',
              format: 'iri',
              default: 'https://en.wiktionary.org/wiki/Ῥόδος',
              example: 'https://en.wiktionary.org/wiki/ῥόδον',
            },
            required: false,
          },
          example: 'https://en.wiktionary.org/wiki/ῥόδον',
        }),
      'iri-reference': z
        .string()
        .default('/wiki/Ῥόδος')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iri-reference',
            schema: {
              type: 'string',
              format: 'iri-reference',
              default: '/wiki/Ῥόδος',
              example: '/wiki/ῥόδον',
            },
            required: false,
          },
          example: '/wiki/ῥόδον',
        }),
      uuid: z
        .uuid()
        .default('123e4567-e89b-12d3-a456-426614174000')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'uuid',
            schema: {
              type: 'string',
              format: 'uuid',
              default: '123e4567-e89b-12d3-a456-426614174000',
              example: '123e4567-e89b-12d3-a456-426652340000',
            },
            required: false,
          },
          example: '123e4567-e89b-12d3-a456-426652340000',
        }),
      'uri-template': z
        .string()
        .default('http://example.com/search{?q,lang}')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'uri-template',
            schema: {
              type: 'string',
              format: 'uri-template',
              default: 'http://example.com/search{?q,lang}',
              example: 'http://example.com/dictionary/{term:1}/{term}',
            },
            required: false,
          },
          example: 'http://example.com/dictionary/{term:1}/{term}',
        }),
      'json-pointer': z
        .string()
        .default('#/foo')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'json-pointer',
            schema: { type: 'string', format: 'json-pointer', default: '#/foo', example: '#/a~1b' },
            required: false,
          },
          example: '#/a~1b',
        }),
      'relative-json-pointer': z
        .string()
        .default('1/nested/objects')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'relative-json-pointer',
            schema: {
              type: 'string',
              format: 'relative-json-pointer',
              default: '1/nested/objects',
              example: '2/foo/0',
            },
            required: false,
          },
          example: '2/foo/0',
        }),
      regex: z
        .string()
        .default('/default/')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regex',
            schema: {
              type: 'string',
              format: 'regex',
              default: '/default/',
              example: '/[Ee]xample/',
            },
            required: false,
          },
          example: '/[Ee]xample/',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingOasFormatsRoute = createRoute({
  method: 'get',
  path: '/anything/oas-formats',
  summary: 'Formats defined by OpenAPI',
  request: {
    query: z.object({
      int32: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(12345)
        .openapi({
          param: {
            in: 'query',
            name: 'int32',
            schema: { type: 'integer', format: 'int32', default: '12345', example: '23456' },
            required: true,
          },
          example: '23456',
        }),
      int64: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(3000000000n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'int64',
            schema: {
              type: 'integer',
              format: 'int64',
              default: '3000000000',
              example: '4000000000',
            },
            required: false,
          },
          example: '4000000000',
        }),
      float: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'float',
            schema: { type: 'number', format: 'float', default: '1.0', example: '2.0' },
            required: false,
          },
          example: '2.0',
        }),
      double: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .default(3000000000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'double',
            schema: {
              type: 'number',
              format: 'double',
              default: '3000000000.0',
              example: '4000000000.0',
            },
            required: false,
          },
          example: '4000000000.0',
        }),
      byte: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'byte',
            schema: { type: 'string', format: 'byte' },
            required: false,
          },
        }),
      binary: z
        .file()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'binary',
            schema: { type: 'string', format: 'binary' },
            required: false,
          },
          type: 'string',
          format: 'binary',
        }),
      password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'password',
            schema: { type: 'string', format: 'password', example: '******' },
            required: false,
          },
          example: '******',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingBooleansRoute = createRoute({
  method: 'get',
  path: '/anything/booleans',
  summary: 'Booleans',
  request: {
    query: z.object({
      'tf-required': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            in: 'query',
            name: 'tf-required',
            schema: { type: 'boolean', default: true, example: false },
            required: true,
          },
          example: false,
        }),
      'tf-optional': z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tf-optional',
            schema: { type: 'boolean', default: true, example: false },
            required: false,
          },
          example: false,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})
