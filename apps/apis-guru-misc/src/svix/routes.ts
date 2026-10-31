import { createRoute, z } from '@hono/zod-openapi'

const AppPortalAccessInSchema = z
  .object({
    featureFlags: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(256)
          .openapi({ example: 'cool-new-feature' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .default([])
      .exactOptional()
      .openapi({ example: [], title: 'Featureflags' }),
  })
  .openapi({ title: 'AppPortalAccessIn', required: [] })
  .openapi('AppPortalAccessIn')

const AppPortalAccessOutSchema = z
  .object({
    token: z
      .string()
      .openapi({ example: 'appsk_kV3ts5tKPNJN4Dl25cMTfUNdmabxbX0O', title: 'Token' }),
    url: z
      .url()
      .min(1)
      .max(65536)
      .openapi({
        example: 'https://app.svix.com/login#key=eyJhcHBJZCI6ICJhcHBfMXRSdFl',
        title: 'Url',
      }),
  })
  .openapi({ required: ['url', 'token'], title: 'AppPortalAccessOut' })
  .openapi('AppPortalAccessOut')

const ApplicationInSchema = z
  .object({
    metadata: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({ title: 'Metadata' }),
    name: z.string().openapi({ example: 'My first application', title: 'Name' }),
    rateLimit: z
      .int()
      .positive()
      .nullable()
      .exactOptional()
      .openapi({ example: 1000, title: 'Ratelimit' }),
    uid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the application',
        example: 'unique-app-identifier',
        title: 'Uid',
      }),
  })
  .openapi({ required: ['name'], title: 'ApplicationIn' })
  .openapi('ApplicationIn')

const ApplicationOutSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).openapi({ title: 'Createdat' }),
    id: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Id' }),
    metadata: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({ title: 'Metadata' }),
    name: z.string().openapi({ example: 'My first application', title: 'Name' }),
    rateLimit: z
      .int()
      .positive()
      .nullable()
      .exactOptional()
      .openapi({ example: 1000, title: 'Ratelimit' }),
    uid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the application',
        example: 'unique-app-identifier',
        title: 'Uid',
      }),
    updatedAt: z.iso.datetime({ offset: true }).openapi({ title: 'Updatedat' }),
  })
  .openapi({ required: ['name', 'id', 'createdAt', 'updatedAt'], title: 'ApplicationOut' })
  .openapi('ApplicationOut')

const ApplicationTokenExpireInSchema = z
  .object({
    expiry: z
      .int()
      .min(0)
      .max(259200)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'How many seconds until the old key is expired.',
        example: 60,
        title: 'Expiry',
      }),
  })
  .openapi({ title: 'ApplicationTokenExpireIn', required: [] })
  .openapi('ApplicationTokenExpireIn')

const BackgroundTaskOpWebhookStatusSchema = z
  .enum(['finished', 'failed'])
  .openapi({ description: 'An enumeration.', title: 'BackgroundTaskOpWebhookStatus' })
  .openapi('BackgroundTaskOpWebhookStatus')

const BackgroundTaskOpWebhookTypeSchema = z
  .literal('application.stats')
  .openapi({ description: 'An enumeration.', title: 'BackgroundTaskOpWebhookType' })
  .openapi('BackgroundTaskOpWebhookType')

const BackgroundTaskFinishedEventDataSchema = z
  .object({
    data: z.object({}).openapi({ title: 'Data' }),
    status: BackgroundTaskOpWebhookStatusSchema,
    task: BackgroundTaskOpWebhookTypeSchema,
    taskId: z.string().openapi({ example: 'qtask_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Taskid' }),
  })
  .openapi({
    required: ['taskId', 'task', 'status', 'data'],
    title: 'BackgroundTaskFinishedEventData',
  })
  .openapi('BackgroundTaskFinishedEventData')

const BackgroundTaskFinishedEventSchema = z
  .object({
    data: BackgroundTaskFinishedEventDataSchema,
    type: z
      .literal('background_task.finished')
      .default('background_task.finished')
      .exactOptional()
      .openapi({ title: 'Type' }),
  })
  .openapi({
    description: 'Sent when a background task finishes.',
    example: {
      data: {
        data: {
          appStats: [{ appId: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2', messageDestinations: 343 }],
        },
        status: 'finished',
        task: 'application.stats',
        taskId: 'qtask_1srOrx2ZWZBpBUvZwXKQmoEYga2',
      },
      type: 'background_task.finished',
    },
    required: ['data'],
    title: 'BackgroundTaskFinishedEvent',
  })
  .openapi('BackgroundTaskFinishedEvent')

const BackgroundTaskStatusSchema = z
  .enum(['running', 'finished', 'failed'])
  .openapi({ description: 'An enumeration.', title: 'BackgroundTaskStatus' })
  .openapi('BackgroundTaskStatus')

const BackgroundTaskTypeSchema = z
  .enum(['endpoint.replay', 'endpoint.recover', 'application.stats'])
  .openapi({ description: 'An enumeration.', title: 'BackgroundTaskType' })
  .openapi('BackgroundTaskType')

const BackgroundTaskOutSchema = z
  .object({
    data: z.object({}).openapi({ title: 'Data' }),
    id: z.string().openapi({ example: 'qtask_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Id' }),
    status: BackgroundTaskStatusSchema,
    task: BackgroundTaskTypeSchema,
  })
  .openapi({ required: ['id', 'status', 'task', 'data'], title: 'BackgroundTaskOut' })
  .openapi('BackgroundTaskOut')

const DashboardAccessOutSchema = z
  .object({
    token: z
      .string()
      .openapi({ example: 'appsk_kV3ts5tKPNJN4Dl25cMTfUNdmabxbX0O', title: 'Token' }),
    url: z
      .url()
      .min(1)
      .max(65536)
      .openapi({
        example: 'https://app.svix.com/login#key=eyJhcHBJZCI6ICJhcHBfMXRSdFl',
        title: 'Url',
      }),
  })
  .openapi({ required: ['url', 'token'], title: 'DashboardAccessOut' })
  .openapi('DashboardAccessOut')

const EndpointCreatedEventDataSchema = z
  .object({
    appId: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Appid' }),
    appUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the application',
        example: 'unique-app-identifier',
        title: 'Appuid',
      }),
    endpointId: z
      .string()
      .openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Endpointid' }),
    endpointUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the endpoint',
        example: 'unique-endpoint-identifier',
        title: 'Endpointuid',
      }),
  })
  .openapi({ required: ['appId', 'endpointId'], title: 'EndpointCreatedEventData' })
  .openapi('EndpointCreatedEventData')

const EndpointCreatedEventSchema = z
  .object({
    data: EndpointCreatedEventDataSchema,
    type: z
      .literal('endpoint.created')
      .default('endpoint.created')
      .exactOptional()
      .openapi({ title: 'Type' }),
  })
  .openapi({
    description: 'Sent when an endpoint is created.',
    example: {
      data: {
        appId: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        appUid: 'unique-app-identifier',
        endpointId: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        endpointUid: 'unique-endpoint-identifier',
      },
      type: 'endpoint.created',
    },
    required: ['data'],
    title: 'EndpointCreatedEvent',
  })
  .openapi('EndpointCreatedEvent')

const EndpointDeletedEventDataSchema = z
  .object({
    appId: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Appid' }),
    appUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the application',
        example: 'unique-app-identifier',
        title: 'Appuid',
      }),
    endpointId: z
      .string()
      .openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Endpointid' }),
    endpointUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the endpoint',
        example: 'unique-endpoint-identifier',
        title: 'Endpointuid',
      }),
  })
  .openapi({ required: ['appId', 'endpointId'], title: 'EndpointDeletedEventData' })
  .openapi('EndpointDeletedEventData')

const EndpointDeletedEventSchema = z
  .object({
    data: EndpointDeletedEventDataSchema,
    type: z
      .literal('endpoint.deleted')
      .default('endpoint.deleted')
      .exactOptional()
      .openapi({ title: 'Type' }),
  })
  .openapi({
    description: 'Sent when an endpoint is deleted.',
    example: {
      data: {
        appId: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        appUid: 'unique-app-identifier',
        endpointId: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        endpointUid: 'unique-endpoint-identifier',
      },
      type: 'endpoint.deleted',
    },
    required: ['data'],
    title: 'EndpointDeletedEvent',
  })
  .openapi('EndpointDeletedEvent')

const EndpointDisabledEventDataSchema = z
  .object({
    appId: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Appid' }),
    appUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the application',
        example: 'unique-app-identifier',
        title: 'Appuid',
      }),
    endpointId: z
      .string()
      .openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Endpointid' }),
    endpointUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the endpoint',
        example: 'unique-endpoint-identifier',
        title: 'Endpointuid',
      }),
    failSince: z.iso.datetime({ offset: true }).openapi({ title: 'Failsince' }),
  })
  .openapi({ required: ['appId', 'endpointId', 'failSince'], title: 'EndpointDisabledEventData' })
  .openapi('EndpointDisabledEventData')

const EndpointDisabledEventSchema = z
  .object({
    data: EndpointDisabledEventDataSchema,
    type: z
      .literal('endpoint.disabled')
      .default('endpoint.disabled')
      .exactOptional()
      .openapi({ title: 'Type' }),
  })
  .openapi({
    description: 'Sent when an endpoint has been automatically disabled after continuous failures.',
    example: {
      data: {
        appId: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        appUid: 'unique-app-identifier',
        endpointId: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        endpointUid: 'unique-endpoint-identifier',
        failSince: '1970-01-01T00:00:00',
      },
      type: 'endpoint.disabled',
    },
    required: ['data'],
    title: 'EndpointDisabledEvent',
  })
  .openapi('EndpointDisabledEvent')

const EndpointHeadersInSchema = z
  .object({
    headers: z
      .record(z.string(), z.string())
      .openapi({ example: { 'X-Example': '123', 'X-Foobar': 'Bar' }, title: 'Headers' }),
  })
  .openapi({ required: ['headers'], title: 'EndpointHeadersIn' })
  .openapi('EndpointHeadersIn')

const EndpointHeadersOutSchema = z
  .object({
    headers: z
      .record(z.string(), z.string())
      .openapi({ example: { 'X-Example': '123', 'X-Foobar': 'Bar' }, title: 'Headers' }),
    sensitive: z
      .array(z.string().openapi({ example: 'X-Foobar' }))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ example: ['Authorization'], title: 'Sensitive' }),
  })
  .openapi({
    description:
      'The value of the headers is returned in the `headers` field.\n\nSensitive headers that have been redacted are returned in the sensitive field.',
    required: ['headers', 'sensitive'],
    title: 'EndpointHeadersOut',
  })
  .openapi('EndpointHeadersOut')

const EndpointHeadersPatchInSchema = z
  .object({
    headers: z
      .record(z.string(), z.string())
      .openapi({ example: { 'X-Example': '123', 'X-Foobar': 'Bar' }, title: 'Headers' }),
  })
  .openapi({ required: ['headers'], title: 'EndpointHeadersPatchIn' })
  .openapi('EndpointHeadersPatchIn')

const EndpointInSchema = z
  .object({
    channels: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .openapi({ example: 'project_1337' }),
      )
      .min(1)
      .max(10)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of message channels this endpoint listens to (omit for all)',
        example: ['project_123', 'group_2'],
        title: 'Channels',
      }),
    description: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ example: 'An example endpoint name', title: 'Description' }),
    disabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ example: false, title: 'Disabled' }),
    filterTypes: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(256)
          .openapi({ example: 'user.signup' }),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({ example: ['user.signup', 'user.deleted'], title: 'Filtertypes' }),
    metadata: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({ title: 'Metadata' }),
    rateLimit: z
      .int()
      .min(1)
      .max(65535)
      .nullable()
      .exactOptional()
      .openapi({ example: 1000, title: 'Ratelimit' }),
    secret: z
      .string()
      .regex(/^(whsec_)?[a-zA-Z0-9+\/=]{32,100}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24.",
        example: 'whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD',
        title: 'Secret',
      }),
    uid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the endpoint',
        example: 'unique-endpoint-identifier',
        title: 'Uid',
      }),
    url: z
      .url()
      .min(1)
      .max(65536)
      .openapi({ example: 'https://example.com/webhook/', title: 'Url' }),
    version: z.int().positive().openapi({ example: 1, title: 'Version' }),
  })
  .openapi({ required: ['url', 'version'], title: 'EndpointIn' })
  .openapi('EndpointIn')

const MessageStatusSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description:
      'The sending status of the message:\n- Success = 0\n- Pending = 1\n- Fail = 2\n- Sending = 3',
    title: 'MessageStatus',
    'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
  })
  .openapi('MessageStatus')

const EndpointMessageOutSchema = z
  .object({
    channels: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .openapi({ example: 'project_1337' }),
      )
      .min(1)
      .max(5)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of free-form identifiers that endpoints can filter by',
        example: ['project_123', 'group_2'],
        title: 'Channels',
      }),
    eventId: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the message',
        example: 'evt_pNZKtWg8Azow',
        title: 'Eventid',
      }),
    eventType: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .openapi({ example: 'user.signup', title: 'Eventtype' }),
    id: z.string().openapi({ example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Id' }),
    nextAttempt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ title: 'Nextattempt' }),
    payload: z
      .object({})
      .openapi({ example: { email: 'test@example.com', username: 'test_user' }, title: 'Payload' }),
    status: MessageStatusSchema,
    timestamp: z.iso.datetime({ offset: true }).openapi({ title: 'Timestamp' }),
  })
  .openapi({
    required: ['eventType', 'payload', 'id', 'timestamp', 'status'],
    title: 'EndpointMessageOut',
  })
  .openapi('EndpointMessageOut')

const EndpointOutSchema = z
  .object({
    channels: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .openapi({ example: 'project_1337' }),
      )
      .min(1)
      .max(10)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of message channels this endpoint listens to (omit for all)',
        example: ['project_123', 'group_2'],
        title: 'Channels',
      }),
    createdAt: z.iso.datetime({ offset: true }).openapi({ title: 'Createdat' }),
    description: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ example: 'An example endpoint name', title: 'Description' }),
    disabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ example: false, title: 'Disabled' }),
    filterTypes: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(256)
          .openapi({ example: 'user.signup' }),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({ example: ['user.signup', 'user.deleted'], title: 'Filtertypes' }),
    id: z.string().openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Id' }),
    metadata: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({ title: 'Metadata' }),
    rateLimit: z
      .int()
      .min(1)
      .max(65535)
      .nullable()
      .exactOptional()
      .openapi({ example: 1000, title: 'Ratelimit' }),
    uid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the endpoint',
        example: 'unique-endpoint-identifier',
        title: 'Uid',
      }),
    updatedAt: z.iso.datetime({ offset: true }).openapi({ title: 'Updatedat' }),
    url: z
      .url()
      .min(1)
      .max(65536)
      .openapi({ example: 'https://example.com/webhook/', title: 'Url' }),
    version: z.int().positive().openapi({ example: 1, title: 'Version' }),
  })
  .openapi({ required: ['url', 'version', 'id', 'createdAt', 'updatedAt'], title: 'EndpointOut' })
  .openapi('EndpointOut')

const EndpointSecretOutSchema = z
  .object({
    key: z
      .string()
      .regex(/^(whsec_)?[a-zA-Z0-9+\/=]{32,100}$/)
      .openapi({
        description:
          "The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24.",
        example: 'whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD',
        title: 'Key',
      }),
  })
  .openapi({ required: ['key'], title: 'EndpointSecretOut' })
  .openapi('EndpointSecretOut')

const EndpointSecretRotateInSchema = z
  .object({
    key: z
      .string()
      .regex(/^(whsec_)?[a-zA-Z0-9+\/=]{32,100}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24.",
        example: 'whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD',
        title: 'Key',
      }),
  })
  .openapi({ title: 'EndpointSecretRotateIn', required: [] })
  .openapi('EndpointSecretRotateIn')

const EndpointStatsSchema = z
  .object({
    fail: z.int().openapi({ title: 'Fail' }),
    pending: z.int().openapi({ title: 'Pending' }),
    sending: z.int().openapi({ title: 'Sending' }),
    success: z.int().openapi({ title: 'Success' }),
  })
  .openapi({ required: ['sending', 'success', 'pending', 'fail'], title: 'EndpointStats' })
  .openapi('EndpointStats')

const EndpointTransformationInSchema = z
  .object({
    code: z.string().min(10).max(51200).nullable().exactOptional().openapi({ title: 'Code' }),
    enabled: z.boolean().default(false).exactOptional().openapi({ title: 'Enabled' }),
  })
  .openapi({ title: 'EndpointTransformationIn', required: [] })
  .openapi('EndpointTransformationIn')

const EndpointTransformationOutSchema = z
  .object({
    code: z.string().min(10).max(51200).nullable().exactOptional().openapi({ title: 'Code' }),
    enabled: z.boolean().default(false).exactOptional().openapi({ title: 'Enabled' }),
  })
  .openapi({ title: 'EndpointTransformationOut', required: [] })
  .openapi('EndpointTransformationOut')

const EndpointUpdateSchema = z
  .object({
    channels: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .openapi({ example: 'project_1337' }),
      )
      .min(1)
      .max(10)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of message channels this endpoint listens to (omit for all)',
        example: ['project_123', 'group_2'],
        title: 'Channels',
      }),
    description: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ example: 'An example endpoint name', title: 'Description' }),
    disabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ example: false, title: 'Disabled' }),
    filterTypes: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(256)
          .openapi({ example: 'user.signup' }),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({ example: ['user.signup', 'user.deleted'], title: 'Filtertypes' }),
    metadata: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({ title: 'Metadata' }),
    rateLimit: z
      .int()
      .min(1)
      .max(65535)
      .nullable()
      .exactOptional()
      .openapi({ example: 1000, title: 'Ratelimit' }),
    uid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the endpoint',
        example: 'unique-endpoint-identifier',
        title: 'Uid',
      }),
    url: z
      .url()
      .min(1)
      .max(65536)
      .openapi({ example: 'https://example.com/webhook/', title: 'Url' }),
    version: z.int().positive().openapi({ example: 1, title: 'Version' }),
  })
  .openapi({ required: ['url', 'version'], title: 'EndpointUpdate' })
  .openapi('EndpointUpdate')

const EndpointUpdatedEventDataSchema = z
  .object({
    appId: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Appid' }),
    appUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the application',
        example: 'unique-app-identifier',
        title: 'Appuid',
      }),
    endpointId: z
      .string()
      .openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Endpointid' }),
    endpointUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the endpoint',
        example: 'unique-endpoint-identifier',
        title: 'Endpointuid',
      }),
  })
  .openapi({ required: ['appId', 'endpointId'], title: 'EndpointUpdatedEventData' })
  .openapi('EndpointUpdatedEventData')

const EndpointUpdatedEventSchema = z
  .object({
    data: EndpointUpdatedEventDataSchema,
    type: z
      .literal('endpoint.updated')
      .default('endpoint.updated')
      .exactOptional()
      .openapi({ title: 'Type' }),
  })
  .openapi({
    description: 'Sent when an endpoint is updated.',
    example: {
      data: {
        appId: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        appUid: 'unique-app-identifier',
        endpointId: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        endpointUid: 'unique-endpoint-identifier',
      },
      type: 'endpoint.updated',
    },
    required: ['data'],
    title: 'EndpointUpdatedEvent',
  })
  .openapi('EndpointUpdatedEvent')

const EventTypeInSchema = z
  .object({
    archived: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ example: false, title: 'Archived' }),
    description: z.string().openapi({ example: 'A user has signed up', title: 'Description' }),
    featureFlag: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'cool-new-feature', title: 'Featureflag' }),
    name: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .openapi({ example: 'user.signup', title: 'Name' }),
    schemas: z
      .record(
        z.string(),
        z
          .object({})
          .openapi({
            example: {
              description: 'An invoice was paid by a user',
              properties: {
                invoiceId: { description: 'The invoice id', type: 'string' },
                userId: { description: 'The user id', type: 'string' },
              },
              required: ['invoiceId', 'userId'],
              title: 'Invoice Paid Event',
              type: 'object',
            },
          }),
      )
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The schema for the event type for a specific version as a JSON schema.',
        example: {
          '1': {
            description: 'An invoice was paid by a user',
            properties: {
              invoiceId: { description: 'The invoice id', type: 'string' },
              userId: { description: 'The user id', type: 'string' },
            },
            required: ['invoiceId', 'userId'],
            title: 'Invoice Paid Event',
            type: 'object',
          },
        },
        title: 'Schemas',
      }),
  })
  .openapi({ required: ['description', 'name'], title: 'EventTypeIn' })
  .openapi('EventTypeIn')

const EventTypeOutSchema = z
  .object({
    archived: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ example: false, title: 'Archived' }),
    createdAt: z.iso.datetime({ offset: true }).openapi({ title: 'Createdat' }),
    description: z.string().openapi({ example: 'A user has signed up', title: 'Description' }),
    featureFlag: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'cool-new-feature', title: 'Featureflag' }),
    name: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .openapi({ example: 'user.signup', title: 'Name' }),
    schemas: z
      .record(
        z.string(),
        z
          .object({})
          .openapi({
            example: {
              description: 'An invoice was paid by a user',
              properties: {
                invoiceId: { description: 'The invoice id', type: 'string' },
                userId: { description: 'The user id', type: 'string' },
              },
              required: ['invoiceId', 'userId'],
              title: 'Invoice Paid Event',
              type: 'object',
            },
          }),
      )
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The schema for the event type for a specific version as a JSON schema.',
        example: {
          '1': {
            description: 'An invoice was paid by a user',
            properties: {
              invoiceId: { description: 'The invoice id', type: 'string' },
              userId: { description: 'The user id', type: 'string' },
            },
            required: ['invoiceId', 'userId'],
            title: 'Invoice Paid Event',
            type: 'object',
          },
        },
        title: 'Schemas',
      }),
    updatedAt: z.iso.datetime({ offset: true }).openapi({ title: 'Updatedat' }),
  })
  .openapi({ required: ['description', 'name', 'createdAt', 'updatedAt'], title: 'EventTypeOut' })
  .openapi('EventTypeOut')

const EventTypeUpdateSchema = z
  .object({
    archived: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ example: false, title: 'Archived' }),
    description: z.string().openapi({ example: 'A user has signed up', title: 'Description' }),
    featureFlag: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'cool-new-feature', title: 'Featureflag' }),
    schemas: z
      .record(
        z.string(),
        z
          .object({})
          .openapi({
            example: {
              description: 'An invoice was paid by a user',
              properties: {
                invoiceId: { description: 'The invoice id', type: 'string' },
                userId: { description: 'The user id', type: 'string' },
              },
              required: ['invoiceId', 'userId'],
              title: 'Invoice Paid Event',
              type: 'object',
            },
          }),
      )
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The schema for the event type for a specific version as a JSON schema.',
        example: {
          '1': {
            description: 'An invoice was paid by a user',
            properties: {
              invoiceId: { description: 'The invoice id', type: 'string' },
              userId: { description: 'The user id', type: 'string' },
            },
            required: ['invoiceId', 'userId'],
            title: 'Invoice Paid Event',
            type: 'object',
          },
        },
        title: 'Schemas',
      }),
  })
  .openapi({ required: ['description'], title: 'EventTypeUpdate' })
  .openapi('EventTypeUpdate')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.string()).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const HttpErrorOutSchema = z
  .object({
    code: z.string().openapi({ title: 'Code' }),
    detail: z.string().openapi({ title: 'Detail' }),
  })
  .openapi({ required: ['code', 'detail'], title: 'HttpError' })
  .openapi('HttpErrorOut')

const IntegrationInSchema = z
  .object({ name: z.string().openapi({ example: 'Example Integration', title: 'Name' }) })
  .openapi({ required: ['name'], title: 'IntegrationIn' })
  .openapi('IntegrationIn')

const IntegrationKeyOutSchema = z
  .object({
    key: z.string().openapi({ example: 'integsk_kV3ts5tKPNJN4Dl25cMTfUNdmabxbX0O', title: 'Key' }),
  })
  .openapi({ required: ['key'], title: 'IntegrationKeyOut' })
  .openapi('IntegrationKeyOut')

const IntegrationOutSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).openapi({ title: 'Createdat' }),
    id: z.string().openapi({ example: 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Id' }),
    name: z.string().openapi({ example: 'Example Integration', title: 'Name' }),
    updatedAt: z.iso.datetime({ offset: true }).openapi({ title: 'Updatedat' }),
  })
  .openapi({ required: ['name', 'id', 'createdAt', 'updatedAt'], title: 'IntegrationOut' })
  .openapi('IntegrationOut')

const IntegrationUpdateSchema = z
  .object({ name: z.string().openapi({ example: 'Example Integration', title: 'Name' }) })
  .openapi({ required: ['name'], title: 'IntegrationUpdate' })
  .openapi('IntegrationUpdate')

const ListResponseApplicationOutSchema = z
  .object({
    data: z.array(ApplicationOutSchema).openapi({ title: 'Data' }),
    done: z.boolean().openapi({ title: 'Done' }),
    iterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'iterator', title: 'Iterator' }),
    prevIterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '-iterator', title: 'Previterator' }),
  })
  .openapi({ required: ['data', 'done'], title: 'ListResponse[ApplicationOut]' })
  .openapi('ListResponseApplicationOut')

const ListResponseBackgroundTaskOutSchema = z
  .object({
    data: z.array(BackgroundTaskOutSchema).openapi({ title: 'Data' }),
    done: z.boolean().openapi({ title: 'Done' }),
    iterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'iterator', title: 'Iterator' }),
    prevIterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '-iterator', title: 'Previterator' }),
  })
  .openapi({ required: ['data', 'done'], title: 'ListResponse[BackgroundTaskOut]' })
  .openapi('ListResponseBackgroundTaskOut')

const ListResponseEndpointMessageOutSchema = z
  .object({
    data: z.array(EndpointMessageOutSchema).openapi({ title: 'Data' }),
    done: z.boolean().openapi({ title: 'Done' }),
    iterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'iterator', title: 'Iterator' }),
    prevIterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '-iterator', title: 'Previterator' }),
  })
  .openapi({ required: ['data', 'done'], title: 'ListResponse[EndpointMessageOut]' })
  .openapi('ListResponseEndpointMessageOut')

const ListResponseEndpointOutSchema = z
  .object({
    data: z.array(EndpointOutSchema).openapi({ title: 'Data' }),
    done: z.boolean().openapi({ title: 'Done' }),
    iterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'iterator', title: 'Iterator' }),
    prevIterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '-iterator', title: 'Previterator' }),
  })
  .openapi({ required: ['data', 'done'], title: 'ListResponse[EndpointOut]' })
  .openapi('ListResponseEndpointOut')

const ListResponseEventTypeOutSchema = z
  .object({
    data: z.array(EventTypeOutSchema).openapi({ title: 'Data' }),
    done: z.boolean().openapi({ title: 'Done' }),
    iterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'iterator', title: 'Iterator' }),
    prevIterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '-iterator', title: 'Previterator' }),
  })
  .openapi({ required: ['data', 'done'], title: 'ListResponse[EventTypeOut]' })
  .openapi('ListResponseEventTypeOut')

const ListResponseIntegrationOutSchema = z
  .object({
    data: z.array(IntegrationOutSchema).openapi({ title: 'Data' }),
    done: z.boolean().openapi({ title: 'Done' }),
    iterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'iterator', title: 'Iterator' }),
  })
  .openapi({ required: ['data', 'done'], title: 'ListResponse[IntegrationOut]' })
  .openapi('ListResponseIntegrationOut')

const MessageAttemptTriggerTypeSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'The reason an attempt was made:\n- Scheduled = 0\n- Manual = 1',
    title: 'MessageAttemptTriggerType',
    'x-enum-varnames': ['Scheduled', 'Manual'],
  })
  .openapi('MessageAttemptTriggerType')

const MessageAttemptEndpointOutSchema = z
  .object({
    endpointId: z
      .string()
      .openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Endpointid' }),
    id: z.string().openapi({ example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Id' }),
    msgId: z.string().openapi({ example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Msgid' }),
    response: z.string().openapi({ example: '{}', title: 'Response' }),
    responseStatusCode: z.int().openapi({ example: 200, title: 'Responsestatuscode' }),
    status: MessageStatusSchema,
    timestamp: z.iso.datetime({ offset: true }).openapi({ title: 'Timestamp' }),
    triggerType: MessageAttemptTriggerTypeSchema,
    url: z
      .url()
      .min(1)
      .max(65536)
      .openapi({ example: 'https://example.com/webhook/', title: 'Url' }),
  })
  .openapi({
    required: [
      'id',
      'msgId',
      'endpointId',
      'url',
      'response',
      'responseStatusCode',
      'timestamp',
      'status',
      'triggerType',
    ],
    title: 'MessageAttemptEndpointOut',
  })
  .openapi('MessageAttemptEndpointOut')

const ListResponseMessageAttemptEndpointOutSchema = z
  .object({
    data: z.array(MessageAttemptEndpointOutSchema).openapi({ title: 'Data' }),
    done: z.boolean().openapi({ title: 'Done' }),
    iterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'iterator', title: 'Iterator' }),
    prevIterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '-iterator', title: 'Previterator' }),
  })
  .openapi({ required: ['data', 'done'], title: 'ListResponse[MessageAttemptEndpointOut]' })
  .openapi('ListResponseMessageAttemptEndpointOut')

const MessageAttemptOutSchema = z
  .object({
    endpointId: z
      .string()
      .openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Endpointid' }),
    id: z.string().openapi({ example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Id' }),
    msgId: z.string().openapi({ example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Msgid' }),
    response: z.string().openapi({ example: '{}', title: 'Response' }),
    responseStatusCode: z.int().openapi({ example: 200, title: 'Responsestatuscode' }),
    status: MessageStatusSchema,
    timestamp: z.iso.datetime({ offset: true }).openapi({ title: 'Timestamp' }),
    triggerType: MessageAttemptTriggerTypeSchema,
    url: z
      .url()
      .min(1)
      .max(65536)
      .openapi({ example: 'https://example.com/webhook/', title: 'Url' }),
  })
  .openapi({
    required: [
      'id',
      'msgId',
      'endpointId',
      'url',
      'response',
      'responseStatusCode',
      'timestamp',
      'status',
      'triggerType',
    ],
    title: 'MessageAttemptOut',
  })
  .openapi('MessageAttemptOut')

const ListResponseMessageAttemptOutSchema = z
  .object({
    data: z.array(MessageAttemptOutSchema).openapi({ title: 'Data' }),
    done: z.boolean().openapi({ title: 'Done' }),
    iterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'iterator', title: 'Iterator' }),
    prevIterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '-iterator', title: 'Previterator' }),
  })
  .openapi({ required: ['data', 'done'], title: 'ListResponse[MessageAttemptOut]' })
  .openapi('ListResponseMessageAttemptOut')

const MessageEndpointOutSchema = z
  .object({
    channels: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .openapi({ example: 'project_1337' }),
      )
      .min(1)
      .max(10)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of message channels this endpoint listens to (omit for all)',
        example: ['project_123', 'group_2'],
        title: 'Channels',
      }),
    createdAt: z.iso.datetime({ offset: true }).openapi({ title: 'Createdat' }),
    description: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ example: 'An example endpoint name', title: 'Description' }),
    disabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ example: false, title: 'Disabled' }),
    filterTypes: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(256)
          .openapi({ example: 'user.signup' }),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({ example: ['user.signup', 'user.deleted'], title: 'Filtertypes' }),
    id: z.string().openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Id' }),
    metadata: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({ title: 'Metadata' }),
    nextAttempt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ title: 'Nextattempt' }),
    rateLimit: z
      .int()
      .min(1)
      .max(65535)
      .nullable()
      .exactOptional()
      .openapi({ example: 1000, title: 'Ratelimit' }),
    status: MessageStatusSchema,
    uid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the endpoint',
        example: 'unique-endpoint-identifier',
        title: 'Uid',
      }),
    url: z
      .url()
      .min(1)
      .max(65536)
      .openapi({ example: 'https://example.com/webhook/', title: 'Url' }),
    version: z.int().positive().openapi({ example: 1, title: 'Version' }),
  })
  .openapi({
    required: ['url', 'version', 'id', 'createdAt', 'status'],
    title: 'MessageEndpointOut',
  })
  .openapi('MessageEndpointOut')

const ListResponseMessageEndpointOutSchema = z
  .object({
    data: z.array(MessageEndpointOutSchema).openapi({ title: 'Data' }),
    done: z.boolean().openapi({ title: 'Done' }),
    iterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'iterator', title: 'Iterator' }),
  })
  .openapi({ required: ['data', 'done'], title: 'ListResponse[MessageEndpointOut]' })
  .openapi('ListResponseMessageEndpointOut')

const MessageOutSchema = z
  .object({
    channels: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .openapi({ example: 'project_1337' }),
      )
      .min(1)
      .max(5)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of free-form identifiers that endpoints can filter by',
        example: ['project_123', 'group_2'],
        title: 'Channels',
      }),
    eventId: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the message',
        example: 'evt_pNZKtWg8Azow',
        title: 'Eventid',
      }),
    eventType: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .openapi({ example: 'user.signup', title: 'Eventtype' }),
    id: z.string().openapi({ example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Id' }),
    payload: z
      .object({})
      .openapi({ example: { email: 'test@example.com', username: 'test_user' }, title: 'Payload' }),
    timestamp: z.iso.datetime({ offset: true }).openapi({ title: 'Timestamp' }),
  })
  .openapi({ required: ['eventType', 'payload', 'id', 'timestamp'], title: 'MessageOut' })
  .openapi('MessageOut')

const ListResponseMessageOutSchema = z
  .object({
    data: z.array(MessageOutSchema).openapi({ title: 'Data' }),
    done: z.boolean().openapi({ title: 'Done' }),
    iterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'iterator', title: 'Iterator' }),
    prevIterator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '-iterator', title: 'Previterator' }),
  })
  .openapi({ required: ['data', 'done'], title: 'ListResponse[MessageOut]' })
  .openapi('ListResponseMessageOut')

const MessageAttemptFailedDataSchema = z
  .object({
    id: z.string().openapi({ example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Id' }),
    responseStatusCode: z.int().openapi({ example: 500, title: 'Responsestatuscode' }),
    timestamp: z.iso.datetime({ offset: true }).openapi({ title: 'Timestamp' }),
  })
  .openapi({
    required: ['id', 'responseStatusCode', 'timestamp'],
    title: 'MessageAttemptFailedData',
  })
  .openapi('MessageAttemptFailedData')

const MessageAttemptExhaustedEventDataSchema = z
  .object({
    appId: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Appid' }),
    appUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the application',
        example: 'unique-app-identifier',
        title: 'Appuid',
      }),
    endpointId: z
      .string()
      .openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Endpointid' }),
    lastAttempt: MessageAttemptFailedDataSchema,
    msgEventId: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the message',
        example: 'evt_pNZKtWg8Azow',
        title: 'Msgeventid',
      }),
    msgId: z.string().openapi({ example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Msgid' }),
  })
  .openapi({
    required: ['appId', 'msgId', 'endpointId', 'lastAttempt'],
    title: 'MessageAttemptExhaustedEventData',
  })
  .openapi('MessageAttemptExhaustedEventData')

const MessageAttemptExhaustedEventSchema = z
  .object({
    data: MessageAttemptExhaustedEventDataSchema,
    type: z
      .literal('message.attempt.exhausted')
      .default('message.attempt.exhausted')
      .exactOptional()
      .openapi({ title: 'Type' }),
  })
  .openapi({
    description:
      'Sent when a message delivery has failed (all of the retry attempts have been exhausted).',
    example: {
      data: {
        appId: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        appUid: 'unique-app-identifier',
        endpointId: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        lastAttempt: {
          id: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          responseStatusCode: 500,
          timestamp: '1970-01-01T00:00:00',
        },
        msgEventId: 'unique-msg-identifier',
        msgId: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
      },
      type: 'message.attempt.exhausted',
    },
    required: ['data'],
    title: 'MessageAttemptExhaustedEvent',
  })
  .openapi('MessageAttemptExhaustedEvent')

const MessageAttemptFailingEventDataSchema = z
  .object({
    appId: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Appid' }),
    appUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the application',
        example: 'unique-app-identifier',
        title: 'Appuid',
      }),
    endpointId: z
      .string()
      .openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Endpointid' }),
    lastAttempt: MessageAttemptFailedDataSchema,
    msgEventId: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the message',
        example: 'evt_pNZKtWg8Azow',
        title: 'Msgeventid',
      }),
    msgId: z.string().openapi({ example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Msgid' }),
  })
  .openapi({
    required: ['appId', 'msgId', 'endpointId', 'lastAttempt'],
    title: 'MessageAttemptFailingEventData',
  })
  .openapi('MessageAttemptFailingEventData')

const MessageAttemptFailingEventSchema = z
  .object({
    data: MessageAttemptFailingEventDataSchema,
    type: z
      .literal('message.attempt.failing')
      .default('message.attempt.failing')
      .exactOptional()
      .openapi({ title: 'Type' }),
  })
  .openapi({
    description:
      "Sent after a message has been failing for a few times.\nIt's sent on the fourth failure. It complements `message.attempt.exhausted` which is sent after the last failure.",
    example: {
      data: {
        appId: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        appUid: 'unique-app-identifier',
        endpointId: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        lastAttempt: {
          id: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          responseStatusCode: 500,
          timestamp: '1970-01-01T00:00:00',
        },
        msgEventId: 'unique-msg-identifier',
        msgId: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
      },
      type: 'message.attempt.failing',
    },
    required: ['data'],
    title: 'MessageAttemptFailingEvent',
  })
  .openapi('MessageAttemptFailingEvent')

const MessageInSchema = z
  .object({
    application: ApplicationInSchema.nullable().exactOptional(),
    channels: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .openapi({ example: 'project_1337' }),
      )
      .min(1)
      .max(5)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of free-form identifiers that endpoints can filter by',
        example: ['project_123', 'group_2'],
        title: 'Channels',
      }),
    eventId: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional unique identifier for the message',
        example: 'evt_pNZKtWg8Azow',
        title: 'Eventid',
      }),
    eventType: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .openapi({ example: 'user.signup', title: 'Eventtype' }),
    payload: z
      .object({})
      .openapi({ example: { email: 'test@example.com', username: 'test_user' }, title: 'Payload' }),
    payloadRetentionPeriod: z
      .int()
      .min(5)
      .max(90)
      .default(90)
      .exactOptional()
      .openapi({
        description: 'The retention period for the payload (in days).',
        example: 90,
        title: 'Payloadretentionperiod',
      }),
  })
  .openapi({ required: ['eventType', 'payload'], title: 'MessageIn' })
  .openapi('MessageIn')

const OrderingSchema = z
  .enum(['ascending', 'descending'])
  .openapi({ description: 'Defines the ordering in a listing of results.', title: 'Ordering' })
  .openapi('Ordering')

const RecoverInSchema = z
  .object({
    since: z.iso.datetime({ offset: true }).openapi({ title: 'Since' }),
    until: z.iso.datetime({ offset: true }).nullable().exactOptional().openapi({ title: 'Until' }),
  })
  .openapi({ required: ['since'], title: 'RecoverIn' })
  .openapi('RecoverIn')

const RecoverOutSchema = z
  .object({
    id: z.string().openapi({ example: 'qtask_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Id' }),
    status: BackgroundTaskStatusSchema,
    task: z
      .literal('endpoint.recover')
      .default('endpoint.recover')
      .exactOptional()
      .openapi({ title: 'Task' }),
  })
  .openapi({ required: ['id', 'status'], title: 'RecoverOut' })
  .openapi('RecoverOut')

const ReplayInSchema = z
  .object({
    since: z.iso.datetime({ offset: true }).openapi({ title: 'Since' }),
    until: z.iso.datetime({ offset: true }).nullable().exactOptional().openapi({ title: 'Until' }),
  })
  .openapi({ required: ['since'], title: 'ReplayIn' })
  .openapi('ReplayIn')

const ReplayOutSchema = z
  .object({
    id: z.string().openapi({ example: 'qtask_1srOrx2ZWZBpBUvZwXKQmoEYga2', title: 'Id' }),
    status: BackgroundTaskStatusSchema,
    task: z
      .literal('endpoint.replay')
      .default('endpoint.replay')
      .exactOptional()
      .openapi({ title: 'Task' }),
  })
  .openapi({ required: ['id', 'status'], title: 'ReplayOut' })
  .openapi('ReplayOut')

const StatusCodeClassSchema = z
  .union([
    z.literal(0),
    z.literal(100),
    z.literal(200),
    z.literal(300),
    z.literal(400),
    z.literal(500),
  ])
  .openapi({
    description:
      'The different classes of HTTP status codes:\n- CodeNone = 0\n- Code1xx = 100\n- Code2xx = 200\n- Code3xx = 300\n- Code4xx = 400\n- Code5xx = 500',
    title: 'StatusCodeClass',
    'x-enum-varnames': ['CodeNone', 'Code1xx', 'Code2xx', 'Code3xx', 'Code4xx', 'Code5xx'],
  })
  .openapi('StatusCodeClass')

const WebhookTypesSchema = z
  .object({
    a: EndpointDisabledEventSchema,
    a1: MessageAttemptFailingEventSchema,
    a2: BackgroundTaskFinishedEventSchema,
    b: EndpointCreatedEventSchema,
    c: EndpointUpdatedEventSchema,
    d: EndpointDeletedEventSchema,
    e: MessageAttemptExhaustedEventSchema,
  })
  .openapi({
    description: 'All of the webhook types that we support',
    required: ['a', 'b', 'c', 'd', 'e', 'a1', 'a2'],
    title: 'WebhookTypes',
  })
  .openapi('WebhookTypes')

const HTTPBearerSecurityScheme = { scheme: 'bearer', type: 'http' }

export const getApiV1AppIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/',
  tags: ['Application'],
  summary: 'List Applications',
  description: "List of all the organization's applications.",
  operationId: 'list_applications_api_v1_app__get',
  request: {
    query: z.object({
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iterator',
            required: false,
            schema: {
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              title: 'Iterator',
              type: 'string',
            },
          },
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Iterator',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(250),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, maximum: 250, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      order: OrderingSchema.default('descending')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            required: false,
            schema: { allOf: [{ $ref: '#/components/schemas/Ordering' }], default: 'descending' },
          },
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListResponseApplicationOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postApiV1AppIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/',
  tags: ['Application'],
  summary: 'Create Application',
  description: 'Create a new application.',
  operationId: 'create_application_api_v1_app__post',
  request: {
    query: z.object({
      get_if_exists: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Get an existing application, or create a new one if doesn't exist. It's two separate functions in the libs.",
            in: 'query',
            name: 'get_if_exists',
            required: false,
            schema: {
              default: false,
              description:
                "Get an existing application, or create a new one if doesn't exist. It's two separate functions in the libs.",
              title: 'Get If Exists',
              type: 'boolean',
            },
          },
          description:
            "Get an existing application, or create a new one if doesn't exist. It's two separate functions in the libs.",
          title: 'Get If Exists',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationInSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApplicationOutSchema } } },
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ApplicationOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/',
  tags: ['Application'],
  summary: 'Get Application',
  description: 'Get an application.',
  operationId: 'get_application_api_v1_app__app_id___get',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ApplicationOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putApiV1AppAppIdIndexRoute = createRoute({
  method: 'put',
  path: '/api/v1/app/{app_id}/',
  tags: ['Application'],
  summary: 'Update Application',
  description: 'Update an application.',
  operationId: 'update_application_api_v1_app__app_id___put',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationInSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ApplicationOutSchema } },
    },
    201: {
      description: 'Created',
      content: { 'application/json': { schema: ApplicationOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteApiV1AppAppIdIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/app/{app_id}/',
  tags: ['Application'],
  summary: 'Delete Application',
  description: 'Delete an application.',
  operationId: 'delete_application_api_v1_app__app_id___delete',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdAttemptEndpointEndpointIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/attempt/endpoint/{endpoint_id}/',
  tags: ['Message Attempt'],
  summary: 'List Attempts By Endpoint',
  description: 'List attempts by endpoint id',
  operationId: 'list_attempts_by_endpoint_api_v1_app__app_id__attempt_endpoint__endpoint_id___get',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
    }),
    query: z.object({
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iterator',
            required: false,
            schema: {
              example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              title: 'Iterator',
              type: 'string',
            },
          },
          example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Iterator',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(250),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, maximum: 250, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      status: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              description:
                'The sending status of the message:\n- Success = 0\n- Pending = 1\n- Fail = 2\n- Sending = 3',
              enum: [0, 1, 2, 3],
              title: 'MessageStatus',
              type: 'integer',
              'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
              nullable: true,
            },
          },
          description:
            'The sending status of the message:\n- Success = 0\n- Pending = 1\n- Fail = 2\n- Sending = 3',
          title: 'MessageStatus',
          'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
        }),
      status_code_class: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([
                z.literal(0),
                z.literal(100),
                z.literal(200),
                z.literal(300),
                z.literal(400),
                z.literal(500),
              ]),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status_code_class',
            required: false,
            schema: {
              description:
                'The different classes of HTTP status codes:\n- CodeNone = 0\n- Code1xx = 100\n- Code2xx = 200\n- Code3xx = 300\n- Code4xx = 400\n- Code5xx = 500',
              enum: [0, 100, 200, 300, 400, 500],
              title: 'StatusCodeClass',
              type: 'integer',
              'x-enum-varnames': [
                'CodeNone',
                'Code1xx',
                'Code2xx',
                'Code3xx',
                'Code4xx',
                'Code5xx',
              ],
              nullable: true,
            },
          },
          description:
            'The different classes of HTTP status codes:\n- CodeNone = 0\n- Code1xx = 100\n- Code2xx = 200\n- Code3xx = 300\n- Code4xx = 400\n- Code5xx = 500',
          title: 'StatusCodeClass',
          'x-enum-varnames': ['CodeNone', 'Code1xx', 'Code2xx', 'Code3xx', 'Code4xx', 'Code5xx'],
        }),
      event_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^[a-zA-Z0-9\-_.]+$/)
              .max(256)
              .openapi({ example: 'user.signup' }),
          ),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'event_types',
            required: false,
            schema: {
              items: {
                example: 'user.signup',
                maxLength: 256,
                pattern: '^[a-zA-Z0-9\\-_.]+$',
                type: 'string',
              },
              nullable: true,
              title: 'Event Types',
              type: 'array',
            },
          },
          title: 'Event Types',
        }),
      channel: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'channel',
            required: false,
            schema: {
              example: 'project_1337',
              maxLength: 128,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Channel',
              type: 'string',
            },
          },
          example: 'project_1337',
          title: 'Channel',
        }),
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'before',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'Before', type: 'string' },
          },
          title: 'Before',
        }),
      after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'after',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'After', type: 'string' },
          },
          title: 'After',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListResponseMessageAttemptOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdAttemptMsgMsgIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/attempt/msg/{msg_id}/',
  tags: ['Message Attempt'],
  summary: 'List Attempts By Msg',
  description: 'List attempts by message id',
  operationId: 'list_attempts_by_msg_api_v1_app__app_id__attempt_msg__msg_id___get',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
      msg_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'msg_id',
            required: true,
            schema: {
              description: "The message's ID or eventID",
              example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Msg Id',
              type: 'string',
            },
          },
          description: "The message's ID or eventID",
          example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Msg Id',
        }),
    }),
    query: z.object({
      endpoint_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .min(1)
          .max(256)
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endpoint_id',
            required: false,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iterator',
            required: false,
            schema: {
              example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              title: 'Iterator',
              type: 'string',
            },
          },
          example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Iterator',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(250),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, maximum: 250, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      status: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              description:
                'The sending status of the message:\n- Success = 0\n- Pending = 1\n- Fail = 2\n- Sending = 3',
              enum: [0, 1, 2, 3],
              title: 'MessageStatus',
              type: 'integer',
              'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
              nullable: true,
            },
          },
          description:
            'The sending status of the message:\n- Success = 0\n- Pending = 1\n- Fail = 2\n- Sending = 3',
          title: 'MessageStatus',
          'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
        }),
      status_code_class: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([
                z.literal(0),
                z.literal(100),
                z.literal(200),
                z.literal(300),
                z.literal(400),
                z.literal(500),
              ]),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status_code_class',
            required: false,
            schema: {
              description:
                'The different classes of HTTP status codes:\n- CodeNone = 0\n- Code1xx = 100\n- Code2xx = 200\n- Code3xx = 300\n- Code4xx = 400\n- Code5xx = 500',
              enum: [0, 100, 200, 300, 400, 500],
              title: 'StatusCodeClass',
              type: 'integer',
              'x-enum-varnames': [
                'CodeNone',
                'Code1xx',
                'Code2xx',
                'Code3xx',
                'Code4xx',
                'Code5xx',
              ],
              nullable: true,
            },
          },
          description:
            'The different classes of HTTP status codes:\n- CodeNone = 0\n- Code1xx = 100\n- Code2xx = 200\n- Code3xx = 300\n- Code4xx = 400\n- Code5xx = 500',
          title: 'StatusCodeClass',
          'x-enum-varnames': ['CodeNone', 'Code1xx', 'Code2xx', 'Code3xx', 'Code4xx', 'Code5xx'],
        }),
      event_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^[a-zA-Z0-9\-_.]+$/)
              .max(256)
              .openapi({ example: 'user.signup' }),
          ),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'event_types',
            required: false,
            schema: {
              items: {
                example: 'user.signup',
                maxLength: 256,
                pattern: '^[a-zA-Z0-9\\-_.]+$',
                type: 'string',
              },
              nullable: true,
              title: 'Event Types',
              type: 'array',
            },
          },
          title: 'Event Types',
        }),
      channel: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'channel',
            required: false,
            schema: {
              example: 'project_1337',
              maxLength: 128,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Channel',
              type: 'string',
            },
          },
          example: 'project_1337',
          title: 'Channel',
        }),
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'before',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'Before', type: 'string' },
          },
          title: 'Before',
        }),
      after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'after',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'After', type: 'string' },
          },
          title: 'After',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListResponseMessageAttemptOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdEndpointIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/endpoint/',
  tags: ['Endpoint'],
  summary: 'List Endpoints',
  description: "List the application's endpoints.",
  operationId: 'list_endpoints_api_v1_app__app_id__endpoint__get',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    query: z.object({
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iterator',
            required: false,
            schema: {
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              title: 'Iterator',
              type: 'string',
            },
          },
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Iterator',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(250),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, maximum: 250, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      order: OrderingSchema.default('descending')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            required: false,
            schema: { allOf: [{ $ref: '#/components/schemas/Ordering' }], default: 'descending' },
          },
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListResponseEndpointOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postApiV1AppAppIdEndpointIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/endpoint/',
  tags: ['Endpoint'],
  summary: 'Create Endpoint',
  description:
    'Create a new endpoint for the application.\n\nWhen `secret` is `null` the secret is automatically generated (recommended)',
  operationId: 'create_endpoint_api_v1_app__app_id__endpoint__post',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: { content: { 'application/json': { schema: EndpointInSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EndpointOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdEndpointEndpointIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/',
  tags: ['Endpoint'],
  summary: 'Get Endpoint',
  description: 'Get an application.',
  operationId: 'get_endpoint_api_v1_app__app_id__endpoint__endpoint_id___get',
  request: {
    params: z.object({
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EndpointOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putApiV1AppAppIdEndpointEndpointIdIndexRoute = createRoute({
  method: 'put',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/',
  tags: ['Endpoint'],
  summary: 'Update Endpoint',
  description: 'Update an endpoint.',
  operationId: 'update_endpoint_api_v1_app__app_id__endpoint__endpoint_id___put',
  request: {
    params: z.object({
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: { content: { 'application/json': { schema: EndpointUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EndpointOutSchema } },
    },
    201: { description: 'Created', content: { 'application/json': { schema: EndpointOutSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteApiV1AppAppIdEndpointEndpointIdIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/',
  tags: ['Endpoint'],
  summary: 'Delete Endpoint',
  description: 'Delete an endpoint.',
  operationId: 'delete_endpoint_api_v1_app__app_id__endpoint__endpoint_id___delete',
  request: {
    params: z.object({
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers/',
  tags: ['Endpoint'],
  summary: 'Get Endpoint Headers',
  description: 'Get the additional headers to be sent with the webhook',
  operationId: 'get_endpoint_headers_api_v1_app__app_id__endpoint__endpoint_id__headers__get',
  request: {
    params: z.object({
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EndpointHeadersOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute = createRoute({
  method: 'put',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers/',
  tags: ['Endpoint'],
  summary: 'Update Endpoint Headers',
  description: 'Set the additional headers to be sent with the webhook',
  operationId: 'update_endpoint_headers_api_v1_app__app_id__endpoint__endpoint_id__headers__put',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: { content: { 'application/json': { schema: EndpointHeadersInSchema } }, required: true },
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const patchApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute = createRoute({
  method: 'patch',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers/',
  tags: ['Endpoint'],
  summary: 'Patch Endpoint Headers',
  description: 'Partially set the additional headers to be sent with the webhook',
  operationId: 'patch_endpoint_headers_api_v1_app__app_id__endpoint__endpoint_id__headers__patch',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: {
      content: { 'application/json': { schema: EndpointHeadersPatchInSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdEndpointEndpointIdMsgIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/msg/',
  tags: ['Message Attempt'],
  summary: 'List Attempted Messages',
  description:
    'List messages for a particular endpoint. Additionally includes metadata about the latest message attempt.\n\nThe `before` parameter lets you filter all items created before a certain date and is ignored if an iterator is passed.',
  operationId: 'list_attempted_messages_api_v1_app__app_id__endpoint__endpoint_id__msg__get',
  request: {
    params: z.object({
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    query: z.object({
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iterator',
            required: false,
            schema: {
              example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              title: 'Iterator',
              type: 'string',
            },
          },
          example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Iterator',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(250),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, maximum: 250, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      channel: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'channel',
            required: false,
            schema: {
              example: 'project_1337',
              maxLength: 128,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Channel',
              type: 'string',
            },
          },
          example: 'project_1337',
          title: 'Channel',
        }),
      status: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              description:
                'The sending status of the message:\n- Success = 0\n- Pending = 1\n- Fail = 2\n- Sending = 3',
              enum: [0, 1, 2, 3],
              title: 'MessageStatus',
              type: 'integer',
              'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
              nullable: true,
            },
          },
          description:
            'The sending status of the message:\n- Success = 0\n- Pending = 1\n- Fail = 2\n- Sending = 3',
          title: 'MessageStatus',
          'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
        }),
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'before',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'Before', type: 'string' },
          },
          title: 'Before',
        }),
      after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'after',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'After', type: 'string' },
          },
          title: 'After',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListResponseEndpointMessageOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postApiV1AppAppIdEndpointEndpointIdRecoverIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/recover/',
  tags: ['Endpoint'],
  summary: 'Recover Failed Webhooks',
  description: 'Resend all failed messages since a given time.',
  operationId: 'recover_failed_webhooks_api_v1_app__app_id__endpoint__endpoint_id__recover__post',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: { content: { 'application/json': { schema: RecoverInSchema } }, required: true },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: RecoverOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postApiV1AppAppIdEndpointEndpointIdReplayMissingIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/replay-missing/',
  tags: ['Endpoint'],
  summary: 'Replay Missing Webhooks',
  description:
    'Replays messages to the endpoint. Only messages that were created after `since` will be sent. Messages that were previously sent to the endpoint are not resent.',
  operationId:
    'replay_missing_webhooks_api_v1_app__app_id__endpoint__endpoint_id__replay_missing__post',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: { content: { 'application/json': { schema: ReplayInSchema } }, required: true },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ReplayOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdEndpointEndpointIdSecretIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret/',
  tags: ['Endpoint'],
  summary: 'Get Endpoint Secret',
  description:
    "Get the endpoint's signing secret.\n\nThis is used to verify the authenticity of the webhook.\nFor more information please refer to [the consuming webhooks docs](https://docs.svix.com/consuming-webhooks/).",
  operationId: 'get_endpoint_secret_api_v1_app__app_id__endpoint__endpoint_id__secret__get',
  request: {
    params: z.object({
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EndpointSecretOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postApiV1AppAppIdEndpointEndpointIdSecretRotateIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret/rotate/',
  tags: ['Endpoint'],
  summary: 'Rotate Endpoint Secret',
  description:
    "Rotates the endpoint's signing secret.  The previous secret will be valid for the next 24 hours.",
  operationId:
    'rotate_endpoint_secret_api_v1_app__app_id__endpoint__endpoint_id__secret_rotate__post',
  request: {
    params: z.object({
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: {
      content: { 'application/json': { schema: EndpointSecretRotateInSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdEndpointEndpointIdStatsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/stats/',
  tags: ['Endpoint'],
  summary: 'Get Endpoint Stats',
  description: 'Get basic statistics for the endpoint.',
  operationId: 'get_endpoint_stats_api_v1_app__app_id__endpoint__endpoint_id__stats__get',
  request: {
    params: z.object({
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    query: z.object({
      since: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'Since', type: 'string' },
          },
          title: 'Since',
        }),
      until: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'Until', type: 'string' },
          },
          title: 'Until',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EndpointStatsSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdEndpointEndpointIdTransformationIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation/',
  tags: ['Endpoint'],
  summary: 'Get Endpoint Transformation',
  description: 'Get the transformation code associated with this endpoint',
  operationId:
    'get_endpoint_transformation_api_v1_app__app_id__endpoint__endpoint_id__transformation__get',
  request: {
    params: z.object({
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EndpointTransformationOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const patchApiV1AppAppIdEndpointEndpointIdTransformationIndexRoute = createRoute({
  method: 'patch',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation/',
  tags: ['Endpoint'],
  summary: 'Set Endpoint Transformation',
  description: 'Set or unset the transformation code associated with this endpoint',
  operationId:
    'set_endpoint_transformation_api_v1_app__app_id__endpoint__endpoint_id__transformation__patch',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: {
      content: { 'application/json': { schema: EndpointTransformationInSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdIntegrationIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/integration/',
  tags: ['Integration'],
  summary: 'List Integrations',
  description: "List the application's integrations.",
  operationId: 'list_integrations_api_v1_app__app_id__integration__get',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    query: z.object({
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iterator',
            required: false,
            schema: {
              example: 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              title: 'Iterator',
              type: 'string',
            },
          },
          example: 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Iterator',
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
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListResponseIntegrationOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postApiV1AppAppIdIntegrationIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/integration/',
  tags: ['Integration'],
  summary: 'Create Integration',
  description: 'Create an integration.',
  operationId: 'create_integration_api_v1_app__app_id__integration__post',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: { content: { 'application/json': { schema: IntegrationInSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: IntegrationOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdIntegrationIntegIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/integration/{integ_id}/',
  tags: ['Integration'],
  summary: 'Get Integration',
  description: 'Get an integration.',
  operationId: 'get_integration_api_v1_app__app_id__integration__integ_id___get',
  request: {
    params: z.object({
      integ_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'integ_id',
            required: true,
            schema: {
              example: 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              title: 'Integ Id',
              type: 'string',
            },
          },
          example: 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Integ Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: IntegrationOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putApiV1AppAppIdIntegrationIntegIdIndexRoute = createRoute({
  method: 'put',
  path: '/api/v1/app/{app_id}/integration/{integ_id}/',
  tags: ['Integration'],
  summary: 'Update Integration',
  description: 'Update an integration.',
  operationId: 'update_integration_api_v1_app__app_id__integration__integ_id___put',
  request: {
    params: z.object({
      integ_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'integ_id',
            required: true,
            schema: {
              example: 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              title: 'Integ Id',
              type: 'string',
            },
          },
          example: 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Integ Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: { content: { 'application/json': { schema: IntegrationUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: IntegrationOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteApiV1AppAppIdIntegrationIntegIdIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/app/{app_id}/integration/{integ_id}/',
  tags: ['Integration'],
  summary: 'Delete Integration',
  description: "Delete an integration and revoke it's key.",
  operationId: 'delete_integration_api_v1_app__app_id__integration__integ_id___delete',
  request: {
    params: z.object({
      integ_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'integ_id',
            required: true,
            schema: {
              example: 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              title: 'Integ Id',
              type: 'string',
            },
          },
          example: 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Integ Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdIntegrationIntegIdKeyIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/integration/{integ_id}/key/',
  tags: ['Integration'],
  summary: 'Get Integration Key',
  description: "Get an integration's key.",
  operationId: 'get_integration_key_api_v1_app__app_id__integration__integ_id__key__get',
  request: {
    params: z.object({
      integ_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'integ_id',
            required: true,
            schema: {
              example: 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              title: 'Integ Id',
              type: 'string',
            },
          },
          example: 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Integ Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: IntegrationKeyOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postApiV1AppAppIdIntegrationIntegIdKeyRotateIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/integration/{integ_id}/key/rotate/',
  tags: ['Integration'],
  summary: 'Rotate Integration Key',
  description: "Rotate the integration's key. The previous key will be immediately revoked.",
  operationId: 'rotate_integration_key_api_v1_app__app_id__integration__integ_id__key_rotate__post',
  request: {
    params: z.object({
      integ_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'integ_id',
            required: true,
            schema: {
              example: 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              title: 'Integ Id',
              type: 'string',
            },
          },
          example: 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Integ Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: IntegrationKeyOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdMsgIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/msg/',
  tags: ['Message'],
  summary: 'List Messages',
  description:
    "List all of the application's messages.\n\nThe `before` parameter lets you filter all items created before a certain date and is ignored if an iterator is passed.\nThe `after` parameter lets you filter all items created after a certain date and is ignored if an iterator is passed.\n`before` and `after` cannot be used simultaneously.",
  operationId: 'list_messages_api_v1_app__app_id__msg__get',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    query: z.object({
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iterator',
            required: false,
            schema: {
              example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              title: 'Iterator',
              type: 'string',
            },
          },
          example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Iterator',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(250),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, maximum: 250, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      event_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^[a-zA-Z0-9\-_.]+$/)
              .max(256)
              .openapi({ example: 'user.signup' }),
          ),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'event_types',
            required: false,
            schema: {
              items: {
                example: 'user.signup',
                maxLength: 256,
                pattern: '^[a-zA-Z0-9\\-_.]+$',
                type: 'string',
              },
              nullable: true,
              title: 'Event Types',
              type: 'array',
            },
          },
          title: 'Event Types',
        }),
      channel: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'channel',
            required: false,
            schema: {
              example: 'project_1337',
              maxLength: 128,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Channel',
              type: 'string',
            },
          },
          example: 'project_1337',
          title: 'Channel',
        }),
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'before',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'Before', type: 'string' },
          },
          title: 'Before',
        }),
      after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'after',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'After', type: 'string' },
          },
          title: 'After',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListResponseMessageOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postApiV1AppAppIdMsgIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/msg/',
  tags: ['Message'],
  summary: 'Create Message',
  description:
    "Creates a new message and dispatches it to all of the application's endpoints.\n\nThe `eventId` is an optional custom unique ID. It's verified to be unique only up to a day, after that no verification will be made.\nIf a message with the same `eventId` already exists for any application in your environment, a 409 conflict error will be returned.\n\nThe `eventType` indicates the type and schema of the event. All messages of a certain `eventType` are expected to have the same schema. Endpoints can choose to only listen to specific event types.\nMessages can also have `channels`, which similar to event types let endpoints filter by them. Unlike event types, messages can have multiple channels, and channels don't imply a specific message content or schema.\n\nThe `payload` property is the webhook's body (the actual webhook message). Svix supports payload sizes of up to ~350kb, though it's generally a good idea to keep webhook payloads small, probably no larger than 40kb.\n\nThe optional `application` property will be used to create an application if the application referenced in the path does not exist. If it does then this property is ignored.",
  operationId: 'create_message_api_v1_app__app_id__msg__post',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    query: z.object({
      with_content: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'with_content',
            required: false,
            schema: { default: true, title: 'With Content', type: 'boolean' },
          },
          title: 'With Content',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: { content: { 'application/json': { schema: MessageInSchema } }, required: true },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: MessageOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    413: {
      description: 'Request Entity Too Large',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdMsgMsgIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/msg/{msg_id}/',
  tags: ['Message'],
  summary: 'Get Message',
  description: 'Get a message by its ID or eventID.',
  operationId: 'get_message_api_v1_app__app_id__msg__msg_id___get',
  request: {
    params: z.object({
      msg_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'msg_id',
            required: true,
            schema: {
              description: "The message's ID or eventID",
              example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Msg Id',
              type: 'string',
            },
          },
          description: "The message's ID or eventID",
          example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Msg Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: MessageOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdMsgMsgIdAttemptIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/msg/{msg_id}/attempt/',
  tags: ['Message Attempt'],
  summary: 'List Attempts',
  description:
    'Deprecated: Please use "List Attempts by Endpoint" and "List Attempts by Msg" instead.\n\n`msg_id`: Use a message id or a message `eventId`',
  operationId: 'list_attempts_api_v1_app__app_id__msg__msg_id__attempt__get',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
      msg_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'msg_id',
            required: true,
            schema: {
              description: "The message's ID or eventID",
              example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Msg Id',
              type: 'string',
            },
          },
          description: "The message's ID or eventID",
          example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Msg Id',
        }),
    }),
    query: z.object({
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iterator',
            required: false,
            schema: {
              example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              title: 'Iterator',
              type: 'string',
            },
          },
          example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Iterator',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(250),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, maximum: 250, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      endpoint_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .min(1)
          .max(256)
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endpoint_id',
            required: false,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
      event_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^[a-zA-Z0-9\-_.]+$/)
              .max(256)
              .openapi({ example: 'user.signup' }),
          ),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'event_types',
            required: false,
            schema: {
              items: {
                example: 'user.signup',
                maxLength: 256,
                pattern: '^[a-zA-Z0-9\\-_.]+$',
                type: 'string',
              },
              nullable: true,
              title: 'Event Types',
              type: 'array',
            },
          },
          title: 'Event Types',
        }),
      channel: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'channel',
            required: false,
            schema: {
              example: 'project_1337',
              maxLength: 128,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Channel',
              type: 'string',
            },
          },
          example: 'project_1337',
          title: 'Channel',
        }),
      status: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              description:
                'The sending status of the message:\n- Success = 0\n- Pending = 1\n- Fail = 2\n- Sending = 3',
              enum: [0, 1, 2, 3],
              title: 'MessageStatus',
              type: 'integer',
              'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
              nullable: true,
            },
          },
          description:
            'The sending status of the message:\n- Success = 0\n- Pending = 1\n- Fail = 2\n- Sending = 3',
          title: 'MessageStatus',
          'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
        }),
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'before',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'Before', type: 'string' },
          },
          title: 'Before',
        }),
      after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'after',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'After', type: 'string' },
          },
          title: 'After',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListResponseMessageAttemptOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  deprecated: true,
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/',
  tags: ['Message Attempt'],
  summary: 'Get Attempt',
  description: '`msg_id`: Use a message id or a message `eventId`',
  operationId: 'get_attempt_api_v1_app__app_id__msg__msg_id__attempt__attempt_id___get',
  request: {
    params: z.object({
      attempt_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'attempt_id',
            required: true,
            schema: {
              example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              title: 'Attempt Id',
              type: 'string',
            },
          },
          example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Attempt Id',
        }),
      msg_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'msg_id',
            required: true,
            schema: {
              description: "The message's ID or eventID",
              example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Msg Id',
              type: 'string',
            },
          },
          description: "The message's ID or eventID",
          example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Msg Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: MessageAttemptOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/content/',
  tags: ['Message Attempt'],
  summary: 'Delete attempt response body',
  description:
    "Deletes the given attempt's response body. Useful when an endpoint accidentally returned sensitive content.",
  operationId:
    'expunge_attempt_content_api_v1_app__app_id__msg__msg_id__attempt__attempt_id__content__delete',
  request: {
    params: z.object({
      attempt_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'attempt_id',
            required: true,
            schema: {
              example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              title: 'Attempt Id',
              type: 'string',
            },
          },
          example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Attempt Id',
        }),
      msg_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'msg_id',
            required: true,
            schema: {
              description: "The message's ID or eventID",
              example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Msg Id',
              type: 'string',
            },
          },
          description: "The message's ID or eventID",
          example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Msg Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteApiV1AppAppIdMsgMsgIdContentIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/app/{app_id}/msg/{msg_id}/content/',
  tags: ['Message'],
  summary: 'Delete message payload',
  description:
    "Delete the given message's payload. Useful in cases when a message was accidentally sent with sensitive content.\n\nThe message can't be replayed or resent once its payload has been deleted or expired.",
  operationId: 'expunge_message_payload_api_v1_app__app_id__msg__msg_id__content__delete',
  request: {
    params: z.object({
      msg_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'msg_id',
            required: true,
            schema: {
              description: "The message's ID or eventID",
              example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Msg Id',
              type: 'string',
            },
          },
          description: "The message's ID or eventID",
          example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Msg Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdMsgMsgIdEndpointIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/msg/{msg_id}/endpoint/',
  tags: ['Message Attempt'],
  summary: 'List Attempted Destinations',
  description: '`msg_id`: Use a message id or a message `eventId`',
  operationId: 'list_attempted_destinations_api_v1_app__app_id__msg__msg_id__endpoint__get',
  request: {
    params: z.object({
      msg_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'msg_id',
            required: true,
            schema: {
              description: "The message's ID or eventID",
              example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Msg Id',
              type: 'string',
            },
          },
          description: "The message's ID or eventID",
          example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Msg Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    query: z.object({
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iterator',
            required: false,
            schema: {
              example: 'msgep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              title: 'Iterator',
              type: 'string',
            },
          },
          example: 'msgep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Iterator',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(250),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, maximum: 250, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListResponseMessageEndpointOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/attempt/',
  tags: ['Message Attempt'],
  summary: 'List Attempts For Endpoint',
  description:
    'DEPRECATED: please use list_attempts with endpoint_id as a query parameter instead.\n\nList the message attempts for a particular endpoint.\n\nReturning the endpoint.\n\nThe `before` parameter lets you filter all items created before a certain date and is ignored if an iterator is passed.',
  operationId:
    'list_attempts_for_endpoint_api_v1_app__app_id__msg__msg_id__endpoint__endpoint_id__attempt__get',
  request: {
    params: z.object({
      msg_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'msg_id',
            required: true,
            schema: {
              description: "The message's ID or eventID",
              example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Msg Id',
              type: 'string',
            },
          },
          description: "The message's ID or eventID",
          example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Msg Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
    }),
    query: z.object({
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iterator',
            required: false,
            schema: {
              example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              title: 'Iterator',
              type: 'string',
            },
          },
          example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Iterator',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(250),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, maximum: 250, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      event_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^[a-zA-Z0-9\-_.]+$/)
              .max(256)
              .openapi({ example: 'user.signup' }),
          ),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'event_types',
            required: false,
            schema: {
              items: {
                example: 'user.signup',
                maxLength: 256,
                pattern: '^[a-zA-Z0-9\\-_.]+$',
                type: 'string',
              },
              nullable: true,
              title: 'Event Types',
              type: 'array',
            },
          },
          title: 'Event Types',
        }),
      channel: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'channel',
            required: false,
            schema: {
              example: 'project_1337',
              maxLength: 128,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Channel',
              type: 'string',
            },
          },
          example: 'project_1337',
          title: 'Channel',
        }),
      status: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              description:
                'The sending status of the message:\n- Success = 0\n- Pending = 1\n- Fail = 2\n- Sending = 3',
              enum: [0, 1, 2, 3],
              title: 'MessageStatus',
              type: 'integer',
              'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
              nullable: true,
            },
          },
          description:
            'The sending status of the message:\n- Success = 0\n- Pending = 1\n- Fail = 2\n- Sending = 3',
          title: 'MessageStatus',
          'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
        }),
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'before',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'Before', type: 'string' },
          },
          title: 'Before',
        }),
      after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'after',
            required: false,
            schema: { format: 'date-time', nullable: true, title: 'After', type: 'string' },
          },
          title: 'After',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListResponseMessageAttemptEndpointOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  deprecated: true,
  security: [{ HTTPBearer: [] }],
})

export const postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/resend/',
  tags: ['Message Attempt'],
  summary: 'Resend Webhook',
  description: 'Resend a message to the specified endpoint.',
  operationId:
    'resend_webhook_api_v1_app__app_id__msg__msg_id__endpoint__endpoint_id__resend__post',
  request: {
    params: z.object({
      endpoint_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'endpoint_id',
            required: true,
            schema: {
              description: "The endpoint's ID or UID",
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Endpoint Id',
              type: 'string',
            },
          },
          description: "The endpoint's ID or UID",
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Endpoint Id',
        }),
      msg_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'msg_id',
            required: true,
            schema: {
              description: "The message's ID or eventID",
              example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Msg Id',
              type: 'string',
            },
          },
          description: "The message's ID or eventID",
          example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Msg Id',
        }),
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    202: { description: 'Successful Response' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postApiV1AuthAppPortalAccessAppIdIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/auth/app-portal-access/{app_id}/',
  tags: ['Authentication'],
  summary: 'Get Consumer App Portal Access',
  description:
    'Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.',
  operationId: 'get_app_portal_access_api_v1_auth_app_portal_access__app_id___post',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: { content: { 'application/json': { schema: AppPortalAccessInSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AppPortalAccessOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postApiV1AuthAppAppIdExpireAllIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/auth/app/{app_id}/expire-all/',
  tags: ['Authentication'],
  summary: 'Expire All',
  description: 'Expire all of the tokens associated with a specific Application',
  operationId: 'expire_all_api_v1_auth_app__app_id__expire_all__post',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ApplicationTokenExpireInSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postApiV1AuthDashboardAccessAppIdIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/auth/dashboard-access/{app_id}/',
  tags: ['Authentication'],
  summary: 'Get Dashboard Access',
  description:
    'DEPRECATED: Please use `app-portal-access` instead.\n\nUse this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.',
  operationId: 'get_dashboard_access_api_v1_auth_dashboard_access__app_id___post',
  request: {
    params: z.object({
      app_id: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'app_id',
            required: true,
            schema: {
              description: "The application's ID or UID",
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'App Id',
              type: 'string',
            },
          },
          description: "The application's ID or UID",
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'App Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DashboardAccessOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  deprecated: true,
  security: [{ HTTPBearer: [] }],
})

export const postApiV1AuthLogoutIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/auth/logout/',
  tags: ['Authentication'],
  summary: 'Logout',
  description: 'Logout an app token.\n\nTrying to log out other tokens will fail.',
  operationId: 'logout_api_v1_auth_logout__post',
  request: {
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1BackgroundTaskIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/background-task/',
  tags: ['Background Tasks'],
  summary: 'List Background Tasks',
  description: 'List background tasks executed in the past 90 days.',
  operationId: 'list_background_tasks_api_v1_background_task__get',
  request: {
    query: z.object({
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iterator',
            required: false,
            schema: {
              example: 'qtask_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              title: 'Iterator',
              type: 'string',
            },
          },
          example: 'qtask_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Iterator',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(250),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, maximum: 250, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      order: OrderingSchema.default('descending')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            required: false,
            schema: { allOf: [{ $ref: '#/components/schemas/Ordering' }], default: 'descending' },
          },
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListResponseBackgroundTaskOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
})

export const getApiV1BackgroundTaskTaskIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/background-task/{task_id}/',
  tags: ['Background Tasks'],
  summary: 'Get Background Task',
  description: 'Get a background task by ID.',
  operationId: 'get_background_task_api_v1_background_task__task_id___get',
  request: {
    params: z.object({
      task_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'task_id',
            required: true,
            schema: {
              example: 'qtask_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              title: 'Task Id',
              type: 'string',
            },
          },
          example: 'qtask_1srOrx2ZWZBpBUvZwXKQmoEYga2',
          title: 'Task Id',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BackgroundTaskOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
})

export const getApiV1EventTypeIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/event-type/',
  tags: ['Event Type'],
  summary: 'List Event Types',
  description: 'Return the list of event types.',
  operationId: 'list_event_types_api_v1_event_type__get',
  request: {
    query: z.object({
      iterator: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(256)
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iterator',
            required: false,
            schema: {
              example: 'user.signup',
              maxLength: 256,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Iterator',
              type: 'string',
            },
          },
          example: 'user.signup',
          title: 'Iterator',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(250),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 50, maximum: 250, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      with_content: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'with_content',
            required: false,
            schema: { default: false, title: 'With Content', type: 'boolean' },
          },
          title: 'With Content',
        }),
      include_archived: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include_archived',
            required: false,
            schema: { default: false, title: 'Include Archived', type: 'boolean' },
          },
          title: 'Include Archived',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListResponseEventTypeOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postApiV1EventTypeIndexRoute = createRoute({
  method: 'post',
  path: '/api/v1/event-type/',
  tags: ['Event Type'],
  summary: 'Create Event Type',
  description:
    'Create new or unarchive existing event type.\n\nUnarchiving an event type will allow endpoints to filter on it and messages to be sent with it.\nEndpoints filtering on the event type before archival will continue to filter on it.\nThis operation does not preserve the description and schemas.',
  operationId: 'create_event_type_api_v1_event_type__post',
  request: {
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: { content: { 'application/json': { schema: EventTypeInSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EventTypeOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1EventTypeEventTypeNameIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/event-type/{event_type_name}/',
  tags: ['Event Type'],
  summary: 'Get Event Type',
  description: 'Get an event type.',
  operationId: 'get_event_type_api_v1_event_type__event_type_name___get',
  request: {
    params: z.object({
      event_type_name: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'event_type_name',
            required: true,
            schema: {
              example: 'user.signup',
              maxLength: 256,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Event Type Name',
              type: 'string',
            },
          },
          example: 'user.signup',
          title: 'Event Type Name',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EventTypeOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putApiV1EventTypeEventTypeNameIndexRoute = createRoute({
  method: 'put',
  path: '/api/v1/event-type/{event_type_name}/',
  tags: ['Event Type'],
  summary: 'Update Event Type',
  description: 'Update an event type.',
  operationId: 'update_event_type_api_v1_event_type__event_type_name___put',
  request: {
    params: z.object({
      event_type_name: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'event_type_name',
            required: true,
            schema: {
              example: 'user.signup',
              maxLength: 256,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Event Type Name',
              type: 'string',
            },
          },
          example: 'user.signup',
          title: 'Event Type Name',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
    body: { content: { 'application/json': { schema: EventTypeUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EventTypeOutSchema } },
    },
    201: {
      description: 'Created',
      content: { 'application/json': { schema: EventTypeOutSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteApiV1EventTypeEventTypeNameIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v1/event-type/{event_type_name}/',
  tags: ['Event Type'],
  summary: 'Archive Event Type',
  description:
    'Archive an event type.\n\nEndpoints already configured to filter on an event type will continue to do so after archival.\nHowever, new messages can not be sent with it and endpoints can not filter on it.\nAn event type can be unarchived with the\n[create operation](#operation/create_event_type_api_v1_event_type__post).\n\nIf `expunge=true` is set then the event type is deleted instead of archived.\nThis can only be used in development environments.',
  operationId: 'delete_event_type_api_v1_event_type__event_type_name___delete',
  request: {
    params: z.object({
      event_type_name: z
        .string()
        .regex(/^[a-zA-Z0-9\-_.]+$/)
        .max(256)
        .openapi({
          param: {
            in: 'path',
            name: 'event_type_name',
            required: true,
            schema: {
              example: 'user.signup',
              maxLength: 256,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              title: 'Event Type Name',
              type: 'string',
            },
          },
          example: 'user.signup',
          title: 'Event Type Name',
        }),
    }),
    query: z.object({
      expunge: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'expunge',
            required: false,
            schema: { default: false, title: 'Expunge', type: 'boolean' },
          },
          title: 'Expunge',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: HttpErrorOutSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getApiV1HealthIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/health/',
  tags: ['Health'],
  summary: 'Health',
  description: 'Verify the API server is up and running.',
  operationId: 'health_api_v1_health__get',
  request: {
    headers: z.object({
      'idempotency-key': z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            required: false,
            schema: {
              description: "The request's idempotency key",
              nullable: true,
              title: 'Idempotency-Key',
              type: 'string',
            },
          },
          description: "The request's idempotency key",
          title: 'Idempotency-Key',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})
