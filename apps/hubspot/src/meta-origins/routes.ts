import { createRoute, z } from '@hono/zod-openapi'

const IpRangeSchema = z
  .object({
    cidr: z
      .string()
      .openapi({ description: 'The CIDR notation representing the IP range.', example: null }),
    description: z
      .string()
      .openapi({ description: 'A description of the IP range.', example: null }),
    direction: z
      .enum(['EGRESS', 'INGRESS'])
      .openapi({
        description: 'The direction of the IP traffic, which can be INGRESS or EGRESS.',
        example: null,
      }),
    service: z
      .enum(['API', 'DNS', 'EMAIL', 'TEST_SERVICE', 'WEB_SCRAPING'])
      .openapi({
        description:
          'The service associated with the IP range, such as EMAIL, API, DNS, or WEB_SCRAPING.',
        example: null,
      }),
  })
  .openapi({ required: ['cidr', 'description', 'direction', 'service'], example: null })
  .openapi('IpRange')

const CollectionResponseIpRangeNoPagingSchema = z
  .object({
    results: z
      .array(IpRangeSchema)
      .openapi({
        description:
          'An array of IpRange objects, each representing a specific IP range with associated metadata such as CIDR, direction, service, and description.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseIpRangeNoPaging')

const WebhookSubscriptionSchema = z
  .object({
    appId: z
      .int32()
      .openapi({
        description:
          'The unique identifier of the application that owns the webhook subscription. It is an integer.',
        example: null,
      }),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The timestamp when the webhook subscription was created, represented as an integer in int64 format.',
        example: null,
      }),
    createdByUserId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the user who created the webhook subscription. It is an integer.',
        example: null,
      }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The unique identifier of the webhook subscription. It is an integer formatted as int64.',
        example: null,
      }),
    portalId: z
      .int32()
      .openapi({
        description:
          'The unique identifier of the HubSpot portal associated with the webhook subscription. It is an integer.',
        example: null,
      }),
    updatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The timestamp when the webhook subscription was last updated, represented as an integer in int64 format.',
        example: null,
      }),
    webhookUrl: z
      .string()
      .openapi({
        description: 'The URL to which the webhook events will be sent. It is a string.',
        example: null,
      }),
  })
  .openapi({
    required: ['appId', 'createdAt', 'id', 'portalId', 'updatedAt', 'webhookUrl'],
    example: null,
  })
  .openapi('WebhookSubscription')

const CollectionResponseWebhookSubscriptionNoPagingSchema = z
  .object({
    results: z
      .array(WebhookSubscriptionSchema)
      .openapi({
        description:
          'An array of webhook subscriptions. Each item in the array is a WebhookSubscription object.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseWebhookSubscriptionNoPaging')

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

const WebhookSubscriptionRequestSchema = z
  .object({
    webhookUrl: z
      .string()
      .openapi({
        description:
          'The URL to which webhook events will be sent. This must be a valid URL in string format.',
        example: null,
      }),
  })
  .openapi({ required: ['webhookUrl'], example: null })
  .openapi('WebhookSubscriptionRequest')

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
      scopes: { 'origins.ip_ranges.webhook.read': '', 'origins.ip_ranges.webhook.write': '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getMetaNetworkOrigins202609IpRangesRoute = createRoute({
  method: 'get',
  path: '/meta/network-origins/2026-09/ip-ranges',
  tags: ['Basic'],
  summary: 'Retrieve IP Ranges',
  description:
    'Retrieve the list of IP ranges associated with different services and directions. This endpoint can be used to obtain IP range information for specific services such as EMAIL, API, DNS, WEB_SCRAPING, and TEST_SERVICE. The results can be filtered by the direction of network traffic, either INGRESS or EGRESS.',
  operationId:
    'get-/meta/network-origins/2026-09/ip-ranges_/meta/network-origins/2026-09-beta/ip-ranges',
  request: {
    query: z.object({
      direction: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['INGRESS', 'EGRESS']).openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'direction',
            in: 'query',
            description:
              'An array of directions to filter the IP ranges. Valid values are INGRESS and EGRESS.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: { type: 'string', example: null, enum: ['INGRESS', 'EGRESS'] },
            },
          },
          example: null,
        }),
      service: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .enum(['EMAIL', 'API', 'DNS', 'WEB_SCRAPING', 'TEST_SERVICE'])
              .openapi({ example: null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            description:
              'An array of services to filter the IP ranges. Valid values are EMAIL, API, DNS, WEB_SCRAPING, and TEST_SERVICE.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: {
                type: 'string',
                example: null,
                enum: ['EMAIL', 'API', 'DNS', 'WEB_SCRAPING', 'TEST_SERVICE'],
              },
            },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CollectionResponseIpRangeNoPagingSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
})

export const getMetaNetworkOrigins202609IpRangesSimpleRoute = createRoute({
  method: 'get',
  path: '/meta/network-origins/2026-09/ip-ranges/simple',
  tags: ['Basic'],
  summary: 'Retrieve IP Ranges',
  description:
    'Retrieve a simplified list of IP ranges associated with specific network origins in the HubSpot system. This endpoint allows filtering by direction and service type, making it useful for understanding network configurations and managing access controls.',
  operationId:
    'get-/meta/network-origins/2026-09/ip-ranges/simple_/meta/network-origins/2026-09-beta/ip-ranges/simple',
  request: {
    query: z.object({
      direction: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['INGRESS', 'EGRESS']).openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'direction',
            in: 'query',
            description:
              "An array specifying the direction of the IP traffic. Valid values are 'INGRESS' and 'EGRESS'.",
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: { type: 'string', example: null, enum: ['INGRESS', 'EGRESS'] },
            },
          },
          example: null,
        }),
      service: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .enum(['EMAIL', 'API', 'DNS', 'WEB_SCRAPING', 'TEST_SERVICE'])
              .openapi({ example: null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'service',
            in: 'query',
            description:
              "An array specifying the service type for which the IP ranges are applicable. Valid values include 'EMAIL', 'API', 'DNS', 'WEB_SCRAPING', and 'TEST_SERVICE'.",
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: {
                type: 'string',
                example: null,
                enum: ['EMAIL', 'API', 'DNS', 'WEB_SCRAPING', 'TEST_SERVICE'],
              },
            },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'text/plain': { schema: z.string().openapi({ example: null }), example: null } },
    },
    default: ErrorResponse,
  },
})

export const getMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRoute = createRoute({
  method: 'get',
  path: '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}',
  tags: ['Basic'],
  summary: 'Retrieve subscriptions',
  description:
    'Retrieve the list of webhook subscriptions for a specific app identified by the appId. This endpoint returns the webhook subscription details associated with the provided appId, allowing you to manage and monitor webhook integrations effectively.',
  operationId:
    'get-/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}_/meta/network-origins/2026-09-beta/ip-ranges/webhook-subscriptions/{appId}',
  request: {
    params: z.object({
      appId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            schema: { pattern: '.+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponseWebhookSubscriptionNoPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['origins.ip_ranges.webhook.read'] },
    { oauth2: ['origins.ip_ranges.webhook.write'] },
  ],
})

export const postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdRoute = createRoute({
  method: 'post',
  path: '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}',
  tags: ['Basic'],
  summary: 'Create webhook subscription',
  description:
    'Create a new webhook subscription for the specified app in your HubSpot account. This endpoint requires a valid webhook URL in the request body. Upon successful creation, the response includes the details of the new subscription along with a URL to access it.',
  operationId:
    'post-/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}_/meta/network-origins/2026-09-beta/ip-ranges/webhook-subscriptions/{appId}',
  request: {
    params: z.object({
      appId: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            schema: { pattern: '.+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: WebhookSubscriptionRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: WebhookSubscriptionSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['origins.ip_ranges.webhook.write'] }],
})

export const deleteMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdRoute =
  createRoute({
    method: 'delete',
    path: '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}',
    tags: ['Basic'],
    summary: 'Delete subscription',
    description:
      'Remove a specific webhook subscription for a given app. This operation is useful when you want to stop receiving webhook events for a particular subscription. The endpoint requires authentication and the subscription ID to identify which subscription to delete.',
    operationId:
      'delete-/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}_/meta/network-origins/2026-09-beta/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}',
    request: {
      params: z.object({
        appId: z
          .string()
          .regex(/.+/)
          .openapi({
            param: {
              name: 'appId',
              in: 'path',
              required: true,
              schema: { pattern: '.+', type: 'string', example: null },
            },
            example: null,
          }),
        'subscription-id': z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'subscription-id',
              in: 'path',
              description: 'The unique identifier of the webhook subscription to delete.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
      }),
    },
    responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
    security: [{ oauth2: ['origins.ip_ranges.webhook.write'] }],
  })

export const postMetaNetworkOrigins202609IpRangesWebhookSubscriptionsAppIdSubscriptionIdTestRoute =
  createRoute({
    method: 'post',
    path: '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test',
    tags: ['Advanced'],
    summary: 'Test webhook subscription',
    description:
      'Trigger a test for a specific webhook subscription identified by the subscription ID. This endpoint is useful for verifying the configuration and functionality of webhook subscriptions in your application.',
    operationId:
      'post-/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test_/meta/network-origins/2026-09-beta/ip-ranges/webhook-subscriptions/{appId}/{subscription-id}/test',
    request: {
      params: z.object({
        appId: z
          .string()
          .regex(/.+/)
          .openapi({
            param: {
              name: 'appId',
              in: 'path',
              required: true,
              schema: { pattern: '.+', type: 'string', example: null },
            },
            example: null,
          }),
        'subscription-id': z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'subscription-id',
              in: 'path',
              description: 'The unique identifier of the webhook subscription to test.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
      }),
    },
    responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
    security: [{ oauth2: ['origins.ip_ranges.webhook.write'] }],
  })
