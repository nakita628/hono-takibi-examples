import { createRoute, z } from '@hono/zod-openapi'

const AudioPropertySchema = z
  .object({
    url: z
      .string()
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'The URL of the audio attachment. `messenger` supports .mp3. `whatsapp` supports .aac, .m4a, .amr, .mp3 and .opus.',
        example: 'https://example.com/audio.mp3',
      }),
  })
  .openapi({ required: [] })
  .openapi('AudioProperty')

const ErrorSchema = z
  .object({
    detail: z.string().openapi({ example: 'Your request parameters did not validate.' }),
    instance: z.string().openapi({ example: null }),
    invalid_parameters: z
      .object({
        name: z.string().exactOptional().openapi({ example: 'Invalid `from` parameter' }),
        reason: z.string().exactOptional().openapi({ example: 'Invalid `from` parameter' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z.string().openapi({ example: 'https://www.nexmo.com/messages/Errors#InvalidParams' }),
  })
  .openapi({
    description:
      'The error format is standardized to the 4xx/5xx range with a code and a human readable explanation.',
    required: ['type', 'title', 'detail', 'instance'],
  })
  .openapi('Error')

const FailoverPropertySchema = z
  .object({
    condition_status: z
      .enum(['delivered', 'read'])
      .exactOptional()
      .openapi({
        description:
          'Set the status the message must reach in the expiry_time before failing over. Options are delivered or read.',
        example: 'delivered',
      }),
    expiry_time: z
      .int()
      .min(15)
      .max(86400)
      .exactOptional()
      .openapi({
        description: 'In seconds. Minimum value is 15 and maximum value is 86,400 seconds (1 day).',
        example: 600,
      }),
  })
  .openapi({
    description:
      'Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.',
    required: [],
  })
  .openapi('FailoverProperty')

const FilePropertySchema = z
  .object({
    caption: z
      .string()
      .min(1)
      .max(3000)
      .exactOptional()
      .openapi({
        description: 'Additional text to accompany the image. Supported by WhatsApp and MMS.',
        example: 'Additional text to accompany the image.',
      }),
    url: z
      .string()
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'The URL of the file attachment. `messenger` supports a wide range of attachments including .zip, .csv and .pdf. `whatsapp` supports .pdf, .doc(x), .ppt(x) and .xls(x).',
        example: 'https://example.com/file.zip',
      }),
  })
  .openapi({ required: [] })
  .openapi('FileProperty')

const FromPropertySchema = z
  .object({
    id: z
      .string()
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'Your ID for the platform that you are sending from.\n\n**Messenger**: This value should be the `to.id` value you received in the inbound messenger event.\n\n**Viber**: This is your Service Message ID given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).\n\n**SMS**: **MMS**: or **WhatsApp** This value is not required.\n',
        example: '0123456789012345',
      }),
    number: z
      .string()
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          '**SMS**: or **MMS**: The phone number of the message sender in the [E.164](https://en.wikipedia.org/wiki/E.164) format.\n\n**WhatsApp**: This is your WhatsApp Business Number given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).\n\n**Messenger**: or **Viber**: This value is not required.\n',
        example: '447700900000',
      }),
    type: z
      .enum(['sms', 'viber_service_msg', 'messenger', 'whatsapp'])
      .openapi({ description: 'The type of message that you want to send.', example: 'sms' }),
  })
  .openapi({ required: ['type'] })
  .openapi('FromProperty')

const ImagePropertySchema = z
  .object({
    caption: z
      .string()
      .min(1)
      .max(3000)
      .exactOptional()
      .openapi({
        description: 'Additional text to accompany the image. Supported by WhatsApp and MMS.',
        example: 'Additional text to accompany the image.',
      }),
    url: z
      .string()
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'The URL of the image attachment. `messenger` and `mms` supports .jpg, .jpeg, .png and .gif. `viber_service_msg` supports .jpg .jpeg, and .png. `whatsapp` supports .jpg .jpeg, and .png.',
        example: 'https://example.com/image.jpg',
      }),
  })
  .openapi({ required: [] })
  .openapi('ImageProperty')

const TemplatePropertySchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the template.',
        example: 'whatsapp:hsm:technology:vonage:verify',
      }),
    parameters: z
      .array(
        z
          .object({
            default: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The parameters are an array. The first value being {{1}} in the template.',
                example: '1234',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateProperty')

const VideoPropertySchema = z
  .object({
    url: z
      .string()
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'The URL of the video attachment.\n\n**messenger** supports .mp4\n\n**whatsapp** supports .mp4 and .3gpp. Note, only H.264 video codec and AAC audio codec is supported.\n',
        example: 'https://example.com/video.mp4',
      }),
  })
  .openapi({ required: [] })
  .openapi('VideoProperty')

const MessagePropertySchema = z
  .object({
    content: z
      .object({
        audio: AudioPropertySchema.exactOptional(),
        file: FilePropertySchema.exactOptional(),
        image: ImagePropertySchema.exactOptional(),
        template: TemplatePropertySchema.exactOptional(),
        text: z
          .string()
          .min(1)
          .max(4096)
          .exactOptional()
          .openapi({
            description:
              'The text of the message.\n\n**Messenger**: Is limited to 640 characters\n\n**SMS** or **Viber**: Is 1000 characters\n\n**WhatsApp**: is 4096 characters\n',
            example: 'Vonage Verification code: 64873. Valid for 10 minutes.',
          }),
        type: z
          .enum(['text', 'image', 'audio', 'video', 'file', 'template', 'custom'])
          .openapi({
            description:
              'The type of message that you are sending.\n\n**Messenger**: supports `text`, `image`, `audio`, `video` and `file`.\n\n**Viber Business Messages**: supports `image` and `text`.\n\n**WhatsApp**: supports `template`, `text`, `image`, `audio`, `video` and `file`.\n\n**SMS**: supports `text`.\n',
            example: 'text',
          }),
        video: VideoPropertySchema.exactOptional(),
      })
      .openapi({ required: ['type'] }),
    messenger: z
      .object({
        category: z
          .enum(['response', 'update', 'message_tag'])
          .exactOptional()
          .openapi({
            description:
              'The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy]( https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.',
            example: 'message_tag',
          }),
        tag: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "‘A full list of the possible tags is available on [developers.facebook.com](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)'",
            example: 'ticket_update',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    viber_service_msg: z
      .object({
        category: z
          .enum(['transaction', 'promotion'])
          .exactOptional()
          .openapi({
            description:
              'The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative and a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.',
            example: 'transaction',
          }),
        ttl: z
          .int()
          .min(30)
          .max(86400)
          .exactOptional()
          .openapi({
            description:
              'Only valid for Viber Business Messages. Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.',
            example: 600,
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    whatsapp: z
      .object({
        locale: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'We are using the industry standard, BCP 47, for locales. So in your API call to the /messages API you will need to put “en-GB” and this will refer to the “en_GB” template for WhatsApp. A full list of the possible locales is available on [developers.facebook.com](https://developers.facebook.com/docs/whatsapp/message-templates/creation#translations).',
            example: 'en-GB',
          }),
        policy: z
          .enum(['fallback', 'deterministic'])
          .exactOptional()
          .openapi({
            description:
              'Please note that WhatsApp will deprecate `fallback` policy in January 2020. There are two policies that you can specify when sending a Message Template: `deterministic` and `fallback`. `deterministic` — Deliver the Message Template in exactly the language and locale asked for. `fallback` — Deliver the Message Template in the language that matches users language/locale setting on device. If one can not be found, deliver using the specified fallback language.',
            example: 'deterministic',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['content'] })
  .openapi('MessageProperty')

const TimestampPropertySchema = z
  .string()
  .openapi({
    description: 'The datetime of when the event occurred.',
    example: '2020-01-01T14:00:00.000Z',
  })
  .openapi('TimestampProperty')

const ToPropertySchema = z
  .object({
    id: z
      .string()
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'The ID of the message recipient.\n\n**Messenger**: This value should be the `from.id` value you received in the inbound messenger event.\n\n**SMS**: or **Viber**: or **WhatsApp** This value is not required.\n',
        example: '0123456789012345',
      }),
    number: z
      .string()
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          "**SMS**: or **MMS**: or **Viber**: or **WhatsApp** The phone number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.\n\n**Messenger**: This value is not required.\n",
        example: '447700900000',
      }),
    type: z
      .enum(['sms', 'viber_service_msg', 'messenger', 'whatsapp'])
      .openapi({ description: 'The type of message that you want to send.', example: 'sms' }),
  })
  .openapi({ required: ['type'] })
  .openapi('ToProperty')

const MessageStatusSchema = z
  .object({
    _links: z
      .object({
        workflow: z
          .object({
            dispatch_uuid: z
              .string()
              .exactOptional()
              .openapi({ example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' }),
            href: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Please note GET is not currently supported',
                example: '/workflows/aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    error: z
      .object({
        code: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The error code. See [our errors list](/api-errors/messages-olympus) for a list of possible errors',
            example: 1300,
          }),
        reason: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Text describing the error. See [our errors list](/api-errors/messages-olympus) for a list of possible errors',
            example: 'Not part of the provider network',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    from: FromPropertySchema.exactOptional(),
    message_uuid: z
      .string()
      .exactOptional()
      .openapi({ example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' }),
    status: z
      .enum(['submitted', 'delivered', 'read', 'rejected', 'undeliverable'])
      .exactOptional()
      .openapi({ description: 'The status of the message.', example: 'delivered' }),
    timestamp: TimestampPropertySchema.exactOptional(),
    to: ToPropertySchema.exactOptional(),
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
  .openapi({
    description:
      'The callbacks for the message status are the same as defined in the Messaging API. The only difference will be that dispatch_uuid and link will be appended.',
    required: [],
  })
  .openapi('MessageStatus')

const ResponseSchema = z
  .object({
    dispatch_uuid: z
      .string()
      .openapi({
        description: 'The parent ID for workflow request.',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
  })
  .openapi({ required: ['dispatch_uuid'] })
  .openapi('Response')

const SendWithFailoverMessageSchema = z
  .object({
    failover: FailoverPropertySchema.exactOptional(),
    from: FromPropertySchema,
    message: MessagePropertySchema,
    to: ToPropertySchema,
  })
  .openapi({ description: 'Send With Failover Message', required: ['to', 'from', 'message'] })
  .openapi('SendWithFailoverMessage')

const SendMessageSchema = z
  .object({ from: FromPropertySchema, message: MessagePropertySchema, to: ToPropertySchema })
  .openapi({ description: 'Send Message', required: ['to', 'from', 'message'] })
  .openapi('SendMessage')

const CreateWorkflowSchema = z
  .object({
    template: z
      .literal('failover')
      .exactOptional()
      .openapi({
        description:
          'The template that the Dispatch API will execute. For the initial version of the API the only available value will be failover',
        example: 'failover',
      }),
    workflow: z
      .array(z.xor([SendWithFailoverMessageSchema, SendMessageSchema]))
      .exactOptional()
      .openapi({
        description:
          'Contains a message object that must reflect the current /messages resource. All parameters within the content object reflect the /messages docs.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateWorkflow')

const FinalReportSchema = z
  .object({
    _links: z
      .object({
        messages: z
          .array(
            z
              .object({
                channel: z
                  .enum(['messenger', 'viber_sevice_msg', 'sms', 'whatsapp', 'mms'])
                  .exactOptional()
                  .openapi({ example: 'viber_service_msg' }),
                href: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Please note GET is not currently supported',
                    example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
                  }),
                message_uuid: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' }),
                status: z
                  .enum(['submitted', 'delivered', 'read', 'rejected', 'undeliverable'])
                  .exactOptional(),
                usage: z
                  .object({
                    currency: z
                      .literal('EUR')
                      .exactOptional()
                      .openapi({
                        description: 'The charge currency in ISO 4217 format.',
                        example: 'EUR',
                      }),
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
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    dispatch_uuid: z
      .string()
      .exactOptional()
      .openapi({ example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' }),
    status: z.enum(['completed', 'error']).exactOptional().openapi({ example: 'completed' }),
    template: z.literal('failover').exactOptional().openapi({ example: 'failover' }),
    timestamp: TimestampPropertySchema.exactOptional(),
    usage: z
      .object({
        currency: z
          .literal('EUR')
          .exactOptional()
          .openapi({ description: 'The charge currency in ISO 4217 format.', example: 'EUR' }),
        price: z
          .string()
          .exactOptional()
          .openapi({ description: 'The charge amount as a stringified number.', example: '0.02' }),
      })
      .exactOptional()
      .openapi({
        description:
          'This is the total cost of your Workflow request. Please note if a preceding message in the workflow request is delivered after the final message in the workflow is delivered it may not reflect the true total cost of the workflow.',
        'x-nexmo-developer-collection-description-shown': true,
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('FinalReport')

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

const BearerAuthSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  summary: 'Create a workflow',
  operationId: 'createWorkflow',
  request: {
    body: {
      description:
        'Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.',
      content: { 'application/json': { schema: CreateWorkflowSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Accepted', content: { 'application/json': { schema: ResponseSchema } } },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorSchema } } },
  },
  callbacks: {
    'final-report': {
      '{$request.body#/callback}': {
        post: {
          summary: 'The Final Report',
          description:
            'The final workflow callback is sent when The condition_status was met within the expiry_time. If we take the example API call above. If we received a delivered status at 300 seconds (within the expiry_time) the workflow would be marked as completed. We would not send an SMS. We would then send the final callback. The final message in the failover is delivered. If the message Errors on the last step we will send the final callback. Please note GET is not currently supported. You will notice we have an href to a resource in some of the callbacks. These will fail to load but we wanted to maintain the same structure so that we can seamlessly integrate GET later.',
          operationId: 'final-report',
          requestBody: {
            content: { 'application/json': { schema: FinalReportSchema } },
            required: true,
          },
          responses: {
            200: { description: 'Your server returns this code if it accepts the callback' },
          },
        },
      },
    },
    'message-status': {
      '{$request.body#/callback}': {
        post: {
          summary: 'Message Status',
          description: 'status of the message read or delivered etc.',
          operationId: 'message-status',
          requestBody: {
            content: { 'application/json': { schema: MessageStatusSchema } },
            required: true,
          },
          responses: {
            200: { description: 'Your server returns this code if it accepts the callback' },
          },
        },
      },
    },
  },
  security: [{ bearerAuth: [] }, { basicAuth: [] }],
})
