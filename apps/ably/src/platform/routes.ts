import { createRoute, z } from '@hono/zod-openapi'

const NotificationSchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title to display at the notification.' }),
    body: z
      .string()
      .exactOptional()
      .openapi({ description: 'Text below title on the expanded notification.' }),
    icon: z
      .string()
      .exactOptional()
      .openapi({ description: 'Platform-specific icon for the notification.' }),
    sound: z
      .string()
      .exactOptional()
      .openapi({ description: 'Platform-specific sound for the notification.' }),
    collapseKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Platform-specific, used to group notifications together.' }),
  })
  .openapi({ required: [] })
  .openapi('Notification')

const PushSchema = z
  .object({
    data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Arbitrary [key-value string-to-string payload](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example).',
      }),
    notification: NotificationSchema.exactOptional(),
    apns: z
      .object({ notification: NotificationSchema.exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)',
        required: [],
      }),
    fcm: z
      .object({ notification: NotificationSchema.exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)',
        required: [],
      }),
    web: z
      .object({ notification: NotificationSchema.exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('Push')

const ExtrasSchema = z
  .object({ push: PushSchema.exactOptional() })
  .openapi({
    description:
      'Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.',
    required: [],
  })
  .openapi('Extras')

const MessageSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The event name, if provided.' }),
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'The string encoded payload, with the encoding specified below.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Unique ID that can be specified by the publisher for [idempotent publishing](https://www.ably.io/documentation/rest/messages#idempotent).',
        readOnly: true,
      }),
    timestamp: z
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
          'Timestamp when the message was received by the Ably, as milliseconds since the epoch.',
        readOnly: true,
      }),
    encoding: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.',
      }),
    clientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message.',
      }),
    connectionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The connection ID of the publisher of this message.' }),
    extras: ExtrasSchema.exactOptional(),
  })
  .openapi({ description: 'Message object.', required: [] })
  .openapi('Message')

const PresenceMessageSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique ID assigned by Ably to this presence update.',
        readOnly: true,
      }),
    action: z
      .enum(['ABSENT', 'PRESENT', 'ENTER', 'LEAVE', 'UPDATE'])
      .exactOptional()
      .openapi({ description: 'The event signified by a PresenceMessage.', readOnly: true }),
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'The presence update payload, if provided.' }),
    clientId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client ID of the publisher of this presence update.' }),
    connectionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The connection ID of the publisher of this presence update.' }),
    timestamp: z
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
          'Timestamp when the presence update was received by Ably, as milliseconds since the epoch.',
        readOnly: true,
      }),
    encoding: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This will typically be empty as all presence updates received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.',
      }),
    extras: ExtrasSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PresenceMessage')

const TokenRequestSchema = z
  .object({
    keyName: z
      .string()
      .openapi({
        description:
          'Name of the key used for the TokenRequest. The keyName comprises of the app ID and key ID on an API Key.',
        example: 'xVLyHw.LMJZxw',
      }),
    capability: z
      .looseObject({})
      .openapi({
        description:
          'The [capabilities](https://www.ably.io/documentation/core-features/authentication#capabilities-explained) (i.e. a set of channel names/namespaces and, for each, a set of operations) which should be a subset of the set of capabilities associated with the key specified in keyName.',
        example: { channel1: ['publish', 'subscribe'] },
      }),
    clientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) to be assosciated with the token. Can be set to * to allow for any client ID to be used.',
      }),
    timestamp: z.int().openapi({ description: 'Time of creation of the Ably TokenRequest.' }),
    nonce: z
      .string()
      .openapi({
        description:
          'An unquoted, un-escaped random string of at least 16 characters. Used to ensure the Ably TokenRequest cannot be reused.',
      }),
  })
  .openapi({ required: ['keyName', 'capability', 'timestamp', 'nonce'] })
  .openapi('TokenRequest')

const SignedTokenRequestSchema = TokenRequestSchema.and(
  z
    .object({
      mac: z
        .string()
        .openapi({
          description:
            'A signature, generated as an HMAC of each of the above components, using the key secret value.',
        }),
    })
    .openapi({ required: ['mac'] }),
).openapi('SignedTokenRequest')

const TokenDetailsSchema = z
  .object({
    token: z.string().exactOptional().openapi({ description: 'The Ably Token.' }),
    keyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the key used to create the token' }),
    issued: z.int().exactOptional().openapi({ description: 'Timestamp of token creation.' }),
    expires: z.int().exactOptional().openapi({ description: 'Timestamp of token expiration.' }),
    capability: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Regular expression representation of the capabilities of the token.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TokenDetails')

const OccupancySchema = z
  .object({
    publishers: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of connections attached to the channel that are authorised to publish.',
      }),
    subscribers: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of connections attached that are authorised to subscribe to messages.',
      }),
    presenceSubscribers: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of connections that are authorised to subscribe to presence messages.',
      }),
    presenceConnections: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of connections that are authorised to enter members into the presence channel.',
      }),
    presenceMembers: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of members currently entered into the presence channel.',
      }),
  })
  .openapi({
    description:
      'An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity.',
    required: [],
  })
  .openapi('Occupancy')

const ChannelStatusSchema = z
  .object({
    isActive: z
      .boolean()
      .openapi({
        description:
          'A required boolean value indicating whether the channel that is the subject of the event is active. For events indicating regional activity of a channel this indicates activity in that region, not global activity.',
      }),
    occupancy: OccupancySchema.exactOptional(),
  })
  .openapi({ description: 'A ChannelStatus instance.', required: ['isActive'] })
  .openapi('ChannelStatus')

const ChannelDetailsSchema = z
  .object({
    channelId: z
      .string()
      .openapi({
        description: 'The required name of the channel including any qualifier, if any.',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'In events relating to the activity of a channel in a specific region, this optionally identifies the region.',
      }),
    isGlobalMaster: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'In events relating to the activity of a channel in a specific region, this optionally identifies whether or not that region is responsible for global coordination of the channel.',
      }),
    status: ChannelStatusSchema.exactOptional(),
  })
  .openapi({ required: ['channelId'] })
  .openapi('ChannelDetails')

const RecipientSchema = z
  .object({
    transportType: z
      .enum(['apns', 'fcm', 'gcm', 'web'])
      .exactOptional()
      .openapi({ description: 'Defines which push platform is being used.' }),
    deviceToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'when using APNs, specifies the required device token.' }),
    registrationToken: z
      .object({
        auth: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'An Elliptic curve Diffie-Hellman public key on the P-256 curve. Obtained from a PushDescription using the `getKey` method.',
          }),
        p256dh: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'An authentication secret, as described by [Message Encryption for Web Push](https://datatracker.ietf.org/doc/html/draft-ietf-webpush-encryption-08).',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'when using GCM or FCM, specifies the required registration token.',
        required: [],
      }),
    encryptionKey: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'when using web push, specifies the required encryptionKey.' }),
    clientId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client ID of recipient', writeOnly: true }),
    deviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client ID of recipient', writeOnly: true }),
  })
  .openapi({ description: 'Push recipient details for a device.', required: [] })
  .openapi('Recipient')

const DeviceDetailsSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the device generated by the device itself.' }),
    clientId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional trusted client identifier for the device.' }),
    formFactor: z
      .enum(['phone', 'tablet', 'desktop', 'tv', 'watch', 'car', 'embedded'])
      .exactOptional()
      .openapi({ description: 'Form factor of the push device.' }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.',
      }),
    platform: z
      .enum(['ios', 'android', 'browser'])
      .exactOptional()
      .openapi({ description: 'Platform of the push device.' }),
    deviceSecret: z
      .string()
      .exactOptional()
      .openapi({ description: 'Secret value for the device.' }),
    'push.recipient': RecipientSchema.exactOptional(),
    'push.state': z
      .enum(['Active', 'Failing', 'Failed'])
      .exactOptional()
      .openapi({ description: 'the current state of the push device.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('DeviceDetails')

const ErrorSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: "Message explaining the error's cause." }),
    code: z.int().exactOptional().openapi({ description: 'Error code.' }),
    statusCode: z.int().exactOptional().openapi({ description: 'Status error code.' }),
    href: z.string().exactOptional().openapi({ description: 'Link to help with error.' }),
    serverId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server ID with which error was encountered.' }),
  })
  .openapi({ description: 'Returned error from failed REST.', required: [] })
  .openapi('Error')

const ErrorCodeHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({ description: 'The error code.', param: { required: false } })

const ErrorMessageHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({ description: 'The error message.', param: { required: false } })

const ServerIdHeaderSchema = z
  .string()
  .openapi({ description: 'The ID for the server communicated with.' })

const ErrorResponse = {
  description: 'Error',
  content: {
    'application/json': { schema: ErrorSchema },
    'application/x-msgpack': { schema: ErrorSchema },
    'text/html': { schema: ErrorSchema },
  },
  headers: z.object({
    'x-ably-errorcode': ErrorCodeHeaderSchema,
    'x-ably-errormessage': ErrorMessageHeaderSchema,
    'x-ably-serverid': ServerIdHeaderSchema,
  }),
}

const FilterStartParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { name: 'start', in: 'query', schema: { type: 'string' }, required: false } })

const FilterLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      schema: { type: 'integer', default: '100' },
      required: false,
    },
  })

const FilterEndParamsSchema = z
  .string()
  .default('now')
  .exactOptional()
  .openapi({
    param: {
      name: 'end',
      in: 'query',
      schema: { type: 'string', default: 'now' },
      required: false,
    },
  })

const FilterDirectionParamsSchema = z
  .enum(['forwards', 'backwards'])
  .default('backwards')
  .exactOptional()
  .openapi({
    param: {
      name: 'direction',
      in: 'query',
      schema: { type: 'string', default: 'backwards', enum: ['forwards', 'backwards'] },
      required: false,
    },
  })

const ChannelIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'channel_id',
      in: 'path',
      schema: { type: 'string' },
      required: true,
      description: "The [Channel's ID](https://www.ably.io/documentation/rest/channels).",
    },
  })

const KeyNameParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'keyName',
      in: 'path',
      schema: { type: 'string' },
      required: true,
      description:
        'The [key name](https://www.ably.io/documentation/rest-api/token-request-spec#api-key-format) comprises of the app ID and key ID of an API key.',
    },
  })

const DeviceIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'device_id',
      in: 'path',
      schema: { type: 'string' },
      required: true,
      description: "Device's ID.",
    },
  })

const VersionHeaderParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'X-Ably-Version',
      schema: { type: 'string' },
      description: 'The version of the API you wish to use.',
      required: false,
    },
  })

const ResponseFormatParamsSchema = z
  .enum(['json', 'jsonp', 'msgpack', 'html'])
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'format',
      schema: { type: 'string', enum: ['json', 'jsonp', 'msgpack', 'html'] },
      description: 'The response format you would like',
      required: false,
    },
  })

const LinkHeaderSchema = z
  .string()
  .regex(/(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+/)
  .openapi({
    description:
      'Links to related resources, in the format defined by [RFC 5988](https://tools.ietf.org/html/rfc5988#section-5). This will potentially include a link with relation type `next`, `first`, and `current`, where appropiate.',
  })

const BasicAuthSecurityScheme = {
  type: 'http',
  scheme: 'basic',
  description:
    'Basic Authentication using an [API key](https://www.ably.io/documentation/core-features/authentication#basic-authentication).',
}

const BearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'Token Authentication using an [Ably Token](https://www.ably.io/documentation/core-features/authentication#basic-authentication), or optionally an [Ably JWT](https://www.ably.io/documentation/core-features/authentication#ably-jwt-process).',
}

export const getChannelsChannelIdMessagesRoute = createRoute({
  method: 'get',
  path: '/channels/{channel_id}/messages',
  tags: ['History'],
  summary: 'Get message history for a channel',
  description: 'Get message history for a channel',
  operationId: 'getMessagesByChannel',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({
      format: ResponseFormatParamsSchema,
      start: FilterStartParamsSchema,
      limit: FilterLimitParamsSchema,
      end: FilterEndParamsSchema,
      direction: FilterDirectionParamsSchema,
    }),
    params: z.object({ channel_id: ChannelIdParamsSchema }),
  },
  responses: {
    '2XX': {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(MessageSchema) },
        'application/x-msgpack': { schema: z.array(MessageSchema) },
        'text/html': { schema: z.string() },
      },
      headers: z.object({ link: LinkHeaderSchema, 'x-ably-serverid': ServerIdHeaderSchema }),
    },
    default: {
      description: 'Error',
      headers: z.object({
        'x-ably-errorcode': ErrorCodeHeaderSchema,
        'x-ably-errormessage': ErrorMessageHeaderSchema,
        'x-ably-serverid': ServerIdHeaderSchema,
      }),
    },
  },
})

export const postChannelsChannelIdMessagesRoute = createRoute({
  method: 'post',
  path: '/channels/{channel_id}/messages',
  tags: ['Publishing'],
  summary: 'Publish a message to a channel',
  description: 'Publish a message to the specified channel',
  operationId: 'publishMessagesToChannel',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({ format: ResponseFormatParamsSchema }),
    params: z.object({ channel_id: ChannelIdParamsSchema }),
    body: {
      content: {
        'application/json': { schema: MessageSchema },
        'application/x-msgpack': { schema: MessageSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The event name, if provided.' }),
              data: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The string encoded payload, with the encoding specified below.',
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A Unique ID that can be specified by the publisher for [idempotent publishing](https://www.ably.io/documentation/rest/messages#idempotent).',
                  readOnly: true,
                }),
              timestamp: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Timestamp when the message was received by the Ably, as milliseconds since the epoch.',
                  readOnly: true,
                }),
              encoding: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.',
                }),
              clientId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message.',
                }),
              connectionId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The connection ID of the publisher of this message.' }),
              extras: ExtrasSchema.exactOptional(),
            })
            .openapi({ description: 'Message object.', required: [] }),
        },
      },
    },
  },
  responses: {
    '2XX': {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ channel: z.string().exactOptional(), messageId: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
        'application/x-msgpack': {
          schema: z
            .object({ channel: z.string().exactOptional(), messageId: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
        'text/html': {
          schema: z
            .object({ channel: z.string().exactOptional(), messageId: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({ 'x-ably-serverid': ServerIdHeaderSchema }),
    },
    default: ErrorResponse,
  },
})

export const getChannelsChannelIdPresenceRoute = createRoute({
  method: 'get',
  path: '/channels/{channel_id}/presence',
  tags: ['Status'],
  summary: 'Get presence of a channel',
  description: 'Get presence on a channel',
  operationId: 'getPresenceOfChannel',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({
      format: ResponseFormatParamsSchema,
      clientId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'clientId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      connectionId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'connectionId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            schema: { type: 'integer', default: 100 },
            required: false,
          },
        }),
    }),
    params: z.object({ channel_id: ChannelIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(PresenceMessageSchema) },
        'application/x-msgpack': { schema: z.array(PresenceMessageSchema) },
        'text/html': { schema: z.string() },
      },
      headers: z.object({ link: LinkHeaderSchema, 'x-ably-serverid': ServerIdHeaderSchema }),
    },
    default: ErrorResponse,
  },
})

export const getChannelsChannelIdPresenceHistoryRoute = createRoute({
  method: 'get',
  path: '/channels/{channel_id}/presence/history',
  tags: ['History'],
  summary: 'Get presence history of a channel',
  description: 'Get presence on a channel',
  operationId: 'getPresenceHistoryOfChannel',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({
      format: ResponseFormatParamsSchema,
      start: FilterStartParamsSchema,
      limit: FilterLimitParamsSchema,
      end: FilterEndParamsSchema,
      direction: FilterDirectionParamsSchema,
    }),
    params: z.object({ channel_id: ChannelIdParamsSchema }),
  },
  responses: {
    '2XX': {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(PresenceMessageSchema) },
        'application/x-msgpack': { schema: z.array(PresenceMessageSchema) },
        'text/html': { schema: z.string() },
      },
      headers: z.object({ link: LinkHeaderSchema }),
    },
    default: ErrorResponse,
  },
})

export const getChannelsChannelIdRoute = createRoute({
  method: 'get',
  path: '/channels/{channel_id}',
  tags: ['Status'],
  summary: 'Get metadata of a channel',
  description: 'Get metadata of a channel',
  operationId: 'getMetadataOfChannel',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({ format: ResponseFormatParamsSchema }),
    params: z.object({ channel_id: ChannelIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ChannelDetailsSchema } },
      headers: z.object({ 'x-ably-serverid': ServerIdHeaderSchema }),
    },
    default: ErrorResponse,
  },
})

export const getChannelsRoute = createRoute({
  method: 'get',
  path: '/channels',
  tags: ['Status'],
  summary: 'Enumerate all active channels of the application',
  description: 'Enumerate all active channels of the application',
  operationId: 'getMetadataOfAllChannels',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({
      format: ResponseFormatParamsSchema,
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', default: 100 },
            required: false,
          },
        }),
      prefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'prefix',
            schema: { type: 'string' },
            description:
              'Optionally limits the query to only those channels whose name starts with the given prefix',
            required: false,
          },
        }),
      by: z
        .enum(['value', 'id'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'by',
            schema: { type: 'string', enum: ['value', 'id'] },
            description:
              'optionally specifies whether to return just channel names (by=id) or ChannelDetails (by=value)',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'OK',
      content: {
        'application/json': { schema: z.xor([z.array(ChannelDetailsSchema), z.array(z.string())]) },
        'application/x-msgpack': {
          schema: z.xor([z.array(ChannelDetailsSchema), z.array(z.string())]),
        },
        'text/html': { schema: z.string() },
      },
      headers: z.object({ link: LinkHeaderSchema }),
    },
    default: ErrorResponse,
  },
})

export const getPushDeviceRegistrationsRoute = createRoute({
  method: 'get',
  path: '/push/deviceRegistrations',
  tags: ['Push'],
  summary: 'List devices registered for receiving push notifications',
  description: 'List of device details of devices registed for push notifications.',
  operationId: 'getRegisteredPushDevices',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({
      format: ResponseFormatParamsSchema,
      deviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'deviceId',
            description: 'Optional filter to restrict to devices associated with that deviceId.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      clientId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clientId',
            in: 'query',
            description: 'Optional filter to restrict to devices associated with that clientId.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of records to return.',
            schema: { type: 'integer', default: 100, maximum: 1000 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'OK',
      content: {
        'application/json': { schema: DeviceDetailsSchema },
        'application/x-msgpack': { schema: DeviceDetailsSchema },
        'text/html': { schema: DeviceDetailsSchema },
      },
    },
    default: ErrorResponse,
  },
})

export const postPushDeviceRegistrationsRoute = createRoute({
  method: 'post',
  path: '/push/deviceRegistrations',
  tags: ['Push'],
  summary: 'Register a device for receiving push notifications',
  description:
    'Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.',
  operationId: 'registerPushDevice',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({ format: ResponseFormatParamsSchema }),
    body: {
      content: {
        'application/json': { schema: DeviceDetailsSchema },
        'application/x-msgpack': { schema: DeviceDetailsSchema },
      },
    },
  },
  responses: {
    '2XX': {
      description: 'OK',
      content: {
        'application/json': { schema: DeviceDetailsSchema },
        'application/x-msgpack': { schema: DeviceDetailsSchema },
        'text/html': { schema: DeviceDetailsSchema },
      },
    },
    default: ErrorResponse,
  },
})

export const deletePushDeviceRegistrationsRoute = createRoute({
  method: 'delete',
  path: '/push/deviceRegistrations',
  tags: ['Push'],
  summary: 'Unregister matching devices for push notifications',
  description:
    'Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.',
  operationId: 'unregisterAllPushDevices',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({
      format: ResponseFormatParamsSchema,
      deviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'deviceId',
            description:
              'Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      clientId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clientId',
            in: 'query',
            description:
              'Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'OK' }, default: ErrorResponse },
})

export const getPushDeviceRegistrationsDeviceIdRoute = createRoute({
  method: 'get',
  path: '/push/deviceRegistrations/{device_id}',
  tags: ['Push'],
  summary: 'Get a device registration',
  description: 'Get the full details of a device.',
  operationId: 'getPushDeviceDetails',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({ format: ResponseFormatParamsSchema }),
    params: z.object({ device_id: DeviceIdParamsSchema }),
  },
  responses: {
    '2XX': {
      description: 'OK',
      content: {
        'application/json': { schema: DeviceDetailsSchema },
        'application/x-msgpack': { schema: DeviceDetailsSchema },
        'text/html': { schema: DeviceDetailsSchema },
      },
    },
    default: ErrorResponse,
  },
})

export const putPushDeviceRegistrationsDeviceIdRoute = createRoute({
  method: 'put',
  path: '/push/deviceRegistrations/{device_id}',
  tags: ['Push'],
  summary: 'Update a device registration',
  description:
    'Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.',
  operationId: 'putPushDeviceDetails',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({ format: ResponseFormatParamsSchema }),
    params: z.object({ device_id: DeviceIdParamsSchema }),
    body: {
      content: {
        'application/json': { schema: DeviceDetailsSchema },
        'application/x-msgpack': { schema: DeviceDetailsSchema },
        'application/x-www-form-urlencoded': { schema: DeviceDetailsSchema },
      },
    },
  },
  responses: {
    '2XX': {
      description: 'OK',
      content: {
        'application/json': { schema: DeviceDetailsSchema },
        'application/x-msgpack': { schema: DeviceDetailsSchema },
        'text/html': { schema: DeviceDetailsSchema },
      },
    },
    default: ErrorResponse,
  },
})

export const deletePushDeviceRegistrationsDeviceIdRoute = createRoute({
  method: 'delete',
  path: '/push/deviceRegistrations/{device_id}',
  tags: ['Push'],
  summary: 'Unregister a single device for push notifications',
  description:
    'Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.',
  operationId: 'unregisterPushDevice',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({ format: ResponseFormatParamsSchema }),
    params: z.object({ device_id: DeviceIdParamsSchema }),
  },
  responses: { '2XX': { description: 'OK' }, default: ErrorResponse },
})

export const patchPushDeviceRegistrationsDeviceIdRoute = createRoute({
  method: 'patch',
  path: '/push/deviceRegistrations/{device_id}',
  tags: ['Push'],
  summary: 'Update a device registration',
  description:
    'Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.',
  operationId: 'patchPushDeviceDetails',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({ format: ResponseFormatParamsSchema }),
    params: z.object({ device_id: DeviceIdParamsSchema }),
    body: {
      content: {
        'application/json': { schema: DeviceDetailsSchema },
        'application/x-msgpack': { schema: DeviceDetailsSchema },
        'application/x-www-form-urlencoded': { schema: DeviceDetailsSchema },
      },
    },
  },
  responses: {
    '2XX': {
      description: 'OK',
      content: {
        'application/json': { schema: DeviceDetailsSchema },
        'application/x-msgpack': { schema: DeviceDetailsSchema },
        'text/html': { schema: DeviceDetailsSchema },
      },
    },
    default: ErrorResponse,
  },
})

export const getPushDeviceRegistrationsDeviceIdResetUpdateTokenRoute = createRoute({
  method: 'get',
  path: '/push/deviceRegistrations/{device_id}/resetUpdateToken',
  tags: ['Push'],
  summary: "Reset a registered device's update token",
  description: 'Gets an updated device details object.',
  operationId: 'updatePushDeviceDetails',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({ format: ResponseFormatParamsSchema }),
    params: z.object({ device_id: DeviceIdParamsSchema }),
  },
  responses: {
    '2XX': {
      description: 'OK',
      content: {
        'application/json': { schema: DeviceDetailsSchema },
        'application/x-msgpack': { schema: DeviceDetailsSchema },
        'text/html': { schema: DeviceDetailsSchema },
      },
    },
    default: ErrorResponse,
  },
})

export const getPushChannelSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/push/channelSubscriptions',
  tags: ['Push'],
  summary: 'List channel subscriptions',
  description: 'Get a list of push notification subscriptions to channels.',
  operationId: 'getPushSubscriptionsOnChannels',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({
      format: ResponseFormatParamsSchema,
      channel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'channel',
            in: 'query',
            description: 'Filter to restrict to subscriptions associated with that channel.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      deviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'deviceId',
            description:
              'Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      clientId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clientId',
            in: 'query',
            description:
              'Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of records to return.',
            schema: { type: 'integer', default: 100, maximum: 1000 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': { description: 'OK', content: { 'application/json': { schema: DeviceDetailsSchema } } },
    default: ErrorResponse,
  },
})

export const postPushChannelSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/push/channelSubscriptions',
  tags: ['Push'],
  summary: 'Subscribe a device to a channel',
  description:
    'Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.',
  operationId: 'subscribePushDeviceToChannel',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({ format: ResponseFormatParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                channel: z.string().exactOptional().openapi({ description: 'Channel name.' }),
                deviceId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Must be set when clientId is empty, cannot be used with clientId.',
                  }),
              })
              .openapi({ required: [] }),
            z
              .object({
                channel: z.string().exactOptional().openapi({ description: 'Channel name.' }),
                clientId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Must be set when deviceId is empty, cannot be used with deviceId.',
                  }),
              })
              .openapi({ required: [] }),
          ]),
          example: { channel: 'my:channel', clientId: 'myClientId' },
        },
        'application/x-msgpack': {
          schema: z.xor([
            z
              .object({
                channel: z.string().exactOptional().openapi({ description: 'Channel name.' }),
                deviceId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Must be set when clientId is empty, cannot be used with clientId.',
                  }),
              })
              .openapi({ required: [] }),
            z
              .object({
                channel: z.string().exactOptional().openapi({ description: 'Channel name.' }),
                clientId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Must be set when deviceId is empty, cannot be used with deviceId.',
                  }),
              })
              .openapi({ required: [] }),
          ]),
          example: { channel: 'my:channel', clientId: 'myClientId' },
        },
        'application/x-www-form-urlencoded': {
          schema: z.xor([
            z
              .object({
                channel: z.string().exactOptional().openapi({ description: 'Channel name.' }),
                deviceId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Must be set when clientId is empty, cannot be used with clientId.',
                  }),
              })
              .openapi({ required: [] }),
            z
              .object({
                channel: z.string().exactOptional().openapi({ description: 'Channel name.' }),
                clientId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Must be set when deviceId is empty, cannot be used with deviceId.',
                  }),
              })
              .openapi({ required: [] }),
          ]),
          example: { channel: 'my:channel', clientId: 'myClientId' },
        },
      },
    },
  },
  responses: { '2XX': { description: 'OK' }, default: ErrorResponse },
})

export const deletePushChannelSubscriptionsRoute = createRoute({
  method: 'delete',
  path: '/push/channelSubscriptions',
  tags: ['Push'],
  summary: "Delete a registered device's update token",
  description: 'Delete a device details object.',
  operationId: 'deletePushDeviceDetails',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({
      format: ResponseFormatParamsSchema,
      channel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'channel',
            in: 'query',
            description: 'Filter to restrict to subscriptions associated with that channel.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      deviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'deviceId',
            description: 'Must be set when clientId is empty, cannot be used with clientId.',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      clientId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clientId',
            in: 'query',
            description: 'Must be set when deviceId is empty, cannot be used with deviceId.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'OK' }, default: ErrorResponse },
})

export const getPushChannelsRoute = createRoute({
  method: 'get',
  path: '/push/channels',
  tags: ['Push'],
  summary: 'List all channels with at least one subscribed device',
  description: 'Returns a paginated response of channel names.',
  operationId: 'getChannelsWithPushSubscribers',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({ format: ResponseFormatParamsSchema }),
  },
  responses: {
    '2XX': {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/x-msgpack': { schema: z.array(z.string()) },
        'text/html': { schema: z.array(z.string()) },
      },
    },
    default: ErrorResponse,
  },
})

export const postPushPublishRoute = createRoute({
  method: 'post',
  path: '/push/publish',
  tags: ['Push'],
  summary: 'Publish a push notification to device(s)',
  description:
    'A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.',
  operationId: 'publishPushNotificationToDevices',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({ format: ResponseFormatParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ recipient: RecipientSchema, push: PushSchema.exactOptional() })
            .openapi({ required: ['recipient'] }),
        },
        'application/x-msgpack': {
          schema: z
            .object({ recipient: RecipientSchema, push: PushSchema.exactOptional() })
            .openapi({ required: ['recipient'] }),
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ recipient: RecipientSchema, push: PushSchema.exactOptional() })
            .openapi({ required: ['recipient'] }),
        },
      },
    },
  },
  responses: { '2XX': { description: 'OK' }, default: ErrorResponse },
})

export const postKeysKeyNameRequestTokenRoute = createRoute({
  method: 'post',
  path: '/keys/{keyName}/requestToken',
  tags: ['Authentication'],
  summary: 'Request an access token',
  description:
    'This is the means by which clients obtain access tokens to use the service. You can see how to construct an Ably TokenRequest in the [Ably TokenRequest spec](https://www.ably.io/documentation/rest-api/token-request-spec) documentation, although we recommend you use an Ably SDK rather to create a TokenRequest, as the construction of a TokenRequest is complex. The resulting token response object contains the token properties as defined in Ably TokenRequest spec. Authentication is not required if using a Signed TokenRequest.',
  operationId: 'requestAccessToken',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({ format: ResponseFormatParamsSchema }),
    params: z.object({ keyName: KeyNameParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([TokenRequestSchema, SignedTokenRequestSchema]),
          example: {
            keyName: 'YourKey.Name',
            timestamp: '1559124196551',
            capability: { channel1: ['publish', 'subscribe'], 'wildcard:channels:*': ['publish'] },
          },
        },
      },
    },
  },
  responses: {
    '2XX': {
      description: 'OK',
      content: {
        'application/json': { schema: TokenDetailsSchema },
        'application/x-msgpack': { schema: TokenDetailsSchema },
      },
    },
    default: ErrorResponse,
  },
})

export const getStatsRoute = createRoute({
  method: 'get',
  path: '/stats',
  tags: ['Stats'],
  summary: 'Retrieve usage statistics for an application',
  description:
    'The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.',
  operationId: 'getStats',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({
      format: ResponseFormatParamsSchema,
      start: FilterStartParamsSchema,
      limit: FilterLimitParamsSchema,
      end: FilterEndParamsSchema,
      direction: FilterDirectionParamsSchema,
      unit: z
        .enum(['minute', 'hour', 'day', 'month'])
        .default('minute')
        .exactOptional()
        .openapi({
          param: {
            name: 'unit',
            in: 'query',
            description: 'Specifies the unit of aggregation in the returned results.',
            schema: { type: 'string', default: 'minute', enum: ['minute', 'hour', 'day', 'month'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': { description: 'OK', content: { 'application/json': { schema: z.looseObject({}) } } },
    default: ErrorResponse,
  },
})

export const getTimeRoute = createRoute({
  method: 'get',
  path: '/time',
  tags: ['Stats'],
  summary: 'Get the service time',
  description: 'This returns the service time in milliseconds since the epoch.',
  operationId: 'getTime',
  request: {
    headers: z.object({ 'X-Ably-Version': VersionHeaderParamsSchema }),
    query: z.object({ format: ResponseFormatParamsSchema }),
  },
  responses: {
    '2XX': {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.int()) },
        'application/x-msgpack': { schema: z.array(z.int()) },
        'text/html': { schema: z.string() },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})
