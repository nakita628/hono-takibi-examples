import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .object({ error: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Error')

const EventRequestSchema = z
  .object({
    event: z
      .object({
        name: z.string().openapi({ description: 'The name of the event' }),
        payload: z
          .looseObject({})
          .exactOptional()
          .openapi({ description: 'The payload of the event' }),
        context: z
          .looseObject({})
          .exactOptional()
          .openapi({ description: 'An optional context object' }),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Unique identifier for the event. Auto-generated if not provided. If you provide an ID that already exists, the event will not be redelivered.',
          }),
        timestamp: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'Event timestamp. Defaults to current timestamp if not provided.',
          }),
        source: z
          .string()
          .exactOptional()
          .openapi({ description: "Event source, default is 'trigger.dev'." }),
      })
      .exactOptional()
      .openapi({ required: ['name'] }),
    options: z
      .object({
        deliverAt: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'Optional Date to deliver the event.' }),
        deliverAfter: z
          .int()
          .exactOptional()
          .openapi({ description: 'Optional delay in seconds before delivering the event.' }),
        accountId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Optional account ID to associate with the event.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('EventRequest')

const DeserializedJsonSchema = z
  .looseObject({})
  .openapi({ description: 'A JSON object that represents the deserialized payload or context.' })
  .openapi('DeserializedJson')

const EventResponseSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the event that was sent.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the event that was sent.' }),
    payload: DeserializedJsonSchema.exactOptional(),
    context: DeserializedJsonSchema.nullable()
      .exactOptional()
      .openapi({
        description: 'The context of the event that was sent. Null if no context was set.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp of the event that was sent.' }),
    deliverAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The timestamp when the event will be delivered. Null if not applicable.',
      }),
    deliveredAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The timestamp when the event was delivered. Null if not applicable.',
      }),
    cancelledAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The timestamp when the event was cancelled. Null if the event wasn't cancelled.",
      }),
  })
  .openapi({ required: [] })
  .openapi('EventResponse')

const CreateBatchRequestSchema = z
  .object({
    runCount: z
      .int()
      .min(1)
      .openapi({
        description:
          "Expected number of items in the batch. Must be a positive integer, up to the server's maximum batch size (1,000 by default; self-hosted instances can configure it). Requests above the maximum return a 400.",
      }),
    taskIdentifiers: z
      .array(z.string())
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Distinct task identifiers of the items in the batch. Used to authorize tokens scoped to specific tasks. If omitted, only credentials with broad task access are accepted.',
      }),
    parentRunId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Parent run ID (friendly ID) for batchTriggerAndWait.' }),
    resumeParentOnCompletion: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to resume parent on completion. Set to true for batchTriggerAndWait.',
      }),
    idempotencyKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Idempotency key for the batch. If provided and a batch with this key already exists, the existing batch will be returned.',
      }),
  })
  .openapi({ required: ['runCount'] })
  .openapi('CreateBatchRequest')

const CreateBatchResponseSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The batch ID (friendly ID). Use this to stream items via POST /api/v3/batches/{batchId}/items.',
      }),
    runCount: z.int().openapi({ description: 'The expected run count.' }),
    isCached: z
      .boolean()
      .openapi({ description: 'Whether this response came from a cached/idempotent batch.' }),
    idempotencyKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The idempotency key if provided.' }),
  })
  .openapi({ required: ['id', 'runCount', 'isCached'] })
  .openapi('CreateBatchResponse')

const BatchItemNDJSONSchema = z
  .object({
    index: z
      .int()
      .min(0)
      .openapi({
        description: 'Zero-based index of this item. Used for idempotency and ordering.',
      }),
    task: z.string().openapi({ description: 'The task identifier to trigger.' }),
    payload: z
      .any()
      .exactOptional()
      .openapi({ description: 'The payload for this task run. Can be any JSON value.' }),
    options: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Options for this specific item.' }),
  })
  .openapi({ required: ['index', 'task'] })
  .openapi('BatchItemNDJSON')

const StreamBatchItemsResponseSchema = z
  .object({
    id: z.string().openapi({ description: 'The batch ID.' }),
    itemsAccepted: z.int().openapi({ description: 'Number of items successfully accepted.' }),
    itemsDeduplicated: z
      .int()
      .openapi({ description: 'Number of items that were deduplicated (already enqueued).' }),
    sealed: z
      .boolean()
      .openapi({
        description:
          'Whether the batch was sealed and is ready for processing.\nIf false, the batch needs more items before processing can start.\nClients should check this field and retry with missing items if needed.\n',
      }),
    enqueuedCount: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Total items currently enqueued. Only present when sealed=false to help with retries.',
      }),
    expectedCount: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Expected total item count. Only present when sealed=false to help with retries.',
      }),
  })
  .openapi({ required: ['id', 'itemsAccepted', 'itemsDeduplicated', 'sealed'] })
  .openapi('StreamBatchItemsResponse')

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

export const postApiV1EventsRoute = createRoute({
  method: 'post',
  path: '/api/v1/events',
  tags: ['Events'],
  summary: 'Create an event',
  description: 'Send an event to Trigger.dev to trigger job runs through eventTrigger()',
  externalDocs: {
    description: 'Find more info here',
    url: 'https://trigger.dev/docs/api/events/send-event',
  },
  operationId: 'sendEvent',
  request: {
    body: { content: { 'application/json': { schema: EventRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Event successfully sent',
      content: { 'application/json': { schema: EventResponseSchema } },
    },
    400: { description: 'Invalid request' },
    401: { description: 'Unauthorized - API key is missing or invalid' },
    422: {
      description: 'Invalid request body',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postApiV3BatchesRoute = createRoute({
  method: 'post',
  path: '/api/v3/batches',
  tags: ['Batches'],
  summary: 'Create a batch (Phase 1)',
  description:
    'Phase 1 of 2-phase batch API. Creates a batch record and optionally blocks the parent run for batchTriggerAndWait.\nAfter creating a batch, stream items via POST /api/v3/batches/{batchId}/items.\n',
  externalDocs: { description: 'Find more info here', url: 'https://trigger.dev/docs/triggering' },
  operationId: 'createBatch',
  request: {
    body: { content: { 'application/json': { schema: CreateBatchRequestSchema } }, required: true },
  },
  responses: {
    202: {
      description: 'Batch successfully created',
      content: { 'application/json': { schema: CreateBatchResponseSchema } },
      headers: z.object({
        'x-trigger-jwt-claims': {
          description: 'JWT claims for the batch',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'JWT claims for the batch', param: { required: false } }),
        },
        'x-trigger-jwt': {
          description: 'JWT token for browser clients',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'JWT token for browser clients', param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Invalid request (e.g., runCount <= 0 or exceeds maximum)',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: { description: 'Unauthorized - API key is missing or invalid' },
    422: {
      description: 'Validation error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Rate limit exceeded',
      content: { 'application/json': { schema: ErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Maximum number of requests allowed',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Maximum number of requests allowed',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Number of requests remaining',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Number of requests remaining', param: { required: false } }),
        },
        'X-RateLimit-Reset': {
          description: 'Unix timestamp when the rate limit resets',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Unix timestamp when the rate limit resets',
              param: { required: false },
            }),
        },
        'Retry-After': {
          description: 'Seconds to wait before retrying',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Seconds to wait before retrying',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postApiV3BatchesBatchIdItemsRoute = createRoute({
  method: 'post',
  path: '/api/v3/batches/{batchId}/items',
  tags: ['Batches'],
  summary: 'Stream batch items (Phase 2)',
  description:
    'Phase 2 of 2-phase batch API. Accepts an NDJSON stream of batch items and enqueues them.\nEach line in the body should be a valid BatchItemNDJSON object.\nThe stream is processed with backpressure - items are enqueued as they arrive.\nThe batch is sealed when the stream completes successfully.\n',
  externalDocs: { description: 'Find more info here', url: 'https://trigger.dev/docs/triggering' },
  operationId: 'streamBatchItems',
  request: {
    params: z.object({
      batchId: z
        .string()
        .openapi({
          param: {
            name: 'batchId',
            in: 'path',
            required: true,
            description: 'The batch ID returned from POST /api/v3/batches',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-ndjson': {
          schema: z
            .string()
            .openapi({
              description:
                'NDJSON (newline-delimited JSON) stream where each line is a BatchItemNDJSON object.\nExample:\n{"index":0,"task":"my-task","payload":{"key":"value1"}}\n{"index":1,"task":"my-task","payload":{"key":"value2"}}\n',
            }),
        },
        'application/ndjson': {
          schema: z
            .string()
            .openapi({
              description:
                'NDJSON (newline-delimited JSON) stream where each line is a BatchItemNDJSON object.\n',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Items successfully processed',
      content: { 'application/json': { schema: StreamBatchItemsResponseSchema } },
    },
    400: {
      description: 'Invalid request (e.g., invalid JSON, item exceeds maximum size)',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Unauthorized - API key is missing or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    415: {
      description:
        'Unsupported Media Type - Content-Type must be application/x-ndjson or application/ndjson',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Validation error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})
