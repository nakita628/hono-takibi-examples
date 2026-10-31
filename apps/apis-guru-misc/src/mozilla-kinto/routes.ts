import { createRoute, z } from '@hono/zod-openapi'

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Utilities'],
  operationId: 'server_info',
  responses: {
    200: {
      description: 'Return information about the running Instance.',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()).openapi({ title: 'SchemaNode' }),
        },
      },
    },
  },
  security: [],
})

export const getApiRoute = createRoute({
  method: 'get',
  path: '/__api__',
  tags: ['Utilities'],
  operationId: 'get_openapi_spec',
  responses: {
    200: {
      description: 'Return an OpenAPI description of the running instance.',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()).openapi({ title: 'SchemaNode' }),
        },
      },
    },
  },
  security: [],
})

export const getHeartbeatRoute = createRoute({
  method: 'get',
  path: '/__heartbeat__',
  tags: ['Utilities'],
  operationId: '__heartbeat__',
  responses: {
    200: {
      description: 'Server is working properly.',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()).openapi({ title: 'SchemaNode' }),
        },
      },
    },
    503: {
      description: 'One or more subsystems failing.',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()).openapi({ title: 'SchemaNode' }),
        },
      },
    },
  },
  security: [],
})

export const getLbheartbeatRoute = createRoute({
  method: 'get',
  path: '/__lbheartbeat__',
  tags: ['Utilities'],
  operationId: '__lbheartbeat__',
  responses: {
    200: {
      description: 'Returned if server is reachable.',
      content: { 'application/json': { schema: z.object({}).openapi({ title: 'SchemaNode' }) } },
    },
  },
  security: [],
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/__version__',
  tags: ['Utilities'],
  operationId: '__version__',
  responses: {
    200: {
      description: 'Return the running Instance version information.',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()).openapi({ title: 'SchemaNode' }),
        },
      },
    },
  },
  security: [],
})

export const postBatchRoute = createRoute({
  method: 'post',
  path: '/batch',
  tags: ['Batch'],
  operationId: 'batch',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              defaults: z
                .object({
                  body: z.record(z.string(), z.any()).exactOptional().openapi({ title: 'Body' }),
                  headers: z
                    .record(z.string(), z.any())
                    .exactOptional()
                    .openapi({ title: 'Headers' }),
                  method: z
                    .enum(['GET', 'HEAD', 'DELETE', 'TRACE', 'POST', 'PUT', 'PATCH'])
                    .exactOptional()
                    .openapi({ title: 'Method' }),
                  path: z.string().regex(/^\//).exactOptional().openapi({ title: 'Path' }),
                })
                .exactOptional()
                .openapi({ title: 'Defaults', required: [] }),
              requests: z
                .array(
                  z
                    .object({
                      body: z
                        .record(z.string(), z.any())
                        .exactOptional()
                        .openapi({ title: 'Body' }),
                      headers: z
                        .record(z.string(), z.any())
                        .exactOptional()
                        .openapi({ title: 'Headers' }),
                      method: z
                        .enum(['GET', 'HEAD', 'DELETE', 'TRACE', 'POST', 'PUT', 'PATCH'])
                        .exactOptional()
                        .openapi({ title: 'Method' }),
                      path: z.string().regex(/^\//).openapi({ title: 'Path' }),
                    })
                    .openapi({ required: ['path'] }),
                )
                .openapi({ title: 'Requests' }),
            })
            .openapi({ required: ['requests'], title: 'BatchPayloadSchema' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Return a list of operation responses.',
      content: {
        'application/json': {
          schema: z
            .object({
              responses: z
                .array(
                  z
                    .object({
                      body: z
                        .record(z.string(), z.any())
                        .exactOptional()
                        .openapi({ title: 'Body' }),
                      headers: z
                        .record(z.string(), z.any())
                        .exactOptional()
                        .openapi({ title: 'Headers' }),
                      path: z.string().openapi({ title: 'Path' }),
                      status: z.int().openapi({ title: 'Status' }),
                    })
                    .openapi({ required: ['status', 'path'] }),
                )
                .openapi({ title: 'Responses' }),
            })
            .openapi({ required: ['responses'], title: 'BatchResponseBodySchema' }),
        },
      },
    },
    400: {
      description: 'The request was badly formatted.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    default: {
      description: 'an unknown error occurred.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
  },
  security: [],
})

export const getBucketsRoute = createRoute({
  method: 'get',
  path: '/buckets',
  tags: ['Buckets'],
  operationId: 'get_buckets',
  request: {
    query: z.object({
      _limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_limit',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _sort: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_sort',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      _token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: '_token', required: false, schema: { type: 'string' } },
        }),
      _since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_since',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_to',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_before',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id', required: false, schema: { type: 'string' } },
        }),
      last_modified: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'last_modified',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_fields',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'If-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return a list of matching objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      'collection:schema': z.record(z.string(), z.any()).exactOptional(),
                      'group:schema': z.record(z.string(), z.any()).exactOptional(),
                      'record:schema': z.record(z.string(), z.any()).exactOptional(),
                    })
                    .catchall(z.any())
                    .openapi({ title: 'Data' }),
                )
                .default([])
                .exactOptional(),
            })
            .openapi({ title: 'Schema', required: [] }),
        },
      },
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    304: {
      description: 'Reponse has not changed since value in If-None-Match header',
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'The request is invalid.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    401: {
      description: 'The request is missing authentication headers.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    403: {
      description:
        'The user is not allowed to perform the operation, or the resource is not accessible.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    406: {
      description: "The client doesn't accept supported responses Content-Type.",
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    412: {
      description: 'Object was changed or deleted since value in `If-Match` header.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    default: {
      description: 'Unexpected error.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
  },
  security: [],
})

export const getBucketsMonitorCollectionsChangesRecordsRoute = createRoute({
  method: 'get',
  path: '/buckets/monitor/collections/changes/records',
  tags: ['Changess'],
  operationId: 'get_changess',
  request: {
    query: z.object({
      _limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_limit',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _sort: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_sort',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      _token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: '_token', required: false, schema: { type: 'string' } },
        }),
      _since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_since',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_to',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_before',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id', required: false, schema: { type: 'string' } },
        }),
      last_modified: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'last_modified',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_fields',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'If-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return a list of matching objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      bucket: z.string().openapi({ title: 'Bucket' }),
                      collection: z.string().openapi({ title: 'Collection' }),
                      host: z.string().openapi({ title: 'Host' }),
                    })
                    .openapi({ required: ['host', 'bucket', 'collection'], title: 'Data' }),
                )
                .default([])
                .exactOptional(),
            })
            .openapi({ title: 'Schema', required: [] }),
        },
      },
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    304: {
      description: 'Reponse has not changed since value in If-None-Match header',
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'The request is invalid.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    401: {
      description: 'The request is missing authentication headers.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    403: {
      description:
        'The user is not allowed to perform the operation, or the resource is not accessible.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    406: {
      description: "The client doesn't accept supported responses Content-Type.",
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    412: {
      description: 'Object was changed or deleted since value in `If-Match` header.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    default: {
      description: 'Unexpected error.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
  },
  security: [],
})

export const getBucketsBidCollectionsCidChangesetRoute = createRoute({
  method: 'get',
  path: '/buckets/{bid}/collections/{cid}/changeset',
  tags: ['Collection-changeset'],
  operationId: 'get_collection-changeset',
  request: {
    params: z.object({
      bid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bid', required: true, schema: { type: 'string' } },
        }),
      cid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'cid', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      _since: z
        .string()
        .regex(/^"([0-9]+?)"$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_since',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$', type: 'string' },
          },
        }),
      _expected: z
        .string()
        .openapi({
          param: { in: 'query', name: '_expected', required: true, schema: { type: 'string' } },
        }),
      _limit: z
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
          param: { in: 'query', name: '_limit', required: false, schema: { type: 'integer' } },
        }),
      bucket: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'bucket', required: false, schema: { type: 'string' } },
        }),
      collection: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'collection', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'UNDOCUMENTED RESPONSE' } },
  security: [],
})

export const getBucketsBucketIdCollectionsRoute = createRoute({
  method: 'get',
  path: '/buckets/{bucket_id}/collections',
  tags: ['Collections'],
  operationId: 'get_collections',
  request: {
    params: z.object({
      bucket_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bucket_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      _limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_limit',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _sort: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_sort',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      _token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: '_token', required: false, schema: { type: 'string' } },
        }),
      _since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_since',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_to',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_before',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id', required: false, schema: { type: 'string' } },
        }),
      last_modified: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'last_modified',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_fields',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'If-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return a list of matching objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      cache_expires: z.int().exactOptional().openapi({ title: 'Cache Expires' }),
                      schema: z
                        .record(z.string(), z.any())
                        .exactOptional()
                        .openapi({ title: 'Schema' }),
                    })
                    .catchall(z.any())
                    .openapi({ title: 'Data' }),
                )
                .default([])
                .exactOptional(),
            })
            .openapi({ title: 'Schema', required: [] }),
        },
      },
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    304: {
      description: 'Reponse has not changed since value in If-None-Match header',
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'The request is invalid.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    401: {
      description: 'The request is missing authentication headers.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    403: {
      description:
        'The user is not allowed to perform the operation, or the resource is not accessible.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    406: {
      description: "The client doesn't accept supported responses Content-Type.",
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    412: {
      description: 'Object was changed or deleted since value in `If-Match` header.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    default: {
      description: 'Unexpected error.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
  },
  security: [],
})

export const getBucketsBucketIdCollectionsCollectionIdRecordsRoute = createRoute({
  method: 'get',
  path: '/buckets/{bucket_id}/collections/{collection_id}/records',
  tags: ['Records'],
  operationId: 'get_records',
  request: {
    params: z.object({
      bucket_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bucket_id', required: true, schema: { type: 'string' } },
        }),
      collection_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'collection_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      _limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_limit',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _sort: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_sort',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      _token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: '_token', required: false, schema: { type: 'string' } },
        }),
      _since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_since',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_to',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_before',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id', required: false, schema: { type: 'string' } },
        }),
      last_modified: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'last_modified',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_fields',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'If-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return a list of matching objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(z.record(z.string(), z.any()).openapi({ title: 'Data' }))
                .default([])
                .exactOptional(),
            })
            .openapi({ title: 'Schema', required: [] }),
        },
      },
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    304: {
      description: 'Reponse has not changed since value in If-None-Match header',
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'The request is invalid.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    401: {
      description: 'The request is missing authentication headers.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    403: {
      description:
        'The user is not allowed to perform the operation, or the resource is not accessible.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    406: {
      description: "The client doesn't accept supported responses Content-Type.",
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    412: {
      description: 'Object was changed or deleted since value in `If-Match` header.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    default: {
      description: 'Unexpected error.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
  },
  security: [],
})

export const getBucketsBucketIdCollectionsCollectionIdRecordsIdRoute = createRoute({
  method: 'get',
  path: '/buckets/{bucket_id}/collections/{collection_id}/records/{id}',
  tags: ['Records'],
  operationId: 'get_record',
  request: {
    params: z.object({
      bucket_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bucket_id', required: true, schema: { type: 'string' } },
        }),
      collection_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'collection_id', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      _fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_fields',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'If-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return the target object.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.record(z.string(), z.any()).exactOptional().openapi({ title: 'Data' }),
              permissions: z
                .object({
                  read: z.array(z.string()).exactOptional().openapi({ title: 'Read' }),
                  write: z.array(z.string()).exactOptional().openapi({ title: 'Write' }),
                })
                .exactOptional()
                .openapi({ title: 'Permissions', required: [] }),
            })
            .openapi({ title: 'ObjectSchema', required: [] }),
        },
      },
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    304: {
      description: 'Reponse has not changed since value in If-None-Match header',
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'The request is invalid.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    401: {
      description: 'The request is missing authentication headers.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    403: {
      description:
        'The user is not allowed to perform the operation, or the resource is not accessible.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    404: {
      description: 'The object does not exist or was deleted.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    406: {
      description: "The client doesn't accept supported responses Content-Type.",
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    412: {
      description: 'Object was changed or deleted since value in `If-Match` header.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    default: {
      description: 'Unexpected error.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
  },
  security: [],
})

export const postBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute = createRoute({
  method: 'post',
  path: '/buckets/{bucket_id}/collections/{collection_id}/records/{id}/attachment',
  tags: ['Attachment'],
  operationId: 'create_attachment',
  request: {
    params: z.object({
      bucket_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bucket_id', required: true, schema: { type: 'string' } },
        }),
      collection_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'collection_id', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'UNDOCUMENTED RESPONSE' } },
  security: [],
})

export const deleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute = createRoute({
  method: 'delete',
  path: '/buckets/{bucket_id}/collections/{collection_id}/records/{id}/attachment',
  tags: ['Attachment'],
  operationId: 'delete_attachment',
  request: {
    params: z.object({
      bucket_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bucket_id', required: true, schema: { type: 'string' } },
        }),
      collection_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'collection_id', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'UNDOCUMENTED RESPONSE' } },
  security: [],
})

export const getBucketsBucketIdCollectionsIdRoute = createRoute({
  method: 'get',
  path: '/buckets/{bucket_id}/collections/{id}',
  tags: ['Collections'],
  operationId: 'get_collection',
  request: {
    params: z.object({
      bucket_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bucket_id', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      _fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_fields',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'If-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return the target object.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  cache_expires: z.int().exactOptional().openapi({ title: 'Cache Expires' }),
                  schema: z
                    .record(z.string(), z.any())
                    .exactOptional()
                    .openapi({ title: 'Schema' }),
                })
                .catchall(z.any())
                .exactOptional()
                .openapi({ title: 'Data' }),
              permissions: z
                .object({
                  read: z.array(z.string()).exactOptional().openapi({ title: 'Read' }),
                  'record:create': z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ title: 'Record:Create' }),
                  write: z.array(z.string()).exactOptional().openapi({ title: 'Write' }),
                })
                .exactOptional()
                .openapi({ title: 'Permissions', required: [] }),
            })
            .openapi({ title: 'ObjectSchema', required: [] }),
        },
      },
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    304: {
      description: 'Reponse has not changed since value in If-None-Match header',
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'The request is invalid.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    401: {
      description: 'The request is missing authentication headers.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    403: {
      description:
        'The user is not allowed to perform the operation, or the resource is not accessible.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    404: {
      description: 'The object does not exist or was deleted.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    406: {
      description: "The client doesn't accept supported responses Content-Type.",
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    412: {
      description: 'Object was changed or deleted since value in `If-Match` header.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    default: {
      description: 'Unexpected error.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
  },
  security: [],
})

export const getBucketsBucketIdGroupsRoute = createRoute({
  method: 'get',
  path: '/buckets/{bucket_id}/groups',
  tags: ['Groups'],
  operationId: 'get_groups',
  request: {
    params: z.object({
      bucket_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bucket_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      _limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_limit',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _sort: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_sort',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      _token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: '_token', required: false, schema: { type: 'string' } },
        }),
      _since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_since',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_to',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '_before',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id', required: false, schema: { type: 'string' } },
        }),
      last_modified: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9223372036854776000),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'last_modified',
            required: false,
            schema: { maximum: 9223372036854776000, minimum: 0, type: 'integer' },
          },
        }),
      _fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_fields',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'If-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return a list of matching objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      members: z
                        .array(z.string())
                        .default([])
                        .exactOptional()
                        .openapi({ title: 'Members' }),
                    })
                    .catchall(z.any())
                    .openapi({ title: 'Data' }),
                )
                .default([])
                .exactOptional(),
            })
            .openapi({ title: 'Schema', required: [] }),
        },
      },
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    304: {
      description: 'Reponse has not changed since value in If-None-Match header',
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'The request is invalid.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    401: {
      description: 'The request is missing authentication headers.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    403: {
      description:
        'The user is not allowed to perform the operation, or the resource is not accessible.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    406: {
      description: "The client doesn't accept supported responses Content-Type.",
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    412: {
      description: 'Object was changed or deleted since value in `If-Match` header.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    default: {
      description: 'Unexpected error.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
  },
  security: [],
})

export const getBucketsBucketIdGroupsIdRoute = createRoute({
  method: 'get',
  path: '/buckets/{bucket_id}/groups/{id}',
  tags: ['Groups'],
  operationId: 'get_group',
  request: {
    params: z.object({
      bucket_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bucket_id', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      _fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_fields',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'If-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return the target object.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  members: z
                    .array(z.string())
                    .default([])
                    .exactOptional()
                    .openapi({ title: 'Members' }),
                })
                .catchall(z.any())
                .exactOptional()
                .openapi({ title: 'Data' }),
              permissions: z
                .object({
                  read: z.array(z.string()).exactOptional().openapi({ title: 'Read' }),
                  write: z.array(z.string()).exactOptional().openapi({ title: 'Write' }),
                })
                .exactOptional()
                .openapi({ title: 'Permissions', required: [] }),
            })
            .openapi({ title: 'ObjectSchema', required: [] }),
        },
      },
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    304: {
      description: 'Reponse has not changed since value in If-None-Match header',
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'The request is invalid.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    401: {
      description: 'The request is missing authentication headers.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    403: {
      description:
        'The user is not allowed to perform the operation, or the resource is not accessible.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    404: {
      description: 'The object does not exist or was deleted.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    406: {
      description: "The client doesn't accept supported responses Content-Type.",
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    412: {
      description: 'Object was changed or deleted since value in `If-Match` header.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    default: {
      description: 'Unexpected error.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
  },
  security: [],
})

export const getBucketsIdRoute = createRoute({
  method: 'get',
  path: '/buckets/{id}',
  tags: ['Buckets'],
  operationId: 'get_bucket',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      _fields: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: '_fields',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'If-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
      'If-None-Match': z
        .string()
        .regex(/^"([0-9]+?)"$|\*/)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            required: false,
            schema: { pattern: '^"([0-9]+?)"$|\\*', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return the target object.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  'collection:schema': z.record(z.string(), z.any()).exactOptional(),
                  'group:schema': z.record(z.string(), z.any()).exactOptional(),
                  'record:schema': z.record(z.string(), z.any()).exactOptional(),
                })
                .catchall(z.any())
                .exactOptional()
                .openapi({ title: 'Data' }),
              permissions: z
                .object({
                  'collection:create': z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ title: 'Collection:Create' }),
                  'group:create': z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ title: 'Group:Create' }),
                  read: z.array(z.string()).exactOptional().openapi({ title: 'Read' }),
                  write: z.array(z.string()).exactOptional().openapi({ title: 'Write' }),
                })
                .exactOptional()
                .openapi({ title: 'Permissions', required: [] }),
            })
            .openapi({ title: 'ObjectSchema', required: [] }),
        },
      },
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    304: {
      description: 'Reponse has not changed since value in If-None-Match header',
      headers: z.object({
        Etag: {
          schema: z
            .string()
            .regex(/^"([0-9]+?)"$|\*/)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Last-Modified': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'The request is invalid.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    401: {
      description: 'The request is missing authentication headers.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    403: {
      description:
        'The user is not allowed to perform the operation, or the resource is not accessible.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    404: {
      description: 'The object does not exist or was deleted.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    406: {
      description: "The client doesn't accept supported responses Content-Type.",
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    412: {
      description: 'Object was changed or deleted since value in `If-Match` header.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
    default: {
      description: 'Unexpected error.',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ title: 'Code' }),
              details: z.any().exactOptional(),
              errno: z.int().openapi({ title: 'Errno' }),
              error: z.string().openapi({ title: 'Error' }),
              info: z.string().exactOptional().openapi({ title: 'Info' }),
              message: z.string().exactOptional().openapi({ title: 'Message' }),
            })
            .openapi({ required: ['code', 'errno', 'error'], title: 'ErrorSchema' }),
        },
      },
    },
  },
  security: [],
})

export const getContributeJsonRoute = createRoute({
  method: 'get',
  path: '/contribute.json',
  tags: ['Utilities'],
  operationId: 'contribute',
  responses: {
    200: {
      description: 'Return open source contributing information.',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()).openapi({ title: 'SchemaNode' }),
        },
      },
    },
  },
  security: [],
})
