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

const SharedResourceSchema = z
  .object({
    label: z.string(),
    text: z.string(),
    href: z.string(),
    img: z.string(),
    themedIcon: z.boolean().exactOptional(),
  })
  .openapi({ required: ['label', 'text', 'href', 'img'] })
  .openapi('SharedResource')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getOcsV2PhpAppsProfileApiV1ResourcesUserIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/profile/api/v1/resources/{userId}',
  tags: ['profile_api'],
  summary: 'Get resources shared between the current user and the specified user.',
  operationId: 'profile_api-get-resources',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: '- The user ID of the user to get shared resources with.',
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
      description: 'The shared resources between the current user and the specified user.',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(SharedResourceSchema) })
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
      description: '- The specified user does not exist.',
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
