import { createRoute, z } from '@hono/zod-openapi'

const DetachModuleRequestSchema = z
  .object({
    botId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'User ID of the LINE Official Account bot attached to the module channel.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#unlink-detach-module-channel-by-operation-mc-admin',
    },
    description:
      'Unlink (detach) the module channel by the operation of the module channel administrator',
    required: [],
  })
  .openapi('DetachModuleRequest')

const AcquireChatControlRequestSchema = z
  .object({
    expired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "`True`: After the time limit (ttl) has passed, the initiative (Chat Control) will return to the Primary Channel. (Default)\n`False`: There's no time limit and the initiative (Chat Control) doesn't change over time.\n",
        example: true,
      }),
    ttl: z
      .int32()
      .max(31536000)
      .exactOptional()
      .openapi({
        description:
          'The time it takes for initiative (Chat Control) to return to the Primary Channel (the time that the module channel stays on the Active Channel).\nThe value is specified in seconds. The maximum value is one year (3600 * 24 * 365).\nThe default value is 3600 (1 hour).\n\n* Ignored if the value of expired is false.\n',
        example: 3600,
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#acquire-control-api',
    },
    description: 'Request entity of the Acquire Control API',
    required: [],
  })
  .openapi('AcquireChatControlRequest')

const ModuleBotSchema = z
  .object({
    userId: z.string().openapi({ description: "Bot's user ID" }),
    basicId: z.string().openapi({ description: "Bot's basic ID" }),
    premiumId: z
      .string()
      .exactOptional()
      .openapi({
        description: "Bot's premium ID. Not included in the response if the premium ID isn't set.",
      }),
    displayName: z.string().openapi({ description: "Bot's display name" }),
    pictureUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Profile image URL. Image URL starting with `https://`. Not included in the response if the bot doesn't have a profile image.",
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#get-multiple-bot-info-api',
    },
    description: 'basic information about the bot.',
    required: ['userId', 'basicId', 'displayName'],
  })
  .openapi('ModuleBot')

const GetModulesResponseSchema = z
  .object({
    bots: z
      .array(ModuleBotSchema)
      .openapi({
        description: 'Array of Bot list Item objects representing basic information about the bot.',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation token.\nUsed to get the next array of basic bot information.\nThis property is only returned if there are more unreturned results.\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#get-multiple-bot-info-api',
    },
    description: 'List of bots to which the module is attached',
    required: ['bots'],
  })
  .openapi('GetModulesResponse')

const BearerSecurityScheme = { type: 'http', scheme: 'bearer', description: 'Channel access token' }

export const postV2BotChannelDetachRoute = createRoute({
  method: 'post',
  path: '/v2/bot/channel/detach',
  tags: ['line-module'],
  description:
    'The module channel admin calls the Detach API to detach the module channel from a LINE Official Account.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/partner-docs/#unlink-detach-module-channel-by-operation-mc-admin',
  },
  operationId: 'detachModule',
  request: { body: { content: { 'application/json': { schema: DetachModuleRequestSchema } } } },
  responses: { 200: { description: 'OK' } },
})

export const postV2BotChatChatIdControlAcquireRoute = createRoute({
  method: 'post',
  path: '/v2/bot/chat/{chatId}/control/acquire',
  tags: ['line-module'],
  description:
    'If the Standby Channel wants to take the initiative (Chat Control), it calls the Acquire Control API.\nThe channel that was previously an Active Channel will automatically switch to a Standby Channel.\n',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/partner-docs/#acquire-control-api',
  },
  operationId: 'acquireChatControl',
  request: {
    params: z.object({
      chatId: z
        .string()
        .openapi({
          param: {
            name: 'chatId',
            in: 'path',
            required: true,
            description: 'The `userId`, `roomId`, or `groupId`',
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AcquireChatControlRequestSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const postV2BotChatChatIdControlReleaseRoute = createRoute({
  method: 'post',
  path: '/v2/bot/chat/{chatId}/control/release',
  tags: ['line-module'],
  description:
    'To return the initiative (Chat Control) of Active Channel to Primary Channel, call the Release Control API.\n',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/partner-docs/#release-control-api',
  },
  operationId: 'releaseChatControl',
  request: {
    params: z.object({
      chatId: z
        .string()
        .openapi({
          param: {
            name: 'chatId',
            in: 'path',
            required: true,
            description: 'The `userId`, `roomId`, or `groupId`',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getV2BotListRoute = createRoute({
  method: 'get',
  path: '/v2/bot/list',
  tags: ['line-module'],
  description:
    'Gets a list of basic information about the bots of multiple LINE Official Accounts that have attached module channels.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/partner-docs/#get-multiple-bot-info-api',
  },
  operationId: 'getModules',
  request: {
    query: z.object({
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            required: false,
            description:
              "Value of the continuation token found in the next property of the JSON object returned in the response.\nIf you can't get all basic information about the bots in one request, include this parameter to get the remaining array.\n",
            schema: { type: 'string' },
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
          z.int32().max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'Specify the maximum number of bots that you get basic information from. The default value is 100.\nMax value: 100\n',
            schema: { type: 'integer', format: 'int32', default: 100, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetModulesResponseSchema,
          example: {
            bots: [
              {
                userId: 'Uf2dd6e8b081d2ff9c05c98a8a8b269c9',
                basicId: '@628...',
                displayName: 'Test01',
                pictureUrl: 'https://profile.line-scdn.net/0hyxytJNAlJldEDQzlatVZAHhIKDoz...',
              },
              {
                userId: 'Ua831d37bfe8232808202b85127663f70',
                basicId: '@076lu...',
                displayName: 'Test02',
                pictureUrl: 'https://profile.line-scdn.net/0hohnizdyzMEdTECbnVo9PEG9VPiok...',
              },
              {
                userId: 'Ub77ea431fba86f7c159a0c0f5be43d9f',
                basicId: '@290n...',
                displayName: 'Test03',
              },
              {
                userId: 'Ub8ec80a14e879e9c6833fb4cee0e632b',
                basicId: '@793j...',
                displayName: 'Test04',
              },
            ],
          },
        },
      },
    },
  },
})
