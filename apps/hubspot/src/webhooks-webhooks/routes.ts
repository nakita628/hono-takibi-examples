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
          "An array of strings specifying the actions that trigger the subscription. Valid actions include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE'.",
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
          'An array of integers representing the IDs of the objects involved in the subscription. Empty means listen to all objectIds.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'A string that identifies the type of object for which the subscription is being created or updated. For example "0-1" for contacts.',
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
        description: 'An integer representing the portal ID associated with the subscription.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings listing the properties of the objects that are relevant to the subscription. Empty means listen to all properties.',
        example: null,
      }),
    subscriptionType: z
      .literal('OBJECT')
      .default('OBJECT')
      .openapi({
        description:
          "A string indicating the type of subscription. The default and only valid value is 'OBJECT'.",
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
          "An array of strings specifying the actions that trigger the subscription. Valid actions include  'ASSOCIATION_ADDED' and 'ASSOCIATION_REMOVED'.",
        example: null,
      }),
    associatedObjectTypeIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the type identifiers of the associated objects involved in the subscription. If present, events will only fire if the TO objectTypeId in the association is included in this array.  ',
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
          'A string representing the type identifier of the object involved in the subscription. For example "0-1" for Contacts. This corresponds to the FROM side of the association. An objectTypeId of "0-1" would match a CONTACT_TO_COMPANY association change.  ',
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
          "A string indicating the type of subscription, which is 'ASSOCIATION' by default.",
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
          'A string representing the unique identifier for the event type that the subscription pertains to. This value corresponds to an internal event classification at HubSpot. \n\n4-1909196: App install event\n4-1916193: App uninstall event',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the properties of the event associated with the subscription.',
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
          "An array of strings specifying the actions that trigger the subscription. Valid actions include 'ADDED_TO_LIST', and 'REMOVED_FROM_LIST'",
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
          'An array of integers representing the IDs of the lists involved in the subscription. Empty means listen to all lists.',
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
          'An array of integers representing the IDs of the objects associated with the subscription. Empty means listen to all objectsIds.',
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
          'An integer representing the ID of the portal where the subscription is being managed.',
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
          "An array of strings specifying the actions that trigger the subscription. Valid action is 'GDPR_DELETE'. ",
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier for the type of object associated with the subscription.',
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
          'An integer representing the unique identifier for the HubSpot portal that is being listened to for changes. ',
        example: null,
      }),
    subscriptionType: z
      .literal('GDPR_PRIVACY_DELETION')
      .default('GDPR_PRIVACY_DELETION')
      .openapi({
        description:
          'A string indicating the type of subscription. GDPR_PRIVACY_DELETION is the only valid option for GdprPrivacyDeletionSubscriptionUpsertRequest. ',
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
          'An array of strings, each representing an associated object type ID relevant to the action override.',
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
          'An array of integers representing list IDs that are associated with the action override. The integers are in int64 format.',
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
          'An array of integers, each representing an object ID for which the action override is applicable. The integers are in int64 format.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of strings representing the properties to be overridden in the action. Each string corresponds to a property name.',
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
        description: 'An array of strings to be processed. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputString')

const SubscriptionBatchUpdateRequestSchema = z
  .object({
    active: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the subscription is active.',
        example: null,
      }),
    id: z
      .int32()
      .openapi({
        description: 'The unique identifier for the subscription. It is an integer.',
        example: null,
      }),
  })
  .openapi({ required: ['active', 'id'], example: null })
  .openapi('SubscriptionBatchUpdateRequest')

const BatchInputSubscriptionBatchUpdateRequestSchema = z
  .object({
    inputs: z
      .array(SubscriptionBatchUpdateRequestSchema)
      .openapi({
        description:
          'An array of SubscriptionBatchUpdateRequest objects, each representing a subscription to be updated. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputSubscriptionBatchUpdateRequest')

const JournalFetchResponseSchema = z
  .object({
    currentOffset: z
      .uuid()
      .openapi({
        description:
          'The unique identifier for the current offset of the journal entry, formatted as a UUID.',
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
          'The Pre-signed S3 URL where the journal entry can be accessed. It is a string.',
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
        description: 'A map of link names to associated URIs related to the batch operation.',
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
          'An array of results from the batch operation, each represented as a JournalFetchResponse object.',
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
          'An object containing additional context about the error condition, with each property being an array of strings.',
        example: null,
      }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects providing further information about the error.',
        example: null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that uniquely identifies the error instance.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object mapping link names to associated URIs that contain documentation about the error or recommended remediation steps.',
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
        description: 'An object providing more specific categorization of the error.',
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
        description: 'The date and time when the batch process was completed, in ISO 8601 format.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of standard errors that occurred during the batch process, providing details about each error.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs, providing additional context or actions related to the batch process.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors that occurred during the batch process.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the batch request was made, in ISO 8601 format.',
        example: null,
      }),
    results: z
      .array(JournalFetchResponseSchema)
      .openapi({
        description:
          'An array of journal fetch responses, each representing a result from the batch process.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch process started, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          "The current status of the batch process. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.",
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseJournalFetchResponseWithErrors')

const SubscriptionResponseSchema = z
  .object({
    active: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the subscription is currently active.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the subscription was created, in ISO 8601 format.',
        example: null,
      }),
    eventType: z
      .enum([
        'company.associationChange',
        'company.creation',
        'company.deletion',
        'company.merge',
        'company.propertyChange',
        'company.restore',
        'contact.associationChange',
        'contact.creation',
        'contact.deletion',
        'contact.merge',
        'contact.privacyDeletion',
        'contact.propertyChange',
        'contact.restore',
        'conversation.creation',
        'conversation.deletion',
        'conversation.newMessage',
        'conversation.privacyDeletion',
        'conversation.propertyChange',
        'deal.associationChange',
        'deal.creation',
        'deal.deletion',
        'deal.merge',
        'deal.propertyChange',
        'deal.restore',
        'event.completed',
        'line_item.associationChange',
        'line_item.creation',
        'line_item.deletion',
        'line_item.merge',
        'line_item.propertyChange',
        'line_item.restore',
        'object.associationChange',
        'object.creation',
        'object.deletion',
        'object.merge',
        'object.propertyChange',
        'object.restore',
        'product.creation',
        'product.deletion',
        'product.merge',
        'product.propertyChange',
        'product.restore',
        'ticket.associationChange',
        'ticket.creation',
        'ticket.deletion',
        'ticket.merge',
        'ticket.propertyChange',
        'ticket.restore',
      ])
      .openapi({
        description:
          'The type of event that triggers the subscription. Valid values include various property changes, creations, deletions, merges, restores, and association changes for different HubSpot objects.',
        example: null,
      }),
    eventTypeName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the event type for the subscription.', example: null }),
    id: z
      .string()
      .openapi({
        description:
          'The unique identifier for the subscription. It is an integer formatted as int64.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier for the object type associated with the subscription. It is a string.',
        example: null,
      }),
    propertyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the property associated with the subscription event, if applicable.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the subscription was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({ required: ['active', 'createdAt', 'eventType', 'id'], example: null })
  .openapi('SubscriptionResponse')

const BatchResponseSubscriptionResponseSchema = z
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
          'A map of link names to associated URIs providing additional information about the batch operation.',
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
      .array(SubscriptionResponseSchema)
      .openapi({
        description:
          'An array containing the results of the batch operation, with each item representing an individual subscription response.',
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
  .openapi('BatchResponseSubscriptionResponse')

const BatchResponseSubscriptionResponseWithErrorsSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the batch processing was completed, in ISO 8601 format.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of StandardError objects detailing any errors that occurred during the batch processing.',
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
        description: 'The total number of errors encountered during the batch operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the batch request was initially made, in ISO 8601 format.',
        example: null,
      }),
    results: z
      .array(SubscriptionResponseSchema)
      .openapi({
        description:
          'An array of SubscriptionResponse objects representing the results of each subscription update processed in the batch.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch processing began, in ISO 8601 format.',
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
  .openapi('BatchResponseSubscriptionResponseWithErrors')

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
          "A string indicating the type of filter being applied. Valid value is 'CRM_OBJECT_PROPERTY'.",
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
          "A string specifying the operation to be performed in the condition. Valid values include 'EQ', 'N_EQ', 'LT', 'GT', 'LTE', 'GTE', 'CONTAINS', 'STARTS_WITH', 'ENDS_WITH', 'IN', 'NOT_IN', 'IS_EMPTY', and 'IS_NOT_EMPTY'.",
        example: null,
      }),
    property: z
      .string()
      .openapi({
        description:
          'A string representing the specific property of the CRM object that the condition applies to.',
        example: null,
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the value to be compared against the specified property when using single-value operators.',
        example: null,
      }),
    values: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          "An array of strings used to specify multiple values for comparison when using operators that support multiple values, such as 'IN' or 'NOT_IN'.",
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
        description:
          'An integer representing the unique identifier of the CRM object for which the snapshot is requested.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'A string representing the type identifier of the CRM object, specifying what kind of object it is within HubSpot.',
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
          'An integer representing the unique identifier of the HubSpot account (portal) where the CRM object resides.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings, each representing a property of the CRM object that should be included in the snapshot.',
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
          'An integer representing the unique identifier of the CRM object for which the snapshot is taken.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'A string indicating the type of the CRM object, such as contact, company, or deal.',
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
          'An integer representing the unique identifier of the HubSpot portal associated with the CRM object.',
        example: null,
      }),
    snapshotStatusId: z
      .uuid()
      .openapi({
        description:
          'A UUID string representing the status identifier of the snapshot request, indicating the current state of the snapshot process.',
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
          'An array of CrmObjectSnapshotResponse objects, each representing the result of a snapshot operation for a specific CRM object. This property is required.',
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
          'An array of conditions that define the criteria for the filter. Each condition specifies a property, an operator, and optionally a value or values.',
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
          'The unique identifier of the subscription to which the filter will be applied. It is an integer formatted as int64.',
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
          'The unique identifier for the created filter. It is an integer formatted as int64.',
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
        description: 'The unique identifier for the filter. It is an integer in int64 format.',
        example: null,
      }),
  })
  .openapi({ required: ['createdAt', 'filter', 'id'], example: null })
  .openapi('FilterResponse')

const ThrottlingSettingsSchema = z
  .object({
    maxConcurrentRequests: z
      .int32()
      .openapi({
        description: 'The maximum number of concurrent requests allowed. This is an integer value.',
        example: null,
      }),
  })
  .openapi({ required: ['maxConcurrentRequests'], example: null })
  .openapi('ThrottlingSettings')

const SettingsChangeRequestSchema = z
  .object({
    targetUrl: z
      .string()
      .openapi({
        description: 'The URL to which webhook events will be sent. It is a string.',
        example: null,
      }),
    throttling: ThrottlingSettingsSchema,
  })
  .openapi({ required: ['targetUrl', 'throttling'], example: null })
  .openapi('SettingsChangeRequest')

const SettingsResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the webhook settings were created, in ISO 8601 format.',
        example: null,
      }),
    targetUrl: z
      .string()
      .openapi({
        description: 'The URL to which the webhook events will be sent. It is a string.',
        example: null,
      }),
    throttling: ThrottlingSettingsSchema,
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the webhook settings were last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({ required: ['createdAt', 'targetUrl', 'throttling'], example: null })
  .openapi('SettingsResponse')

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
          'The timestamp indicating when the snapshot operation was completed, represented as a Unix timestamp in milliseconds.',
        example: null,
      }),
    errorCode: z
      .enum(['INTERNAL_ERROR', 'PERMISSION_DENIED', 'TIMEOUT', 'VALIDATION_ERROR'])
      .exactOptional()
      .openapi({
        description:
          "A code representing the error that occurred, if any. Possible values are 'TIMEOUT', 'VALIDATION_ERROR', 'INTERNAL_ERROR', and 'PERMISSION_DENIED'.",
        example: null,
      }),
    id: z
      .uuid()
      .openapi({
        description: 'The unique identifier for the snapshot operation, represented as a UUID.',
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
          'The timestamp indicating when the snapshot operation was initiated, represented as a Unix timestamp in milliseconds.',
        example: null,
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A descriptive message providing additional information about the snapshot operation or error.',
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

const SubscriptionCreateRequestSchema = z
  .object({
    active: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the subscription is active.',
        example: null,
      }),
    eventType: z
      .enum([
        'company.associationChange',
        'company.creation',
        'company.deletion',
        'company.merge',
        'company.propertyChange',
        'company.restore',
        'contact.associationChange',
        'contact.creation',
        'contact.deletion',
        'contact.merge',
        'contact.privacyDeletion',
        'contact.propertyChange',
        'contact.restore',
        'conversation.creation',
        'conversation.deletion',
        'conversation.newMessage',
        'conversation.privacyDeletion',
        'conversation.propertyChange',
        'deal.associationChange',
        'deal.creation',
        'deal.deletion',
        'deal.merge',
        'deal.propertyChange',
        'deal.restore',
        'event.completed',
        'line_item.associationChange',
        'line_item.creation',
        'line_item.deletion',
        'line_item.merge',
        'line_item.propertyChange',
        'line_item.restore',
        'object.associationChange',
        'object.creation',
        'object.deletion',
        'object.merge',
        'object.propertyChange',
        'object.restore',
        'product.creation',
        'product.deletion',
        'product.merge',
        'product.propertyChange',
        'product.restore',
        'ticket.associationChange',
        'ticket.creation',
        'ticket.deletion',
        'ticket.merge',
        'ticket.propertyChange',
        'ticket.restore',
      ])
      .openapi({
        description:
          'A string representing the type of event to subscribe to. Valid values include various property changes, creations, deletions, merges, restorations, association changes, and event completions.',
        example: null,
      }),
    eventTypeName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing a human-readable name for the event type.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the ID of the object type associated with the subscription.',
        example: null,
      }),
    propertyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string indicating the specific property name related to the event type, if applicable.',
        example: null,
      }),
  })
  .openapi({ required: ['active', 'eventType'], example: null })
  .openapi('SubscriptionCreateRequest')

const SubscriptionListResponseSchema = z
  .object({
    results: z
      .array(SubscriptionResponseSchema)
      .openapi({
        description:
          "An array of subscription responses, each detailing a specific subscription's properties and status.",
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('SubscriptionListResponse')

const SubscriptionPatchRequestSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether the subscription is active. If true, the subscription is active; if false, it is inactive.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('SubscriptionPatchRequest')

const SubscriptionResponse_1Schema = z
  .object({
    actionOverrides: z
      .record(z.string(), ActionOverrideRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'An object containing action overrides, where each key is an action and the value is an ActionOverrideRequest object.',
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
          "A list of actions that trigger the subscription. Possible values include 'CREATE', 'UPDATE', 'DELETE', 'MERGE', 'RESTORE', 'ASSOCIATION_ADDED', 'ASSOCIATION_REMOVED', 'SNAPSHOT', 'APP_INSTALL', 'APP_UNINSTALL', 'ADDED_TO_LIST', 'REMOVED_FROM_LIST', and 'GDPR_DELETE'.",
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
          'The unique identifier for the app associated with the subscription. It is an integer formatted as int64.',
        example: null,
      }),
    associatedObjectTypeIds: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'A list of associated object type IDs. Each ID is a string.',
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
          'The ID of the user who created the subscription. It is an integer formatted as int64.',
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
        description:
          'The unique identifier for the subscription. It is an integer formatted as int64.',
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
          'A list of list IDs associated with the subscription. Each ID is an integer formatted as int64.',
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
          'A list of object IDs associated with the subscription. Each ID is an integer formatted as int64.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'The identifier for the object type associated with the subscription. It is a string.',
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
          'The unique identifier for the portal associated with the subscription. It is an integer formatted as int64.',
        example: null,
      }),
    properties: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A list of property names associated with the subscription. Each property is a string.',
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
          "The type of subscription, which can be one of the following: 'OBJECT', 'ASSOCIATION', 'EVENT', 'APP_LIFECYCLE_EVENT', 'LIST_MEMBERSHIP', or 'GDPR_PRIVACY_DELETION'.",
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
  .openapi('SubscriptionResponse_1')

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

export const getAppWebhooks202609AppIdSettingsRoute = createRoute({
  method: 'get',
  path: '/app-webhooks/2026-09/{appId}/settings',
  tags: ['Basic'],
  summary: 'Read webhook settings',
  description:
    'Retrieve the webhook settings for the specified app, including the webhook’s target URL, throttle configuration, and create/update date.',
  operationId: 'get-/app-webhooks/2026-09/{appId}/settings_getAll',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app whose webhook settings are being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SettingsResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const putAppWebhooks202609AppIdSettingsRoute = createRoute({
  method: 'put',
  path: '/app-webhooks/2026-09/{appId}/settings',
  tags: ['Basic'],
  summary: 'Update webhook settings',
  description: 'Update webhook settings for the specified app.',
  operationId: 'put-/app-webhooks/2026-09/{appId}/settings_configure',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app whose webhook settings are to be updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: SettingsChangeRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SettingsResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const deleteAppWebhooks202609AppIdSettingsRoute = createRoute({
  method: 'delete',
  path: '/app-webhooks/2026-09/{appId}/settings',
  tags: ['Basic'],
  summary: 'Delete webhook settings',
  description:
    'Delete the webhook settings for the specified app. Event subscriptions will not be deleted, but will be paused until another webhook is created.',
  operationId: 'delete-/app-webhooks/2026-09/{appId}/settings_clear',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app whose webhook settings are to be deleted.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ developer_hapikey: [] }],
})

export const getAppWebhooks202609AppIdSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/app-webhooks/2026-09/{appId}/subscriptions',
  tags: ['Basic'],
  summary: 'Read event subscriptions',
  description: 'Retrieve event subscriptions for the specified app.',
  operationId: 'get-/app-webhooks/2026-09/{appId}/subscriptions_getAll',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'The unique identifier of the app for which to retrieve subscriptions.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SubscriptionListResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const postAppWebhooks202609AppIdSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/app-webhooks/2026-09/{appId}/subscriptions',
  tags: ['Basic'],
  summary: 'Create an event subscription',
  description: 'Create new event subscription for the specified app.',
  operationId: 'post-/app-webhooks/2026-09/{appId}/subscriptions_create',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app for which the webhook subscription is being created.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: SubscriptionCreateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: SubscriptionResponseSchema, example: null } },
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
  security: [{ developer_hapikey: [] }],
})

export const postAppWebhooks202609AppIdSubscriptionsBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/app-webhooks/2026-09/{appId}/subscriptions/batch/update',
  tags: ['Batch'],
  summary: 'Batch create event subscriptions',
  description: 'Batch create event subscriptions for the specified app.',
  operationId: 'post-/app-webhooks/2026-09/{appId}/subscriptions/batch/update_updateBatch',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app for which the subscriptions are being updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BatchInputSubscriptionBatchUpdateRequestSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseSubscriptionResponseSchema, example: null },
      },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponseSubscriptionResponseWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const getAppWebhooks202609AppIdSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}',
  tags: ['Basic'],
  summary: 'Read an event subscription',
  description: 'Retrieve a specific event subscription by ID.',
  operationId: 'get-/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}_getById',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app for which the subscription is configured.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      subscriptionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'subscriptionId',
            in: 'path',
            description: 'The unique identifier of the subscription to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
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
  security: [{ developer_hapikey: [] }],
})

export const deleteAppWebhooks202609AppIdSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'delete',
  path: '/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}',
  tags: ['Basic'],
  summary: 'Delete event subscription',
  description: 'Delete an existing event subscription by ID.',
  operationId: 'delete-/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}_archive',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app for which the subscription is configured.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      subscriptionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'subscriptionId',
            in: 'path',
            description: 'The unique identifier of the subscription to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ developer_hapikey: [] }],
})

export const patchAppWebhooks202609AppIdSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'patch',
  path: '/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}',
  tags: ['Basic'],
  summary: 'Update an event subscription',
  description: 'Update an existing event subscription by ID.',
  operationId: 'patch-/app-webhooks/2026-09/{appId}/subscriptions/{subscriptionId}_update',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app for which the subscription is being updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      subscriptionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'subscriptionId',
            in: 'path',
            description: 'The unique identifier of the subscription to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: SubscriptionPatchRequestSchema, example: null } },
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
  security: [{ developer_hapikey: [] }],
})

export const getWebhooksJournalJournalLocal202609BatchEarliestCountRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal-local/2026-09/batch/earliest/{count}',
  tags: ['Batch'],
  summary: 'Retrieve Batch',
  description:
    'Retrieve the earliest batch of webhook journal entries based on the specified count. This endpoint is useful for fetching a specific number of the earliest entries in the webhook journal for analysis or processing.',
  operationId:
    'get-/webhooks-journal/journal-local/2026-09/batch/earliest/{count}_/webhooks-journal/journal-local/2026-03/batch/earliest/{count}',
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
              'The number of entries to retrieve in the batch. This must be an integer with a minimum value of 1.',
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

export const getWebhooksJournalJournalLocal202609BatchLatestCountRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal-local/2026-09/batch/latest/{count}',
  tags: ['Batch'],
  summary: 'Retrieve latest batch',
  description:
    'Retrieve the latest batch of webhook journal entries. This endpoint is useful for accessing the most recent data entries processed by the webhook journal. It requires specifying the number of entries to retrieve.',
  operationId:
    'get-/webhooks-journal/journal-local/2026-09/batch/latest/{count}_/webhooks-journal/journal-local/2026-03/batch/latest/{count}',
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
              'The number of latest journal entries to retrieve. Must be an integer with a minimum value of 1.',
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
              'The ID of the portal where the webhooks are installed. This is an optional parameter.',
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
    'Perform a batch read operation on the webhooks journal. This endpoint allows you to read multiple entries from the journal in a single request. It requires a JSON request body specifying the inputs to be read. The response includes the results of the batch read operation, and may return multiple statuses if there are errors.',
  operationId:
    'post-/webhooks-journal/journal-local/2026-09/batch/read_/webhooks-journal/journal-local/2026-03/batch/read',
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
              'An integer representing the ID of the portal installation. This parameter is used to specify the portal context for the request.',
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
  summary: 'Retrieve batch',
  description:
    'Retrieve a batch of webhook journal entries starting from a specified offset. This endpoint allows you to fetch a defined number of entries, facilitating the processing of webhook data in manageable chunks.',
  operationId:
    'get-/webhooks-journal/journal-local/2026-09/batch/{offset}/next/{count}_/webhooks-journal/journal-local/2026-03/batch/{offset}/next/{count}',
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
              'The number of journal entries to retrieve in the batch. This is an integer and must be at least 1.',
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
              'The starting point for fetching the next batch of journal entries. This is a string value.',
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
              'The ID of the portal where the webhooks are installed. This is an integer value.',
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
    'Retrieve the earliest entry from the webhooks journal for the specified portal. This endpoint is useful for accessing the oldest records in the journal, which can be helpful for auditing or tracking purposes.',
  operationId:
    'get-/webhooks-journal/journal-local/2026-09/earliest_/webhooks-journal/journal-local/2026-03/earliest',
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
              'The ID of the portal installation for which to retrieve the earliest journal entry. This parameter helps specify the context of the request.',
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
  summary: 'Retrieve latest journal',
  description:
    'Retrieve the latest entries from the webhooks journal for the specified portal. This endpoint is useful for accessing the most recent webhook events that have been logged, allowing you to process or analyze them as needed.',
  operationId:
    'get-/webhooks-journal/journal-local/2026-09/latest_/webhooks-journal/journal-local/2026-03/latest',
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
              'The ID of the installation portal to filter the webhook journal entries. It is an integer value.',
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
    'Retrieve the next set of webhook journal entries starting from a specified offset. This endpoint is useful for paginating through webhook journal data in a sequential manner, allowing you to fetch entries beyond a given point.',
  operationId:
    'get-/webhooks-journal/journal-local/2026-09/offset/{offset}/next_/webhooks-journal/journal-local/2026-03/offset/{offset}/next',
  request: {
    params: z.object({
      offset: z
        .string()
        .openapi({
          param: {
            name: 'offset',
            in: 'path',
            description:
              'The offset string indicating the starting point for retrieving the next batch of journal entries.',
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
              'An integer representing the ID of the portal installation for which to retrieve the journal entries.',
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
    'Retrieve the status of a specific webhook journal entry using its unique status ID. This endpoint is useful for monitoring the progress or completion of webhook processing tasks.',
  operationId:
    'get-/webhooks-journal/journal-local/2026-09/status/{statusId}_/webhooks-journal/journal-local/2026-03/status/{statusId}',
  request: {
    params: z.object({
      statusId: z
        .uuid()
        .openapi({
          param: {
            name: 'statusId',
            in: 'path',
            description:
              'The unique identifier of the status to retrieve. It is a UUID format string.',
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
  summary: 'Retrieve Batch',
  description:
    'Retrieve the earliest batch of webhook journal entries up to the specified count. This endpoint is useful for fetching historical webhook data in batches, allowing you to process or analyze the earliest entries first.',
  operationId:
    'get-/webhooks-journal/journal/2026-09/batch/earliest/{count}_/webhooks-journal/journal/2026-03/batch/earliest/{count}',
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
              'The number of webhook journal entries to retrieve. This must be an integer with a minimum value of 1.',
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

export const getWebhooksJournalJournal202609BatchLatestCountRoute = createRoute({
  method: 'get',
  path: '/webhooks-journal/journal/2026-09/batch/latest/{count}',
  tags: ['Batch'],
  summary: 'Retrieve latest batch',
  description:
    'Retrieve the latest batch of webhook journal entries. This endpoint allows you to specify the number of entries to fetch, providing a way to access recent webhook activity within your HubSpot account.',
  operationId:
    'get-/webhooks-journal/journal/2026-09/batch/latest/{count}_/webhooks-journal/journal/2026-03/batch/latest/{count}',
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
              'The number of webhook journal entries to retrieve. It is a required integer parameter with a minimum value of 1.',
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
              'The ID of the portal for which the webhook journal entries are being retrieved. It is an optional integer parameter.',
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
    'Perform a batch read operation on the webhooks journal for the specified date. This endpoint allows you to retrieve multiple entries from the webhooks journal in a single request, which can be useful for processing large amounts of data efficiently.',
  operationId:
    'post-/webhooks-journal/journal/2026-09/batch/read_/webhooks-journal/journal/2026-03/batch/read',
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
              'The ID of the portal where the webhooks are installed. This is an integer value.',
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
  summary: 'Fetch Batch Entries',
  description:
    'Retrieve a batch of webhook journal entries starting from a specified offset. This endpoint allows you to fetch a specified number of entries, making it useful for paginating through large sets of webhook journal data.',
  operationId:
    'get-/webhooks-journal/journal/2026-09/batch/{offset}/next/{count}_/webhooks-journal/journal/2026-03/batch/{offset}/next/{count}',
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
              'The number of entries to retrieve in the batch. This is an integer and must be at least 1.',
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
              'The starting point in the journal from which entries will be fetched. This is a string value.',
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
              'An optional integer parameter to specify the portal ID for which the webhook journal entries should be retrieved.',
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
  summary: 'Retrieve earliest',
  description:
    'Retrieve the earliest entry from the webhooks journal for the specified version. This endpoint is useful for accessing the oldest records available in the journal, which can be helpful for auditing or historical data analysis.',
  operationId:
    'get-/webhooks-journal/journal/2026-09/earliest_/webhooks-journal/journal/2026-03/earliest',
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
              'The ID of the installation portal for which to retrieve the earliest journal entry. This is an integer value.',
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
    'Retrieve the latest entries from the webhooks journal for the specified portal. This endpoint is useful for accessing the most recent webhook events processed by your HubSpot account. It allows you to filter the results by the portal ID to ensure you are retrieving data relevant to a specific installation.',
  operationId:
    'get-/webhooks-journal/journal/2026-09/latest_/webhooks-journal/journal/2026-03/latest',
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
              'The unique identifier of the portal installation to filter the journal entries.',
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
  summary: 'Retrieve Next Batch',
  description:
    'Retrieve the next batch of webhook journal entries starting from a specified offset. This endpoint is useful for paginating through large sets of webhook data, allowing you to continue fetching entries from where you last left off.',
  operationId:
    'get-/webhooks-journal/journal/2026-09/offset/{offset}/next_/webhooks-journal/journal/2026-03/offset/{offset}/next',
  request: {
    params: z.object({
      offset: z
        .string()
        .openapi({
          param: {
            name: 'offset',
            in: 'path',
            description:
              'The offset from which to start retrieving the next set of webhook journal entries. It is a string value.',
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
              'The ID of the portal installation for which the webhook journal entries are being retrieved. It is an integer value.',
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
    'Retrieve the status of a specific webhook journal snapshot entry using its snapshot ID. This endpoint is useful for checking the current state of a webhooks journal snapshot, such as whether it is pending, in progress, successful, failed, or expired.',
  operationId:
    'get-/webhooks-journal/journal/2026-09/status/{statusId}_/webhooks-journal/journal/2026-03/status/{statusId}',
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
    'Create a batch of CRM object snapshots for the specified portal. This endpoint allows you to capture the state of CRM objects at a specific point in time, which can be useful for auditing or historical analysis. The request requires a list of CRM object snapshot requests, each specifying the portal ID, object ID, object type ID, and properties to include in the snapshot.',
  operationId:
    'post-/webhooks-journal/snapshots/2026-09/crm_/webhooks-journal/snapshots/2026-03/crm',
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
  summary: 'Get Existing Subscriptions',
  description: 'Fetch existing subscriptions for the authenticated app',
  operationId:
    'get-/webhooks-journal/subscriptions/2026-09_/webhooks-journal/subscriptions/2026-03',
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
  summary: 'Upsert Subscription',
  description:
    'Create or update an existing subscription by specifying the fields and shapes of what events you need to listen to. Full documentation on potential subscription types can be found on the overview documentation page. ',
  operationId:
    'post-/webhooks-journal/subscriptions/2026-09_/webhooks-journal/subscriptions/2026-03',
  request: {
    body: {
      content: { 'application/json': { schema: SubscriptionUpsertRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SubscriptionResponse_1Schema, example: null } },
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
    'Create a new filter for a webhook subscription in your HubSpot account. This endpoint allows you to define specific conditions that a webhook event must meet to trigger the subscription. It is useful for managing and customizing the behavior of webhook subscriptions based on specific criteria.',
  operationId:
    'post-/webhooks-journal/subscriptions/2026-09/filters_/webhooks-journal/subscriptions/2026-03/filters',
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
    summary: 'Retrieve Filters',
    description:
      'Retrieve the filters associated with a specific webhook subscription in the HubSpot account. This endpoint is useful for obtaining detailed information about the filters applied to a given subscription, identified by its subscription ID.',
    operationId:
      'get-/webhooks-journal/subscriptions/2026-09/filters/subscription/{subscriptionId}_/webhooks-journal/subscriptions/2026-03/filters/subscription/{subscriptionId}',
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
    'Retrieve details of a specific filter associated with a webhook subscription in the HubSpot account. This endpoint is useful for accessing the configuration and conditions of a filter by its unique identifier.',
  operationId:
    'get-/webhooks-journal/subscriptions/2026-09/filters/{filterId}_/webhooks-journal/subscriptions/2026-03/filters/{filterId}',
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
    'Delete a specific filter associated with a webhook journal subscription. This operation is useful for managing and cleaning up filters that are no longer needed in your subscription setup. The endpoint requires the unique identifier of the filter to be deleted.',
  operationId:
    'delete-/webhooks-journal/subscriptions/2026-09/filters/{filterId}_/webhooks-journal/subscriptions/2026-03/filters/{filterId}',
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
            description:
              'The unique identifier of the filter to delete. It is required to specify which filter should be removed from the subscription.',
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
  summary: 'Delete subscription',
  description:
    'Delete a webhook journal subscription for a specific portal. This operation removes the subscription associated with the given portalId, and no content is returned upon successful deletion.',
  operationId:
    'delete-/webhooks-journal/subscriptions/2026-09/portals/{portalId}_/webhooks-journal/subscriptions/2026-03/portals/{portalId}',
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
              'The unique identifier of the portal for which the subscription is to be deleted.',
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
    "Retrieve details of a specific webhook subscription using its unique identifier. This endpoint is useful for obtaining information about a particular subscription's configuration and status within the HubSpot account.",
  operationId:
    'get-/webhooks-journal/subscriptions/2026-09/{subscriptionId}_/webhooks-journal/subscriptions/2026-03/{subscriptionId}',
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
              'The unique identifier of the subscription to retrieve. It is an integer value.',
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
      content: { 'application/json': { schema: SubscriptionResponse_1Schema, example: null } },
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
    'Delete a specific webhook journal subscription using its unique identifier. This operation is useful for managing and cleaning up subscriptions that are no longer needed or relevant.',
  operationId:
    'delete-/webhooks-journal/subscriptions/2026-09/{subscriptionId}_/webhooks-journal/subscriptions/2026-03/{subscriptionId}',
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
