import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudAdvisorynotificationsV1CsvCsvRowSchema = z
  .object({
    entries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The data entries in a CSV file row, as a string array rather than a single comma-separated string.',
      }),
  })
  .openapi({ description: 'A representation of a single data row in a CSV file.', required: [] })
  .openapi('GoogleCloudAdvisorynotificationsV1CsvCsvRow')

const GoogleCloudAdvisorynotificationsV1CsvSchema = z
  .object({
    dataRows: z
      .array(GoogleCloudAdvisorynotificationsV1CsvCsvRowSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.',
      }),
    headers: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of headers for data columns in a CSV file.' }),
  })
  .openapi({
    description:
      'A representation of a CSV file attachment, as a list of column headers and a list of data rows.',
    required: [],
  })
  .openapi('GoogleCloudAdvisorynotificationsV1Csv')

const GoogleCloudAdvisorynotificationsV1AttachmentSchema = z
  .object({
    csv: GoogleCloudAdvisorynotificationsV1CsvSchema.exactOptional().openapi({
      description: 'A CSV file attachment. Max size is 10 MB.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the attachment.' }),
  })
  .openapi({ description: 'Attachment with specific information about the issue.', required: [] })
  .openapi('GoogleCloudAdvisorynotificationsV1Attachment')

const GoogleCloudAdvisorynotificationsV1TextSchema = z
  .object({
    enText: z.string().exactOptional().openapi({ description: 'The English copy.' }),
    localizationState: z
      .enum([
        'LOCALIZATION_STATE_UNSPECIFIED',
        'LOCALIZATION_STATE_NOT_APPLICABLE',
        'LOCALIZATION_STATE_PENDING',
        'LOCALIZATION_STATE_COMPLETED',
      ])
      .exactOptional()
      .openapi({ description: 'Status of the localization.' }),
    localizedText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The requested localized copy (if applicable).' }),
  })
  .openapi({
    description: 'A text object containing the English text and its localized copies.',
    required: [],
  })
  .openapi('GoogleCloudAdvisorynotificationsV1Text')

const GoogleCloudAdvisorynotificationsV1MessageBodySchema = z
  .object({
    text: GoogleCloudAdvisorynotificationsV1TextSchema.exactOptional().openapi({
      description: 'The text content of the message body.',
    }),
  })
  .openapi({ description: 'A message body containing text.', required: [] })
  .openapi('GoogleCloudAdvisorynotificationsV1MessageBody')

const GoogleCloudAdvisorynotificationsV1MessageSchema = z
  .object({
    attachments: z
      .array(GoogleCloudAdvisorynotificationsV1AttachmentSchema)
      .exactOptional()
      .openapi({ description: 'The attachments to download.' }),
    body: GoogleCloudAdvisorynotificationsV1MessageBodySchema.exactOptional().openapi({
      description: 'The message content.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Message creation timestamp.' }),
    localizationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when Message was localized' }),
  })
  .openapi({ description: 'A message which contains notification details.', required: [] })
  .openapi('GoogleCloudAdvisorynotificationsV1Message')

const GoogleCloudAdvisorynotificationsV1SubjectSchema = z
  .object({
    text: GoogleCloudAdvisorynotificationsV1TextSchema.exactOptional().openapi({
      description: 'The text content.',
    }),
  })
  .openapi({ description: 'A subject line of a notification.', required: [] })
  .openapi('GoogleCloudAdvisorynotificationsV1Subject')

const GoogleCloudAdvisorynotificationsV1NotificationSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time the notification was created.', readOnly: true }),
    messages: z
      .array(GoogleCloudAdvisorynotificationsV1MessageSchema)
      .exactOptional()
      .openapi({ description: 'A list of messages in the notification.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the notification. Format: organizations/{organization}/locations/{location}/notifications/{notification}.',
      }),
    notificationType: z
      .enum([
        'NOTIFICATION_TYPE_UNSPECIFIED',
        'NOTIFICATION_TYPE_SECURITY_PRIVACY_ADVISORY',
        'NOTIFICATION_TYPE_SENSITIVE_ACTIONS',
      ])
      .exactOptional()
      .openapi({ description: 'Type of notification' }),
    subject: GoogleCloudAdvisorynotificationsV1SubjectSchema.exactOptional().openapi({
      description: 'The subject line of the notification.',
    }),
  })
  .openapi({
    description: 'A notification object for notifying customers about security and privacy issues.',
    required: [],
  })
  .openapi('GoogleCloudAdvisorynotificationsV1Notification')

const GoogleCloudAdvisorynotificationsV1ListNotificationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    notifications: z
      .array(GoogleCloudAdvisorynotificationsV1NotificationSchema)
      .exactOptional()
      .openapi({ description: 'List of notifications under a given parent.' }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Estimation of a total number of notifications.' }),
  })
  .openapi({ description: 'Response of ListNotifications endpoint.', required: [] })
  .openapi('GoogleCloudAdvisorynotificationsV1ListNotificationsResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['organizations'],
  description: 'Gets a notification.',
  operationId: 'advisorynotifications.organizations.locations.notifications.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. A name of the notification to retrieve. Format: organizations/{organization}/locations/{location}/notifications/{notification}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudAdvisorynotificationsV1NotificationSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentNotificationsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/notifications',
  tags: ['organizations'],
  description: 'Lists notifications under a given parent.',
  operationId: 'advisorynotifications.organizations.locations.notifications.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['NOTIFICATION_VIEW_UNSPECIFIED', 'BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies which parts of the notification resource should be returned in the response.',
            in: 'query',
            name: 'view',
            schema: { enum: ['NOTIFICATION_VIEW_UNSPECIFIED', 'BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization}/locations/{location}".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudAdvisorynotificationsV1ListNotificationsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
