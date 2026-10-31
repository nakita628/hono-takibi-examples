import { createRoute, z } from '@hono/zod-openapi'

const NotificationSeveritySchema = z
  .enum(['critical', 'high', 'normal', 'low'])
  .openapi('NotificationSeverity')

const NotificationPayloadSchema = z
  .object({
    title: z.string().openapi({ description: 'Notification title' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional longer description for the notification' }),
    link: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional link where the notification is pointing to' }),
    severity: NotificationSeveritySchema.exactOptional(),
    topic: z.string().exactOptional().openapi({ description: 'Optional notification topic' }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Notification scope, can be used to re-send same notifications in case the scope and origin matches.',
      }),
    icon: z.string().exactOptional().openapi({ description: 'Optional notification icon' }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Optional additional customizable metadata.' }),
  })
  .openapi({ required: ['title'] })
  .openapi('NotificationPayload')

const NotificationResponsePayloadSchema = z
  .object({
    title: z.string(),
    description: z.string().nullable().exactOptional(),
    link: z.string().nullable().exactOptional(),
    severity: NotificationSeveritySchema.exactOptional(),
    topic: z.string().nullable().exactOptional(),
    scope: z.string().nullable().exactOptional(),
    icon: z.string().nullable().exactOptional(),
    metadata: z.looseObject({}).exactOptional(),
  })
  .openapi({
    description:
      'Response variant of NotificationPayload. Optional string fields may be returned as null when unset.',
    required: ['title'],
  })
  .openapi('NotificationResponsePayload')

const NotificationSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier for the notification.' }),
    user: z
      .string()
      .nullable()
      .openapi({ description: 'User entity reference, or null for broadcast notifications.' }),
    created: z.iso.datetime({ offset: true }),
    saved: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    read: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    updated: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    origin: z
      .string()
      .openapi({ description: "Origin of the notification (the sender's reference)." }),
    payload: NotificationResponsePayloadSchema,
  })
  .openapi({ required: ['id', 'user', 'created', 'origin', 'payload'] })
  .openapi('Notification')

const NotificationStatusSchema = z
  .object({ unread: z.int(), read: z.int() })
  .openapi({ required: ['unread', 'read'] })
  .openapi('NotificationStatus')

const TopicSettingSchema = z
  .object({ id: z.string(), enabled: z.boolean() })
  .openapi({ required: ['id', 'enabled'] })
  .openapi('TopicSetting')

const OriginSettingSchema = z
  .object({
    id: z.string(),
    enabled: z.boolean(),
    topics: z.array(TopicSettingSchema).exactOptional(),
  })
  .openapi({ required: ['id', 'enabled'] })
  .openapi('OriginSetting')

const ChannelSettingSchema = z
  .object({
    id: z.string(),
    enabled: z.boolean().exactOptional(),
    origins: z.array(OriginSettingSchema),
  })
  .openapi({ required: ['id', 'origins'] })
  .openapi('ChannelSetting')

const NotificationSettingsSchema = z
  .object({ channels: z.array(ChannelSettingSchema) })
  .openapi({ required: ['channels'] })
  .openapi('NotificationSettings')

const EntityRefSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ description: 'A single entity ref, or a list of entity refs.' })
  .openapi('EntityRef')

const OrderFieldSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({
    description:
      'One or more "field,direction" pairs, given as a single string or an array of strings.',
  })
  .openapi('OrderField')

const NotificationRecipientsSchema = z
  .xor([
    z
      .object({
        type: z.literal('entity'),
        entityRef: EntityRefSchema,
        excludeEntityRef: EntityRefSchema.exactOptional(),
      })
      .openapi({ required: ['type', 'entityRef'] }),
    z.object({ type: z.literal('broadcast') }).openapi({ required: ['type'] }),
  ])
  .openapi('NotificationRecipients')

const NotificationSendOptionsSchema = z
  .object({ recipients: NotificationRecipientsSchema, payload: NotificationPayloadSchema })
  .openapi({ required: ['recipients', 'payload'] })
  .openapi('NotificationSendOptions')

const UpdateNotificationsRequestSchema = z
  .object({
    ids: z.array(z.string()),
    read: z.boolean().exactOptional(),
    saved: z.boolean().exactOptional(),
  })
  .openapi({ required: ['ids'] })
  .openapi('UpdateNotificationsRequest')

const ListNotificationsResponseSchema = z
  .object({ totalCount: z.int(), notifications: z.array(NotificationSchema) })
  .openapi({ required: ['totalCount', 'notifications'] })
  .openapi('ListNotificationsResponse')

const GetTopicsResponseSchema = z
  .object({ topics: z.array(z.string()) })
  .openapi({ required: ['topics'] })
  .openapi('GetTopicsResponse')

const ErrorSchema = z
  .object({
    error: z
      .object({ name: z.string(), message: z.string() })
      .openapi({ required: ['name', 'message'] }),
    request: z
      .object({ method: z.string(), url: z.string() })
      .openapi({ required: ['method', 'url'] }),
    response: z.object({ statusCode: z.number() }).openapi({ required: ['statusCode'] }),
  })
  .openapi({ required: ['error', 'request', 'response'] })
  .openapi('Error')

const ErrorResponseResponse = {
  description: 'An error response from the backend.',
  content: { 'application/json; charset=utf-8': { schema: ErrorSchema } },
}

const NotificationIdParamsSchema = z
  .string()
  .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } })

const OffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'offset',
      in: 'query',
      required: false,
      allowReserved: true,
      schema: { type: 'integer', minimum: 0 },
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      required: false,
      allowReserved: true,
      schema: { type: 'integer', minimum: 0 },
    },
  })

const OrderFieldParamsSchema = OrderFieldSchema.openapi({
  param: {
    name: 'orderField',
    in: 'query',
    required: false,
    allowReserved: true,
    description:
      'One or more "field,direction" pairs. Direction is "asc" or "desc". Pass multiple to express compound sorts.',
    schema: { $ref: '#/components/schemas/OrderField' },
  },
}).exactOptional()

const TopicParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'topic',
      in: 'query',
      required: false,
      allowReserved: true,
      schema: { type: 'string' },
    },
  })

const SearchParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'search',
      in: 'query',
      required: false,
      allowReserved: true,
      schema: { type: 'string' },
    },
  })

const ReadParamsSchema = z
  .enum(['true', 'false'])
  .exactOptional()
  .openapi({
    param: {
      name: 'read',
      in: 'query',
      required: false,
      allowReserved: true,
      schema: { type: 'string', enum: ['true', 'false'] },
    },
  })

const SavedParamsSchema = z
  .enum(['true', 'false'])
  .exactOptional()
  .openapi({
    param: {
      name: 'saved',
      in: 'query',
      required: false,
      allowReserved: true,
      schema: { type: 'string', enum: ['true', 'false'] },
    },
  })

const CreatedAfterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'createdAfter',
      in: 'query',
      required: false,
      allowReserved: true,
      description: 'ISO 8601 date-time string. Validated by the handler.',
      schema: { type: 'string' },
    },
  })

const MinimumSeverityParamsSchema = NotificationSeveritySchema.openapi({
  param: {
    name: 'minimumSeverity',
    in: 'query',
    required: false,
    allowReserved: true,
    schema: { $ref: '#/components/schemas/NotificationSeverity' },
  },
}).exactOptional()

const JWTSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  description: 'Deprecated alias for `GET /notifications`.',
  operationId: 'ListNotificationsLegacy',
  request: {
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      orderField: OrderFieldParamsSchema,
      topic: TopicParamsSchema,
      search: SearchParamsSchema,
      read: ReadParamsSchema,
      saved: SavedParamsSchema,
      createdAfter: CreatedAfterParamsSchema,
      minimumSeverity: MinimumSeverityParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A page of notifications for the current user.',
      content: { 'application/json': { schema: ListNotificationsResponseSchema } },
    },
    default: ErrorResponseResponse,
  },
  deprecated: true,
  security: [{}, { JWT: [] }],
})

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  description: 'Deprecated alias for `POST /notifications`.',
  operationId: 'CreateNotificationsLegacy',
  request: {
    body: {
      content: { 'application/json': { schema: NotificationSendOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The notifications that were created.',
      content: { 'application/json': { schema: z.array(NotificationSchema) } },
    },
    default: ErrorResponseResponse,
  },
  deprecated: true,
  security: [{}, { JWT: [] }],
})

export const getNotificationsRoute = createRoute({
  method: 'get',
  path: '/notifications',
  description: 'List notifications for the current user.',
  operationId: 'ListNotifications',
  request: {
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      orderField: OrderFieldParamsSchema,
      topic: TopicParamsSchema,
      search: SearchParamsSchema,
      read: ReadParamsSchema,
      saved: SavedParamsSchema,
      createdAfter: CreatedAfterParamsSchema,
      minimumSeverity: MinimumSeverityParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A page of notifications for the current user.',
      content: { 'application/json': { schema: ListNotificationsResponseSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const postNotificationsRoute = createRoute({
  method: 'post',
  path: '/notifications',
  description: 'Send a notification to one or more recipients (service credentials required).',
  operationId: 'CreateNotifications',
  request: {
    body: {
      content: { 'application/json': { schema: NotificationSendOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The notifications that were created.',
      content: { 'application/json': { schema: z.array(NotificationSchema) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const postUpdateRoute = createRoute({
  method: 'post',
  path: '/update',
  description: 'Deprecated alias for `POST /notifications/update`.',
  operationId: 'UpdateNotificationsLegacy',
  request: {
    body: {
      content: { 'application/json': { schema: UpdateNotificationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The notifications that were updated.',
      content: { 'application/json': { schema: z.array(NotificationSchema) } },
    },
    default: ErrorResponseResponse,
  },
  deprecated: true,
  security: [{}, { JWT: [] }],
})

export const postNotificationsUpdateRoute = createRoute({
  method: 'post',
  path: '/notifications/update',
  description: 'Mark notifications as read/unread or saved/unsaved.',
  operationId: 'UpdateNotifications',
  request: {
    body: {
      content: { 'application/json': { schema: UpdateNotificationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The notifications that were updated.',
      content: { 'application/json': { schema: z.array(NotificationSchema) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getStatusRoute = createRoute({
  method: 'get',
  path: '/status',
  description: 'Get the unread/read counts for the current user.',
  operationId: 'GetStatus',
  responses: {
    200: {
      description: "The current user's notification status.",
      content: { 'application/json': { schema: NotificationStatusSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getSettingsRoute = createRoute({
  method: 'get',
  path: '/settings',
  description: "Get the current user's notification settings, merged with defaults.",
  operationId: 'GetSettings',
  responses: {
    200: {
      description: 'Effective notification settings for the user.',
      content: { 'application/json': { schema: NotificationSettingsSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const postSettingsRoute = createRoute({
  method: 'post',
  path: '/settings',
  description: "Update the current user's notification settings.",
  operationId: 'UpdateSettings',
  request: {
    body: {
      content: { 'application/json': { schema: NotificationSettingsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Effective notification settings for the user.',
      content: { 'application/json': { schema: NotificationSettingsSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getTopicsRoute = createRoute({
  method: 'get',
  path: '/topics',
  description: 'List notification topics that the user has received notifications on.',
  operationId: 'GetTopics',
  request: {
    query: z.object({
      search: SearchParamsSchema,
      read: ReadParamsSchema,
      saved: SavedParamsSchema,
      createdAfter: CreatedAfterParamsSchema,
      minimumSeverity: MinimumSeverityParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The list of topics.',
      content: { 'application/json': { schema: GetTopicsResponseSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getIdRoute = createRoute({
  method: 'get',
  path: '/{id}',
  description: 'Deprecated alias for `GET /notifications/{id}`.',
  operationId: 'GetNotificationLegacy',
  request: { params: z.object({ id: NotificationIdParamsSchema }) },
  responses: {
    200: {
      description: 'The requested notification.',
      content: { 'application/json': { schema: NotificationSchema } },
    },
    default: ErrorResponseResponse,
  },
  deprecated: true,
  security: [{}, { JWT: [] }],
})

export const getNotificationsIdRoute = createRoute({
  method: 'get',
  path: '/notifications/{id}',
  description: 'Get a single notification by id for the current user.',
  operationId: 'GetNotification',
  request: { params: z.object({ id: NotificationIdParamsSchema }) },
  responses: {
    200: {
      description: 'The requested notification.',
      content: { 'application/json': { schema: NotificationSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})
