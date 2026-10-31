import { createRoute, z } from '@hono/zod-openapi'

const UrlNotificationSchema = z
  .object({
    notifyTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Creation timestamp for this notification. Users should _not_ specify it, the field is ignored at the request time.',
      }),
    type: z
      .enum(['URL_NOTIFICATION_TYPE_UNSPECIFIED', 'URL_UPDATED', 'URL_DELETED'])
      .exactOptional()
      .openapi({ description: 'The URL life cycle event that Google is being notified about.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The object of this notification. The URL must be owned by the publisher of this notification and, in case of `URL_UPDATED` notifications, it _must_ be crawlable by Google.',
      }),
  })
  .openapi({
    description:
      '`UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.',
    required: [],
  })
  .openapi('UrlNotification')

const UrlNotificationMetadataSchema = z
  .object({
    latestRemove: UrlNotificationSchema.exactOptional().openapi({
      description: 'Latest notification received with type `URL_REMOVED`.',
    }),
    latestUpdate: UrlNotificationSchema.exactOptional().openapi({
      description: 'Latest notification received with type `URL_UPDATED`.',
    }),
    url: z.string().exactOptional().openapi({ description: 'URL to which this metadata refers.' }),
  })
  .openapi({
    description:
      'Summary of the most recent Indexing API notifications successfully received, for a given URL.',
    required: [],
  })
  .openapi('UrlNotificationMetadata')

const PublishUrlNotificationResponseSchema = z
  .object({
    urlNotificationMetadata: UrlNotificationMetadataSchema.exactOptional().openapi({
      description: 'Description of the notification events received for this URL.',
    }),
  })
  .openapi({ description: 'Output for PublishUrlNotification', required: [] })
  .openapi('PublishUrlNotificationResponse')

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
      scopes: { 'https://www.googleapis.com/auth/indexing': 'Submit data to Google for indexing' },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: { 'https://www.googleapis.com/auth/indexing': 'Submit data to Google for indexing' },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV3UrlNotificationsMetadataRoute = createRoute({
  method: 'get',
  path: '/v3/urlNotifications/metadata',
  tags: ['urlNotifications'],
  description:
    'Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.',
  operationId: 'indexing.urlNotifications.getMetadata',
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
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'URL that is being queried.',
            in: 'query',
            name: 'url',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UrlNotificationMetadataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/indexing'],
    },
  ],
})

export const postV3UrlNotificationsPublishRoute = createRoute({
  method: 'post',
  path: '/v3/urlNotifications:publish',
  tags: ['urlNotifications'],
  description: 'Notifies that a URL has been updated or deleted.',
  operationId: 'indexing.urlNotifications.publish',
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
    }),
    body: { content: { 'application/json': { schema: UrlNotificationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PublishUrlNotificationResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/indexing'],
    },
  ],
})
