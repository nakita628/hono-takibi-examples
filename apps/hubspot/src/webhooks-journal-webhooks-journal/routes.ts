import { createRoute, z } from '@hono/zod-openapi'

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
        description:
          "An array of strings specifying the actions that trigger the subscription. Valid actions include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED', 'ASSOCIATION_REMOVED', 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL', 'ADDED_TO_LIST', 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.",
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
          'An array of integers specifying the unique identifiers of the objects involved in the subscription.',
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
          'An array of strings listing the properties of the objects that are relevant to the subscription.',
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
        description:
          "An array of strings specifying the actions that trigger the subscription. Valid actions include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED', 'ASSOCIATION_REMOVED', 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL', 'ADDED_TO_LIST', 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.",
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
          'An array of integers representing the unique identifiers of the objects involved in the subscription.',
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
        description:
          "An array of strings specifying the actions that trigger the subscription. Valid actions include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED', 'ASSOCIATION_REMOVED', 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL', 'ADDED_TO_LIST', 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.",
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
        description:
          'An array of integers representing the unique identifiers of the lists involved in the subscription.',
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
          'An array of integers representing the unique identifiers of the objects involved in the subscription.',
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
        description:
          "An array of actions that can trigger the subscription, such as 'CREATE', 'UPDATE', 'DELETE', and 'GDPR_DELETE'.",
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

type SubscriptionUpsertRequestType =
  | z.infer<typeof ObjectSubscriptionUpsertRequestSchema>
  | z.infer<typeof AssociationSubscriptionUpsertRequestSchema>
  | z.infer<typeof AppLifecycleEventSubscriptionUpsertRequestSchema>
  | z.infer<typeof ListMembershipSubscriptionUpsertRequestSchema>
  | z.infer<typeof GdprPrivacyDeletionSubscriptionUpsertRequestSchema>

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

const BatchInputStringSchema = z
  .object({
    inputs: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings that are to be processed in the batch operation. This property is required.',
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
        description: 'A string representing the URL where the journal data can be accessed.',
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
      .object({})
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

const SubscriptionResponseMarch2027Schema = z
  .object({
    actionOverrides: z
      .record(z.string(), ActionOverrideRequestSchema)
      .exactOptional()
      .openapi({ example: null }),
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
      .openapi({ example: null }),
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
      .openapi({ type: 'integer', format: 'int64', example: null }),
    associatedObjectTypeIds: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ example: null }),
    createdAt: z.iso.datetime({ offset: true }).openapi({ example: null }),
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
      .openapi({ type: 'integer', format: 'int64', example: null }),
    deletedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ example: null }),
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
      .openapi({ type: 'integer', format: 'int64', example: null }),
    includeSensitivePropertiesChanged: z.boolean().exactOptional().openapi({ example: null }),
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
      .openapi({ example: null }),
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
      .openapi({ example: null }),
    objectTypeId: z.string().openapi({ example: null }),
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
      .openapi({ type: 'integer', format: 'int64', example: null }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({ example: null }),
    subscriptionType: z
      .enum([
        'APP_LIFECYCLE_EVENT',
        'ASSOCIATION',
        'EVENT',
        'GDPR_PRIVACY_DELETION',
        'LIST_MEMBERSHIP',
        'OBJECT',
      ])
      .openapi({ example: null }),
    updatedAt: z.iso.datetime({ offset: true }).openapi({ example: null }),
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
  .openapi('SubscriptionResponseMarch2027')

const CollectionResponseSubscriptionResponseMarch2027NoPagingSchema = z
  .object({ results: z.array(SubscriptionResponseMarch2027Schema).openapi({ example: null }) })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseSubscriptionResponseMarch2027NoPaging')

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
          'A string in UUID format representing the status identifier of the snapshot operation.',
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
          'An array of conditions that define the criteria for the filter. Each condition specifies a filter type, operator, property, and optional values.',
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
          'The timestamp when the snapshot was completed, represented as an integer in int64 format. This field may be null if the snapshot is not yet completed.',
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
        description:
          'The timestamp when the snapshot was initiated, represented as an integer in int64 format.',
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
          "The current status of the snapshot. Valid values include 'PENDING', 'IN_PROGRESS', 'COMPLETED', 'FAILED', and 'EXPIRED'.",
        example: null,
      }),
  })
  .openapi({ required: ['id', 'initiatedAt', 'status'], example: null })
  .openapi('SnapshotStatusResponse')

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

const SubscriptionUpsertRequestSchema: z.ZodType<SubscriptionUpsertRequestType> = z
  .lazy(() =>
    z
      .xor([
        ObjectSubscriptionUpsertRequestSchema,
        AssociationSubscriptionUpsertRequestSchema,
        AppLifecycleEventSubscriptionUpsertRequestSchema,
        ListMembershipSubscriptionUpsertRequestSchema,
        GdprPrivacyDeletionSubscriptionUpsertRequestSchema,
      ])
      .openapi({ example: null }),
  )
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

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getWebhooksJournalJournalLocal202609BatchEarliestCountRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal-local/2026-09/batch/earliest/{count}',
  tags: ['Batch'],
  summary: 'Fetch earliest batch',
  description:
    "Retrieve the earliest batch of webhook journal entries. This endpoint is useful for accessing the oldest available data in the webhook journal, allowing users to process or analyze historical webhook events. The number of entries to fetch is specified by the 'count' path parameter.",
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
            description:
              'The number of webhook journal entries to retrieve. Must be an integer with a minimum value of 1.',
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
    'Retrieve the latest batch of webhook journal entries. This endpoint allows you to specify the number of entries to fetch, providing a way to access the most recent webhook events processed by your HubSpot account.',
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
            description:
              'The number of journal entries to retrieve. Must be an integer with a minimum value of 1.',
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
              'The ID of the portal installation. This parameter is optional and can be used to filter results by a specific portal.',
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
    'Execute a batch read operation on the webhooks journal. This endpoint allows you to retrieve a batch of webhook journal entries by providing the necessary input data. It is useful for processing multiple records in a single request, streamlining data retrieval tasks.',
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
              'An integer representing the ID of the portal where the installation occurred. This parameter is optional.',
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
    "Retrieve a batch of webhook journal entries starting from a specified offset. This endpoint is useful for paginating through large sets of webhook data. The number of entries returned is determined by the 'count' parameter.",
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
            description:
              'An integer specifying the number of journal entries to retrieve. Must be at least 1.',
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
              'A string representing the starting point for fetching the batch of journal entries.',
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
              'An integer representing the ID of the portal installation to filter the webhook journal entries.',
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
    'Retrieve the earliest webhook journal entries for the specified portal. This endpoint can be used to access the oldest records available in the webhook journal, which may be useful for auditing or historical analysis.',
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
  responses: { default: ErrorResponse },
  security: [],
})

export const getWebhooksJournalJournalLocal202609LatestRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal-local/2026-09/latest',
  tags: ['Basic'],
  summary: 'Retrieve latest',
  description:
    'Retrieve the latest entries from the webhooks journal for the specified portal. This endpoint is useful for accessing the most recent webhook events that have been logged, allowing for real-time monitoring or debugging of webhook activities.',
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
  responses: { default: ErrorResponse },
  security: [],
})

export const getWebhooksJournalJournalLocal202609OffsetOffsetNextRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal-local/2026-09/offset/{offset}/next',
  tags: ['Basic'],
  summary: 'Retrieve Next Batch',
  description:
    'Retrieve the next set of webhook journal entries starting from a specified offset. This endpoint is useful for paginating through large sets of webhook data, allowing you to continue from where a previous request left off.',
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
              'The offset from which to start retrieving the next batch of webhook journal entries. This is a string value that indicates the starting point for fetching entries.',
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
  responses: { default: ErrorResponse },
  security: [],
})

export const getWebhooksJournalJournalLocal202609StatusStatusIdRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal-local/2026-09/status/{statusId}',
  tags: ['Basic'],
  summary: 'Retrieve status',
  description:
    'Retrieve the status of a specific webhook journal entry using its unique status ID. This endpoint is useful for monitoring the progress or outcome of webhook journal entries, allowing you to check if an entry is pending, in progress, completed, failed, or expired.',
  operationId: 'get-/webhooks-journal/journal-local/2026-09/status/{statusId}',
  request: {
    params: z.object({
      statusId: z
        .uuid()
        .openapi({
          param: {
            name: 'statusId',
            in: 'path',
            description: 'The unique identifier (UUID) of the webhook journal status to retrieve.',
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
  description:
    'Retrieve the earliest batch of webhook journal entries for a specified count. This endpoint is useful for accessing historical webhook data in batches, allowing you to process or analyze older entries. The number of entries retrieved is determined by the count parameter.',
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
            description:
              'The number of earliest webhook journal entries to retrieve. Must be an integer with a minimum value of 1.',
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
  summary: 'Retrieve batch',
  description:
    'Retrieve the latest batch of webhook journal entries up to the specified count. This endpoint is useful for fetching recent webhook data for analysis or processing. The count parameter determines the maximum number of entries to return.',
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
            description:
              'The number of journal entries to retrieve. This must be an integer with a minimum value of 1.',
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
              'The ID of the portal installation. This parameter is optional and used to filter the results by a specific portal.',
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
    'Execute a batch read operation on the webhooks journal for the specified date, 2026-03. This endpoint allows you to retrieve multiple entries from the webhooks journal in a single request, which can be useful for processing large amounts of data efficiently. Ensure that the request body is provided in the required format.',
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
    'Retrieve a batch of webhook journal entries starting from a specified offset. This endpoint allows you to fetch a defined number of entries, which can be useful for processing large datasets in manageable chunks.',
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
            description:
              'The number of journal entries to retrieve. This must be an integer with a minimum value of 1.',
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
              'The offset from which to start fetching the journal entries. This is a string value.',
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
              'The ID of the portal where the webhook is installed. This is an integer value.',
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
    'Retrieve the earliest entry from the webhooks journal for the specified portal. This endpoint is useful for accessing the first recorded webhook event in the journal, which can be helpful for auditing or debugging purposes.',
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
  responses: { default: ErrorResponse },
  security: [],
})

export const getWebhooksJournalJournal202609LatestRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal/2026-09/latest',
  tags: ['Basic'],
  summary: 'Retrieve latest journal',
  description:
    'Retrieve the latest entries from the webhooks journal for the specified portal. This endpoint is useful for accessing the most recent webhook events and their statuses, allowing you to monitor and debug webhook activity effectively.',
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
  responses: { default: ErrorResponse },
  security: [],
})

export const getWebhooksJournalJournal202609OffsetOffsetNextRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal/2026-09/offset/{offset}/next',
  tags: ['Basic'],
  summary: 'Retrieve Next Entries',
  description:
    'Retrieve the next set of entries from the webhooks journal starting from a specified offset. This endpoint is useful for paginating through journal entries to process or analyze webhook events sequentially.',
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
              'The offset from which to start retrieving the next set of journal entries. This is a string value.',
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
              'The ID of the portal where the webhook is installed. This is an integer value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { default: ErrorResponse },
  security: [],
})

export const getWebhooksJournalJournal202609StatusStatusIdRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal/2026-09/status/{statusId}',
  tags: ['Basic'],
  summary: 'Retrieve status',
  description:
    'Retrieve the status of a specific webhook journal entry using its unique status ID. This endpoint provides detailed information about the status, including whether it is pending, in progress, completed, failed, or expired. It is useful for monitoring and managing the state of webhook journal entries.',
  operationId: 'get-/webhooks-journal/journal/2026-09/status/{statusId}',
  request: {
    params: z.object({
      statusId: z
        .uuid()
        .openapi({
          param: {
            name: 'statusId',
            in: 'path',
            description: 'The unique identifier (UUID) of the webhook journal status to retrieve.',
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
    'Create a batch of CRM object snapshots in HubSpot. This endpoint is used to capture the current state of specified CRM objects for later reference or analysis. It requires a JSON payload containing the details of the CRM objects to snapshot. This operation is exempt from daily and ten-secondly rate limits.',
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
  description:
    'Retrieve a list of webhook journal subscriptions. This endpoint provides access to subscription details without pagination, allowing you to view all current subscriptions in a single request. It is useful for managing and reviewing webhook subscriptions for your app.',
  operationId: 'get-/webhooks-journal/subscriptions/2026-09',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponseSubscriptionResponseMarch2027NoPagingSchema,
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
    'Create a new webhook journal subscription for the specified portal. This endpoint allows you to define the actions and object types that the subscription will monitor. It requires a request body with the subscription details.',
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
    'Create a new filter for a specific webhook subscription in the HubSpot account. This endpoint allows you to define conditions that determine when a webhook should be triggered. The filter is associated with a subscription identified by its ID, and the request must include the filter details.',
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
    description:
      'Retrieve the filters associated with a specific webhook subscription. This endpoint allows you to view the filters applied to a subscription, which can help in managing and understanding the conditions set for webhook events.',
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
  description:
    'Retrieve a specific filter associated with a webhook journal subscription. This endpoint allows you to access the details of the filter identified by the filterId, which is useful for managing and understanding the conditions applied to webhook events.',
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
  description:
    'Remove a specific filter from the webhooks journal subscriptions. This operation is useful for managing and cleaning up filters that are no longer needed. Once deleted, the filter cannot be recovered.',
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
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [],
})

export const deleteWebhooksJournalSubscriptions202609PortalsPortalIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks-journal/subscriptions/2026-09/portals/{portalId}',
  tags: ['Basic'],
  summary: 'Delete Subscription',
  description:
    'Delete a webhook journal subscription for a specific portal. This operation removes the subscription associated with the given portalId, ensuring that no further webhook events are sent for this portal. Use this endpoint to manage and clean up subscriptions that are no longer needed.',
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
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [],
})

export const getWebhooksJournalSubscriptions202609SubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/subscriptions/2026-09/{subscriptionId}',
  tags: ['Basic'],
  summary: 'Retrieve subscription',
  description:
    'Retrieve details of a specific webhook subscription using its unique identifier. This endpoint is useful for obtaining information about a particular subscription, such as its actions, object type, and associated properties.',
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
  description:
    'Delete a specific webhook journal subscription using its unique identifier. This operation is useful for managing and cleaning up subscriptions that are no longer needed in your HubSpot account.',
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
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [],
})
