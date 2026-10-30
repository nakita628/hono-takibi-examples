import { createRoute, z } from '@hono/zod-openapi'

const ApplicationInSchema = z
  .object({
    metadata: z.record(z.string(), z.string()).default({}).exactOptional(),
    name: z.string().min(1).openapi({ example: 'My first application' }),
    throttleRate: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Maximum messages per second to send to this application's endpoints.\n\nOutgoing messages will be throttled to this rate.",
      }),
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
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('ApplicationIn')

const AppPortalAccessInSchema = z
  .object({
    application: ApplicationInSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Optionally creates a new application alongside the message.\n\nIf the application id or uid that is used in the path already exists, this argument is ignored.',
      }),
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
      .exactOptional()
      .openapi({
        description: 'The set of feature flags the created token will have access to.',
        example: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('AppPortalAccessIn')

const AppPortalAccessOutSchema = z
  .object({
    token: z.string().openapi({ example: 'appsk_kV3ts5tKPNJN4Dl25cMTfUNdmabxbX0O' }),
    url: z
      .url()
      .min(1)
      .max(65536)
      .openapi({ example: 'https://app.svix.com/login#key=eyJhcHBJZCI6ICJhcHBfMXRSdFl' }),
  })
  .openapi({ required: ['token', 'url'] })
  .openapi('AppPortalAccessOut')

const ApplicationOutSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }),
    id: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    metadata: z.record(z.string(), z.string()),
    name: z.string().openapi({ example: 'My first application' }),
    throttleRate: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Maximum messages per second to send to this application's endpoints.\n\nOutgoing messages will be throttled to this rate.",
      }),
    uid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-app-identifier' }),
    updatedAt: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['createdAt', 'id', 'metadata', 'name', 'updatedAt'] })
  .openapi('ApplicationOut')

const ApplicationPatchSchema = z
  .object({
    metadata: z.record(z.string(), z.string()).exactOptional(),
    name: z.string().exactOptional(),
    throttleRate: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Maximum messages per second to send to this application's endpoints.\n\nOutgoing messages will be throttled to this rate.",
      }),
    uid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-app-identifier' }),
  })
  .openapi({ required: [] })
  .openapi('ApplicationPatch')

const BackgroundTaskStatusSchema = z.literal('running').openapi('BackgroundTaskStatus')

const BackgroundTaskTypeSchema = z.literal('endpoint.recover').openapi('BackgroundTaskType')

const BulkExpungeContentsInSchema = z
  .object({
    ids: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .min(1)
          .max(256)
          .openapi({ example: 'unique-msg-identifier' }),
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
      .openapi({ description: 'Message ID or UID to delete' }),
  })
  .openapi({ required: [] })
  .openapi('BulkExpungeContentsIn')

const BulkExpungeStatusSchema = z.enum(['expunged', 'not-found']).openapi('BulkExpungeStatus')

const BulkExpungeContentsOutSchema = z
  .object({
    results: z
      .record(z.string(), BulkExpungeStatusSchema)
      .openapi({ description: 'Results of expunging (by ID)' }),
  })
  .openapi({ required: ['results'] })
  .openapi('BulkExpungeContentsOut')

const EmptyResponseSchema = z.object({}).openapi('EmptyResponse')

const EndpointCreatedEventDataSchema = z
  .object({
    appId: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    appUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-app-identifier' }),
    endpointId: z.string().openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    endpointUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-ep-identifier' }),
  })
  .openapi({
    description: 'Sent when an endpoint is created, updated, or deleted',
    required: ['appId', 'endpointId'],
  })
  .openapi('EndpointCreatedEventData')

const EndpointCreatedEventSchema = z
  .object({
    data: EndpointCreatedEventDataSchema,
    type: z.literal('endpoint.created').default('endpoint.created'),
  })
  .openapi({ description: 'Sent when an endpoint is created.', required: ['data', 'type'] })
  .openapi('EndpointCreatedEvent')

const EndpointDeletedEventDataSchema = z
  .object({
    appId: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    appUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-app-identifier' }),
    endpointId: z.string().openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    endpointUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-ep-identifier' }),
  })
  .openapi({
    description: 'Sent when an endpoint is created, updated, or deleted',
    required: ['appId', 'endpointId'],
  })
  .openapi('EndpointDeletedEventData')

const EndpointDeletedEventSchema = z
  .object({
    data: EndpointDeletedEventDataSchema,
    type: z.literal('endpoint.deleted').default('endpoint.deleted'),
  })
  .openapi({ description: 'Sent when an endpoint is deleted.', required: ['data', 'type'] })
  .openapi('EndpointDeletedEvent')

const EndpointDisabledEventDataSchema = z
  .object({
    appId: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    appUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-app-identifier' }),
    endpointId: z.string().openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    endpointUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-ep-identifier' }),
    failSince: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description: 'Sent when an endpoint has been automatically disabled after continuous failures.',
    required: ['appId', 'endpointId', 'failSince'],
  })
  .openapi('EndpointDisabledEventData')

const EndpointDisabledEventSchema = z
  .object({
    data: EndpointDisabledEventDataSchema,
    type: z.literal('endpoint.disabled').default('endpoint.disabled'),
  })
  .openapi({
    description: 'Sent when an endpoint has been automatically disabled after continuous failures.',
    required: ['data', 'type'],
  })
  .openapi('EndpointDisabledEvent')

const EndpointHeadersInSchema = z
  .object({
    headers: z
      .record(z.string(), z.string())
      .openapi({ example: { 'X-Example': '123', 'X-Foobar': 'Bar' } }),
  })
  .openapi({ required: ['headers'] })
  .openapi('EndpointHeadersIn')

const EndpointHeadersOutSchema = z
  .object({
    headers: z
      .record(z.string(), z.string())
      .openapi({ example: { 'X-Example': '123', 'X-Foobar': 'Bar' } }),
    sensitive: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ example: ['Authorization'] }),
  })
  .openapi({
    description:
      'The value of the headers is returned in the `headers` field.\n\nSensitive headers that have been redacted are returned in the sensitive field.',
    required: ['headers', 'sensitive'],
  })
  .openapi('EndpointHeadersOut')

const EndpointHeadersPatchInSchema = z
  .object({
    headers: z
      .record(z.string(), z.string().nullable())
      .openapi({ example: { 'X-Example': '123', 'X-Foobar': 'Bar' } }),
  })
  .openapi({ required: ['headers'] })
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
      }),
    description: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ example: 'An example endpoint name' }),
    disabled: z.boolean().default(false).exactOptional().openapi({ example: false }),
    eventTypes: z
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
      .openapi({ example: ['user.signup', 'user.deleted'] }),
    metadata: z.record(z.string(), z.string()).default({}).exactOptional(),
    secret: z
      .string()
      .regex(/^(whsec_)?[a-zA-Z0-9+\/=]{32,100}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24.",
        example: 'whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD',
      }),
    throttleRate: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum messages per second to send to this endpoint.\n\nOutgoing messages will be throttled to this rate.',
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
        example: 'unique-ep-identifier',
      }),
    url: z.url().min(1).max(65536).openapi({ example: 'https://example.com/webhook/' }),
  })
  .openapi({ required: ['url'] })
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

const MessageStatusTextSchema = z
  .enum(['success', 'pending', 'fail', 'sending'])
  .openapi('MessageStatusText')

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
        example: 'unique-msg-identifier',
      }),
    eventType: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .openapi({ example: 'user.signup' }),
    id: z.string().openapi({ example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    nextAttempt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    payload: z
      .object({})
      .openapi({ example: { email: 'test@example.com', username: 'test_user' } }),
    status: MessageStatusSchema,
    statusText: MessageStatusTextSchema,
    timestamp: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description:
      'A model containing information on a given message plus additional fields on the last attempt for that message.',
    required: ['eventType', 'id', 'payload', 'status', 'statusText', 'timestamp'],
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
      }),
    createdAt: z.iso.datetime({ offset: true }),
    description: z.string().openapi({ description: 'An example endpoint name' }),
    disabled: z.boolean().default(false).exactOptional().openapi({ example: false }),
    eventTypes: z
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
      .openapi({ example: ['user.signup', 'user.deleted'] }),
    expiry: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When the endpoint expires, if ever.\n\nThis field currently exists only for compatibility with the Svix Cloud API. If you want expiring endpoints in Svix Server OSS, please open an issue.',
      }),
    id: z.string().openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    metadata: z.record(z.string(), z.string()),
    throttleRate: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum messages per second to send to this endpoint.\n\nOutgoing messages will be throttled to this rate.',
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
        example: 'unique-ep-identifier',
      }),
    updatedAt: z.iso.datetime({ offset: true }),
    url: z.url().min(1).max(65536).openapi({ example: 'https://example.com/webhook/' }),
  })
  .openapi({ required: ['createdAt', 'description', 'id', 'metadata', 'updatedAt', 'url'] })
  .openapi('EndpointOut')

const EndpointPatchSchema = z
  .object({
    channels: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(128)
          .openapi({ example: 'project_1337' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional(),
    description: z.string().exactOptional(),
    disabled: z.boolean().exactOptional(),
    eventTypes: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9\-_.]+$/)
          .max(256)
          .openapi({ example: 'user.signup' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional(),
    metadata: z.record(z.string(), z.string()).exactOptional(),
    throttleRate: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum messages per second to send to this endpoint.\n\nOutgoing messages will be throttled to this rate.',
      }),
    uid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-ep-identifier' }),
    url: z.url().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPatch')

const EndpointSecretOutSchema = z
  .object({
    key: z
      .string()
      .regex(/^(whsec_)?[a-zA-Z0-9+\/=]{32,100}$/)
      .openapi({
        description:
          "The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24.",
        example: 'whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD',
      }),
  })
  .openapi({ required: ['key'] })
  .openapi('EndpointSecretOut')

const EndpointSecretRotateInSchema = z
  .object({
    gracePeriodSeconds: z
      .uint32()
      .min(0)
      .max(604800)
      .nullable()
      .default(86400)
      .exactOptional()
      .openapi({
        description:
          'How long the old secret will be valid for, in seconds.\n\nValid values are between 0 (immediate expiry) and 7 days. The default is 24 hours.',
      }),
    key: z
      .string()
      .regex(/^(whsec_)?[a-zA-Z0-9+\/=]{32,100}$/)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24.",
        example: 'whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD',
      }),
  })
  .openapi({ required: [] })
  .openapi('EndpointSecretRotateIn')

const EndpointStatsSchema = z
  .object({
    canceled: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    fail: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    pending: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    sending: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    success: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['canceled', 'fail', 'pending', 'sending', 'success'] })
  .openapi('EndpointStats')

const EndpointStatsRangeSchema = z
  .object({
    since: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    until: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointStatsRange')

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
      }),
    description: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ example: 'An example endpoint name' }),
    disabled: z.boolean().default(false).exactOptional().openapi({ example: false }),
    eventTypes: z
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
      .openapi({ example: ['user.signup', 'user.deleted'] }),
    metadata: z.record(z.string(), z.string()).default({}).exactOptional(),
    throttleRate: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum messages per second to send to this endpoint.\n\nOutgoing messages will be throttled to this rate.',
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
        example: 'unique-ep-identifier',
      }),
    url: z.url().min(1).max(65536).openapi({ example: 'https://example.com/webhook/' }),
  })
  .openapi({ required: ['url'] })
  .openapi('EndpointUpdate')

const EndpointUpdatedEventDataSchema = z
  .object({
    appId: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    appUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-app-identifier' }),
    endpointId: z.string().openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    endpointUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-ep-identifier' }),
  })
  .openapi({
    description: 'Sent when an endpoint is created, updated, or deleted',
    required: ['appId', 'endpointId'],
  })
  .openapi('EndpointUpdatedEventData')

const EndpointUpdatedEventSchema = z
  .object({
    data: EndpointUpdatedEventDataSchema,
    type: z.literal('endpoint.updated').default('endpoint.updated'),
  })
  .openapi({ description: 'Sent when an endpoint is updated.', required: ['data', 'type'] })
  .openapi('EndpointUpdatedEvent')

const EventExampleInSchema = z
  .object({
    eventType: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .openapi({ example: 'user.signup' }),
  })
  .openapi({ required: ['eventType'] })
  .openapi('EventExampleIn')

const EventTypeInSchema = z
  .object({
    archived: z.boolean().default(false).exactOptional().openapi({ example: false }),
    deprecated: z.boolean().default(false).exactOptional(),
    description: z.string().openapi({ example: 'A user has signed up' }),
    featureFlag: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'cool-new-feature' }),
    name: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .openapi({ example: 'user.signup' }),
    schemas: z
      .record(z.string(), z.object({}))
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
      }),
  })
  .openapi({ required: ['description', 'name'] })
  .openapi('EventTypeIn')

const EventTypeOutSchema = z
  .object({
    archived: z.boolean().default(false).exactOptional().openapi({ example: false }),
    createdAt: z.iso.datetime({ offset: true }),
    deprecated: z.boolean(),
    description: z.string().openapi({ example: 'A user has signed up' }),
    featureFlag: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'cool-new-feature' }),
    name: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .openapi({ example: 'user.signup' }),
    schemas: z
      .record(z.string(), z.object({}))
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
      }),
    updatedAt: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['createdAt', 'deprecated', 'description', 'name', 'updatedAt'] })
  .openapi('EventTypeOut')

const EventTypePatchSchema = z
  .object({
    archived: z.boolean().exactOptional(),
    deprecated: z.boolean().exactOptional(),
    description: z.string().exactOptional(),
    featureFlag: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'cool-new-feature' }),
    schemas: z
      .record(z.string(), z.object({}))
      .nullable()
      .exactOptional()
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
  })
  .openapi({ required: [] })
  .openapi('EventTypePatch')

const EventTypeUpdateSchema = z
  .object({
    archived: z.boolean().default(false).exactOptional().openapi({ example: false }),
    deprecated: z.boolean().default(false).exactOptional(),
    description: z.string().openapi({ example: 'A user has signed up' }),
    featureFlag: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'cool-new-feature' }),
    schemas: z
      .record(z.string(), z.object({}))
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
      }),
  })
  .openapi({ required: ['description'] })
  .openapi('EventTypeUpdate')

const ValidationErrorItemSchema = z
  .object({
    loc: z
      .array(z.string())
      .openapi({
        description:
          'The location as a [`Vec`] of [`String`]s -- often in the form `["body", "field_name"]`, `["query", "field_name"]`, etc. They may, however, be arbitrarily deep.',
      }),
    msg: z.string().openapi({ description: 'The message accompanying the validation error item.' }),
    type: z
      .string()
      .openapi({
        description:
          'The type of error, often "type_error" or "value_error", but sometimes with more context like as "value_error.number.not_ge"',
      }),
  })
  .openapi({
    description:
      'Validation errors have their own schema to provide context for invalid requests eg. mismatched types and out of bounds values. There may be any number of these per 422 UNPROCESSABLE ENTITY error.',
    required: ['loc', 'msg', 'type'],
  })
  .openapi('ValidationErrorItem')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorItemSchema) })
  .openapi({ required: ['detail'] })
  .openapi('HTTPValidationError')

const HttpErrorOutSchema = z
  .object({ code: z.string(), detail: z.string() })
  .openapi({ required: ['code', 'detail'], title: 'HttpError' })
  .openapi('HttpErrorOut')

const ListResponseApplicationOutSchema = z
  .object({
    data: z.array(ApplicationOutSchema),
    done: z.boolean(),
    iterator: z.string().nullable().exactOptional().openapi({ example: 'iterator' }),
    prevIterator: z.string().nullable().exactOptional().openapi({ example: '-iterator' }),
  })
  .openapi({ required: ['data', 'done'] })
  .openapi('ListResponseApplicationOut')

const ListResponseEndpointMessageOutSchema = z
  .object({
    data: z.array(EndpointMessageOutSchema),
    done: z.boolean(),
    iterator: z.string().nullable().exactOptional().openapi({ example: 'iterator' }),
    prevIterator: z.string().nullable().exactOptional().openapi({ example: '-iterator' }),
  })
  .openapi({ required: ['data', 'done'] })
  .openapi('ListResponseEndpointMessageOut')

const ListResponseEndpointOutSchema = z
  .object({
    data: z.array(EndpointOutSchema),
    done: z.boolean(),
    iterator: z.string().nullable().exactOptional().openapi({ example: 'iterator' }),
    prevIterator: z.string().nullable().exactOptional().openapi({ example: '-iterator' }),
  })
  .openapi({ required: ['data', 'done'] })
  .openapi('ListResponseEndpointOut')

const ListResponseEventTypeOutSchema = z
  .object({
    data: z.array(EventTypeOutSchema),
    done: z.boolean(),
    iterator: z.string().nullable().exactOptional().openapi({ example: 'iterator' }),
    prevIterator: z.string().nullable().exactOptional().openapi({ example: '-iterator' }),
  })
  .openapi({ required: ['data', 'done'] })
  .openapi('ListResponseEventTypeOut')

const MessageAttemptTriggerTypeSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'The reason an attempt was made:\n- Scheduled = 0\n- Manual = 1',
    title: 'MessageAttemptTriggerType',
    'x-enum-varnames': ['Scheduled', 'Manual'],
  })
  .openapi('MessageAttemptTriggerType')

const MessageAttemptOutSchema = z
  .object({
    endpointId: z.string().openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    id: z.string().openapi({ example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    msgId: z.string().openapi({ example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    response: z.string().openapi({ example: '{}' }),
    responseDurationMs: z
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
        description: 'Response duration in milliseconds.',
      }),
    responseStatusCode: z.int().openapi({ example: 200 }),
    status: MessageStatusSchema,
    statusText: MessageStatusTextSchema,
    timestamp: z.iso.datetime({ offset: true }),
    triggerType: MessageAttemptTriggerTypeSchema,
    url: z.url().min(1).max(65536).openapi({ example: 'https://example.com/webhook/' }),
  })
  .openapi({
    required: [
      'endpointId',
      'id',
      'msgId',
      'response',
      'responseDurationMs',
      'responseStatusCode',
      'status',
      'statusText',
      'timestamp',
      'triggerType',
      'url',
    ],
  })
  .openapi('MessageAttemptOut')

const ListResponseMessageAttemptOutSchema = z
  .object({
    data: z.array(MessageAttemptOutSchema),
    done: z.boolean(),
    iterator: z.string().nullable().exactOptional().openapi({ example: 'iterator' }),
    prevIterator: z.string().nullable().exactOptional().openapi({ example: '-iterator' }),
  })
  .openapi({ required: ['data', 'done'] })
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
      }),
    createdAt: z.iso.datetime({ offset: true }),
    description: z.string().openapi({ description: 'An example endpoint name' }),
    disabled: z.boolean().default(false).exactOptional().openapi({ example: false }),
    eventTypes: z
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
      .openapi({ example: ['user.signup', 'user.deleted'] }),
    expiry: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When the endpoint expires, if ever.\n\nThis field currently exists only for compatibility with the Svix Cloud API. If you want expiring endpoints in Svix Server OSS, please open an issue.',
      }),
    id: z.string().openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    nextAttempt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    status: MessageStatusSchema,
    statusText: MessageStatusTextSchema,
    throttleRate: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum messages per second to send to this endpoint.\n\nOutgoing messages will be throttled to this rate.',
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
        example: 'unique-ep-identifier',
      }),
    updatedAt: z.iso.datetime({ offset: true }),
    url: z.url().min(1).max(65536).openapi({ example: 'https://example.com/webhook/' }),
  })
  .openapi({
    required: ['createdAt', 'description', 'id', 'status', 'statusText', 'updatedAt', 'url'],
  })
  .openapi('MessageEndpointOut')

const ListResponseMessageEndpointOutSchema = z
  .object({
    data: z.array(MessageEndpointOutSchema),
    done: z.boolean(),
    iterator: z.string().nullable().exactOptional().openapi({ example: 'iterator' }),
    prevIterator: z.string().nullable().exactOptional().openapi({ example: '-iterator' }),
  })
  .openapi({ required: ['data', 'done'] })
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
        example: 'unique-msg-identifier',
      }),
    eventType: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .openapi({ example: 'user.signup' }),
    id: z.string().openapi({ example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    payload: z
      .object({})
      .openapi({ example: { email: 'test@example.com', username: 'test_user' } }),
    timestamp: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['eventType', 'id', 'payload', 'timestamp'] })
  .openapi('MessageOut')

const ListResponseMessageOutSchema = z
  .object({
    data: z.array(MessageOutSchema),
    done: z.boolean(),
    iterator: z.string().nullable().exactOptional().openapi({ example: 'iterator' }),
    prevIterator: z.string().nullable().exactOptional().openapi({ example: '-iterator' }),
  })
  .openapi({ required: ['data', 'done'] })
  .openapi('ListResponseMessageOut')

const MessageAttempetLastSchema = z
  .object({
    id: z.string().openapi({ example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    responseStatusCode: z.int(),
    timestamp: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['id', 'responseStatusCode', 'timestamp'] })
  .openapi('MessageAttempetLast')

const MessageAttemptExhaustedEventDataSchema = z
  .object({
    appId: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    appUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-app-identifier' }),
    endpointId: z.string().openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    lastAttempt: MessageAttempetLastSchema,
    msgEventId: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-msg-identifier' }),
    msgId: z.string().openapi({ example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
  })
  .openapi({
    description:
      'Sent when a message delivery has failed (all of the retry attempts have been exhausted) as a "message.attempt.exhausted" type or after it\'s failed four times as a "message.attempt.failing" event.',
    required: ['appId', 'endpointId', 'lastAttempt', 'msgId'],
  })
  .openapi('MessageAttemptExhaustedEventData')

const MessageAttemptExhaustedEventSchema = z
  .object({
    data: MessageAttemptExhaustedEventDataSchema,
    type: z.literal('message.attempt.exhausted').default('message.attempt.exhausted'),
  })
  .openapi({
    description:
      'Sent when a message delivery has failed (all of the retry attempts have been exhausted).',
    required: ['data', 'type'],
  })
  .openapi('MessageAttemptExhaustedEvent')

const MessageAttemptFailingEventDataSchema = z
  .object({
    appId: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    appUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-app-identifier' }),
    endpointId: z.string().openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    lastAttempt: MessageAttempetLastSchema,
    msgEventId: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-msg-identifier' }),
    msgId: z.string().openapi({ example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
  })
  .openapi({
    description:
      'Sent when a message delivery has failed (all of the retry attempts have been exhausted) as a "message.attempt.exhausted" type or after it\'s failed four times as a "message.attempt.failing" event.',
    required: ['appId', 'endpointId', 'lastAttempt', 'msgId'],
  })
  .openapi('MessageAttemptFailingEventData')

const MessageAttemptFailingEventSchema = z
  .object({
    data: MessageAttemptFailingEventDataSchema,
    type: z.literal('message.attempt.failing').default('message.attempt.failing'),
  })
  .openapi({
    description:
      "Sent after a message has been failing for a few times.\nIt's sent on the fourth failure. It complements `message.attempt.exhausted` which is sent after the last failure.",
    required: ['data', 'type'],
  })
  .openapi('MessageAttemptFailingEvent')

const MessageAttemptRecoveredEventDataSchema = z
  .object({
    appId: z.string().openapi({ example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    appUid: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-app-identifier' }),
    endpointId: z.string().openapi({ example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
    lastAttempt: MessageAttempetLastSchema,
    msgEventId: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ example: 'unique-msg-identifier' }),
    msgId: z.string().openapi({ example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2' }),
  })
  .openapi({
    description:
      'Sent when a message delivery has failed (all of the retry attempts have been exhausted) as a "message.attempt.exhausted" type or after it\'s failed four times as a "message.attempt.failing" event.',
    required: ['appId', 'endpointId', 'lastAttempt', 'msgId'],
  })
  .openapi('MessageAttemptRecoveredEventData')

const MessageAttemptRecoveredEventSchema = z
  .object({
    data: MessageAttemptRecoveredEventDataSchema,
    type: z.literal('message.attempt.recovered').default('message.attempt.recovered'),
  })
  .openapi({
    description:
      'Sent on a successful dispatch after an earlier failure op webhook has already been sent.',
    required: ['data', 'type'],
  })
  .openapi('MessageAttemptRecoveredEvent')

const MessageInSchema = z
  .object({
    application: ApplicationInSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Optionally creates a new application alongside the message.\n\nIf the application id or uid that is used in the path already exists, this argument is ignored.',
      }),
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
        example: 'unique-msg-identifier',
      }),
    eventType: z
      .string()
      .regex(/^[a-zA-Z0-9\-_.]+$/)
      .max(256)
      .openapi({ example: 'user.signup' }),
    payload: z
      .object({})
      .openapi({ example: { email: 'test@example.com', username: 'test_user' } }),
    payloadRetentionPeriod: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(5n).max(90n),
      )
      .default(90n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 5,
        maximum: 90,
        default: 90,
        example: 90,
      }),
  })
  .openapi({ required: ['eventType', 'payload'] })
  .openapi('MessageIn')

const OrderingSchema = z
  .enum(['ascending', 'descending'])
  .openapi({ description: 'Defines the ordering in a listing of results.' })
  .openapi('Ordering')

const RecoverInSchema = z
  .object({
    since: z.iso.datetime({ offset: true }),
    until: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: ['since'] })
  .openapi('RecoverIn')

const RecoverOutSchema = z
  .object({
    id: z.string(),
    status: BackgroundTaskStatusSchema,
    task: BackgroundTaskTypeSchema,
    updatedAt: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['id', 'status', 'task', 'updatedAt'] })
  .openapi('RecoverOut')

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

const HTTPBearerSecurityScheme = {
  description: 'HTTP Bearer token passed in the `Authorization` header',
  scheme: 'bearer',
  type: 'http',
}

export const getApiV1AppRoute = createRoute({
  method: 'get',
  path: '/api/v1/app',
  tags: ['Application'],
  summary: 'List Applications',
  description: "List of all the organization's applications.",
  operationId: 'v1.application.list',
  request: {
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.uint64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of returned items',
            in: 'query',
            name: 'limit',
            schema: {
              description: 'Limit the number of returned items',
              format: 'uint64',
              minimum: 0,
              type: 'integer',
            },
            style: 'form',
            required: false,
          },
          description: 'Limit the number of returned items',
        }),
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'The iterator returned from a prior invocation',
            in: 'query',
            name: 'iterator',
            schema: {
              description: 'The iterator returned from a prior invocation',
              example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'The iterator returned from a prior invocation',
          example: 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        }),
      order: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.enum(['ascending', 'descending']).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'The sorting order of the returned items',
            in: 'query',
            name: 'order',
            schema: {
              description: 'The sorting order of the returned items',
              enum: ['ascending', 'descending'],
              type: 'string',
              nullable: true,
            },
            style: 'form',
            required: false,
          },
          description: 'The sorting order of the returned items',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
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
})

export const postApiV1AppRoute = createRoute({
  method: 'post',
  path: '/api/v1/app',
  tags: ['Application'],
  summary: 'Create Application',
  description: 'Create a new application.',
  operationId: 'v1.application.create',
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
            schema: {
              default: false,
              description:
                "Get an existing application, or create a new one if doesn't exist. It's two separate functions in the libs.",
              type: 'boolean',
            },
            style: 'form',
            required: false,
          },
          description:
            "Get an existing application, or create a new one if doesn't exist. It's two separate functions in the libs.",
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            schema: { type: 'string' },
            style: 'simple',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationInSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ApplicationOutSchema } } },
    201: { description: '', content: { 'application/json': { schema: ApplicationOutSchema } } },
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

export const getApiV1AppAppIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}',
  tags: ['Application'],
  summary: 'Get Application',
  description: 'Get an application.',
  operationId: 'v1.application.get',
  responses: {
    200: { description: '', content: { 'application/json': { schema: ApplicationOutSchema } } },
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

export const putApiV1AppAppIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/app/{app_id}',
  tags: ['Application'],
  summary: 'Update Application',
  description: 'Update an application.',
  operationId: 'v1.application.update',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationInSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ApplicationOutSchema } } },
    201: { description: '', content: { 'application/json': { schema: ApplicationOutSchema } } },
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

export const deleteApiV1AppAppIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/app/{app_id}',
  tags: ['Application'],
  summary: 'Delete Application',
  description: 'Delete an application.',
  operationId: 'v1.application.delete',
  responses: {
    204: { description: 'no content' },
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

export const patchApiV1AppAppIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/app/{app_id}',
  tags: ['Application'],
  summary: 'Patch Application',
  description: 'Partially update an application.',
  operationId: 'patch_application',
  request: {
    body: { content: { 'application/json': { schema: ApplicationPatchSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ApplicationOutSchema } } },
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

export const getApiV1AppAppIdAttemptEndpointEndpointIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/attempt/endpoint/{endpoint_id}',
  tags: ['Message Attempt'],
  summary: 'List Attempts By Endpoint',
  description: 'List attempts by endpoint id',
  operationId: 'v1.message-attempt.list-by-endpoint',
  request: {
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.uint64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of returned items',
            in: 'query',
            name: 'limit',
            schema: {
              description: 'Limit the number of returned items',
              format: 'uint64',
              minimum: 0,
              type: 'integer',
            },
            style: 'form',
            required: false,
          },
          description: 'Limit the number of returned items',
        }),
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'The iterator returned from a prior invocation',
            in: 'query',
            name: 'iterator',
            schema: {
              description: 'The iterator returned from a prior invocation',
              example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'The iterator returned from a prior invocation',
          example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
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
            description: 'Filter response based on the delivery status',
            in: 'query',
            name: 'status',
            schema: {
              description: 'Filter response based on the delivery status',
              enum: [0, 1, 2, 3],
              title: 'MessageStatus',
              type: 'integer',
              'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
              nullable: true,
            },
            style: 'form',
            required: false,
          },
          description: 'Filter response based on the delivery status',
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
            description: 'Filter response based on the HTTP status code',
            in: 'query',
            name: 'status_code_class',
            schema: {
              description: 'Filter response based on the HTTP status code',
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
            style: 'form',
            required: false,
          },
          description: 'Filter response based on the HTTP status code',
          title: 'StatusCodeClass',
          'x-enum-varnames': ['CodeNone', 'Code1xx', 'Code2xx', 'Code3xx', 'Code4xx', 'Code5xx'],
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
            description: 'Filter response based on the channel',
            in: 'query',
            name: 'channel',
            schema: {
              description: 'Filter response based on the channel',
              example: 'project_1337',
              maxLength: 128,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter response based on the channel',
          example: 'project_1337',
        }),
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include items created before a certain date',
            in: 'query',
            name: 'before',
            schema: {
              description: 'Only include items created before a certain date',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'Only include items created before a certain date',
        }),
      after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include items created after a certain date',
            in: 'query',
            name: 'after',
            schema: {
              description: 'Only include items created after a certain date',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'Only include items created after a certain date',
        }),
      with_content: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'When `true` attempt content is included in the response',
            in: 'query',
            name: 'with_content',
            schema: {
              default: true,
              description: 'When `true` attempt content is included in the response',
              type: 'boolean',
            },
            style: 'form',
            required: false,
          },
          description: 'When `true` attempt content is included in the response',
        }),
      event_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z
            .array(
              z
                .string()
                .regex(/^[a-zA-Z0-9\-_.]+$/)
                .max(256)
                .openapi({ example: 'user.signup' }),
            )
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response based on the event type',
            in: 'query',
            name: 'event_types',
            schema: {
              description: 'Filter response based on the event type',
              items: {
                example: 'user.signup',
                maxLength: 256,
                pattern: '^[a-zA-Z0-9\\-_.]+$',
                type: 'string',
              },
              nullable: true,
              type: 'array',
              uniqueItems: true,
            },
            style: 'form',
            required: false,
          },
          description: 'Filter response based on the event type',
        }),
    }),
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
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
})

export const getApiV1AppAppIdAttemptMsgMsgIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/attempt/msg/{msg_id}',
  tags: ['Message Attempt'],
  summary: 'List Attempts By Msg',
  description: 'List attempts by message id',
  operationId: 'v1.message-attempt.list-by-msg',
  request: {
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.uint64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of returned items',
            in: 'query',
            name: 'limit',
            schema: {
              description: 'Limit the number of returned items',
              format: 'uint64',
              minimum: 0,
              type: 'integer',
            },
            style: 'form',
            required: false,
          },
          description: 'Limit the number of returned items',
        }),
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'The iterator returned from a prior invocation',
            in: 'query',
            name: 'iterator',
            schema: {
              description: 'The iterator returned from a prior invocation',
              example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'The iterator returned from a prior invocation',
          example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
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
            description: 'Filter response based on the delivery status',
            in: 'query',
            name: 'status',
            schema: {
              description: 'Filter response based on the delivery status',
              enum: [0, 1, 2, 3],
              title: 'MessageStatus',
              type: 'integer',
              'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
              nullable: true,
            },
            style: 'form',
            required: false,
          },
          description: 'Filter response based on the delivery status',
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
            description: 'Filter response based on the HTTP status code',
            in: 'query',
            name: 'status_code_class',
            schema: {
              description: 'Filter response based on the HTTP status code',
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
            style: 'form',
            required: false,
          },
          description: 'Filter response based on the HTTP status code',
          title: 'StatusCodeClass',
          'x-enum-varnames': ['CodeNone', 'Code1xx', 'Code2xx', 'Code3xx', 'Code4xx', 'Code5xx'],
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
            description: 'Filter response based on the channel',
            in: 'query',
            name: 'channel',
            schema: {
              description: 'Filter response based on the channel',
              example: 'project_1337',
              maxLength: 128,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter response based on the channel',
          example: 'project_1337',
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
            description: 'Filter the attempts based on the attempted endpoint',
            in: 'query',
            name: 'endpoint_id',
            schema: {
              description: 'Filter the attempts based on the attempted endpoint',
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter the attempts based on the attempted endpoint',
          example: 'unique-ep-identifier',
        }),
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include items created before a certain date',
            in: 'query',
            name: 'before',
            schema: {
              description: 'Only include items created before a certain date',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'Only include items created before a certain date',
        }),
      after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include items created after a certain date',
            in: 'query',
            name: 'after',
            schema: {
              description: 'Only include items created after a certain date',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'Only include items created after a certain date',
        }),
      with_content: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'When `true` attempt content is included in the response',
            in: 'query',
            name: 'with_content',
            schema: {
              default: true,
              description: 'When `true` attempt content is included in the response',
              type: 'boolean',
            },
            style: 'form',
            required: false,
          },
          description: 'When `true` attempt content is included in the response',
        }),
      event_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z
            .array(
              z
                .string()
                .regex(/^[a-zA-Z0-9\-_.]+$/)
                .max(256)
                .openapi({ example: 'user.signup' }),
            )
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response based on the event type',
            in: 'query',
            name: 'event_types',
            schema: {
              description: 'Filter response based on the event type',
              items: {
                example: 'user.signup',
                maxLength: 256,
                pattern: '^[a-zA-Z0-9\\-_.]+$',
                type: 'string',
              },
              nullable: true,
              type: 'array',
              uniqueItems: true,
            },
            style: 'form',
            required: false,
          },
          description: 'Filter response based on the event type',
        }),
    }),
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-msg-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-msg-identifier',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
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
})

export const getApiV1AppAppIdEndpointRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/endpoint',
  tags: ['Endpoint'],
  summary: 'List Endpoints',
  description: "List the application's endpoints.",
  operationId: 'v1.endpoint.list',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
        }),
    }),
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.uint64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of returned items',
            in: 'query',
            name: 'limit',
            schema: {
              description: 'Limit the number of returned items',
              format: 'uint64',
              minimum: 0,
              type: 'integer',
            },
            style: 'form',
            required: false,
          },
          description: 'Limit the number of returned items',
        }),
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'The iterator returned from a prior invocation',
            in: 'query',
            name: 'iterator',
            schema: {
              description: 'The iterator returned from a prior invocation',
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'The iterator returned from a prior invocation',
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        }),
      order: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.enum(['ascending', 'descending']).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'The sorting order of the returned items',
            in: 'query',
            name: 'order',
            schema: {
              description: 'The sorting order of the returned items',
              enum: ['ascending', 'descending'],
              type: 'string',
              nullable: true,
            },
            style: 'form',
            required: false,
          },
          description: 'The sorting order of the returned items',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
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
})

export const postApiV1AppAppIdEndpointRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/endpoint',
  tags: ['Endpoint'],
  summary: 'Create Endpoint',
  description:
    'Create a new endpoint for the application.\n\nWhen `secret` is `null` the secret is automatically generated (recommended)',
  operationId: 'v1.endpoint.create',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            schema: { type: 'string' },
            style: 'simple',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EndpointInSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: EndpointOutSchema } } },
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

export const getApiV1AppAppIdEndpointEndpointIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}',
  tags: ['Endpoint'],
  summary: 'Get Endpoint',
  description: 'Get an endpoint.',
  operationId: 'v1.endpoint.get',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EndpointOutSchema } } },
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

export const putApiV1AppAppIdEndpointEndpointIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}',
  tags: ['Endpoint'],
  summary: 'Update Endpoint',
  description: 'Update an endpoint.',
  operationId: 'v1.endpoint.update',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
    body: { content: { 'application/json': { schema: EndpointUpdateSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EndpointOutSchema } } },
    201: { description: '', content: { 'application/json': { schema: EndpointOutSchema } } },
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

export const deleteApiV1AppAppIdEndpointEndpointIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}',
  tags: ['Endpoint'],
  summary: 'Delete Endpoint',
  description: 'Delete an endpoint.',
  operationId: 'v1.endpoint.delete',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
  },
  responses: {
    204: { description: 'no content' },
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

export const patchApiV1AppAppIdEndpointEndpointIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}',
  tags: ['Endpoint'],
  summary: 'Patch Endpoint',
  description: 'Partially update an endpoint.',
  operationId: 'patch_endpoint',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
    body: { content: { 'application/json': { schema: EndpointPatchSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EndpointOutSchema } } },
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

export const getApiV1AppAppIdEndpointEndpointIdHeadersRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers',
  tags: ['Endpoint'],
  summary: 'Get Endpoint Headers',
  description: 'Get the additional headers to be sent with the webhook',
  operationId: 'v1.endpoint.get-headers',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The value of the headers is returned in the `headers` field.\n\nSensitive headers that have been redacted are returned in the sensitive field.',
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
})

export const putApiV1AppAppIdEndpointEndpointIdHeadersRoute = createRoute({
  method: 'put',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers',
  tags: ['Endpoint'],
  summary: 'Update Endpoint Headers',
  description: 'Set the additional headers to be sent with the webhook',
  operationId: 'v1.endpoint.update-headers',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
    body: { content: { 'application/json': { schema: EndpointHeadersInSchema } }, required: true },
  },
  responses: {
    204: { description: 'no content' },
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

export const patchApiV1AppAppIdEndpointEndpointIdHeadersRoute = createRoute({
  method: 'patch',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers',
  tags: ['Endpoint'],
  summary: 'Patch Endpoint Headers',
  description: 'Partially set the additional headers to be sent with the webhook',
  operationId: 'v1.endpoint.patch-headers',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
    body: {
      content: { 'application/json': { schema: EndpointHeadersPatchInSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'no content' },
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

export const getApiV1AppAppIdEndpointEndpointIdMsgRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/msg',
  tags: ['Message Attempt'],
  summary: 'List Attempted Messages',
  description:
    'List messages for a particular endpoint. Additionally includes metadata about the latest message attempt.\n\nThe `before` parameter lets you filter all items created before a certain date and is ignored if an iterator is passed.',
  operationId: 'v1.message-attempt.list-attempted-messages',
  request: {
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.uint64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of returned items',
            in: 'query',
            name: 'limit',
            schema: {
              description: 'Limit the number of returned items',
              format: 'uint64',
              minimum: 0,
              type: 'integer',
            },
            style: 'form',
            required: false,
          },
          description: 'Limit the number of returned items',
        }),
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'The iterator returned from a prior invocation',
            in: 'query',
            name: 'iterator',
            schema: {
              description: 'The iterator returned from a prior invocation',
              example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'The iterator returned from a prior invocation',
          example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
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
            description: 'Filter response based on the channel',
            in: 'query',
            name: 'channel',
            schema: {
              description: 'Filter response based on the channel',
              example: 'project_1337',
              maxLength: 128,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter response based on the channel',
          example: 'project_1337',
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
            description: 'Filter response based on the delivery status',
            in: 'query',
            name: 'status',
            schema: {
              description: 'Filter response based on the delivery status',
              enum: [0, 1, 2, 3],
              title: 'MessageStatus',
              type: 'integer',
              'x-enum-varnames': ['Success', 'Pending', 'Fail', 'Sending'],
              nullable: true,
            },
            style: 'form',
            required: false,
          },
          description: 'Filter response based on the delivery status',
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
            description: 'Only include items created before a certain date',
            in: 'query',
            name: 'before',
            schema: {
              description: 'Only include items created before a certain date',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'Only include items created before a certain date',
        }),
      after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include items created after a certain date',
            in: 'query',
            name: 'after',
            schema: {
              description: 'Only include items created after a certain date',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'Only include items created after a certain date',
        }),
      with_content: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'When `true` message payloads are included in the response',
            in: 'query',
            name: 'with_content',
            schema: {
              default: true,
              description: 'When `true` message payloads are included in the response',
              type: 'boolean',
            },
            style: 'form',
            required: false,
          },
          description: 'When `true` message payloads are included in the response',
        }),
      event_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z
            .array(
              z
                .string()
                .regex(/^[a-zA-Z0-9\-_.]+$/)
                .max(256)
                .openapi({ example: 'user.signup' }),
            )
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response based on the event type',
            in: 'query',
            name: 'event_types',
            schema: {
              description: 'Filter response based on the event type',
              items: {
                example: 'user.signup',
                maxLength: 256,
                pattern: '^[a-zA-Z0-9\\-_.]+$',
                type: 'string',
              },
              nullable: true,
              type: 'array',
              uniqueItems: true,
            },
            style: 'form',
            required: false,
          },
          description: 'Filter response based on the event type',
        }),
    }),
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
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
})

export const postApiV1AppAppIdEndpointEndpointIdRecoverRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/recover',
  tags: ['Endpoint'],
  summary: 'Recover Failed Webhooks',
  description: 'Resend all failed messages since a given time.',
  operationId: 'v1.endpoint.recover',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            schema: { type: 'string' },
            style: 'simple',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RecoverInSchema } }, required: true },
  },
  responses: {
    202: { description: '', content: { 'application/json': { schema: RecoverOutSchema } } },
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

export const getApiV1AppAppIdEndpointEndpointIdSecretRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret',
  tags: ['Endpoint'],
  summary: 'Get Endpoint Secret',
  description:
    "Get the endpoint's signing secret.\n\nThis is used to verify the authenticity of the webhook.\nFor more information please refer to [the consuming webhooks docs](https://docs.svix.com/consuming-webhooks/).",
  operationId: 'v1.endpoint.get-secret',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EndpointSecretOutSchema } } },
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

export const postApiV1AppAppIdEndpointEndpointIdSecretRotateRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret/rotate',
  tags: ['Endpoint'],
  summary: 'Rotate Endpoint Secret',
  description:
    "Rotates the endpoint's signing secret.  The previous secret will be valid for the next 24 hours.",
  operationId: 'v1.endpoint.rotate-secret',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            schema: { type: 'string' },
            style: 'simple',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EndpointSecretRotateInSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EndpointSecretOutSchema } } },
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

export const postApiV1AppAppIdEndpointEndpointIdSendExampleRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/send-example',
  tags: ['Endpoint'],
  summary: 'Send Event Type Example Message',
  description: 'Send an example message for an event',
  operationId: 'v1.endpoint.send-example',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            schema: { type: 'string' },
            style: 'simple',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EventExampleInSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MessageOutSchema } } },
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

export const getApiV1AppAppIdEndpointEndpointIdStatsRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/endpoint/{endpoint_id}/stats',
  tags: ['Endpoint'],
  summary: 'Endpoint Stats',
  description: 'Get basic statistics for the endpoint.',
  operationId: 'v1.endpoint.get-stats',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
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
            schema: { format: 'date-time', nullable: true, type: 'string' },
            style: 'form',
            required: false,
          },
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
            schema: { format: 'date-time', nullable: true, type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EndpointStatsSchema } } },
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

export const getApiV1AppAppIdMsgRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/msg',
  tags: ['Message'],
  summary: 'List Messages',
  description:
    "List all of the application's messages.\n\nThe `before` parameter lets you filter all items created before a certain date and is ignored if an iterator is passed.\nThe `after` parameter lets you filter all items created after a certain date and is ignored if an iterator is passed.\n`before` and `after` cannot be used simultaneously.",
  operationId: 'v1.message.list',
  request: {
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.uint64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of returned items',
            in: 'query',
            name: 'limit',
            schema: {
              description: 'Limit the number of returned items',
              format: 'uint64',
              minimum: 0,
              type: 'integer',
            },
            style: 'form',
            required: false,
          },
          description: 'Limit the number of returned items',
        }),
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'The iterator returned from a prior invocation',
            in: 'query',
            name: 'iterator',
            schema: {
              description: 'The iterator returned from a prior invocation',
              example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'The iterator returned from a prior invocation',
          example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
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
            description: 'Filter response based on the channel',
            in: 'query',
            name: 'channel',
            schema: {
              description: 'Filter response based on the channel',
              example: 'project_1337',
              maxLength: 128,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'Filter response based on the channel',
          example: 'project_1337',
        }),
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include items created before a certain date',
            in: 'query',
            name: 'before',
            schema: {
              description: 'Only include items created before a certain date',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'Only include items created before a certain date',
        }),
      after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include items created after a certain date',
            in: 'query',
            name: 'after',
            schema: {
              description: 'Only include items created after a certain date',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'Only include items created after a certain date',
        }),
      with_content: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'When `true` message payloads are included in the response',
            in: 'query',
            name: 'with_content',
            schema: {
              default: true,
              description: 'When `true` message payloads are included in the response',
              type: 'boolean',
            },
            style: 'form',
            required: false,
          },
          description: 'When `true` message payloads are included in the response',
        }),
      event_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z
            .array(
              z
                .string()
                .regex(/^[a-zA-Z0-9\-_.]+$/)
                .max(256)
                .openapi({ example: 'user.signup' }),
            )
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response based on the event type',
            in: 'query',
            name: 'event_types',
            schema: {
              description: 'Filter response based on the event type',
              items: {
                example: 'user.signup',
                maxLength: 256,
                pattern: '^[a-zA-Z0-9\\-_.]+$',
                type: 'string',
              },
              nullable: true,
              type: 'array',
              uniqueItems: true,
            },
            style: 'form',
            required: false,
          },
          description: 'Filter response based on the event type',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
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
})

export const postApiV1AppAppIdMsgRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/msg',
  tags: ['Message'],
  summary: 'Create Message',
  description:
    "Creates a new message and dispatches it to all of the application's endpoints.\n\nThe `eventId` is an optional custom unique ID. It's verified to be unique only up to a day, after that no verification will be made.\nIf a message with the same `eventId` already exists for any application in your environment, a 409 conflict error will be returned.\n\nThe `eventType` indicates the type and schema of the event. All messages of a certain `eventType` are expected to have the same schema. Endpoints can choose to only listen to specific event types.\nMessages can also have `channels`, which similar to event types let endpoints filter by them. Unlike event types, messages can have multiple channels, and channels don't imply a specific message content or schema.\n\nThe `payload` property is the webhook's body (the actual webhook message). Svix supports payload sizes of up to ~350kb, though it's generally a good idea to keep webhook payloads small, probably no larger than 40kb.",
  operationId: 'v1.message.create',
  request: {
    query: z.object({
      with_content: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'When `true` message payloads are included in the response',
            in: 'query',
            name: 'with_content',
            schema: {
              default: true,
              description: 'When `true` message payloads are included in the response',
              type: 'boolean',
            },
            style: 'form',
            required: false,
          },
          description: 'When `true` message payloads are included in the response',
        }),
    }),
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            schema: { type: 'string' },
            style: 'simple',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MessageInSchema } }, required: true },
  },
  responses: {
    202: { description: '', content: { 'application/json': { schema: MessageOutSchema } } },
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

export const postApiV1AppAppIdMsgBulkExpungeRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/msg/bulk-expunge',
  tags: ['Message'],
  summary: 'Bulk Expunge Message Content',
  description:
    "Delete the payloads from the given messages under the current application\n\nUseful in cases when a message was accidentally sent with sensitive content.\nA message can't be replayed or resent once its payload has been deleted\n(or has expired).",
  operationId: 'v1.message.bulk-expunge-content',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            schema: { type: 'string' },
            style: 'simple',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BulkExpungeContentsInSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BulkExpungeContentsOutSchema } },
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

export const getApiV1AppAppIdMsgMsgIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/msg/{msg_id}',
  tags: ['Message'],
  summary: 'Get Message',
  description: 'Get a message by its ID or eventID.',
  operationId: 'v1.message.get',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-msg-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-msg-identifier',
        }),
    }),
    query: z.object({
      with_content: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'When `true` message payloads are included in the response',
            in: 'query',
            name: 'with_content',
            schema: {
              default: true,
              description: 'When `true` message payloads are included in the response',
              type: 'boolean',
            },
            style: 'form',
            required: false,
          },
          description: 'When `true` message payloads are included in the response',
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MessageOutSchema } } },
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

export const getApiV1AppAppIdMsgMsgIdAttemptAttemptIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}',
  tags: ['Message Attempt'],
  summary: 'Get Messageattempt',
  description: '`msg_id`: Use a message id or a message `eventId`',
  operationId: 'v1.message-attempt.get',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-msg-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-msg-identifier',
        }),
      attempt_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'attempt_id',
            required: true,
            schema: { example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2', type: 'string' },
            style: 'simple',
          },
          example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MessageAttemptOutSchema } } },
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

export const deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentRoute = createRoute({
  method: 'delete',
  path: '/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/content',
  tags: ['Message Attempt'],
  summary: 'Expunge Attempt Content',
  description:
    "Deletes the given attempt's response body. Useful when an endpoint accidentally returned sensitive content.",
  operationId: 'v1.message-attempt.expunge-content',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-msg-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-msg-identifier',
        }),
      attempt_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'attempt_id',
            required: true,
            schema: { example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2', type: 'string' },
            style: 'simple',
          },
          example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        }),
    }),
  },
  responses: {
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

export const deleteApiV1AppAppIdMsgMsgIdContentRoute = createRoute({
  method: 'delete',
  path: '/api/v1/app/{app_id}/msg/{msg_id}/content',
  tags: ['Message'],
  summary: 'Expunge Message Content',
  description:
    "Delete the given message's payload. Useful in cases when a message was accidentally sent with sensitive content.\n\nThe message can't be replayed or resent once its payload has been deleted (or has expired).",
  operationId: 'v1.message.expunge-content',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-msg-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-msg-identifier',
        }),
    }),
  },
  responses: {
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

export const getApiV1AppAppIdMsgMsgIdEndpointRoute = createRoute({
  method: 'get',
  path: '/api/v1/app/{app_id}/msg/{msg_id}/endpoint',
  tags: ['Message Attempt'],
  summary: 'List Attempted Destinations',
  description: '`msg_id`: Use a message id or a message `eventId`',
  operationId: 'v1.message-attempt.list-attempted-destinations',
  request: {
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.uint64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of returned items',
            in: 'query',
            name: 'limit',
            schema: {
              description: 'Limit the number of returned items',
              format: 'uint64',
              minimum: 0,
              type: 'integer',
            },
            style: 'form',
            required: false,
          },
          description: 'Limit the number of returned items',
        }),
      iterator: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'The iterator returned from a prior invocation',
            in: 'query',
            name: 'iterator',
            schema: {
              description: 'The iterator returned from a prior invocation',
              example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              nullable: true,
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'The iterator returned from a prior invocation',
          example: 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2',
        }),
    }),
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-msg-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-msg-identifier',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
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
})

export const postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendRoute = createRoute({
  method: 'post',
  path: '/api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/resend',
  tags: ['Message Attempt'],
  summary: 'Resend Webhook',
  description: 'Resend a message to the specified endpoint.',
  operationId: 'v1.message-attempt.resend',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
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
              example: 'unique-msg-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-msg-identifier',
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
              example: 'unique-ep-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-ep-identifier',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            schema: { type: 'string' },
            style: 'simple',
            required: false,
          },
        }),
    }),
  },
  responses: {
    202: { description: '', content: { 'application/json': { schema: EmptyResponseSchema } } },
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

export const postApiV1AuthAppPortalAccessAppIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/auth/app-portal-access/{app_id}',
  tags: ['Authentication'],
  summary: 'App Portal Access',
  description:
    'Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.',
  operationId: 'v1.authentication.app-portal-access',
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
              example: 'unique-app-identifier',
              maxLength: 256,
              minLength: 1,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'simple',
          },
          example: 'unique-app-identifier',
        }),
    }),
    headers: z.object({
      'idempotency-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            schema: { type: 'string' },
            style: 'simple',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AppPortalAccessInSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AppPortalAccessOutSchema } } },
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

export const postApiV1AuthLogoutRoute = createRoute({
  method: 'post',
  path: '/api/v1/auth/logout',
  tags: ['Authentication'],
  summary: 'Logout',
  description: '\nLogout an app token.\n\nTrying to log out other tokens will fail.\n',
  operationId: 'logout_api_v1_auth_logout__post',
  request: {
    headers: z.object({
      'idempotency-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            schema: { type: 'string' },
            style: 'simple',
            required: false,
          },
        }),
    }),
  },
  responses: { 204: { description: 'no content' } },
})

export const getApiV1EventTypeRoute = createRoute({
  method: 'get',
  path: '/api/v1/event-type',
  tags: ['Event Type'],
  summary: 'List Event Types',
  description: 'Return the list of event types.',
  operationId: 'v1.event-type.list',
  request: {
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.uint64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of returned items',
            in: 'query',
            name: 'limit',
            schema: {
              description: 'Limit the number of returned items',
              format: 'uint64',
              minimum: 0,
              type: 'integer',
            },
            style: 'form',
            required: false,
          },
          description: 'Limit the number of returned items',
        }),
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
            description: 'The iterator returned from a prior invocation',
            in: 'query',
            name: 'iterator',
            schema: {
              description: 'The iterator returned from a prior invocation',
              example: 'user.signup',
              maxLength: 256,
              nullable: true,
              pattern: '^[a-zA-Z0-9\\-_.]+$',
              type: 'string',
            },
            style: 'form',
            required: false,
          },
          description: 'The iterator returned from a prior invocation',
          example: 'user.signup',
        }),
      order: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.enum(['ascending', 'descending']).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'The sorting order of the returned items',
            in: 'query',
            name: 'order',
            schema: {
              description: 'The sorting order of the returned items',
              enum: ['ascending', 'descending'],
              type: 'string',
              nullable: true,
            },
            style: 'form',
            required: false,
          },
          description: 'The sorting order of the returned items',
        }),
      include_archived: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'When `true` archived (deleted but not expunged) items are included in the response',
            in: 'query',
            name: 'include_archived',
            schema: {
              default: false,
              description:
                'When `true` archived (deleted but not expunged) items are included in the response',
              type: 'boolean',
            },
            style: 'form',
            required: false,
          },
          description:
            'When `true` archived (deleted but not expunged) items are included in the response',
        }),
      with_content: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'When `true` the full item (including the schema) is included in the response',
            in: 'query',
            name: 'with_content',
            schema: {
              default: false,
              description:
                'When `true` the full item (including the schema) is included in the response',
              type: 'boolean',
            },
            style: 'form',
            required: false,
          },
          description:
            'When `true` the full item (including the schema) is included in the response',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
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
})

export const postApiV1EventTypeRoute = createRoute({
  method: 'post',
  path: '/api/v1/event-type',
  tags: ['Event Type'],
  summary: 'Create Event Type',
  description:
    'Create new or unarchive existing event type.\n\nUnarchiving an event type will allow endpoints to filter on it and messages to be sent with it.\nEndpoints filtering on the event type before archival will continue to filter on it.\nThis operation does not preserve the description and schemas.',
  operationId: 'v1.event-type.create',
  request: {
    headers: z.object({
      'idempotency-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The request's idempotency key",
            in: 'header',
            name: 'idempotency-key',
            schema: { type: 'string' },
            style: 'simple',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EventTypeInSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: EventTypeOutSchema } } },
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

export const getApiV1EventTypeEventTypeNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/event-type/{event_type_name}',
  tags: ['Event Type'],
  summary: 'Get Event Type',
  description: 'Get an event type.',
  operationId: 'v1.event-type.get',
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
              type: 'string',
            },
            style: 'simple',
          },
          example: 'user.signup',
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EventTypeOutSchema } } },
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

export const putApiV1EventTypeEventTypeNameRoute = createRoute({
  method: 'put',
  path: '/api/v1/event-type/{event_type_name}',
  tags: ['Event Type'],
  summary: 'Update Event Type',
  description: 'Update an event type.',
  operationId: 'v1.event-type.update',
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
              type: 'string',
            },
            style: 'simple',
          },
          example: 'user.signup',
        }),
    }),
    body: { content: { 'application/json': { schema: EventTypeUpdateSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EventTypeOutSchema } } },
    201: { description: '', content: { 'application/json': { schema: EventTypeOutSchema } } },
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

export const deleteApiV1EventTypeEventTypeNameRoute = createRoute({
  method: 'delete',
  path: '/api/v1/event-type/{event_type_name}',
  tags: ['Event Type'],
  summary: 'Delete Event Type',
  description:
    'Archive an event type.\n\nEndpoints already configured to filter on an event type will continue to do so after archival.\nHowever, new messages can not be sent with it and endpoints can not filter on it.\nAn event type can be unarchived with the\n[create operation](#operation/create_event_type_api_v1_event_type__post).',
  operationId: 'v1.event-type.delete',
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
              type: 'string',
            },
            style: 'simple',
          },
          example: 'user.signup',
        }),
    }),
    query: z.object({
      expunge: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'By default event types are archived when "deleted". Passing this to `true` deletes them entirely.',
            in: 'query',
            name: 'expunge',
            schema: {
              default: false,
              description:
                'By default event types are archived when "deleted". Passing this to `true` deletes them entirely.',
              type: 'boolean',
            },
            style: 'form',
            required: false,
          },
          description:
            'By default event types are archived when "deleted". Passing this to `true` deletes them entirely.',
        }),
    }),
  },
  responses: {
    204: { description: 'no content' },
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

export const patchApiV1EventTypeEventTypeNameRoute = createRoute({
  method: 'patch',
  path: '/api/v1/event-type/{event_type_name}',
  tags: ['Event Type'],
  summary: 'Patch Event Type',
  description: 'Partially update an event type.',
  operationId: 'patch_event_type',
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
              type: 'string',
            },
            style: 'simple',
          },
          example: 'user.signup',
        }),
    }),
    body: { content: { 'application/json': { schema: EventTypePatchSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EventTypeOutSchema } } },
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

export const getApiV1HealthRoute = createRoute({
  method: 'get',
  path: '/api/v1/health',
  tags: ['Health'],
  summary: 'Health',
  description: 'Verify the API server is up and running.',
  operationId: 'v1.health.get',
  responses: {
    204: { description: 'no content' },
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

export const headApiV1HealthRoute = createRoute({
  method: 'head',
  path: '/api/v1/health',
  tags: ['Health'],
  summary: 'Health',
  description: 'Verify the API server is up and running.',
  operationId: 'v1.health.get',
  responses: {
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

export const getApiV1HealthPingRoute = createRoute({
  method: 'get',
  path: '/api/v1/health/ping',
  responses: { 204: { description: 'no content' } },
})

export const headApiV1HealthPingRoute = createRoute({
  method: 'head',
  path: '/api/v1/health/ping',
  responses: { 204: { description: 'no content' } },
})
