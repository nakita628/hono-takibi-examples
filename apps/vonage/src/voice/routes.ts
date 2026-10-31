import { createRoute, z } from '@hono/zod-openapi'

const AddressE164Schema = z
  .string()
  .regex(/\d{7,15}/)
  .min(7)
  .max(15)
  .openapi({ description: 'The phone number to connect to', example: '14155550100' })
  .openapi('AddressE164')

const AddressSipSchema = z
  .string()
  .min(1)
  .max(50)
  .openapi({ description: 'The SIP URI to connect to', example: 'sip:rebekka@sip.example.com' })
  .openapi('AddressSip')

const AddressWebsocketSchema = z
  .string()
  .min(1)
  .max(50)
  .openapi({ example: 'wss://example.com/socket' })
  .openapi('AddressWebsocket')

const EndpointPhoneFromSchema = z
  .object({
    number: AddressE164Schema,
    type: z
      .string()
      .openapi({ description: 'The type of connection. Must be `phone`', example: 'phone' }),
  })
  .openapi({ description: 'Connect to a Phone (PSTN) number', required: ['number', 'type'] })
  .openapi('EndpointPhoneFrom')

const EndpointPhoneToSchema = z
  .object({
    dtmfAnswer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provide [DTMF digits](https://developer.nexmo.com/voice/voice-api/guides/dtmf) to send when the call is answered',
        example: 'p*123#',
      }),
    number: AddressE164Schema,
    type: z
      .string()
      .openapi({ description: 'The type of connection. Must be `phone`', example: 'phone' }),
  })
  .openapi({ description: 'Connect to a Phone (PSTN) number', required: ['number', 'type'] })
  .openapi('EndpointPhoneTo')

const EndpointSipSchema = z
  .object({
    type: z
      .string()
      .openapi({ description: 'The type of connection. Must be `sip`', example: 'sip' }),
    uri: AddressSipSchema.exactOptional(),
  })
  .openapi({ description: 'Connect to a SIP Endpoint', required: ['type'] })
  .openapi('EndpointSip')

const EndpointWebsocketSchema = z
  .object({
    'content-type': z
      .enum(['audio/l16;rate=8000', 'audio/l16;rate=16000'])
      .openapi({ example: 'audio/l16;rate=16000' }),
    headers: z
      .object({
        customer_id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'This is an example header. You can provide any headers you may need',
            example: 'ABC123',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Details of the Websocket you want to connect to', required: [] }),
    type: z
      .string()
      .openapi({
        description: 'The type of connection. Must be `websocket`',
        example: 'websocket',
      }),
    uri: AddressWebsocketSchema.exactOptional(),
  })
  .openapi({ description: 'Connect to a Websocket', required: ['type', 'content-type'] })
  .openapi('EndpointWebsocket')

const EndpointVBCExtensionSchema = z
  .object({
    extension: z.string().openapi({ example: '1234' }),
    type: z
      .string()
      .openapi({ description: 'The type of connection. Must be `vbc`', example: 'vbc' }),
  })
  .openapi({ description: 'Connect to a VBC extension', required: ['type', 'extension'] })
  .openapi('EndpointVBCExtension')

const CreateCallRequestBaseSchema = z
  .object({
    event_method: z
      .enum(['POST', 'GET'])
      .default('POST')
      .exactOptional()
      .openapi({ description: 'The HTTP method used to send event information to `event_url`.' }),
    event_url: z
      .array(z.url())
      .exactOptional()
      .openapi({
        description:
          '**Required** unless `event_url` is configured at the application\nlevel, see [Create an Application](/api/application.v2#createApplication)\n\nThe webhook endpoint where call progress events are\nsent to. For more information about the values sent, see\n[Event webhook](/voice/voice-api/webhook-reference#event-webhook).\n',
        example: ['https://example.com/event'],
        'x-nexmo-developer-collection-description-shown': true,
      }),
    from: EndpointPhoneFromSchema,
    length_timer: z
      .int()
      .min(1)
      .max(7200)
      .default(7200)
      .exactOptional()
      .openapi({
        description:
          'Set the number of seconds that elapse before Vonage hangs up after the call state changes to answered.',
      }),
    machine_detection: z
      .enum(['continue', 'hangup'])
      .exactOptional()
      .openapi({
        description:
          'Configure the behavior when Vonage detects that the call is answered by voicemail. If `continue`, Vonage sends an HTTP request to `event_url` with the Call event machine. If `hangup`, Vonage ends the call.',
        example: 'continue',
      }),
    random_from_number: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Set to `true` to use random phone number as `from`. The number will be selected from the list of the numbers assigned to the current application. `random_from_number: true` cannot be used together with `from`.',
      }),
    ringing_timer: z
      .int()
      .min(1)
      .max(120)
      .default(60)
      .exactOptional()
      .openapi({
        description:
          'Set the number of seconds that elapse before Vonage hangs up after the call state changes to ‘ringing’.',
      }),
    to: z.array(
      z.xor([
        EndpointPhoneToSchema,
        EndpointSipSchema,
        EndpointWebsocketSchema,
        EndpointVBCExtensionSchema,
      ]),
    ),
  })
  .openapi({ required: ['to', 'from'] })
  .openapi('CreateCallRequestBase')

const CreateCallRequestAnswerUrlSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (!Object.hasOwn(val, 'answer_url')) {
        ctx.addIssue({ code: 'custom' })
      }
    }
  })
  .openapi({ required: ['answer_url'], title: 'With Answer URL' })
  .and(
    z
      .object({
        answer_method: z
          .enum(['POST', 'GET'])
          .default('GET')
          .exactOptional()
          .openapi({
            description: 'The HTTP method used to send event information to answer_url.',
          }),
        answer_url: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The webhook endpoint where you provide the [Nexmo Call Control Object](/voice/voice-api/ncco-reference) that governs this call.\n',
            example: ['https://example.com/answer'],
            'x-nexmo-developer-collection-description-shown': true,
          }),
      })
      .openapi({ required: [] }),
  )
  .and(CreateCallRequestBaseSchema)
  .openapi('CreateCallRequestAnswerUrl')

const CreateCallRequestNccoSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (!Object.hasOwn(val, 'ncco')) {
        ctx.addIssue({ code: 'custom' })
      }
    }
  })
  .openapi({ required: ['ncco'], title: 'With NCCO' })
  .and(
    z
      .object({
        ncco: z
          .array(z.object({}))
          .exactOptional()
          .openapi({
            description:
              'The [Nexmo Call Control Object](/voice/voice-api/ncco-reference) to use for this call.\n',
            example: [{ action: 'talk', text: 'Hello World' }],
            'x-nexmo-developer-collection-description-shown': true,
          }),
      })
      .openapi({ required: [] }),
  )
  .and(CreateCallRequestBaseSchema)
  .openapi('CreateCallRequestNcco')

const ConversationUuidSchema = z
  .uuid()
  .openapi({
    description: 'The unique identifier for the conversation this call leg is part of.',
    example: 'CON-f972836a-550f-45fa-956c-12a2ab5b7d22',
    title: 'The UUID of the Conversation',
  })
  .openapi('ConversationUuid')

const DirectionSchema = z
  .enum(['outbound', 'inbound'])
  .openapi({ description: 'Possible values are `outbound` or `inbound`', example: 'outbound' })
  .openapi('Direction')

const StatusSchema = z
  .string()
  .openapi({
    description:
      'The status of the call. [See possible values](https://developer.nexmo.com/voice/voice-api/guides/call-flow#event-objects)',
    example: 'completed',
    title: 'The State of the call',
  })
  .openapi('Status')

const UuidSchema = z
  .uuid()
  .openapi({
    description:
      'The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls',
    example: '63f61863-4a51-4f6b-86e1-46edebcf9356',
    title: 'The UUID of the Call Leg',
  })
  .openapi('Uuid')

const CreateCallResponseSchema = z
  .object({
    conversation_uuid: ConversationUuidSchema.exactOptional(),
    direction: DirectionSchema.exactOptional(),
    status: StatusSchema.exactOptional(),
    uuid: UuidSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCallResponse')

const DTMFRequestSchema = z
  .object({
    digits: z
      .string()
      .exactOptional()
      .openapi({ description: 'The digits to send', example: 1713 }),
  })
  .openapi({ required: [] })
  .openapi('DTMFRequest')

const DTMFResponseSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the action taken', example: 'DTMF sent' }),
    uuid: UuidSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DTMFResponse')

const EndpointAppSchema = z
  .object({
    type: z
      .string()
      .openapi({ description: 'The type of connection. Must be `app`', example: 'app' }),
    user: z.string().openapi({ description: 'The username to connect to', example: 'jamie' }),
  })
  .openapi({ description: 'Connect to an App User', required: ['type', 'user'] })
  .openapi('EndpointApp')

const DurationSchema = z
  .string()
  .openapi({
    description:
      'The time elapsed for the call to take place in seconds. This is only sent if `status` is `completed`.',
    example: '60',
    title: 'The Duration of the call ',
  })
  .openapi('Duration')

const EndTimeSchema = z
  .string()
  .openapi({
    description:
      'The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For xample, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`.',
    example: '2020-01-01 12:00:00',
    title: 'The End Time of the call ',
  })
  .openapi('EndTime')

const FromSchema = z
  .object({
    number: z
      .string()
      .exactOptional()
      .openapi({ example: '447700900001', title: 'The number that made the call' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ example: 'phone', title: 'The type of Endpoint that made the call' }),
  })
  .openapi({
    description: 'The endpoint you called from. Possible values are the same as `to`.',
    required: [],
  })
  .openapi('From')

const NetworkSchema = z
  .string()
  .openapi({
    description:
      'The Mobile Country Code Mobile Network Code ([MCCMNC](https://en.wikipedia.org/wiki/Mobile_country_code)) for the carrier network used to make this call. This is only sent if `status` is `completed`.',
    example: '65512',
    title: 'The Network ID of the destination ',
  })
  .openapi('Network')

const PriceSchema = z
  .string()
  .openapi({
    description:
      'The total price charged for this call. This is only sent if `status` is `completed`.',
    example: '23.40',
    title: 'The total price of the call ',
  })
  .openapi('Price')

const RateSchema = z
  .string()
  .openapi({
    description:
      'The price per minute for this call. This is only sent if `status` is `completed`.',
    example: '0.39',
    title: 'The Price per minute of the called destination',
  })
  .openapi('Rate')

const StartTimeSchema = z
  .string()
  .openapi({
    description:
      'The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For example, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`.',
    example: '2020-01-01 12:00:00',
    title: 'The Start Time of the call ',
  })
  .openapi('StartTime')

const ToSchema = z
  .object({
    number: z
      .string()
      .exactOptional()
      .openapi({ example: '447700900000', title: 'The number of the endpoint called' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ example: 'phone', title: 'The Type of Endpoint Called' }),
  })
  .openapi({
    description: 'The single or mixed collection of endpoint types you connected to',
    required: [],
  })
  .openapi('To')

const GetCallResponseSchema = z
  .object({
    _links: z
      .object({
        self: z
          .object({
            href: z
              .string()
              .exactOptional()
              .openapi({
                example: '/calls/63f61863-4a51-4f6b-86e1-46edebcf9356',
                title: 'Link to the Call Object',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    conversation_uuid: ConversationUuidSchema.exactOptional(),
    direction: DirectionSchema.exactOptional(),
    duration: DurationSchema.exactOptional(),
    end_time: EndTimeSchema.exactOptional(),
    from: FromSchema.exactOptional(),
    network: NetworkSchema.exactOptional(),
    price: PriceSchema.exactOptional(),
    rate: RateSchema.exactOptional(),
    start_time: StartTimeSchema.exactOptional(),
    status: StatusSchema.exactOptional(),
    to: ToSchema.exactOptional(),
    uuid: UuidSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCallResponse')

const GetCallsResponseSchema = z
  .object({
    _embedded: z
      .object({ calls: z.array(GetCallResponseSchema).exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'A list of call objects. See the [get details of a specific call](#getCall) response fields for a description of the nested objects',
        required: [],
      }),
    _links: z
      .object({
        self: z
          .object({
            href: z
              .string()
              .exactOptional()
              .openapi({
                example: '/calls?page_size=10&record_index=20&order=asc',
                title: 'Link to the object',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    count: z
      .int()
      .exactOptional()
      .openapi({ example: 100, title: 'The total number of records returned by your request.' }),
    page_size: z
      .int()
      .exactOptional()
      .openapi({ example: 10, title: 'The amount of records returned in this response.' }),
    record_index: z
      .int()
      .exactOptional()
      .openapi({ example: 0, title: 'The `record_index` used in your request.' }),
  })
  .openapi({ required: [] })
  .openapi('GetCallsResponse')

const RequestTransferActionParamSchema = z
  .literal('transfer')
  .openapi({ description: 'Transfer the call to a new NCCO', example: 'transfer' })
  .openapi('RequestTransferActionParam')

const StartStreamRequestSchema = z
  .object({
    level: z
      .string()
      .default('0')
      .exactOptional()
      .openapi({
        description:
          'Set the audio level of the stream in the range `-1 >= level <= 1` with a precision of 0.1. The default value is 0.',
        example: '0.4',
      }),
    loop: z
      .int()
      .default(1)
      .exactOptional()
      .openapi({ description: 'the number of times to play the file, 0 for infinite' }),
    stream_url: z
      .array(z.string())
      .openapi({
        example: ['https://example.com/waiting.mp3'],
        'x-nexmo-developer-collection-description-shown': true,
      }),
  })
  .openapi({ required: ['stream_url'] })
  .openapi('StartStreamRequest')

const StartStreamResponseSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the action taken', example: 'Stream started' }),
    uuid: UuidSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartStreamResponse')

const LanguageSchema = z
  .enum([
    'ar',
    'ca-ES',
    'cmn-CN',
    'cmn-TW',
    'cs-CZ',
    'cy-GB',
    'da-DK',
    'de-DE',
    'el-GR',
    'en-AU',
    'en-GB',
    'en-GB-WLS',
    'en-IN',
    'en-US',
    'en-ZA',
    'es-ES',
    'es-MX',
    'es-US',
    'eu-ES',
    'fi-FI',
    'fil-PH',
    'fr-CA',
    'fr-FR',
    'he-IL',
    'hi-IN',
    'hu-HU',
    'id-ID',
    'is-IS',
    'it-IT',
    'ja-JP',
    'ko-KR',
    'nb-NO',
    'nl-NL',
    'no-NO',
    'pl-PL',
    'pt-BR',
    'pt-PT',
    'ro-RO',
    'ru-RU',
    'sk-SK',
    'sv-SE',
    'th-TH',
    'tr-TR',
    'uk-UA',
    'vi-VN',
    'yue-CN',
  ])
  .default('en-US')
  .openapi({ description: 'The language to use' })
  .openapi('Language')

const StyleSchema = z
  .int()
  .default(0)
  .openapi({ description: 'The vocal style (vocal range, tessitura, and timbre) to use' })
  .openapi('Style')

const VoiceNameSchema = z
  .enum([
    'Aditi',
    'Agnieszka',
    'Alva',
    'Amy',
    'Astrid',
    'Bianca',
    'Brian',
    'Carla',
    'Carmen',
    'Carmit',
    'Catarina',
    'Celine',
    'Cem',
    'Chantal',
    'Chipmunk',
    'Conchita',
    'Cristiano',
    'Damayanti',
    'Dora',
    'Emma',
    'Empar',
    'Enrique',
    'Eric',
    'Ewa',
    'Felipe',
    'Filiz',
    'Geraint',
    'Giorgio',
    'Gwyneth',
    'Hans',
    'Henrik',
    'Ines',
    'Ioana',
    'Iveta',
    'Ivy',
    'Jacek',
    'Jan',
    'Jennifer',
    'Joana',
    'Joanna',
    'Joey',
    'Jordi',
    'Justin',
    'Kanya',
    'Karl',
    'Kendra',
    'Kimberly',
    'Laila',
    'Laura',
    'Lea',
    'Lekha',
    'Liv',
    'Lotte',
    'Lucia',
    'Luciana',
    'Mads',
    'Maged',
    'Maja',
    'Mariska',
    'Marlene',
    'Mathieu',
    'Matthew',
    'Maxim',
    'Mei-Jia',
    'Melina',
    'Mia',
    'Miguel',
    'Miren',
    'Mizuki',
    'Montserrat',
    'Naja',
    'Nicole',
    'Nikos',
    'Nora',
    'Oskar',
    'Penelope',
    'Raveena',
    'Ricardo',
    'Ruben',
    'Russell',
    'Salli',
    'Satu',
    'Seoyeon',
    'Sin-Ji',
    'Sora',
    'Takumi',
    'Tarik',
    'Tatyana',
    'Tessa',
    'Tian-Tian',
    'Vicki',
    'Vitoria',
    'Yelda',
    'Zeina',
    'Zhiyu',
    'Zuzana',
  ])
  .default('Kimberly')
  .openapi({
    deprecated: true,
    description: '<strong>DEPRECATED</strong> The voice & language to use',
  })
  .openapi('VoiceName')

const StartTalkRequestSchema = z
  .object({
    language: LanguageSchema.exactOptional(),
    level: z
      .string()
      .default('0')
      .exactOptional()
      .openapi({
        description:
          'The volume level that the speech is played. This can be any value between `-1` to `1` in `0.1` increments, with `0` being the default.',
        example: '0.4',
      }),
    loop: z
      .int()
      .default(1)
      .exactOptional()
      .openapi({ description: 'The number of times to repeat the text the file, 0 for infinite' }),
    premium: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Set to true to use the premium version of the specified style if available, otherwise the standard version will be used. The default value is false. You can find more information about Premium Voices in the [Text-To-Speech guide](/voice/voice-api/guides/text-to-speech#premium-voices).',
      }),
    style: StyleSchema.exactOptional(),
    text: z
      .string()
      .openapi({ description: 'The text to read', example: 'Hello. How are you today?' }),
    voice_name: VoiceNameSchema.exactOptional(),
  })
  .openapi({ required: ['text'] })
  .openapi('StartTalkRequest')

const StartTalkResponseSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the action taken', example: 'Talk started' }),
    uuid: UuidSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartTalkResponse')

const StopStreamResponseSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the action taken', example: 'Stream stopped' }),
    uuid: UuidSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopStreamResponse')

const StopTalkResponseSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the action taken', example: 'Talk stopped' }),
    uuid: UuidSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopTalkResponse')

const UpdateCallRequestEarmuffSchema = z
  .object({
    action: z
      .literal('earmuff')
      .exactOptional()
      .openapi({
        description: 'Prevent the specified UUID from hearing audio',
        example: 'earmuff',
      }),
  })
  .openapi({ title: 'Earmuff', required: [] })
  .openapi('UpdateCallRequestEarmuff')

const UpdateCallRequestHangupSchema = z
  .object({
    action: z
      .literal('hangup')
      .exactOptional()
      .openapi({ description: 'End the call for the specified UUID', example: 'hangup' }),
  })
  .openapi({ title: 'Hangup', required: [] })
  .openapi('UpdateCallRequestHangup')

const UpdateCallRequestMuteSchema = z
  .object({
    action: z
      .literal('mute')
      .exactOptional()
      .openapi({ description: 'Mute the specified UUID', example: 'mute' }),
  })
  .openapi({ title: 'Mute', required: [] })
  .openapi('UpdateCallRequestMute')

const UpdateCallRequestTransferAnswerUrlSchema = z
  .object({
    action: RequestTransferActionParamSchema,
    destination: z
      .object({
        type: z
          .string()
          .openapi({
            description: 'Always `ncco`',
            example: 'ncco',
            'x-nexmo-developer-collection-description-shown': true,
          }),
        url: z
          .array(z.string())
          .openapi({
            description: 'The URL that Vonage makes a request to. Must return an NCCO.',
            example: ['https://example.com/ncco.json'],
            'x-nexmo-developer-collection-description-shown': true,
          }),
      })
      .openapi({ required: ['type', 'url'] }),
  })
  .openapi({ required: ['action', 'destination'], title: 'Transfer with Answer URL' })
  .openapi('UpdateCallRequestTransferAnswerUrl')

const UpdateCallRequestTransferNccoSchema = z
  .object({
    action: RequestTransferActionParamSchema,
    destination: z
      .object({
        ncco: z
          .array(z.object({}))
          .openapi({
            description:
              'Refer to the [NCCO Guide](https://developer.nexmo.com/voice/voice-api/ncco-reference) for a description of possible NCCO parameters.',
            example: [{ action: 'talk', text: 'Hello World' }],
            'x-nexmo-developer-collection-description-shown': true,
          }),
        type: z
          .string()
          .openapi({
            description: 'Always `ncco`',
            example: 'ncco',
            'x-nexmo-developer-collection-description-shown': true,
          }),
      })
      .openapi({ required: ['type', 'ncco'] }),
  })
  .openapi({ required: ['action', 'destination'], title: 'Transfer with NCCO' })
  .openapi('UpdateCallRequestTransferNcco')

const UpdateCallRequestUnearmuffSchema = z
  .object({
    action: z
      .literal('unearmuff')
      .exactOptional()
      .openapi({ description: 'Allow the specified UUID to hear audio', example: 'unearmuff' }),
  })
  .openapi({ title: 'Unearmuff', required: [] })
  .openapi('UpdateCallRequestUnearmuff')

const UpdateCallRequestUnmuteSchema = z
  .object({
    action: z
      .literal('mute')
      .exactOptional()
      .openapi({ description: 'Unmute the specified UUID', example: 'unmute' }),
  })
  .openapi({ title: 'Unmute', required: [] })
  .openapi('UpdateCallRequestUnmute')

const BearerAuthSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Calls'],
  summary: 'Get details of your calls',
  description: 'Get details of your calls',
  operationId: 'getCalls',
  request: {
    query: z.object({
      status: z
        .enum([
          'started',
          'ringing',
          'answered',
          'machine',
          'completed',
          'busy',
          'cancelled',
          'failed',
          'rejected',
          'timeout',
          'unanswered',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by call status',
            in: 'query',
            name: 'status',
            schema: {
              enum: [
                'started',
                'ringing',
                'answered',
                'machine',
                'completed',
                'busy',
                'cancelled',
                'failed',
                'rejected',
                'timeout',
                'unanswered',
              ],
              example: 'started',
              type: 'string',
            },
            required: false,
          },
          example: 'started',
        }),
      date_start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the records that occurred after this point in time',
            in: 'query',
            name: 'date_start',
            schema: { example: '2016-11-14T07:45:14Z', format: 'date-time', type: 'string' },
            required: false,
          },
          example: '2016-11-14T07:45:14Z',
        }),
      date_end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the records that occurred before this point in time',
            in: 'query',
            name: 'date_end',
            schema: { example: '2016-11-14T07:45:14Z', format: 'date-time', type: 'string' },
            required: false,
          },
          example: '2016-11-14T07:45:14Z',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Return this amount of records in the response',
            in: 'query',
            name: 'page_size',
            schema: { default: 10, maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      record_index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Return calls from this index in the response',
            in: 'query',
            name: 'record_index',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Either ascending or  descending order.',
            in: 'query',
            name: 'order',
            schema: { default: 'asc', enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
      conversation_uuid: ConversationUuidSchema.openapi({
        param: {
          description: 'Return all the records associated with a specific conversation.',
          in: 'query',
          name: 'conversation_uuid',
          schema: { $ref: '#/components/schemas/conversation_uuid' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: GetCallsResponseSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  tags: ['Calls'],
  summary: 'Create an outbound call',
  description: 'Create an outbound Call',
  operationId: 'createCall',
  request: {
    body: {
      description: 'Call Details',
      content: {
        'application/json': {
          schema: z.xor([CreateCallRequestNccoSchema, CreateCallRequestAnswerUrlSchema]),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: CreateCallResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getUuidRoute = createRoute({
  method: 'get',
  path: '/{uuid}',
  tags: ['Calls'],
  summary: 'Get detail of a specific call',
  description: 'Get detail of a specific call',
  operationId: 'getCall',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: {
            description: 'UUID of the Call',
            example: '63f61863-4a51-4f6b-86e1-46edebcf9356',
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Ok', content: { 'application/json': { schema: GetCallResponseSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const putUuidRoute = createRoute({
  method: 'put',
  path: '/{uuid}',
  tags: ['Calls'],
  summary: 'Modify an in progress call',
  description: 'Modify an in progress call',
  operationId: 'updateCall',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: {
            description: 'UUID of the Call',
            example: '63f61863-4a51-4f6b-86e1-46edebcf9356',
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            UpdateCallRequestTransferNccoSchema,
            UpdateCallRequestTransferAnswerUrlSchema,
            UpdateCallRequestHangupSchema,
            UpdateCallRequestMuteSchema,
            UpdateCallRequestUnmuteSchema,
            UpdateCallRequestEarmuffSchema,
            UpdateCallRequestUnearmuffSchema,
          ]),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
  },
  security: [{ bearerAuth: [] }],
})

export const putUuidDtmfRoute = createRoute({
  method: 'put',
  path: '/{uuid}/dtmf',
  tags: ['Play DTMF'],
  summary: 'Play DTMF tones into a call',
  description: 'Play DTMF tones into a call',
  operationId: 'startDTMF',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: {
            description: 'UUID of the Call Leg',
            example: '63f61863-4a51-4f6b-86e1-46edebcf9356',
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'action to perform',
      content: { 'application/json': { schema: DTMFRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Ok', content: { 'application/json': { schema: DTMFResponseSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const putUuidStreamRoute = createRoute({
  method: 'put',
  path: '/{uuid}/stream',
  tags: ['Stream Audio'],
  summary: 'Play an audio file into a call',
  description: 'Play an audio file into a call',
  operationId: 'startStream',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: {
            description: 'UUID of the Call Leg',
            example: '63f61863-4a51-4f6b-86e1-46edebcf9356',
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'action to perform',
      content: { 'application/json': { schema: StartStreamRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: StartStreamResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteUuidStreamRoute = createRoute({
  method: 'delete',
  path: '/{uuid}/stream',
  tags: ['Stream Audio'],
  summary: 'Stop playing an audio file into a call',
  description: 'Stop playing an audio file into a call',
  operationId: 'stopStream',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: {
            description: 'UUID of the Call Leg',
            example: '63f61863-4a51-4f6b-86e1-46edebcf9356',
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: StopStreamResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const putUuidTalkRoute = createRoute({
  method: 'put',
  path: '/{uuid}/talk',
  tags: ['Play TTS'],
  summary: 'Play text to speech into a call',
  description: 'Play text to speech into a call',
  operationId: 'startTalk',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: {
            description: 'UUID of the Call Leg',
            example: '63f61863-4a51-4f6b-86e1-46edebcf9356',
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Action to perform',
      content: { 'application/json': { schema: StartTalkRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: StartTalkResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteUuidTalkRoute = createRoute({
  method: 'delete',
  path: '/{uuid}/talk',
  tags: ['Play TTS'],
  summary: 'Stop text to speech in a call',
  description: 'Stop text to speech in a call',
  operationId: 'stopTalk',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: {
            description: 'UUID of the Call Leg',
            example: '63f61863-4a51-4f6b-86e1-46edebcf9356',
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Ok', content: { 'application/json': { schema: StopTalkResponseSchema } } },
  },
  security: [{ bearerAuth: [] }],
})
