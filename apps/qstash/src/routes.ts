import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .object({ error: z.string().openapi({ description: 'Error message' }) })
  .openapi({ required: ['error'] })
  .openapi('Error')

const MessageSchema = z
  .object({
    messageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the message' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to which the message should be delivered.' }),
    topicName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL Group (a.k.a. topic) name if this message was sent to a URL Group.',
      }),
    endpointName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The endpoint name of the message if the endpoint is given a name within the URL group.',
      }),
    method: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HTTP method to use for the message.' }),
    header: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The HTTP headers sent to your API.' }),
    body: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The body of the message if it is composed of utf8 chars only, empty otherwise.',
      }),
    bodyBase64: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The base64 encoded body if the body contains a non-utf8 char only, empty otherwise.',
      }),
    maxRetries: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of retries that should be attempted in case of delivery failure.',
      }),
    notBefore: z
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
          'The unix timestamp in milliseconds before which the message should not be delivered.',
      }),
    createdAt: z
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
        description: 'The unix timestamp in milliseconds when the message was created.',
      }),
    callback: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The url where we send a callback each time the message is attempted to be delivered.',
      }),
    failureCallback: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url where we send a callback to after the message is failed' }),
    queueName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the queue if the message is enqueued to a queue.' }),
    scheduleId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The scheduleId of the message if the message is triggered by a schedule',
      }),
    callerIP: z
      .string()
      .exactOptional()
      .openapi({ description: 'IP address of the publisher of this message.' }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The label of the message assigned by the user. Deprecated in favor of `labels`.',
      }),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of labels assigned to the message by the user.' }),
    flowControlKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The flow control key used for rate limiting.' }),
    rate: z.int().exactOptional().openapi({ description: 'The rate value used for flow control.' }),
    period: z
      .int()
      .exactOptional()
      .openapi({ description: 'The period value used for flow control.' }),
    parallelism: z
      .int()
      .exactOptional()
      .openapi({ description: 'The parallelism value used for flow control.' }),
  })
  .openapi({ required: [] })
  .openapi('Message')

const PublishResponseSchema = z
  .object({
    messageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the published message or the old message ID if deduplicated',
      }),
    deduplicated: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this message is a duplicate and was not sent to the destination.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PublishResponse')

const PublishToUrlGroupResponseSchema = z
  .object({
    messageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the published message or the old message ID if deduplicated',
      }),
    deduplicated: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this message is a duplicate and was not sent to the destination.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Destination URL of the URL Group endpoint.' }),
  })
  .openapi({ required: [] })
  .openapi('PublishToUrlGroupResponse')

const QueueSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the queue.' }),
    createdAt: z
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
        description: 'The creation timestamp of the queue in Unix milliseconds',
      }),
    updatedAt: z
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
        description: 'The last update timestamp of the queue in Unix milliseconds',
      }),
    parallelism: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of parallel consumers consuming from the queue' }),
    paused: z.boolean().exactOptional().openapi({ description: 'Whether the queue is paused' }),
    lag: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of unprocessed messages that exist in the queue' }),
  })
  .openapi({ required: [] })
  .openapi('Queue')

const ScheduleSchema = z
  .object({
    scheduleId: z.string().openapi({ description: 'Unique identifier for the schedule' }),
    cron: z.string().openapi({ description: 'The cron expression used to schedule the message' }),
    destination: z.string().openapi({ description: 'The destination URL or URL Group name' }),
    createdAt: z
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
        description: 'The creation timestamp of the schedule in unix milliseconds',
      }),
    method: z.string().openapi({ description: 'The HTTP method used for the scheduled message' }),
    header: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'Map of header names to arrays of header values' }),
    body: z.string().exactOptional().openapi({ description: 'The body of the scheduled message' }),
    retries: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of retries for the scheduled message' }),
    delay: z
      .int()
      .exactOptional()
      .openapi({ description: 'The delay in seconds before the scheduled message is sent' }),
    callback: z
      .string()
      .exactOptional()
      .openapi({ description: 'The callback URL for the scheduled message' }),
    failureCallback: z
      .string()
      .exactOptional()
      .openapi({ description: 'The failure callback URL for the scheduled message' }),
    callerIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IP address of the client that created the schedule' }),
    isPaused: z.boolean().openapi({ description: 'Whether the schedule is paused' }),
    flowControlKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The flow control key used for rate limiting' }),
    parallelism: z
      .int()
      .exactOptional()
      .openapi({ description: 'The parallelism value used for flow control' }),
    rate: z.int().exactOptional().openapi({ description: 'The rate value used for flow control' }),
    period: z
      .int()
      .exactOptional()
      .openapi({ description: 'The period value used for flow control' }),
    retryDelayExpression: z
      .string()
      .exactOptional()
      .openapi({ description: 'The retry delay expression used for calculating retry delays' }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The label assigned to the scheduled message. Deprecated in favor of `labels`.',
      }),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of labels assigned to the scheduled message.' }),
    lastScheduleTime: z
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
        description: 'The last time the schedule was triggered in unix milliseconds',
      }),
    nextScheduleTime: z
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
        description: 'The next scheduled trigger time in unix milliseconds',
      }),
    lastScheduleStates: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The states of the last scheduled messages' }),
  })
  .openapi({ required: ['scheduleId', 'cron', 'destination', 'createdAt', 'method', 'isPaused'] })
  .openapi('Schedule')

const EndpointSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the endpoint' }),
    url: z.string().exactOptional().openapi({ description: 'The URL of the endpoint' }),
  })
  .openapi({ required: [] })
  .openapi('Endpoint')

const URLGroupSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'URL Group name' }),
    createdAt: z
      .int()
      .exactOptional()
      .openapi({ description: 'Creation timestamp of URL Group in Unix milliseconds' }),
    updatedAt: z
      .int()
      .exactOptional()
      .openapi({ description: 'Last update timestamp of URL Group in Unix milliseconds' }),
    endpoints: z.array(EndpointSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('URLGroup')

const FlowControlKeySchema = z
  .object({
    flowControlKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The flow control key name' }),
    waitListSize: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of messages waiting due to flow control configuration.',
      }),
    parallelismMax: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The configured maximum number of messages allowed to run concurrently, if parallelism is set.',
      }),
    parallelismCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current number of messages running in parallel.' }),
    rateMax: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The configured maximum number of messages allowed per rate period, if rate limiting is set.',
      }),
    rateCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of messages dispatched in the current rate period.' }),
    ratePeriod: z
      .int()
      .exactOptional()
      .openapi({ description: 'The length of the rate period in seconds.' }),
    ratePeriodStart: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix timestamp (seconds) when the current rate period started.' }),
    isPinnedParallelism: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the flow-control key has a pinned parallelism configuration.',
      }),
    isPinnedRate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the flow-control key has a pinned rate configuration.' }),
    isPaused: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the delivery of messages associated with the flow-control key is paused.',
      }),
  })
  .openapi({ required: [] })
  .openapi('FlowControlKey')

const DLQMessageSchema = z
  .object({
    messageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the message' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to which the message should be delivered.' }),
    topicName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL Group (a.k.a. topic) name if this message was sent to a URL Group.',
      }),
    endpointName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The endpoint name of the message if the endpoint is given a name within the URL group.',
      }),
    method: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HTTP method to use for the message.' }),
    header: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The HTTP headers sent to your API.' }),
    body: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The body of the message if it is composed of utf8 chars only, empty otherwise.',
      }),
    bodyBase64: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The base64 encoded body if the body contains a non-utf8 char only, empty otherwise.',
      }),
    maxRetries: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of retries that should be attempted in case of delivery failure.',
      }),
    notBefore: z
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
          'The unix timestamp in milliseconds before which the message should not be delivered.',
      }),
    createdAt: z
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
        description: 'The unix timestamp in milliseconds when the message was created.',
      }),
    callback: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The url where we send a callback each time the message is attempted to be delivered.',
      }),
    failureCallback: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url where we send a callback to after the message is failed' }),
    queueName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the queue if the message is enqueued to a queue.' }),
    scheduleId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The scheduleId of the message if the message is triggered by a schedule',
      }),
    callerIP: z
      .string()
      .exactOptional()
      .openapi({ description: 'IP address of the publisher of this message.' }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The label of the message assigned by the user. Deprecated in favor of `labels`.',
      }),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of labels assigned to the message by the user.' }),
    flowControlKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The flow control key used for rate limiting.' }),
    rate: z.int().exactOptional().openapi({ description: 'The rate value used for flow control.' }),
    period: z
      .int()
      .exactOptional()
      .openapi({ description: 'The period value used for flow control.' }),
    parallelism: z
      .int()
      .exactOptional()
      .openapi({ description: 'The parallelism value used for flow control.' }),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'The HTTP status code received from the destination API.' }),
    responseHeader: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The HTTP response headers received from the destination API.' }),
    responseBody: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The body of the response if it is composed of utf8 chars only, empty otherwise.',
      }),
    responseBodyBase64: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The base64 encoded body of the response if the body contains a non-utf8 char only, empty otherwise.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DLQMessage')

const SigningKeysSchema = z
  .object({
    current: z.string().exactOptional().openapi({ description: 'The current signing key.' }),
    next: z.string().exactOptional().openapi({ description: 'The next signing key.' }),
  })
  .openapi({ required: [] })
  .openapi('SigningKeys')

const LogEntrySchema = z
  .object({
    time: z
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
        description: 'The timestamp of the log entry in Unix milliseconds',
      }),
    messageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message ID associated with the log entry' }),
    header: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The headers of the message.' }),
    body: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base64 encoded body of the message.' }),
    state: z
      .enum([
        'CREATED',
        'ACTIVE',
        'RETRY',
        'ERROR',
        'DELIVERED',
        'FAILED',
        'CANCEL_REQUESTED',
        'CANCELLED',
      ])
      .exactOptional()
      .openapi({ description: 'The state of the message at the time of the log entry.' }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The error message if the log entry corresponds to an error state.',
      }),
    nextDeliveryTime: z
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
        description: 'The next scheduled time of the message. (Unix timestamp in milliseconds)',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to which the message is being delivered.' }),
    topicName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL Group (a.k.a. topic) name if this message was sent to a URL Group.',
      }),
    endpointName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The endpoint name of the message if the endpoint is given a name within the URL group.',
      }),
    scheduleId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The scheduleId of the message if the message is triggered by a schedule',
      }),
    queueName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the queue if the message is enqueued to a queue.' }),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'The status code of the response. Only set if the state is ERROR' }),
    responseBody: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The base64 encoded body of the response. Only set if the state is ERROR',
      }),
    responseHeaders: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The headers of the response. Only set if the state is ERROR' }),
    timeout: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The timeout(in milliseconds) of the outgoing http requests, after which Qstash cancels the request',
      }),
    method: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTTP method of the message for outgoing request' }),
    callback: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Callback is the URL address where QStash sends the response of a publish',
      }),
    callbackHeaders: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The headers sent to the callback URL' }),
    failureCallback: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Failur eCallback is the URL address where QStash sends the response of a failed message after all retries are exhausted',
      }),
    failureCallbackHeaders: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ description: 'The headers sent to the failure callback URL' }),
    maxRetries: z
      .int()
      .exactOptional()
      .openapi({ description: 'The maximum number of retries for the message' }),
    retryDelayExpression: z
      .string()
      .exactOptional()
      .openapi({ description: 'The retry delay expression used for calculating retry delays' }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The label assigned to the message. Deprecated in favor of `labels`.',
      }),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of labels assigned to the message.' }),
  })
  .openapi({ required: [] })
  .openapi('LogEntry')

const BulkActionSchema = z
  .object({
    actionId: z.string().exactOptional().openapi({ description: 'The ID of the bulk action.' }),
    kind: z
      .literal('cancel')
      .exactOptional()
      .openapi({ description: 'The kind of the bulk action.' }),
    state: z
      .enum(['IN_PROGRESS', 'FINISHED'])
      .exactOptional()
      .openapi({
        description:
          'The state of the bulk action.\n\n|Value\t|Description|\n|-------|------------|\n| IN_PROGRESS\t|The bulk action is running in the background.|\n| FINISHED\t|The bulk action has finished.|\n',
      }),
    total: z
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
          'The number of in-progress messages that matched the filter when the bulk action was created.',
      }),
    processed: z
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
        description: 'The number of messages processed by the bulk action so far.',
      }),
    createdAt: z
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
        description: 'The creation time of the bulk action, in milliseconds (Unix timestamp).',
      }),
    completedAt: z
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
          'The completion time of the bulk action, in milliseconds (Unix timestamp). Only present once the bulk action has finished.',
      }),
    filter: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({
        description:
          'The filter the bulk action was created with. Keys are the filter parameter names of the bulk cancel request, such as `queueName`, `label` or `fromDate`, and values are the given values.\n',
        example: { queueName: ['my-queue'], label: ['label_1', 'label_2'] },
      }),
  })
  .openapi({ required: [] })
  .openapi('BulkAction')

const BearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
  description: 'QStash authentication token',
}

const BearerAuthQuerySecurityScheme = {
  type: 'apiKey',
  in: 'query',
  name: 'qstash_token',
  description: 'QStash authentication token passed as a query parameter',
}

export const postV2PublishDestinationRoute = createRoute({
  method: 'post',
  path: '/v2/publish/{destination}',
  tags: ['Messages'],
  summary: 'Publish a Message',
  description: 'Publish a message to the specified destination',
  request: {
    params: z.object({
      destination: z
        .string()
        .openapi({
          param: {
            name: 'destination',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description:
              'Destination can either be a valid URL where the message gets sent to, or a URL Group name. \n- If the destination is a URL, make sure the URL is prefixed with a valid protocol (http:// or https://)\n- If the destination is a URL Group, a new message will be created for each endpoint in the group.\n\nNote that destination must be publicly accessible over the internet. If you are working with local endpoints, consider using QStash local development server or a public tunnel service.\n',
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Content-Type',
            in: 'header',
            schema: { type: 'string' },
            description:
              '`Content-Type` is the MIME type of the message.\n\nWe highly recommend sending a `Content-Type` header along, as this will help your destination API to understand the content of the message.\n\nSet this to whatever data you are sending through QStash, if your message is json, then use `application/json`. Some frameworks like Next.js will not parse your body correctly if the content type is not correct.\n\nExamples:\n- `application/json`\n- `application/xml`\n- `application/octet-stream`\n- `text/plain`\n',
            required: false,
          },
        }),
      'Upstash-Forward-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Forward-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can send custom headers to your endpoint along with your message.\n\nTo send a custom header, prefix the header name with `Upstash-Forward-`. We will strip prefix and send them to the destination.\n\n| Header | Forwarded To Destination As |\n|--------|--------------|\n| Upstash-Forward-My-Header: my-value | My-Header: my-value |\n| Upstash-Forward-Authorization: Bearer <token> | Authorization: Bearer <token> |\n',
            required: false,
          },
        }),
      'Upstash-Method': z
        .enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
        .default('POST')
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Method',
            in: 'header',
            schema: {
              type: 'string',
              enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
              default: 'POST',
            },
            description: 'The HTTP method to use when sending the request to your API.',
            required: false,
          },
        }),
      'Upstash-Timeout': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Timeout',
            in: 'header',
            schema: { type: 'string', examples: ['5s', '2m', '1h', '1d1h30m'] },
            description:
              'Specifies the maximum duration the request is allowed to take before timing out.\n\nThis parameter can be used to shorten the default allowed timeout value on your plan. See `Max HTTP Connection Timeout` on the pricing page for default [values](https://upstash.com/pricing/qstash).\n\nThe format of this header is `<value><unit>` where value is a number and unit is one of:\n- `s` for seconds\n- `m` for minutes\n- `h` for hours.\n',
            required: false,
          },
          examples: ['5s', '2m', '1h', '1d1h30m'],
        }),
      'Upstash-Retries': z
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
            name: 'Upstash-Retries',
            in: 'header',
            schema: { type: 'integer' },
            description:
              'How many times should this message be retried in case the destination API returns an error or is not available.\n\nThe total number of deliveries is 1 (initial attempt) + retries.\n\nIf it is not provided, the default of 3 retries is used.\n',
            required: false,
          },
        }),
      'Upstash-Retry-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Retry-Delay',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Customize the delay between retry attempts when message delivery fails.\n\nBy default, QStash uses [exponential backoff](/qstash/features/retry). You can override this by providing a mathematical expressions to compute next delay. This expression is computed after each failed attempt.\n\nYou can use the special variable `retried`, which is how many times the message has been retried. The `retried` is 0 for the first retry.\n\nSupported functions: \n| Function    | Description                          |\n|-------------|--------------------------------------|\n| `pow(x, y)`| Returns x raised to the power of y|\n| `exp(x)`| Returns e raised to the power of x|\n| `sqrt(x)`| Takes the square root of x|\n| `abs(x)`| Returns the absolute value of x|\n| `floor(x)`| Returns the largest integer less than or equal to x|\n| `ceil(x)`| Returns the smallest integer greater than or equal to x|\n| `round(x)`| Rounds x to the nearest integer|\n| `min(x, y)`| Returns the smaller of x and y|\n| `max(x, y)`| Returns the larger of x and y|\n\nExamples:\n- `1000`: Fixed 1 second delay\n- `1000 * (1 + retried)`: Linear backoff\n- `pow(2, retried) * 1000`: Exponential backoff\n- `max(1000, pow(2, retried) * 100)`: Exponential with minimum 1s delay\n',
            required: false,
          },
        }),
      'Upstash-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Delay',
            in: 'header',
            schema: { type: 'string', examples: ['50s', '1d10h30m', '10h', '1d'] },
            description:
              'Delay the message delivery.\n\nThe format of this header is `<value><unit>` where value is a number and unit is one of:\n- `s` for seconds\n- `m` for minutes\n- `h` for hours.\n- `d` for days.\n',
            required: false,
          },
          examples: ['50s', '1d10h30m', '10h', '1d'],
        }),
      'Upstash-Not-Before': z
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
            name: 'Upstash-Not-Before',
            in: 'header',
            schema: { type: 'integer' },
            description:
              'Delay the message delivery until a certain timestamp in the future.\n\nThe format is a unix timestamp in seconds, based on the UTC timezone.\n\nWhen both `Upstash-Not-Before` and `Upstash-Delay` headers are provided, `Upstash-Not-Before` will take precedence.\n',
            required: false,
          },
        }),
      'Upstash-Label': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Label',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Label(s) to assign to the message for easier identification and filtering in logs and DLQ.\n\nYou can assign multiple labels by providing a comma-separated list.\n\nExample: `label_1,label_2`\n',
            required: false,
          },
        }),
      'Upstash-Flow-Control-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Flow-Control-Key',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Flow Control Key to use for rate limiting messages.\n\nMake sure you pass `Upstash-Flow-Control-Value` header as well to define the limits for the key.\n',
            required: false,
          },
        }),
      'Upstash-Flow-Control-Value': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Flow-Control-Value',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Flow Control parallelism, rate and period values to use for rate limiting messages for the given key.\nFormat: `parallelism=<value>, rate=<value>, period=<value>`. \nMake sure you pass `Upstash-Flow-Control-Key` header as well to define the key.\nSee [flow control](/qstash/features/flowcontrol) for details.\n',
            required: false,
          },
        }),
      'Upstash-Deduplication-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Deduplication-Id',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Deduplication ID to use for de-duplicating messages.\n\nIf a message with the same deduplication ID was published in the last 10 minutes, the new message will be ignored.\n',
            required: false,
          },
        }),
      'Upstash-Content-Based-Deduplication': z
        .enum(['true', 'false'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Content-Based-Deduplication',
            in: 'header',
            schema: { type: 'string', enum: ['true', 'false'], default: 'false' },
            description:
              'Enable content based deduplication.\n\nWhen enabled, QStash will compute a hash of the message body and use it as deduplication ID.\nIf a message with the same content was published in the last 10 minutes, the new message will be ignored.\n',
            required: false,
          },
        }),
      'Upstash-Callback': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Callback',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can define a callback url that will be called after message delivery, either success or failure. See the content of what will be delivered to a callback [here](/qstash/features/callbacks#how-do-i-use-callbacks).\n\n- Callback URL must be prefixed with a valid protocol (http:// or https://)\n- Callbacks are charged as a regular message.\n- Callbacks will use the retry setting from the original request.\n',
            required: false,
          },
        }),
      'Upstash-Callback-Forward-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Callback-Forward-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can send custom headers along with your callback message.\nTo send a custom header, prefix the header name with `Upstash-Callback-Forward-`. We will strip prefix and them to the callback URL.\n\n| Header | Forwarded To Callback Destination As |\n|--------|--------------|\n| Upstash-Callback-Forward-My-Header: my-value | My-Header: my-value |\n| Upstash-Callback-Forward-Authorization: Bearer <token> | Authorization: Bearer <token> |\n',
            required: false,
          },
        }),
      'Upstash-Callback-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Callback-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can customize the callback message configuration.\n\nSee [the Configuring Callbacks](/qstash/features/callbacks#configuring-callbacks) section to learn more.\n\n| Header | Description |\n|--------|--------------|\n| Upstash-Callback-Method | HTTP method to use for the callback request. Default is POST. |\n| Upstash-Callback-Timeout | Timeout for the callback request. Format is same as Upstash-Timeout header. |\n| Upstash-Callback-Retries | Number of retries for the callback request. Default is same as original message retries. |\n| Upstash-Callback-Retry-Delay | Retry delay for the callback request. Format is same as Upstash-Retry-Delay header. |\n',
            required: false,
          },
        }),
      'Upstash-Failure-Callback': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Failure-Callback',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can define a failure callback url that will be called when a delivery is failed. That is when all the defined retries are exhausted. See the content of what will be delivered to a failure callback (here)[/qstash/features/callbacks#how-do-i-use-callbacks]\n\n- Failure callback URL must be prefixed with a valid protocol (http:// or https://)\n- Failure callbacks are charged as a regular message.\n- Failure callbacks will use the retry setting from the original request.\n',
            required: false,
          },
        }),
      'Upstash-Failure-Callback-Forward-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Failure-Callback-Forward-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can send custom headers along with your failure callback message.\nTo send a custom header, prefix the header name with `Upstash-Failure-Callback-Forward-`. We will strip prefix and them to the failure callback URL.\n\n| Header | Forwarded To Callback Destination As |\n|--------|--------------|\n| Upstash-Failure-Callback-Forward-My-Header: my-value | My-Header: my-value |\n| Upstash-Failure-Callback-Forward-Authorization: Bearer <token> | Authorization: Bearer <token> |\n',
            required: false,
          },
        }),
      'Upstash-Failure-Callback-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Failure-Callback-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can customize the failure callback message configuration.\n\nSee [the Configuring Callbacks](/qstash/features/callbacks#configuring-callbacks) section to learn more.\n\n| Header | Description |\n|--------|--------------|\n| Upstash-Failure-Callback-Method | HTTP method to use for the callback request. Default is POST. |\n| Upstash-Failure-Callback-Timeout | Timeout for the callback request. Format is same as Upstash-Timeout header. |\n| Upstash-Failure-Callback-Retries | Number of retries for the callback request. Default is same as original message retries. |\n| Upstash-Failure-Callback-Retry-Delay | Retry delay for the callback request. Format is same as Upstash-Retry-Delay header. |\n',
            required: false,
          },
        }),
      'Upstash-Redact-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Redact-Fields',
            in: 'header',
            schema: { type: 'string' },
            description:
              "Comma-separated list of fields to redact from the schedule. Redacted fields appear as `REDACTED:<SHA256>` in the dashboard and API responses. The original values are still used when delivering messages to your endpoint.\n\nAll messages produced by this schedule will have the specified fields redacted. Schedule get and list endpoints also apply redaction, so private data won't appear in API responses or the dashboard.\n\nAvailable options:\n| Option | Description |\n|--------|-------------|\n| `body` | Redact the body of the message |\n| `headers` | Redact all headers of the message |\n| `header[header_name]` | Redact a specific header (e.g., `header[Authorization]`) |\n\nExamples:\n- `body`: Redact only the body\n- `body, header[Authorization]`: Redact the body and the Authorization header\n- `body, headers`: Redact both body and all headers\n",
            required: false,
          },
        }),
    }),
    body: {
      description: 'The raw request message passed to the endpoints as is',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.object({}) },
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Message(s) published successfully',
      content: {
        'application/json': {
          schema: z.xor([
            PublishResponseSchema.openapi({ description: 'Published to a URL destination' }),
            z
              .object({ messages: z.array(PublishToUrlGroupResponseSchema).exactOptional() })
              .openapi({
                description:
                  'Published to URL Group and created multiple messages for each endpoint the URL Group',
                required: [],
              }),
          ]),
        },
      },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postV2EnqueueQueueNameDestinationRoute = createRoute({
  method: 'post',
  path: '/v2/enqueue/{queueName}/{destination}',
  tags: ['Messages'],
  summary: 'Enqueue a Message',
  description: 'Enqueue a message to the specified queue',
  request: {
    params: z.object({
      queueName: z
        .string()
        .openapi({
          param: {
            name: 'queueName',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the queue to enqueue the message to.',
          },
        }),
      destination: z
        .string()
        .openapi({
          param: {
            name: 'destination',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description:
              'Destination can either be a valid URL where the message gets sent to, or a URL Group name. \n- If the destination is a URL, make sure the URL is prefixed with a valid protocol (http:// or https://)\n- If the destination is a URL Group, a new message will be created for each endpoint in the group.\n\nNote that destination must be publicly accessible over the internet. If you are working with local endpoints, consider using QStash local development server or a public tunnel service.\n',
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Content-Type',
            in: 'header',
            schema: { type: 'string' },
            description:
              '`Content-Type` is the MIME type of the message.\n\nWe highly recommend sending a `Content-Type` header along, as this will help your destination API to understand the content of the message.\n\nSet this to whatever data you are sending through QStash, if your message is json, then use `application/json`. Some frameworks like Next.js will not parse your body correctly if the content type is not correct.\n\nExamples:\n- `application/json`\n- `application/xml`\n- `application/octet-stream`\n- `text/plain`\n',
            required: false,
          },
        }),
      'Upstash-Forward-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Forward-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can send custom headers to your endpoint along with your message.\n\nTo send a custom header, prefix the header name with `Upstash-Forward-`. We will strip prefix and send them to the destination.\n\n| Header | Forwarded To Destination As |\n|--------|--------------|\n| Upstash-Forward-My-Header: my-value | My-Header: my-value |\n| Upstash-Forward-Authorization: Bearer <token> | Authorization: Bearer <token> |\n',
            required: false,
          },
        }),
      'Upstash-Method': z
        .enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
        .default('POST')
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Method',
            in: 'header',
            schema: {
              type: 'string',
              enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
              default: 'POST',
            },
            description: 'The HTTP method to use when sending the request to your API.',
            required: false,
          },
        }),
      'Upstash-Timeout': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Timeout',
            in: 'header',
            schema: { type: 'string', examples: ['5s', '2m', '1h', '1d1h30m'] },
            description:
              'Specifies the maximum duration the request is allowed to take before timing out.\n\nThis parameter can be used to shorten the default allowed timeout value on your plan. See `Max HTTP Connection Timeout` on the pricing page for default [values](https://upstash.com/pricing/qstash).\n\nThe format of this header is `<value><unit>` where value is a number and unit is one of:\n- `s` for seconds\n- `m` for minutes\n- `h` for hours.\n',
            required: false,
          },
          examples: ['5s', '2m', '1h', '1d1h30m'],
        }),
      'Upstash-Retries': z
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
            name: 'Upstash-Retries',
            in: 'header',
            schema: { type: 'integer' },
            description:
              'How many times should this message be retried in case the destination API returns an error or is not available.\n\nThe total number of deliveries is 1 (initial attempt) + retries.\n\nIf it is not provided, the default of 3 retries is used.\n',
            required: false,
          },
        }),
      'Upstash-Retry-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Retry-Delay',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Customize the delay between retry attempts when message delivery fails.\n\nBy default, QStash uses [exponential backoff](/qstash/features/retry). You can override this by providing a mathematical expressions to compute next delay. This expression is computed after each failed attempt.\n\nYou can use the special variable `retried`, which is how many times the message has been retried. The `retried` is 0 for the first retry.\n\nSupported functions: \n| Function    | Description                          |\n|-------------|--------------------------------------|\n| `pow(x, y)`| Returns x raised to the power of y|\n| `exp(x)`| Returns e raised to the power of x|\n| `sqrt(x)`| Takes the square root of x|\n| `abs(x)`| Returns the absolute value of x|\n| `floor(x)`| Returns the largest integer less than or equal to x|\n| `ceil(x)`| Returns the smallest integer greater than or equal to x|\n| `round(x)`| Rounds x to the nearest integer|\n| `min(x, y)`| Returns the smaller of x and y|\n| `max(x, y)`| Returns the larger of x and y|\n\nExamples:\n- `1000`: Fixed 1 second delay\n- `1000 * (1 + retried)`: Linear backoff\n- `pow(2, retried) * 1000`: Exponential backoff\n- `max(1000, pow(2, retried) * 100)`: Exponential with minimum 1s delay\n',
            required: false,
          },
        }),
      'Upstash-Label': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Label',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Label(s) to assign to the message for easier identification and filtering in logs and DLQ.\n\nYou can assign multiple labels by providing a comma-separated list.\n\nExample: `label_1,label_2`\n',
            required: false,
          },
        }),
      'Upstash-Deduplication-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Deduplication-Id',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Deduplication ID to use for de-duplicating messages.\n\nIf a message with the same deduplication ID was published in the last 10 minutes, the new message will be ignored.\n',
            required: false,
          },
        }),
      'Upstash-Content-Based-Deduplication': z
        .enum(['true', 'false'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Content-Based-Deduplication',
            in: 'header',
            schema: { type: 'string', enum: ['true', 'false'], default: 'false' },
            description:
              'Enable content based deduplication.\n\nWhen enabled, QStash will compute a hash of the message body and use it as deduplication ID.\nIf a message with the same content was published in the last 10 minutes, the new message will be ignored.\n',
            required: false,
          },
        }),
      'Upstash-Callback': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Callback',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can define a callback url that will be called after message delivery, either success or failure. See the content of what will be delivered to a callback [here](/qstash/features/callbacks#how-do-i-use-callbacks).\n\n- Callback URL must be prefixed with a valid protocol (http:// or https://)\n- Callbacks are charged as a regular message.\n- Callbacks will use the retry setting from the original request.\n',
            required: false,
          },
        }),
      'Upstash-Callback-Forward-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Callback-Forward-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can send custom headers along with your callback message.\nTo send a custom header, prefix the header name with `Upstash-Callback-Forward-`. We will strip prefix and them to the callback URL.\n\n| Header | Forwarded To Callback Destination As |\n|--------|--------------|\n| Upstash-Callback-Forward-My-Header: my-value | My-Header: my-value |\n| Upstash-Callback-Forward-Authorization: Bearer <token> | Authorization: Bearer <token> |\n',
            required: false,
          },
        }),
      'Upstash-Callback-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Callback-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can customize the callback message configuration.\n\nSee [the Configuring Callbacks](/qstash/features/callbacks#configuring-callbacks) section to learn more.\n\n| Header | Description |\n|--------|--------------|\n| Upstash-Callback-Method | HTTP method to use for the callback request. Default is POST. |\n| Upstash-Callback-Timeout | Timeout for the callback request. Format is same as Upstash-Timeout header. |\n| Upstash-Callback-Retries | Number of retries for the callback request. Default is same as original message retries. |\n| Upstash-Callback-Retry-Delay | Retry delay for the callback request. Format is same as Upstash-Retry-Delay header. |\n',
            required: false,
          },
        }),
      'Upstash-Failure-Callback': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Failure-Callback',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can define a failure callback url that will be called when a delivery is failed. That is when all the defined retries are exhausted. See the content of what will be delivered to a failure callback [here](/qstash/features/callbacks#how-do-i-use-callbacks)\n\n- Failure callback URL must be prefixed with a valid protocol (http:// or https://)\n- Failure callbacks are charged as a regular message.\n- Failure callbacks will use the retry setting from the original request.\n',
            required: false,
          },
        }),
      'Upstash-Failure-Callback-Forward-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Failure-Callback-Forward-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can send custom headers along with your failure callback message.\nTo send a custom header, prefix the header name with `Upstash-Failure-Callback-Forward-`. We will strip prefix and them to the failure callback URL.\n\n| Header | Forwarded To Callback Destination As |\n|--------|--------------|\n| Upstash-Failure-Callback-Forward-My-Header: my-value | My-Header: my-value |\n| Upstash-Failure-Callback-Forward-Authorization: Bearer <token> | Authorization: Bearer <token> |\n',
            required: false,
          },
        }),
      'Upstash-Failure-Callback-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Failure-Callback-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can customize the failure callback message configuration.\n\nSee [the Configuring Callbacks](/qstash/features/callbacks#configuring-callbacks) section to learn more.\n\n| Header | Description |\n|--------|--------------|\n| Upstash-Failure-Callback-Method | HTTP method to use for the callback request. Default is POST. |\n| Upstash-Failure-Callback-Timeout | Timeout for the callback request. Format is same as Upstash-Timeout header. |\n| Upstash-Failure-Callback-Retries | Number of retries for the callback request. Default is same as original message retries. |\n| Upstash-Failure-Callback-Retry-Delay | Retry delay for the callback request. Format is same as Upstash-Retry-Delay header. |\n',
            required: false,
          },
        }),
      'Upstash-Redact-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Redact-Fields',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Comma-separated list of fields to redact from the message. Redacted fields appear as `REDACTED:<SHA256>` in the dashboard and API responses. The original values are still used when delivering messages to your endpoint.\n\nAvailable options:\n| Option | Description |\n|--------|-------------|\n| `body` | Redact the body of the message |\n| `headers` | Redact all headers of the message |\n| `header[header_name]` | Redact a specific header (e.g., `header[Authorization]`) |\n\nExamples:\n- `body`: Redact only the body\n- `body, header[Authorization]`: Redact the body and the Authorization header\n- `body, headers`: Redact both body and all headers\n',
            required: false,
          },
        }),
    }),
    body: {
      description: 'The raw request message passed to the endpoints as is',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.object({}) },
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Message(s) enqueued successfully',
      content: {
        'application/json': {
          schema: z.xor([
            PublishResponseSchema.openapi({
              description: 'Enqueued a message to a URL destination',
            }),
            z
              .object({ messages: z.array(PublishToUrlGroupResponseSchema).exactOptional() })
              .openapi({
                description:
                  'Enqueued to URL Group and created multiple messages for each endpoint the URL Group',
                required: [],
              }),
          ]),
        },
      },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    404: {
      description: 'Queue not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2BatchRoute = createRoute({
  method: 'post',
  path: '/v2/batch',
  tags: ['Messages'],
  summary: 'Batch Messages',
  description: 'Send multiple messages in a single request',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                destination: z
                  .string()
                  .openapi({
                    description:
                      'Destination can either be a valid URL where the message gets sent to, or a URL Group name. \n- If the destination is a URL, make sure the URL is prefixed with a valid protocol (http:// or https://)\n- If the destination is a URL Group, a new message will be created for each endpoint in the group.\n\nNote that destination must be publicly accessible over the internet. If you are working with local endpoints, consider using QStash local development server or a public tunnel service.\n',
                  }),
                body: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The raw request message passed to the endpoints as is',
                  }),
                headers: z
                  .record(z.string(), z.string())
                  .exactOptional()
                  .openapi({
                    description:
                      'HTTP headers of the message. You can pass all the headers supported in the single publish API.',
                  }),
                queue: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Queue name to enqueue the message to if desired.' }),
              })
              .openapi({ required: ['destination'] }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Messages published successfully',
      content: { 'application/json': { schema: z.array(PublishResponseSchema) } },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getV2MessagesMessageIdRoute = createRoute({
  method: 'get',
  path: '/v2/messages/{messageId}',
  tags: ['Messages'],
  summary: 'Get a Message',
  description: 'Retrieve details of a specific message',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The identifier of the message to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Message details',
      content: { 'application/json': { schema: MessageSchema } },
    },
    404: {
      description: 'Message not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV2MessagesMessageIdRoute = createRoute({
  method: 'delete',
  path: '/v2/messages/{messageId}',
  tags: ['Messages'],
  summary: 'Cancel a Message',
  description: 'Cancel a pending message',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The identifier of the message to cancel.',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Message canceled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              cancelled: z
                .int()
                .exactOptional()
                .openapi({ description: 'Number of messages cancelled. Always `1`.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Message not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2MessagesMessageIdRetryRoute = createRoute({
  method: 'post',
  path: '/v2/messages/{messageId}/retry',
  tags: ['Messages'],
  summary: 'Retry a Message Now',
  description: 'Deliver a delayed message, or a message waiting for its next retry, immediately',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The identifier of the message to deliver now.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The message is rescheduled for immediate delivery.' },
    400: {
      description: 'The message id is invalid, or the message belongs to a queue.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Message not found, or the message is not waiting for a delay or a retry.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV2MessagesRoute = createRoute({
  method: 'delete',
  path: '/v2/messages',
  tags: ['Messages'],
  summary: 'Bulk Cancel Messages',
  description: 'Delete all pending messages',
  request: {
    query: z.object({
      messageIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'messageIds',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'A list of message IDs to delete. If provided, other filters are ignored.',
          },
        }),
      topicName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'topicName',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter messages by URL Group name. Supports multiple values.',
          },
        }),
      queueName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'queueName',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter messages by Queue name. Supports multiple values.',
          },
        }),
      url: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter messages by destination URL. Supports multiple values.',
          },
        }),
      host: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'host',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter messages by the host of the destination URL. Supports multiple values.',
          },
        }),
      path: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter messages by the path of the destination URL. Supports multiple values.',
          },
        }),
      label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'label',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter messages by label. Supports multiple values. You can pass multiple values to match messages with any of the given labels (OR logic).\n\nExamples:\n- `label=my_label`\n- `label=label_1&label=label_2`\n- `label=label_1,label_2`\n',
          },
        }),
      flowControlKey: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter messages by Flow Control Key. Supports multiple values.',
          },
        }),
      fromDate: z
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
            name: 'fromDate',
            in: 'query',
            required: false,
            schema: { type: 'integer' },
            description: 'Filter messages created after this timestamp (Unix milli, inclusive).',
          },
        }),
      toDate: z
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
            name: 'toDate',
            in: 'query',
            required: false,
            schema: { type: 'integer' },
            description: 'Filter messages created before this timestamp (Unix milli, inclusive).',
          },
        }),
      scheduleId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter messages by Schedule ID. Supports multiple values.',
          },
        }),
      callerIp: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'callerIp',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter messages by the IP address of the publisher. Supports multiple values.',
          },
        }),
      callerIP: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'callerIP',
            in: 'query',
            required: false,
            deprecated: true,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Deprecated. Use `callerIp` instead.',
          },
        }),
      async: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'async',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false },
            description:
              'Only applies to filter-based cancels. If `true`, the request returns as soon as the bulk action is created, without waiting for it to finish. The response includes the `actionId` of the bulk action.\n',
          },
        }),
      count: z
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
            name: 'count',
            in: 'query',
            required: false,
            deprecated: true,
            schema: { type: 'integer' },
            description:
              'Deprecated. This parameter is ignored, and all messages matching the filters are cancelled.',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Messages cancelled, or the bulk action is created when `async=true`.',
      content: {
        'application/json': {
          schema: z
            .object({
              cancelled: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'When cancelling by `messageIds`, the number of messages cancelled.\n\nFor filter-based cancels, the number of in-progress messages that matched the filters when the request was accepted.\n',
                }),
              actionId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the bulk action. Only returned for filter-based cancels with `async=true`.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    412: {
      description:
        'Too many bulk actions are in progress. Up to 1000 bulk actions can be in progress at the same time.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description:
        'The bulk action did not finish within one minute. It keeps running in the background and can be tracked via `GET /v2/bulkActions`.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2BulkActionsRoute = createRoute({
  method: 'get',
  path: '/v2/bulkActions',
  tags: ['Bulk Actions'],
  summary: 'List Bulk Actions',
  description: 'List the bulk actions created by filter-based message cancels',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description: 'By providing a cursor you can paginate through all of the bulk actions.',
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 1, default: 100, maximum: 1000 },
            description:
              'The number of bulk actions to scan per page. Values above 1000 are treated as 1000.',
          },
        }),
      state: z
        .enum(['IN_PROGRESS', 'FINISHED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['IN_PROGRESS', 'FINISHED'] },
            description: 'Filter bulk actions by state.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of bulk actions',
      content: {
        'application/json': {
          schema: z
            .object({
              bulkActions: z.array(BulkActionSchema).exactOptional(),
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A cursor which you can use in subsequent requests to paginate through all bulk actions.\nIf no cursor is returned, you have reached the end of the bulk actions.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid `count`, `cursor` or `state`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2BulkActionsActionIdRoute = createRoute({
  method: 'get',
  path: '/v2/bulkActions/{actionId}',
  tags: ['Bulk Actions'],
  summary: 'Get a Bulk Action',
  description: 'Retrieve the details and progress of a bulk action',
  request: {
    params: z.object({
      actionId: z
        .string()
        .openapi({
          param: {
            name: 'actionId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description:
              'The ID of the bulk action, as returned by a filter-based bulk cancel with `async=true`.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Bulk action details',
      content: { 'application/json': { schema: BulkActionSchema } },
    },
    404: {
      description: 'Bulk action not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2QueuesRoute = createRoute({
  method: 'get',
  path: '/v2/queues',
  tags: ['Queues'],
  summary: 'List Queues',
  description: 'List all your queues',
  responses: {
    200: {
      description: 'List of queues',
      content: { 'application/json': { schema: z.array(QueueSchema) } },
    },
  },
})

export const postV2QueuesRoute = createRoute({
  method: 'post',
  path: '/v2/queues',
  tags: ['Queues'],
  summary: 'Upsert a Queue',
  description: 'Updates or creates a queue',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              queueName: z.string().openapi({ description: 'The name of the queue' }),
              parallelism: z
                .int()
                .min(1)
                .default(1)
                .openapi({
                  description:
                    'The number of parallel consumers consuming from the queue. Must be greater than 0.\n',
                }),
            })
            .openapi({ required: ['queueName', 'parallelism'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Queue created or updated successfully' },
    400: {
      description:
        'Queue name is invalid. Queue names can only contain alphanumeric characters, hyphens, periods, and underscores.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    412: {
      description:
        'Either exceeded the maximum number of queues allowed or the maximum parallelism per queue.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2QueuesQueueNameRoute = createRoute({
  method: 'get',
  path: '/v2/queues/{queueName}',
  tags: ['Queues'],
  summary: 'Get a Queue',
  description: 'Get details of a specific queue',
  request: {
    params: z.object({
      queueName: z
        .string()
        .openapi({
          param: {
            name: 'queueName',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the queue to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: QueueSchema } } },
    400: {
      description:
        'Queue name is invalid. Queue names can only contain alphanumeric characters, hyphens, periods, and underscores.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Queue not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV2QueuesQueueNameRoute = createRoute({
  method: 'delete',
  path: '/v2/queues/{queueName}',
  tags: ['Queues'],
  summary: 'Delete a queue',
  description: 'Deletes a queue',
  request: {
    params: z.object({
      queueName: z
        .string()
        .openapi({
          param: {
            name: 'queueName',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the queue to delete.',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Queue deleted successfully' } },
})

export const postV2QueuesQueueNamePauseRoute = createRoute({
  method: 'post',
  path: '/v2/queues/{queueName}/pause',
  tags: ['Queues'],
  summary: 'Pause Queue',
  description: 'Pause a queue to stop the delivery of enqueued messages',
  request: {
    params: z.object({
      queueName: z
        .string()
        .openapi({
          param: {
            name: 'queueName',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the queue to pause.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Queue paused successfully' },
    400: {
      description:
        'Queue name is invalid. Queue names can only contain alphanumeric characters, hyphens, periods, and underscores.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2QueuesQueueNameResumeRoute = createRoute({
  method: 'post',
  path: '/v2/queues/{queueName}/resume',
  tags: ['Queues'],
  summary: 'Resume Queue',
  description: 'Resumes a queue to starts the delivery of enqueued messages',
  request: {
    params: z.object({
      queueName: z
        .string()
        .openapi({
          param: {
            name: 'queueName',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the queue to resume.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Queue resumed successfully' },
    400: {
      description:
        'Queue name is invalid. Queue names can only contain alphanumeric characters, hyphens, periods, and underscores.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2SchedulesDestinationRoute = createRoute({
  method: 'post',
  path: '/v2/schedules/{destination}',
  tags: ['Schedules'],
  summary: 'Create a Schedule',
  description: 'Create a schedule to send messages periodically',
  request: {
    params: z.object({
      destination: z
        .string()
        .openapi({
          param: {
            name: 'destination',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description:
              'Destination can either be a valid URL where the message gets sent to, or a URL Group name. \n- If the destination is a URL, make sure the URL is prefixed with a valid protocol (http:// or https://)\n- If the destination is a URL Group, a new message will be created for each endpoint in the group.\n',
          },
        }),
    }),
    headers: z.object({
      'Upstash-Cron': z
        .string()
        .openapi({
          param: {
            name: 'Upstash-Cron',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              examples: ['*/5 * * * *', 'CRON_TZ=America/New_York */5 * * * *'],
            },
            description:
              'Cron expression defining the schedule frequency. QStash republishes this message whenever the cron expression triggers.\n\nTimezones are supported and can be specified with the cron expression. \n\nThe maximum schedule resolution is 1 minute.\n',
          },
          examples: ['*/5 * * * *', 'CRON_TZ=America/New_York */5 * * * *'],
        }),
      'Upstash-Schedule-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Schedule-Id',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Assign a custom schedule ID to the created schedule. This header allows you to set the schedule ID yourself instead of QStash assigning a random ID.\n\nIf a schedule with the provided ID exists, the settings of the existing schedule will be updated with the new settings.\n',
            required: false,
          },
        }),
      'Content-Type': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Content-Type',
            in: 'header',
            schema: { type: 'string' },
            description:
              '`Content-Type` is the MIME type of the message.\n\nWe highly recommend sending a `Content-Type` header along, as this will help your destination API to understand the content of the message.\n\nSet this to whatever data you are sending through QStash, if your message is json, then use `application/json`. Some frameworks like Next.js will not parse your body correctly if the content type is not correct.\n\nExamples:\n- `application/json`\n- `application/xml`\n- `application/octet-stream`\n- `text/plain`\n',
            required: false,
          },
        }),
      'Upstash-Method': z
        .enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
        .default('POST')
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Method',
            in: 'header',
            schema: {
              type: 'string',
              enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
              default: 'POST',
            },
            description: 'The HTTP method to use when sending the request to your API.',
            required: false,
          },
        }),
      'Upstash-Timeout': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Timeout',
            in: 'header',
            schema: { type: 'string', examples: ['5s', '2m', '1h'] },
            description:
              'Specifies the maximum duration the request is allowed to take before timing out.\n\nThis parameter can be used to shorten the default allowed timeout value on your plan. See Max HTTP Connection Timeout on the pricing page for default values.\n\nThe format of this header is `<value><unit>` where value is a number and unit is one of:\n- `s` for seconds\n- `m` for minutes\n- `h` for hours.\n',
            required: false,
          },
          examples: ['5s', '2m', '1h'],
        }),
      'Upstash-Retries': z
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
            name: 'Upstash-Retries',
            in: 'header',
            schema: { type: 'integer' },
            description:
              'How many times should this message be retried in case the destination API returns an error or is not available.\nThe total number of deliveries is 1 (initial attempt) + retries.\n\nIf it is not provided, the default of 3 retries is used.\n',
            required: false,
          },
        }),
      'Upstash-Retry-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Retry-Delay',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Customize the delay between retry attempts when message delivery fails.\n\nBy default, QStash uses exponential backoff. You can override this by providing a mathematical expressions to compute next delay. This expression is computed after each failed attempt.\n\nYou can use the special variable `retried`, which is current retry attempt. The `retried` is 0 for the first retry. This variable is provided during computation of the expression by QStash.\n\nSupported functions: \n| Function    | Description                          |\n|-------------|--------------------------------------|\n| `pow(x, y)`| Returns x raised to the power of y|\n| `exp(x)`| Returns e raised to the power of x|\n| `sqrt(x)`| Takes the square root of x|\n| `abs(x)`| Returns the absolute value of x|\n| `floor(x)`| Returns the largest integer less than or equal to x|\n| `ceil(x)`| Returns the smallest integer greater than or equal to x|\n| `round(x)`| Rounds x to the nearest integer|\n| `min(x, y)`| Returns the smaller of x and y|\n| `max(x, y)`| Returns the larger of x and y|\n\nExamples:\n- `1000`: Fixed 1 second delay\n- `1000 * (1 + retried)`: Linear backoff\n- `pow(2, retried) * 1000`: Exponential backoff\n- `max(1000, pow(2, retried) * 100)`: Exponential with minimum 1s delay\n',
            required: false,
          },
        }),
      'Upstash-Delay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Delay',
            in: 'header',
            schema: { type: 'string', examples: ['50s', '1d10m', '10h', '1d'] },
            description:
              'Delay the message delivery.\n\nThe format of this header is `<value><unit>` where value is a number and unit is one of:\n- `s` for seconds\n- `m` for minutes\n- `h` for hours.\n- `d` for days.\n',
            required: false,
          },
          examples: ['50s', '1d10m', '10h', '1d'],
        }),
      'Upstash-Forward-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Forward-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can send custom headers to your endpoint along with your message.\n\nTo send a custom header, prefix the header name with `Upstash-Forward-`. We will strip prefix and send them to the destination.\n\n| Header | Forwarded As |\n|--------|--------------|\n| Upstash-Forward-My-Header: my-value | My-Header: my-value |\n| Upstash-Forward-Authorization: Bearer <token> | Authorization: Bearer <token> |\n',
            required: false,
          },
        }),
      'Upstash-Callback': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Callback',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can define a callback url that will be called after each attempt. See the content of what will be delivered to a callback here\nThe callback URL must be prefixed with a valid protocol (http:// or https://)\n\nCallbacks are charged as a regular message.\nCallbacks will use the retry setting from the original request.\n',
            required: false,
          },
        }),
      'Upstash-Callback-Forward-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Callback-Forward-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can send custom headers along with your callback message.\nTo send a custom header, prefix the header name with `Upstash-Callback-Forward-`. We will strip prefix and them to the callback URL.\n\nExample: \n- `Upstash-Callback-Forward-My-Header: my-value` will be forwarded as `My-Header: my-value` to your callback destination.\n',
            required: false,
          },
        }),
      'Upstash-Callback-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Callback-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can customize the callback message configuration.\n\n| Header | Description |\n|--------|--------------|\n| Upstash-Callback-Method | HTTP method to use for the callback request. Default is POST. |\n| Upstash-Callback-Timeout | Timeout for the callback request. Format is same as Upstash-Timeout header. |\n| Upstash-Callback-Retries | Number of retries for the callback request. Default is same as original message retries. |\n| Upstash-Callback-Retry-Delay | Retry delay for the callback request. Format is same as Upstash-Retry-Delay header. |\n',
            required: false,
          },
        }),
      'Upstash-Failure-Callback': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Failure-Callback',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can define a failure callback url that will be called when a delivery is failed. That is when all the defined retries are exhausted. See the content of what will be delivered to a failure callback here\nThe failure callback url must be prefixed with a valid protocol (http:// or https://)\nCallbacks are charged as a regular message.\nCallbacks will use the retry setting from the original request.\n',
            required: false,
          },
        }),
      'Upstash-Failure-Callback-Forward-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Failure-Callback-Forward-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can send custom headers along with your failure callback message.\nTo send a custom header, prefix the header name with `Upstash-Failure-Callback-Forward-`. We will strip prefix and them to the failure callback URL.\n\nExample: \n- `Upstash-Failure-Callback-Forward-My-Header: my-value` will be forwarded as `My-Header: my-value` to your failure callback destination.\n',
            required: false,
          },
        }),
      'Upstash-Failure-Callback-*': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Failure-Callback-*',
            in: 'header',
            schema: { type: 'string' },
            description:
              'You can customize the failure callback message configuration.\n\n| Header | Description |\n|--------|--------------|\n| Upstash-Failure-Callback-Method | HTTP method to use for the callback request. Default is POST. |\n| Upstash-Failure-Callback-Timeout | Timeout for the callback request. Format is same as Upstash-Timeout header. |\n| Upstash-Failure-Callback-Retries | Number of retries for the callback request. Default is same as original message retries. |\n| Upstash-Failure-Callback-Retry-Delay | Retry delay for the callback request. Format is same as Upstash-Retry-Delay header. |\n',
            required: false,
          },
        }),
      'Upstash-Redact-Fields': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Redact-Fields',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Comma-separated list of fields to redact from the message. Redacted fields appear as `REDACTED:<SHA256>` in the dashboard and API responses. The original values are still used when delivering messages to your endpoint.\n\nAvailable options:\n| Option | Description |\n|--------|-------------|\n| `body` | Redact the body of the message |\n| `headers` | Redact all headers of the message |\n| `header[header_name]` | Redact a specific header (e.g., `header[Authorization]`) |\n\nExamples:\n- `body`: Redact only the body\n- `body, header[Authorization]`: Redact the body and the Authorization header\n- `body, headers`: Redact both body and all headers\n',
            required: false,
          },
        }),
      'Upstash-Label': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Upstash-Label',
            in: 'header',
            schema: { type: 'string' },
            description:
              'Label(s) to assign to the scheduled message for easier identification and filtering in logs and DLQ.\n\nYou can assign multiple labels by providing a comma-separated list.\n\nExample: `label_1,label_2`\n',
            required: false,
          },
        }),
    }),
    body: {
      description: 'The raw request message passed to the endpoints as is',
      content: {
        'application/json': { schema: z.object({}) },
        'text/plain': { schema: z.string() },
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Schedule created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              scheduleId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique identifier for the schedule' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Schedule ID is invalid. Schedule IDs can only contain alphanumeric characters, hyphens, periods, and underscores.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    412: {
      description: 'Exceeded the maximum number of schedules allowed.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2SchedulesRoute = createRoute({
  method: 'get',
  path: '/v2/schedules',
  tags: ['Schedules'],
  summary: 'List schedules',
  description: 'List all schedules',
  responses: {
    200: {
      description: 'List of schedules',
      content: { 'application/json': { schema: z.array(ScheduleSchema) } },
    },
  },
})

export const getV2SchedulesScheduleIdRoute = createRoute({
  method: 'get',
  path: '/v2/schedules/{scheduleId}',
  tags: ['Schedules'],
  summary: 'Get a Schedule',
  description: 'Get details of a specific schedule',
  request: {
    params: z.object({
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the schedule to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ScheduleSchema } } },
    404: {
      description: 'Schedule not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV2SchedulesScheduleIdRoute = createRoute({
  method: 'delete',
  path: '/v2/schedules/{scheduleId}',
  tags: ['Schedules'],
  summary: 'Delete a Schedule',
  description: 'Delete a schedule',
  request: {
    params: z.object({
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the schedule to delete.',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Schedule deleted successfully' } },
})

export const postV2SchedulesScheduleIdPauseRoute = createRoute({
  method: 'post',
  path: '/v2/schedules/{scheduleId}/pause',
  tags: ['Schedules'],
  summary: 'Pause a Schedule',
  description: 'Pause a Schedule',
  request: {
    params: z.object({
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the schedule to pause.',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Schedule paused successfully' } },
})

export const postV2SchedulesScheduleIdResumeRoute = createRoute({
  method: 'post',
  path: '/v2/schedules/{scheduleId}/resume',
  tags: ['Schedules'],
  summary: 'Resume a Schedule',
  description: 'Resume a paused Schedule',
  request: {
    params: z.object({
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the schedule to resume.',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Schedule resumed successfully' } },
})

export const getV2TopicsRoute = createRoute({
  method: 'get',
  path: '/v2/topics',
  tags: ['URL Groups'],
  summary: 'List URL Groups',
  description: 'List all your URL Groups',
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(URLGroupSchema) } } },
  },
})

export const getV2TopicsUrlGroupNameRoute = createRoute({
  method: 'get',
  path: '/v2/topics/{urlGroupName}',
  tags: ['URL Groups'],
  summary: 'Get a URL Group',
  description: 'Retrieve details of a specific URL Group',
  request: {
    params: z.object({
      urlGroupName: z
        .string()
        .openapi({
          param: {
            name: 'urlGroupName',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the URL Group to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: URLGroupSchema } } },
    404: {
      description: 'URL Group not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV2TopicsUrlGroupNameRoute = createRoute({
  method: 'delete',
  path: '/v2/topics/{urlGroupName}',
  tags: ['URL Groups'],
  summary: 'Delete a URL Group',
  description: 'Delete a topic and all its endpoints',
  request: {
    params: z.object({
      urlGroupName: z
        .string()
        .openapi({
          param: {
            name: 'urlGroupName',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of the URL Group to delete.',
          },
        }),
    }),
  },
  responses: { 200: { description: 'URL Group deleted successfully' } },
})

export const postV2TopicsUrlGroupNameEndpointsRoute = createRoute({
  method: 'post',
  path: '/v2/topics/{urlGroupName}/endpoints',
  tags: ['URL Groups'],
  summary: 'Upsert URL Group and Endpoint',
  description: 'Add an endpoint to a URL Group',
  request: {
    params: z.object({
      urlGroupName: z
        .string()
        .openapi({
          param: {
            name: 'urlGroupName',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: "The name of your URL Group. If it doesn't exist yet, it will be created.",
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              endpoints: z.array(
                z
                  .object({
                    url: z.string().openapi({ description: 'The URL of the endpoint' }),
                    name: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Optional name for the endpoint' }),
                  })
                  .openapi({ required: ['url'] }),
              ),
            })
            .openapi({ required: ['endpoints'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Endpoint(s) added successfully' } },
})

export const deleteV2TopicsUrlGroupNameEndpointsRoute = createRoute({
  method: 'delete',
  path: '/v2/topics/{urlGroupName}/endpoints',
  tags: ['URL Groups'],
  summary: 'Remove Endpoints',
  description: 'Remove one or more endpoints from a URL Group',
  request: {
    params: z.object({
      urlGroupName: z
        .string()
        .openapi({
          param: {
            name: 'urlGroupName',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The name of your URL Group.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              endpoints: z
                .array(EndpointSchema)
                .openapi({
                  description:
                    'Then list of endpoints to remove from URL Group. Either name or url must be provided.',
                }),
            })
            .openapi({ required: ['endpoints'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Endpoint(s) removed successfully' } },
})

export const getV2DlqRoute = createRoute({
  method: 'get',
  path: '/v2/dlq',
  tags: ['DLQ'],
  summary: 'List DLQ messages',
  description: 'List and paginate through all messages currently in the DLQ',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            schema: { type: 'string' },
            description:
              'By providing a cursor you can paginate through all of the messages in the DLQ',
            required: false,
          },
        }),
      messageId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'messageId',
            in: 'query',
            schema: { type: 'string' },
            description: 'Filter DLQ messages by message ID',
            required: false,
          },
        }),
      url: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by destination URL. Supports multiple values.',
            required: false,
          },
        }),
      topicName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'topicName',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by URL Group name. Supports multiple values.',
            required: false,
          },
        }),
      scheduleId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by schedule ID. Supports multiple values.',
            required: false,
          },
        }),
      queueName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'queueName',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by queue name. Supports multiple values.',
            required: false,
          },
        }),
      fromDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'fromDate',
            in: 'query',
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter DLQ messages by starting date, in milliseconds (Unix timestamp). This is inclusive.',
            required: false,
          },
        }),
      toDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'toDate',
            in: 'query',
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter DLQ messages by ending date, in milliseconds (Unix timestamp). This is inclusive.',
            required: false,
          },
        }),
      responseStatus: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'responseStatus',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer' } },
            description:
              'Filter DLQ messages by HTTP response status code of the last delivery attempt. Supports multiple values.',
            required: false,
          },
        }),
      callerIp: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'callerIp',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter DLQ messages by IP address of the publisher. Supports multiple values.',
            required: false,
          },
        }),
      label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'label',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter DLQ messages by label. Supports multiple values. You can pass multiple values to match messages with any of the given labels (OR logic).\n\nExamples:\n- `label=my_label`\n- `label=label_1&label=label_2`\n- `label=label_1,label_2`\n',
            required: false,
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            schema: { type: 'integer', default: 100, maximum: 100 },
            description: 'The number of messages to return.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of DLQ messages',
      content: {
        'application/json': {
          schema: z
            .object({
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A cursor which you can use in subsequent requests to paginate through all messages. \nIf no cursor is returned, you have reached the end of the messages.\n',
                }),
              messages: z.array(DLQMessageSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteV2DlqRoute = createRoute({
  method: 'delete',
  path: '/v2/dlq',
  tags: ['DLQ'],
  summary: 'Bulk Delete DLQ messages',
  description: 'Delete multiple messages from the DLQ',
  request: {
    query: z.object({
      dlqIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'dlqIds',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'List of DLQ IDs to delete. If provided, other filters are ignored.',
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            schema: { type: 'string' },
            description:
              'By providing a cursor you can paginate through all of the messages in the DLQ',
            required: false,
          },
        }),
      messageId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'messageId',
            in: 'query',
            schema: { type: 'string' },
            description: 'Filter DLQ messages by message ID',
            required: false,
          },
        }),
      url: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by destination URL. Supports multiple values.',
            required: false,
          },
        }),
      topicName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'topicName',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by URL Group name. Supports multiple values.',
            required: false,
          },
        }),
      scheduleId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by schedule ID. Supports multiple values.',
            required: false,
          },
        }),
      queueName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'queueName',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by queue name. Supports multiple values.',
            required: false,
          },
        }),
      fromDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'fromDate',
            in: 'query',
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter DLQ messages by starting date, in milliseconds (Unix timestamp). This is inclusive.',
            required: false,
          },
        }),
      toDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'toDate',
            in: 'query',
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter DLQ messages by ending date, in milliseconds (Unix timestamp). This is inclusive.',
            required: false,
          },
        }),
      responseStatus: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'responseStatus',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer' } },
            description:
              'Filter DLQ messages by HTTP response status code of the last delivery attempt. Supports multiple values.',
            required: false,
          },
        }),
      callerIp: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'callerIp',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter DLQ messages by IP address of the publisher. Supports multiple values.',
            required: false,
          },
        }),
      label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'label',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter DLQ messages by label. Supports multiple values. You can pass multiple values to match messages with any of the given labels (OR logic).\n\nExamples:\n- `label=my_label`\n- `label=label_1&label=label_2`\n- `label=label_1,label_2`\n',
            required: false,
          },
        }),
      flowControlKey: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by Flow Control Key. Supports multiple values.',
            required: false,
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            schema: { type: 'integer', default: 100, maximum: 100 },
            description: 'The number of messages to delete.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'DLQ messages deleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A cursor which you can use in subsequent requests to paginate through all messages. \nIf no cursor is returned, you have reached the end of the messages.\n',
                }),
              deleted: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of messages that were deleted.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getV2DlqDlqIdRoute = createRoute({
  method: 'get',
  path: '/v2/dlq/{dlqId}',
  tags: ['DLQ'],
  summary: 'Get a DLQ message',
  description: 'Get a specific message from the DLQ',
  request: {
    params: z.object({
      dlqId: z
        .string()
        .openapi({
          param: {
            name: 'dlqId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The DLQ ID of the message you want to retrieve.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'DLQ message details',
      content: { 'application/json': { schema: DLQMessageSchema } },
    },
    404: {
      description:
        'If the message is not found in the DLQ, (either is has been removed by you, or automatically), the endpoint returns a 404 status code.\n',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV2DlqDlqIdRoute = createRoute({
  method: 'delete',
  path: '/v2/dlq/{dlqId}',
  tags: ['DLQ'],
  summary: 'Delete a DLQ message',
  description: 'Manually remove a message from the DLQ',
  request: {
    params: z.object({
      dlqId: z
        .string()
        .openapi({
          param: {
            name: 'dlqId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The DLQ ID of the message you want to remove.\n',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Message deleted successfully' },
    404: {
      description:
        'If the message is not found in the DLQ, (either is has been removed by you, or automatically), the endpoint returns a 404 status code.\n',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2DlqRetryDlqIdRoute = createRoute({
  method: 'post',
  path: '/v2/dlq/retry/{dlqId}',
  tags: ['DLQ'],
  summary: 'Retry a DLQ message',
  description: 'Retry delivery of a message from the DLQ',
  request: {
    params: z.object({
      dlqId: z
        .string()
        .openapi({
          param: {
            name: 'dlqId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The DLQ ID of the message you want to retry.\n',
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Message retry initiated successfully',
      content: { 'application/json': { schema: PublishResponseSchema } },
    },
    404: {
      description:
        'If the message is not found in the DLQ, (either is has been removed by you, or automatically), the endpoint returns a 404 status code.\n',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2DlqRetryRoute = createRoute({
  method: 'post',
  path: '/v2/dlq/retry',
  tags: ['DLQ'],
  summary: 'Bulk Retry DLQ messages',
  description: 'Retry delivery of multiple messages from the DLQ',
  request: {
    query: z.object({
      dlqIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'dlqIds',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'List of DLQ IDs to retry. If provided, other filters are ignored.',
            required: false,
          },
        }),
      messageId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'messageId',
            in: 'query',
            schema: { type: 'string' },
            description: 'Filter DLQ messages by message ID',
            required: false,
          },
        }),
      url: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by destination URL. Supports multiple values.',
            required: false,
          },
        }),
      topicName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'topicName',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by URL Group name. Supports multiple values.',
            required: false,
          },
        }),
      scheduleId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by schedule ID. Supports multiple values.',
            required: false,
          },
        }),
      queueName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'queueName',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by queue name. Supports multiple values.',
            required: false,
          },
        }),
      fromDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'fromDate',
            in: 'query',
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter DLQ messages by starting date, in milliseconds (Unix timestamp). This is inclusive.',
            required: false,
          },
        }),
      toDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'toDate',
            in: 'query',
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter DLQ messages by ending date, in milliseconds (Unix timestamp). This is inclusive.',
            required: false,
          },
        }),
      responseStatus: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'responseStatus',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer' } },
            description:
              'Filter DLQ messages by HTTP response status code of the last delivery attempt. Supports multiple values.',
            required: false,
          },
        }),
      callerIp: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'callerIp',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter DLQ messages by IP address of the publisher. Supports multiple values.',
            required: false,
          },
        }),
      label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'label',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'Filter DLQ messages by label. Supports multiple values. You can pass multiple values to match messages with any of the given labels (OR logic).\n\nExamples:\n- `label=my_label`\n- `label=label_1&label=label_2`\n- `label=label_1,label_2`\n',
            required: false,
          },
        }),
      flowControlKey: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter DLQ messages by Flow Control Key. Supports multiple values.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Messages retry initiated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A cursor which you can use in subsequent requests to paginate through all messages. \nIf no cursor is returned, you have reached the end of the messages.\n',
                }),
              responses: z.array(PublishResponseSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Some messages were not found in the DLQ',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2FlowControlRoute = createRoute({
  method: 'get',
  path: '/v2/flowControl',
  tags: ['Flow Control'],
  summary: 'List Flow Control Keys',
  description: 'List all Flow Control keys',
  responses: {
    200: {
      description: 'Flow control keys retrieved successfully',
      content: { 'application/json': { schema: z.array(FlowControlKeySchema) } },
    },
  },
})

export const getV2FlowControlFlowControlKeyRoute = createRoute({
  method: 'get',
  path: '/v2/flowControl/{flowControlKey}',
  tags: ['Flow Control'],
  summary: 'Get Flow Control Key',
  description: 'Get details of a specific Flow Control key',
  request: {
    params: z.object({
      flowControlKey: z
        .string()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Flow Control key to retrieve',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Flow control key details',
      content: { 'application/json': { schema: FlowControlKeySchema } },
    },
    404: {
      description: 'Flow Control key not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2FlowControlFlowControlKeyPauseRoute = createRoute({
  method: 'post',
  path: '/v2/flowControl/{flowControlKey}/pause',
  tags: ['Flow Control'],
  summary: 'Pause Flow Control Key',
  description: 'Pauses the delivery of messages associated with a specific flow-control key.',
  request: {
    params: z.object({
      flowControlKey: z
        .string()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The flow-control key to pause.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The flow-control key has been paused.' },
    400: {
      description: 'Bad request. Returned when the flow-control key is not provided.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2FlowControlFlowControlKeyResumeRoute = createRoute({
  method: 'post',
  path: '/v2/flowControl/{flowControlKey}/resume',
  tags: ['Flow Control'],
  summary: 'Resume Flow Control Key',
  description: 'Resumes the delivery of messages associated with a specific flow-control key.',
  request: {
    params: z.object({
      flowControlKey: z
        .string()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The flow-control key to resume.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The flow-control key has been resumed.' },
    400: {
      description: 'Bad request. Returned when the flow-control key is not provided.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2FlowControlFlowControlKeyPinRoute = createRoute({
  method: 'post',
  path: '/v2/flowControl/{flowControlKey}/pin',
  tags: ['Flow Control'],
  summary: 'Pin Configuration for Flow Control Key',
  description: 'Pins a processing configuration for a specific flow-control key.',
  request: {
    params: z.object({
      flowControlKey: z
        .string()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The flow-control key for which the configuration will be pinned.',
          },
        }),
    }),
    query: z.object({
      parallelism: z
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
            name: 'parallelism',
            in: 'query',
            schema: { type: 'integer' },
            description: 'The parallelism value to apply to the flow-control key.',
            required: false,
          },
        }),
      rate: z
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
            name: 'rate',
            in: 'query',
            schema: { type: 'integer' },
            description: 'The rate value to apply to the flow-control key.',
            required: false,
          },
        }),
      period: z
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
            name: 'period',
            in: 'query',
            schema: { type: 'integer' },
            description: 'The period value to apply to the flow-control key, in seconds.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The flow-control key configuration has been pinned.' },
    400: {
      description:
        'Bad request. Returned when the flow-control key is not provided, or when the parallelism, rate or period values are invalid.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2FlowControlFlowControlKeyUnpinRoute = createRoute({
  method: 'post',
  path: '/v2/flowControl/{flowControlKey}/unpin',
  tags: ['Flow Control'],
  summary: 'Unpin Configuration for Flow Control Key',
  description: 'Removes the pinned configuration for a specific flow-control key.',
  request: {
    params: z.object({
      flowControlKey: z
        .string()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The flow-control key for which the configuration will be unpinned.',
          },
        }),
    }),
    query: z.object({
      parallelism: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'parallelism',
            in: 'query',
            schema: { type: 'boolean', default: false },
            description: 'The flag to indicate whether to unpin the parallelism configuration.',
            required: false,
          },
        }),
      rate: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'rate',
            in: 'query',
            schema: { type: 'boolean', default: false },
            description: 'The flag to indicate whether to unpin the rate configuration.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The flow-control key configuration is pinned' },
    400: {
      description: 'Bad request. Returned when the flow-control key is not provided.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2FlowControlFlowControlKeyResetRateRoute = createRoute({
  method: 'post',
  path: '/v2/flowControl/{flowControlKey}/resetRate',
  tags: ['Flow Control'],
  summary: 'Reset Rate for Flow Control Key',
  description: 'Resets the rate configuration state for a specific flow-control key.',
  request: {
    params: z.object({
      flowControlKey: z
        .string()
        .openapi({
          param: {
            name: 'flowControlKey',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The flow-control key for which the rate state will be reset.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The rate state for the flow-control key has been reset.' },
    400: {
      description: 'Bad request. Returned when the flow-control key is not provided.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error. Returned when an unexpected error occurs.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2GlobalParallelismRoute = createRoute({
  method: 'get',
  path: '/v2/globalParallelism',
  tags: ['Flow Control'],
  summary: 'Get Global Parallelism',
  description: 'Returns the current global parallelism usage across all flow control keys',
  responses: {
    200: {
      description: 'Global parallelism info retrieved successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              parallelismMax: z
                .int()
                .exactOptional()
                .openapi({ description: 'The configured maximum global parallelism' }),
              parallelismCount: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The current number of messages running globally in parallel',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getV2KeysRoute = createRoute({
  method: 'get',
  path: '/v2/keys',
  tags: ['Signing Keys'],
  summary: 'Get Signing Keys',
  description: 'Retrieve your current and next signing keys',
  responses: {
    200: {
      description: 'Signing keys retrieved successfully',
      content: { 'application/json': { schema: SigningKeysSchema } },
    },
  },
})

export const postV2KeysRotateRoute = createRoute({
  method: 'post',
  path: '/v2/keys/rotate',
  tags: ['Signing Keys'],
  summary: 'Rotate Signing Keys',
  description: 'Rotate your signing keys',
  responses: {
    200: {
      description: 'Keys rotated successfully',
      content: { 'application/json': { schema: SigningKeysSchema } },
    },
  },
})

export const getV2LogsRoute = createRoute({
  method: 'get',
  path: '/v2/logs',
  tags: ['Logs'],
  summary: 'List Logs',
  description: 'Paginate through logs of published messages',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            schema: { type: 'string' },
            description: 'By providing a cursor you can paginate through all of the logs',
            required: false,
          },
        }),
      messageId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'messageId',
            in: 'query',
            schema: { type: 'string' },
            description: 'Filter logs by message ID',
            required: false,
          },
        }),
      state: z
        .enum([
          'CREATED',
          'ACTIVE',
          'RETRY',
          'ERROR',
          'IN_PROGRESS',
          'DELIVERED',
          'CANCEL_REQUESTED',
          'CANCELLED',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            schema: {
              type: 'string',
              enum: [
                'CREATED',
                'ACTIVE',
                'RETRY',
                'ERROR',
                'IN_PROGRESS',
                'DELIVERED',
                'CANCEL_REQUESTED',
                'CANCELLED',
              ],
            },
            description:
              'Filter logs by message state\n\n|Value\t|Description|\n|-------|------------|\n| CREATED\t|The message has been accepted and stored in QStash|\n| ACTIVE\t|The task is currently being processed by a worker.|\n| RETRY\t|The task has been scheduled to retry.|\n| ERROR\t|The execution threw an error and the task is waiting to be retried or failed.|\n| IN_PROGRESS\t|The task is in one of ACTIVE, RETRY or ERROR state.|\n| DELIVERED\t|The message was successfully delivered.|\n| FAILED\t|The task has errored too many times or encountered an error that it cannot recover from.|\n| CANCEL_REQUESTED\t|The cancel request from the user is recorded.|\n| CANCELLED\t|The cancel request from the user is honored.|\n',
            required: false,
          },
        }),
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            schema: { type: 'string' },
            description: 'Filter logs by destination URL',
            required: false,
          },
        }),
      topicName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'topicName',
            in: 'query',
            schema: { type: 'string' },
            description: 'Filter logs by URL Group name',
            required: false,
          },
        }),
      scheduleId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'query',
            schema: { type: 'string' },
            description: 'Filter logs by schedule ID',
            required: false,
          },
        }),
      queueName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'queueName',
            in: 'query',
            schema: { type: 'string' },
            description: 'Filter logs by queue name',
            required: false,
          },
        }),
      fromDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'fromDate',
            in: 'query',
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter logs by starting date, in milliseconds (Unix timestamp). This is inclusive.',
            required: false,
          },
        }),
      toDate: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'toDate',
            in: 'query',
            schema: { type: 'integer', format: 'int64' },
            description:
              'Filter logs by ending date, in milliseconds (Unix timestamp). This is inclusive.',
            required: false,
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            schema: { type: 'integer', default: 100, maximum: 100 },
            description: 'The number of log entries to return.',
            required: false,
          },
        }),
      label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'label',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: true,
            description:
              'Filter logs by label. Supports multi-value filtering. You can pass multiple values to match messages with any of the given labels (OR logic).\n\nExamples:\n- `label=my_label`\n- `label=label_1&label=label_2`\n',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of logs',
      content: {
        'application/json': {
          schema: z
            .object({
              cursor: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A cursor which you can use in subsequent requests to paginate through all logs. \nIf no cursor is returned, you have reached the end of the logs.\n',
                }),
              logs: z.array(LogEntrySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
