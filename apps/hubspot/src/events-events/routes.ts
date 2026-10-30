import { createRoute, z } from '@hono/zod-openapi'

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'The cursor token to pass as the after query parameter to retrieve the next page of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full URL of the next page of results, with the after cursor token included as a query parameter.',
        example: null,
      }),
  })
  .openapi({
    required: ['after'],
    description:
      'Specifies the paging information needed to retrieve the next set of results in a paginated API response',
    example: null,
  })
  .openapi('NextPage')

const PreviousPageSchema = z
  .object({
    before: z
      .string()
      .openapi({
        description:
          'The cursor token to pass as the before query parameter to retrieve the previous page of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full URL of the previous page of results, with the before cursor token included as a query parameter.',
        example: null,
      }),
  })
  .openapi({
    required: ['before'],
    description:
      'specifies the paging information needed to retrieve the previous set of results in a paginated API response',
    example: null,
  })
  .openapi('PreviousPage')

const PagingSchema = z
  .object({ next: NextPageSchema.exactOptional(), prev: PreviousPageSchema.exactOptional() })
  .openapi({
    description:
      'Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.',
    example: null,
    required: [],
  })
  .openapi('Paging')

const ExternalUnifiedEventSchema = z
  .object({
    eventType: z
      .string()
      .openapi({
        description:
          'The format of the `eventType` string is `ae{appId}_{eventTypeLabel}`, `pe{portalId}_{eventTypeLabel}`, or just `e_{eventTypeLabel}` for HubSpot events.',
        example: null,
      }),
    id: z.string().openapi({ description: 'A unique identifier for the event.', example: null }),
    objectId: z
      .string()
      .openapi({ description: 'The objectId of the object which did the event.', example: null }),
    objectType: z
      .string()
      .openapi({
        description: 'The objectType for the object which did the event.',
        example: null,
      }),
    occurredAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'An ISO 8601 timestamp when the event occurred.', example: null }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'A key-value map of event-specific properties. The available properties depend on the event type definition.',
        example: null,
      }),
  })
  .openapi({
    required: ['eventType', 'id', 'objectId', 'objectType', 'occurredAt', 'properties'],
    example: null,
  })
  .openapi('ExternalUnifiedEvent')

const CollectionResponseExternalUnifiedEventSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(ExternalUnifiedEventSchema)
      .openapi({
        description:
          'An array of ExternalUnifiedEvent objects, each representing an individual event with its associated details.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseExternalUnifiedEvent')

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

const VisibleExternalEventTypeNamesSchema = z
  .object({
    eventTypes: z
      .array(z.string().openapi({ example: null }))
      .openapi({ description: 'List of event type names.', example: null }),
  })
  .openapi({ required: ['eventTypes'], example: null })
  .openapi('VisibleExternalEventTypeNames')

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

export const getEventsEventOccurrences202609Route = createRoute({
  method: 'get',
  path: '/events/event-occurrences/2026-09',
  tags: ['Basic'],
  summary: 'Retrieve events',
  description:
    'Retrieve event occurrences for a specified date in September 2026. This endpoint allows you to filter and sort events based on various criteria, such as event type, object type, and occurrence dates. It supports pagination and can return specific properties of events if requested.',
  operationId: 'get-/events/event-occurrences/2026-09_/events/event-occurrences/2026-03',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description:
              "A cursor token for pagination. Use the value from the previous response's paging.prev.before field.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      eventType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'eventType',
            in: 'query',
            description: 'The type of events to retrieve.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description: 'An array of event IDs to retrieve.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
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
      objectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'objectId',
            in: 'query',
            description: 'The unique identifier of the object associated with the events.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      'objectProperty.{propname}': z
        .object({})
        .exactOptional()
        .openapi({
          param: {
            name: 'objectProperty.{propname}',
            in: 'query',
            description: 'Filter events based on specific object properties.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'object', example: null },
          },
          example: null,
        }),
      objectType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'objectType',
            in: 'query',
            description: 'The type of object associated with the events.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      occurredAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'occurredAfter',
            in: 'query',
            description: 'Filter events that occurred after this date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      occurredBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'occurredBefore',
            in: 'query',
            description: 'Filter events that occurred before this date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      properties: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'properties',
            in: 'query',
            description: 'An array of property names to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      'property.{propname}': z
        .object({})
        .exactOptional()
        .openapi({
          param: {
            name: 'property.{propname}',
            in: 'query',
            description: 'Filter events based on specific event properties.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'object', example: null },
          },
          example: null,
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'An array of fields to sort the results by.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CollectionResponseExternalUnifiedEventSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getEventsEventOccurrences202609EventTypesRoute = createRoute({
  method: 'get',
  path: '/events/event-occurrences/2026-09/event-types',
  tags: ['Basic'],
  summary: 'Retrieve event types',
  description:
    'Retrieve a list of event type names. You may use these event types to query the API for event occurrences of a desired type.\n\nNote: the `get_types` method is only supported in the Python SDK version `12.0.0-beta.1` or later. ',
  operationId:
    'get-/events/event-occurrences/2026-09/event-types_/events/event-occurrences/2026-03/event-types',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: VisibleExternalEventTypeNamesSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})
