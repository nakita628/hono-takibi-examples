import { createRoute, z } from '@hono/zod-openapi'

const APIRequestSchema = z
  .object({
    action: z.enum(['READ', 'CREATE', 'UPDATE', 'DELETE']).exactOptional(),
    actor: z
      .object({
        account: z.string().exactOptional(),
        id: z.uuid().exactOptional(),
        jti: z.string().exactOptional(),
        requestIp: z.string().exactOptional(),
        userAgent: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    requestId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The unique id used to identify a single request.' }),
    resource: z
      .object({
        item: z
          .object({
            id: z
              .string()
              .regex(/^[\da-z]{26}$/)
              .exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        itemVersion: z.int().exactOptional(),
        type: z.enum(['ITEM', 'VAULT']).exactOptional(),
        vault: z
          .object({
            id: z
              .string()
              .regex(/^[\da-z]{26}$/)
              .exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    result: z.enum(['SUCCESS', 'DENY']).exactOptional(),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time at which the request was processed by the server.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a request that was made to the API. Including what Token was used and what resource was accessed.',
    required: [],
  })
  .openapi('APIRequest')

const ErrorResponseSchema = z
  .object({
    message: z.string().exactOptional().openapi({ description: 'A message detailing the error' }),
    status: z.int().exactOptional().openapi({ description: 'HTTP Status Code' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const GeneratorRecipeSchema = z
  .object({
    characterSets: z
      .array(z.enum(['LETTERS', 'DIGITS', 'SYMBOLS']))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    excludeCharacters: z
      .string()
      .exactOptional()
      .openapi({
        description: 'List of all characters that should be excluded from generated passwords.',
        example: 'abc1',
      }),
    length: z
      .int()
      .min(1)
      .max(64)
      .default(32)
      .exactOptional()
      .openapi({ description: 'Length of the generated value' }),
  })
  .openapi({
    description:
      'The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value',
    required: [],
  })
  .openapi('GeneratorRecipe')

const FieldSchema = z
  .object({
    entropy: z
      .number()
      .exactOptional()
      .openapi({
        description: 'For fields with a purpose of `PASSWORD` this is the entropy of the value',
        readOnly: true,
      }),
    generate: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'If value is not present then a new value should be generated for this field',
      }),
    id: z.string(),
    label: z.string().exactOptional(),
    purpose: z
      .enum(['', 'USERNAME', 'PASSWORD', 'NOTES'])
      .exactOptional()
      .openapi({
        description:
          'Some item types, Login and Password, have fields used for autofill. This property indicates that purpose and is required for some item types.',
      }),
    recipe: GeneratorRecipeSchema.exactOptional(),
    section: z.object({ id: z.string().exactOptional() }).exactOptional().openapi({ required: [] }),
    type: z
      .enum(['STRING', 'EMAIL', 'CONCEALED', 'URL', 'TOTP', 'DATE', 'MONTH_YEAR', 'MENU'])
      .default('STRING'),
    value: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'type'] })
  .openapi('Field')

const FileSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Base64-encoded contents of the file. Only set if size <= OP_MAX_INLINE_FILE_SIZE_KB kb and `inline_files` is set to `true`.',
      }),
    content_path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path of the Connect API that can be used to download the contents of this file.',
        readOnly: true,
      }),
    id: z.string().exactOptional().openapi({ description: 'ID of the file' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the file' }),
    section: z
      .object({ id: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description: 'For files that are in a section, this field describes the section.',
        required: [],
      }),
    size: z.int().exactOptional().openapi({ description: 'Size in bytes of the file' }),
  })
  .openapi({
    example: {
      content: 'VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo=',
      content_path:
        'v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content',
      id: '6r65pjq33banznomn7q22sj44e',
      name: 'foo.txt',
      size: 35,
    },
    required: [],
  })
  .openapi('File')

const ItemSchema = z
  .object({
    category: z.enum([
      'LOGIN',
      'PASSWORD',
      'API_CREDENTIAL',
      'SERVER',
      'DATABASE',
      'CREDIT_CARD',
      'MEMBERSHIP',
      'PASSPORT',
      'SOFTWARE_LICENSE',
      'OUTDOOR_LICENSE',
      'SECURE_NOTE',
      'WIRELESS_ROUTER',
      'BANK_ACCOUNT',
      'DRIVER_LICENSE',
      'IDENTITY',
      'REWARD_PROGRAM',
      'DOCUMENT',
      'EMAIL_ACCOUNT',
      'SOCIAL_SECURITY_NUMBER',
      'MEDICAL_RECORD',
      'SSH_KEY',
      'CUSTOM',
    ]),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    favorite: z.boolean().default(false).exactOptional(),
    id: z
      .string()
      .regex(/^[\da-z]{26}$/)
      .exactOptional(),
    lastEditedBy: z.string().exactOptional().openapi({ readOnly: true }),
    state: z.enum(['ARCHIVED', 'DELETED']).exactOptional().openapi({ readOnly: true }),
    tags: z.array(z.string()).exactOptional(),
    title: z.string().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    urls: z
      .array(
        z
          .object({
            href: z.url(),
            label: z.string().exactOptional(),
            primary: z.boolean().exactOptional(),
          })
          .openapi({ required: ['href'] }),
      )
      .exactOptional()
      .openapi({
        example: [{ href: 'https://example.com', primary: true }, { href: 'https://example.org' }],
      }),
    vault: z.object({ id: z.string().regex(/^[\da-z]{26}$/) }).openapi({ required: ['id'] }),
    version: z.int().exactOptional(),
  })
  .openapi({ required: ['vault', 'category'] })
  .openapi('Item')

const FullItemSchema = ItemSchema.and(
  z
    .object({
      fields: z.array(FieldSchema).exactOptional(),
      files: z.array(FileSchema).exactOptional(),
      sections: z
        .array(
          z
            .object({ id: z.string().exactOptional(), label: z.string().exactOptional() })
            .openapi({ required: [] }),
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('FullItem')

const PatchSchema = z
  .array(
    z
      .object({
        op: z.enum(['add', 'remove', 'replace']),
        path: z
          .string()
          .openapi({
            description:
              'An RFC6901 JSON Pointer pointing to the Item document, an Item Attribute, and Item Field by Field ID, or an Item Field Attribute',
            example: '/fields/06gnn2b95example10q91512p5/label',
          }),
        value: z.object({}).exactOptional(),
      })
      .openapi({ required: ['op', 'path'] }),
  )
  .openapi('Patch')

const ServiceDependencySchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable message for explaining the current state.' }),
    service: z.string().exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ description: 'The state of a registered server dependency.', required: [] })
  .openapi('ServiceDependency')

const VaultSchema = z
  .object({
    attributeVersion: z.int().exactOptional().openapi({ description: 'The vault version' }),
    contentVersion: z
      .int()
      .exactOptional()
      .openapi({ description: 'The version of the vault contents' }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    description: z.string().exactOptional(),
    id: z
      .string()
      .regex(/^[\da-z]{26}$/)
      .exactOptional(),
    items: z.int().exactOptional().openapi({ description: 'Number of active items in the vault' }),
    name: z.string().exactOptional(),
    type: z.enum(['USER_CREATED', 'PERSONAL', 'EVERYONE', 'TRANSFER']).exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Vault')

const ConnectTokenSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const getActivityRoute = createRoute({
  method: 'get',
  path: '/activity',
  tags: ['Activity'],
  summary: 'Retrieve a list of API Requests that have been made.',
  operationId: 'GetApiActivity',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'How many API Events should be retrieved in a single request.',
            in: 'query',
            name: 'limit',
            schema: { default: 50, example: 10, type: 'integer' },
            required: false,
          },
          example: 10,
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'How far into the collection of API Events should the response start',
            in: 'query',
            name: 'offset',
            schema: { default: 0, example: 50, type: 'integer' },
            required: false,
          },
          example: 50,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(APIRequestSchema) } },
      headers: z.object({
        'Content-Range': {
          description:
            'An decription of what part of the collection has been returned as well as the total size.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'An decription of what part of the collection has been returned as well as the total size.',
              param: { required: false },
              example: '1-50/1134',
            }),
        },
      }),
    },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Invalid token signature', status: 401 },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['Health'],
  summary: 'Get state of the server and its dependencies.',
  operationId: 'GetServerHealth',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              dependencies: z.array(ServiceDependencySchema).exactOptional(),
              name: z.string(),
              version: z.string().openapi({ description: "The Connect server's version" }),
            })
            .openapi({ required: ['name', 'version'] }),
          examples: {
            WaitingForAPIRequest: {
              summary: 'API server waiting for first authenticated request',
              value: {
                dependencies: [
                  { service: 'sync', status: 'TOKEN_NEEDED' },
                  {
                    message: 'Connected to./1password.sqlite',
                    service: 'sqlite',
                    status: 'ACTIVE',
                  },
                ],
                name: '1Password Connect API',
                version: '1.2.1',
              },
            },
          },
        },
      },
    },
  },
  servers: [{ url: 'http://localhost:8080' }],
})

export const getHeartbeatRoute = createRoute({
  method: 'get',
  path: '/heartbeat',
  tags: ['Health'],
  summary: 'Ping the server for liveness',
  operationId: 'GetHeartbeat',
  responses: {
    200: {
      description: 'OK',
      content: { 'text/plain': { schema: z.string().openapi({ example: '.' }) } },
    },
  },
  servers: [{ url: 'http://localhost:8080' }],
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  tags: ['Metrics'],
  summary: 'Query server for exposed Prometheus metrics',
  description: 'See Prometheus documentation for a complete data model.',
  operationId: 'GetPrometheusMetrics',
  responses: {
    200: {
      description: 'Successfully returned Prometheus metrics',
      content: {
        'text/plain': {
          schema: z
            .string()
            .openapi({
              example:
                '# HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.\n# TYPE go_gc_duration_seconds summary\ngo_gc_duration_seconds{quantile="0"} 2.9153e-05\ngo_gc_duration_seconds{quantile="0.25"} 6.2832e-05\ngo_gc_duration_seconds{quantile="0.5"} 9.7187e-05\ngo_gc_duration_seconds{quantile="0.75"} 0.000112967\ngo_gc_duration_seconds{quantile="1"} 0.000215819\ngo_gc_duration_seconds_sum 0.001376862\ngo_gc_duration_seconds_count 14\n',
            }),
        },
      },
    },
  },
  servers: [{ url: 'http://localhost:8080' }],
})

export const getVaultsRoute = createRoute({
  method: 'get',
  path: '/vaults',
  tags: ['Vaults'],
  summary: 'Get all Vaults',
  operationId: 'GetVaults',
  request: {
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the Vault collection based on Vault name using SCIM eq filter',
            in: 'query',
            name: 'filter',
            schema: { example: 'name eq "Some Vault Name"', type: 'string' },
            required: false,
          },
          example: 'name eq "Some Vault Name"',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(VaultSchema) } } },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Invalid token signature', status: 401 },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
})

export const getVaultsVaultUuidRoute = createRoute({
  method: 'get',
  path: '/vaults/{vaultUuid}',
  tags: ['Vaults'],
  summary: 'Get Vault details and metadata',
  operationId: 'GetVaultById',
  request: {
    params: z.object({
      vaultUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            description: 'The UUID of the Vault to fetch Items from',
            in: 'path',
            name: 'vaultUuid',
            required: true,
            schema: { pattern: '^[\\da-z]{26}$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: VaultSchema } } },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Invalid token signature', status: 401 },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'vault {vaultUuid} is not in scope', status: 403 },
        },
      },
    },
    404: {
      description: 'Vault not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'vault {itemUuid} not found', status: 404 },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
})

export const getVaultsVaultUuidItemsRoute = createRoute({
  method: 'get',
  path: '/vaults/{vaultUuid}/items',
  tags: ['Items'],
  summary: 'Get all items for inside a Vault',
  operationId: 'GetVaultItems',
  request: {
    params: z.object({
      vaultUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            description: 'The UUID of the Vault to fetch Items from',
            in: 'path',
            name: 'vaultUuid',
            required: true,
            schema: { pattern: '^[\\da-z]{26}$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the Item collection based on Item name using SCIM eq filter',
            in: 'query',
            name: 'filter',
            schema: { example: 'title eq "Some Item Name"', type: 'string' },
            required: false,
          },
          example: 'title eq "Some Item Name"',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(ItemSchema) } } },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Invalid token signature', status: 401 },
        },
      },
    },
    404: {
      description: 'Vault not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'vault {vaultUuid} not found', status: 404 },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
})

export const postVaultsVaultUuidItemsRoute = createRoute({
  method: 'post',
  path: '/vaults/{vaultUuid}/items',
  tags: ['Items'],
  summary: 'Create a new Item',
  operationId: 'CreateVaultItem',
  request: {
    params: z.object({
      vaultUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            description: 'The UUID of the Vault to create an Item in',
            in: 'path',
            name: 'vaultUuid',
            required: true,
            schema: { pattern: '^[\\da-z]{26}$', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FullItemSchema } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FullItemSchema } } },
    400: {
      description: 'Unable to create item due to invalid input',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Invalid item category', status: 400 },
        },
      },
    },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Invalid token signature', status: 401 },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'vault {vaultUuid} is not in scope', status: 403 },
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            vaultNotFound: {
              summary: 'Vault not found',
              value: { message: 'vault {vaultUuid} not found', status: 404 },
            },
          },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
})

export const getVaultsVaultUuidItemsItemUuidRoute = createRoute({
  method: 'get',
  path: '/vaults/{vaultUuid}/items/{itemUuid}',
  tags: ['Items'],
  summary: 'Get the details of an Item',
  operationId: 'GetVaultItemById',
  request: {
    params: z.object({
      vaultUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            description: 'The UUID of the Vault to fetch Item from',
            in: 'path',
            name: 'vaultUuid',
            required: true,
            schema: { pattern: '^[\\da-z]{26}$', type: 'string' },
          },
        }),
      itemUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            description: 'The UUID of the Item to fetch',
            in: 'path',
            name: 'itemUuid',
            required: true,
            schema: { pattern: '^[\\da-z]{26}$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FullItemSchema } } },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Invalid token signature', status: 401 },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'vault {vaultUuid} is not in scope', status: 403 },
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            itemNotFound: {
              summary: 'Item not found',
              value: { message: 'item {itemUuid} not found', status: 404 },
            },
            vaultNotFound: {
              summary: 'Vault not found',
              value: { message: 'vault {vaultUuid} not found', status: 404 },
            },
          },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
})

export const putVaultsVaultUuidItemsItemUuidRoute = createRoute({
  method: 'put',
  path: '/vaults/{vaultUuid}/items/{itemUuid}',
  tags: ['Items'],
  summary: 'Update an Item',
  operationId: 'UpdateVaultItem',
  request: {
    params: z.object({
      vaultUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            description: "The UUID of the Item's Vault",
            in: 'path',
            name: 'vaultUuid',
            required: true,
            schema: { pattern: '^[\\da-z]{26}$', type: 'string' },
          },
        }),
      itemUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            description: 'The UUID of the Item to update',
            in: 'path',
            name: 'itemUuid',
            required: true,
            schema: { pattern: '^[\\da-z]{26}$', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FullItemSchema } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FullItemSchema } } },
    400: {
      description: 'Unable to create item due to invalid input',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: "The item doesn't have a {example field name} field.", status: 400 },
        },
      },
    },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Invalid token signature', status: 401 },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'vault {vaultUuid} is not in scope', status: 403 },
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            itemNotFound: {
              summary: 'Item not found',
              value: { message: 'item {itemUuid} not found', status: 404 },
            },
            vaultNotFound: {
              summary: 'Vault not found',
              value: { message: 'vault {vaultUuid} not found', status: 404 },
            },
          },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
})

export const deleteVaultsVaultUuidItemsItemUuidRoute = createRoute({
  method: 'delete',
  path: '/vaults/{vaultUuid}/items/{itemUuid}',
  tags: ['Items'],
  summary: 'Delete an Item',
  operationId: 'DeleteVaultItem',
  request: {
    params: z.object({
      vaultUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            description: 'The UUID of the Vault the item is in',
            in: 'path',
            name: 'vaultUuid',
            required: true,
            schema: { pattern: '^[\\da-z]{26}$', type: 'string' },
          },
        }),
      itemUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            description: 'The UUID of the Item to update',
            in: 'path',
            name: 'itemUuid',
            required: true,
            schema: { pattern: '^[\\da-z]{26}$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successfully deleted an item' },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Invalid token signature', status: 401 },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'vault {vaultUuid} is not in scope', status: 403 },
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            vaultNotFound: {
              summary: 'Vault not found',
              value: { message: 'vault {vaultUuid} not found', status: 404 },
            },
          },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
})

export const patchVaultsVaultUuidItemsItemUuidRoute = createRoute({
  method: 'patch',
  path: '/vaults/{vaultUuid}/items/{itemUuid}',
  tags: ['Items'],
  summary: 'Update a subset of Item attributes',
  description:
    "Applies a modified [RFC6902 JSON Patch](https://tools.ietf.org/html/rfc6902) document to an Item or ItemField. This endpoint only supports `add`, `remove` and `replace` operations.\n\nWhen modifying a specific ItemField, the ItemField's ID in the `path` attribute of the operation object: `/fields/{fieldId}`\n",
  operationId: 'PatchVaultItem',
  request: {
    params: z.object({
      vaultUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            description: 'The UUID of the Vault the item is in',
            in: 'path',
            name: 'vaultUuid',
            required: true,
            schema: { pattern: '^[\\da-z]{26}$', type: 'string' },
          },
        }),
      itemUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            description: 'The UUID of the Item to update',
            in: 'path',
            name: 'itemUuid',
            required: true,
            schema: { pattern: '^[\\da-z]{26}$', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PatchSchema,
          examples: {
            PatchItemAttr: {
              summary: 'Update specific Item attributes',
              value: [
                { op: 'replace', path: '/favorite', value: true },
                { op: 'remove', path: '/tags/1' },
              ],
            },
            PatchItemField: {
              summary: 'Add a new ItemField to the Item',
              value: [
                {
                  op: 'add',
                  path: '/fields',
                  value: { label: 'New Field', type: 'string', value: 'hunter2' },
                },
              ],
            },
            PatchItemFieldAttr: {
              summary: 'Modify a specific ItemField attribute.',
              value: [
                {
                  op: 'add',
                  path: '/fields/s2ju540zlna8bdj4uro7sj64rk/label',
                  value: 'New field name',
                },
                { op: 'remove', path: '/fields/s2ju540zlna8bdj4uro7sj64rk/value' },
              ],
            },
            PatchItemFieldWithID: {
              summary: 'Modify or remove an ItemField.',
              value: [
                {
                  op: 'replace',
                  path: '/fields/r9qxq7xnhfhukoxsc8ymqr0y11',
                  value: { label: 'Replacement Title', type: 'string', value: 'new value' },
                },
                { op: 'remove', path: '/fields/h2nl155dshi043yse7wa3u1hs7' },
              ],
            },
            ReplaceAllAttributes: {
              summary: 'Replace an entire Item with new fields. Equivalent to a PUT request.',
              value: [
                {
                  op: 'replace',
                  path: '/',
                  value: {
                    '...': 'Any attr from FullItem schema',
                    favorite: true,
                    tags: ['tag1', 'tag2'],
                    title: 'New Title',
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - Item updated. If no Patch operations were provided, Item is unmodified.',
      content: { 'application/json': { schema: FullItemSchema } },
    },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Invalid token signature', status: 401 },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'vault {vaultUuid} is not in scope', status: 403 },
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            itemNotFound: {
              summary: 'Item not found',
              value: { message: 'item {itemUuid} not found', status: 404 },
            },
            vaultNotFound: {
              summary: 'Vault not found',
              value: { message: 'vault {vaultUuid} not found', status: 404 },
            },
          },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
})

export const getVaultsVaultUuidItemsItemUuidFilesRoute = createRoute({
  method: 'get',
  path: '/vaults/{vaultUuid}/items/{itemUuid}/files',
  tags: ['Files'],
  summary: 'Get all the files inside an Item',
  operationId: 'GetItemFiles',
  request: {
    params: z.object({
      vaultUuid: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the Vault to fetch Items from',
            in: 'path',
            name: 'vaultUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      itemUuid: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the Item to fetch files from',
            in: 'path',
            name: 'itemUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      inline_files: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Tells server to return the base64-encoded file contents in the response.',
            in: 'query',
            name: 'inline_files',
            schema: { example: true, type: 'boolean' },
            required: false,
          },
          example: true,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(FileSchema) } } },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Invalid token signature', status: 401 },
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            itemNotFound: {
              summary: 'Item not found',
              value: { message: 'item {itemUuid} not found', status: 404 },
            },
            vaultNotFound: {
              summary: 'Vault not found',
              value: { message: 'vault {vaultUuid} not found', status: 404 },
            },
          },
        },
      },
    },
    413: {
      description: 'File content too large to display',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            fileTooLarge: {
              summary: 'File too large',
              value: {
                message:
                  'File is too large to inline in request. Use the /v1/vaults/{vaultUUID}/items/{itemUUID}/files/{fileUUID}/content endpoint instead.',
                status: 413,
              },
            },
          },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
})

export const getVaultsVaultUuidItemsItemUuidFilesFileUuidRoute = createRoute({
  method: 'get',
  path: '/vaults/{vaultUuid}/items/{itemUuid}/files/{fileUuid}',
  tags: ['Files'],
  summary: 'Get the details of a File',
  operationId: 'GetDetailsOfFileById',
  request: {
    params: z.object({
      vaultUuid: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the Vault to fetch Item from',
            in: 'path',
            name: 'vaultUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      itemUuid: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the Item to fetch File from',
            in: 'path',
            name: 'itemUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      fileUuid: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the File to fetch',
            in: 'path',
            name: 'fileUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      inline_files: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Tells server to return the base64-encoded file contents in the response.',
            in: 'query',
            name: 'inline_files',
            schema: { example: true, type: 'boolean' },
            required: false,
          },
          example: true,
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FileSchema } } },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Invalid token signature', status: 401 },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'vault {vaultUuid} is not in scope', status: 403 },
        },
      },
    },
    404: {
      description: 'File not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            fileNotFound: {
              summary: 'File not found',
              value: { message: 'file {fileUuid} not found', status: 404 },
            },
            itemNotFound: {
              summary: 'Item not found',
              value: { message: 'item {itemUuid} not found', status: 404 },
            },
            vaultNotFound: {
              summary: 'Vault not found',
              value: { message: 'vault {vaultUuid} not found', status: 404 },
            },
          },
        },
      },
    },
    413: {
      description: 'File content too large to display',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            fileTooLarge: {
              summary: 'File too large',
              value: {
                message:
                  'File is too large to inline in request. Use the /v1/vaults/{vaultUUID}/items/{itemUUID}/files/{fileUUID}/content endpoint instead.',
                status: 413,
              },
            },
          },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
})

export const getVaultsVaultUuidItemsItemUuidFilesFileUuidContentRoute = createRoute({
  method: 'get',
  path: '/vaults/{vaultUuid}/items/{itemUuid}/files/{fileUuid}/content',
  tags: ['Files'],
  summary: 'Get the content of a File',
  operationId: 'DownloadFileByID',
  request: {
    params: z.object({
      vaultUuid: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the Vault the item is in',
            in: 'path',
            name: 'vaultUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      itemUuid: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the Item the File is in',
            in: 'path',
            name: 'itemUuid',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      fileUuid: z
        .string()
        .openapi({
          param: {
            description: 'UUID of the file to get content from',
            in: 'path',
            name: 'fileUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
      headers: z.object({
        'Content-Disposition': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'attachment; filename="privkey.pem"' }),
        },
        'Content-Length': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '6432' }),
        },
      }),
    },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Invalid token signature', status: 401 },
        },
      },
    },
    404: {
      description: 'File not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          examples: {
            fileNotFound: {
              summary: 'File not found',
              value: { message: 'file {fileUuid} not found', status: 404 },
            },
            itemNotFound: {
              summary: 'Item not found',
              value: { message: 'item {itemUuid} not found', status: 404 },
            },
            vaultNotFound: {
              summary: 'Vault not found',
              value: { message: 'vault {vaultUuid} not found', status: 404 },
            },
          },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
})
