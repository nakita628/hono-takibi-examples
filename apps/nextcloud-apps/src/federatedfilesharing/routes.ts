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

export const postIndexPhpAppsFederatedfilesharingCreateFederatedShareRoute = createRoute({
  method: 'post',
  path: '/index.php/apps/federatedfilesharing/createFederatedShare',
  tags: ['mount_public_link'],
  summary: 'send federated share to a user of a public link',
  operationId: 'mount_public_link-create-federated-share',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              shareWith: z.string().openapi({ description: 'Username to share with' }),
              token: z.string().openapi({ description: 'Token of the share' }),
              password: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Password of the share' }),
            })
            .openapi({ required: ['shareWith', 'token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Remote URL returned',
      content: {
        'application/json': {
          schema: z.object({ remoteUrl: z.string() }).openapi({ required: ['remoteUrl'] }),
        },
      },
    },
    400: {
      description: 'Creating share is not possible',
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }).openapi({ required: ['message'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpCloudSharesRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/shares',
  tags: ['request_handler'],
  summary: 'create a new share',
  operationId: 'request_handler-create-share',
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
              remote: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Address of the remote' }),
              token: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Shared secret between servers' }),
              name: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Name of the shared resource' }),
              owner: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Display name of the receiver' }),
              sharedBy: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Display name of the sender' }),
              shareWith: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'ID of the user that receives the share' }),
              remoteId: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'ID of the remote' }),
              sharedByFederatedId: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Federated ID of the sender' }),
              ownerFederatedId: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Federated ID of the receiver' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Share created successfully',
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

export const postOcsV2PhpCloudSharesIdReshareRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/shares/{id}/reshare',
  tags: ['request_handler'],
  summary: 'create re-share on behalf of another user',
  operationId: 'request_handler-re-share',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Shared secret between servers' }),
              shareWith: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'ID of the user that receives the share' }),
              remoteId: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .nullable()
                .default(0n)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  default: 0,
                  description: 'ID of the remote',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Remote share returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ token: z.string(), remoteId: z.string() })
                    .openapi({ required: ['token', 'remoteId'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Re-sharing is not possible',
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

export const postOcsV2PhpCloudSharesIdPermissionsRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/shares/{id}/permissions',
  tags: ['request_handler'],
  summary: 'Update share information to keep federated re-shares in sync.',
  operationId: 'request_handler-update-permissions',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Shared secret between servers' }),
              permissions: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  default: null,
                  description: 'New permissions',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Permissions updated successfully',
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
    400: {
      description: 'Updating permissions is not possible',
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

export const postOcsV2PhpCloudSharesIdAcceptRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/shares/{id}/accept',
  tags: ['request_handler'],
  summary: 'accept server-to-server share',
  operationId: 'request_handler-accept-share',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the remote share',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Shared secret between servers' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Share accepted successfully',
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
    500: { description: '', content: { 'text/plain': { schema: z.string() } } },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpCloudSharesIdDeclineRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/shares/{id}/decline',
  tags: ['request_handler'],
  summary: 'decline server-to-server share',
  operationId: 'request_handler-decline-share',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the remote share',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Shared secret between servers' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Share declined successfully',
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

export const postOcsV2PhpCloudSharesIdUnshareRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/shares/{id}/unshare',
  tags: ['request_handler'],
  summary: 'remove server-to-server share if it was unshared by the owner',
  operationId: 'request_handler-unshare',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Shared secret between servers' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Share unshared successfully',
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

export const postOcsV2PhpCloudSharesIdRevokeRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/shares/{id}/revoke',
  tags: ['request_handler'],
  summary: 'federated share was revoked, either by the owner or the re-sharer',
  operationId: 'request_handler-revoke',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Shared secret between servers' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Share revoked successfully',
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
    400: {
      description: 'Revoking the share is not possible',
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

export const postOcsV2PhpCloudSharesIdMoveRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/shares/{id}/move',
  tags: ['request_handler'],
  summary: 'change the owner of a server-to-server share',
  operationId: 'request_handler-move',
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
            description: 'ID of the share',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Shared secret between servers' }),
              remote: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Address of the remote' }),
              remote_id: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'ID of the remote' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Share moved successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ remote: z.string(), owner: z.string() })
                    .openapi({ required: ['remote', 'owner'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Moving share is not possible',
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
