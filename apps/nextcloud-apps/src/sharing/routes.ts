import { createRoute, z } from '@hono/zod-openapi'

const SourceTypeSchema = z
  .object({ class: z.string().min(1) })
  .openapi({ required: ['class'] })
  .openapi('SourceType')

const PermissionPresetSchema = z
  .object({
    class: z.string().min(1),
    display_name: z.string().min(1),
    hint: z.string().min(1).nullable(),
  })
  .openapi({ required: ['class', 'display_name', 'hint'] })
  .openapi('PermissionPreset')

const CapabilitiesSchema = z
  .object({
    sharing: z
      .object({
        api_versions: z.array(z.literal('v1')),
        source_types: z.array(SourceTypeSchema),
        permission_presets: z.array(PermissionPresetSchema),
      })
      .exactOptional()
      .openapi({ required: ['api_versions', 'source_types', 'permission_presets'] }),
  })
  .openapi({ required: [] })
  .openapi('Capabilities')

const IconSVGSchema = z
  .object({
    svg: z
      .string()
      .min(1)
      .openapi({ description: 'An SVG using the currentColor value for dynamic theming.' }),
  })
  .openapi({ required: ['svg'] })
  .openapi('IconSVG')

const IconURLSchema = z
  .object({
    light: z
      .string()
      .min(1)
      .openapi({ description: 'An absolute URL to an image suitable for light theme.' }),
    dark: z
      .string()
      .min(1)
      .openapi({ description: 'An absolute URL to an image suitable for dark theme.' }),
  })
  .openapi({ required: ['light', 'dark'] })
  .openapi('IconURL')

const IconSchema = z.union([IconSVGSchema, IconURLSchema]).openapi('Icon')

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

const PermissionSchema = z
  .object({
    class: z.string().min(1),
    source_class: z.string().min(1).nullable(),
    display_name: z.string().min(1),
    hint: z.string().min(1).nullable(),
    priority: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(100n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 1, maximum: 100 }),
    presets: z.array(z.string().min(1)),
    enabled: z.boolean(),
  })
  .openapi({
    required: ['class', 'source_class', 'display_name', 'hint', 'priority', 'presets', 'enabled'],
  })
  .openapi('Permission')

const PropertySchema = z
  .object({
    class: z.string().min(1),
    display_name: z.string().min(1),
    hint: z.string().min(1).nullable(),
    priority: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(100n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 1, maximum: 100 }),
    required: z.boolean(),
    advanced: z.boolean(),
    value: z.string().nullable(),
  })
  .openapi({
    required: ['class', 'display_name', 'hint', 'priority', 'required', 'advanced', 'value'],
  })
  .openapi('Property')

const PropertyBooleanSchema = PropertySchema.and(
  z.object({ type: z.literal('boolean') }).openapi({ required: ['type'] }),
).openapi('PropertyBoolean')

const PropertyDateSchema = PropertySchema.and(
  z
    .object({
      type: z.literal('date'),
      min_date: z.string().min(1).nullable().openapi({ description: 'ISO 8601' }),
      max_date: z.string().min(1).nullable().openapi({ description: 'ISO 8601' }),
    })
    .openapi({ required: ['type', 'min_date', 'max_date'] }),
).openapi('PropertyDate')

const PropertyEnumSchema = PropertySchema.and(
  z
    .object({ type: z.literal('enum'), valid_values: z.array(z.string()).min(1) })
    .openapi({ required: ['type', 'valid_values'] }),
).openapi('PropertyEnum')

const PropertyPasswordSchema = PropertySchema.and(
  z.object({ type: z.literal('password') }).openapi({ required: ['type'] }),
).openapi('PropertyPassword')

const PropertyStringSchema = PropertySchema.and(
  z
    .object({
      type: z.literal('string'),
      min_length: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().min(1n),
        )
        .nullable()
        .openapi({ type: ['integer', 'null'], format: 'int64', minimum: 1 }),
      max_length: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().min(1n),
        )
        .nullable()
        .openapi({ type: ['integer', 'null'], format: 'int64', minimum: 1 }),
    })
    .openapi({ required: ['type', 'min_length', 'max_length'] }),
).openapi('PropertyString')

const UserSchema = z
  .object({
    user_id: z.string().min(1),
    instance: z.string().min(1).nullable(),
    display_name: z.string().min(1),
    icon: IconSchema,
  })
  .openapi({ required: ['user_id', 'instance', 'display_name', 'icon'] })
  .openapi('User')

const RecipientSchema = z
  .object({
    class: z.string().min(1),
    value: z.string().min(1),
    instance: z.string().min(1).nullable(),
    display_name: z.string().min(1),
    icon: IconSchema.nullable(),
    secret: z
      .object({
        updatable: z.boolean(),
        value: z.string().min(1).exactOptional(),
        url: z.string().min(1).exactOptional(),
      })
      .openapi({ required: ['updatable'] }),
    initiator: UserSchema.nullable(),
    permissions: z.array(PermissionSchema),
  })
  .openapi({
    required: [
      'class',
      'value',
      'instance',
      'display_name',
      'icon',
      'secret',
      'initiator',
      'permissions',
    ],
  })
  .openapi('Recipient')

const StateSchema = z.enum(['active', 'draft', 'deleted']).openapi('State')

const UserStatusSchema = z.enum(['pending', 'accepted', 'rejected']).openapi('UserStatus')

const SourceSchema = z
  .object({
    class: z.string().min(1),
    value: z.string().min(1),
    display_name: z.string().min(1),
    icon: IconSchema.nullable(),
  })
  .openapi({ required: ['class', 'value', 'display_name', 'icon'] })
  .openapi('Source')

const ShareSchema = z
  .object({
    id: z.string().min(1),
    owner: UserSchema,
    last_updated: z.string().openapi({ description: 'Unix time in milliseconds' }),
    state: StateSchema,
    user_status: UserStatusSchema.nullable(),
    sources: z.array(SourceSchema),
    recipients: z.array(RecipientSchema),
    properties: z.array(
      z.union([
        PropertyDateSchema,
        PropertyEnumSchema,
        PropertyBooleanSchema,
        PropertyPasswordSchema,
        PropertyStringSchema,
      ]),
    ),
    permissions: z.array(PermissionSchema),
    permission_preset: z.string().min(1).nullable(),
  })
  .openapi({
    required: [
      'id',
      'owner',
      'last_updated',
      'state',
      'user_status',
      'sources',
      'recipients',
      'properties',
      'permissions',
      'permission_preset',
    ],
  })
  .openapi('Share')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getOcsV2PhpAppsSharingApiV1RecipientsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/sharing/api/v1/recipients',
  tags: ['api_v1'],
  summary: 'Search for recipients that can be added to a share.',
  operationId: 'api_v1-search-recipients',
  request: {
    query: z.object({
      'filterRecipientTypeClasses[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().min(1)),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'filterRecipientTypeClasses[]',
            in: 'query',
            description: 'Type classes of recipients to filter by',
            schema: { type: 'array', nullable: true, items: { type: 'string', minLength: 1 } },
            required: false,
          },
        }),
      query: z
        .string()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              'The query to search for, if the query is empty, recommended recipients will be returned',
            required: true,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(100n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of participants',
            schema: { type: 'integer', format: 'int64', default: 10, minimum: 1, maximum: 100 },
            required: false,
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'The offset of the participants',
            schema: { type: 'integer', format: 'int64', default: 0, minimum: 0 },
            required: false,
          },
        }),
      id: z
        .string()
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description:
              'If provided, recipients that are already part of the share will not be returned.',
            schema: { type: 'string', nullable: true, default: null },
            required: false,
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
      description: 'Recipients returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(RecipientSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        Link: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Invalid recipient search parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
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
    404: {
      description: 'Share used for filtering existing recipients does not exist',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSharingApiV1SecretRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/sharing/api/v1/secret',
  tags: ['api_v1'],
  summary: 'Generate a new secret.',
  operationId: 'api_v1-generate-secret',
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
      description: 'Generated secret returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSharingApiV1ShareRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/sharing/api/v1/share',
  tags: ['api_v1'],
  summary: 'Create a new share.',
  operationId: 'api_v1-create-share',
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
    201: {
      description: 'Share created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSharingApiV1ShareIdStateRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/sharing/api/v1/share/{id}/state',
  tags: ['api_v1'],
  summary: 'Update the state of a share.',
  operationId: 'api_v1-update-share-state',
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
            .object({ state: StateSchema.openapi({ description: 'New state of the share' }) })
            .openapi({ required: ['state'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Share state updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid share state',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
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
      description: 'Updating the share state is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSharingApiV1ShareIdUserStatusRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/sharing/api/v1/share/{id}/user-status',
  tags: ['api_v1'],
  summary: 'Update the user status for a share.',
  operationId: 'api_v1-update-share-user-status',
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
              userStatus: UserStatusSchema.openapi({
                description: 'New user status for the share',
              }),
            })
            .openapi({ required: ['userStatus'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User status for share updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid share user status',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
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
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSharingApiV1ShareIdSourceRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/sharing/api/v1/share/{id}/source',
  tags: ['api_v1'],
  summary: 'Add a new source to a share.',
  operationId: 'api_v1-add-share-source',
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
              class: z.string().min(1).openapi({ description: 'Type class of the source' }),
              value: z.string().min(1).openapi({ description: 'Value of the source' }),
            })
            .openapi({ required: ['class', 'value'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Share source added successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid share source',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
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
      description: 'Adding the share source is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSharingApiV1ShareIdSourceRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/sharing/api/v1/share/{id}/source',
  tags: ['api_v1'],
  summary: 'Remove an existing source from a share.',
  operationId: 'api_v1-remove-share-source',
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
    query: z.object({
      class: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'class',
            in: 'query',
            description: 'Type class of the source',
            required: true,
            schema: { type: 'string', minLength: 1 },
          },
        }),
      value: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description: 'Value of the source',
            required: true,
            schema: { type: 'string', minLength: 1 },
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
      description: 'Share source removed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
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
      description: 'Removing the share source is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSharingApiV1ShareIdRecipientRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/sharing/api/v1/share/{id}/recipient',
  tags: ['api_v1'],
  summary: 'Add a new recipient to a share.',
  operationId: 'api_v1-add-share-recipient',
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
              class: z.string().min(1).openapi({ description: 'Type class of the recipient' }),
              value: z.string().min(1).openapi({ description: 'Value of the recipient' }),
              instance: z
                .string()
                .min(1)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Instance of the recipient' }),
            })
            .openapi({ required: ['class', 'value'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Share recipient added successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid share recipient',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
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
      description: 'Adding the share recipient is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSharingApiV1ShareIdRecipientRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/sharing/api/v1/share/{id}/recipient',
  tags: ['api_v1'],
  summary: 'Remove an existing recipient from a share.',
  operationId: 'api_v1-remove-share-recipient',
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
    query: z.object({
      class: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'class',
            in: 'query',
            description: 'Type class of the recipient',
            required: true,
            schema: { type: 'string', minLength: 1 },
          },
        }),
      value: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description: 'Value of the recipient',
            required: true,
            schema: { type: 'string', minLength: 1 },
          },
        }),
      instance: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.string().min(1).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'instance',
            in: 'query',
            description: 'Instance of the recipient',
            schema: { type: 'string', nullable: true, minLength: 1 },
            required: false,
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
      description: 'Share recipient removed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
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
      description: 'Removing the share recipient is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSharingApiV1ShareIdRecipientSecretRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/sharing/api/v1/share/{id}/recipient/secret',
  tags: ['api_v1'],
  summary: 'Update the secret of a recipient.',
  operationId: 'api_v1-update-share-recipient-secret',
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
              class: z.string().min(1).openapi({ description: 'Type class of the recipient' }),
              value: z.string().min(1).openapi({ description: 'Value of the recipient' }),
              instance: z
                .string()
                .min(1)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Instance of the recipient' }),
              secret: z.string().min(1).openapi({ description: 'Secret of the recipient' }),
            })
            .openapi({ required: ['class', 'value', 'secret'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Share recipient secret updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid secret',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
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
      description: 'Updating the share recipient secret is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSharingApiV1ShareIdPropertyRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/sharing/api/v1/share/{id}/property',
  tags: ['api_v1'],
  summary: 'Update a property of a share.',
  operationId: 'api_v1-update-share-property',
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
              class: z.string().min(1).openapi({ description: 'Type class of the property' }),
              value: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Value of the property' }),
            })
            .openapi({ required: ['class'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Share property updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid share property',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
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
      description: 'Updating the share property is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSharingApiV1ShareIdPermissionRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/sharing/api/v1/share/{id}/permission',
  tags: ['api_v1'],
  summary: 'Update a permission of a share.',
  operationId: 'api_v1-update-share-permission',
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
              class: z.string().min(1).openapi({ description: 'Type class of the permission' }),
              enabled: z.boolean().openapi({ description: 'Enabled state of the permission' }),
            })
            .openapi({ required: ['class', 'enabled'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Share permission updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid share permission',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
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
      description: 'Updating the share permission is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSharingApiV1ShareIdRecipientPermissionRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/sharing/api/v1/share/{id}/recipient/permission',
  tags: ['api_v1'],
  summary: 'Update a permission for a recipient of a share.',
  operationId: 'api_v1-update-share-recipient-permission',
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
              recipientClass: z
                .string()
                .min(1)
                .openapi({ description: 'Type class of the recipient' }),
              recipientValue: z.string().min(1).openapi({ description: 'Value of the recipient' }),
              recipientInstance: z
                .string()
                .min(1)
                .nullable()
                .exactOptional()
                .openapi({ description: 'Instance of the recipient' }),
              permissionClass: z
                .string()
                .min(1)
                .openapi({ description: 'Type class of the permission' }),
              enabled: z.boolean().openapi({ description: 'Enabled state of the permission' }),
            })
            .openapi({
              required: ['recipientClass', 'recipientValue', 'permissionClass', 'enabled'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Share recipient permission updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
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
      description: 'Updating the share recipient permission is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSharingApiV1ShareIdPermissionPresetRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/sharing/api/v1/share/{id}/permission/preset',
  tags: ['api_v1'],
  summary: 'Select a permission preset for a share.',
  operationId: 'api_v1-select-share-permission-preset',
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
              permissionPresetClass: z
                .string()
                .min(1)
                .openapi({ description: 'New permission preset of the share' }),
            })
            .openapi({ required: ['permissionPresetClass'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Share permission preset selected successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid share permission preset',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
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
      description: 'Selecting the share permission preset is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSharingApiV1ShareIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/sharing/api/v1/share/{id}',
  tags: ['api_v1'],
  summary: 'Get a share.',
  operationId: 'api_v1-get-share',
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
              secret: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Secret of the share' }),
              arguments: z
                .record(z.string(), z.object({}))
                .default({})
                .exactOptional()
                .openapi({ description: 'Arguments for accessing the share' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Share returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ShareSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSharingApiV1ShareIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/sharing/api/v1/share/{id}',
  tags: ['api_v1'],
  summary: 'Delete a share.',
  operationId: 'api_v1-delete-share',
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
  },
  responses: {
    204: { description: 'Share deleted' },
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
      description: 'Deleting the share is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSharingApiV1SharesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/sharing/api/v1/shares',
  tags: ['api_v1'],
  summary: 'Get multiple shares.',
  operationId: 'api_v1-get-shares',
  request: {
    query: z.object({
      filterSourceTypeClass: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.string().min(1).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'filterSourceTypeClass',
            in: 'query',
            description: 'Source type class to filter by.',
            schema: { type: 'string', nullable: true, minLength: 1 },
            required: false,
          },
        }),
      filterSourceTypeValue: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.string().min(1).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'filterSourceTypeValue',
            in: 'query',
            description: 'Source type value to filter by.',
            schema: { type: 'string', nullable: true, minLength: 1 },
            required: false,
          },
        }),
      filterState: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        StateSchema.nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'filterState',
            in: 'query',
            description: 'State to filter by.',
            schema: { nullable: true, allOf: [{ $ref: '#/components/schemas/State' }] },
            required: false,
          },
        }),
      filterUserStatus: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        UserStatusSchema.nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'filterUserStatus',
            in: 'query',
            description: 'User status to filter by.',
            schema: { nullable: true, allOf: [{ $ref: '#/components/schemas/UserStatus' }] },
            required: false,
          },
        }),
      lastShareID: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'lastShareID',
            in: 'query',
            description:
              'The ID of the previous share. This is used as an offset and only shares with higher IDs are returned.',
            schema: { type: 'string', nullable: true },
            required: false,
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(100n))
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The number of shares to return.',
            schema: { type: 'integer', format: 'int64', default: 100, minimum: 1, maximum: 100 },
            required: false,
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
      description: 'Shares returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ShareSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
