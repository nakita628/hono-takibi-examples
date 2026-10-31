import { createRoute, z } from '@hono/zod-openapi'

const QueueMessageSchema = z
  .object({
    contentType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content-type of data associated with QueueMessage.' }),
    createDate: z
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
        description: 'Date that message was received by system.',
      }),
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'Embedded JSON to be sent with Queue Message.' }),
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of data associated with Queue Message (if not embedded JSON)' }),
    messageId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'UUID of Message Data associated with this Queue Message' }),
    queueMessageId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'UUID of Queue Message in local region.' }),
    queueName: z.string().openapi({ description: 'Name of Queue for message.' }),
    receivingRegion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Regions to which message will be sent' }),
    sendingRegion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Region from which was sent' }),
  })
  .openapi({ description: 'A Queue Message', required: ['queueName'] })
  .openapi('QueueMessage')

const QueueSchema = z
  .object({ name: z.string().openapi({ description: 'Name of queue, must be unique.' }) })
  .openapi({ description: 'Specifies the configuration for a Queue.', required: ['name'] })
  .openapi('Queue')

const ApiResponseSchema = z
  .object({
    count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Count of Queues or QueueMessages returned by the call.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Informative message intended for client.' }),
    queueMessages: z
      .array(QueueMessageSchema)
      .exactOptional()
      .openapi({
        description: 'Queues Messages returned by the call, or empty if not applicable.',
      }),
    queues: z
      .array(QueueSchema)
      .exactOptional()
      .openapi({ description: 'Queues returned but the call, or empty if not applicable.' }),
  })
  .openapi({ description: 'Response returned by most Queue API calls.', required: [] })
  .openapi('ApiResponse')

export const getQueuesRoute = createRoute({
  method: 'get',
  path: '/queues',
  tags: ['queues'],
  summary: 'Get list of all Queues.',
  operationId: 'getListOfQueues',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const postQueuesRoute = createRoute({
  method: 'post',
  path: '/queues',
  tags: ['queues'],
  summary: 'Create new queue.',
  operationId: 'createQueue',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    400: { description: 'No Queue object posted, or name field is missing' },
  },
})

export const deleteQueuesQueueNameRoute = createRoute({
  method: 'delete',
  path: '/queues/{queueName}',
  tags: ['queues'],
  summary: 'Delete Queue.',
  operationId: 'deleteQueue',
  request: {
    params: z.object({
      queueName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'queueName', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      confirm: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'confirm',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    400: { description: 'Queue name or confirm flag missing.' },
  },
})

export const getQueuesQueueNameConfigRoute = createRoute({
  method: 'get',
  path: '/queues/{queueName}/config',
  tags: ['queues'],
  summary: 'Get Queue config.',
  operationId: 'getQueueConfig',
  request: {
    params: z.object({
      queueName: z
        .string()
        .openapi({
          param: {
            description: 'Name of Queue',
            in: 'path',
            name: 'queueName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    400: { description: 'Queue name or confirm flag missing.' },
  },
})

export const putQueuesQueueNameConfigRoute = createRoute({
  method: 'put',
  path: '/queues/{queueName}/config',
  tags: ['queues'],
  summary: 'Update Queue configuration.',
  operationId: 'updateQueueConfig',
  request: {
    params: z.object({
      queueName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'queueName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    400: { description: 'No Queue object posted, or name field is missing' },
  },
})

export const getQueuesQueueNameDataQueueMessageIdRoute = createRoute({
  method: 'get',
  path: '/queues/{queueName}/data/{queueMessageId}',
  tags: ['queues'],
  summary: 'Get data associated with a Queue Message.',
  operationId: 'getMessageData',
  request: {
    params: z.object({
      queueName: z
        .string()
        .openapi({
          param: {
            description: 'Name of Queue',
            in: 'path',
            name: 'queueName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      queueMessageId: z
        .string()
        .openapi({
          param: {
            description: 'ID of Queue Message for which data is to be returned',
            in: 'path',
            name: 'queueMessageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'successful operation', content: { '*/*': { schema: ApiResponseSchema } } },
    400: { description: 'Message ID invalid' },
    404: { description: 'Queue Message or data not found' },
  },
})

export const getQueuesQueueNameMessagesRoute = createRoute({
  method: 'get',
  path: '/queues/{queueName}/messages',
  tags: ['queues'],
  summary: 'Get next Queue Messages from a Queue',
  operationId: 'getNextMessages',
  request: {
    params: z.object({
      queueName: z
        .string()
        .openapi({
          param: {
            description: 'Name of Queue',
            in: 'path',
            name: 'queueName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      count: z
        .string()
        .default('1')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of messages to get',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: '1', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    400: { description: 'Invalid count parameter' },
  },
})

export const postQueuesQueueNameMessagesRoute = createRoute({
  method: 'post',
  path: '/queues/{queueName}/messages',
  tags: ['queues'],
  summary: 'Send Queue Message with a binary data (blob) payload.',
  operationId: 'sendMessageBinary',
  request: {
    params: z.object({
      queueName: z
        .string()
        .openapi({
          param: {
            description: 'Name of Queue',
            in: 'path',
            name: 'queueName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      regions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Regions to which message is to be sent',
            in: 'query',
            name: 'regions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      delay: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'delay', required: false, schema: { type: 'string' } },
        }),
      expiration: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expiration', required: false, schema: { type: 'string' } },
        }),
      contentType: z
        .string()
        .openapi({
          param: {
            description: 'Content type of the data to be sent with Queue Message',
            in: 'query',
            name: 'contentType',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Data to be send with Queue Message',
      content: { 'application/octet-stream': { schema: z.array(z.string()) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deleteQueuesQueueNameMessagesQueueMessageIdRoute = createRoute({
  method: 'delete',
  path: '/queues/{queueName}/messages/{queueMessageId}',
  tags: ['queues'],
  summary: 'Acknowledge that Queue Message has been processed.',
  operationId: 'ackMessage',
  request: {
    params: z.object({
      queueName: z
        .string()
        .openapi({
          param: {
            description: 'Name of Queue',
            in: 'path',
            name: 'queueName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      queueMessageId: z
        .string()
        .openapi({
          param: {
            description: 'ID of Queue Message to be acknowledged',
            in: 'path',
            name: 'queueMessageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    400: { description: 'Queue Message ID invalid, or message not in-flight' },
  },
})

export const getStatusRoute = createRoute({
  method: 'get',
  path: '/status',
  tags: ['status'],
  summary: 'Status of webapp.',
  operationId: 'status',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
})
