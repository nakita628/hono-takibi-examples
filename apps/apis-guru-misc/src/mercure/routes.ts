import { createRoute, z } from '@hono/zod-openapi'

const SubscriptionSchema = z
  .object({
    '@context': z.string().exactOptional().openapi({ example: 'https://mercure.rocks/' }),
    active: z.boolean(),
    id: z.string().openapi({ example: '/.well-known/mercure/subscriptions' }),
    lastEventID: z
      .string()
      .exactOptional()
      .openapi({ example: 'urn:uuid:5e94c686-2c0b-4f9b-958c-92ccc3bbb4eb' }),
    payload: z.object({}).exactOptional(),
    subscriber: z.string().openapi({ example: 'urn:uuid:bb3de268-05b0-4c65-b44e-8f9acefc29d6' }),
    topic: z.string().openapi({ example: 'https://example.com/{selector}' }),
    type: z.string().openapi({ example: 'Subscription' }),
  })
  .openapi({ required: ['id', 'type', 'topic', 'subscriber', 'active'] })
  .openapi('Subscription')

const SubscriptionsSchema = z
  .object({
    '@context': z.string().openapi({ example: 'https://mercure.rocks/' }),
    id: z.string().openapi({ example: '/.well-known/mercure/subscriptions' }),
    lastEventID: z.string().openapi({ example: 'urn:uuid:5e94c686-2c0b-4f9b-958c-92ccc3bbb4eb' }),
    subscriptions: z.array(SubscriptionSchema),
    type: z.string().openapi({ example: 'Subscriptions' }),
  })
  .openapi({ required: ['@context', 'id', 'type', 'lastEventID', 'subscriptions'] })
  .openapi('Subscriptions')

const _401Response = { description: 'Not authorized (missing or invalid JWT).' }

const BearerSecurityScheme = {
  bearerFormat: 'JWT',
  description: 'Preferred for server to server',
  scheme: 'bearer',
  type: 'http',
}

const CookieSecurityScheme = {
  description:
    'Preferred for web browsers (the cookie name may change depending on the configuration)',
  in: 'cookie',
  name: 'mercureAuthorization',
  type: 'apiKey',
}

export const getWellKnownMercureRoute = createRoute({
  method: 'get',
  path: '/.well-known/mercure',
  summary: 'Subscribe to updates',
  externalDocs: {
    description: 'Subscription specification',
    url: 'https://mercure.rocks/spec#subscription',
  },
  request: {
    query: z.object({
      topic: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'The topic to get updates from, can be a URI template (RFC6570).',
            in: 'query',
            name: 'topic',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      'Last-Event-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The last received event id, to retrieve missed events.',
            in: 'query',
            name: 'Last-Event-ID',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'Last-Event-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The last received event id, to retrieve missed events, takes precedence over the query parameter.',
            in: 'header',
            name: 'Last-Event-ID',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Event stream opened.', content: {} },
    400: { description: 'Missing topic parameter or invalid URI template.' },
    401: _401Response,
  },
})

export const postWellKnownMercureRoute = createRoute({
  method: 'post',
  path: '/.well-known/mercure',
  summary: 'Publish an update',
  externalDocs: {
    description: 'Publishing specification',
    url: 'https://mercure.rocks/spec#publication',
  },
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              data: z
                .string()
                .openapi({ description: 'The content of the new version of this topic.' }),
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The topic's revision identifier: it will be used as the SSE's `id` property.",
                }),
              private: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'To mark an update as private. If not provided, this update will be public.',
                }),
              retry: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({ description: "The SSE's `retry` property (the reconnection time)." }),
              topic: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .openapi({
                  description:
                    'IRIs of the updated topic. If this key is present several times, the first occurrence is considered to be the canonical URL of the topic, and other ones are considered to be alternate URLs.',
                }),
              type: z
                .string()
                .exactOptional()
                .openapi({ description: "The SSE's `event` property (a specific event type)." }),
            })
            .openapi({ required: ['topic', 'data'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'The id of this update', content: {} },
    400: { description: 'Invalid request' },
    401: _401Response,
  },
})

export const getWellKnownMercureSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/.well-known/mercure/subscriptions',
  summary: 'Active subscriptions',
  externalDocs: {
    description: 'Subscription API',
    url: 'https://mercure.rocks/spec#subscription-api',
  },
  responses: {
    200: {
      description: 'The list of active subscriptions',
      content: { 'application/ld+json': { schema: SubscriptionsSchema } },
    },
    401: _401Response,
  },
})

export const getWellKnownMercureSubscriptionsTopicRoute = createRoute({
  method: 'get',
  path: '/.well-known/mercure/subscriptions/{topic}',
  summary: 'Active subscriptions for the given topic',
  externalDocs: {
    description: 'Subscription API',
    url: 'https://mercure.rocks/spec#subscription-api',
  },
  request: {
    params: z.object({
      topic: z
        .string()
        .openapi({
          param: { in: 'path', name: 'topic', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of active subscriptions',
      content: { 'application/ld+json': { schema: SubscriptionsSchema } },
    },
    401: _401Response,
  },
})

export const getWellKnownMercureSubscriptionsTopicSubscriberRoute = createRoute({
  method: 'get',
  path: '/.well-known/mercure/subscriptions/{topic}/{subscriber}',
  summary: 'Active subscription for the given topic and subscriber',
  externalDocs: {
    description: 'Subscription API',
    url: 'https://mercure.rocks/spec#active-subscriptions',
  },
  request: {
    params: z.object({
      topic: z
        .string()
        .openapi({
          param: { in: 'path', name: 'topic', required: true, schema: { type: 'string' } },
        }),
      subscriber: z
        .string()
        .openapi({
          param: { in: 'path', name: 'subscriber', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of active subscriptions',
      content: { 'application/ld+json': { schema: SubscriptionsSchema } },
    },
    401: _401Response,
  },
})
