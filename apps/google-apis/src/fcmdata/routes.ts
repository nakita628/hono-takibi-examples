import { createRoute, z } from '@hono/zod-openapi'

const GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercentsSchema = z
  .object({
    delayedDeviceDoze: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of accepted messages that were delayed because the device was in doze mode. Only [normal priority messages](https://firebase.google.com/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message) should be delayed due to doze mode.',
      }),
    delayedDeviceOffline: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of accepted messages that were delayed because the target device was not connected at the time of sending. These messages were eventually delivered when the device reconnected.',
      }),
    delayedMessageThrottled: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of accepted messages that were delayed due to message throttling, such as [collapsible message throttling](https://firebase.google.com/docs/cloud-messaging/concept-options#collapsible_throttling) or [maximum message rate throttling](https://firebase.google.com/docs/cloud-messaging/concept-options#device_throttling).',
      }),
    delayedUserStopped: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of accepted messages that were delayed because the intended device user-profile was [stopped](https://firebase.google.com/docs/cloud-messaging/android/receive#handling_messages) on the target device at the time of the send. The messages were eventually delivered when the user-profile was started again.',
      }),
    deliveredNoDelay: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of accepted messages that were delivered to the device without delay from the FCM system.',
      }),
  })
  .openapi({
    description:
      'Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons.',
    required: [],
  })
  .openapi('GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents')

const GoogleFirebaseFcmDataV1beta1MessageInsightPercentsSchema = z
  .object({
    priorityLowered: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of accepted messages that had their priority lowered from high to normal. See [documentation for setting message priority](https://firebase.google.com/docs/cloud-messaging/android/message-priority).',
      }),
  })
  .openapi({
    description:
      'Additional information about message delivery. All percentages are calculated with countMessagesAccepted as the denominator.',
    required: [],
  })
  .openapi('GoogleFirebaseFcmDataV1beta1MessageInsightPercents')

const GoogleFirebaseFcmDataV1beta1MessageOutcomePercentsSchema = z
  .object({
    delivered: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of all accepted messages that were successfully delivered to the device.',
      }),
    droppedAppForceStopped: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of accepted messages that were dropped because the application was force stopped on the device at the time of delivery and retries were unsuccessful.',
      }),
    droppedDeviceInactive: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of accepted messages that were dropped because the target device is inactive. FCM will drop messages if the target device is deemed inactive by our servers. If a device does reconnect, we call [OnDeletedMessages()](https://firebase.google.com/docs/cloud-messaging/android/receive#override-ondeletedmessages) in our SDK instead of delivering the messages.',
      }),
    droppedTooManyPendingMessages: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of accepted messages that were dropped due to [too many undelivered non-collapsible messages](https://firebase.google.com/docs/cloud-messaging/concept-options#collapsible_and_non-collapsible_messages). Specifically, each app instance can only have 100 pending messages stored on our servers for a device which is disconnected. When that device reconnects, those messages are delivered. When there are more than the maximum pending messages, we call [OnDeletedMessages()](https://firebase.google.com/docs/cloud-messaging/android/receive#override-ondeletedmessages) in our SDK instead of delivering the messages.',
      }),
    pending: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of messages accepted on this day that were not dropped and not delivered, due to the device being disconnected (as of the end of the America/Los_Angeles day when the message was sent to FCM). A portion of these messages will be delivered the next day when the device connects but others may be destined to devices that ultimately never reconnect.',
      }),
  })
  .openapi({
    description:
      'Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes.',
    required: [],
  })
  .openapi('GoogleFirebaseFcmDataV1beta1MessageOutcomePercents')

const GoogleFirebaseFcmDataV1beta1DataSchema = z
  .object({
    countMessagesAccepted: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Count of messages accepted by FCM intended to Android devices. The targeted device must have opted in to the collection of usage and diagnostic information.',
      }),
    deliveryPerformancePercents:
      GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercentsSchema.exactOptional().openapi({
        description:
          'Additional information about delivery performance for messages that were successfully delivered.',
      }),
    messageInsightPercents:
      GoogleFirebaseFcmDataV1beta1MessageInsightPercentsSchema.exactOptional().openapi({
        description: 'Additional general insights about message delivery.',
      }),
    messageOutcomePercents:
      GoogleFirebaseFcmDataV1beta1MessageOutcomePercentsSchema.exactOptional().openapi({
        description: 'Mutually exclusive breakdown of message delivery outcomes.',
      }),
  })
  .openapi({ description: 'Data detailing messaging delivery', required: [] })
  .openapi('GoogleFirebaseFcmDataV1beta1Data')

const GoogleTypeDateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('GoogleTypeDate')

const GoogleFirebaseFcmDataV1beta1AndroidDeliveryDataSchema = z
  .object({
    analyticsLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The analytics label associated with the messages sent. All messages sent without an analytics label will be grouped together in a single entry.',
      }),
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The app ID to which the messages were sent.' }),
    data: GoogleFirebaseFcmDataV1beta1DataSchema.exactOptional().openapi({
      description: 'The data for the specified appId, date, and analyticsLabel.',
    }),
    date: GoogleTypeDateSchema.exactOptional().openapi({
      description: 'The date represented by this entry.',
    }),
  })
  .openapi({
    description: 'Message delivery data for a given date, app, and analytics label combination.',
    required: [],
  })
  .openapi('GoogleFirebaseFcmDataV1beta1AndroidDeliveryData')

const GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponseSchema = z
  .object({
    androidDeliveryData: z
      .array(GoogleFirebaseFcmDataV1beta1AndroidDeliveryDataSchema)
      .exactOptional()
      .openapi({
        description:
          'The delivery data for the provided app. There will be one entry per combination of app, date, and analytics label.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListAndroidDeliveryData.', required: [] })
  .openapi('GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse')

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

export const getV1beta1ParentDeliveryDataRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/deliveryData',
  tags: ['projects'],
  description: 'List aggregate delivery data for the given Android application.',
  operationId: 'fcmdata.projects.androidApps.deliveryData.list',
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
              'The maximum number of entries to return. The service may return fewer than this value. If unspecified, at most 1,000 entries will be returned. The maximum value is 10,000; values above 10,000 will be capped to 10,000. This default may change over time.',
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
              'A page token, received from a previous `ListAndroidDeliveryDataRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAndroidDeliveryDataRequest` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
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
              'Required. The application for which to list delivery data. Format: `projects/{project_id}/androidApps/{app_id}`',
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
          schema: GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponseSchema,
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
