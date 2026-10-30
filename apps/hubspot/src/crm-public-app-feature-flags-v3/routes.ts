import { createRoute, z } from '@hono/zod-openapi'

const BatchPortalEntrySchema = z
  .object({
    flagState: z
      .enum(['ABSENT', 'OFF', 'ON'])
      .openapi({ description: 'The flag state for this portal (e.g. ON or OFF)', example: null }),
    portalId: z.int32().openapi({ description: 'The ID of the portal', example: null }),
  })
  .openapi({ required: ['flagState', 'portalId'], example: null })
  .openapi('BatchPortalEntry')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const FlagPutRequestSchema = z
  .object({
    defaultState: z
      .enum(['ABSENT', 'OFF', 'ON'])
      .openapi({
        description:
          'The state that the flag should have if there are no overrides for a particular portal',
        example: null,
      }),
    overrideState: z
      .enum(['ABSENT', 'OFF', 'ON'])
      .exactOptional()
      .openapi({
        description:
          'A flag value that supercedes all other overrides, including portal-level values. Mostly used for things like emergency overrides',
        example: null,
      }),
  })
  .openapi({ required: ['defaultState'], example: null })
  .openapi('FlagPutRequest')

const FlagResponseSchema = z
  .object({
    appId: z.int32().openapi({ description: 'The ID of the app', example: null }),
    defaultState: z
      .enum(['ABSENT', 'OFF', 'ON'])
      .openapi({
        description: "The flag state for any portal that doesn't have an override value",
        example: null,
      }),
    flagName: z.string().openapi({ description: 'The name of the flag', example: null }),
    overrideState: z
      .enum(['ABSENT', 'OFF', 'ON'])
      .exactOptional()
      .openapi({
        description:
          'An optional flag value that overrides all others for this flag name and app, including portal-level values',
        example: null,
      }),
  })
  .openapi({ required: ['appId', 'defaultState', 'flagName'], example: null })
  .openapi('FlagResponse')

const FlagsForAppResponseSchema = z
  .object({
    flagsForApp: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the feature flags associated with the application. Each string corresponds to a specific feature flag name.',
        example: null,
      }),
  })
  .openapi({ required: ['flagsForApp'], example: null })
  .openapi('FlagsForAppResponse')

const PortalFlagStateBatchDeleteRequestSchema = z
  .object({
    portalIds: z
      .array(z.int32().openapi({ example: null }))
      .openapi({
        description:
          'An array of integers representing the unique identifiers of the portals for which the feature flag states are to be deleted.',
        example: null,
      }),
  })
  .openapi({ required: ['portalIds'], example: null })
  .openapi('PortalFlagStateBatchDeleteRequest')

const PortalFlagStateBatchPutRequestSchema = z
  .object({
    portalStates: z
      .array(BatchPortalEntrySchema)
      .openapi({
        description:
          'An array of portal flag state entries to be updated. Each entry contains details about the portal ID and the desired flag state.',
        example: null,
      }),
  })
  .openapi({ required: ['portalStates'], example: null })
  .openapi('PortalFlagStateBatchPutRequest')

const PortalFlagStateResponseSchema = z
  .object({
    appId: z.int32().openapi({ description: 'The ID of the app', example: null }),
    flagName: z.string().openapi({ description: 'The name of the flag', example: null }),
    flagState: z
      .enum(['ABSENT', 'OFF', 'ON'])
      .openapi({ description: 'The state of the flag for this portal', example: null }),
    portalId: z.int32().openapi({ description: 'The ID of the portal', example: null }),
  })
  .openapi({ required: ['appId', 'flagName', 'flagState', 'portalId'], example: null })
  .openapi('PortalFlagStateResponse')

const PortalFlagStateBatchResponseSchema = z
  .object({
    portalFlagStates: z
      .array(PortalFlagStateResponseSchema)
      .openapi({
        description:
          'An array of portal flag state responses, each representing the state of a feature flag for a specific portal.',
        example: null,
      }),
  })
  .openapi({ required: ['portalFlagStates'], example: null })
  .openapi('PortalFlagStateBatchResponse')

const PortalFlagStatePutRequestSchema = z
  .object({
    flagState: z
      .enum(['ABSENT', 'OFF', 'ON'])
      .openapi({
        description: 'The state that the given flag should be in for this portal',
        example: null,
      }),
  })
  .openapi({ required: ['flagState'], example: null })
  .openapi('PortalFlagStatePutRequest')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: {},
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getFeatureFlags202609AppIdFlagsAllRoute = createRoute({
  method: 'get',
  path: '/feature-flags/2026-09/{appId}/flags/all',
  tags: ['Basic'],
  summary: 'List Flags',
  description:
    "Retrieve all feature flags associated with a specific application in your HubSpot account. This endpoint is useful for developers who need to manage or audit feature flags for their applications. It requires the application ID to identify which application's flags to list.",
  operationId: 'get-/feature-flags/2026-09/{appId}/flags/all_/feature-flags/v3/{appId}/flags/all',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the application for which to retrieve all feature flags.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: FlagsForAppResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const getFeatureFlags202609AppIdFlagsFlagNameRoute = createRoute({
  method: 'get',
  path: '/feature-flags/2026-09/{appId}/flags/{flagName}',
  tags: ['Basic'],
  summary: "Retrieve an app's feature flags",
  description:
    "Retrieve the current status of the app's feature flags. No request body is included.",
  operationId: 'get-/feature-flags/2026-09/{appId}/flags/{flagName}',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'The unique identifier of the app associated with the feature flag.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      flagName: z
        .string()
        .openapi({
          param: {
            name: 'flagName',
            in: 'path',
            description: 'The name of the feature flag to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: FlagResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const putFeatureFlags202609AppIdFlagsFlagNameRoute = createRoute({
  method: 'put',
  path: '/feature-flags/2026-09/{appId}/flags/{flagName}',
  tags: ['Basic'],
  summary: "Set an app's feature flag",
  description:
    "Set a feature flag for an app. For example, update the `hs-hide-crm-cards` flag's `defaultState` to `ON` to hide classic CRM cards from new installs.",
  operationId: 'put-/feature-flags/2026-09/{appId}/flags/{flagName}',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the application associated with the feature flag.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      flagName: z
        .string()
        .openapi({
          param: {
            name: 'flagName',
            in: 'path',
            description: 'The name of the feature flag to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: FlagPutRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: FlagResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const deleteFeatureFlags202609AppIdFlagsFlagNameRoute = createRoute({
  method: 'delete',
  path: '/feature-flags/2026-09/{appId}/flags/{flagName}',
  tags: ['Basic'],
  summary: "Delete an app's feature flag",
  description:
    'Delete a feature flag in an app.  For example, delete the `hs-release-app-cards` flag after all accounts have been migrated.',
  operationId: 'delete-/feature-flags/2026-09/{appId}/flags/{flagName}',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the application from which the feature flag will be deleted.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      flagName: z
        .string()
        .openapi({
          param: {
            name: 'flagName',
            in: 'path',
            description: 'The name of the feature flag to be deleted.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: FlagResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const getFeatureFlags202609AppIdFlagsFlagNamePortalsRoute = createRoute({
  method: 'get',
  path: '/feature-flags/2026-09/{appId}/flags/{flagName}/portals',
  tags: ['Basic'],
  summary: 'Retrieve accounts with a set flag state',
  description:
    'Retrieve a list of HubSpot accounts with an account-level flag setting for the specified app. No request body is included.',
  operationId: 'get-/feature-flags/2026-09/{appId}/flags/{flagName}/portals',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'The unique identifier of the app associated with the feature flag.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      flagName: z
        .string()
        .openapi({
          param: {
            name: 'flagName',
            in: 'path',
            description: 'The name of the feature flag to retrieve portal information for.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      startPortalId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'startPortalId',
            in: 'query',
            description: 'The ID of the portal to start the list from. Useful for pagination.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PortalFlagStateBatchResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/feature-flags/2026-09/{appId}/flags/{flagName}/portals/batch/delete',
  tags: ['Batch'],
  summary: 'Batch delete account flag state',
  description:
    'Delete an account-level flag state for multiple HubSpot accounts at once. Use this endpoint to manage flag exposure for groups of HubSpot accounts.',
  operationId: 'post-/feature-flags/2026-09/{appId}/flags/{flagName}/portals/batch/delete',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the application associated with the feature flag.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      flagName: z
        .string()
        .openapi({
          param: {
            name: 'flagName',
            in: 'path',
            description: 'The name of the feature flag to be deleted.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: PortalFlagStateBatchDeleteRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PortalFlagStateBatchResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const postFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertRoute = createRoute({
  method: 'post',
  path: '/feature-flags/2026-09/{appId}/flags/{flagName}/portals/batch/upsert',
  tags: ['Batch'],
  summary: 'Batch set account flag state',
  description:
    'Set the portal flag state for multiple HubSpot accounts at once. Use this endpoint to manage flag exposure for groups of HubSpot accounts.',
  operationId: 'post-/feature-flags/2026-09/{appId}/flags/{flagName}/portals/batch/upsert',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app for which the feature flags are being managed.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      flagName: z
        .string()
        .openapi({
          param: {
            name: 'flagName',
            in: 'path',
            description: 'The name of the feature flag to upsert.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: PortalFlagStateBatchPutRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PortalFlagStateBatchResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute = createRoute({
  method: 'get',
  path: '/feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}',
  tags: ['Basic'],
  summary: 'Retrieve account flag state',
  description: 'Retrieve the account-level flag state of a specific HubSpot account.',
  operationId: 'get-/feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'The unique identifier of the app containing the feature flag.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      flagName: z
        .string()
        .openapi({
          param: {
            name: 'flagName',
            in: 'path',
            description: 'The name of the feature flag to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      portalId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'portalId',
            in: 'path',
            description:
              'The unique identifier of the portal for which the flag state is being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PortalFlagStateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const putFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute = createRoute({
  method: 'put',
  path: '/feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}',
  tags: ['Basic'],
  summary: 'Set an account flag state',
  description: 'Specify an account-level flag state for a specific HubSpot account.',
  operationId: 'put-/feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the application associated with the feature flag.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      flagName: z
        .string()
        .openapi({
          param: {
            name: 'flagName',
            in: 'path',
            description: 'The name of the feature flag to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      portalId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'portalId',
            in: 'path',
            description:
              'The unique identifier of the portal where the feature flag state is being updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PortalFlagStatePutRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PortalFlagStateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const deleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute = createRoute({
  method: 'delete',
  path: '/feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}',
  tags: ['Basic'],
  summary: 'Delete an account flag state',
  description:
    'Delete an account-level flag state for a specific HubSpot account. No request body is included.',
  operationId: 'delete-/feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'The unique identifier of the app associated with the feature flag.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      flagName: z
        .string()
        .openapi({
          param: {
            name: 'flagName',
            in: 'path',
            description: 'The name of the feature flag to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      portalId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'portalId',
            in: 'path',
            description:
              'The unique identifier of the portal from which the feature flag will be deleted.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PortalFlagStateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})
