import { createRoute, z } from '@hono/zod-openapi'

const OCSMetaSchema = z
  .object({
    status: z.string(),
    statuscode: z.int(),
    message: z.string().exactOptional(),
    totalitems: z.string().exactOptional(),
    itemsperpage: z.string().exactOptional(),
  })
  .openapi({ required: ['status', 'statuscode'] })
  .openapi('OCSMeta')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getOcsV2PhpAppsFederationApiV1SharedSecretRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/federation/api/v1/shared-secret',
  tags: ['ocs_authapi'],
  summary: 'Create shared secret and return it, for legacy end-points',
  operationId: 'ocs_authapi-get-shared-secret-legacy',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            description: 'URL of the server',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: 'Token of the server',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Shared secret returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ sharedSecret: z.string() })
                    .openapi({ required: ['sharedSecret'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Getting shared secret is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFederationApiV1RequestSharedSecretRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/federation/api/v1/request-shared-secret',
  tags: ['ocs_authapi'],
  summary: 'Request received to ask remote server for a shared secret, for legacy end-points',
  operationId: 'ocs_authapi-request-shared-secret-legacy',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              url: z.string().openapi({ description: 'URL of the server' }),
              token: z.string().openapi({ description: 'Token of the server' }),
            })
            .openapi({ required: ['url', 'token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Shared secret requested successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Requesting shared secret is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpCloudSharedSecretRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/shared-secret',
  tags: ['ocs_authapi'],
  summary: 'Create shared secret and return it',
  operationId: 'ocs_authapi-get-shared-secret',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            description: 'URL of the server',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: 'Token of the server',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Shared secret returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ sharedSecret: z.string() })
                    .openapi({ required: ['sharedSecret'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Getting shared secret is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpCloudSharedSecretRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/shared-secret',
  tags: ['ocs_authapi'],
  summary: 'Request received to ask remote server for a shared secret',
  operationId: 'ocs_authapi-request-shared-secret',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              url: z.string().openapi({ description: 'URL of the server' }),
              token: z.string().openapi({ description: 'Token of the server' }),
            })
            .openapi({ required: ['url', 'token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Shared secret requested successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Requesting shared secret is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsFederationTrustedServersRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/federation/trusted-servers',
  tags: ['settings'],
  summary: 'List all trusted servers',
  description: 'This endpoint requires admin access',
  operationId: 'settings-get-servers',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of trusted servers',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.array(
                    z
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
                          .openapi({ type: 'integer', format: 'int64' }),
                        status: z
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
                        url: z.string(),
                      })
                      .openapi({ required: ['id', 'status', 'url'] }),
                  ),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsFederationTrustedServersRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/federation/trusted-servers',
  tags: ['settings'],
  summary: 'Add server to the list of trusted Nextcloud servers',
  description: 'This endpoint requires admin access',
  operationId: 'settings-add-server',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ url: z.string().openapi({ description: 'The URL of the server to add' }) })
            .openapi({ required: ['url'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Server added successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
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
                        .openapi({ type: 'integer', format: 'int64' }),
                      message: z.string(),
                      url: z.string(),
                    })
                    .openapi({ required: ['id', 'message', 'url'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Server not found at the given URL',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    409: {
      description: 'Server is already in the list of trusted servers',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsFederationTrustedServersIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/federation/trusted-servers/{id}',
  tags: ['settings'],
  summary: 'Add server to the list of trusted Nextcloud servers',
  description: 'This endpoint requires admin access',
  operationId: 'settings-remove-server',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the trusted server to remove',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Server removed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
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
                        .openapi({ type: 'integer', format: 'int64' }),
                    })
                    .openapi({ required: ['id'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Server not found at the given ID',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
