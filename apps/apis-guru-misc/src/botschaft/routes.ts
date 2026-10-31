import { createRoute, z } from '@hono/zod-openapi'

const ConfigSchema = z
  .object({
    providers: z.object({}).openapi({ title: 'Providers' }),
    topics: z.array(z.any()).openapi({ title: 'Topics' }),
  })
  .openapi({ required: ['providers', 'topics'], title: 'Config' })
  .openapi('Config')

const DiscordMessageRequestSchema = z
  .object({
    base64_message: z.string().exactOptional().openapi({ title: 'Base64 Message' }),
    channel: z.string().openapi({ title: 'Channel' }),
    message: z.string().exactOptional().openapi({ title: 'Message' }),
  })
  .openapi({ required: ['channel'], title: 'DiscordMessageRequest' })
  .openapi('DiscordMessageRequest')

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

const SlackMessageRequestSchema = z
  .object({
    base64_message: z.string().exactOptional().openapi({ title: 'Base64 Message' }),
    channel: z.string().openapi({ title: 'Channel' }),
    message: z.string().exactOptional().openapi({ title: 'Message' }),
  })
  .openapi({ required: ['channel'], title: 'SlackMessageRequest' })
  .openapi('SlackMessageRequest')

const SnsMessageRequestSchema = z
  .object({
    base64_message: z.string().exactOptional().openapi({ title: 'Base64 Message' }),
    message: z.string().exactOptional().openapi({ title: 'Message' }),
  })
  .openapi({ title: 'SnsMessageRequest', required: [] })
  .openapi('SnsMessageRequest')

const TwilioMessageRequestSchema = z
  .object({
    base64_message: z.string().exactOptional().openapi({ title: 'Base64 Message' }),
    message: z.string().exactOptional().openapi({ title: 'Message' }),
    to: z.string().openapi({ title: 'To' }),
  })
  .openapi({ required: ['to'], title: 'TwilioMessageRequest' })
  .openapi('TwilioMessageRequest')

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  summary: 'Config',
  operationId: 'config_config_get',
  request: {
    headers: z.object({
      authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'authorization',
            required: false,
            schema: { title: 'Authorization', type: 'string' },
          },
          title: 'Authorization',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConfigSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getDiscordRoute = createRoute({
  method: 'get',
  path: '/discord',
  tags: ['discord'],
  summary: 'Discord Get',
  operationId: 'discord_get_discord_get',
  request: {
    query: z.object({
      channel: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'channel',
            required: true,
            schema: { title: 'Channel', type: 'string' },
          },
          title: 'Channel',
        }),
      message: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'message',
            required: false,
            schema: { title: 'Message', type: 'string' },
          },
          title: 'Message',
        }),
      base64_message: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'base64_message',
            required: false,
            schema: { title: 'Base64 Message', type: 'string' },
          },
          title: 'Base64 Message',
        }),
    }),
    headers: z.object({
      authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'authorization',
            required: false,
            schema: { title: 'Authorization', type: 'string' },
          },
          title: 'Authorization',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postDiscordRoute = createRoute({
  method: 'post',
  path: '/discord',
  tags: ['discord'],
  summary: 'Discord Post',
  operationId: 'discord_post_discord_post',
  request: {
    headers: z.object({
      authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'authorization',
            required: false,
            schema: { title: 'Authorization', type: 'string' },
          },
          title: 'Authorization',
        }),
    }),
    body: {
      content: { 'application/json': { schema: DiscordMessageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getSlackRoute = createRoute({
  method: 'get',
  path: '/slack',
  tags: ['slack'],
  summary: 'Slack Get',
  operationId: 'slack_get_slack_get',
  request: {
    query: z.object({
      channel: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'channel',
            required: true,
            schema: { title: 'Channel', type: 'string' },
          },
          title: 'Channel',
        }),
      message: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'message',
            required: false,
            schema: { title: 'Message', type: 'string' },
          },
          title: 'Message',
        }),
      base64_message: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'base64_message',
            required: false,
            schema: { title: 'Base64 Message', type: 'string' },
          },
          title: 'Base64 Message',
        }),
    }),
    headers: z.object({
      authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'authorization',
            required: false,
            schema: { title: 'Authorization', type: 'string' },
          },
          title: 'Authorization',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postSlackRoute = createRoute({
  method: 'post',
  path: '/slack',
  tags: ['slack'],
  summary: 'Slack Post',
  operationId: 'slack_post_slack_post',
  request: {
    headers: z.object({
      authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'authorization',
            required: false,
            schema: { title: 'Authorization', type: 'string' },
          },
          title: 'Authorization',
        }),
    }),
    body: {
      content: { 'application/json': { schema: SlackMessageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getSnsRoute = createRoute({
  method: 'get',
  path: '/sns',
  tags: ['sns'],
  summary: 'Sns Get',
  operationId: 'sns_get_sns_get',
  request: {
    query: z.object({
      message: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'message',
            required: false,
            schema: { title: 'Message', type: 'string' },
          },
          title: 'Message',
        }),
      base64_message: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'base64_message',
            required: false,
            schema: { title: 'Base64 Message', type: 'string' },
          },
          title: 'Base64 Message',
        }),
    }),
    headers: z.object({
      authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'authorization',
            required: false,
            schema: { title: 'Authorization', type: 'string' },
          },
          title: 'Authorization',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postSnsRoute = createRoute({
  method: 'post',
  path: '/sns',
  tags: ['sns'],
  summary: 'Sns Post',
  operationId: 'sns_post_sns_post',
  request: {
    headers: z.object({
      authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'authorization',
            required: false,
            schema: { title: 'Authorization', type: 'string' },
          },
          title: 'Authorization',
        }),
    }),
    body: { content: { 'application/json': { schema: SnsMessageRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getTopicTopicNameRoute = createRoute({
  method: 'get',
  path: '/topic/{topic_name}',
  summary: 'Topic',
  operationId: 'topic_topic__topic_name__get',
  request: {
    params: z.object({
      topic_name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'topic_name',
            required: true,
            schema: { title: 'Topic Name', type: 'string' },
          },
          title: 'Topic Name',
        }),
    }),
    query: z.object({
      message: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'message',
            required: false,
            schema: { title: 'Message', type: 'string' },
          },
          title: 'Message',
        }),
      base64_message: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'base64_message',
            required: false,
            schema: { title: 'Base64 Message', type: 'string' },
          },
          title: 'Base64 Message',
        }),
    }),
    headers: z.object({
      authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'authorization',
            required: false,
            schema: { title: 'Authorization', type: 'string' },
          },
          title: 'Authorization',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getTwilioRoute = createRoute({
  method: 'get',
  path: '/twilio',
  tags: ['twilio'],
  summary: 'Twilio Message Get',
  operationId: 'twilio_message_get_twilio_get',
  request: {
    query: z.object({
      to: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'to',
            required: true,
            schema: { title: 'To', type: 'string' },
          },
          title: 'To',
        }),
      message: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'message',
            required: false,
            schema: { title: 'Message', type: 'string' },
          },
          title: 'Message',
        }),
      base64_message: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'base64_message',
            required: false,
            schema: { title: 'Base64 Message', type: 'string' },
          },
          title: 'Base64 Message',
        }),
    }),
    headers: z.object({
      authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'authorization',
            required: false,
            schema: { title: 'Authorization', type: 'string' },
          },
          title: 'Authorization',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postTwilioRoute = createRoute({
  method: 'post',
  path: '/twilio',
  tags: ['twilio'],
  summary: 'Twilio Message Post',
  operationId: 'twilio_message_post_twilio_post',
  request: {
    headers: z.object({
      authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'authorization',
            required: false,
            schema: { title: 'Authorization', type: 'string' },
          },
          title: 'Authorization',
        }),
    }),
    body: {
      content: { 'application/json': { schema: TwilioMessageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})
