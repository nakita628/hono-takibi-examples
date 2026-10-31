import { createRoute, z } from '@hono/zod-openapi'

export const getV1VerificationResultRoute = createRoute({
  method: 'get',
  path: '/v1/verification/result',
  description: 'Verify that an OTP sent by the Send SMS Verification API is valid.',
  request: {
    query: z.object({
      tran_id: z
        .string()
        .openapi({
          param: {
            description:
              'The unique ID that was returned by the Send Verification SMS API that triggered the OTP sms.',
            in: 'query',
            name: 'tran_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'FraudLabs Pro API key.',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns the API response in json (default) or xml format.',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
      otp: z
        .string()
        .openapi({
          param: {
            description: 'The OTP that was sent to the recipient’s phone.',
            in: 'query',
            name: 'otp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get verification response',
      content: {
        'application/json; charset=utf-8': {
          schema: z.string(),
          examples: { '0': { value: '{"result":"","error":""}' } },
        },
      },
    },
  },
})

export const postV1VerificationSendRoute = createRoute({
  method: 'post',
  path: '/v1/verification/send',
  description:
    'Send an SMS with verification code and a custom message for authentication purpose.',
  request: {
    query: z.object({
      country_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ISO 3166 country code for the recipient mobile phone number. If parameter is supplied, then some basic telephone number validation is done.',
            in: 'query',
            name: 'country_code',
            schema: { type: 'string' },
            required: false,
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns the API response in json (default) or xml format.',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
      tel: z
        .string()
        .openapi({
          param: {
            description:
              'The recipient mobile phone number in E164 format which is a plus followed by just numbers with no spaces or parentheses.',
            in: 'query',
            name: 'tel',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'FraudLabs Pro API key.',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      mesg: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            description:
              'The message template for the SMS. Add <otp> as placeholder for the actual OTP to be generated. Max length is 140 characters.',
            in: 'query',
            name: 'mesg',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'send verification response',
      content: {
        'application/json; charset=utf-8': {
          schema: z.string(),
          examples: { '0': { value: '{"tran_id":"","credits_remaining":"0","error":""}' } },
        },
      },
    },
  },
})
