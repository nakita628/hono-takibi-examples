import { createRoute, z } from '@hono/zod-openapi'

const BaseMessageTypeSchema = z
  .object({
    client_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Client reference of up to 100 characters. The reference will be present in every message status.',
      }),
  })
  .openapi({ required: ['to', 'from', 'message', 'message_type', 'channel'] })
  .openapi('BaseMessageType')

const AudioSchema = BaseMessageTypeSchema.and(
  z
    .object({
      audio: z
        .object({ url: z.url().openapi({ example: 'https://example.com/audio.mp3' }) })
        .openapi({ required: ['url'] }),
      message_type: z
        .literal('audio')
        .exactOptional()
        .openapi({
          description: 'The type of message to send. You must provide `audio` in this field',
          example: 'audio',
        }),
    })
    .openapi({ required: ['audio'], title: 'Audio', 'x-tab-id': 'Audio' }),
).openapi('Audio')

const ContextSchema = z
  .object({
    message_from: z
      .string()
      .openapi({
        description:
          "The phone number of the **original sender** of the message being quoted in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Not present in a `context` object which is the result of a user selecting 'Message Business' in a `product` message.",
        example: '447700900000',
      }),
    message_uuid: z
      .string()
      .openapi({
        description:
          "The UUID of the message being quoted. Not present in a `context` object which is the result of a user selecting 'Message Business' in a `product` message.",
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
    whatsapp_referred_product: z
      .object({
        catalog_id: z
          .string()
          .openapi({
            description:
              "The ID of the catalog associated with the product from the `product` message being quoted or replied to using the 'Message Business' option.",
            example: '1267260820787549',
          }),
        product_retailer_id: z
          .string()
          .openapi({
            description:
              "The ID of the product from the `product` message being quoted or replied to using the 'Message Business' option.",
            example: 'r07qei73l7',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "An object containing details of a product from a `product` message being quoted or replied to using the 'Message Business' option.\n",
        required: ['catalog_id', 'product_retailer_id'],
      }),
  })
  .openapi({
    description:
      "This is only present for the Inbound Message where the user is quoting another message, or for a `product` message where the user has selected the 'Message Business' \noption. It provides information about the quoted message and/or the product message being responded to. \n",
    required: ['message_uuid', 'message_from'],
  })
  .openapi('Context')

const CustomSchema = BaseMessageTypeSchema.and(
  z
    .object({
      custom: z
        .looseObject({})
        .exactOptional()
        .openapi({
          description:
            'A custom payload, which is passed directly to WhatsApp for certain features such as templates and interactive messages. The schema of a custom object can vary widely. [Read more about Custom Objects](https://developer.vonage.com/messages/concepts/custom-objects).',
        }),
      message_type: z
        .literal('custom')
        .exactOptional()
        .openapi({
          description: 'The type of message to send. You must provide `custom` in this field',
          example: 'custom',
        }),
    })
    .openapi({ title: 'Custom', 'x-tab-id': 'Custom', required: [] }),
).openapi('Custom')

const ErrorChannelSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'The specified channel is not supported.',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z
      .string()
      .openapi({ description: 'Generic error message', example: 'Unsupported channel' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/messages-olympus#1100',
      }),
  })
  .openapi({
    description: 'Unsupported channel',
    required: ['type', 'title', 'detail', 'instance'],
  })
  .openapi('ErrorChannel')

const ErrorChannelParamsSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'The value of one or more parameters is invalid.',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    invalid_parameters: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of invalid parameter', example: 'messenger.category' }),
            reason: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Reason of failure',
                example: 'Must be one of `response`, `update` or `message_tag`.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    title: z
      .string()
      .openapi({ description: 'Generic error message', example: 'Invalid channel parameters' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/messages-olympus#1110',
      }),
  })
  .openapi({
    description: 'Invalid channel parameters',
    required: ['type', 'title', 'detail', 'instance'],
  })
  .openapi('ErrorChannelParams')

const ErrorClientReferenceSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'The client reference can be a string of up to 40 characters.',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z
      .string()
      .openapi({ description: 'Generic error message', example: 'Invalid client reference' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/messages-olympus#1060',
      }),
  })
  .openapi({
    description: 'Invalid client reference',
    required: ['type', 'title', 'detail', 'instance'],
  })
  .openapi('ErrorClientReference')

const ErrorInternalSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'There was an error processing your request in the Platform.',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z.string().openapi({ description: 'Generic error message', example: 'Internal error' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/messages-olympus#1000',
      }),
  })
  .openapi({ required: ['type', 'title', 'detail', 'instance'] })
  .openapi('ErrorInternal')

const ErrorInvalidJsonSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example:
          "Unexpected character ('\"' (code 34)): was expecting comma to separate Object entries",
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z
      .string()
      .openapi({
        description: 'Generic error message',
        example: 'The request body did not contain valid JSON',
      }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors#invalid-json',
      }),
  })
  .openapi({ description: 'Invalid JSON', required: ['type', 'title', 'detail', 'instance'] })
  .openapi('ErrorInvalidJson')

const ErrorMessageParamsSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'The value of one or more parameters is invalid.',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    invalid_parameters: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of invalid parameter', example: 'image.url' }),
            reason: z
              .string()
              .exactOptional()
              .openapi({ description: 'Reason of failure', example: 'is required.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    title: z.string().openapi({ description: 'Generic error message', example: 'Invalid params' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/messages-olympus#1150',
      }),
  })
  .openapi({
    description: 'Invalid message parameters',
    required: ['type', 'title', 'detail', 'instance'],
  })
  .openapi('ErrorMessageParams')

const ErrorMessageTypeSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'The `to` parameter is invalid for the given channel.',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z
      .string()
      .openapi({ description: 'Generic error message', example: 'Invalid message type' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/messages-olympus#1140',
      }),
  })
  .openapi({
    description: 'Invalid message type',
    required: ['type', 'title', 'detail', 'instance'],
  })
  .openapi('ErrorMessageType')

const ErrorPaymentRequiredSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'This request could not be performed due to your account balance being low.',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z.string().openapi({ description: 'Generic error message', example: 'Low balance' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/#low-balance',
      }),
  })
  .openapi({ required: ['type', 'title', 'detail', 'instance'] })
  .openapi('ErrorPaymentRequired')

const ErrorRecipientSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'The `to` parameter is invalid for the given channel.',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z
      .string()
      .openapi({ description: 'Generic error message', example: 'Invalid recipient' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/messages-olympus#110',
      }),
  })
  .openapi({ description: 'Invalid recipient', required: ['type', 'title', 'detail', 'instance'] })
  .openapi('ErrorRecipient')

const ErrorSenderSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'The `from` parameter is invalid for the given channel.',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z.string().openapi({ description: 'Generic error message', example: 'Invalid sender' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/messages-olympus#1120',
      }),
  })
  .openapi({ description: 'Invalid sender', required: ['type', 'title', 'detail', 'instance'] })
  .openapi('ErrorSender')

const ErrorThrottledSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'Please wait, then retry your request',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z.string().openapi({ description: 'Generic error message', example: 'Rate Limit Hit' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/messages-olympus#1000',
      }),
  })
  .openapi({ required: ['type', 'title', 'detail', 'instance'] })
  .openapi('ErrorThrottled')

const ErrorUnauthorizedInvalidApplicationSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional information about the error',
        example: 'Check your API key is correct and has been whitelisted',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z
      .string()
      .openapi({
        description: 'Generic error message',
        example: 'The crendentials provided do not have access to the requested product',
      }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/#unprovisioned',
      }),
  })
  .openapi({
    description: 'Invalid Application Type',
    required: ['type', 'title', 'details', 'instance'],
  })
  .openapi('ErrorUnauthorizedInvalidApplication')

const ErrorUnauthorizedMissingCredentialsSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional information about the error',
        example:
          "Check that you're using the correct credentials, and that your account has this feature enabled",
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z
      .string()
      .openapi({
        description: 'Generic error message',
        example: 'You did not provide correct credentials.',
      }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/#unathorized',
      }),
  })
  .openapi({
    description: 'Missing or Invalid Credentials',
    required: ['type', 'title', 'details', 'instance'],
  })
  .openapi('ErrorUnauthorizedMissingCredentials')

const FileSchema = BaseMessageTypeSchema.and(
  z
    .object({
      file: z
        .object({ url: z.string().openapi({ example: 'https://example.com/file.pdf' }) })
        .openapi({ required: ['url'] }),
      message_type: z
        .literal('file')
        .exactOptional()
        .openapi({
          description: 'The type of message to send. You must provide `file` in this field',
          example: 'file',
        }),
    })
    .openapi({ required: ['file'], title: 'File', 'x-tab-id': 'File' }),
).openapi('File')

const FromIdSchema = z
  .string()
  .min(1)
  .max(50)
  .openapi({ description: 'The ID of the message sender\n', example: '9876543210' })
  .openapi('FromId')

const FromNumberSchema = z
  .string()
  .openapi({
    description:
      "The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details\n",
    example: '447700900001',
  })
  .openapi('FromNumber')

const ImageSchema = BaseMessageTypeSchema.and(
  z
    .object({
      image: z
        .object({
          url: z
            .url()
            .openapi({
              description:
                'The publicly accessible URL of the image attachment. The image file is available for 48 hours after it is created. Supported types are .jpg, .jpeg, and .png',
              example: 'https://example.com/image.jpg',
            }),
        })
        .openapi({ required: ['url'] }),
      message_type: z
        .literal('image')
        .exactOptional()
        .openapi({
          description: 'The type of message to send. You must provide `image` in this field',
          example: 'image',
        }),
    })
    .openapi({ required: ['image'], title: 'Image', 'x-tab-id': 'Image' }),
).openapi('Image')

const MessageUuidSchema = z
  .string()
  .openapi({
    description: 'The UUID of the message',
    example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
  })
  .openapi('MessageUuid')

const TimestampSchema = z
  .string()
  .openapi({
    description: 'The datetime of when the event occurred, in `ISO 8601` format.',
    example: '2020-01-01T14:00:00.000Z',
  })
  .openapi('Timestamp')

const ToIdSchema = z
  .string()
  .min(1)
  .max(50)
  .openapi({ description: 'The ID of the message recipient\n', example: '0123456789' })
  .openapi('ToId')

const InboundMessengerMessageCommonSchema = z
  .object({
    channel: z
      .literal('messenger')
      .openapi({ description: 'The channel that the message came in on', example: 'messenger' }),
    from: FromIdSchema,
    message_uuid: MessageUuidSchema,
    timestamp: TimestampSchema,
    to: ToIdSchema,
  })
  .openapi({
    required: ['channel', 'message_uuid', 'to', 'from', 'timestamp'],
    title: 'Messenger',
    'x-tab-id': 'Messenger',
  })
  .openapi('InboundMessengerMessageCommon')

const InboundViberMessageCommonSchema = z
  .object({
    channel: z
      .literal('viber_service')
      .openapi({
        description: 'The channel that the message came in on',
        example: 'viber_service',
      }),
    context: z
      .object({
        message_uuid: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The ID of the message being replied to.',
            example: '1234567890abcdef',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Object containing contextual details for the inbound message when it is a response to another message.',
        required: [],
      }),
    from: FromNumberSchema,
    message_uuid: MessageUuidSchema,
    timestamp: TimestampSchema,
    to: ToIdSchema,
  })
  .openapi({
    required: ['channel', 'message_uuid', 'to', 'from', 'timestamp'],
    title: 'Viber',
    'x-tab-id': 'Viber',
  })
  .openapi('InboundViberMessageCommon')

const LocationSchema = BaseMessageTypeSchema.and(
  z
    .object({
      location: z
        .object({
          address: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Address of the location. Only displayed if `name` is present.',
              example: '23 Main St, Holmdel, NJ 07733, USA',
            }),
          lat: z.number().openapi({ description: 'Latitude of the location.', example: 40.34772 }),
          long: z
            .number()
            .openapi({ description: 'Longitude of the location.', example: -74.18847 }),
          name: z
            .string()
            .exactOptional()
            .openapi({ description: 'Name of the location.', example: 'Vonage' }),
        })
        .openapi({ required: ['lat', 'long'] }),
      message_type: z
        .literal('location')
        .exactOptional()
        .openapi({
          description: 'The type of message to send. You must provide `location` in this field',
          example: 'location',
        }),
    })
    .openapi({ required: ['location'], title: 'Location', 'x-tab-id': 'Location' }),
).openapi('Location')

const OrderSchema = BaseMessageTypeSchema.and(
  z
    .object({
      message_type: z
        .literal('order')
        .exactOptional()
        .openapi({ description: 'The type of message to send.', example: 'order' }),
      order: z
        .object({
          catalog_id: z
            .string()
            .openapi({
              description: 'The ID of the catalog containing the products in this order.',
              example: '2806150799683508',
            }),
          product_items: z.array(
            z
              .object({
                currency: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The currency code representing the currency for this specific item.',
                    example: 'USD',
                  }),
                item_price: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The unit price for this specific item.',
                    example: '9.99',
                  }),
                product_retailer_id: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The ID of the specific product being ordered.',
                    example: 'pk1v7rudbg',
                  }),
                quantity: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The quantity ordered for this specific item.',
                    example: '1',
                  }),
              })
              .openapi({ required: [] }),
          ),
        })
        .openapi({ required: ['catalog_id', 'product_items'] }),
    })
    .openapi({ required: ['order'], title: 'Order', 'x-tab-id': 'Order' }),
).openapi('Order')

const ProfileSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: "The WhatsApp number's displayed profile name",
        example: 'Jane Smith',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('Profile')

const ReplySchema = BaseMessageTypeSchema.and(
  z
    .object({
      message_type: z
        .literal('reply')
        .exactOptional()
        .openapi({
          description: 'The type of message to send. You must provide `custom` in this field.',
          example: 'reply',
        }),
      reply: z
        .object({
          description: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A description that may be added to the interactive options presented (available only on interactive lists).',
              example: 'Select 9am appointmaent time',
            }),
          id: z
            .string()
            .openapi({
              description: 'An identifier to help identify the exact interactive message response.',
              example: 'row1',
            }),
          title: z
            .string()
            .openapi({
              description: 'The title displayed on the interactive option chosen.',
              example: '9am',
            }),
        })
        .openapi({ required: ['id', 'title'] }),
    })
    .openapi({ required: ['reply'], title: 'Reply', 'x-tab-id': 'Reply' }),
).openapi('Reply')

const TemplateParametersSchema = z
  .array(z.string())
  .openapi({
    description:
      'The parameters are an array of strings, with the first string being used for {{1}} in the template, with the second being {{2}} etc. Only required if the template specified by `name` contains parameters.',
    example: ['Verification', '2526', '5'],
  })
  .openapi('TemplateParameters')

const TemplateSchema = BaseMessageTypeSchema.and(
  z
    .object({
      message_type: z
        .literal('template')
        .exactOptional()
        .openapi({
          description: 'The type of message to send. You must provide `template` in this field',
          example: 'template',
        }),
      template: z
        .object({
          name: z
            .string()
            .openapi({
              description:
                'The name of the template. For WhatsApp use your WhatsApp namespace (available via Facebook Business Manager), followed by a colon : and the name of the template to use.',
              example: '9b6b4fcb_da19_4a26_8fe8_78074a91b584:verify',
            }),
          parameters: TemplateParametersSchema.exactOptional(),
        })
        .openapi({ required: ['name'] }),
    })
    .openapi({ required: ['template'], title: 'Template', 'x-tab-id': 'Template' }),
).openapi('Template')

const TextSchema = BaseMessageTypeSchema.and(
  z
    .object({
      message_type: z
        .literal('text')
        .exactOptional()
        .openapi({
          description: 'The type of message to send. You must provide `text` in this field',
          example: 'text',
        }),
      text: z
        .string()
        .openapi({ example: 'Nexmo Verification code: 12345.<br />Valid for 10 minutes.' }),
    })
    .openapi({
      description: 'The text of message to send.',
      required: ['text'],
      title: 'Text',
      'x-tab-id': 'Text',
    }),
).openapi('Text')

const ToNumberSchema = z
  .string()
  .min(7)
  .max(15)
  .openapi({
    description:
      "The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.\n",
    example: '447700900000',
  })
  .openapi('ToNumber')

const UnsupportedSchema = BaseMessageTypeSchema.and(
  z
    .object({
      message_type: z
        .literal('unsupported')
        .openapi({
          description:
            'The type of message to send. Will be `unsupported` if the type of message received from user is not supported by the channel.',
          example: 'unsupported',
        }),
    })
    .openapi({ required: ['message_type'], title: 'Unsupported', 'x-tab-id': 'Unsupported' }),
).openapi('Unsupported')

const UsageSchema = z
  .object({
    currency: z
      .literal('EUR')
      .exactOptional()
      .openapi({ description: 'The charge currency in ISO 4217 format.', example: 'EUR' }),
    price: z
      .string()
      .exactOptional()
      .openapi({ description: 'The charge amount as a stringified number.', example: '0.0333' }),
  })
  .openapi({ required: [] })
  .openapi('Usage')

const VideoSchema = BaseMessageTypeSchema.and(
  z
    .object({
      message_type: z
        .literal('video')
        .exactOptional()
        .openapi({
          description: 'The type of message to send. You must provide `video` in this field',
          example: 'video',
        }),
      video: z
        .object({
          url: z
            .url()
            .openapi({
              description:
                'Publicly accessible URL of the video attachment. Supports file types .mp4 and .3gpp\n> Note: Only supports video codec H.264 and audio codec AAC\n',
              example: 'https://example.com/video.mp4',
            }),
        })
        .openapi({ required: ['url'] }),
    })
    .openapi({ required: ['video'], title: 'Video', 'x-tab-id': 'Video' }),
).openapi('Video')

const ChannelOptionsMessengerSchema = z
  .object({
    channel: z
      .literal('messenger')
      .exactOptional()
      .openapi({
        description: 'The channel to send to. You must provide `messenger` in this field',
        example: 'messenger',
      }),
    from: FromIdSchema.exactOptional(),
    messenger: z
      .object({
        category: z
          .enum(['response', 'update', 'message_tag'])
          .exactOptional()
          .openapi({
            description:
              'The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.',
            example: 'response',
          }),
        tag: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A tag describing the type and relevance of the 1:1 communication between your app and the end user. A full list of available tags is available [here](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)',
            example: 'CONFIRMED_EVENT_UPDATE',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    to: ToIdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChannelOptionsMessenger')

const ChannelOptionsMmsSchema = z
  .object({
    channel: z
      .literal('mms')
      .exactOptional()
      .openapi({
        description: 'The channel to send to. You must provide `mms` in this field',
        example: 'mms',
      }),
    from: FromNumberSchema.exactOptional(),
    to: ToNumberSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChannelOptionsMms')

const ChannelOptionsSmsSchema = z
  .object({
    channel: z
      .literal('sms')
      .exactOptional()
      .openapi({
        description: 'The channel to send to. You must provide `sms` in this field',
        example: 'sms',
      }),
    from: FromNumberSchema.exactOptional(),
    to: ToNumberSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChannelOptionsSms')

const ChannelOptionsViberSchema = z
  .object({
    channel: z
      .literal('viber_service')
      .exactOptional()
      .openapi({
        description: 'The channel to send to. You must provide `viber_service` in this field',
        example: 'viber_service',
      }),
    from: FromIdSchema.exactOptional(),
    to: ToNumberSchema.exactOptional(),
    viber_service: z
      .object({
        category: z
          .enum(['transaction', 'promotion'])
          .exactOptional()
          .openapi({
            description:
              'The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.',
          }),
        ttl: z
          .int()
          .min(30)
          .max(259200)
          .exactOptional()
          .openapi({
            description:
              'Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.',
            example: 600,
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Viber-specific type definition. To use "template", please contact your Vonage Account Manager to setup your templates. To find out more please visit the [product page](https://www.vonage.com/communications-apis/messages/)',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ChannelOptionsViber')

const ChannelOptionsViberVideoSchema = z
  .object({
    channel: z
      .literal('viber_service')
      .exactOptional()
      .openapi({
        description: 'The channel to send to. You must provide `viber_service` in this field',
        example: 'viber_service',
      }),
    from: FromIdSchema.exactOptional(),
    to: ToNumberSchema.exactOptional(),
    viber_service: z
      .object({
        category: z
          .enum(['transaction', 'promotion'])
          .exactOptional()
          .openapi({
            description:
              'The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.',
          }),
        duration: z
          .string()
          .exactOptional()
          .openapi({ description: 'The duration of the video in seconds.', example: '123' }),
        file_size: z
          .string()
          .exactOptional()
          .openapi({ description: 'The file size of the video in MB.', example: '1' }),
        ttl: z
          .int()
          .min(30)
          .max(259200)
          .exactOptional()
          .openapi({
            description:
              'Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.',
            example: 600,
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Viber-specific type definition. To use "template", please contact your Vonage Account Manager to setup your templates. To find out more please visit the [product page](https://www.vonage.com/communications-apis/messages/)',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ChannelOptionsViberVideo')

const ChannelOptionsViberWithButtonSchema = z
  .object({
    channel: z
      .literal('viber_service')
      .exactOptional()
      .openapi({
        description: 'The channel to send to. You must provide `viber_service` in this field',
        example: 'viber_service',
      }),
    from: FromIdSchema.exactOptional(),
    to: ToNumberSchema.exactOptional(),
    viber_service: z
      .object({
        action: z
          .object({
            text: z
              .string()
              .max(30)
              .exactOptional()
              .openapi({
                description: 'Text which is rendered on the action button.',
                example: 'Find out more',
              }),
            url: z
              .string()
              .exactOptional()
              .openapi({
                description: 'A URL which is requested when the action button is clicked.',
                example: 'https://example.com/page1.html',
              }),
          })
          .exactOptional()
          .openapi({ description: 'Node for Viber action buttons.', required: [] }),
        category: z
          .enum(['transaction', 'promotion'])
          .exactOptional()
          .openapi({
            description:
              'The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.',
          }),
        ttl: z
          .int()
          .min(30)
          .max(259200)
          .exactOptional()
          .openapi({
            description:
              'Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.',
            example: 600,
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Viber-specific type definition. To use "template", please contact your Vonage Account Manager to setup your templates. To find out more please visit the [product page](https://www.vonage.com/communications-apis/messages/)',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ChannelOptionsViberWithButton')

const ChannelOptionsWhatsappSchema = z
  .object({
    channel: z
      .literal('whatsapp')
      .exactOptional()
      .openapi({
        description: 'The channel to send to. You must provide `whatsapp` in this field',
        example: 'whatsapp',
      }),
    from: FromNumberSchema.exactOptional(),
    to: ToNumberSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChannelOptionsWhatsapp')

const InboundMessageMMSSchema = z
  .object({
    channel: z
      .literal('mms')
      .openapi({ description: 'The channel the message came in on', example: 'mms' }),
    from: FromNumberSchema,
    message_uuid: MessageUuidSchema,
    timestamp: TimestampSchema,
    to: ToNumberSchema,
  })
  .openapi({
    required: ['channel', 'message_uuid', 'to', 'from', 'timestamp'],
    title: 'MMS',
    'x-tab-id': 'MMS',
  })
  .openapi('InboundMessageMMS')

const InboundMessageSMSSchema = z
  .object({
    channel: z
      .literal('sms')
      .openapi({ description: 'The channel the message came in on', example: 'sms' }),
    from: FromNumberSchema,
    message_uuid: MessageUuidSchema,
    sms: z
      .object({
        keyword: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The first word of the message sent to uppercase.',
            example: 'HELLO',
          }),
        num_messages: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The number of inbound SMS messages concatenated together to comprise this message. SMS messages are 160 characters, if an inbound message exceeds that size they are concatenated together to forma single message. This number indicates how many messages formed this webhook.',
            example: '2',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Channel specific metadata for SMS', required: [] }),
    text: z
      .string()
      .openapi({
        description: 'The UTF-8 encoded text of the inbound message.\n',
        example: 'Hello From Vonage!',
      }),
    timestamp: TimestampSchema,
    to: ToNumberSchema,
    usage: UsageSchema.exactOptional(),
  })
  .openapi({
    required: ['channel', 'message_uuid', 'to', 'from', 'timestamp', 'text'],
    title: 'SMS',
  })
  .openapi('InboundMessageSMS')

const InboundWhatsAppMessageCommonSchema = z
  .object({
    channel: z
      .literal('whatsapp')
      .openapi({ description: 'The channel that the message came in on', example: 'whatsapp' }),
    context: ContextSchema.exactOptional(),
    from: FromNumberSchema,
    message_uuid: MessageUuidSchema,
    profile: ProfileSchema.exactOptional(),
    provider_message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A message from the channel provider, which may contain a description, error codes or other information',
      }),
    timestamp: TimestampSchema,
    to: ToNumberSchema,
  })
  .openapi({
    required: ['channel', 'message_uuid', 'to', 'from', 'timestamp'],
    title: 'WhatsApp',
    'x-tab-id': 'WhatsApp',
  })
  .openapi('InboundWhatsAppMessageCommon')

const MessageStatusBaseSchema = z
  .object({
    client_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Client reference of up to 100 characters. The reference will be present in every message status.',
      }),
    error: z
      .object({
        detail: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Text describing the error. See [our errors list](https://developer.nexmo.com/api-errors/messages-olympus) for a list of possible errors',
            example:
              'Throttled - You have exceeded the submission capacity allowed on this account. Please wait and retry',
          }),
        instance: z
          .string()
          .exactOptional()
          .openapi({
            description: "The record id of this error's occurrence.",
            example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf',
          }),
        title: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The error code encountered when sending the message. See [our errors list](https://developer.nexmo.com/api-errors/messages-olympus) for a list of possible errors',
            example: 1000,
          }),
        type: z
          .url()
          .exactOptional()
          .openapi({
            description: 'The type of error encountered, follow URL for more details',
            example: 'https://developer.nexmo.com/api-errors/messages-olympus#1000',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'If the message encountered a problem a descriptive error will be supplied in this object.',
        required: [],
      }),
    from: FromNumberSchema,
    message_uuid: MessageUuidSchema,
    status: z
      .enum(['submitted', 'delivered', 'rejected', 'undeliverable'])
      .openapi({ description: 'The status of the message.', example: 'submitted' }),
    timestamp: z
      .string()
      .openapi({
        description: 'The datetime of when the event occurred, in `ISO 8601` format.',
        example: '2020-01-01T14:00:00.000Z',
      }),
    to: ToNumberSchema,
    usage: z
      .object({
        currency: z
          .literal('EUR')
          .exactOptional()
          .openapi({ description: 'The charge currency in ISO 4217 format.', example: 'EUR' }),
        price: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The charge amount as a stringified number.',
            example: '0.0333',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['message_uuid', 'channel', 'to', 'from', 'timestamp', 'status'] })
  .openapi('MessageStatusBase')

const MessageStatusMMSSchema = MessageStatusBaseSchema.and(
  z
    .object({
      channel: z
        .literal('mms')
        .exactOptional()
        .openapi({ description: 'The channel sending to.', example: 'mms' }),
    })
    .openapi({ description: 'MMS', title: 'MMS', 'x-tab-id': 'MMS', required: [] }),
).openapi('MessageStatusMMS')

const MessageStatusMessengerSchema = MessageStatusBaseSchema.and(
  z
    .object({
      channel: z
        .literal('messenger')
        .exactOptional()
        .openapi({ description: 'The channel sending to.', example: 'messenger' }),
      from: FromIdSchema.exactOptional(),
      status: z
        .enum(['submitted', 'delivered', 'rejected', 'undeliverable', 'read'])
        .exactOptional()
        .openapi({ example: 'read' }),
      to: ToIdSchema.exactOptional(),
    })
    .openapi({
      description: 'Messenger',
      title: 'Messenger',
      'x-tab-id': 'Messenger',
      required: [],
    }),
).openapi('MessageStatusMessenger')

const MessageStatusSMSSchema = MessageStatusBaseSchema.and(
  z
    .object({
      channel: z
        .literal('sms')
        .exactOptional()
        .openapi({ description: 'The channel sending to.', example: 'sms' }),
    })
    .openapi({ description: 'SMS', title: 'SMS', 'x-tab-id': 'SMS', required: [] }),
).openapi('MessageStatusSMS')

const MessageStatusViberSchema = MessageStatusBaseSchema.and(
  z
    .object({
      channel: z
        .literal('viber_service')
        .exactOptional()
        .openapi({ description: 'The channel sending to.', example: 'viber_service' }),
      status: z
        .enum(['submitted', 'delivered', 'rejected', 'undeliverable', 'read'])
        .exactOptional()
        .openapi({ example: 'read' }),
    })
    .openapi({ description: 'Viber', title: 'Viber', 'x-tab-id': 'Viber', required: [] }),
).openapi('MessageStatusViber')

const MessageStatusWhatsAppSchema = MessageStatusBaseSchema.and(
  z
    .object({
      channel: z
        .literal('whatsapp')
        .exactOptional()
        .openapi({ description: 'The channel sending to.', example: 'whatsapp' }),
      status: z
        .enum(['submitted', 'delivered', 'rejected', 'undeliverable', 'read'])
        .exactOptional()
        .openapi({ example: 'read' }),
      usage: z
        .object({
          currency: z
            .literal('EUR')
            .exactOptional()
            .openapi({ description: 'The charge currency in ISO 4217 format.', example: 'EUR' }),
          price: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The charge amount as a stringified number. For WhatsApp this is the default Vonage charge per conversation.',
              example: '0.0333',
            }),
        })
        .exactOptional()
        .openapi({ required: [] }),
      whatsapp: z
        .object({
          conversation: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The id of the conversation.', example: '1234567890' }),
              origin: z
                .object({
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The conversation type.', example: 'user_initiated' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object contining data related to the origin of the conversation.',
                  required: [],
                }),
            })
            .exactOptional()
            .openapi({
              description:
                'An object contining data for the conversation to which the message relates.',
              required: [],
            }),
        })
        .exactOptional()
        .openapi({
          description:
            'An object contining meta-data related to the WhatsApp message that triggered this callback. Only present for callbacks with a `status` of `delivered`.',
          required: [],
        }),
    })
    .openapi({ description: 'WhatsApp', title: 'WhatsApp', 'x-tab-id': 'WhatsApp', required: [] }),
).openapi('MessageStatusWhatsApp')

const VCardSchema = BaseMessageTypeSchema.and(
  z
    .object({
      message_type: z
        .literal('vcard')
        .exactOptional()
        .openapi({
          description: 'The type of message to send. You must provide `vcard` in this field',
          example: 'vcard',
        }),
      vcard: z
        .object({
          url: z
            .url()
            .openapi({
              description:
                'The publicly accessible URL of the vCard attachment. Supported types are .vcf only',
              example: 'https://example.com/conatact.vcf',
            }),
        })
        .openapi({ required: ['url'] }),
    })
    .openapi({ required: ['vcard'], title: 'vCard', 'x-tab-id': 'vCard' }),
).openapi('VCard')

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

const BearerAuthSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  summary: 'Send a message to the given channel.',
  description: 'Send a Message',
  operationId: 'SendMessage',
  request: {
    body: {
      description: 'Send a Message.',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .xor([
                TextSchema.and(
                  z
                    .object({
                      text: z
                        .any()
                        .exactOptional()
                        .openapi({
                          description:
                            'The text of message to send; limited to 1000 characters. The Messages API automatically detects unicode characters when sending SMS and sends the message as a unicode SMS. For more information on how concatenation and encoding please visit: [developer.nexmo.com/messaging/sms/guides/concatenation-and-encoding](https://developer.nexmo.com/messaging/sms/guides/concatenation-and-encoding).\n',
                        }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsSmsSchema),
              ])
              .openapi({ title: 'SMS', 'x-tab-id': 'SMS' }),
            z
              .xor([
                ImageSchema.and(
                  z
                    .object({
                      image: z
                        .object({
                          caption: z
                            .string()
                            .min(1)
                            .max(2000)
                            .exactOptional()
                            .openapi({
                              description: 'Additional text to accompany the image.',
                              example: 'Additional text to accompany the image.',
                            }),
                          url: z
                            .string()
                            .openapi({
                              description:
                                'The URL of the image attachment.\n\nSupports `.jpg`, `.jpeg`, `.png` and `.gif`.\n',
                              example: 'https://example.com/image.jpg',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['url'] }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsMmsSchema),
                VCardSchema.and(
                  z
                    .object({
                      vcard: z
                        .object({
                          url: z
                            .string()
                            .openapi({
                              description:
                                'The URL of the vCard attachment.\n\nSupports `.vcf` only.\n',
                              example: 'https://example.com/contact.vcf',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['url'] }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsMmsSchema),
                AudioSchema.and(
                  z
                    .object({
                      audio: z
                        .object({
                          caption: z
                            .string()
                            .min(1)
                            .max(2000)
                            .exactOptional()
                            .openapi({
                              description: 'Additional text to accompany the audio file.',
                              example: 'Additional text to accompany the audio file.',
                            }),
                          url: z
                            .string()
                            .openapi({
                              description: 'The URL of the audio attachment.\n',
                              example: 'https://example.com/audio.mp3',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['url'] }),
                      message_type: z
                        .literal('audio')
                        .exactOptional()
                        .openapi({
                          description:
                            'The type of message to send. You must provide `audio` in this field.\n\nFor best device and network support .mp3 is recommended. Not supported for US short codes.\n',
                          example: 'audio',
                        }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsMmsSchema),
                VideoSchema.and(
                  z
                    .object({
                      message_type: z
                        .literal('video')
                        .exactOptional()
                        .openapi({
                          description:
                            'The type of message to send. You must provide `video` in this field.\n\nFor best device and network support .mp4 is recommended. Not supported for US short codes.\n',
                          example: 'video',
                        }),
                      video: z
                        .object({
                          caption: z
                            .string()
                            .min(1)
                            .max(2000)
                            .exactOptional()
                            .openapi({
                              description: 'Additional text to accompany the video file.',
                              example: 'Additional text to accompany the video file.',
                            }),
                          url: z
                            .string()
                            .openapi({
                              description: 'The URL of the video attachment.\n',
                              example: 'https://example.com/video.mp4',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['url'] }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsMmsSchema),
              ])
              .openapi({ title: 'MMS', 'x-tab-id': 'MMS' }),
            z
              .xor([
                TextSchema.and(
                  z
                    .object({
                      text: z
                        .any()
                        .exactOptional()
                        .openapi({
                          description:
                            'The text of message to send; limited to 4096 characters, including unicode.\n',
                        }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsWhatsappSchema),
                LocationSchema.and(
                  z
                    .object({
                      text: z
                        .any()
                        .exactOptional()
                        .openapi({ description: 'The location to be sent in the message.\n' }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsWhatsappSchema),
                ImageSchema.and(
                  z
                    .object({
                      image: z
                        .object({
                          caption: z
                            .string()
                            .min(1)
                            .max(3000)
                            .exactOptional()
                            .openapi({
                              description: 'Additional text to accompany the image.',
                              example: 'Additional text to accompany the image.',
                            }),
                          url: z
                            .string()
                            .openapi({
                              description:
                                'The URL of the image attachment.\n\nSupports `.jpg`, `.jpeg`, and `.png`.\n',
                              example: 'https://example.com/image.jpg',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['url'] }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsWhatsappSchema),
                AudioSchema.and(
                  z
                    .object({
                      audio: z
                        .object({
                          url: z
                            .unknown()
                            .superRefine((val, ctx) => {
                              if (typeof val === 'string') {
                                if ([...val].length < 10) {
                                  ctx.addIssue({ code: 'custom' })
                                }
                                if ([...val].length > 2000) {
                                  ctx.addIssue({ code: 'custom' })
                                }
                              }
                            })
                            .openapi({
                              description:
                                'The URL of the audio attachment.\n\nSupports `.aac`, `.m4a`, `.amr`, `.mp3` and `.opus`.\n',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['url'] }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsWhatsappSchema),
                VideoSchema.and(
                  z
                    .object({
                      video: z
                        .object({
                          caption: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Additional text to accompany the file.',
                              example: 'Additional text.',
                            }),
                          url: z
                            .any()
                            .openapi({
                              description:
                                'The URL of the video attachment.\n\nSupports `.mp4` and `.3gpp`. Note, only `H.264` video codec and `AAC` audio codec is supported.\n',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['url'] }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsWhatsappSchema),
                FileSchema.and(
                  z
                    .object({
                      file: z
                        .object({
                          caption: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Additional text to accompany the file.',
                              example: 'Additional text.',
                            }),
                          url: z
                            .any()
                            .openapi({
                              description:
                                'The URL of the file attachment.\n\nSupports supports a wide range of attachments including `.zip`, `.csv` and `.pdf`.\n',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['url'] }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsWhatsappSchema),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'message_type')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                      if (!Object.hasOwn(val, 'whatsapp')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['message_type', 'whatsapp'] })
                  .and(TemplateSchema)
                  .and(ChannelOptionsWhatsappSchema)
                  .and(
                    z
                      .object({
                        whatsapp: z
                          .object({
                            locale: z
                              .string()
                              .openapi({
                                description:
                                  'The [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) language of the template. See [the WhatsApp documentation](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages-) for supported languages.',
                                example: 'en_US',
                              }),
                            policy: z
                              .literal('deterministic')
                              .exactOptional()
                              .openapi({
                                description:
                                  'Policy for resolving what language template to use. As of right now the only valid choice is `deterministic`.',
                                example: 'deterministic',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: ['locale'] }),
                      })
                      .openapi({ required: [] }),
                  ),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'message_type')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['message_type'] })
                  .and(CustomSchema)
                  .and(ChannelOptionsWhatsappSchema),
              ])
              .openapi({ title: 'WhatsApp', 'x-tab-id': 'WhatsApp' }),
            z
              .xor([
                TextSchema.and(
                  z
                    .object({
                      text: z
                        .any()
                        .exactOptional()
                        .openapi({
                          description:
                            'The text of message to send; limited to 640 characters, including unicode.\n',
                        }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsMessengerSchema),
                ImageSchema.and(
                  z
                    .object({
                      image: z
                        .object({
                          url: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The URL of the image attachment.\n\nSupports `.jpg`, `.jpeg`, `.png` and `.gif`.\n',
                              example: 'https://example.com/image.jpg',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsMessengerSchema),
                AudioSchema.and(
                  z
                    .object({
                      audio: z
                        .object({
                          url: z
                            .unknown()
                            .superRefine((val, ctx) => {
                              if (typeof val === 'string') {
                                if ([...val].length < 10) {
                                  ctx.addIssue({ code: 'custom' })
                                }
                                if ([...val].length > 2000) {
                                  ctx.addIssue({ code: 'custom' })
                                }
                              }
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'The URL of the audio attachment.\n\nOnly supports `.mp3` files\n',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsMessengerSchema),
                VideoSchema.and(
                  z
                    .object({
                      video: z
                        .object({
                          url: z
                            .any()
                            .exactOptional()
                            .openapi({
                              description:
                                'The URL of the video attachment.\n\nSupports `.mp4` files. Note, only `H.264` video codec and `AAC` audio codec is supported.\n',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsMessengerSchema),
                FileSchema.and(
                  z
                    .object({
                      file: z
                        .object({
                          url: z
                            .any()
                            .exactOptional()
                            .openapi({
                              description:
                                'The URL of the file attachment.\n\nSupports a wide range of attachments including `.zip`, `.csv` and `.pdf`.\n',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsMessengerSchema),
              ])
              .openapi({ title: 'Messenger', 'x-tab-id': 'Messenger' }),
            z
              .xor([
                TextSchema.and(
                  z
                    .object({
                      text: z
                        .any()
                        .exactOptional()
                        .openapi({
                          description:
                            'The text of message to send; limited to 1000 characters, including unicode.\n',
                        }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsViberWithButtonSchema),
                ImageSchema.and(
                  z
                    .object({
                      image: z
                        .object({
                          caption: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A caption to accompany the image. Required if the message includes an action button.',
                              example: 'Check out this new promotion',
                            }),
                          url: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The URL of the image attachment.\n\nSupports `.jpg`, `.jpeg`, and `.png`.\n',
                              example: 'https://example.com/image.jpg',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsViberWithButtonSchema),
                VideoSchema.and(
                  z
                    .object({
                      video: z
                        .object({
                          caption: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Text caption to accompany message.',
                              example: 'Check out this new video',
                            }),
                          thumb_url: z
                            .string()
                            .max(1000)
                            .openapi({
                              description:
                                'URL to an image file for a thumbnail preview of the video.',
                              example: 'https://example.com/file1.jpg',
                            }),
                          url: z
                            .string()
                            .openapi({
                              description: 'The URL of the video attachment.',
                              example: 'https://example.com/image.jpg',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['url', 'duration', 'file_size', 'thumb_url'] }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsViberVideoSchema),
                FileSchema.and(
                  z
                    .object({
                      file: z
                        .object({
                          name: z
                            .string()
                            .max(25)
                            .exactOptional()
                            .openapi({
                              description: 'The name and extension of the file.',
                              example: 'example.pdf',
                            }),
                          url: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The URL for the file attachment *or* the path for the location of the file attachement. If `name` is included, can just be the path. If  `name` is not included, must include the filename and extension.',
                              example: 'https://example.com/files/',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'An object containing details of the file to be sent. Note: allowed file types are `.doc,` `.docx`, `.rtf`, `.dot`, `.dotx`, `.odt`, `.odf`, `.fodt`, `.txt`, `.info`, `.pdf`, `.xps`, `.pdax`, `.eps`, `.xls`, `.xlsx`, `.ods`, `.fods`, `.csv`, `.xlsm`, `.xltx`. Maximum file size is 200MB',
                          required: [],
                        }),
                    })
                    .openapi({ required: [] }),
                ).and(ChannelOptionsViberSchema),
              ])
              .openapi({ title: 'Viber', 'x-tab-id': 'Viber' }),
          ]),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Accepted.',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ message_uuid: MessageUuidSchema.exactOptional() })
              .openapi({ description: 'SMS', 'x-tab-id': 'SMS', required: [] }),
            z
              .object({ message_uuid: MessageUuidSchema.exactOptional() })
              .openapi({ description: 'MMS', 'x-tab-id': 'MMS', required: [] }),
            z
              .object({ message_uuid: MessageUuidSchema.exactOptional() })
              .openapi({ description: 'WhatsApp', 'x-tab-id': 'WhatsApp', required: [] }),
            z
              .object({ message_uuid: MessageUuidSchema.exactOptional() })
              .openapi({ description: 'Messenger', 'x-tab-id': 'Messenger', required: [] }),
            z
              .object({ message_uuid: MessageUuidSchema.exactOptional() })
              .openapi({ description: 'Viber', 'x-tab-id': 'Viber', required: [] }),
          ]),
        },
      },
    },
    401: {
      description: 'Authentication failure',
      content: {
        'application/json': {
          schema: z.xor([
            ErrorUnauthorizedMissingCredentialsSchema,
            ErrorUnauthorizedInvalidApplicationSchema,
          ]),
        },
      },
    },
    402: {
      description: 'Payment Required',
      content: { 'application/json': { schema: ErrorPaymentRequiredSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: {
        'application/json': {
          schema: z.xor([
            ErrorInvalidJsonSchema,
            ErrorChannelSchema,
            ErrorChannelParamsSchema,
            ErrorSenderSchema,
            ErrorRecipientSchema,
            ErrorMessageTypeSchema,
            ErrorMessageParamsSchema,
            ErrorClientReferenceSchema,
          ]),
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: ErrorThrottledSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ErrorInternalSchema } },
    },
  },
  callbacks: {
    'message-status': {
      '{$request.body#/callback}': {
        post: {
          summary: 'Message Status',
          description:
            'Webhooks provide information about events happening to the message such as whether it has been sent, delivered or rejected by the provider.',
          operationId: 'message-status',
          requestBody: {
            content: {
              'application/json': {
                schema: z.xor([
                  MessageStatusSMSSchema,
                  MessageStatusMMSSchema,
                  MessageStatusWhatsAppSchema,
                  MessageStatusMessengerSchema,
                  MessageStatusViberSchema,
                ]),
              },
            },
            required: true,
          },
          responses: {
            200: { description: 'Your server returns this code if it accepts the callback.' },
          },
        },
      },
    },
  },
  security: [{ bearerAuth: [] }, { basicAuth: [] }],
})
