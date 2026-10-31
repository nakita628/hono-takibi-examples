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

export const getOcsV2PhpAppsAppstoreApiV1AppsCategoriesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/appstore/api/v1/apps/categories',
  tags: ['api'],
  summary: 'Get all available categories',
  description: 'This endpoint requires admin access',
  operationId: 'api-list-categories',
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
      description: 'The categories were found successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.array(
                    z
                      .object({ id: z.string(), displayName: z.string() })
                      .openapi({ required: ['id', 'displayName'] }),
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

export const getOcsV2PhpAppsAppstoreApiV1AppsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/appstore/api/v1/apps',
  tags: ['api'],
  summary: 'Get all available apps',
  description: 'This endpoint requires admin access',
  operationId: 'api-list-apps',
  request: {
    query: z.object({
      details: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'details',
            in: 'query',
            description: '- Whether to include detailed appstore information about the app',
            schema: { type: 'boolean', default: false },
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
      description: 'The apps were found successfully',
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
                        id: z.string(),
                        name: z.string(),
                        groups: z.array(z.string()),
                        internal: z.boolean(),
                        isCompatible: z.boolean(),
                        missingDependencies: z.array(z.string()).exactOptional(),
                      })
                      .openapi({ required: ['id', 'name', 'groups', 'internal', 'isCompatible'] }),
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

export const postOcsV2PhpAppsAppstoreApiV1AppsEnableRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/appstore/api/v1/apps/enable',
  tags: ['api'],
  summary: 'Enable one apps',
  description:
    'App will be enabled for specific groups only if $groups is defined\nThis endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'api-enable-app',
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
              appId: z.string().openapi({ description: '- The app to enable' }),
              groups: z
                .array(z.string())
                .default([])
                .exactOptional()
                .openapi({ description: '- The groups to enable the app for' }),
              force: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    '- Whether to force enable the app even if Nextcloud version requirements are not met',
                }),
            })
            .openapi({ required: ['appId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'App successfully enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ update_required: z.boolean() })
                    .openapi({ required: ['update_required'] }),
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

export const postOcsV2PhpAppsAppstoreApiV1AppsDisableRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/appstore/api/v1/apps/disable',
  tags: ['api'],
  summary: 'Disable an app',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'api-disable-app',
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
            .object({ appId: z.string().openapi({ description: '- The app to disable' }) })
            .openapi({ required: ['appId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'App successfully disabled',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.object({}) })
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

export const postOcsV2PhpAppsAppstoreApiV1AppsUninstallRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/appstore/api/v1/apps/uninstall',
  tags: ['api'],
  summary: 'Uninstall an app.',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'api-uninstall-app',
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
            .object({ appId: z.string().openapi({ description: '- The app to uninstall' }) })
            .openapi({ required: ['appId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'App successfully uninstalled',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.object({}) })
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

export const postOcsV2PhpAppsAppstoreApiV1AppsUpdateRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/appstore/api/v1/apps/update',
  tags: ['api'],
  summary: 'Update an app',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'api-update-app',
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
            .object({ appId: z.string().openapi({ description: '- The app to update' }) })
            .openapi({ required: ['appId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'App successfully updated',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.object({}) })
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

export const postOcsV2PhpAppsAppstoreApiV1BundlesEnableRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/appstore/api/v1/bundles/enable',
  tags: ['api'],
  summary: 'Enable all apps of a bundle',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'api-enable-bundle',
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
            .object({ bundleId: z.string().openapi({ description: '- The bundle to enable' }) })
            .openapi({ required: ['bundleId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Bundle successfully enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.object({}) })
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
