import { createRoute, z } from '@hono/zod-openapi'

const CapabilitiesSchema = z
  .object({
    provisioning_api: z
      .object({
        version: z.string(),
        AccountPropertyScopesVersion: z
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
        AccountPropertyScopesFederatedEnabled: z.boolean(),
        AccountPropertyScopesPublishedEnabled: z.boolean(),
      })
      .openapi({
        required: [
          'version',
          'AccountPropertyScopesVersion',
          'AccountPropertyScopesFederatedEnabled',
          'AccountPropertyScopesPublishedEnabled',
        ],
      }),
  })
  .openapi({ required: ['provisioning_api'] })
  .openapi('Capabilities')

const GroupDetailsSchema = z
  .object({
    id: z.string(),
    displayname: z.string(),
    usercount: z.xor([
      z.boolean(),
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
    ]),
    disabled: z.xor([
      z.boolean(),
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
    ]),
    canAdd: z.boolean(),
    canRemove: z.boolean(),
  })
  .openapi({ required: ['id', 'displayname', 'usercount', 'disabled', 'canAdd', 'canRemove'] })
  .openapi('GroupDetails')

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

const UserDetailsScopeSchema = z
  .enum(['v2-private', 'v2-local', 'v2-federated', 'v2-published'])
  .openapi('UserDetailsScope')

const UserDetailsQuotaSchema = z
  .object({
    free: z
      .union([
        z.float64(),
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
      ])
      .exactOptional(),
    quota: z
      .union([
        z.float64(),
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
        z.string(),
      ])
      .exactOptional(),
    relative: z
      .union([
        z.float64(),
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
      ])
      .exactOptional(),
    total: z
      .union([
        z.float64(),
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
      ])
      .exactOptional(),
    used: z
      .union([
        z.float64(),
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
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserDetailsQuota')

const UserDetailsSchema = z
  .object({
    additional_mail: z.array(z.string()),
    additional_mailScope: z.array(UserDetailsScopeSchema).exactOptional(),
    address: z.string(),
    addressScope: UserDetailsScopeSchema.exactOptional(),
    avatarScope: UserDetailsScopeSchema.exactOptional(),
    backend: z.string(),
    backendCapabilities: z
      .object({ setDisplayName: z.boolean(), setPassword: z.boolean() })
      .openapi({ required: ['setDisplayName', 'setPassword'] }),
    biography: z.string(),
    biographyScope: UserDetailsScopeSchema.exactOptional(),
    'display-name': z.string(),
    displayname: z.string(),
    displaynameScope: UserDetailsScopeSchema.exactOptional(),
    email: z.string().nullable(),
    emailScope: UserDetailsScopeSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
    fediverse: z.string(),
    fediverseScope: UserDetailsScopeSchema.exactOptional(),
    groups: z.array(z.string()),
    headline: z.string(),
    headlineScope: UserDetailsScopeSchema.exactOptional(),
    id: z.string(),
    language: z.string(),
    firstLoginTimestamp: z
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
    lastLoginTimestamp: z
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
    lastLogin: z
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
    locale: z.string(),
    manager: z.string(),
    notify_email: z.string().nullable(),
    organisation: z.string(),
    organisationScope: UserDetailsScopeSchema.exactOptional(),
    phone: z.string(),
    phoneScope: UserDetailsScopeSchema.exactOptional(),
    profile_enabled: z.string(),
    profile_enabledScope: UserDetailsScopeSchema.exactOptional(),
    pronouns: z.string(),
    pronounsScope: UserDetailsScopeSchema.exactOptional(),
    quota: UserDetailsQuotaSchema,
    role: z.string(),
    roleScope: UserDetailsScopeSchema.exactOptional(),
    storageLocation: z.string().exactOptional(),
    subadmin: z.array(z.string()),
    timezone: z.string(),
    twitter: z.string(),
    twitterScope: UserDetailsScopeSchema.exactOptional(),
    bluesky: z.string(),
    blueskyScope: UserDetailsScopeSchema.exactOptional(),
    website: z.string(),
    websiteScope: UserDetailsScopeSchema.exactOptional(),
  })
  .openapi({
    required: [
      'additional_mail',
      'address',
      'backend',
      'backendCapabilities',
      'biography',
      'display-name',
      'displayname',
      'email',
      'fediverse',
      'groups',
      'headline',
      'id',
      'language',
      'firstLoginTimestamp',
      'lastLoginTimestamp',
      'lastLogin',
      'locale',
      'manager',
      'notify_email',
      'organisation',
      'phone',
      'profile_enabled',
      'pronouns',
      'quota',
      'role',
      'subadmin',
      'timezone',
      'twitter',
      'bluesky',
      'website',
    ],
  })
  .openapi('UserDetails')

const UserDetailsGroupDisplaynameSchema = z
  .object({ id: z.string(), displayname: z.string() })
  .openapi({ required: ['id', 'displayname'] })
  .openapi('UserDetailsGroupDisplayname')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getOcsV2PhpCloudAppsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/apps',
  tags: ['apps'],
  summary: 'Get a list of installed apps',
  description: 'This endpoint requires admin access',
  operationId: 'apps-get-apps',
  request: {
    query: z.object({
      filter: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.enum(['enabled', 'disabled']).nullable(),
      )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'Filter for enabled or disabled apps',
            schema: {
              type: 'string',
              nullable: true,
              default: null,
              enum: ['enabled', 'disabled'],
            },
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
      description: 'Installed apps returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ apps: z.array(z.string()) }).openapi({ required: ['apps'] }),
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

export const getOcsV2PhpCloudAppsAppRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/apps/{app}',
  tags: ['apps'],
  summary: 'Get the app info for an app',
  description: 'This endpoint requires admin access',
  operationId: 'apps-get-app-info',
  request: {
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            name: 'app',
            in: 'path',
            description: 'ID of the app',
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
      description: 'App info returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.record(z.string(), z.object({}).nullable()),
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

export const postOcsV2PhpCloudAppsAppRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/apps/{app}',
  tags: ['apps'],
  summary: 'Enable an app',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'apps-enable',
  request: {
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            name: 'app',
            in: 'path',
            description: 'ID of the app',
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
      description: 'App enabled successfully',
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

export const deleteOcsV2PhpCloudAppsAppRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/cloud/apps/{app}',
  tags: ['apps'],
  summary: 'Disable an app',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'apps-disable',
  request: {
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            name: 'app',
            in: 'path',
            description: 'ID of the app',
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
      description: 'App disabled successfully',
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

export const getOcsV2PhpCloudGroupsGroupIdSubadminsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/groups/{groupId}/subadmins',
  tags: ['groups'],
  summary: 'Get the list of user IDs that are a subadmin of the group',
  description: 'This endpoint requires admin access',
  operationId: 'groups-get-sub-admins-of-group',
  request: {
    params: z.object({
      groupId: z
        .string()
        .regex(/^.+$/)
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            description: 'ID of the group',
            required: true,
            schema: { type: 'string', pattern: '^.+$' },
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
      description: 'Sub admins returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(z.string()) })
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

export const getOcsV2PhpCloudGroupsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/groups',
  tags: ['groups'],
  summary: 'Get a list of groups',
  operationId: 'groups-get-groups',
  request: {
    query: z.object({
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Text to search for',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .nullable(),
        )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit the amount of groups returned',
            schema: { type: 'integer', format: 'int64', nullable: true, default: null },
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
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'Offset for searching for groups',
            schema: { type: 'integer', format: 'int64', default: 0 },
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
      description: 'Groups returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ groups: z.array(z.string()) }).openapi({ required: ['groups'] }),
                })
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

export const postOcsV2PhpCloudGroupsRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/groups',
  tags: ['groups'],
  summary: 'Create a new group',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'groups-add-group',
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
              groupid: z.string().openapi({ description: 'ID of the group' }),
              displayname: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Display name of the group' }),
            })
            .openapi({ required: ['groupid'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Group created successfully',
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

export const getOcsV2PhpCloudGroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/groups/{groupId}',
  tags: ['groups'],
  summary: 'Get a list of users in the specified group',
  operationId: 'groups-get-group',
  request: {
    params: z.object({
      groupId: z
        .string()
        .regex(/^.+$/)
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            description: 'ID of the group',
            required: true,
            schema: { type: 'string', pattern: '^.+$' },
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
      description: 'Group users returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ users: z.array(z.string()) }).openapi({ required: ['users'] }),
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
  },
  deprecated: true,
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpCloudGroupsGroupIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/cloud/groups/{groupId}',
  tags: ['groups'],
  summary: 'Update a group',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'groups-update-group',
  request: {
    params: z.object({
      groupId: z
        .string()
        .regex(/^.+$/)
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            description: 'ID of the group',
            required: true,
            schema: { type: 'string', pattern: '^.+$' },
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
              key: z.string().openapi({ description: "Key to update, only 'displayname'" }),
              value: z.string().openapi({ description: 'New value for the key' }),
            })
            .openapi({ required: ['key', 'value'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Group updated successfully',
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

export const deleteOcsV2PhpCloudGroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/cloud/groups/{groupId}',
  tags: ['groups'],
  summary: 'Delete a group',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'groups-delete-group',
  request: {
    params: z.object({
      groupId: z
        .string()
        .regex(/^.+$/)
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            description: 'ID of the group',
            required: true,
            schema: { type: 'string', pattern: '^.+$' },
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
      description: 'Group deleted successfully',
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

export const getOcsV2PhpCloudUsersRecentRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/users/recent',
  tags: ['users'],
  summary: 'Gets the list of users sorted by lastLogin, from most recent to least recent',
  description: 'This endpoint requires admin access',
  operationId: 'users-get-last-logged-in-users',
  request: {
    query: z.object({
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Text to search for',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .nullable(),
        )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit the amount of users returned',
            schema: { type: 'integer', format: 'int64', nullable: true, default: null },
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
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'Offset',
            schema: { type: 'integer', format: 'int64', default: 0 },
            required: false,
          },
        }),
      enabled: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'enabled',
            in: 'query',
            description:
              'Only return users with this enabled state, or all users if null. Use the `Link` header for the next page offset',
            schema: { type: 'boolean', nullable: true, default: null },
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
      description: 'Users details returned based on last logged in information',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      users: z.record(
                        z.string(),
                        z.union([
                          UserDetailsSchema,
                          z.object({ id: z.string() }).openapi({ required: ['id'] }),
                        ]),
                      ),
                    })
                    .openapi({ required: ['users'] }),
                })
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

export const getOcsV2PhpCloudUsersUserIdSubadminsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/users/{userId}/subadmins',
  tags: ['users'],
  summary: 'Get the groups a user is a subadmin of',
  description: 'This endpoint requires admin access',
  operationId: 'users-get-user-sub-admin-groups',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID if the user',
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
      description: 'User subadmin groups returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(z.string()) })
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

export const postOcsV2PhpCloudUsersUserIdSubadminsRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/users/{userId}/subadmins',
  tags: ['users'],
  summary: 'Make a user a subadmin of a group',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'users-add-sub-admin',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
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
            .object({ groupid: z.string().openapi({ description: 'ID of the group' }) })
            .openapi({ required: ['groupid'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User added as group subadmin successfully',
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

export const deleteOcsV2PhpCloudUsersUserIdSubadminsRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/cloud/users/{userId}/subadmins',
  tags: ['users'],
  summary: 'Remove a user from the subadmins of a group',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'users-remove-sub-admin',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            name: 'groupid',
            in: 'query',
            description: 'ID of the group',
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
      description: 'User removed as group subadmin successfully',
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

export const getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps',
  tags: ['app_config'],
  summary: 'Get a list of apps',
  description: 'This endpoint requires admin access',
  operationId: 'app_config-get-apps',
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
      description: 'Apps returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ data: z.array(z.string()) }).openapi({ required: ['data'] }),
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

export const getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/{app}',
  tags: ['app_config'],
  summary: 'Get the config keys of an app',
  description: 'This endpoint requires admin access',
  operationId: 'app_config-get-keys',
  request: {
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            name: 'app',
            in: 'path',
            description: 'ID of the app',
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
      description: 'Keys returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ data: z.array(z.string()) }).openapi({ required: ['data'] }),
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
      description: 'App is not allowed',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                      })
                      .openapi({ required: ['data'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/{app}/{key}',
  tags: ['app_config'],
  summary: 'Get a the config value of an app',
  description: 'This endpoint requires admin access',
  operationId: 'app_config-get-value',
  request: {
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            name: 'app',
            in: 'path',
            description: 'ID of the app',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            description: 'Key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      defaultValue: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'defaultValue',
            in: 'query',
            description: 'Default returned value if the value is empty',
            schema: { type: 'string', default: '' },
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
      description: 'Value returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ data: z.string() }).openapi({ required: ['data'] }),
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
      description: 'App is not allowed',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                      })
                      .openapi({ required: ['data'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/{app}/{key}',
  tags: ['app_config'],
  summary: 'Update the config value of an app',
  description: 'This endpoint requires password confirmation',
  operationId: 'app_config-set-value',
  request: {
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            name: 'app',
            in: 'path',
            description: 'ID of the app',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            description: 'Key to update',
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
            .object({ value: z.string().openapi({ description: 'New value for the key' }) })
            .openapi({ required: ['value'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Value updated successfully',
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
      description: 'App or key is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                    })
                    .openapi({ required: ['data'] }),
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

export const deleteOcsV2PhpAppsProvisioningApiApiV1ConfigAppsAppKeyRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/{app}/{key}',
  tags: ['app_config'],
  summary: 'Delete a config key of an app',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'app_config-delete-key',
  request: {
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            name: 'app',
            in: 'path',
            description: 'ID of the app',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            description: 'Key to delete',
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
      description: 'Key deleted successfully',
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
      description: 'App or key is not allowed',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                      })
                      .openapi({ required: ['data'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpCloudGroupsDetailsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/groups/details',
  tags: ['groups'],
  summary: 'Get a list of groups details',
  operationId: 'groups-get-groups-details',
  request: {
    query: z.object({
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Text to search for',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .nullable(),
        )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit the amount of groups returned',
            schema: { type: 'integer', format: 'int64', nullable: true, default: null },
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
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'Offset for searching for groups',
            schema: { type: 'integer', format: 'int64', default: 0 },
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
      description: 'Groups details returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ groups: z.array(GroupDetailsSchema) })
                    .openapi({ required: ['groups'] }),
                })
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

export const getOcsV2PhpCloudGroupsGroupIdUsersRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/groups/{groupId}/users',
  tags: ['groups'],
  summary: 'Get a list of users in the specified group',
  operationId: 'groups-get-group-users',
  request: {
    params: z.object({
      groupId: z
        .string()
        .regex(/^.+$/)
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            description: 'ID of the group',
            required: true,
            schema: { type: 'string', pattern: '^.+$' },
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
      description: 'User IDs returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ users: z.array(z.string()) }).openapi({ required: ['users'] }),
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
      description: 'Missing permissions to get users in the group',
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
      description: 'Group not found',
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

export const getOcsV2PhpCloudGroupsGroupIdUsersDetailsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/groups/{groupId}/users/details',
  tags: ['groups'],
  summary: 'Get a list of users details in the specified group',
  operationId: 'groups-get-group-users-details',
  request: {
    params: z.object({
      groupId: z
        .string()
        .regex(/^.+$/)
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            description: 'ID of the group',
            required: true,
            schema: { type: 'string', pattern: '^.+$' },
          },
        }),
    }),
    query: z.object({
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Text to search for',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .nullable(),
        )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit the amount of groups returned',
            schema: { type: 'integer', format: 'int64', nullable: true, default: null },
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
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'Offset for searching for groups',
            schema: { type: 'integer', format: 'int64', default: 0 },
            required: false,
          },
        }),
      enabled: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'enabled',
            in: 'query',
            description:
              'Only return users with this enabled state, or all users if null. Use the `Link` header for the next page offset',
            schema: { type: 'boolean', nullable: true, default: null },
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
      description: 'Group users details returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      users: z.record(
                        z.string(),
                        z.union([
                          UserDetailsSchema,
                          z.object({ id: z.string() }).openapi({ required: ['id'] }),
                        ]),
                      ),
                      groups: z.array(UserDetailsGroupDisplaynameSchema),
                    })
                    .openapi({ required: ['users', 'groups'] }),
                })
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

export const getOcsV2PhpCloudUsersRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/users',
  tags: ['users'],
  summary: 'Get a list of users',
  operationId: 'users-get-users',
  request: {
    query: z.object({
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Text to search for',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .nullable(),
        )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit the amount of groups returned',
            schema: { type: 'integer', format: 'int64', nullable: true, default: null },
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
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'Offset for searching for groups',
            schema: { type: 'integer', format: 'int64', default: 0 },
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
      description: 'Users returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ users: z.array(z.string()) }).openapi({ required: ['users'] }),
                })
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

export const postOcsV2PhpCloudUsersRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/users',
  tags: ['users'],
  summary: 'Create a new user',
  description: 'This endpoint requires password confirmation',
  operationId: 'users-add-user',
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
              userid: z.string().openapi({ description: 'ID of the user' }),
              password: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Password of the user' }),
              displayName: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Display name of the user' }),
              email: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Email of the user' }),
              groups: z
                .array(z.string())
                .default([])
                .exactOptional()
                .openapi({ description: 'Groups of the user' }),
              subadmin: z
                .array(z.string())
                .default([])
                .exactOptional()
                .openapi({ description: 'Groups where the user is subadmin' }),
              quota: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Quota of the user' }),
              language: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Language of the user' }),
              manager: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Manager of the user' }),
            })
            .openapi({ required: ['userid'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User added successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ id: z.string() }).openapi({ required: ['id'] }),
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
      description: 'Missing permissions to make user subadmin',
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

export const getOcsV2PhpCloudUsersDetailsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/users/details',
  tags: ['users'],
  summary: 'Get a list of users and their details',
  operationId: 'users-get-users-details',
  request: {
    query: z.object({
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Text to search for',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .nullable(),
        )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit the amount of groups returned',
            schema: { type: 'integer', format: 'int64', nullable: true, default: null },
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
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'Offset for searching for groups',
            schema: { type: 'integer', format: 'int64', default: 0 },
            required: false,
          },
        }),
      enabled: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'enabled',
            in: 'query',
            description:
              'Only return users with this enabled state, or all users if null. Use the `Link` header for the next page offset',
            schema: { type: 'boolean', nullable: true, default: null },
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
      description: 'Users details returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      users: z.record(
                        z.string(),
                        z.union([
                          UserDetailsSchema,
                          z.object({ id: z.string() }).openapi({ required: ['id'] }),
                        ]),
                      ),
                      groups: z.array(UserDetailsGroupDisplaynameSchema),
                    })
                    .openapi({ required: ['users', 'groups'] }),
                })
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

export const getOcsV2PhpCloudUsersDisabledRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/users/disabled',
  tags: ['users'],
  summary: 'Get the list of disabled users and their details',
  operationId: 'users-get-disabled-users-details',
  request: {
    query: z.object({
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Text to search for',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .nullable(),
        )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit the amount of users returned',
            schema: { type: 'integer', format: 'int64', nullable: true, default: null },
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
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'Offset',
            schema: { type: 'integer', format: 'int64', default: 0 },
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
      description: 'Disabled users details returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      users: z.record(
                        z.string(),
                        z.union([
                          UserDetailsSchema,
                          z.object({ id: z.string() }).openapi({ required: ['id'] }),
                        ]),
                      ),
                    })
                    .openapi({ required: ['users'] }),
                })
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

export const postOcsV2PhpCloudUsersSearchByPhoneRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/users/search/by-phone',
  tags: ['users'],
  summary: 'Search users by their phone numbers',
  operationId: 'users-search-by-phone-numbers',
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
              location: z
                .string()
                .openapi({ description: 'Location of the phone number (for country code)' }),
              search: z
                .record(z.string(), z.array(z.string()))
                .openapi({ description: 'Phone numbers to search for' }),
            })
            .openapi({ required: ['location', 'search'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Users returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.record(z.string(), z.string()) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid location',
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

export const getOcsV2PhpCloudUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/users/{userId}',
  tags: ['users'],
  summary: 'Get the details of a user',
  operationId: 'users-get-user',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
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
      description: 'User returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: UserDetailsSchema })
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

export const putOcsV2PhpCloudUsersUserIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/cloud/users/{userId}',
  tags: ['users'],
  summary: "Update a value of the user's details",
  description: 'This endpoint requires password confirmation',
  operationId: 'users-edit-user',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
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
              key: z.string().openapi({ description: 'Key that will be updated' }),
              value: z.string().openapi({ description: 'New value for the key' }),
            })
            .openapi({ required: ['key', 'value'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User value edited successfully',
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

export const deleteOcsV2PhpCloudUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/cloud/users/{userId}',
  tags: ['users'],
  summary: 'Delete a user',
  description: 'This endpoint requires password confirmation',
  operationId: 'users-delete-user',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
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
      description: 'User deleted successfully',
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

export const patchOcsV2PhpCloudUsersUserIdRoute = createRoute({
  method: 'patch',
  path: '/ocs/v2.php/cloud/users/{userId}',
  tags: ['users'],
  summary:
    'Update multiple user account fields atomically. All submitted fields are validated first; if any fail, no changes are applied.',
  description:
    'Unlike editUser (which updates one field at a time via key/value), this method accepts named fields and applies them all in a single request.\nThis endpoint requires password confirmation',
  operationId: 'users-edit-user-multi-field',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'The user to update',
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
              displayName: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New display name (null = no change)' }),
              password: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New password (null = no change)' }),
              email: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: "New primary email (null = no change, '' = clear)" }),
              quota: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New quota e.g. "5 GB" (null = no change)' }),
              language: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Language code e.g. "de" (null = no change)' }),
              manager: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: "Manager user ID (null = no change, '' = clear)" }),
              groups: z
                .array(z.string())
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description: 'Group IDs to assign (null = no change, [] = remove all)',
                }),
              subadminGroups: z
                .array(z.string())
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Subadmin group IDs (null = no change, [] = remove all)' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'User updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: UserDetailsSchema })
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
    422: {
      description: 'One or more submitted fields failed validation',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ errors: z.record(z.string(), z.string()) })
                    .openapi({ required: ['errors'] }),
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

export const getOcsV2PhpCloudUserRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/user',
  tags: ['users'],
  summary: 'Get the details of the current user',
  operationId: 'users-get-current-user',
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
      description: 'Current user returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: UserDetailsSchema })
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

export const getOcsV2PhpCloudUserFieldsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/user/fields',
  tags: ['users'],
  summary: 'Get a list of fields that are editable for the current user',
  operationId: 'users-get-editable-fields',
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
      description: 'Editable fields returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(z.string()) })
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

export const getOcsV2PhpCloudUserFieldsUserIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/user/fields/{userId}',
  tags: ['users'],
  summary: 'Get a list of fields that are editable for a user',
  operationId: 'users-get-editable-fields-for-user',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
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
      description: 'Editable fields for user returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(z.string()) })
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

export const getOcsV2PhpCloudUserAppsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/user/apps',
  tags: ['users'],
  summary: 'Get a list of enabled apps for the current user',
  operationId: 'users-get-enabled-apps',
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
      description: 'Enabled apps returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ apps: z.array(z.string()) }).openapi({ required: ['apps'] }),
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpCloudUsersUserIdCollectionNameRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/cloud/users/{userId}/{collectionName}',
  tags: ['users'],
  summary: "Update multiple values of the user's details",
  description: 'This endpoint requires password confirmation',
  operationId: 'users-edit-user-multi-value',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      collectionName: z
        .string()
        .regex(/^(?!enable$|disable$)[a-zA-Z0-9_]*$/)
        .openapi({
          param: {
            name: 'collectionName',
            in: 'path',
            description: 'Collection to update',
            required: true,
            schema: { type: 'string', pattern: '^(?!enable$|disable$)[a-zA-Z0-9_]*$' },
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
              key: z.string().openapi({ description: 'Key that will be updated' }),
              value: z.string().openapi({ description: 'New value for the key' }),
            })
            .openapi({ required: ['key', 'value'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User values edited successfully',
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

export const postOcsV2PhpCloudUsersUserIdWipeRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/users/{userId}/wipe',
  tags: ['users'],
  summary: 'Wipe all devices of a user',
  description: 'This endpoint requires password confirmation',
  operationId: 'users-wipe-user-devices',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
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
      description: 'Wiped all user devices successfully',
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

export const putOcsV2PhpCloudUsersUserIdEnableRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/cloud/users/{userId}/enable',
  tags: ['users'],
  summary: 'Enable a user',
  description: 'This endpoint requires password confirmation',
  operationId: 'users-enable-user',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
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
      description: 'User enabled successfully',
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

export const putOcsV2PhpCloudUsersUserIdDisableRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/cloud/users/{userId}/disable',
  tags: ['users'],
  summary: 'Disable a user',
  description: 'This endpoint requires password confirmation',
  operationId: 'users-disable-user',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
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
      description: 'User disabled successfully',
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

export const getOcsV2PhpCloudUsersUserIdGroupsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/users/{userId}/groups',
  tags: ['users'],
  summary: 'Get a list of groups the user belongs to',
  operationId: 'users-get-users-groups',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
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
      description: 'Users groups returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ groups: z.array(z.string()) }).openapi({ required: ['groups'] }),
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpCloudUsersUserIdGroupsRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/users/{userId}/groups',
  tags: ['users'],
  summary: 'Add a user to a group',
  description: 'This endpoint requires password confirmation',
  operationId: 'users-add-to-group',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
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
              groupid: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'ID of the group' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'User added to group successfully',
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

export const deleteOcsV2PhpCloudUsersUserIdGroupsRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/cloud/users/{userId}/groups',
  tags: ['users'],
  summary: 'Remove a user from a group',
  description: 'This endpoint requires password confirmation',
  operationId: 'users-remove-from-group',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            name: 'groupid',
            in: 'query',
            description: 'ID of the group',
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
      description: 'User removed from group successfully',
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

export const getOcsV2PhpCloudUsersUserIdGroupsDetailsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/users/{userId}/groups/details',
  tags: ['users'],
  summary: 'Get a list of groups with details',
  operationId: 'users-get-users-groups-details',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
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
      description: 'Users groups returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ groups: z.array(GroupDetailsSchema) })
                    .openapi({ required: ['groups'] }),
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpCloudUsersUserIdSubadminsDetailsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/users/{userId}/subadmins/details',
  tags: ['users'],
  summary: 'Get a list of the groups the user is a subadmin of, with details',
  operationId: 'users-get-user-sub-admin-groups-details',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
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
      description: 'Users subadmin groups returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ groups: z.array(GroupDetailsSchema) })
                    .openapi({ required: ['groups'] }),
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpCloudUsersUserIdWelcomeRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/cloud/users/{userId}/welcome',
  tags: ['users'],
  summary: 'Resend the welcome message',
  description: 'This endpoint requires password confirmation',
  operationId: 'users-resend-welcome-message',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID if the user',
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
      description: 'Resent welcome message successfully',
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

export const postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}',
  tags: ['preferences'],
  summary: 'Update a preference value of an app',
  operationId: 'preferences-set-preference',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'ID of the app',
            required: true,
            schema: { type: 'string' },
          },
        }),
      configKey: z
        .string()
        .openapi({
          param: {
            name: 'configKey',
            in: 'path',
            description: 'Key of the preference',
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
            .object({ configValue: z.string().openapi({ description: 'New value' }) })
            .openapi({ required: ['configValue'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Preference updated successfully',
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
      description: 'Preference invalid',
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

export const deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdConfigKeyRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}',
  tags: ['preferences'],
  summary: 'Delete a preference for an app',
  operationId: 'preferences-delete-preference',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'ID of the app',
            required: true,
            schema: { type: 'string' },
          },
        }),
      configKey: z
        .string()
        .openapi({
          param: {
            name: 'configKey',
            in: 'path',
            description: 'Key to delete',
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
      description: 'Preference deleted successfully',
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
      description: 'Preference invalid',
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

export const postOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/{appId}',
  tags: ['preferences'],
  summary: 'Update multiple preference values of an app',
  operationId: 'preferences-set-multiple-preferences',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'ID of the app',
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
              configs: z
                .record(z.string(), z.string())
                .openapi({ description: 'Key-value pairs of the preferences' }),
            })
            .openapi({ required: ['configs'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Preferences updated successfully',
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
      description: 'Preference invalid',
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

export const deleteOcsV2PhpAppsProvisioningApiApiV1ConfigUsersAppIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/{appId}',
  tags: ['preferences'],
  summary: 'Delete multiple preferences for an app',
  operationId: 'preferences-delete-multiple-preference',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'ID of the app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'configKeys[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'configKeys[]',
            in: 'query',
            description: 'Keys to delete',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
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
      description: 'Preferences deleted successfully',
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
      description: 'Preference invalid',
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
