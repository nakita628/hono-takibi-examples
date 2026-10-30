import { createRoute, z } from '@hono/zod-openapi'

const ChannelConnectionSettingsPatchRequestSchema = z
  .object({
    isReady: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the channel connection settings are ready.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL for the channel connection settings.', example: null }),
  })
  .openapi({ example: null, required: [] })
  .openapi('ChannelConnectionSettingsPatchRequest')

const ChannelConnectionSettingsRequestSchema = z
  .object({
    isReady: z
      .boolean()
      .openapi({
        description: 'Indicates whether the channel connection settings are ready.',
        example: null,
      }),
    url: z
      .string()
      .openapi({
        description: 'The URL associated with the channel connection settings.',
        example: null,
      }),
  })
  .openapi({ required: ['isReady', 'url'], example: null })
  .openapi('ChannelConnectionSettingsRequest')

const ChannelConnectionSettingsResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the channel connection settings were created.',
        example: null,
      }),
    isReady: z
      .boolean()
      .openapi({
        description: 'Indicates whether the channel connection settings are ready for use.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the channel connection settings were last updated.',
        example: null,
      }),
    url: z
      .string()
      .openapi({
        description: 'The URL associated with the channel connection settings.',
        example: null,
      }),
  })
  .openapi({ required: ['createdAt', 'isReady', 'updatedAt', 'url'], example: null })
  .openapi('ChannelConnectionSettingsResponse')

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
        description: 'The unique identifier for the object.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({ description: 'The type identifier for the object.', example: null }),
    portalId: z
      .int32()
      .openapi({ description: 'The unique identifier for the portal.', example: null }),
  })
  .openapi({ required: ['objectId', 'objectTypeId', 'portalId'], example: null })
  .openapi('ObjectCoordinates')

const CompanyCallerIdSchema = z
  .object({
    callerIdType: z
      .literal('COMPANY')
      .default('COMPANY')
      .openapi({
        description: "Specifies the type of caller ID, which is set to 'COMPANY' by default.",
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name associated with the company caller ID.', example: null }),
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
      .openapi({ description: 'The phone number formatted in E.164 standard.', example: null }),
    extension: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The extension number associated with the phone number.',
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
          'The type of phone number, with accepted values including FIXED_LINE, MOBILE, VOIP, and others.',
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
        description:
          'The timestamp indicating when the call started, formatted as a date-time string.',
        example: null,
      }),
    createEngagement: z
      .boolean()
      .openapi({
        description: 'Indicates whether an engagement should be created for the call.',
        example: null,
      }),
    durationSeconds: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The duration of the call in seconds.', example: null }),
    engagementProperties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description: 'Contains additional properties related to the engagement.',
        example: null,
      }),
    externalCallId: z
      .string()
      .openapi({
        description: 'The unique identifier for the call from an external system.',
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
          'The final status of the call, with accepted values including: BUSY, CALLING_CRM_USER, CANCELED, COMPLETED, CONNECTING, FAILED, HOLD, IN_PROGRESS, MISSED, NO_ANSWER, QUEUED, RINGING, UNKNOWN.',
        example: null,
      }),
    fromNumber: FormattedPhoneNumberSchema,
    potentialRecipientUserIds: z
      .array(z.int32().openapi({ example: null }))
      .openapi({ example: null }),
    toNumber: FormattedPhoneNumberSchema,
    userId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the user associated with the call.', example: null }),
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
        description: 'Specifies the type of caller ID, with the default value being CONTACT.',
        example: null,
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the contact.', example: null }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the contact.', example: null }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the contact.', example: null }),
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
      .openapi({ example: null }),
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

const MarkRecordingAsReadyRequestSchema = z
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
        description: 'The unique identifier for the engagement associated with the call recording.',
        example: null,
      }),
  })
  .openapi({ required: ['engagementId'], example: null })
  .openapi('MarkRecordingAsReadyRequest')

const RecordingSettingsPatchRequestSchema = z
  .object({
    urlToRetrieveAuthedRecording: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL used to access authenticated call recordings.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('RecordingSettingsPatchRequest')

const RecordingSettingsRequestSchema = z
  .object({
    urlToRetrieveAuthedRecording: z
      .string()
      .openapi({
        description: 'The URL used to access authenticated call recordings.',
        example: null,
      }),
  })
  .openapi({ required: ['urlToRetrieveAuthedRecording'], example: null })
  .openapi('RecordingSettingsRequest')

const RecordingSettingsResponseSchema = z
  .object({
    urlToRetrieveAuthedRecording: z
      .string()
      .openapi({
        description: 'The URL used to retrieve authenticated call recordings.',
        example: null,
      }),
  })
  .openapi({ required: ['urlToRetrieveAuthedRecording'], example: null })
  .openapi('RecordingSettingsResponse')

const SettingsPatchRequestSchema = z
  .object({
    height: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The height setting for the calling extension interface.',
        example: null,
      }),
    isReady: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Specifies whether the calling extension is ready for use.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the calling extension.', example: null }),
    supportsCustomObjects: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the calling extension supports custom objects.',
        example: null,
      }),
    supportsInboundCalling: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the calling extension supports inbound calling.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL associated with the calling extension settings.',
        example: null,
      }),
    usesCallingWindow: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the calling extension uses a calling window.',
        example: null,
      }),
    usesRemote: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the calling extension uses a remote connection.',
        example: null,
      }),
    width: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The width setting for the calling extension interface.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('SettingsPatchRequest')

const SettingsRequestSchema = z
  .object({
    height: z
      .int32()
      .openapi({
        description: 'Specifies the height of the calling extension interface.',
        example: null,
      }),
    isReady: z
      .boolean()
      .openapi({
        description: 'Indicates if the calling extension is ready for use.',
        example: null,
      }),
    name: z.string().openapi({ description: 'The name of the calling extension.', example: null }),
    supportsCustomObjects: z
      .boolean()
      .openapi({
        description: 'Indicates if the calling extension supports custom objects.',
        example: null,
      }),
    supportsInboundCalling: z
      .boolean()
      .openapi({
        description: 'Indicates if the calling extension supports inbound calling.',
        example: null,
      }),
    url: z
      .string()
      .openapi({ description: 'The URL associated with the calling extension.', example: null }),
    usesCallingWindow: z
      .boolean()
      .openapi({
        description: 'Indicates if the calling extension uses a separate calling window.',
        example: null,
      }),
    usesRemote: z
      .boolean()
      .openapi({
        description: 'Indicates if the calling extension uses remote services.',
        example: null,
      }),
    width: z
      .int32()
      .openapi({
        description: 'Specifies the width of the calling extension interface.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'height',
      'isReady',
      'name',
      'supportsCustomObjects',
      'supportsInboundCalling',
      'url',
      'usesCallingWindow',
      'usesRemote',
      'width',
    ],
    example: null,
  })
  .openapi('SettingsRequest')

const SettingsResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the calling extension settings were created.',
        example: null,
      }),
    height: z
      .int32()
      .openapi({ description: 'The height of the calling extension interface.', example: null }),
    isReady: z
      .boolean()
      .openapi({
        description: 'Specifies whether the calling extension settings are ready for use.',
        example: null,
      }),
    name: z.string().openapi({ description: 'The name of the calling extension.', example: null }),
    supportsCustomObjects: z
      .boolean()
      .openapi({
        description: 'Indicates if the calling extension supports custom objects.',
        example: null,
      }),
    supportsInboundCalling: z
      .boolean()
      .openapi({
        description: 'Indicates if the calling extension supports inbound calling.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the calling extension settings were last updated.',
        example: null,
      }),
    url: z
      .string()
      .openapi({ description: 'The URL associated with the calling extension.', example: null }),
    usesCallingWindow: z
      .boolean()
      .openapi({
        description: 'Specifies if the calling extension uses a dedicated calling window.',
        example: null,
      }),
    usesRemote: z
      .boolean()
      .openapi({
        description: 'Indicates if the calling extension uses a remote service.',
        example: null,
      }),
    width: z
      .int32()
      .openapi({ description: 'The width of the calling extension interface.', example: null }),
  })
  .openapi({
    required: [
      'createdAt',
      'height',
      'isReady',
      'name',
      'supportsCustomObjects',
      'supportsInboundCalling',
      'updatedAt',
      'url',
      'usesCallingWindow',
      'usesRemote',
      'width',
    ],
    example: null,
  })
  .openapi('SettingsResponse')

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
  summary: 'Submit details of an inbound call to the CRM.',
  description:
    'This endpoint allows you to submit information about an inbound call to the CRM system. The request must include details such as the external call ID, call status, and involved phone numbers. This operation helps in logging and managing inbound call data within the CRM.',
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

export const postCrmExtensionsCalling202609RecordingsReadyRoute = createRoute({
  method: 'post',
  path: '/crm/extensions/calling/2026-09/recordings/ready',
  tags: ['Advanced'],
  summary: 'Mark a call recording as ready for retrieval.',
  description:
    'This endpoint is used to mark a call recording as ready. It requires the engagementId to identify the specific recording.',
  operationId: 'post-/crm/extensions/calling/2026-09/recordings/ready_markAsReady',
  request: {
    body: {
      content: { 'application/json': { schema: MarkRecordingAsReadyRequestSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.schemas.contacts.write'] },
  ],
})

export const getCrmExtensionsCalling202609AppIdSettingsRoute = createRoute({
  method: 'get',
  path: '/crm/extensions/calling/2026-09/{appId}/settings',
  tags: ['Basic'],
  summary: 'Retrieve the calling extension settings for a specific app.',
  description: 'Retrieve the current settings of the calling extension for the specified appId. ',
  operationId: 'get-/crm/extensions/calling/2026-09/{appId}/settings_get',
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
            description: '',
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

export const postCrmExtensionsCalling202609AppIdSettingsRoute = createRoute({
  method: 'post',
  path: '/crm/extensions/calling/2026-09/{appId}/settings',
  tags: ['Basic'],
  summary: 'Create new calling extension settings for a specific app.',
  description: 'Create new settings for the calling extension associated with the specified appId.',
  operationId: 'post-/crm/extensions/calling/2026-09/{appId}/settings_create',
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
            description: '',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: SettingsRequestSchema, example: null } },
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

export const deleteCrmExtensionsCalling202609AppIdSettingsRoute = createRoute({
  method: 'delete',
  path: '/crm/extensions/calling/2026-09/{appId}/settings',
  tags: ['Basic'],
  summary: 'Delete the calling extension settings for a specific app.',
  description:
    'Remove the calling extension settings associated with the specified appId. This action cannot be undone.',
  operationId: 'delete-/crm/extensions/calling/2026-09/{appId}/settings_remove',
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
            description: '',
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

export const patchCrmExtensionsCalling202609AppIdSettingsRoute = createRoute({
  method: 'patch',
  path: '/crm/extensions/calling/2026-09/{appId}/settings',
  tags: ['Basic'],
  summary: 'Update the calling extension settings for a specific app.',
  description:
    'Modify existing calling extension settings for the specified appId. Only the fields provided in the request will be updated.',
  operationId: 'patch-/crm/extensions/calling/2026-09/{appId}/settings_update',
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
            description: '',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: SettingsPatchRequestSchema, example: null } },
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

export const getCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute = createRoute({
  method: 'get',
  path: '/crm/extensions/calling/2026-09/{appId}/settings/channel-connection',
  tags: ['Basic'],
  summary: 'Retrieve the channel connection settings for a specific app.',
  description: 'Access the current channel connection settings for the specified app.',
  operationId: 'get-/crm/extensions/calling/2026-09/{appId}/settings/channel-connection_get',
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
            description: '',
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
      content: {
        'application/json': { schema: ChannelConnectionSettingsResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const postCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute = createRoute({
  method: 'post',
  path: '/crm/extensions/calling/2026-09/{appId}/settings/channel-connection',
  tags: ['Basic'],
  summary: 'Create new channel connection settings for a specific app.',
  description: 'Establish new channel connection settings for the specified app.',
  operationId: 'post-/crm/extensions/calling/2026-09/{appId}/settings/channel-connection_create',
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
            description: '',
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
        'application/json': { schema: ChannelConnectionSettingsRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ChannelConnectionSettingsResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const deleteCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute = createRoute({
  method: 'delete',
  path: '/crm/extensions/calling/2026-09/{appId}/settings/channel-connection',
  tags: ['Basic'],
  summary: 'Remove the channel connection settings for a specific app.',
  description: 'Delete the channel connection settings associated with the specified app.',
  operationId: 'delete-/crm/extensions/calling/2026-09/{appId}/settings/channel-connection_remove',
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
            description: '',
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

export const patchCrmExtensionsCalling202609AppIdSettingsChannelConnectionRoute = createRoute({
  method: 'patch',
  path: '/crm/extensions/calling/2026-09/{appId}/settings/channel-connection',
  tags: ['Basic'],
  summary: 'Update the channel connection settings for a specific app.',
  description: 'Modify the existing channel connection settings for the specified app.',
  operationId: 'patch-/crm/extensions/calling/2026-09/{appId}/settings/channel-connection_update',
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
            description: '',
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
        'application/json': { schema: ChannelConnectionSettingsPatchRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ChannelConnectionSettingsResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const getCrmExtensionsCalling202609AppIdSettingsRecordingRoute = createRoute({
  method: 'get',
  path: '/crm/extensions/calling/2026-09/{appId}/settings/recording',
  tags: ['Basic'],
  summary: 'Retrieve recording settings for an app.',
  description:
    'Retrieve the current recording settings for a specific app using the provided app ID.',
  operationId: 'get-/crm/extensions/calling/2026-09/{appId}/settings/recording_get',
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
            description: '',
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
      content: { 'application/json': { schema: RecordingSettingsResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const postCrmExtensionsCalling202609AppIdSettingsRecordingRoute = createRoute({
  method: 'post',
  path: '/crm/extensions/calling/2026-09/{appId}/settings/recording',
  tags: ['Basic'],
  summary: 'Create recording settings for an app.',
  description: 'Create new recording settings for a specific app using the provided app ID.',
  operationId: 'post-/crm/extensions/calling/2026-09/{appId}/settings/recording_create',
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
            description: '',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: RecordingSettingsRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: RecordingSettingsResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const patchCrmExtensionsCalling202609AppIdSettingsRecordingRoute = createRoute({
  method: 'patch',
  path: '/crm/extensions/calling/2026-09/{appId}/settings/recording',
  tags: ['Basic'],
  summary: 'Update recording settings for an app.',
  description: 'Update the recording settings for a specific app using the provided app ID.',
  operationId: 'patch-/crm/extensions/calling/2026-09/{appId}/settings/recording_update',
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
            description: '',
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
        'application/json': { schema: RecordingSettingsPatchRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: RecordingSettingsResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})
