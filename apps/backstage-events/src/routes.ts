import { createRoute, z } from '@hono/zod-openapi'

const EventSchema = z
  .object({
    topic: z.string().openapi({ description: 'The topic that the event is published on' }),
    payload: z.any().openapi({ description: 'The event payload' }),
  })
  .openapi({ required: ['topic', 'payload'] })
  .openapi('Event')

const ErrorSchema = z
  .object({
    error: z
      .object({ name: z.string(), message: z.string() })
      .openapi({ required: ['name', 'message'] }),
    request: z
      .object({ method: z.string(), url: z.string() })
      .openapi({ required: ['method', 'url'] }),
    response: z.object({ statusCode: z.number() }).openapi({ required: ['statusCode'] }),
  })
  .openapi({ required: ['error', 'request', 'response'] })
  .openapi('Error')

const ErrorResponseResponse = {
  description: 'An error response from the backend.',
  content: { 'application/json; charset=utf-8': { schema: ErrorSchema } },
}

const SubscriptionIdParamsSchema = z
  .string()
  .openapi({
    param: { name: 'subscriptionId', in: 'path', required: true, schema: { type: 'string' } },
  })

const JWTSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

export const postBusV1EventsRoute = createRoute({
  method: 'post',
  path: '/bus/v1/events',
  description: 'Publish a new event',
  operationId: 'PostEvent',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              event: EventSchema,
              notifiedSubscribers: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The IDs of subscriptions that have already received this event',
                }),
            })
            .openapi({ required: ['event'] }),
          examples: {
            'Publishing a simple Event': {
              value: { event: { topic: 'test-topic', payload: { myData: 'foo' } } },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'The event was published successfully' },
    204: {
      description:
        'The event did not need to be published as all subscribers have already been notified',
    },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const putBusV1SubscriptionsSubscriptionIdRoute = createRoute({
  method: 'put',
  path: '/bus/v1/subscriptions/{subscriptionId}',
  description: 'Ensures that the subscription exists with the provided configuration',
  operationId: 'PutSubscription',
  request: {
    params: z.object({ subscriptionId: SubscriptionIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              topics: z.array(z.string()).openapi({ description: 'The topics to subscribe to' }),
            })
            .openapi({ required: ['topics'] }),
          examples: { 'Subscribing to a single topic': { value: { topics: ['test-topic'] } } },
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'The subscription exists or was created successfully' },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getBusV1SubscriptionsSubscriptionIdEventsRoute = createRoute({
  method: 'get',
  path: '/bus/v1/subscriptions/{subscriptionId}/events',
  description: 'Get new events for the provided subscription',
  operationId: 'GetSubscriptionEvents',
  request: { params: z.object({ subscriptionId: SubscriptionIdParamsSchema }) },
  responses: {
    200: {
      description: 'New events',
      content: {
        'application/json': {
          schema: z.object({ events: z.array(EventSchema) }).openapi({ required: ['events'] }),
        },
      },
    },
    202: {
      description:
        'No new events are available. Response will block until the client should try again.',
    },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})
