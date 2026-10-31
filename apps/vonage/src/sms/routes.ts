import { createRoute, z } from '@hono/zod-openapi'

const DeliveryReceiptSchema = z
  .object({
    'api-key': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The API key that sent the SMS. This is useful when multiple accounts are sending webhooks to the same endpoint.',
        example: 'abcd1234',
      }),
    'client-ref': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the `client-ref` is set when the SMS is sent, it will be included in the delivery receipt',
        example: 'my-personal-reference',
      }),
    'err-code': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the request. Will be a non `0` value if there has been an error, or if the status is unknown. See the [Delivery Receipt documentation](/messaging/sms/guides/delivery-receipts#dlr-error-codes) for more details',
        example: '0',
      }),
    'message-timestamp': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when Vonage started to push this Delivery Receipt to your webhook endpoint.',
        example: '2020-01-01 12:00:00',
      }),
    messageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Vonage ID for this message.', example: '0A0000001234567B' }),
    msisdn: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number the message was sent to. Numbers are specified in E.164 format.',
        example: '447700900000',
      }),
    'network-code': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Mobile Country Code Mobile Network Code (MCCMNC) of the carrier this phone number is registered with.',
        example: '12345',
      }),
    nonce: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A random string to be used when calculating the signature. _Only included if you have signatures enabled_',
        example: 'ec11dd3e-1e7f-4db5-9467-82b02cd223b9',
      }),
    price: z
      .string()
      .exactOptional()
      .openapi({ description: 'The cost of the message', example: '0.03330000' }),
    scts: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When the DLR was received from the carrier in the following format `YYMMDDHHMM`. For example, `2001011400` is at `2020-01-01 14:00`',
        example: '2001011400',
      }),
    sig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The signature to enable verification of the source of this webhook. Please see the [developer documentation for validating signatures](/concepts/guides/signing-messages) for more information, or use one of our published SDKs. _Only included if you have signatures enabled_',
        example: '1A20E4E2069B609FDA6CECA9DE18D5CAFE99720DDB628BD6BE8B19942A336E1C',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A code that explains where the message is in the delivery process.',
        example: 'delivered',
        'x-possible-values': [
          'delivered',
          'expired',
          'failed',
          'rejected',
          'accepted',
          'buffered',
          'unknown',
        ],
      }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A timestamp in Unix (seconds since the epoch) format. _Only included if you have signatures enabled_',
        example: '1582650446',
      }),
    to: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The SenderID you set in `from` in your request.',
        example: 'AcmeInc',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeliveryReceipt')

const ErrorMessageSchema = z
  .object({
    'error-text': z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the error', example: 'Missing to param' }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error status of the message', example: '2' }),
  })
  .openapi({ xml: { name: 'message' }, required: [] })
  .openapi('ErrorMessage')

const ErrorSchema = z
  .object({
    'message-count': z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of messages in the request', example: '1' }),
    messages: z.array(ErrorMessageSchema).exactOptional(),
  })
  .openapi({ description: 'Error', required: [] })
  .openapi('Error')

const ErrorXmlSchema = z
  .object({ messages: z.array(ErrorMessageSchema).exactOptional() })
  .openapi({ description: 'Error', xml: { name: 'mt-submission-response' }, required: [] })
  .openapi('ErrorXml')

const InboundMessageSchema = z
  .object({
    'api-key': z
      .string()
      .openapi({
        description: 'The Vonage API Key of the receiving account.',
        example: 'abcd1234',
      }),
    concat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'True - if this is a concatenated message. This field does not exist if it is a single message',
        example: 'true',
      }),
    'concat-part': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of this part in the message. Counting starts at 1.',
        example: '2',
      }),
    'concat-ref': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The transaction reference. All parts of this message share this value.',
        example: '1',
      }),
    'concat-total': z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of parts in this concatenated message.', example: '3' }),
    data: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'The content of this message, if type is binary.',
      }),
    keyword: z
      .string()
      .openapi({
        description: 'The first word in the message body. Converted to upper case.',
        example: 'HELLO',
      }),
    'message-timestamp': z
      .string()
      .openapi({
        description:
          'The time when Vonage started to push this Delivery Receipt to your webhook endpoint.',
        example: '2020-01-01 12:00:00',
      }),
    messageId: z
      .string()
      .openapi({ description: 'The ID of the message', example: '0A0000000123ABCD1' }),
    msisdn: z
      .string()
      .openapi({
        description:
          'The phone number that this inbound message was sent from. Numbers are specified in E.164 format.',
        example: '447700900001',
      }),
    nonce: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A random string that forms part of the signed set of parameters, it adds an extra element of unpredictability into the signature for the request. You use the nonce and timestamp parameters with your shared secret to calculate and validate the signature for inbound messages.',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
    text: z
      .string()
      .openapi({
        description: 'The message body for this inbound message.',
        example: 'Hello world',
      }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unix timestamp representation of message-timestamp.',
        example: '1578787200',
      }),
    to: z
      .string()
      .openapi({
        description:
          'The phone number the message was sent to. **This is your virtual number**. Numbers are specified in E.164 format.',
        example: '447700900000',
      }),
    type: z
      .string()
      .openapi({
        description:
          'Possible values are:\n\n  - `text` - standard text.\n  - `unicode` - URLencoded   unicode  . This is valid for standard GSM, Arabic, Chinese, double-encoded characters and so on.\n  - `binary` - a binary message.\n',
        example: 'text',
      }),
    udh: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hex encoded User Data Header, if type is binary' }),
  })
  .openapi({
    required: [
      'msisdn',
      'to',
      'messageId',
      'text',
      'type',
      'keyword',
      'message-timestamp',
      'api-key',
    ],
  })
  .openapi('InboundMessage')

const MessageSchema = z
  .object({
    'account-ref': z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com)',
        example: 'customer1234',
      }),
    'client-ref': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If a `client-ref` was included when sending the SMS, this field will be included and hold the value that was sent.',
        example: 'my-personal-reference',
      }),
    'message-id': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the message',
        example: '0A0000000123ABCD1',
        xml: { name: 'messageId' },
      }),
    'message-price': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The estimated cost of the message',
        example: '0.03330000',
        xml: { name: 'messagePrice' },
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The estimated ID of the network of the recipient',
        example: '12345',
      }),
    'remaining-balance': z
      .string()
      .exactOptional()
      .openapi({
        description: 'Your estimated remaining balance',
        example: '3.14159265',
        xml: { name: 'remainingBalance' },
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the message. See [Troubleshooting Failed SMS](/messaging/sms/guides/troubleshooting-sms).',
        example: '0',
      }),
    to: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number the message was sent to. Numbers are specified in E.164 format.',
        example: '447700900000',
      }),
  })
  .openapi({ required: [] })
  .openapi('Message')

const NewMessageSchema = z
  .object({
    'account-ref': z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com)',
        example: 'customer1234',
      }),
    api_key: z.string().length(8).openapi({ description: 'Your API key', example: 'abcd1234' }),
    api_secret: z
      .string()
      .min(6)
      .max(32)
      .exactOptional()
      .openapi({
        description: 'Your API secret. Required unless `sig` is provided',
        example: 'abcdef0123456789',
      }),
    body: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**Advanced**: Hex encoded binary data. Depends on `type` parameter having the value `binary`.',
        example: '0011223344556677',
      }),
    callback: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**Advanced**: The webhook endpoint the delivery receipt for this sms is sent to. This parameter overrides the webhook endpoint you set in Dashboard. Max 100 characters.',
        example: 'https://example.com/sms-dlr',
      }),
    'client-ref': z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**Advanced**: You can optionally include your own reference of up to 100 characters.',
        example: 'my-personal-reference',
      }),
    'content-id': z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468)',
        example: '1107457532145798767',
      }),
    'entity-id': z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468)',
        example: '1101456324675322134',
      }),
    from: z
      .string()
      .openapi({
        description:
          "The name or number the message should be sent from. Alphanumeric senderID's are not supported in all countries, see [Global Messaging](/messaging/sms/guides/global-messaging#country-specific-features) for more details. If alphanumeric, spaces will be ignored. Numbers are specified in E.164 format.",
        example: 'AcmeInc',
      }),
    'message-class': z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: '**Advanced**: The Data Coding Scheme value of the message' }),
    'protocol-id': z
      .int()
      .exactOptional()
      .openapi({
        description:
          '**Advanced**: The value of the [protocol identifier](https://en.wikipedia.org/wiki/GSM_03.40#Protocol_Identifier) to use. Ensure that the value is aligned with `udh`.',
        example: 127,
      }),
    sig: z
      .string()
      .min(16)
      .max(60)
      .exactOptional()
      .openapi({
        description:
          'The hash of the request parameters in alphabetical order, a timestamp and the signature secret. See [Signing Requests](/concepts/guides/signing-messages) for more details.',
      }),
    'status-report-req': z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          '**Advanced**: Boolean indicating if you like to receive a [Delivery Receipt](/messaging/sms/building-blocks/receive-a-delivery-receipt).',
        example: false,
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The body of the message being sent. If your message contains characters that can be encoded according to the GSM Standard and Extended tables then you can set the `type` to `text`. If your message contains characters outside this range, then you will need to set the `type` to `unicode`.',
        example: 'Hello World!',
      }),
    to: z
      .string()
      .regex(/\d{7,15}/)
      .min(7)
      .max(15)
      .openapi({
        description:
          'The number that the message should be sent to. Numbers are specified in E.164 format.',
        example: '447700900000',
      }),
    ttl: z
      .int()
      .min(20000)
      .max(604800000)
      .default(259200000)
      .exactOptional()
      .openapi({
        description:
          '**Advanced**: The duration in milliseconds the delivery of an SMS will be attempted.§§ By default Vonage attempts delivery for 72 hours, however the maximum effective value depends on the operator and is typically 24 - 48 hours. We recommend this value should be kept at its default or at least 30 minutes.',
        example: 900000,
      }),
    type: z
      .enum(['text', 'binary', 'unicode'])
      .default('text')
      .exactOptional()
      .openapi({ description: '**Advanced**: The format of the message body', example: 'text' }),
    udh: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**Advanced**: Your custom Hex encoded [User Data Header](https://en.wikipedia.org/wiki/User_Data_Header). Depends on `type` parameter having the value `binary`.',
        example: '06050415811581',
      }),
  })
  .openapi({ required: ['api_key', 'from', 'to'] })
  .openapi('NewMessage')

const SMSSchema = z
  .object({
    'message-count': z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of messages in the request', example: '1' }),
    messages: z.array(MessageSchema).exactOptional(),
  })
  .openapi({ description: 'Message sent', required: [] })
  .openapi('SMS')

const SMSXmlSchema = z
  .object({
    messages: z
      .object({
        count: z
          .int()
          .exactOptional()
          .openapi({ example: 1, xml: { attribute: true } }),
      })
      .exactOptional()
      .openapi({ 'x-skip-response-description': true, required: [] }),
  })
  .openapi({ description: 'Message sent', xml: { name: 'mt-submission-response' }, required: [] })
  .openapi('SMSXml')

export const postFormatRoute = createRoute({
  method: 'post',
  path: '/{format}',
  summary: 'Send an SMS',
  description: 'Send an outbound SMS from your Vonage account',
  operationId: 'send-an-sms',
  request: {
    params: z.object({
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the response',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml'], example: 'json', type: 'string' },
          },
          example: 'json',
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              'account-ref': z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com)',
                  example: 'customer1234',
                }),
              api_key: z
                .string()
                .length(8)
                .openapi({ description: 'Your API key', example: 'abcd1234' }),
              api_secret: z
                .string()
                .min(6)
                .max(32)
                .exactOptional()
                .openapi({
                  description: 'Your API secret. Required unless `sig` is provided',
                  example: 'abcdef0123456789',
                }),
              body: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**Advanced**: Hex encoded binary data. Depends on `type` parameter having the value `binary`.',
                  example: '0011223344556677',
                }),
              callback: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**Advanced**: The webhook endpoint the delivery receipt for this sms is sent to. This parameter overrides the webhook endpoint you set in Dashboard. Max 100 characters.',
                  example: 'https://example.com/sms-dlr',
                }),
              'client-ref': z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**Advanced**: You can optionally include your own reference of up to 100 characters.',
                  example: 'my-personal-reference',
                }),
              'content-id': z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468)',
                  example: '1107457532145798767',
                }),
              'entity-id': z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468)',
                  example: '1101456324675322134',
                }),
              from: z
                .string()
                .openapi({
                  description:
                    "The name or number the message should be sent from. Alphanumeric senderID's are not supported in all countries, see [Global Messaging](/messaging/sms/guides/global-messaging#country-specific-features) for more details. If alphanumeric, spaces will be ignored. Numbers are specified in E.164 format.",
                  example: 'AcmeInc',
                }),
              'message-class': z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
                )
                .exactOptional()
                .openapi({
                  description: '**Advanced**: The Data Coding Scheme value of the message',
                }),
              'protocol-id': z
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
                  description:
                    '**Advanced**: The value of the [protocol identifier](https://en.wikipedia.org/wiki/GSM_03.40#Protocol_Identifier) to use. Ensure that the value is aligned with `udh`.',
                  example: 127,
                }),
              sig: z
                .string()
                .min(16)
                .max(60)
                .exactOptional()
                .openapi({
                  description:
                    'The hash of the request parameters in alphabetical order, a timestamp and the signature secret. See [Signing Requests](/concepts/guides/signing-messages) for more details.',
                }),
              'status-report-req': z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    '**Advanced**: Boolean indicating if you like to receive a [Delivery Receipt](/messaging/sms/building-blocks/receive-a-delivery-receipt).',
                  example: false,
                }),
              text: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The body of the message being sent. If your message contains characters that can be encoded according to the GSM Standard and Extended tables then you can set the `type` to `text`. If your message contains characters outside this range, then you will need to set the `type` to `unicode`.',
                  example: 'Hello World!',
                }),
              to: z
                .string()
                .regex(/\d{7,15}/)
                .min(7)
                .max(15)
                .openapi({
                  description:
                    'The number that the message should be sent to. Numbers are specified in E.164 format.',
                  example: '447700900000',
                }),
              ttl: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(20000).max(604800000),
                )
                .default(259200000)
                .exactOptional()
                .openapi({
                  description:
                    '**Advanced**: The duration in milliseconds the delivery of an SMS will be attempted.§§ By default Vonage attempts delivery for 72 hours, however the maximum effective value depends on the operator and is typically 24 - 48 hours. We recommend this value should be kept at its default or at least 30 minutes.',
                  example: 900000,
                }),
              type: z
                .enum(['text', 'binary', 'unicode'])
                .default('text')
                .exactOptional()
                .openapi({
                  description: '**Advanced**: The format of the message body',
                  example: 'text',
                }),
              udh: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**Advanced**: Your custom Hex encoded [User Data Header](https://en.wikipedia.org/wiki/User_Data_Header). Depends on `type` parameter having the value `binary`.',
                  example: '06050415811581',
                }),
            })
            .openapi({ required: ['api_key', 'from', 'to'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.xor([SMSSchema, ErrorSchema]) },
        'text/xml': { schema: z.xor([SMSXmlSchema, ErrorXmlSchema]) },
      },
    },
  },
  callbacks: {
    'delivery-receipt': {
      '{$request.body#/callback}': {
        post: {
          summary: 'Delivery Receipt',
          description:
            'The following are parameters sent in as a [delivery receipt](/messaging/sms/guides/delivery-receipts) callback. You can subscribe to [webhooks](/concepts/guides/webhooks) to receive notification when the delivery status of an SMS that you have sent with Vonage changes.',
          operationId: 'delivery-receipt',
          requestBody: {
            content: { 'application/json': { schema: DeliveryReceiptSchema } },
            required: true,
          },
          responses: {
            200: { description: 'Your server returns this code if it accepts the callback' },
          },
        },
      },
    },
  },
})
