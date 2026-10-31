import { createRoute, z } from '@hono/zod-openapi'

const MessageSchema = z
  .object({
    content: z.string(),
    from: z.string(),
    to: z.array(z.string()).openapi({ description: 'Destination Number' }),
  })
  .openapi({
    description: '',
    example: {
      content: 'Same content goes to three numbers',
      from: 'SignSMS',
      to: ['971562316353', '971562316354', '971562316355'],
    },
    required: ['to', 'content', 'from'],
    title: 'Message',
  })
  .openapi('Message')

const BulkSMSRequestSchema = z
  .object({ messages: z.array(MessageSchema).openapi({ description: 'Sendbatch message body' }) })
  .openapi({
    description: 'Bulk SMS Request',
    example: {
      messages: [
        {
          content: 'Same content goes to three numbers',
          from: 'SignSMS',
          to: ['971562316353', '971562316354', '971562316355'],
        },
      ],
    },
    required: ['messages'],
    title: 'BulkSMSRequest',
  })
  .openapi('BulkSMSRequest')

const SendSMSRequestSchema = z
  .object({
    content: z.string().openapi({ description: 'Message Content' }),
    from: z.string().openapi({ description: 'Sender ID / Number' }),
    to: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Destination Mobile Number' }),
  })
  .openapi({
    description: 'Send SMS Request',
    example: { content: 'Send single SMS Testing', from: 'SignSMS', to: 971562316353 },
    required: ['to', 'from', 'content'],
    title: 'SendSMSRequest',
  })
  .openapi('SendSMSRequest')

const AuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const getBalanceRoute = createRoute({
  method: 'get',
  path: '/balance',
  summary: 'Balance',
  description: 'Check account balance',
  operationId: 'BalanceGet',
  responses: {
    200: { description: '', headers: z.object({}) },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const postSendRoute = createRoute({
  method: 'post',
  path: '/send',
  summary: 'SendSMS',
  description: 'Send SMS  to recipients using D7 SMS Gateway',
  operationId: 'SendPost',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Message Body',
      content: { 'application/json': { schema: SendSMSRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', headers: z.object({}) },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const postSendbatchRoute = createRoute({
  method: 'post',
  path: '/sendbatch',
  summary: 'Bulk SMS',
  description: 'Send Bulk SMS  to multiple recipients using D7 SMS Gateway',
  operationId: 'SendbatchPost',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Message Body',
      content: { 'application/json': { schema: BulkSMSRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})
