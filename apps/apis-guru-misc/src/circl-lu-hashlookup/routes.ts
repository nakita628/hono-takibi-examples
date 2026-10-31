import { createRoute, z } from '@hono/zod-openapi'

const MaskErrorResponse = { description: 'When any error occurs on mask' }

const ParseErrorResponse = { description: "When a mask can't be parsed" }

export const postBulkMd5Route = createRoute({
  method: 'post',
  path: '/bulk/md5',
  tags: ['default'],
  description: "Bulk search of MD5 hashes in a JSON array with the key 'hashes'.",
  operationId: 'post_bulkmd5',
  responses: {
    200: { description: 'Success' },
    404: {
      description: "JSON format incorrect. An array of hashes in the key 'hashes' is expected.",
    },
  },
})

export const postBulkSha1Route = createRoute({
  method: 'post',
  path: '/bulk/sha1',
  tags: ['default'],
  description: "Bulk search of SHA1 hashes in a JSON array with the 'hashes'.",
  operationId: 'post_bulksha1',
  responses: {
    200: { description: 'Success' },
    404: {
      description: "JSON format incorrect. An array of hashes in the key 'hashes' is expected.",
    },
  },
})

export const getChildrenSha1CountCursorRoute = createRoute({
  method: 'get',
  path: '/children/{sha1}/{count}/{cursor}',
  tags: ['default'],
  description:
    'Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.',
  operationId: 'get_children',
  request: {
    params: z.object({
      sha1: z
        .string()
        .openapi({
          param: { in: 'path', name: 'sha1', required: true, schema: { type: 'string' } },
        }),
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
        .openapi({
          param: { in: 'path', name: 'count', required: true, schema: { type: 'integer' } },
        }),
      cursor: z
        .string()
        .openapi({
          param: { in: 'path', name: 'cursor', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'SHA1 value incorrect, expecting a SHA1 value in hex format' },
    404: { description: 'The SHA1 value has no known child.' },
  },
})

export const getInfoRoute = createRoute({
  method: 'get',
  path: '/info',
  tags: ['default'],
  description: 'Info about the hashlookup database',
  operationId: 'get_info',
  responses: { 200: { description: 'Success' } },
})

export const getLookupMd5Md5Route = createRoute({
  method: 'get',
  path: '/lookup/md5/{md5}',
  tags: ['default'],
  description: 'Lookup MD5.',
  operationId: 'get_lookup_md5',
  request: {
    params: z.object({
      md5: z
        .string()
        .openapi({
          param: { in: 'path', name: 'md5', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'MD5 value incorrect, expecting a MD5 value in hex format' },
    404: { description: 'Non existing MD5' },
  },
})

export const getLookupSha1Sha1Route = createRoute({
  method: 'get',
  path: '/lookup/sha1/{sha1}',
  tags: ['default'],
  description: 'Lookup SHA-1.',
  operationId: 'get_lookup_sha1',
  request: {
    params: z.object({
      sha1: z
        .string()
        .openapi({
          param: { in: 'path', name: 'sha1', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'SHA1 value incorrect, expecting a SHA1 value in hex format' },
    404: { description: 'Non existing SHA1' },
  },
})

export const getLookupSha256Sha256Route = createRoute({
  method: 'get',
  path: '/lookup/sha256/{sha256}',
  tags: ['default'],
  description: 'Lookup SHA-256.',
  operationId: 'get_lookup_sha256',
  request: {
    params: z.object({
      sha256: z
        .string()
        .openapi({
          param: { in: 'path', name: 'sha256', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'SHA-256 value incorrect, expecting a SHA-256 value in hex format' },
    404: { description: 'Non existing SHA-256' },
  },
})

export const getParentsSha1CountCursorRoute = createRoute({
  method: 'get',
  path: '/parents/{sha1}/{count}/{cursor}',
  tags: ['default'],
  description:
    'Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.',
  operationId: 'get_parents',
  request: {
    params: z.object({
      sha1: z
        .string()
        .openapi({
          param: { in: 'path', name: 'sha1', required: true, schema: { type: 'string' } },
        }),
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
        .openapi({
          param: { in: 'path', name: 'count', required: true, schema: { type: 'integer' } },
        }),
      cursor: z
        .string()
        .openapi({
          param: { in: 'path', name: 'cursor', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'SHA1 value incorrect, expecting a SHA1 value in hex format' },
    404: { description: 'The SHA1 value has no known parent.' },
  },
})

export const getSessionCreateNameRoute = createRoute({
  method: 'get',
  path: '/session/create/{name}',
  tags: ['default'],
  description:
    'Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.',
  operationId: 'get_session_create',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'Expecting a name for the session' },
    500: { description: 'Session feature is not enabled' },
  },
})

export const getSessionGetNameRoute = createRoute({
  method: 'get',
  path: '/session/get/{name}',
  tags: ['default'],
  description: 'Return set of matching and non-matching hashes from a session.',
  operationId: 'get_session_matches',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'Expecting a name for the session' },
    500: { description: 'Session feature is not enabled' },
  },
})

export const getStatsTopRoute = createRoute({
  method: 'get',
  path: '/stats/top',
  tags: ['default'],
  description: 'Return the top 100 of most queried values.',
  operationId: 'get_stattop',
  responses: {
    200: { description: 'Success' },
    400: { description: 'Public statistics not enabled' },
  },
})
