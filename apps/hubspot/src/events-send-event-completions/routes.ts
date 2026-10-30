import { createRoute, z } from '@hono/zod-openapi'

const BehavioralEventHttpCompletionRequestSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The visitor's email address. Used for associating the event data with a CRM record.",
        example: null,
      }),
    eventName: z
      .string()
      .openapi({
        description:
          "The event's fully qualified name. This value (formatted as `pe{HubID}_{name}`) can be retrieved through the [event definitions API](https://developers.hubspot.com/docs/reference/api/analytics-and-events/custom-events/custom-event-definitions#get-%2Fevents%2Fv3%2Fevent-definitions) or in [HubSpot's UI](https://knowledge.hubspot.com/reports/create-custom-behavioral-events-with-the-code-wizard#find-internal-name).",
        example: null,
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the record for which the event occurred (e.g., contact ID or visitor ID).',
        example: null,
      }),
    occurredAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The time when this event occurred. If this isn't set, the current time will be used.",
        example: '2026-01-20T21:14:16.512Z',
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          "The event properties to update. Takes the format of key-value pairs (property internal name and property value). Learn more about [HubSpot's default event properties](https://developers.hubspot.com/docs/guides/api/analytics-and-events/custom-events/custom-event-definitions#hubspot-s-default-event-properties).",
        example: null,
      }),
    utk: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The visitor's usertoken. Used for associating the event data with a CRM record.",
        example: null,
      }),
    uuid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for the event occurrence. Must be unique within the event type. If not provided, HubSpot will generate a random UUID. When multiple events have the same ID within a year, the first will be accepted and all others will be rejected. Can be useful for matching data between HubSpot and other external systems.',
        example: null,
      }),
  })
  .openapi({ required: ['eventName', 'properties'], example: null })
  .openapi('BehavioralEventHttpCompletionRequest')

const BatchedBehavioralEventHttpCompletionRequestSchema = z
  .object({
    inputs: z
      .array(BehavioralEventHttpCompletionRequestSchema)
      .openapi({
        description:
          'An array of BehavioralEventHttpCompletionRequest objects, each representing a single behavioral event to be completed. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchedBehavioralEventHttpCompletionRequest')

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
      scopes: {
        'analytics.behavioral_events.send': '',
        'behavioral_events.event_definitions.read_write': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const postEvents202609SendRoute = createRoute({
  method: 'post',
  path: '/events/2026-09/send',
  tags: ['Basic'],
  summary: 'Send a custom event occurrence',
  description: 'Send data for a single custom event occurrence.',
  operationId: 'post-/events/2026-09/send_send',
  request: {
    body: {
      content: {
        'application/json': { schema: BehavioralEventHttpCompletionRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['analytics.behavioral_events.send'] }],
})

export const postEvents202609SendBatchRoute = createRoute({
  method: 'post',
  path: '/events/2026-09/send/batch',
  tags: ['Batch'],
  summary: 'Send a batch of event occurrences',
  description: 'Send multiple event occurrences at once.',
  operationId: 'post-/events/2026-09/send/batch_send',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BatchedBehavioralEventHttpCompletionRequestSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['analytics.behavioral_events.send'] }],
})
