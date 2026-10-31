import { createRoute, z } from '@hono/zod-openapi'

const DeliveredParamsSchema = ((schema) =>
  z.union([
    z.preprocess(
      (val) =>
        typeof val === 'string' &&
        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
          ? Number(val)
          : val,
      schema,
    ),
    z.preprocess(
      ((read) => (val: unknown) => {
        const result = read.safeParse(val)
        return result.success ? result.data : val
      })(z.stringbool()),
      schema,
    ),
  ]))(z.union([z.literal(true), z.literal(false), z.literal(0), z.literal(1)])).openapi({
  param: {
    description:
      'Set to _true_ if your user replied to the message you sent. Otherwise, set to _false_.\n**Note**: for curl, use 0 and 1.',
    example: true,
    in: 'query',
    name: 'delivered',
    required: true,
    schema: { enum: [true, false, 0, 1] },
  },
})

const MessageIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'The ID you receive in the response to a request. * From the Verify API - use the `event_id` in the response to Verify Check. * From the SMS API - use the `message-id` * From the Text-To-Speech API - use the `call-id` * From the Text-To-Speech-Prompt API - use the `call-id`',
      example: '00A0B0C0',
      in: 'query',
      name: 'message-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const TimestampParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'When the user completed your call-to-action (e.g. visited your website, installed your app) in [UTC±00:00](https://en.wikipedia.org/wiki/UTC%C2%B100:00) format: _yyyy-MM-dd HH:mm:ss_.\nIf you do not set this parameter, Nexmo uses the time it receives this request.',
      example: '2020-01-01 12:00:00',
      in: 'query',
      name: 'timestamp',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApiKeySecurityScheme = {
  description:
    'You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)',
  in: 'query',
  name: 'api_key',
  type: 'apiKey',
}

const ApiSecretSecurityScheme = {
  description:
    'You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)',
  in: 'query',
  name: 'api_secret',
  type: 'apiKey',
}

const ApiSigSecurityScheme = {
  description:
    'The hash of the request parameters in alphabetical order, a timestamp and the signature secret. For example: `sig=SIGNATURE`',
  in: 'query',
  name: 'sig',
  type: 'apiKey',
}

export const postSmsRoute = createRoute({
  method: 'post',
  path: '/sms',
  tags: ['SMS Conversion'],
  summary: 'Tell Nexmo if your SMS message was successful',
  description:
    'Send a Conversion API request with information about the SMS message identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.',
  operationId: 'smsConversion',
  request: {
    query: z.object({
      'message-id': MessageIdParamsSchema,
      delivered: DeliveredParamsSchema,
      timestamp: TimestampParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Wrong credentials' },
    402: { description: 'Conversion has not been enabled for your account' },
    420: { description: 'Invalid parameters' },
    423: { description: 'Invalid parameters' },
  },
})

export const postVoiceRoute = createRoute({
  method: 'post',
  path: '/voice',
  tags: ['Voice Conversion'],
  summary: 'Tell Nexmo if your voice call was successful',
  description:
    'Send a Conversion API request with information about the Call or Text-To-Speech identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.',
  operationId: 'voiceConversion',
  request: {
    query: z.object({
      'message-id': MessageIdParamsSchema,
      delivered: DeliveredParamsSchema,
      timestamp: TimestampParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Wrong credentials' },
    402: { description: 'Conversion has not been enabled for your account' },
    420: { description: 'Invalid parameters' },
    423: { description: 'Invalid parameters' },
  },
})
