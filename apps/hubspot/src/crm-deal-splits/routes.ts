import { createRoute, z } from '@hono/zod-openapi'

const PublicObjectIdSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the public object.', example: null }),
  })
  .openapi({ required: ['id'], description: 'Contains the Id of a Public Object', example: null })
  .openapi('PublicObjectId')

const BatchInputPublicObjectIdSchema = z
  .object({
    inputs: z
      .array(PublicObjectIdSchema)
      .openapi({ description: 'An array of deal split inputs', example: null }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputPublicObjectId')

const ValueWithTimestampSchema = z
  .object({
    sourceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the unique identifier of the source.',
        example: null,
      }),
    sourceLabel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing a human-readable label for the source.',
        example: null,
      }),
    sourceType: z
      .string()
      .openapi({
        description: 'A string indicating the type of source from which the value originated.',
        example: null,
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'A string in date-time format indicating when the value was recorded.',
        example: null,
      }),
    updatedByUserId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the ID of the user who last updated the value.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'A string representing the main value being tracked.',
        example: null,
      }),
  })
  .openapi({
    required: ['sourceType', 'timestamp', 'value'],
    description: 'Property model that includes timestamp.',
    example: null,
  })
  .openapi('ValueWithTimestamp')

const SimplePublicObjectSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this object is archived.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this object was archived, in ISO 8601 format.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this object was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this object, represented as a string.',
        example: null,
      }),
    objectWriteTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string identifier used for tracing write operations on this object.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'A map of property names to their values, where each value is a string.',
        example: null,
      }),
    propertiesWithHistory: z
      .record(z.string(), z.array(ValueWithTimestampSchema).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of property names to arrays of historical values, each containing a value and its associated timestamp.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this object was last updated, in ISO 8601 format.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL associated with this object.',
        example: null,
      }),
  })
  .openapi({
    required: ['archived', 'createdAt', 'id', 'properties', 'updatedAt'],
    description: 'A simple public object.',
    example: null,
  })
  .openapi('SimplePublicObject')

const DealToDealSplitsSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the deal associated with the deal splits.',
        example: null,
      }),
    splits: z
      .array(SimplePublicObjectSchema)
      .openapi({
        description:
          'An array of deal split objects, each representing a portion of the deal assigned to an owner.',
        example: null,
      }),
  })
  .openapi({ required: ['id', 'splits'], example: null })
  .openapi('DealToDealSplits')

const BatchResponseDealToDealSplitsSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The timestamp indicating when the batch operation was completed, in date-time format.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs for additional resources or documentation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The timestamp indicating when the batch operation was requested, in date-time format.',
        example: null,
      }),
    results: z
      .array(DealToDealSplitsSchema)
      .openapi({
        description:
          'An array of deal-to-deal split objects representing the results of the batch operation.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The timestamp indicating when the batch operation started, in date-time format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The current status of the batch operation, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseDealToDealSplits')

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
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({ description: 'Context about the error condition', example: null }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects that provide further information about the error.',
        example: null,
      }),
    id: z.string().exactOptional().openapi({ description: 'The id of the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z.string().openapi({ description: 'The error message', example: null }),
    status: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description: 'Ye olde error',
    example: null,
  })
  .openapi('StandardError')

const BatchResponseDealToDealSplitsWithErrorsSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The timestamp indicating when the batch operation was completed, in date-time format.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of error objects detailing the errors that occurred during the batch operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs for additional resources or documentation.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total number of errors encountered during the batch operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The timestamp indicating when the batch operation was requested, in date-time format.',
        example: null,
      }),
    results: z
      .array(DealToDealSplitsSchema)
      .openapi({
        description:
          'An array of deal-to-deal split objects representing the results of the batch operation.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The timestamp indicating when the batch operation started, in date-time format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The current status of the batch operation, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseDealToDealSplitsWithErrors')

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

const PublicDealSplitInputSchema = z
  .object({
    ownerId: z
      .int32()
      .openapi({
        description: 'The unique identifier of the owner receiving the deal split.',
        example: null,
      }),
    percentage: z
      .number()
      .openapi({
        description:
          'The portion of the deal assigned to the owner, expressed as a percentage. The total percentage for all splits in a deal must sum up to 1.0 (100%) and can have up to 8 decimal places.',
        example: null,
      }),
  })
  .openapi({ required: ['ownerId', 'percentage'], example: null })
  .openapi('PublicDealSplitInput')

const PublicDealSplitsCreateRequestSchema = z
  .object({
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
        description: 'The unique identifier for the deal.',
        example: null,
      }),
    splits: z
      .array(PublicDealSplitInputSchema)
      .openapi({
        description:
          'An array of deal split inputs, each containing an owner ID and a percentage of the deal split.',
        example: null,
      }),
  })
  .openapi({ required: ['id', 'splits'], example: null })
  .openapi('PublicDealSplitsCreateRequest')

const PublicDealSplitsBatchCreateRequestSchema = z
  .object({
    inputs: z
      .array(PublicDealSplitsCreateRequestSchema)
      .openapi({ description: 'An array of deal split inputs', example: null }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('PublicDealSplitsBatchCreateRequest')

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
      scopes: { 'crm.dealsplits.read_write': '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const postDealSplits202609BatchReadRoute = createRoute({
  method: 'post',
  path: '/deal-splits/2026-09/batch/read',
  tags: ['Batch'],
  summary: 'Read a batch of deal split objects by their associated deal object internal ID',
  description: 'Read a batch of deal split objects by their associated deal object internal ID',
  operationId: 'post-/deal-splits/2026-09/batch/read_/crm/objects/v3/deals/splits/batch/read',
  request: {
    body: {
      content: { 'application/json': { schema: BatchInputPublicObjectIdSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseDealToDealSplitsSchema, example: null },
      },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponseDealToDealSplitsWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.dealsplits.read_write'] }],
})

export const postDealSplits202609BatchUpsertRoute = createRoute({
  method: 'post',
  path: '/deal-splits/2026-09/batch/upsert',
  tags: ['Batch'],
  summary:
    'Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places',
  description:
    'Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places',
  operationId: 'post-/deal-splits/2026-09/batch/upsert_/crm/objects/v3/deals/splits/batch/upsert',
  request: {
    body: {
      content: {
        'application/json': { schema: PublicDealSplitsBatchCreateRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseDealToDealSplitsSchema, example: null },
      },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponseDealToDealSplitsWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.dealsplits.read_write'] }],
})
