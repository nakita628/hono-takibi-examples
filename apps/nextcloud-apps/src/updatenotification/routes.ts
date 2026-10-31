import { createRoute, z } from '@hono/zod-openapi'

const AppSchema = z
  .object({ appId: z.string(), appName: z.string() })
  .openapi({ required: ['appId', 'appName'] })
  .openapi('App')

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

export const getOcsV2PhpAppsUpdatenotificationApiApiVersionApplistNewVersionRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/updatenotification/api/{apiVersion}/applist/{newVersion}',
  tags: ['api'],
  summary: 'List available updates for apps',
  description: 'This endpoint requires admin access',
  operationId: 'api-get-app-list',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      newVersion: z
        .string()
        .openapi({
          param: {
            name: 'newVersion',
            in: 'path',
            description: 'Server version to check updates for',
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
      description: 'Apps returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ missing: z.array(AppSchema), available: z.array(AppSchema) })
                    .openapi({ required: ['missing', 'available'] }),
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
      description: 'New versions not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      appstore_disabled: z.boolean(),
                      already_on_latest: z.boolean().exactOptional(),
                    })
                    .openapi({ required: ['appstore_disabled'] }),
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

export const getOcsV2PhpAppsUpdatenotificationApiApiVersionChangelogAppIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/updatenotification/api/{apiVersion}/changelog/{appId}',
  tags: ['api'],
  summary: 'Get changelog entry for an app',
  description: 'This endpoint requires admin access',
  operationId: 'api-get-app-changelog-entry',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'App to search changelog entry for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description:
              'The version to search the changelog entry for (defaults to the latest installed)',
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
      description: 'Changelog entry returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ appName: z.string(), content: z.string(), version: z.string() })
                    .openapi({ required: ['appName', 'content', 'version'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'The `version` parameter is not a valid version format',
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
    404: {
      description: 'No changelog found',
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
