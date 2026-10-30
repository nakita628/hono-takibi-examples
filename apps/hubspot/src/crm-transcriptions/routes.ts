import { createRoute, z } from '@hono/zod-openapi'

const ObjectCoordinatesSchema = z
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
        description: 'The unique identifier for the object. It is an integer formatted as int64.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description: 'The identifier for the type of object. It is a string.',
        example: null,
      }),
    portalId: z
      .int32()
      .openapi({
        description: 'The unique identifier for the HubSpot portal. It is an integer.',
        example: null,
      }),
  })
  .openapi({ required: ['objectId', 'objectTypeId', 'portalId'], example: null })
  .openapi('ObjectCoordinates')

const CompanyCallerIdSchema = z
  .object({
    callerIdType: z
      .literal('COMPANY')
      .default('COMPANY')
      .openapi({
        description:
          "A string representing the type of caller ID. The only valid value is 'COMPANY'.",
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the name associated with the company caller ID.',
        example: null,
      }),
    objectCoordinates: ObjectCoordinatesSchema,
  })
  .openapi({
    title: 'COMPANY',
    required: ['callerIdType', 'objectCoordinates'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('CompanyCallerId')

const FormattedPhoneNumberSchema = z
  .object({
    e164Number: z
      .string()
      .openapi({
        description:
          'The phone number formatted in E.164 standard, which includes the country code and the subscriber number as a string.',
        example: null,
      }),
    extension: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional string representing the extension number associated with the phone number.',
        example: null,
      }),
    phoneNumberType: z
      .enum([
        'FIXED_LINE',
        'FIXED_LINE_OR_MOBILE',
        'MOBILE',
        'PAGER',
        'PERSONAL_NUMBER',
        'PREMIUM_RATE',
        'SHARED_COST',
        'TOLL_FREE',
        'UAN',
        'UNKNOWN',
        'VOICEMAIL',
        'VOIP',
      ])
      .openapi({
        description:
          "The type of phone number, represented as a string. Valid values include 'FIXED_LINE', 'MOBILE', 'FIXED_LINE_OR_MOBILE', 'TOLL_FREE', 'PREMIUM_RATE', 'SHARED_COST', 'VOIP', 'PERSONAL_NUMBER', 'PAGER', 'UAN', 'VOICEMAIL', and 'UNKNOWN'.",
        example: null,
      }),
  })
  .openapi({ required: ['e164Number', 'phoneNumberType'], example: null })
  .openapi('FormattedPhoneNumber')

const CompletedThirdPartyCallRequestSchema = z
  .object({
    callStartedTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the call started, in ISO 8601 format.',
        example: null,
      }),
    createEngagement: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether an engagement should be created for this call.',
        example: null,
      }),
    durationSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The duration of the call in seconds, represented as an integer.',
        example: null,
      }),
    engagementProperties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'A map of custom property names to their values, used to store additional information about the engagement.',
        example: null,
      }),
    externalCallId: z
      .string()
      .openapi({
        description: 'A unique identifier for the call provided by the external system.',
        example: null,
      }),
    finalCallStatus: z
      .enum([
        'BUSY',
        'CALLING_CRM_USER',
        'CANCELED',
        'COMPLETED',
        'CONNECTING',
        'FAILED',
        'HOLD',
        'IN_PROGRESS',
        'MISSED',
        'NO_ANSWER',
        'QUEUED',
        'RINGING',
        'UNKNOWN',
      ])
      .openapi({
        description:
          "The final status of the call. Valid values include 'QUEUED', 'RINGING', 'IN_PROGRESS', 'CANCELED', 'COMPLETED', 'BUSY', 'FAILED', 'NO_ANSWER', 'CONNECTING', 'CALLING_CRM_USER', 'MISSED', 'HOLD', and 'UNKNOWN'.",
        example: null,
      }),
    fromNumber: FormattedPhoneNumberSchema,
    potentialRecipientUserIds: z
      .array(z.int32().openapi({ example: null }))
      .openapi({
        description:
          'An array of integers representing the user IDs of potential recipients of the call.',
        example: null,
      }),
    toNumber: FormattedPhoneNumberSchema,
    userId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the user associated with the call. This is an integer.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'createEngagement',
      'engagementProperties',
      'externalCallId',
      'finalCallStatus',
      'fromNumber',
      'potentialRecipientUserIds',
      'toNumber',
    ],
    example: null,
  })
  .openapi('CompletedThirdPartyCallRequest')

const ContactCallerIdSchema = z
  .object({
    callerIdType: z
      .literal('CONTACT')
      .default('CONTACT')
      .openapi({
        description: "A string indicating the type of caller ID, which is 'CONTACT' by default.",
        example: null,
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email address of the contact, represented as a string.',
        example: null,
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The first name of the contact, represented as a string.',
        example: null,
      }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last name of the contact, represented as a string.',
        example: null,
      }),
    objectCoordinates: ObjectCoordinatesSchema,
  })
  .openapi({
    title: 'CONTACT',
    required: ['callerIdType', 'objectCoordinates'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('ContactCallerId')

const CompletedThirdPartyCallResponseSchema = z
  .object({
    callerIdMatches: z
      .array(z.xor([ContactCallerIdSchema, CompanyCallerIdSchema]).openapi({ example: null }))
      .openapi({
        description:
          'An array containing information about the caller ID matches. Each item in the array can be either a ContactCallerId or a CompanyCallerId object.',
        example: null,
      }),
  })
  .openapi({ required: ['callerIdMatches'], example: null })
  .openapi('CompletedThirdPartyCallResponse')

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

const SpeakerSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email address of the speaker, represented as a string.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'A unique identifier for the speaker, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the speaker, represented as a string.', example: null }),
  })
  .openapi({ required: ['id', 'name'], example: null })
  .openapi('Speaker')

const TranscriptCreateUtteranceSchema = z
  .object({
    endTimeMillis: z
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
        description: 'The end time of the utterance in milliseconds, represented as an integer.',
        example: null,
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The language code of the utterance, represented as a string.',
        example: null,
      }),
    speaker: SpeakerSchema,
    startTimeMillis: z
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
        description: 'The start time of the utterance in milliseconds, represented as an integer.',
        example: null,
      }),
    text: z
      .string()
      .openapi({ description: 'The content of the utterance as a string.', example: null }),
  })
  .openapi({ required: ['endTimeMillis', 'speaker', 'startTimeMillis', 'text'], example: null })
  .openapi('TranscriptCreateUtterance')

const TranscriptCreateRequestSchema = z
  .object({
    engagementId: z
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
          'The unique identifier for the engagement associated with this transcript. It is an integer in int64 format.',
        example: null,
      }),
    transcriptCreateUtterances: z
      .array(TranscriptCreateUtteranceSchema)
      .openapi({
        description:
          'An array of utterances that make up the transcript. Each utterance is represented by a TranscriptCreateUtterance object.',
        example: null,
      }),
  })
  .openapi({ required: ['engagementId', 'transcriptCreateUtterances'], example: null })
  .openapi('TranscriptCreateRequest')

const TranscriptCreateResponseSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the created transcript, represented as a string.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('TranscriptCreateResponse')

const TranscriptUtteranceSchema = z
  .object({
    endTimeMillis: z
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
          'The end time of the utterance, given as a Unix timestamp in milliseconds. It marks when the utterance ended.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'A unique identifier for the utterance, represented as a string.',
        example: null,
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language code of the utterance, represented as a string. This indicates the language in which the text was spoken.',
        example: null,
      }),
    speaker: SpeakerSchema.exactOptional(),
    startTimeMillis: z
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
          'The start time of the utterance, given as a Unix timestamp in milliseconds. It marks when the utterance began.',
        example: null,
      }),
    text: z
      .string()
      .openapi({
        description:
          'The spoken text of the utterance. It is a string representing the actual words spoken.',
        example: null,
      }),
  })
  .openapi({ required: ['endTimeMillis', 'id', 'startTimeMillis', 'text'], example: null })
  .openapi('TranscriptUtterance')

const TranscriptResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when this transcript was created, in ISO 8601 date-time format.',
        example: null,
      }),
    engagementId: z
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
          'The unique identifier for the engagement associated with this transcript. It is an integer in int64 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this transcript, represented as a string.',
        example: null,
      }),
    transcriptSource: z
      .enum(['HUBSPOT_GENERATED', 'INTEGRATOR_GENERATED'])
      .openapi({
        description:
          "Indicates the origin of the transcript, which can be either 'HUBSPOT_GENERATED' or 'INTEGRATOR_GENERATED'.",
        example: null,
      }),
    transcriptUtterances: z
      .array(TranscriptUtteranceSchema)
      .openapi({
        description:
          'An array of utterances that make up the transcript. Each utterance contains details such as text, timing, and speaker information.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when this transcript was last updated, in ISO 8601 date-time format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'createdAt',
      'engagementId',
      'id',
      'transcriptSource',
      'transcriptUtterances',
      'updatedAt',
    ],
    example: null,
  })
  .openapi('TranscriptResponse')

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
        'crm.extensions_calling_transcripts.read': '',
        'crm.extensions_calling_transcripts.write': '',
        'crm.objects.contacts.highly_sensitive.read.v2': '',
        'crm.objects.contacts.highly_sensitive.write.v2': '',
        'crm.objects.contacts.read': '',
        'crm.objects.contacts.sensitive.read.v2': '',
        'crm.objects.contacts.sensitive.write.v2': '',
        'crm.objects.contacts.write': '',
        'crm.schemas.contacts.read': '',
        'crm.schemas.contacts.write': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const postCrmExtensionsCalling202609InboundCallRoute = createRoute({
  method: 'post',
  path: '/crm/extensions/calling/2026-09/inbound-call',
  tags: ['Advanced'],
  summary: 'Handle Inbound Call',
  description:
    "This endpoint processes inbound calls by accepting a request with details about the call. It requires a JSON payload containing information such as the call's external ID, final status, and phone numbers involved. This operation is useful for integrating third-party call data into HubSpot, allowing for seamless tracking and management of inbound calls.",
  operationId:
    'post-/crm/extensions/calling/2026-09/inbound-call_/crm/v3/extensions/calling/inbound-call',
  request: {
    body: {
      content: {
        'application/json': { schema: CompletedThirdPartyCallRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CompletedThirdPartyCallResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.schemas.contacts.write'] },
  ],
})

export const postCrmExtensionsCalling202609TranscriptsRoute = createRoute({
  method: 'post',
  path: '/crm/extensions/calling/2026-09/transcripts',
  tags: ['Advanced'],
  summary: 'Create Transcript',
  description:
    'Create a new transcript for a call in your HubSpot account. This endpoint allows you to submit the details of a call transcript, including engagement ID and utterances, to be stored and managed within HubSpot. This is useful for integrating call transcription data into your CRM workflows.',
  operationId:
    'post-/crm/extensions/calling/2026-09/transcripts_/crm/extensions/calling/2026-03/transcripts',
  request: {
    body: {
      content: { 'application/json': { schema: TranscriptCreateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: TranscriptCreateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.extensions_calling_transcripts.write'] }],
})

export const getCrmExtensionsCalling202609TranscriptsTranscriptIdRoute = createRoute({
  method: 'get',
  path: '/crm/extensions/calling/2026-09/transcripts/{transcriptId}',
  tags: ['Basic'],
  summary: 'Retrieve transcript',
  description:
    'Retrieve a specific call transcript by its unique identifier. This endpoint allows you to access the details of a transcript, including its creation and update timestamps, engagement ID, source, and the transcript utterances. It is useful for reviewing and analyzing call interactions stored in your HubSpot account.',
  operationId:
    'get-/crm/extensions/calling/2026-09/transcripts/{transcriptId}_/crm/extensions/calling/2026-03/transcripts/{transcriptId}',
  request: {
    params: z.object({
      transcriptId: z
        .string()
        .openapi({
          param: {
            name: 'transcriptId',
            in: 'path',
            description: 'The unique identifier of the transcript to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: TranscriptResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.extensions_calling_transcripts.read'] }],
})

export const deleteCrmExtensionsCalling202609TranscriptsTranscriptIdRoute = createRoute({
  method: 'delete',
  path: '/crm/extensions/calling/2026-09/transcripts/{transcriptId}',
  tags: ['Basic'],
  summary: 'Delete transcript',
  description:
    'Delete a specific call transcript from your HubSpot account using its unique identifier. This operation is useful for managing and cleaning up transcript data that is no longer needed.',
  operationId:
    'delete-/crm/extensions/calling/2026-09/transcripts/{transcriptId}_/crm/extensions/calling/2026-03/transcripts/{transcriptId}',
  request: {
    params: z.object({
      transcriptId: z
        .string()
        .openapi({
          param: {
            name: 'transcriptId',
            in: 'path',
            description: 'The unique identifier of the transcript to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['crm.extensions_calling_transcripts.write'] }],
})
