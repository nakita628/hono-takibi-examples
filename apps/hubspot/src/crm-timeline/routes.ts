import { createRoute, z } from '@hono/zod-openapi'

const TimelineEventIFrameSchema = z
  .object({
    headerLabel: z
      .string()
      .openapi({
        description: 'The label of the modal window that displays the iframe contents.',
        example: null,
      }),
    height: z
      .int32()
      .openapi({ description: 'The height of the modal window in pixels.', example: null }),
    linkLabel: z
      .string()
      .openapi({
        description: 'The text displaying the link that will display the iframe.',
        example: null,
      }),
    url: z.string().openapi({ description: 'The URI of the iframe contents.', example: null }),
    width: z
      .int32()
      .openapi({ description: 'The width of the modal window in pixels.', example: null }),
  })
  .openapi({ required: ['headerLabel', 'height', 'linkLabel', 'url', 'width'], example: null })
  .openapi('TimelineEventIFrame')

const AppEventOccurrenceSchema = z
  .object({
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The domain associated with the event occurrence, represented as a string.',
        example: null,
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address associated with the event occurrence, represented as a string.',
        example: null,
      }),
    eventTypeName: z
      .string()
      .openapi({
        description: 'The name of the event type, represented as a string.',
        example: null,
      }),
    extraData: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'An object containing additional data related to the event occurrence.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this event occurrence, represented as a string.',
        example: null,
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the object related to the event, represented as a string.',
        example: null,
      }),
    objectTypeFullyQualifiedName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified name of the object type associated with the event, represented as a string.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'A map of custom property names to their values, represented as an object with string values.',
        example: null,
      }),
    timelineIFrame: TimelineEventIFrameSchema.exactOptional(),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the event occurred, represented in ISO 8601 format.',
        example: null,
      }),
    utk: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The user token key (utk) associated with the event, represented as a string.',
        example: null,
      }),
  })
  .openapi({ required: ['eventTypeName', 'id', 'properties'], example: null })
  .openapi('AppEventOccurrence')

const DeveloperQualifiedSymbolSchema = z
  .object({
    developerSymbol: z
      .string()
      .openapi({
        description:
          "A string representing the developer's unique symbol or identifier within the project. This symbol is used in conjunction with the project name to resolve the fully qualified name of an App Event Type.",
        example: null,
      }),
    projectName: z
      .string()
      .openapi({
        description:
          "The name of the project associated with the developer. It is a string that identifies the project within the developer's scope.",
        example: null,
      }),
  })
  .openapi({ required: ['developerSymbol', 'projectName'], example: null })
  .openapi('DeveloperQualifiedSymbol')

const AppEventResolutionResponseSchema = z
  .object({
    developerQualifiedSymbol: DeveloperQualifiedSymbolSchema,
    fullyQualifiedName: z
      .string()
      .openapi({
        description: 'A string representing the fully qualified name of the App Event Type.',
        example: null,
      }),
  })
  .openapi({ required: ['developerQualifiedSymbol', 'fullyQualifiedName'], example: null })
  .openapi('AppEventResolutionResponse')

const BatchInputAppEventOccurrenceSchema = z
  .object({
    inputs: z
      .array(AppEventOccurrenceSchema)
      .openapi({
        description:
          'An array of AppEventOccurrence objects, each representing an individual app event occurrence to be included in the batch. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputAppEventOccurrence')

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

const StandardErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The category of the error.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description: 'The context of the error, potentially including occurrence information.',
        example: null,
      }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects providing further information about the error.',
        example: null,
      }),
    id: z.string().exactOptional().openapi({ description: 'The error ID, if any.', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({ description: 'Links to any helpful documentation.', example: null }),
    message: z.string().openapi({ description: 'The error message, if any.', example: null }),
    status: z
      .string()
      .openapi({ description: 'The resulting status of the batch operation.', example: null }),
    subCategory: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Sub category of the error, if any.', example: null }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description: 'Ye olde error',
    example: null,
  })
  .openapi('StandardError')

const BatchResponseAppEventOccurrenceSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the batch operation was completed, in ISO 8601 format.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of StandardError objects detailing any errors that occurred during the batch operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs that provide additional information about the batch operation.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors encountered during the batch operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the batch operation was requested, in ISO 8601 format.',
        example: null,
      }),
    results: z
      .array(AppEventOccurrenceSchema)
      .openapi({
        description:
          'An array of AppEventOccurrence objects representing the results of the batch operation.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch operation started, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          "The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.",
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseAppEventOccurrence')

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

const ExternalAppEventResolutionRequestSchema = z
  .object({
    developerSymbol: z
      .string()
      .openapi({
        description: 'The developer symbol used to identify the App Event Type. It is a string.',
        example: null,
      }),
    projectName: z
      .string()
      .openapi({
        description: 'The name of the project associated with the App Event Type. It is a string.',
        example: null,
      }),
  })
  .openapi({ required: ['developerSymbol', 'projectName'], example: null })
  .openapi('ExternalAppEventResolutionRequest')

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
        'crm.objects.companies.highly_sensitive.write.v2': '',
        'crm.objects.companies.sensitive.write.v2': '',
        'crm.objects.companies.write': '',
        'crm.objects.contacts.highly_sensitive.write.v2': '',
        'crm.objects.contacts.sensitive.write.v2': '',
        'crm.objects.contacts.write': '',
        'crm.objects.deals.highly_sensitive.write.v2': '',
        'crm.objects.deals.sensitive.write.v2': '',
        'crm.objects.deals.write': '',
        'crm.objects.tickets.highly_sensitive.write': '',
        'crm.objects.tickets.sensitive.write': '',
        'crm.schemas.companies.write': '',
        'crm.schemas.contacts.write': '',
        'crm.schemas.deals.write': '',
        'tickets.highly_sensitive.v2': '',
        'tickets.sensitive.v2': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const postIntegratorsTimeline202609EventsRoute = createRoute({
  method: 'post',
  path: '/integrators/timeline/2026-09/events',
  tags: ['Advanced'],
  summary: 'Send event data (single)',
  description: 'Send a single instance of event data to a specified event type.',
  operationId: 'post-/integrators/timeline/2026-09/events_create',
  request: {
    body: {
      content: { 'application/json': { schema: AppEventOccurrenceSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'App Event Occurrence was accepted and persisted successfully. Mirrored to UnifiedEvents async.',
      content: {},
    },
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: AppEventOccurrenceSchema, example: null } },
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
    400: {
      description:
        'The occurrence has a validation error that prevented us from accepting it for persistence. The response body will contain details about the validation error. Occurrence insert request rejected.',
      content: {},
    },
    409: {
      description:
        'An occurrence for this event type and occurrence ID already exists. Occurrences are immutable. Occurrence insert request rejected.',
      content: {},
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.schemas.contacts.write'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.schemas.companies.write'] },
    { oauth2: ['crm.schemas.deals.write'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
  ],
})

export const postIntegratorsTimeline202609EventsBatchRoute = createRoute({
  method: 'post',
  path: '/integrators/timeline/2026-09/events/batch',
  tags: ['Batch'],
  summary: 'Batch insert events',
  description:
    'Insert a batch of new App Event occurrences into the timeline. Each occurrence in the batch is immutable, and if an occurrence with the same ID already exists, the entire batch will be rejected. The batch can include occurrences from multiple event types, but all must belong to a single portal.',
  operationId:
    'post-/integrators/timeline/2026-09/events/batch_/integrators/timeline/2026-03/events/batch',
  request: {
    body: {
      content: {
        'application/json': { schema: BatchInputAppEventOccurrenceSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseAppEventOccurrenceSchema, example: null },
      },
    },
    400: {
      description:
        'One or more occurrences has a validation error that prevented us from accepting them for persistence. The response body will contain details about the validation error. Occurrence batch insert request rejected, none were accepted.',
      content: {},
    },
    409: {
      description:
        'One or more occurrence in the batch already exist. Occurrences are immutable. Occurrence insert request rejected, none were accepted.',
      content: {},
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.schemas.contacts.write'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.schemas.companies.write'] },
    { oauth2: ['crm.schemas.deals.write'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    { oauth2: ['crm.objects.tickets.sensitive.write'] },
  ],
})

export const postIntegratorsTimeline202609TypesProjectsRoute = createRoute({
  method: 'post',
  path: '/integrators/timeline/2026-09/types/projects',
  tags: ['Advanced'],
  summary: 'Resolve Event Type',
  description:
    'Resolve the fully qualified name (FQN) of an App Event Type using its developer coordinates, which include the project name and developer symbol. This endpoint is used for event types managed through Projects and does not support legacy or non-migrated event types.',
  operationId:
    'post-/integrators/timeline/2026-09/types/projects_/integrators/timeline/2026-03/types/projects',
  request: {
    body: {
      content: {
        'application/json': { schema: ExternalAppEventResolutionRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: AppEventResolutionResponseSchema, example: null } },
    },
    404: {
      description:
        'There is no App Event Type for the provided coordinates. Did you provide them correctly?',
      content: {},
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})
