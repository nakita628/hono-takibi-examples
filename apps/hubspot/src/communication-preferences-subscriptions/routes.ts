import { createRoute, z } from '@hono/zod-openapi'

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
      .openapi({ description: 'A string that categorizes the type of error.', example: null }),
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
          'An array of ErrorDetail objects providing further information about the error.',
        example: null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the unique identifier of the error.',
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
      .openapi({ description: 'A string indicating the status of the error.', example: null }),
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

const PublicStatusSchema = z
  .object({
    businessUnitId: z
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
        description: 'The ID of the business unit associated with the subscription.',
        example: null,
      }),
    channel: z
      .literal('EMAIL')
      .openapi({
        description:
          "The type of communication channel, with 'EMAIL' as the only supported option.",
        example: null,
      }),
    legalBasis: z
      .enum([
        'CONSENT_WITH_NOTICE',
        'LEGITIMATE_INTEREST_CLIENT',
        'LEGITIMATE_INTEREST_OTHER',
        'LEGITIMATE_INTEREST_PQL',
        'NON_GDPR',
        'PERFORMANCE_OF_CONTRACT',
        'PROCESS_AND_STORE',
      ])
      .exactOptional()
      .openapi({
        description:
          "The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.",
        example: null,
      }),
    legalBasisExplanation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An explanation for the legal basis used for communication.',
        example: null,
      }),
    setStatusSuccessReason: z
      .enum([
        'NO_STATUS_CHANGE',
        'REQUESTED_CHANGE_OCCURRED',
        'RESUBSCRIBE_OCCURRED',
        'UNSUBSCRIBE_FROM_ALL_OCCURRED',
      ])
      .exactOptional()
      .openapi({
        description:
          "The reason for the successful change in subscription status, such as 'RESUBSCRIBE_OCCURRED' or 'NO_STATUS_CHANGE'.",
        example: null,
      }),
    source: z
      .string()
      .openapi({
        description: 'The origin or method through which the subscription status was set.',
        example: null,
      }),
    status: z
      .enum(['NOT_SPECIFIED', 'SUBSCRIBED', 'UNSUBSCRIBED'])
      .openapi({
        description:
          "The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.",
        example: null,
      }),
    subscriberIdString: z
      .string()
      .openapi({ description: "The contact's email address.", example: null }),
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
        description: 'The unique identifier of the subscription.',
        example: null,
      }),
    subscriptionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the subscription.', example: null }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the subscription status was last updated.',
        example: null,
      }),
  })
  .openapi({
    required: ['channel', 'source', 'status', 'subscriberIdString', 'subscriptionId', 'timestamp'],
    example: null,
  })
  .openapi('PublicStatus')

const ActionResponseWithResultsPublicStatusSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the operation was completed.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description: 'A list of errors that occurred during the operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Contains URLs related to the response, such as documentation or resources.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors that occurred during the operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the request was made.', example: null }),
    results: z
      .array(PublicStatusSchema)
      .openapi({ description: 'An array of results from the operation.', example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the operation started.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'Indicates the current status of the operation, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('ActionResponseWithResultsPublicStatus')

const PublicWideStatusSchema = z
  .object({
    businessUnitId: z
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
        description: 'The ID of the business unit associated with the status.',
        example: null,
      }),
    channel: z
      .literal('EMAIL')
      .openapi({
        description:
          "The type of communication channel, with 'EMAIL' as the only supported option.",
        example: null,
      }),
    status: z
      .enum(['NOT_SPECIFIED', 'SUBSCRIBED', 'UNSUBSCRIBED'])
      .openapi({
        description:
          "The subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.",
        example: null,
      }),
    subscriberIdString: z
      .string()
      .openapi({ description: 'The email address of the contact.', example: null }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the status was recorded.', example: null }),
    wideStatusType: z
      .enum(['BUSINESS_UNIT_WIDE', 'PORTAL_WIDE'])
      .openapi({
        description: "The type of wide status, which can be 'PORTAL_WIDE' or 'BUSINESS_UNIT_WIDE'.",
        example: null,
      }),
  })
  .openapi({
    required: ['channel', 'status', 'subscriberIdString', 'timestamp', 'wideStatusType'],
    example: null,
  })
  .openapi('PublicWideStatus')

const ActionResponseWithResultsPublicWideStatusSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the operation was completed.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of error objects detailing any issues encountered during the operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing related links, where each key is a link name and each value is a URL.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors encountered during the operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the request was made.', example: null }),
    results: z
      .array(PublicWideStatusSchema)
      .openapi({ description: 'An array containing the results of the operation.', example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the operation started.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('ActionResponseWithResultsPublicWideStatus')

const PublicSubscriptionTranslationSchema = z
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
        description: 'The timestamp indicating when the subscription translation was created.',
        example: null,
      }),
    description: z
      .string()
      .openapi({
        description: 'A text description of the subscription translation.',
        example: null,
      }),
    languageCode: z
      .string()
      .openapi({
        description: 'The code representing the language of the subscription translation.',
        example: null,
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the subscription translation.', example: null }),
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
        description: 'The unique identifier for the subscription associated with the translation.',
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
        description: 'The timestamp indicating when the subscription translation was last updated.',
        example: null,
      }),
  })
  .openapi({
    required: ['createdAt', 'description', 'languageCode', 'name', 'subscriptionId', 'updatedAt'],
    example: null,
  })
  .openapi('PublicSubscriptionTranslation')

const SubscriptionDefinitionSchema = z
  .object({
    businessUnitId: z
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
        description: 'The ID of the business unit associated with the subscription.',
        example: null,
      }),
    communicationMethod: z
      .string()
      .exactOptional()
      .openapi({ description: 'The method of communication for the subscription.', example: null }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the subscription was created.',
        example: null,
      }),
    description: z
      .string()
      .openapi({ description: 'A description of the subscription.', example: null }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the subscription.', example: null }),
    isActive: z
      .boolean()
      .openapi({ description: 'Indicates whether the subscription is active.', example: null }),
    isDefault: z
      .boolean()
      .openapi({
        description: 'Indicates whether the subscription is the default option.',
        example: null,
      }),
    isInternal: z
      .boolean()
      .openapi({ description: 'Indicates whether the subscription is internal.', example: null }),
    name: z.string().openapi({ description: 'The name of the subscription.', example: null }),
    purpose: z
      .string()
      .exactOptional()
      .openapi({ description: 'The purpose of the subscription.', example: null }),
    subscriptionTranslations: z
      .array(PublicSubscriptionTranslationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of translations associated with the subscription.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the subscription was last updated.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'createdAt',
      'description',
      'id',
      'isActive',
      'isDefault',
      'isInternal',
      'name',
      'updatedAt',
    ],
    example: null,
  })
  .openapi('SubscriptionDefinition')

const ActionResponseWithResultsSubscriptionDefinitionSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the operation was completed.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description: 'An array of errors that occurred during the operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'A collection of related links associated with the operation.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors encountered during the operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the operation was requested.',
        example: null,
      }),
    results: z
      .array(SubscriptionDefinitionSchema)
      .openapi({ description: 'An array containing the results of the operation.', example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the operation started.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('ActionResponseWithResultsSubscriptionDefinition')

const PublicStatusRequestSchema = z
  .object({
    channel: z
      .literal('EMAIL')
      .openapi({
        description: 'The type of communication channel. Currently, only `EMAIL` is supported.',
        example: null,
      }),
    legalBasis: z
      .enum([
        'CONSENT_WITH_NOTICE',
        'LEGITIMATE_INTEREST_CLIENT',
        'LEGITIMATE_INTEREST_OTHER',
        'LEGITIMATE_INTEREST_PQL',
        'NON_GDPR',
        'PERFORMANCE_OF_CONTRACT',
        'PROCESS_AND_STORE',
      ])
      .exactOptional()
      .openapi({ description: 'The legal basis for communication.', example: null }),
    legalBasisExplanation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation for the legal basis.', example: null }),
    statusState: z
      .enum(['NOT_SPECIFIED', 'SUBSCRIBED', 'UNSUBSCRIBED'])
      .openapi({ description: "The status of the contact's subscription.", example: null }),
    subscriberIdString: z
      .string()
      .openapi({ description: "The contact's email address.", example: null }),
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
        description: 'The ID of the subscription to update.',
        example: null,
      }),
  })
  .openapi({
    required: ['channel', 'statusState', 'subscriberIdString', 'subscriptionId'],
    example: null,
  })
  .openapi('PublicStatusRequest')

const BatchInputPublicStatusRequestSchema = z
  .object({
    inputs: z
      .array(PublicStatusRequestSchema)
      .openapi({
        description:
          'An array of PublicStatusRequest objects, each representing a subscription status update request. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputPublicStatusRequest')

const BatchInputStringSchema = z
  .object({
    inputs: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'A list of strings representing the inputs for batch operations.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputString')

const PublicBulkOptOutFromAllResponseSchema = z
  .object({
    statuses: z
      .array(PublicStatusSchema)
      .exactOptional()
      .openapi({
        description: 'An array of subscription status objects for the contact.',
        example: null,
      }),
    subscriberIdString: z
      .string()
      .openapi({ description: 'The email address of the contact.', example: null }),
  })
  .openapi({ required: ['subscriberIdString'], example: null })
  .openapi('PublicBulkOptOutFromAllResponse')

const BatchResponsePublicBulkOptOutFromAllResponseSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the bulk opt-out operation was completed.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of error objects detailing any issues encountered during the bulk opt-out operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'A collection of URLs linking to related resources or documentation.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total number of errors encountered during the bulk opt-out operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the bulk opt-out request was made.',
        example: null,
      }),
    results: z
      .array(PublicBulkOptOutFromAllResponseSchema)
      .openapi({
        description:
          'An array containing the results of the bulk opt-out from all communications operation.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the bulk opt-out operation began.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The current status of the bulk opt-out operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponsePublicBulkOptOutFromAllResponse')

const BatchResponsePublicStatusSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch operation was completed.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description: 'An array of error objects detailing any issues encountered.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'URLs linking to related resources or documentation.',
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
      .openapi({ description: 'The date and time when the request was made.', example: null }),
    results: z
      .array(PublicStatusSchema)
      .openapi({
        description: 'An array containing the results of the batch operation.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch operation started.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The current status of the batch operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponsePublicStatus')

const PublicStatusBulkResponseSchema = z
  .object({
    statuses: z
      .array(PublicStatusSchema)
      .openapi({
        description: 'An array of subscription status objects for the contact.',
        example: null,
      }),
    subscriberIdString: z
      .string()
      .openapi({ description: 'The email address of the contact.', example: null }),
  })
  .openapi({ required: ['statuses', 'subscriberIdString'], example: null })
  .openapi('PublicStatusBulkResponse')

const BatchResponsePublicStatusBulkResponseSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch process was completed.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'A collection of related links associated with the batch response.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the batch request was made.',
        example: null,
      }),
    results: z
      .array(PublicStatusBulkResponseSchema)
      .openapi({
        description:
          'The array of results from the batch process, each containing subscription status information.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the batch process began.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponsePublicStatusBulkResponse')

const BatchResponsePublicStatusBulkResponseWithErrorsSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the operation was completed.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of error objects detailing any issues encountered during the operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing related links, where each key is a link name and each value is a URL.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors encountered during the operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the request was made.', example: null }),
    results: z
      .array(PublicStatusBulkResponseSchema)
      .openapi({ description: 'An array containing the results of the operation.', example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the operation started.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponsePublicStatusBulkResponseWithErrors')

const PublicWideStatusBulkResponseSchema = z
  .object({
    subscriberIdString: z
      .string()
      .openapi({ description: "The contact's email address.", example: null }),
    wideStatuses: z
      .array(PublicWideStatusSchema)
      .openapi({
        description: 'An array containing the wide status results for the operation.',
        example: null,
      }),
  })
  .openapi({ required: ['subscriberIdString', 'wideStatuses'], example: null })
  .openapi('PublicWideStatusBulkResponse')

const BatchResponsePublicWideStatusBulkResponseSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch process was completed.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'A collection of related links associated with the batch response.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the batch request was made.',
        example: null,
      }),
    results: z
      .array(PublicWideStatusBulkResponseSchema)
      .openapi({
        description:
          'The array of results from the batch process, each containing subscription status information.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the batch process began.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponsePublicWideStatusBulkResponse')

const BatchResponsePublicWideStatusBulkResponseWithErrorsSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the operation was completed.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of error objects detailing any issues encountered during the operation.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing related links, where each key is a link name and each value is a URL.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors encountered during the operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the operation was requested.',
        example: null,
      }),
    results: z
      .array(PublicWideStatusBulkResponseSchema)
      .openapi({ description: 'An array containing the results of the operation.', example: null }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the operation started.', example: null }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponsePublicWideStatusBulkResponseWithErrors')

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

const LinkGenerationRequestSchema = z
  .object({
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language in which the generated link should be presented, represented as a string.',
        example: null,
      }),
    subscriberIdString: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the subscriber. This property is required.',
        example: null,
      }),
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
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The unique identifier for the subscription, represented as an integer in int64 format.',
        example: null,
      }),
  })
  .openapi({ required: ['subscriberIdString'], example: null })
  .openapi('LinkGenerationRequest')

const LinkGenerationResponseSchema = z
  .object({
    managePreferencesUrl: z
      .string()
      .openapi({
        description: 'The URL where the subscriber can manage their communication preferences.',
        example: null,
      }),
    subscriberIdString: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier of the subscriber.',
        example: null,
      }),
    unsubscribeAllUrl: z
      .string()
      .openapi({
        description:
          'A string containing the URL for unsubscribing the subscriber from all communications.',
        example: null,
      }),
    unsubscribeSingleUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string containing the URL to unsubscribe the subscriber from a single communication.',
        example: null,
      }),
  })
  .openapi({
    required: ['managePreferencesUrl', 'subscriberIdString', 'unsubscribeAllUrl'],
    example: null,
  })
  .openapi('LinkGenerationResponse')

const PartialPublicStatusRequestSchema = z
  .object({
    channel: z
      .literal('EMAIL')
      .openapi({
        description:
          "The type of communication channel, with 'EMAIL' as the only supported option.",
        example: null,
      }),
    legalBasis: z
      .enum([
        'CONSENT_WITH_NOTICE',
        'LEGITIMATE_INTEREST_CLIENT',
        'LEGITIMATE_INTEREST_OTHER',
        'LEGITIMATE_INTEREST_PQL',
        'NON_GDPR',
        'PERFORMANCE_OF_CONTRACT',
        'PROCESS_AND_STORE',
      ])
      .exactOptional()
      .openapi({
        description:
          "The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.",
        example: null,
      }),
    legalBasisExplanation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An explanation for the legal basis used for communication.',
        example: null,
      }),
    statusState: z
      .enum(['NOT_SPECIFIED', 'SUBSCRIBED', 'UNSUBSCRIBED'])
      .openapi({
        description:
          "The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.",
        example: null,
      }),
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
        description: 'The unique identifier of the subscription to be updated.',
        example: null,
      }),
  })
  .openapi({ required: ['channel', 'statusState', 'subscriptionId'], example: null })
  .openapi('PartialPublicStatusRequest')

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
        'communication_preferences.read_write': '',
        'communication_preferences.statuses.batch.read': '',
        'communication_preferences.statuses.batch.write': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCommunicationPreferences202609DefinitionsRoute = createRoute({
  method: 'get',
  path: '/communication-preferences/2026-09/definitions',
  tags: ['Definitions'],
  summary: 'Retrieve all subscription status definitions',
  description: 'Get a list of subscription status definitions from the account.',
  operationId: 'get-/communication-preferences/2026-09/definitions',
  request: {
    query: z.object({
      businessUnitId: z
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
            name: 'businessUnitId',
            in: 'query',
            description:
              'An integer representing the unique identifier of the business unit for which to retrieve communication preferences definitions.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      includeTranslations: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeTranslations',
            in: 'query',
            description:
              'A boolean indicating whether to include translations for the subscription definitions. Defaults to false if not specified.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
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
          schema: ActionResponseWithResultsSubscriptionDefinitionSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['communication_preferences.read_write'] }],
})

export const postCommunicationPreferences202609LinksGenerateRoute = createRoute({
  method: 'post',
  path: '/communication-preferences/2026-09/links/generate',
  tags: ['Status'],
  summary: 'Generate subscription links',
  description:
    'Generate communication preference links for a subscriber. This endpoint allows you to create URLs for managing preferences and unsubscribing, tailored to a specific subscriber. It is useful for integrating communication preference management into your applications.',
  operationId:
    'post-/communication-preferences/2026-09/links/generate_/communication-preferences/v4/links/generate',
  request: {
    query: z.object({
      channel: z
        .literal('EMAIL')
        .openapi({
          param: {
            name: 'channel',
            in: 'query',
            description:
              "The communication channel for which the links are generated. Currently, only 'EMAIL' is supported.",
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null, enum: ['EMAIL'] },
          },
          example: null,
        }),
      businessUnitId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'businessUnitId',
            in: 'query',
            description:
              'The ID of the business unit for which the links are generated. It is an optional parameter and defaults to 0.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null, default: 0 },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: LinkGenerationRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: LinkGenerationResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['communication_preferences.read_write'] }],
})

export const postCommunicationPreferences202609StatusesBatchReadRoute = createRoute({
  method: 'post',
  path: '/communication-preferences/2026-09/statuses/batch/read',
  tags: ['Batch'],
  summary: 'Batch retrieve subscription statuses',
  description: 'Batch retrieve subscription statuses for a set of contacts.',
  operationId: 'post-/communication-preferences/2026-09/statuses/batch/read',
  request: {
    query: z.object({
      channel: z
        .literal('EMAIL')
        .openapi({
          param: {
            name: 'channel',
            in: 'query',
            description:
              "A required string specifying the communication channel. Currently, only 'EMAIL' is supported.",
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null, enum: ['EMAIL'] },
          },
          example: null,
        }),
      businessUnitId: z
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
            name: 'businessUnitId',
            in: 'query',
            description:
              'An optional integer representing the business unit ID. This parameter helps in filtering the results based on a specific business unit.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
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
        'application/json': { schema: BatchResponsePublicStatusBulkResponseSchema, example: null },
      },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponsePublicStatusBulkResponseWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['communication_preferences.statuses.batch.read'] }],
})

export const postCommunicationPreferences202609StatusesBatchUnsubscribeAllRoute = createRoute({
  method: 'post',
  path: '/communication-preferences/2026-09/statuses/batch/unsubscribe-all',
  tags: ['Batch'],
  summary: 'Batch unsubscribe contacts from all subscriptions',
  description: 'Unsubscribe a set of contacts from all email subscriptions.',
  operationId: 'post-/communication-preferences/2026-09/statuses/batch/unsubscribe-all',
  request: {
    query: z.object({
      channel: z
        .literal('EMAIL')
        .openapi({
          param: {
            name: 'channel',
            in: 'query',
            description:
              "The communication channel from which to unsubscribe all subscribers. This parameter is required and currently supports only 'EMAIL'.",
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null, enum: ['EMAIL'] },
          },
          example: null,
        }),
      businessUnitId: z
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
            name: 'businessUnitId',
            in: 'query',
            description:
              'The ID of the business unit for which the operation is being performed. This is an optional parameter.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      verbose: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'verbose',
            in: 'query',
            description:
              'A boolean flag indicating whether to include detailed information in the response. Defaults to false.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
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
        'application/json': {
          schema: BatchResponsePublicBulkOptOutFromAllResponseSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['communication_preferences.statuses.batch.write'] }],
})

export const postCommunicationPreferences202609StatusesBatchUnsubscribeAllReadRoute = createRoute({
  method: 'post',
  path: '/communication-preferences/2026-09/statuses/batch/unsubscribe-all/read',
  tags: ['Batch'],
  summary: 'Batch retrieve contacts who have opted out of all communications',
  description: 'Checks whether a set of contacts have opted out of all communications.',
  operationId: 'post-/communication-preferences/2026-09/statuses/batch/unsubscribe-all/read',
  request: {
    query: z.object({
      channel: z
        .literal('EMAIL')
        .openapi({
          param: {
            name: 'channel',
            in: 'query',
            description:
              "A required string specifying the communication channel. Currently, only 'EMAIL' is supported.",
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null, enum: ['EMAIL'] },
          },
          example: null,
        }),
      businessUnitId: z
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
            name: 'businessUnitId',
            in: 'query',
            description:
              'An optional integer representing the business unit ID to filter the results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
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
        'application/json': {
          schema: BatchResponsePublicWideStatusBulkResponseSchema,
          example: null,
        },
      },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponsePublicWideStatusBulkResponseWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['communication_preferences.statuses.batch.read'] }],
})

export const postCommunicationPreferences202609StatusesBatchWriteRoute = createRoute({
  method: 'post',
  path: '/communication-preferences/2026-09/statuses/batch/write',
  tags: ['Batch'],
  summary: 'Batch update subscription status',
  description: 'Update the subscription status for a set of contacts.',
  operationId: 'post-/communication-preferences/2026-09/statuses/batch/write',
  request: {
    body: {
      content: {
        'application/json': { schema: BatchInputPublicStatusRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: BatchResponsePublicStatusSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['communication_preferences.statuses.batch.write'] }],
})

export const getCommunicationPreferences202609StatusesSubscriberIdStringRoute = createRoute({
  method: 'get',
  path: '/communication-preferences/2026-09/statuses/{subscriberIdString}',
  tags: ['Status'],
  summary: 'Get subscription preferences for a specific contact',
  description: "Retrieve a contact's current email subscription preferences.",
  operationId: 'get-/communication-preferences/2026-09/statuses/{subscriberIdString}',
  request: {
    params: z.object({
      subscriberIdString: z
        .string()
        .openapi({
          param: {
            name: 'subscriberIdString',
            in: 'path',
            description:
              'The unique identifier of the subscriber whose communication preferences status is being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      channel: z
        .literal('EMAIL')
        .openapi({
          param: {
            name: 'channel',
            in: 'query',
            description:
              "The communication channel for which the subscription status is being retrieved. Must be 'EMAIL'.",
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null, enum: ['EMAIL'] },
          },
          example: null,
        }),
      businessUnitId: z
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
            name: 'businessUnitId',
            in: 'query',
            description:
              'The ID of the business unit to filter the subscription status. This is an optional parameter.',
            required: false,
            style: 'form',
            explode: true,
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
        'application/json': { schema: ActionResponseWithResultsPublicStatusSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['communication_preferences.read_write'] }],
})

export const postCommunicationPreferences202609StatusesSubscriberIdStringRoute = createRoute({
  method: 'post',
  path: '/communication-preferences/2026-09/statuses/{subscriberIdString}',
  tags: ['Status'],
  summary: "Update a contact's subscription status",
  description: 'Set the subscription status of a specific contact.',
  operationId: 'post-/communication-preferences/2026-09/statuses/{subscriberIdString}',
  request: {
    params: z.object({
      subscriberIdString: z
        .string()
        .openapi({
          param: {
            name: 'subscriberIdString',
            in: 'path',
            description:
              'The unique identifier of the subscriber whose communication preferences status is to be updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PartialPublicStatusRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ActionResponseWithResultsPublicStatusSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['communication_preferences.read_write'] }],
})

export const getCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRoute =
  createRoute({
    method: 'get',
    path: '/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all',
    tags: ['Status'],
    summary: "Retrieve a contact's unsubscribed status",
    description:
      'Check whether a contact has unsubscribed from all email subscriptions. If a contact has not opted out of all communications, the response `results` array will be empty.',
    operationId:
      'get-/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all',
    request: {
      params: z.object({
        subscriberIdString: z
          .string()
          .openapi({
            param: {
              name: 'subscriberIdString',
              in: 'path',
              description:
                'The unique identifier of the subscriber whose unsubscribe status is being retrieved.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
      }),
      query: z.object({
        channel: z
          .literal('EMAIL')
          .openapi({
            param: {
              name: 'channel',
              in: 'query',
              description:
                "The communication channel for which the unsubscribe status is being checked. Must be 'EMAIL'.",
              required: true,
              style: 'form',
              explode: true,
              schema: { type: 'string', example: null, enum: ['EMAIL'] },
            },
            example: null,
          }),
        businessUnitId: z
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
              name: 'businessUnitId',
              in: 'query',
              description: 'An optional integer representing the business unit ID.',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
        verbose: z
          .stringbool()
          .default(false)
          .exactOptional()
          .openapi({
            param: {
              name: 'verbose',
              in: 'query',
              description:
                'A boolean indicating whether to include detailed information. Defaults to false.',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'boolean', example: null, default: false },
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
            schema: ActionResponseWithResultsPublicWideStatusSchema,
            example: null,
          },
        },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['communication_preferences.read_write'] }],
  })

export const postCommunicationPreferences202609StatusesSubscriberIdStringUnsubscribeAllRoute =
  createRoute({
    method: 'post',
    path: '/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all',
    tags: ['Definitions'],
    summary: 'Unsubscribe a contact from all subscriptions',
    description: 'Unsubscribe a contact from all email subscriptions.',
    operationId:
      'post-/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all',
    request: {
      params: z.object({
        subscriberIdString: z
          .string()
          .openapi({
            param: {
              name: 'subscriberIdString',
              in: 'path',
              description: 'The unique identifier of the subscriber to unsubscribe.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
      }),
      query: z.object({
        channel: z
          .literal('EMAIL')
          .openapi({
            param: {
              name: 'channel',
              in: 'query',
              description: "The communication channel to unsubscribe from. Must be 'EMAIL'.",
              required: true,
              style: 'form',
              explode: true,
              schema: { type: 'string', example: null, enum: ['EMAIL'] },
            },
            example: null,
          }),
        businessUnitId: z
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
              name: 'businessUnitId',
              in: 'query',
              description: 'An optional integer representing the business unit ID.',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'integer', format: 'int64', example: null },
            },
            example: null,
          }),
        verbose: z
          .stringbool()
          .default(false)
          .exactOptional()
          .openapi({
            param: {
              name: 'verbose',
              in: 'query',
              description:
                'An optional boolean to include detailed information in the response. Defaults to false.',
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'boolean', example: null, default: false },
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
            schema: ActionResponseWithResultsPublicStatusSchema,
            example: null,
          },
        },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['communication_preferences.read_write'] }],
  })
