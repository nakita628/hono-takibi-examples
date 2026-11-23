import { createRoute, z } from '@hono/zod-openapi'

const ActionOverrideRequestSchema = z
  .object({
    associatedObjectTypeIds: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of strings representing the IDs of the associated object types involved in the action.',
        example: null,
      }),
    listIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of integers (int64 format) representing the IDs of the lists involved in the action.',
        example: null,
      }),
    objectIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of integers (int64 format) representing the IDs of the objects involved in the action.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of strings representing the properties to be overridden or specified for the action.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('ActionOverrideRequest')

const AppLifecycleEventSubscriptionUpsertRequestSchema = z
  .object({
    eventTypeId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier for the event type that the subscription is related to.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the properties associated with the event type that should be included in the subscription.',
        example: null,
      }),
    subscriptionType: z
      .literal('APP_LIFECYCLE_EVENT')
      .default('APP_LIFECYCLE_EVENT')
      .openapi({
        description:
          "A string indicating the type of subscription, which is 'APP_LIFECYCLE_EVENT' by default.",
        example: null,
      }),
  })
  .openapi({
    required: ['eventTypeId', 'properties', 'subscriptionType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('AppLifecycleEventSubscriptionUpsertRequest')

const AssociationSubscriptionUpsertRequestSchema = z
  .object({
    actions: z
      .array(
        z
          .enum([
            'CREATE',
            'UPDATE',
            'DELETE',
            'MERGE',
            'RESTORE',
            'ASSOCIATION_ADDED',
            'ASSOCIATION_REMOVED',
            'SNAPSHOT',
            'APP_INSTALL',
            'APP_UNINSTALL',
            'ADDED_TO_LIST',
            'REMOVED_FROM_LIST',
            'GDPR_DELETE',
          ])
          .openapi({ example: null }),
      )
      .openapi({
        description: 'The actions to track: `ASSOCIATION_ADDED` or `ASSOCIATION_REMOVED`.',
        example: null,
      }),
    associatedObjectTypeIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the type identifiers of the associated objects in the subscription.',
        example: null,
      }),
    objectIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .openapi({
        description:
          'The IDs of specific objects to track. Use an empty array to track all objects of this type.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'A string representing the type identifier of the object involved in the subscription.',
        example: null,
      }),
    portalId: z
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
        description: 'An integer representing the unique identifier of the HubSpot portal.',
        example: null,
      }),
    subscriptionType: z
      .literal('ASSOCIATION')
      .default('ASSOCIATION')
      .openapi({
        description:
          "A string indicating the type of subscription, which is 'ASSOCIATION' for this component.",
        example: null,
      }),
  })
  .openapi({
    required: [
      'actions',
      'associatedObjectTypeIds',
      'objectIds',
      'objectTypeId',
      'portalId',
      'subscriptionType',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('AssociationSubscriptionUpsertRequest')

const BatchInputStringSchema = z
  .object({
    inputs: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          "The offsets (UUIDs) of the journal entries to fetch, up to 100 per request. Use the `currentOffset` values returned by other journal endpoints. If any value is not a valid UUID, the whole request is rejected with a `400`. Offsets that can't be fetched, including ones with no matching entry for your app (or for `installPortalId` when it is set), don't fail the request: each one appears in `errors` with the offset in `context.offset`, and `numErrors` counts them. An empty list returns an empty result.",
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputString')

const JournalFetchResponseSchema = z
  .object({
    currentOffset: z
      .uuid()
      .openapi({
        description: 'A UUID string indicating the current offset for pagination purposes.',
        example: null,
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the URL will expire, in ISO 8601 format.',
        example: null,
      }),
    url: z
      .string()
      .openapi({
        description:
          "A temporary, pre-signed URL for downloading this entry's JSON file. Request it without an `Authorization` header.",
        example: null,
      }),
  })
  .openapi({ required: ['currentOffset', 'expiresAt', 'url'], example: null })
  .openapi('JournalFetchResponse')

const BatchResponseJournalFetchResponseSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the batch operation was completed, in ISO 8601 format.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs, providing additional resources or information related to the batch operation.',
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
      .array(JournalFetchResponseSchema)
      .openapi({
        description:
          'An array of results from the batch operation, each represented by a JournalFetchResponse object.',
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
  .openapi('BatchResponseJournalFetchResponse')

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
    category: z
      .string()
      .openapi({ description: 'A string indicating the category of the error.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional context about the error condition, with keys as context names and values as arrays of strings.',
        example: null,
      }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects that provide further information about the error.',
        example: null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that uniquely identifies this error instance.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object mapping link names to associated URIs that provide documentation or remediation steps related to the error.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description: 'A string containing a human-readable message describing the error.',
        example: null,
      }),
    status: z
      .string()
      .openapi({ description: 'A string representing the status of the error.', example: null }),
    subCategory: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'An object providing more specific details about the error category.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description: 'Ye olde error',
    example: null,
  })
  .openapi('StandardError')

const BatchResponseJournalFetchResponseWithErrorsSchema = z
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
          'An array of standard errors, detailing any issues encountered during the batch operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs, providing additional resources or documentation related to the batch operation.',
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
      .array(JournalFetchResponseSchema)
      .openapi({
        description:
          'An array of journal fetch responses, each representing a successful fetch attempt.',
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
  .openapi('BatchResponseJournalFetchResponseWithErrors')

const SubscriptionResponseSchema = z
  .object({
    actionOverrides: z
      .record(z.string(), ActionOverrideRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'An object containing overrides for actions, where each key is an action and the value is an ActionOverrideRequest object.',
        example: null,
      }),
    actions: z
      .array(
        z
          .enum([
            'CREATE',
            'UPDATE',
            'DELETE',
            'MERGE',
            'RESTORE',
            'ASSOCIATION_ADDED',
            'ASSOCIATION_REMOVED',
            'SNAPSHOT',
            'APP_INSTALL',
            'APP_UNINSTALL',
            'ADDED_TO_LIST',
            'REMOVED_FROM_LIST',
            'GDPR_DELETE',
          ])
          .openapi({ example: null }),
      )
      .openapi({
        description:
          "An array of actions associated with the subscription. Valid actions include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED', 'ASSOCIATION_REMOVED', 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL', 'ADDED_TO_LIST', 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.",
        example: null,
      }),
    appId: z
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
          'The unique identifier for the app associated with the subscription, represented as an integer.',
        example: null,
      }),
    associatedObjectTypeIds: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An array of strings representing the IDs of associated object types.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the subscription was created, in ISO 8601 format.',
        example: null,
      }),
    createdBy: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The unique identifier of the user who created the subscription, represented as an integer.',
        example: null,
      }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the subscription was deleted, in ISO 8601 format, if applicable.',
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
        description: 'The unique identifier for the subscription, represented as an integer.',
        example: null,
      }),
    listIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of integers representing the IDs of lists associated with the subscription.',
        example: null,
      }),
    objectIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of integers representing the IDs of objects associated with the subscription.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'The identifier for the type of object associated with the subscription, represented as a string.',
        example: null,
      }),
    portalId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The unique identifier for the portal associated with the subscription, represented as an integer.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of strings representing the properties associated with the subscription.',
        example: null,
      }),
    subscriptionType: z
      .enum([
        'APP_LIFECYCLE_EVENT',
        'ASSOCIATION',
        'EVENT',
        'GDPR_PRIVACY_DELETION',
        'LIST_MEMBERSHIP',
        'OBJECT',
      ])
      .openapi({
        description:
          "The type of subscription, indicating the nature of events it pertains to. Valid values include 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', and 'GDPR_PRIVACY_DELETION'.",
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the subscription was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'actions',
      'appId',
      'createdAt',
      'id',
      'objectTypeId',
      'subscriptionType',
      'updatedAt',
    ],
    example: null,
  })
  .openapi('SubscriptionResponse')

const CollectionResponseSubscriptionResponseNoPagingSchema = z
  .object({
    results: z
      .array(SubscriptionResponseSchema)
      .openapi({
        description:
          'An array of subscription responses, where each item contains details about a specific subscription. Each item follows the SubscriptionResponse schema.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseSubscriptionResponseNoPaging')

const ConditionSchema = z
  .object({
    filterType: z
      .literal('CRM_OBJECT_PROPERTY')
      .openapi({
        description:
          "A string indicating the type of filter applied. Valid value is 'CRM_OBJECT_PROPERTY'.",
        example: null,
      }),
    operator: z
      .enum([
        'CONTAINS',
        'ENDS_WITH',
        'EQ',
        'GT',
        'GTE',
        'IN',
        'IS_EMPTY',
        'IS_NOT_EMPTY',
        'LT',
        'LTE',
        'N_EQ',
        'NOT_IN',
        'STARTS_WITH',
      ])
      .openapi({
        description:
          "A string specifying the operation used for comparison. Valid values include 'EQ', 'N_EQ', 'LT', 'GT', 'LTE', 'GTE', 'CONTAINS', 'STARTS_WITH', 'ENDS_WITH', 'IN', 'NOT_IN', 'IS_EMPTY', and 'IS_NOT_EMPTY'.",
        example: null,
      }),
    property: z
      .string()
      .openapi({
        description: 'A string representing the property name that the condition is evaluating.',
        example: null,
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the value to compare against the specified property using the defined operator.',
        example: null,
      }),
    values: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          "An array of strings containing multiple values for comparison when using operators like 'IN' or 'NOT_IN'.",
        example: null,
      }),
  })
  .openapi({ required: ['filterType', 'operator', 'property'], example: null })
  .openapi('Condition')

const CrmObjectSnapshotRequestSchema = z
  .object({
    objectId: z
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
        description: 'An integer representing the unique identifier of the CRM object.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description: 'A string representing the type identifier of the CRM object.',
        example: null,
      }),
    portalId: z
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
        description: 'An integer representing the unique identifier of the HubSpot portal.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the properties of the CRM object to include in the snapshot.',
        example: null,
      }),
  })
  .openapi({ required: ['objectId', 'objectTypeId', 'portalId', 'properties'], example: null })
  .openapi('CrmObjectSnapshotRequest')

const CrmObjectSnapshotBatchRequestSchema = z
  .object({
    snapshotRequests: z
      .array(CrmObjectSnapshotRequestSchema)
      .openapi({
        description:
          'An array of CrmObjectSnapshotRequest objects, each representing a request to create a snapshot for a specific CRM object. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['snapshotRequests'], example: null })
  .openapi('CrmObjectSnapshotBatchRequest')

const CrmObjectSnapshotResponseSchema = z
  .object({
    objectId: z
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
          'An integer representing the unique identifier of the CRM object for which the snapshot was taken. It is in int64 format.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'A string representing the type identifier of the CRM object involved in the snapshot.',
        example: null,
      }),
    portalId: z
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
          'An integer representing the unique identifier of the HubSpot portal associated with the CRM object snapshot. It is in int64 format.',
        example: null,
      }),
    snapshotStatusId: z
      .uuid()
      .openapi({
        description:
          'The ID for tracking this snapshot. Pass it to the status endpoint to check progress.',
        example: null,
      }),
  })
  .openapi({
    required: ['objectId', 'objectTypeId', 'portalId', 'snapshotStatusId'],
    example: null,
  })
  .openapi('CrmObjectSnapshotResponse')

const CrmObjectSnapshotBatchResponseSchema = z
  .object({
    snapshotResponses: z
      .array(CrmObjectSnapshotResponseSchema)
      .openapi({
        description:
          'An array of responses for each CRM object snapshot request. Each item in the array is a CrmObjectSnapshotResponse object, detailing the outcome of a single snapshot request.',
        example: null,
      }),
  })
  .openapi({ required: ['snapshotResponses'], example: null })
  .openapi('CrmObjectSnapshotBatchResponse')

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

const FilterSchema = z
  .object({
    conditions: z
      .array(ConditionSchema)
      .openapi({
        description:
          'The conditions that define the filter. An event matches the filter only if it matches every condition.',
        example: null,
      }),
  })
  .openapi({
    required: ['conditions'],
    description:
      'Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. ',
    example: null,
  })
  .openapi('Filter')

const FilterCreateRequestSchema = z
  .object({
    filter: FilterSchema,
    subscriptionId: z
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
          'An integer representing the unique identifier of the subscription to which the filter will be applied. It is required and uses the int64 format.',
        example: null,
      }),
  })
  .openapi({ required: ['filter', 'subscriptionId'], example: null })
  .openapi('FilterCreateRequest')

const FilterCreateResponseSchema = z
  .object({
    filterId: z
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
          'The unique identifier for the created filter. It is an integer in int64 format.',
        example: null,
      }),
  })
  .openapi({ required: ['filterId'], example: null })
  .openapi('FilterCreateResponse')

const FilterResponseSchema = z
  .object({
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
        description: 'A Unix timestamp in milliseconds indicating when the filter was created.',
        example: null,
      }),
    filter: FilterSchema,
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
        description: 'The unique identifier for the filter, represented as a 64-bit integer.',
        example: null,
      }),
  })
  .openapi({ required: ['createdAt', 'filter', 'id'], example: null })
  .openapi('FilterResponse')

const GdprPrivacyDeletionSubscriptionUpsertRequestSchema = z
  .object({
    actions: z
      .array(
        z
          .enum([
            'CREATE',
            'UPDATE',
            'DELETE',
            'MERGE',
            'RESTORE',
            'ASSOCIATION_ADDED',
            'ASSOCIATION_REMOVED',
            'SNAPSHOT',
            'APP_INSTALL',
            'APP_UNINSTALL',
            'ADDED_TO_LIST',
            'REMOVED_FROM_LIST',
            'GDPR_DELETE',
          ])
          .openapi({ example: null }),
      )
      .openapi({
        description: 'The actions to track. The only valid action is `GDPR_DELETE`.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier for the object type associated with the subscription.',
        example: null,
      }),
    portalId: z
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
          'The unique identifier for the HubSpot portal, represented as a 64-bit integer.',
        example: null,
      }),
    subscriptionType: z
      .literal('GDPR_PRIVACY_DELETION')
      .default('GDPR_PRIVACY_DELETION')
      .openapi({
        description: "The type of subscription, which is fixed as 'GDPR_PRIVACY_DELETION'.",
        example: null,
      }),
  })
  .openapi({
    required: ['actions', 'objectTypeId', 'portalId', 'subscriptionType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('GdprPrivacyDeletionSubscriptionUpsertRequest')

const ListMembershipSubscriptionUpsertRequestSchema = z
  .object({
    actions: z
      .array(
        z
          .enum([
            'CREATE',
            'UPDATE',
            'DELETE',
            'MERGE',
            'RESTORE',
            'ASSOCIATION_ADDED',
            'ASSOCIATION_REMOVED',
            'SNAPSHOT',
            'APP_INSTALL',
            'APP_UNINSTALL',
            'ADDED_TO_LIST',
            'REMOVED_FROM_LIST',
            'GDPR_DELETE',
          ])
          .openapi({ example: null }),
      )
      .openapi({
        description: 'The actions to track: `ADDED_TO_LIST` or `REMOVED_FROM_LIST`.',
        example: null,
      }),
    listIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .openapi({
        description: 'The IDs of the lists to track. Use an empty array to track all lists.',
        example: null,
      }),
    objectIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .openapi({
        description:
          'The IDs of specific records to track. Use an empty array to track all records.',
        example: null,
      }),
    portalId: z
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
          'An integer representing the unique identifier of the portal in which the subscription is being managed.',
        example: null,
      }),
    subscriptionType: z
      .literal('LIST_MEMBERSHIP')
      .default('LIST_MEMBERSHIP')
      .openapi({
        description:
          "A string indicating the type of subscription. The default and only valid value is 'LIST_MEMBERSHIP'.",
        example: null,
      }),
  })
  .openapi({
    required: ['actions', 'listIds', 'objectIds', 'portalId', 'subscriptionType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('ListMembershipSubscriptionUpsertRequest')

const ObjectSubscriptionUpsertRequestSchema = z
  .object({
    actions: z
      .array(
        z
          .enum([
            'CREATE',
            'UPDATE',
            'DELETE',
            'MERGE',
            'RESTORE',
            'ASSOCIATION_ADDED',
            'ASSOCIATION_REMOVED',
            'SNAPSHOT',
            'APP_INSTALL',
            'APP_UNINSTALL',
            'ADDED_TO_LIST',
            'REMOVED_FROM_LIST',
            'GDPR_DELETE',
          ])
          .openapi({ example: null }),
      )
      .openapi({
        description: 'The actions to track: `CREATE`, `UPDATE`, `DELETE`, `MERGE`, or `RESTORE`.',
        example: null,
      }),
    objectIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', example: null }),
      )
      .openapi({
        description:
          'The IDs of specific objects to track. Use an empty array to track all objects of this type.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the object type for which the subscription is being created or updated.',
        example: null,
      }),
    portalId: z
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
        description: 'An integer representing the unique identifier of the HubSpot portal.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'The properties to track. When set, updates are only recorded if one of these properties changed. Use an empty array to track all properties.',
        example: null,
      }),
    subscriptionType: z
      .literal('OBJECT')
      .default('OBJECT')
      .openapi({
        description:
          "A string indicating the type of subscription, which is always 'OBJECT' for this request.",
        example: null,
      }),
  })
  .openapi({
    required: [
      'actions',
      'objectIds',
      'objectTypeId',
      'portalId',
      'properties',
      'subscriptionType',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('ObjectSubscriptionUpsertRequest')

const SnapshotStatusResponseSchema = z
  .object({
    completedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'When the snapshot finished, in milliseconds since the Unix epoch. Absent until the snapshot finishes.',
        example: null,
      }),
    errorCode: z
      .enum(['INTERNAL_ERROR', 'PERMISSION_DENIED', 'TIMEOUT', 'VALIDATION_ERROR'])
      .exactOptional()
      .openapi({
        description:
          "An optional code indicating the error that occurred, if any. Possible values are 'TIMEOUT', 'VALIDATION_ERROR', 'INTERNAL_ERROR', and 'PERMISSION_DENIED'.",
        example: null,
      }),
    id: z
      .uuid()
      .openapi({
        description: 'A unique identifier for the snapshot, represented as a UUID.',
        example: null,
      }),
    initiatedAt: z
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
        description: 'When the snapshot was requested, in milliseconds since the Unix epoch.',
        example: null,
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A descriptive message providing additional information about the snapshot status or error.',
        example: null,
      }),
    status: z
      .enum(['EXPIRED', 'FAILED', 'IN_PROGRESS', 'PENDING', 'SUCCESS'])
      .openapi({
        description:
          'The current status of the snapshot: `PENDING`, `IN_PROGRESS`, `SUCCESS`, `FAILED`, or `EXPIRED`.',
        example: null,
      }),
  })
  .openapi({ required: ['id', 'initiatedAt', 'status'], example: null })
  .openapi('SnapshotStatusResponse')

const SubscriptionUpsertRequestSchema = z
  .xor([
    ObjectSubscriptionUpsertRequestSchema,
    AssociationSubscriptionUpsertRequestSchema,
    AppLifecycleEventSubscriptionUpsertRequestSchema,
    ListMembershipSubscriptionUpsertRequestSchema,
    GdprPrivacyDeletionSubscriptionUpsertRequestSchema,
  ])
  .openapi({ example: null })
  .openapi('SubscriptionUpsertRequest')

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

export const getWebhooksJournalJournalLocal202609BatchEarliestCountRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal-local/2026-09/batch/earliest/{count}',
  tags: ['Batch'],
  summary: 'Fetch earliest batch',
  description: "Retrieve the oldest entries still available in your app's journal, up to `count`.",
  operationId: 'get-/webhooks-journal/journal-local/2026-09/batch/earliest/{count}',
  request: {
    params: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            name: 'count',
            in: 'path',
            description: 'The number of entries to return, from 1 to 100.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { minimum: 1, type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description:
              'The ID of the installation portal for which to retrieve the webhook journal entries.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseJournalFetchResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalJournalLocal202609BatchLatestCountRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal-local/2026-09/batch/latest/{count}',
  tags: ['Batch'],
  summary: 'Retrieve Latest Batch',
  description:
    "Retrieve the most recent entries in your app's journal, up to `count`. Entries are returned oldest first.",
  operationId: 'get-/webhooks-journal/journal-local/2026-09/batch/latest/{count}',
  request: {
    params: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            name: 'count',
            in: 'path',
            description: 'The number of entries to return, from 1 to 100.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { minimum: 1, type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description:
              'The ID of an account that has installed your app. When set, only entries for that account are returned.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseJournalFetchResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postWebhooksJournalJournalLocal202609BatchReadRoute = createRoute({
  method: 'post',
  path: '/webhooks-journal/journal-local/2026-09/batch/read',
  tags: ['Batch'],
  summary: 'Batch read',
  description:
    "Fetch up to 100 journal entries by offset in a single request. Offsets that can't be fetched don't fail the request; they're listed in `errors` and counted in `numErrors`.",
  operationId: 'post-/webhooks-journal/journal-local/2026-09/batch/read',
  request: {
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description:
              'The ID of an account that has installed your app. When set, only entries for that account are returned.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchInputStringSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseJournalFetchResponseSchema, example: null },
      },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponseJournalFetchResponseWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalJournalLocal202609BatchOffsetNextCountRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}',
  tags: ['Batch'],
  summary: 'Fetch Batch',
  description:
    "Retrieve up to `count` entries that follow the given offset. Pass the last entry's `currentOffset` to fetch the next page.",
  operationId: 'get-/webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}',
  request: {
    params: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            name: 'count',
            in: 'path',
            description: 'The number of entries to return, from 1 to 100.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { minimum: 1, type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      offset: z
        .string()
        .openapi({
          param: {
            name: 'offset',
            in: 'path',
            description:
              "The `currentOffset` of the last entry you processed. Entries after this offset are returned. If the offset has expired or doesn't exist, the batch is empty.",
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description:
              'The ID of an account that has installed your app. When set, only entries for that account are returned.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseJournalFetchResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalJournalLocal202609EarliestRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal-local/2026-09/earliest',
  tags: ['Basic'],
  summary: 'Retrieve earliest',
  description:
    "Retrieve the oldest entry still available in your app's journal. Use `installPortalId` to limit it to one account.",
  operationId: 'get-/webhooks-journal/journal-local/2026-09/earliest',
  request: {
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description:
              'The ID of the installation portal to filter the journal entries by. This is an integer value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: JournalFetchResponseSchema, example: null } },
    },
    204: { description: 'The journal has no entries' },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalJournalLocal202609LatestRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal-local/2026-09/latest',
  tags: ['Basic'],
  summary: 'Retrieve latest',
  description:
    "Retrieve the most recent entry in your app's journal. Use `installPortalId` to limit it to one account.",
  operationId: 'get-/webhooks-journal/journal-local/2026-09/latest',
  request: {
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description:
              'The ID of the portal for which to retrieve the latest webhook journal entries. It is an integer value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: JournalFetchResponseSchema, example: null } },
    },
    204: { description: 'The journal has no entries' },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalJournalLocal202609OffsetOffsetNextRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal-local/2026-09/offset/{offset}/next',
  tags: ['Basic'],
  summary: 'Retrieve Next Batch',
  description:
    "Retrieve the entry that follows the given offset. Fails with a `404` if the offset has expired or doesn't exist.",
  operationId: 'get-/webhooks-journal/journal-local/2026-09/offset/{offset}/next',
  request: {
    params: z.object({
      offset: z
        .string()
        .openapi({
          param: {
            name: 'offset',
            in: 'path',
            description:
              'The `currentOffset` of the last entry you processed. The entry after this offset is returned.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description:
              'The ID of the portal installation. This is an integer value used to identify the specific portal installation for which the webhook journal entries are being retrieved.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: JournalFetchResponseSchema, example: null } },
    },
    204: { description: 'No journal entry exists after the given offset' },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalJournalLocal202609StatusStatusIdRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal-local/2026-09/status/{statusId}',
  tags: ['Basic'],
  summary: 'Retrieve status',
  description:
    'Retrieve the status of a snapshot request. Use the `snapshotStatusId` returned when the snapshot was requested.',
  operationId: 'get-/webhooks-journal/journal-local/2026-09/status/{statusId}',
  request: {
    params: z.object({
      statusId: z
        .uuid()
        .openapi({
          param: {
            name: 'statusId',
            in: 'path',
            description: 'The `snapshotStatusId` returned when the snapshot was requested.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', format: 'uuid', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SnapshotStatusResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalJournal202609BatchEarliestCountRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal/2026-09/batch/earliest/{count}',
  tags: ['Batch'],
  summary: 'Fetch Earliest Batch',
  description: "Retrieve the oldest entries still available in your app's journal, up to `count`.",
  operationId: 'get-/webhooks-journal/journal/2026-09/batch/earliest/{count}',
  request: {
    params: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            name: 'count',
            in: 'path',
            description: 'The number of entries to return, from 1 to 100.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { minimum: 1, type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description: 'The ID of the portal installation to filter the webhook journal entries.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseJournalFetchResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalJournal202609BatchLatestCountRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal/2026-09/batch/latest/{count}',
  tags: ['Batch'],
  summary: 'Retrieve latest batch',
  description:
    "Retrieve the most recent entries in your app's journal, up to `count`. Entries are returned oldest first.",
  operationId: 'get-/webhooks-journal/journal/2026-09/batch/latest/{count}',
  request: {
    params: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            name: 'count',
            in: 'path',
            description: 'The number of entries to return, from 1 to 100.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { minimum: 1, type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description:
              'The ID of an account that has installed your app. When set, only entries for that account are returned.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseJournalFetchResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postWebhooksJournalJournal202609BatchReadRoute = createRoute({
  method: 'post',
  path: '/webhooks-journal/journal/2026-09/batch/read',
  tags: ['Batch'],
  summary: 'Batch read',
  description:
    "Fetch up to 100 journal entries by offset in a single request. Offsets that can't be fetched don't fail the request; they're listed in `errors` and counted in `numErrors`.",
  operationId: 'post-/webhooks-journal/journal/2026-09/batch/read',
  request: {
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description:
              'An integer representing the ID of the portal installation to filter the webhook journal entries.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchInputStringSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseJournalFetchResponseSchema, example: null },
      },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponseJournalFetchResponseWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalJournal202609BatchOffsetNextCountRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal/2026-09/batch/{offset}/next/{count}',
  tags: ['Batch'],
  summary: 'Fetch Batch',
  description:
    "Retrieve up to `count` entries that follow the given offset. Pass the last entry's `currentOffset` to fetch the next page.",
  operationId: 'get-/webhooks-journal/journal/2026-09/batch/{offset}/next/{count}',
  request: {
    params: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            name: 'count',
            in: 'path',
            description: 'The number of entries to return, from 1 to 100.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { minimum: 1, type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      offset: z
        .string()
        .openapi({
          param: {
            name: 'offset',
            in: 'path',
            description:
              "The `currentOffset` of the last entry you processed. Entries after this offset are returned. If the offset has expired or doesn't exist, the batch is empty.",
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description:
              'The ID of an account that has installed your app. When set, only entries for that account are returned.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseJournalFetchResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalJournal202609EarliestRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal/2026-09/earliest',
  tags: ['Basic'],
  summary: 'Retrieve earliest entry',
  description:
    "Retrieve the oldest entry still available in your app's journal. Use `installPortalId` to limit it to one account.",
  operationId: 'get-/webhooks-journal/journal/2026-09/earliest',
  request: {
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description:
              'The ID of the portal for which to retrieve the earliest webhook journal entry. This is an integer value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: JournalFetchResponseSchema, example: null } },
    },
    204: { description: 'The journal has no entries' },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalJournal202609LatestRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal/2026-09/latest',
  tags: ['Basic'],
  summary: 'Retrieve latest journal',
  description:
    "Retrieve the most recent entry in your app's journal. Use `installPortalId` to limit it to one account.",
  operationId: 'get-/webhooks-journal/journal/2026-09/latest',
  request: {
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description:
              'The ID of the portal for which the latest journal entries are to be retrieved. This parameter is optional and should be an integer.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: JournalFetchResponseSchema, example: null } },
    },
    204: { description: 'The journal has no entries' },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalJournal202609OffsetOffsetNextRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal/2026-09/offset/{offset}/next',
  tags: ['Basic'],
  summary: 'Retrieve Next Entries',
  description:
    "Retrieve the entry that follows the given offset. Fails with a `404` if the offset has expired or doesn't exist.",
  operationId: 'get-/webhooks-journal/journal/2026-09/offset/{offset}/next',
  request: {
    params: z.object({
      offset: z
        .string()
        .openapi({
          param: {
            name: 'offset',
            in: 'path',
            description:
              'The `currentOffset` of the last entry you processed. The entry after this offset is returned.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      installPortalId: z
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
            name: 'installPortalId',
            in: 'query',
            description:
              'The ID of an account that has installed your app. When set, only entries for that account are returned.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: JournalFetchResponseSchema, example: null } },
    },
    204: { description: 'No journal entry exists after the given offset' },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalJournal202609StatusStatusIdRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal/2026-09/status/{statusId}',
  tags: ['Basic'],
  summary: 'Retrieve status',
  description:
    'Retrieve the status of a snapshot request. Use the `snapshotStatusId` returned when the snapshot was requested.',
  operationId: 'get-/webhooks-journal/journal/2026-09/status/{statusId}',
  request: {
    params: z.object({
      statusId: z
        .uuid()
        .openapi({
          param: {
            name: 'statusId',
            in: 'path',
            description: 'The `snapshotStatusId` returned when the snapshot was requested.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', format: 'uuid', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SnapshotStatusResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postWebhooksJournalSnapshots202609CrmRoute = createRoute({
  method: 'post',
  path: '/webhooks-journal/snapshots/2026-09/crm',
  tags: ['Advanced'],
  summary: 'Create Snapshot',
  description:
    'Capture the current state of up to 200 CRM objects. Each snapshot is written to your journal as a `SNAPSHOT` entry, and its progress can be checked with the status endpoint using the returned `snapshotStatusId`. This operation is exempt from daily and ten-secondly rate limits.',
  operationId: 'post-/webhooks-journal/snapshots/2026-09/crm',
  request: {
    body: {
      content: {
        'application/json': { schema: CrmObjectSnapshotBatchRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CrmObjectSnapshotBatchResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalSubscriptions202609Route = createRoute({
  method: 'get',
  path: '/webhooks-journal/subscriptions/2026-09',
  tags: ['Basic'],
  summary: 'List subscriptions',
  description: "Retrieve all of your app's subscriptions.",
  operationId: 'get-/webhooks-journal/subscriptions/2026-09',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponseSubscriptionResponseNoPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postWebhooksJournalSubscriptions202609Route = createRoute({
  method: 'post',
  path: '/webhooks-journal/subscriptions/2026-09',
  tags: ['Basic'],
  summary: 'Upsert subscription',
  description:
    'Create a subscription, or update the existing one with the same subscription type, object type, and account. The request body sets which actions and objects are recorded in your journal.',
  operationId: 'post-/webhooks-journal/subscriptions/2026-09',
  request: {
    body: {
      content: { 'application/json': { schema: SubscriptionUpsertRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SubscriptionResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postWebhooksJournalSubscriptions202609FiltersRoute = createRoute({
  method: 'post',
  path: '/webhooks-journal/subscriptions/2026-09/filters',
  tags: ['Advanced'],
  summary: 'Create Filter',
  description:
    'Add a filter to a subscription. When a subscription has filters, only events that match at least one of them are recorded in your journal.',
  operationId: 'post-/webhooks-journal/subscriptions/2026-09/filters',
  request: {
    body: {
      content: { 'application/json': { schema: FilterCreateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: FilterCreateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdRoute =
  createRoute({
    method: 'get',
    path: '/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}',
    tags: ['Basic'],
    summary: 'Retrieve filters',
    description: 'Retrieve all filters attached to a subscription.',
    operationId:
      'get-/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}',
    request: {
      params: z.object({
        subscriptionId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              name: 'subscriptionId',
              in: 'path',
              description:
                'The unique identifier of the subscription for which to retrieve filters.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'integer', format: 'int64', example: null },
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
            schema: z.array(FilterResponseSchema).openapi({ example: null }),
            example: null,
          },
        },
      },
      default: ErrorResponse,
    },
    security: [],
  })

export const getWebhooksJournalSubscriptions202609FiltersFilterIdRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/subscriptions/2026-09/filters/{filterId}',
  tags: ['Basic'],
  summary: 'Retrieve filter',
  description: 'Retrieve a filter by its ID.',
  operationId: 'get-/webhooks-journal/subscriptions/2026-09/filters/{filterId}',
  request: {
    params: z.object({
      filterId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'filterId',
            in: 'path',
            description: 'The unique identifier of the filter to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: FilterResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const deleteWebhooksJournalSubscriptions202609FiltersFilterIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks-journal/subscriptions/2026-09/filters/{filterId}',
  tags: ['Basic'],
  summary: 'Delete filter',
  description: "Delete a filter from its subscription. This can't be undone.",
  operationId: 'delete-/webhooks-journal/subscriptions/2026-09/filters/{filterId}',
  request: {
    params: z.object({
      filterId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'filterId',
            in: 'path',
            description: 'The unique identifier of the filter to delete. It must be an integer.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
  security: [],
})

export const deleteWebhooksJournalSubscriptions202609PortalsPortalIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks-journal/subscriptions/2026-09/portals/{portalId}',
  tags: ['Basic'],
  summary: 'Delete Subscription',
  description:
    "Delete all of your app's subscriptions for an account, along with their filters. Changes in that account are no longer recorded in your journal.",
  operationId: 'delete-/webhooks-journal/subscriptions/2026-09/portals/{portalId}',
  request: {
    params: z.object({
      portalId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'portalId',
            in: 'path',
            description:
              'The unique identifier of the portal whose webhook journal subscription is to be deleted.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
  security: [],
})

export const getWebhooksJournalSubscriptions202609SubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/subscriptions/2026-09/{subscriptionId}',
  tags: ['Basic'],
  summary: 'Retrieve subscription',
  description: 'Retrieve a subscription by its ID.',
  operationId: 'get-/webhooks-journal/subscriptions/2026-09/{subscriptionId}',
  request: {
    params: z.object({
      subscriptionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'subscriptionId',
            in: 'path',
            description:
              'The unique identifier of the subscription to retrieve. It must be an integer.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SubscriptionResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const deleteWebhooksJournalSubscriptions202609SubscriptionIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks-journal/subscriptions/2026-09/{subscriptionId}',
  tags: ['Basic'],
  summary: 'Delete subscription',
  description: 'Delete a subscription by its ID.',
  operationId: 'delete-/webhooks-journal/subscriptions/2026-09/{subscriptionId}',
  request: {
    params: z.object({
      subscriptionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'subscriptionId',
            in: 'path',
            description: 'The unique identifier of the subscription to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content' }, default: ErrorResponse },
  security: [],
})
