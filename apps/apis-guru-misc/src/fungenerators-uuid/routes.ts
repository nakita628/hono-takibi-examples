import { createRoute, z } from '@hono/zod-openapi'

const XFungeneratorsApiSecretSecurityScheme = {
  in: 'header',
  name: 'X-Fungenerators-Api-Secret',
  type: 'apiKey',
}

export const getUuidRoute = createRoute({
  method: 'get',
  path: '/uuid',
  tags: ['UUID Generation'],
  description: 'Generate a random UUID (v4).',
  request: {
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Number of UUID's to generate (defaults to 1)",
            in: 'query',
            name: 'count',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const postUuidRoute = createRoute({
  method: 'post',
  path: '/uuid',
  tags: ['UUID Parsing'],
  description: 'Parse a UUID string and return its version and check whether it is valid.',
  request: {
    query: z.object({
      uuidstr: z
        .string()
        .openapi({
          param: {
            description: 'UUID String to parse',
            in: 'query',
            name: 'uuidstr',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getUuidVersionVersionRoute = createRoute({
  method: 'get',
  path: '/uuid/version/{version}',
  tags: ['UUID Generation'],
  description: 'Generate a random UUID (v4).',
  request: {
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "Number of UUID's to generate (defaults to 1)",
            in: 'query',
            name: 'count',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For v3 and v5 of UUID Spec you can supply the type (dns/url/oid/x500/nil).',
            in: 'query',
            name: 'type',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For v3 and v5 of UUID Spec supply the text value for the type specified dns/url/oid/x500/nil. For example specify a dns/domain string if the type is "dns"',
            in: 'query',
            name: 'text',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
    params: z.object({
      version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              "Version of the UUID spec to use. (0-5), Use '0' for nil (00000000-0000-0000-0000-000000000000) UUID.",
            in: 'path',
            name: 'version',
            required: true,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})
