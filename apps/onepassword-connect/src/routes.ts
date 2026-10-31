import { createRoute, z } from '@hono/zod-openapi'

const ErrorResponseSchema = z
  .object({
    status: z.int().exactOptional().openapi({ description: 'HTTP Status Code' }),
    message: z.string().exactOptional().openapi({ description: 'A message detailing the error' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const FileSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'ID of the file' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the file' }),
    size: z.int().exactOptional().openapi({ description: 'Size in bytes of the file' }),
    content_path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path of the Connect API that can be used to download the contents of this file.',
        readOnly: true,
      }),
    section: z
      .object({ id: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description: 'For files that are in a section, this field describes the section.',
        required: [],
      }),
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Base64-encoded contents of the file. Only set if size <= OP_MAX_INLINE_FILE_SIZE_KB kb and `inline_files` is set to `true`.',
      }),
  })
  .openapi({
    example: {
      id: '6r65pjq33banznomn7q22sj44e',
      name: 'foo.txt',
      size: 35,
      content_path:
        'v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content',
      content: 'VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo=',
    },
    required: [],
  })
  .openapi('File')

const VaultSchema = z
  .object({
    id: z
      .string()
      .regex(/^[\da-z]{26}$/)
      .exactOptional(),
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    attributeVersion: z.int().exactOptional().openapi({ description: 'The vault version' }),
    contentVersion: z
      .int()
      .exactOptional()
      .openapi({ description: 'The version of the vault contents' }),
    items: z.int().exactOptional().openapi({ description: 'Number of active items in the vault' }),
    type: z.enum(['USER_CREATED', 'PERSONAL', 'EVERYONE', 'TRANSFER']).exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Vault')

const GeneratorRecipeSchema = z
  .object({
    length: z
      .int()
      .min(1)
      .max(64)
      .default(32)
      .exactOptional()
      .openapi({ description: 'Length of the generated value' }),
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
  })
  .openapi({
    description:
      'The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value',
    required: [],
  })
  .openapi('GeneratorRecipe')

const ItemSchema = z
  .object({
    id: z
      .string()
      .regex(/^[\da-z]{26}$/)
      .exactOptional(),
    title: z.string().exactOptional(),
    vault: z.object({ id: z.string().regex(/^[\da-z]{26}$/) }).openapi({ required: ['id'] }),
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
    urls: z
      .array(
        z
          .object({
            label: z.string().exactOptional(),
            primary: z.boolean().exactOptional(),
            href: z.url(),
          })
          .openapi({ required: ['href'] }),
      )
      .exactOptional()
      .openapi({
        example: [{ primary: true, href: 'https://example.com' }, { href: 'https://example.org' }],
      }),
    favorite: z.boolean().default(false).exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    version: z.int().exactOptional(),
    state: z.enum(['ARCHIVED', 'DELETED']).exactOptional().openapi({ readOnly: true }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    lastEditedBy: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['vault', 'category'] })
  .openapi('Item')

const FieldSchema = z
  .object({
    id: z.string(),
    section: z.object({ id: z.string().exactOptional() }).exactOptional().openapi({ required: [] }),
    type: z
      .enum(['STRING', 'EMAIL', 'CONCEALED', 'URL', 'TOTP', 'DATE', 'MONTH_YEAR', 'MENU'])
      .default('STRING'),
    purpose: z
      .enum(['', 'USERNAME', 'PASSWORD', 'NOTES'])
      .exactOptional()
      .openapi({
        description:
          'Some item types, Login and Password, have fields used for autofill. This property indicates that purpose and is required for some item types.',
      }),
    label: z.string().exactOptional(),
    value: z.string().exactOptional(),
    generate: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'If value is not present then a new value should be generated for this field',
      }),
    recipe: GeneratorRecipeSchema.exactOptional(),
    entropy: z
      .number()
      .exactOptional()
      .openapi({
        description: 'For fields with a purpose of `PASSWORD` this is the entropy of the value',
        readOnly: true,
      }),
  })
  .openapi({ required: ['id', 'type'] })
  .openapi('Field')

const FullItemSchema = ItemSchema.and(
  z
    .object({
      sections: z
        .array(
          z
            .object({ id: z.string().exactOptional(), label: z.string().exactOptional() })
            .openapi({ required: [] }),
        )
        .exactOptional(),
      fields: z.array(FieldSchema).exactOptional(),
      files: z.array(FileSchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('FullItem')

const APIRequestSchema = z
  .object({
    requestId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The unique id used to identify a single request.' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time at which the request was processed by the server.',
        readOnly: true,
      }),
    action: z.enum(['READ', 'CREATE', 'UPDATE', 'DELETE']).exactOptional(),
    result: z.enum(['SUCCESS', 'DENY']).exactOptional(),
    actor: z
      .object({
        id: z.uuid().exactOptional(),
        account: z.string().exactOptional(),
        jti: z.string().exactOptional(),
        userAgent: z.string().exactOptional(),
        requestIp: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    resource: z
      .object({
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
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'Represents a request that was made to the API. Including what Token was used and what resource was accessed.',
    required: [],
  })
  .openapi('APIRequest')

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
    service: z.string().exactOptional(),
    status: z.string().exactOptional(),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable message for explaining the current state.' }),
  })
  .openapi({ description: 'The state of a registered server dependency.', required: [] })
  .openapi('ServiceDependency')

const ConnectTokenSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

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
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', example: 10, default: 50 },
            description: 'How many API Events should be retrieved in a single request.',
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
            in: 'query',
            name: 'offset',
            schema: { type: 'integer', example: 50, default: 0 },
            description: 'How far into the collection of API Events should the response start',
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
          example: { status: 401, message: 'Invalid token signature' },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
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
            in: 'query',
            name: 'filter',
            schema: { type: 'string', example: 'name eq "Some Vault Name"' },
            description: 'Filter the Vault collection based on Vault name using SCIM eq filter',
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
          example: { status: 401, message: 'Invalid token signature' },
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
            in: 'path',
            name: 'vaultUuid',
            schema: { type: 'string', pattern: '^[\\da-z]{26}$' },
            required: true,
            description: 'The UUID of the Vault to fetch Items from',
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
          example: { status: 401, message: 'Invalid token signature' },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { status: 403, message: 'vault {vaultUuid} is not in scope' },
        },
      },
    },
    404: {
      description: 'Vault not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { status: 404, message: 'vault {itemUuid} not found' },
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
            in: 'path',
            name: 'vaultUuid',
            schema: { type: 'string', pattern: '^[\\da-z]{26}$' },
            required: true,
            description: 'The UUID of the Vault to fetch Items from',
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter',
            schema: { type: 'string', example: 'title eq "Some Item Name"' },
            description: 'Filter the Item collection based on Item name using SCIM eq filter',
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
          example: { status: 401, message: 'Invalid token signature' },
        },
      },
    },
    404: {
      description: 'Vault not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { status: 404, message: 'vault {vaultUuid} not found' },
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
            in: 'path',
            name: 'vaultUuid',
            schema: { type: 'string', pattern: '^[\\da-z]{26}$' },
            required: true,
            description: 'The UUID of the Vault to create an Item in',
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
          example: { status: 400, message: 'Invalid item category' },
        },
      },
    },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { status: 401, message: 'Invalid token signature' },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { status: 403, message: 'vault {vaultUuid} is not in scope' },
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
              value: { status: 404, message: 'vault {vaultUuid} not found' },
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
            in: 'path',
            name: 'vaultUuid',
            schema: { type: 'string', pattern: '^[\\da-z]{26}$' },
            required: true,
            description: 'The UUID of the Vault to fetch Item from',
          },
        }),
      itemUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'itemUuid',
            schema: { type: 'string', pattern: '^[\\da-z]{26}$' },
            required: true,
            description: 'The UUID of the Item to fetch',
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
          example: { status: 401, message: 'Invalid token signature' },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { status: 403, message: 'vault {vaultUuid} is not in scope' },
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
              value: { status: 404, message: 'item {itemUuid} not found' },
            },
            vaultNotFound: {
              summary: 'Vault not found',
              value: { status: 404, message: 'vault {vaultUuid} not found' },
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
            in: 'path',
            name: 'vaultUuid',
            schema: { type: 'string', pattern: '^[\\da-z]{26}$' },
            required: true,
            description: "The UUID of the Item's Vault",
          },
        }),
      itemUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'itemUuid',
            schema: { type: 'string', pattern: '^[\\da-z]{26}$' },
            required: true,
            description: 'The UUID of the Item to update',
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
          example: { status: 400, message: "The item doesn't have a {example field name} field." },
        },
      },
    },
    401: {
      description: 'Invalid or missing token',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { status: 401, message: 'Invalid token signature' },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { status: 403, message: 'vault {vaultUuid} is not in scope' },
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
              value: { status: 404, message: 'item {itemUuid} not found' },
            },
            vaultNotFound: {
              summary: 'Vault not found',
              value: { status: 404, message: 'vault {vaultUuid} not found' },
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
            in: 'path',
            name: 'vaultUuid',
            schema: { type: 'string', pattern: '^[\\da-z]{26}$' },
            required: true,
            description: 'The UUID of the Vault the item is in',
          },
        }),
      itemUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'itemUuid',
            schema: { type: 'string', pattern: '^[\\da-z]{26}$' },
            required: true,
            description: 'The UUID of the Item to update',
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
          example: { status: 401, message: 'Invalid token signature' },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { status: 403, message: 'vault {vaultUuid} is not in scope' },
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
              value: { status: 404, message: 'vault {vaultUuid} not found' },
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
            in: 'path',
            name: 'vaultUuid',
            schema: { type: 'string', pattern: '^[\\da-z]{26}$' },
            required: true,
            description: 'The UUID of the Vault the item is in',
          },
        }),
      itemUuid: z
        .string()
        .regex(/^[\da-z]{26}$/)
        .openapi({
          param: {
            in: 'path',
            name: 'itemUuid',
            schema: { type: 'string', pattern: '^[\\da-z]{26}$' },
            required: true,
            description: 'The UUID of the Item to update',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PatchSchema,
          examples: {
            ReplaceAllAttributes: {
              summary: 'Replace an entire Item with new fields. Equivalent to a PUT request.',
              value: [
                {
                  op: 'replace',
                  path: '/',
                  value: {
                    title: 'New Title',
                    favorite: true,
                    tags: ['tag1', 'tag2'],
                    '...': 'Any attr from FullItem schema',
                  },
                },
              ],
            },
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
          example: { status: 401, message: 'Invalid token signature' },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { status: 403, message: 'vault {vaultUuid} is not in scope' },
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
              value: { status: 404, message: 'item {itemUuid} not found' },
            },
            vaultNotFound: {
              summary: 'Vault not found',
              value: { status: 404, message: 'vault {vaultUuid} not found' },
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
            in: 'path',
            name: 'vaultUuid',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'The UUID of the Vault to fetch Items from',
          },
        }),
      itemUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'itemUuid',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'The UUID of the Item to fetch files from',
          },
        }),
    }),
    query: z.object({
      inline_files: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'inline_files',
            schema: { type: 'boolean', example: true },
            description: 'Tells server to return the base64-encoded file contents in the response.',
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
          example: { status: 401, message: 'Invalid token signature' },
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
              value: { status: 404, message: 'item {itemUuid} not found' },
            },
            vaultNotFound: {
              summary: 'Vault not found',
              value: { status: 404, message: 'vault {vaultUuid} not found' },
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
                status: 413,
                message:
                  'File is too large to inline in request. Use the /v1/vaults/{vaultUUID}/items/{itemUUID}/files/{fileUUID}/content endpoint instead.',
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
            in: 'path',
            name: 'vaultUuid',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'The UUID of the Vault to fetch Item from',
          },
        }),
      itemUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'itemUuid',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'The UUID of the Item to fetch File from',
          },
        }),
      fileUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'fileUuid',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'The UUID of the File to fetch',
          },
        }),
    }),
    query: z.object({
      inline_files: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'inline_files',
            schema: { type: 'boolean', example: true },
            description: 'Tells server to return the base64-encoded file contents in the response.',
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
          example: { status: 401, message: 'Invalid token signature' },
        },
      },
    },
    403: {
      description: 'Unauthorized access',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { status: 403, message: 'vault {vaultUuid} is not in scope' },
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
              value: { status: 404, message: 'file {fileUuid} not found' },
            },
            itemNotFound: {
              summary: 'Item not found',
              value: { status: 404, message: 'item {itemUuid} not found' },
            },
            vaultNotFound: {
              summary: 'Vault not found',
              value: { status: 404, message: 'vault {vaultUuid} not found' },
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
                status: 413,
                message:
                  'File is too large to inline in request. Use the /v1/vaults/{vaultUUID}/items/{itemUUID}/files/{fileUUID}/content endpoint instead.',
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
            in: 'path',
            name: 'vaultUuid',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'The UUID of the Vault the item is in',
          },
        }),
      itemUuid: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'itemUuid',
            schema: { type: 'string', format: 'uuid' },
            required: true,
            description: 'The UUID of the Item the File is in',
          },
        }),
      fileUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'fileUuid',
            required: true,
            schema: { type: 'string' },
            description: 'UUID of the file to get content from',
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
          example: { status: 401, message: 'Invalid token signature' },
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
              value: { status: 404, message: 'file {fileUuid} not found' },
            },
            itemNotFound: {
              summary: 'Item not found',
              value: { status: 404, message: 'item {itemUuid} not found' },
            },
            vaultNotFound: {
              summary: 'Vault not found',
              value: { status: 404, message: 'vault {vaultUuid} not found' },
            },
          },
        },
      },
    },
  },
  security: [{ ConnectToken: [] }],
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
              name: z.string(),
              version: z.string().openapi({ description: "The Connect server's version" }),
              dependencies: z.array(ServiceDependencySchema).exactOptional(),
            })
            .openapi({ required: ['name', 'version'] }),
          examples: {
            WaitingForAPIRequest: {
              summary: 'API server waiting for first authenticated request',
              value: {
                name: '1Password Connect API',
                version: '1.2.1',
                dependencies: [
                  { service: 'sync', status: 'TOKEN_NEEDED' },
                  {
                    service: 'sqlite',
                    status: 'ACTIVE',
                    message: 'Connected to./1password.sqlite',
                  },
                ],
              },
            },
          },
        },
      },
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
