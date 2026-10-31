import { createRoute, z } from '@hono/zod-openapi'

const AccountIdSchema = z
  .string()
  .openapi({
    description:
      'The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.',
    example: 'abcdef01',
  })
  .openapi('AccountId')

const CallbackUrlSchema = z
  .url()
  .openapi({
    description:
      'URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).',
    example: 'https://requestb.in/12345',
  })
  .openapi('CallbackUrl')

const DateEndSchema = z.iso
  .date()
  .openapi({
    description:
      'ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.\n',
    example: '2018-01-01T00:00:00+00:00',
  })
  .openapi('DateEnd')

const DateStartSchema = z.iso
  .date()
  .openapi({
    description:
      'ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.\n',
    example: '2017-12-01T00:00:00+00:00',
  })
  .openapi('DateStart')

const IncludeSubaccountsSchema = z
  .union([z.literal(true), z.literal(false)])
  .default(false)
  .openapi({ description: 'Whether to include subaccounts or not.', example: 'false' })
  .openapi('IncludeSubaccounts')

const ProductSchema = z
  .enum([
    'SMS',
    'VOICE-CALL',
    'IN-APP-VOICE',
    'WEBSOCKET-CALL',
    'VERIFY-API',
    'NUMBER-INSIGHT',
    'MESSAGES',
    'CONVERSATIONS',
    'ASR',
  ])
  .openapi({ description: 'Which product you wish to generate a report for.', example: 'SMS' })
  .openapi('Product')

const ReportRequestSchema = z
  .object({
    account_id: AccountIdSchema,
    callback_url: CallbackUrlSchema.exactOptional(),
    date_end: DateEndSchema.exactOptional(),
    date_start: DateStartSchema.exactOptional(),
    include_subaccounts: IncludeSubaccountsSchema.exactOptional(),
    product: ProductSchema,
  })
  .openapi({ discriminator: { propertyName: 'product' }, required: ['product', 'account_id'] })
  .openapi('ReportRequest')

const DirectionSchema = z
  .enum(['inbound', 'outbound'])
  .openapi({
    description:
      'Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.',
    example: 'outbound',
  })
  .openapi('Direction')

const FromSchema = z
  .string()
  .openapi({ description: 'Request from this number.', example: '441234567890' })
  .openapi('From')

const ProductAsrSchema = z
  .enum([
    'SMS',
    'VOICE-CALL',
    'IN-APP-VOICE',
    'WEBSOCKET-CALL',
    'VERIFY-API',
    'NUMBER-INSIGHT',
    'MESSAGES',
    'CONVERSATIONS',
    'ASR',
  ])
  .openapi({ description: 'Which product you wish to generate a report for.', example: 'ASR' })
  .openapi('ProductAsr')

const AsrStatusSchema = z
  .enum(['ok', 'error'])
  .openapi({ description: 'Search only for ASR with corresponding status.', example: 'ok' })
  .openapi('AsrStatus')

const ToSchema = z
  .string()
  .openapi({ description: 'Request to this number.', example: '441234567890' })
  .openapi('To')

const AsrFieldsSchema = z
  .object({
    direction: DirectionSchema.exactOptional(),
    from: FromSchema.exactOptional(),
    product: ProductAsrSchema.exactOptional(),
    status: AsrStatusSchema.exactOptional(),
    to: ToSchema.exactOptional(),
  })
  .openapi({ description: 'ASR', 'x-tab-id': 'asr', required: [] })
  .openapi('AsrFields')

const ASRSchema = ReportRequestSchema.and(AsrFieldsSchema)
  .openapi({ description: 'ASR', 'x-tab-id': 'asr' })
  .openapi('ASR')

const ConversationIdSchema = z
  .string()
  .openapi({
    description:
      'Search only for events sent to this particular Conversation. This should include the "CON-" prefix.',
    example: 'CON-abc123',
  })
  .openapi('ConversationId')

const ProductConversationsSchema = z
  .enum([
    'SMS',
    'VOICE-CALL',
    'IN-APP-VOICE',
    'WEBSOCKET-CALL',
    'VERIFY-API',
    'NUMBER-INSIGHT',
    'MESSAGES',
    'CONVERSATIONS',
    'ASR',
  ])
  .openapi({
    description: 'Which product you wish to generate a report for.',
    example: 'CONVERSATIONS',
  })
  .openapi('ProductConversations')

const StatusSchema = z
  .string()
  .openapi({
    description: 'Search only for conversation events with the specified event status.',
    example: '0',
  })
  .openapi('Status')

const ConversationsFieldsSchema = z
  .object({
    conversation_id: ConversationIdSchema.exactOptional(),
    product: ProductConversationsSchema.exactOptional(),
    status: StatusSchema.exactOptional(),
  })
  .openapi({ description: 'Conversations', 'x-tab-id': 'conversations', required: [] })
  .openapi('ConversationsFields')

const CONVERSATIONSSchema = ReportRequestSchema.and(ConversationsFieldsSchema)
  .openapi({ description: 'Conversations', 'x-tab-id': 'conversations' })
  .openapi('CONVERSATIONS')

const CallConversationIdSchema = z
  .string()
  .openapi({
    description:
      'Search only for In App Voive calls attached to this particular Conversation. This should include the "CON-" prefix.',
    example: 'CON-abc123',
  })
  .openapi('CallConversationId')

const ProductInAppVoiceSchema = z
  .enum([
    'SMS',
    'VOICE-CALL',
    'IN-APP-VOICE',
    'WEBSOCKET-CALL',
    'VERIFY-API',
    'NUMBER-INSIGHT',
    'MESSAGES',
    'CONVERSATIONS',
    'ASR',
  ])
  .openapi({
    description: 'Which product you wish to generate a report for.',
    example: 'IN-APP-VOICE',
  })
  .openapi('ProductInAppVoice')

const InAppVoiceFieldsSchema = z
  .object({
    conversation_id: CallConversationIdSchema.exactOptional(),
    product: ProductInAppVoiceSchema.exactOptional(),
  })
  .openapi({ description: 'In App Voice', 'x-tab-id': 'in-app-voice', required: [] })
  .openapi('InAppVoiceFields')

const INAPPVOICESchema = ReportRequestSchema.and(InAppVoiceFieldsSchema)
  .openapi({ description: 'In App Voice', 'x-tab-id': 'in-app-voice' })
  .openapi('INAPPVOICE')

const IdSchema = z
  .string()
  .openapi({
    description: 'Search only messages with the specified uuid.',
    example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
  })
  .openapi('Id')

const IncludeMessageSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Include the text of messages in the report.', example: 'true' })
  .openapi('IncludeMessage')

const ProductMessagesSchema = z
  .enum([
    'SMS',
    'VOICE-CALL',
    'IN-APP-VOICE',
    'VERIFY-API',
    'NUMBER-INSIGHT',
    'MESSAGES',
    'CONVERSATIONS',
    'ASR',
  ])
  .openapi({ description: 'Which product you wish to generate a report for.', example: 'MESSAGES' })
  .openapi('ProductMessages')

const MessagesFieldsSchema = z
  .object({
    direction: DirectionSchema,
    from: FromSchema.exactOptional(),
    id: IdSchema.exactOptional(),
    include_message: IncludeMessageSchema.exactOptional(),
    product: ProductMessagesSchema,
    to: ToSchema.exactOptional(),
  })
  .openapi({
    description: 'Messages',
    required: ['product', 'account_id', 'direction'],
    'x-tab-id': 'messages',
  })
  .openapi('MessagesFields')

const MESSAGESSchema = ReportRequestSchema.and(MessagesFieldsSchema)
  .openapi({ description: 'Messages', 'x-tab-id': 'messages' })
  .openapi('MESSAGES')

const NetworkSchema = z
  .string()
  .openapi({ description: 'Network used to send the request.', example: '23415' })
  .openapi('Network')

const NumberSchema = z
  .string()
  .openapi({ description: 'Search only request for the target number.', example: '441234567890' })
  .openapi('Number')

const ProductNiSchema = z
  .enum([
    'SMS',
    'VOICE-CALL',
    'IN-APP-VOICE',
    'WEBSOCKET-CALL',
    'VERIFY-API',
    'NUMBER-INSIGHT',
    'MESSAGES',
    'CONVERSATIONS',
    'ASR',
  ])
  .openapi({
    description: 'Which product you wish to generate a report for.',
    example: 'NUMBER-INSIGHT',
  })
  .openapi('ProductNi')

const NumberInsightFieldsSchema = z
  .object({
    network: NetworkSchema.exactOptional(),
    number: NumberSchema.exactOptional(),
    product: ProductNiSchema.exactOptional(),
  })
  .openapi({ description: 'Number Insight', 'x-tab-id': 'number-insight', required: [] })
  .openapi('NumberInsightFields')

const NUMBERINSIGHTSchema = ReportRequestSchema.and(NumberInsightFieldsSchema)
  .openapi({ description: 'Number Insight', 'x-tab-id': 'number-insight' })
  .openapi('NUMBERINSIGHT')

const AccountRefSchema = z
  .string()
  .length(40)
  .openapi({ description: 'Search for messages with this `account_ref`.' })
  .openapi('AccountRef')

const ClientRefSchema = z
  .string()
  .length(40)
  .openapi({ description: 'Search for messages with this `client_ref`.' })
  .openapi('ClientRef')

const ProductSmsSchema = z
  .enum([
    'SMS',
    'VOICE-CALL',
    'IN-APP-VOICE',
    'WEBSOCKET-CALL',
    'VERIFY-API',
    'NUMBER-INSIGHT',
    'MESSAGES',
    'CONVERSATIONS',
    'ASR',
  ])
  .openapi({ description: 'Which product you wish to generate a report for.', example: 'SMS' })
  .openapi('ProductSms')

const ShowConcatenatedSchema = z
  .boolean()
  .default(false)
  .openapi({
    description: 'Indicates whether the SMS was split up into multiple parts (due to its length).',
    example: 'false',
  })
  .openapi('ShowConcatenated')

const SmsStatusSchema = z
  .enum(['delivered', 'expired', 'failed', 'rejected', 'accepted', 'buffered', 'unknown'])
  .openapi({
    description: 'Search only for sms with the corresponding status.',
    example: 'delivered',
  })
  .openapi('SmsStatus')

const SmsFieldsSchema = z
  .object({
    account_ref: AccountRefSchema.exactOptional(),
    client_ref: ClientRefSchema.exactOptional(),
    direction: DirectionSchema,
    from: FromSchema.exactOptional(),
    include_message: IncludeMessageSchema.exactOptional(),
    network: NetworkSchema.exactOptional(),
    product: ProductSmsSchema,
    show_concatenated: ShowConcatenatedSchema.exactOptional(),
    status: SmsStatusSchema.exactOptional(),
    to: ToSchema.exactOptional(),
  })
  .openapi({
    description: 'SMS',
    required: ['product', 'account_id', 'direction'],
    'x-tab-id': 'SMS',
  })
  .openapi('SmsFields')

const SMSSchema = ReportRequestSchema.and(SmsFieldsSchema)
  .openapi({ description: 'SMS', 'x-tab-id': 'SMS' })
  .openapi('SMS')

const ProductVerifySchema = z
  .enum([
    'SMS',
    'VOICE-CALL',
    'IN-APP-VOICE',
    'WEBSOCKET-CALL',
    'VERIFY-API',
    'NUMBER-INSIGHT',
    'MESSAGES',
    'CONVERSATIONS',
    'ASR',
  ])
  .openapi({
    description: 'Which product you wish to generate a report for.',
    example: 'VERIFY-API',
  })
  .openapi('ProductVerify')

const VerifyApiFieldsSchema = z
  .object({
    network: NetworkSchema.exactOptional(),
    product: ProductVerifySchema.exactOptional(),
    to: ToSchema.exactOptional(),
  })
  .openapi({ description: 'Verify', 'x-tab-id': 'verify', required: [] })
  .openapi('VerifyApiFields')

const VERIFYAPISchema = ReportRequestSchema.and(VerifyApiFieldsSchema)
  .openapi({ description: 'Verify', 'x-tab-id': 'verify' })
  .openapi('VERIFYAPI')

const ProductVoiceSchema = z
  .enum([
    'SMS',
    'VOICE-CALL',
    'IN-APP-VOICE',
    'WEBSOCKET-CALL',
    'VERIFY-API',
    'NUMBER-INSIGHT',
    'MESSAGES',
    'CONVERSATIONS',
    'ASR',
  ])
  .openapi({
    description: 'Which product you wish to generate a report for.',
    example: 'VOICE-CALL',
  })
  .openapi('ProductVoice')

const VoiceStatusSchema = z
  .enum(['answered', 'machine', 'error', 'failed'])
  .openapi({
    description: 'Search only for voice call with the corresponding status.',
    example: 'started',
  })
  .openapi('VoiceStatus')

const VoiceCallFieldsSchema = z
  .object({
    direction: DirectionSchema.exactOptional(),
    from: FromSchema.exactOptional(),
    network: NetworkSchema.exactOptional(),
    product: ProductVoiceSchema.exactOptional(),
    status: VoiceStatusSchema.exactOptional(),
    to: ToSchema.exactOptional(),
  })
  .openapi({ description: 'Voice Call', 'x-tab-id': 'voice-call', required: [] })
  .openapi('VoiceCallFields')

const VOICECALLSchema = ReportRequestSchema.and(VoiceCallFieldsSchema)
  .openapi({ description: 'Voice Call', 'x-tab-id': 'voice-call' })
  .openapi('VOICECALL')

const ProductWebsocketSchema = z
  .enum([
    'SMS',
    'VOICE-CALL',
    'IN-APP-VOICE',
    'WEBSOCKET-CALL',
    'VERIFY-API',
    'NUMBER-INSIGHT',
    'MESSAGES',
    'CONVERSATIONS',
    'ASR',
  ])
  .openapi({
    description: 'Which product you wish to generate a report for.',
    example: 'WEBSOCKET-CALL',
  })
  .openapi('ProductWebsocket')

const WebsocketStatusSchema = z
  .string()
  .openapi({
    description: 'Search only for WebSocket call with corresponding status.',
    example: 200,
  })
  .openapi('WebsocketStatus')

const WebsocketCallFieldsSchema = z
  .object({
    product: ProductWebsocketSchema.exactOptional(),
    status: WebsocketStatusSchema.exactOptional(),
  })
  .openapi({ description: 'WebSocket Call', 'x-tab-id': 'websocket-call', required: [] })
  .openapi('WebsocketCallFields')

const WEBSOCKETCALLSchema = ReportRequestSchema.and(WebsocketCallFieldsSchema)
  .openapi({ description: 'WebSocket Call', 'x-tab-id': 'websocket-call' })
  .openapi('WEBSOCKETCALL')

const LinksSchema = z
  .object({
    download_report: z
      .object({
        href: z
          .url()
          .exactOptional()
          .openapi({
            description: 'URL pointing to the generated report.',
            example: 'https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    self: z
      .object({
        href: z
          .url()
          .exactOptional()
          .openapi({
            description: 'URI of this document.',
            example: 'https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Links')

const LinksCreateReportSchema = z
  .object({
    self: z
      .object({
        href: z
          .url()
          .exactOptional()
          .openapi({
            description: 'URI of this document.',
            example: 'https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('LinksCreateReport')

const ApplicationIdSchema = z
  .string()
  .openapi({ description: 'Search only for requests attached to a particular Application ID.' })
  .openapi('ApplicationId')

const ReceiveTimeSchema = z.iso
  .date()
  .openapi({
    description: 'Time at which the report request was received by the service.',
    example: '2019-06-28T15:30:00+0000',
  })
  .openapi('ReceiveTime')

const RequestIdSchema = z
  .string()
  .openapi({ description: 'UUID of the request.', example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' })
  .openapi('RequestId')

const RequestStatusCreateReportSchema = z
  .enum(['PENDING', 'PROCESSING', 'SUCCESS', 'ABORTED', 'FAILED', 'TRUNCATED'])
  .openapi({ description: 'Status of the request.', example: 'PENDING' })
  .openapi('RequestStatusCreateReport')

const StartTimeSchema = z.iso
  .date()
  .openapi({
    description: 'Time at which the report processing of the report has started.',
    example: '2019-06-28T15:30:00+0000',
  })
  .openapi('StartTime')

const ReportResponseCreateReportSchema = z
  .object({
    _links: LinksCreateReportSchema.exactOptional(),
    account_id: AccountIdSchema.exactOptional(),
    callback_url: CallbackUrlSchema.exactOptional(),
    date_end: DateEndSchema.exactOptional(),
    date_start: DateStartSchema.exactOptional(),
    include_subaccounts: IncludeSubaccountsSchema.exactOptional(),
    product: ProductSchema.exactOptional(),
    receive_time: ReceiveTimeSchema.exactOptional(),
    request_id: RequestIdSchema.exactOptional(),
    request_status: RequestStatusCreateReportSchema.exactOptional(),
    start_time: StartTimeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportResponseCreateReport')

const AsrResponseCreateReportSchema = ReportResponseCreateReportSchema.and(AsrFieldsSchema)
  .openapi({ description: 'ASR', 'x-tab-id': 'asr' })
  .openapi('AsrResponseCreateReport')

const ItemsCountSchema = z
  .int()
  .openapi({
    description: 'The number of rows in the resulting file (when report has been completed).',
  })
  .openapi('ItemsCount')

const RequestStatusSchema = z
  .enum(['PENDING', 'PROCESSING', 'SUCCESS', 'ABORTED', 'FAILED', 'TRUNCATED'])
  .openapi({ description: 'Status of the request.', example: 'SUCCESS' })
  .openapi('RequestStatus')

const ReportResponseSchema = z
  .object({
    _links: LinksSchema.exactOptional(),
    account_id: AccountIdSchema.exactOptional(),
    callback_url: CallbackUrlSchema.exactOptional(),
    date_end: DateEndSchema.exactOptional(),
    date_start: DateStartSchema.exactOptional(),
    include_subaccounts: IncludeSubaccountsSchema.exactOptional(),
    items_count: ItemsCountSchema.exactOptional(),
    product: ProductSchema.exactOptional(),
    receive_time: ReceiveTimeSchema.exactOptional(),
    request_id: RequestIdSchema.exactOptional(),
    request_status: RequestStatusSchema.exactOptional(),
    start_time: StartTimeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportResponse')

const AsrResponseGetReportSchema = ReportResponseSchema.and(AsrFieldsSchema)
  .openapi({ description: 'ASR', 'x-tab-id': 'asr' })
  .openapi('AsrResponseGetReport')

const AsrStatusDescriptionSchema = z
  .string()
  .openapi({ description: 'ASR error message.', example: '' })
  .openapi('AsrStatusDescription')

const CallEndDateSchema = z.iso
  .date()
  .openapi({ description: 'Date of the end of the call.', example: '2019-06-28T15:30:00+0000' })
  .openapi('CallEndDate')

const CallStartDateSchema = z.iso
  .date()
  .openapi({ description: 'Date of the start of the call.', example: '2019-06-28T15:30:00+0000' })
  .openapi('CallStartDate')

const CdrIdSchema = z
  .string()
  .openapi({
    description: 'Id of the related CDR.',
    example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
  })
  .openapi('CdrId')

const ConcatenatedSchema = z
  .boolean()
  .default(false)
  .openapi({
    description: 'Whether the SMS was split up into multiple parts (due to its length).',
    example: 'true',
  })
  .openapi('Concatenated')

const ConversationUserIdSchema = z
  .string()
  .openapi({
    description: 'User id in the conversation.',
    example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
  })
  .openapi('ConversationUserId')

const ConversationsResponseCreateReportSchema = ReportResponseCreateReportSchema.and(
  ConversationsFieldsSchema,
)
  .openapi({ description: 'Conversations', 'x-tab-id': 'conversations' })
  .openapi('ConversationsResponseCreateReport')

const ConversationsResponseGetReportSchema = ReportResponseSchema.and(ConversationsFieldsSchema)
  .openapi({ description: 'Conversations', 'x-tab-id': 'conversations' })
  .openapi('ConversationsResponseGetReport')

const CountrySchema = z
  .string()
  .openapi({ description: 'Country where the request was sent.', example: 'FR' })
  .openapi('Country')

const CountryNameSchema = z
  .string()
  .openapi({ description: 'Country name where the request was sent.', example: 'France' })
  .openapi('CountryName')

const CreationDateSchema = z.iso
  .date()
  .openapi({ description: 'Date the event was created.', example: '2021-11-18T18:49:16+00:00' })
  .openapi('CreationDate')

const CurrencySchema = z
  .string()
  .openapi({ description: 'Currency of the price of the request.', example: 'EUR' })
  .openapi('Currency')

const DurationSchema = z
  .int()
  .openapi({ description: 'Duration of the call in seconds.', example: '42' })
  .openapi('Duration')

const PriceSchema = z
  .number()
  .openapi({ description: 'Price of the request.', example: '0.042' })
  .openapi('Price')

const TotalPriceSchema = z
  .number()
  .openapi({ description: 'Total price of the request.', example: '0.042' })
  .openapi('TotalPrice')

const CsvAsrSchema = z
  .object({
    account_id: AccountIdSchema.exactOptional(),
    call_date_start: CallStartDateSchema.exactOptional(),
    call_id: RequestIdSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    date_end: CallEndDateSchema.exactOptional(),
    date_start: CallStartDateSchema.exactOptional(),
    direction: DirectionSchema.exactOptional(),
    duration: DurationSchema.exactOptional(),
    from: FromSchema.exactOptional(),
    price: PriceSchema.exactOptional(),
    status: AsrStatusSchema.exactOptional(),
    status_description: AsrStatusDescriptionSchema.exactOptional(),
    to: ToSchema.exactOptional(),
    total_price: TotalPriceSchema.exactOptional(),
  })
  .openapi({ description: 'ASR', 'x-tab-id': 'asr', required: [] })
  .openapi('CsvAsr')

const CsvConversationsSchema = z
  .object({
    account_id: AccountIdSchema.exactOptional(),
    application_id: ApplicationIdSchema.exactOptional(),
    client_ref: ClientRefSchema.exactOptional(),
    conversation_id: ConversationIdSchema.exactOptional(),
    creation_date: CreationDateSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    id: CdrIdSchema.exactOptional(),
    price: PriceSchema.exactOptional(),
    request_id: RequestIdSchema.exactOptional(),
    total_price: TotalPriceSchema.exactOptional(),
    user_id: ConversationUserIdSchema.exactOptional(),
  })
  .openapi({ description: 'Conversations', 'x-tab-id': 'conversastions', required: [] })
  .openapi('CsvConversations')

const IpVoiceLegIdSchema = z
  .string()
  .openapi({ description: 'Id of the call leg.', example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' })
  .openapi('IpVoiceLegId')

const IpVoiceStatusSchema = z
  .string()
  .openapi({ description: 'Status of the termination of the In-App call.', example: '200' })
  .openapi('IpVoiceStatus')

const CsvInAppVoiceSchema = z
  .object({
    account_id: AccountIdSchema.exactOptional(),
    application_id: ApplicationIdSchema.exactOptional(),
    client_ref: ClientRefSchema.exactOptional(),
    conversation_id: ConversationIdSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    date_end: CallEndDateSchema.exactOptional(),
    date_start: CallStartDateSchema.exactOptional(),
    duration: DurationSchema.exactOptional(),
    id: CdrIdSchema.exactOptional(),
    leg_id: IpVoiceLegIdSchema.exactOptional(),
    price: PriceSchema.exactOptional(),
    request_id: RequestIdSchema.exactOptional(),
    status: IpVoiceStatusSchema.exactOptional(),
    total_price: TotalPriceSchema.exactOptional(),
    user_id: ConversationUserIdSchema.exactOptional(),
  })
  .openapi({ description: 'In App Voice', 'x-tab-id': 'in-app-voice', required: [] })
  .openapi('CsvInAppVoice')

const DateSchema = z.iso
  .date()
  .openapi({ description: 'Date of the request.', example: '2019-06-28T15:30:00+0000' })
  .openapi('Date')

const MessageBodySchema = z
  .string()
  .openapi({
    description:
      'Body of the message sent. Only present if include_message parameter is set to true.',
    example: 'This is a text message',
  })
  .openapi('MessageBody')

const MessageIdSchema = z
  .string()
  .openapi({ description: 'Id of the request.', example: '0000000A' })
  .openapi('MessageId')

const MessagesProviderSchema = z
  .string()
  .openapi({ description: 'Provider of the message.', example: 'whatsapp' })
  .openapi('MessagesProvider')

const CsvMessagesInboundSchema = z
  .object({
    account_id: AccountIdSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    date_received: DateSchema.exactOptional(),
    direction: DirectionSchema.exactOptional(),
    from: FromSchema.exactOptional(),
    message_body: MessageBodySchema.exactOptional(),
    message_id: MessageIdSchema.exactOptional(),
    provider: MessagesProviderSchema.exactOptional(),
    to: ToSchema.exactOptional(),
    total_price: TotalPriceSchema.exactOptional(),
  })
  .openapi({ description: 'Inbound Messages', 'x-tab-id': 'inbound-messages', required: [] })
  .openapi('CsvMessagesInbound')

const DateFinalizedSchema = z.iso
  .date()
  .openapi({
    description: 'Date when the request was finalized.',
    example: '2019-06-28T15:30:00+0000',
  })
  .openapi('DateFinalized')

const MessagesErrorCodeSchema = z
  .string()
  .openapi({ description: 'Error code of the message.', example: '1300' })
  .openapi('MessagesErrorCode')

const LatencySchema = z
  .int()
  .openapi({ description: 'Latency of the request in ms.', example: '42' })
  .openapi('Latency')

const MessagesStatusSchema = z
  .string()
  .openapi({ description: 'Status of the message.', example: 'submitted' })
  .openapi('MessagesStatus')

const CsvMessagesOutboundSchema = z
  .object({
    account_id: AccountIdSchema.exactOptional(),
    client_ref: ClientRefSchema.exactOptional(),
    country: CountrySchema.exactOptional(),
    country_name: CountryNameSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    date_finalized: DateFinalizedSchema.exactOptional(),
    date_received: DateSchema.exactOptional(),
    direction: DirectionSchema.exactOptional(),
    error_code: MessagesErrorCodeSchema.exactOptional(),
    from: FromSchema.exactOptional(),
    latency: LatencySchema.exactOptional(),
    message_body: MessageBodySchema.exactOptional(),
    message_id: MessageIdSchema.exactOptional(),
    provider: MessagesProviderSchema.exactOptional(),
    status: MessagesStatusSchema.exactOptional(),
    to: ToSchema.exactOptional(),
    total_price: TotalPriceSchema.exactOptional(),
  })
  .openapi({ description: 'Outbound Messages', 'x-tab-id': 'outbound-messages', required: [] })
  .openapi('CsvMessagesOutbound')

const NiCountrySchema = z
  .string()
  .openapi({ description: 'Country of the looked up number.', example: 'mobile' })
  .openapi('NiCountry')

const NiCountryNameSchema = z
  .string()
  .openapi({ description: 'Country name of the looked up number.', example: 'mobile' })
  .openapi('NiCountryName')

const NiFirstNameSchema = z
  .string()
  .openapi({ description: 'First name of the owner of the looked up number.', example: 'valid' })
  .openapi('NiFirstName')

const NiLastNameSchema = z
  .string()
  .openapi({ description: 'Last name of the owner of the looked up number.', example: 'valid' })
  .openapi('NiLastName')

const NiNetworkSchema = z
  .string()
  .openapi({ description: 'Network of the looked up number.', example: '23415' })
  .openapi('NiNetwork')

const NiNetworkNameSchema = z
  .string()
  .openapi({ description: 'Network name of the looked up number.', example: 'Vodafone Limited' })
  .openapi('NiNetworkName')

const NiNetworkTypeSchema = z
  .string()
  .openapi({ description: 'Network type of the looked up number.', example: 'mobile' })
  .openapi('NiNetworkType')

const NiNumberSchema = z
  .string()
  .openapi({ description: 'Number looked up for this request.', example: 'HLR-LOOKUP' })
  .openapi('NiNumber')

const NiPortedSchema = z
  .string()
  .openapi({ description: 'Is the looked up number ported.', example: 'ported' })
  .openapi('NiPorted')

const NiProductTypeSchema = z
  .string()
  .openapi({ description: 'Type of Number Insight request.', example: 'HLR-LOOKUP' })
  .openapi('NiProductType')

const NiReachableSchema = z
  .string()
  .openapi({ description: 'Is the looked up number reachable.', example: 'reachable' })
  .openapi('NiReachable')

const NiResponseCodeSchema = z
  .string()
  .openapi({ description: 'Response code of the Number Insight request.', example: '0' })
  .openapi('NiResponseCode')

const NiStatusSchema = z
  .string()
  .openapi({ description: 'Status of the Number Insight request.', example: 'Success' })
  .openapi('NiStatus')

const NiValidSchema = z
  .string()
  .openapi({ description: 'Is the looked up number valid.', example: 'valid' })
  .openapi('NiValid')

const CsvNiSchema = z
  .object({
    account_id: AccountIdSchema.exactOptional(),
    country: NiCountrySchema.exactOptional(),
    country_name: NiCountryNameSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    date_received: DateSchema.exactOptional(),
    first_name: NiFirstNameSchema.exactOptional(),
    last_name: NiLastNameSchema.exactOptional(),
    network: NiNetworkSchema.exactOptional(),
    network_name: NiNetworkNameSchema.exactOptional(),
    network_type: NiNetworkTypeSchema.exactOptional(),
    number: NiNumberSchema.exactOptional(),
    ported: NiPortedSchema.exactOptional(),
    product_type: NiProductTypeSchema.exactOptional(),
    reachable: NiReachableSchema.exactOptional(),
    request_id: RequestIdSchema.exactOptional(),
    response_code: NiResponseCodeSchema.exactOptional(),
    status: NiStatusSchema.exactOptional(),
    total_price: TotalPriceSchema.exactOptional(),
    valid: NiValidSchema.exactOptional(),
  })
  .openapi({ description: 'Number Insight', 'x-tab-id': 'number-insight', required: [] })
  .openapi('CsvNi')

const NetworkNameSchema = z
  .string()
  .openapi({
    description: 'Name of the network used to send the request.',
    example: 'Vodafone Limited',
  })
  .openapi('NetworkName')

const CsvSmsInboundSchema = z
  .object({
    account_id: AccountIdSchema.exactOptional(),
    country: CountrySchema.exactOptional(),
    country_name: CountryNameSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    date_received: DateSchema.exactOptional(),
    direction: DirectionSchema.exactOptional(),
    from: FromSchema.exactOptional(),
    message_body: MessageBodySchema.exactOptional(),
    message_id: MessageIdSchema.exactOptional(),
    network: NetworkSchema.exactOptional(),
    network_name: NetworkNameSchema.exactOptional(),
    to: ToSchema.exactOptional(),
    total_price: PriceSchema.exactOptional(),
  })
  .openapi({ description: 'Inbound SMS', 'x-tab-id': 'inbound-sms', required: [] })
  .openapi('CsvSmsInbound')

const ErrorCodeSchema = z
  .string()
  .openapi({ description: 'Error code of the request.', example: '0' })
  .openapi('ErrorCode')

const ErrorCodeDescriptionSchema = z
  .string()
  .openapi({ description: 'Description of the error code of the request.', example: 'Delivered' })
  .openapi('ErrorCodeDescription')

const CsvSmsOutboundSchema = z
  .object({
    account_id: AccountIdSchema.exactOptional(),
    client_ref: ClientRefSchema.exactOptional(),
    country: CountrySchema.exactOptional(),
    country_name: CountryNameSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    date_finalized: DateFinalizedSchema.exactOptional(),
    date_received: DateSchema.exactOptional(),
    direction: DirectionSchema.exactOptional(),
    error_code: ErrorCodeSchema.exactOptional(),
    error_code_description: ErrorCodeDescriptionSchema.exactOptional(),
    from: FromSchema.exactOptional(),
    latency: LatencySchema.exactOptional(),
    message_body: MessageBodySchema.exactOptional(),
    message_id: MessageIdSchema.exactOptional(),
    network: NetworkSchema.exactOptional(),
    network_name: NetworkNameSchema.exactOptional(),
    status: SmsStatusSchema.exactOptional(),
    to: ToSchema.exactOptional(),
    total_price: PriceSchema.exactOptional(),
  })
  .openapi({ description: 'Outbound SMS', 'x-tab-id': 'outbound-sms', required: [] })
  .openapi('CsvSmsOutbound')

const EstimatedPriceSchema = z
  .string()
  .openapi({ description: 'Estimated price of the verify request.', example: '0.042' })
  .openapi('EstimatedPrice')

const FirstEventDateSchema = z.iso
  .date()
  .openapi({ description: 'Date of the first verify event.', example: '2019-06-28T15:30:00+0000' })
  .openapi('FirstEventDate')

const LastEventDateSchema = z.iso
  .date()
  .openapi({ description: 'Date of the last verify event.', example: '2019-06-28T15:30:00+0000' })
  .openapi('LastEventDate')

const LocaleSchema = z
  .string()
  .openapi({ description: 'Locale used for the TTS.', example: 'en-gb' })
  .openapi('Locale')

const NumberTypeSchema = z
  .string()
  .openapi({ description: 'Type of phone number to which requests are sent.', example: 'MOBILE' })
  .openapi('NumberType')

const PricingModelSchema = z
  .string()
  .openapi({ description: 'Pricing model used for this request.', example: '0' })
  .openapi('PricingModel')

const SmsEventCountSchema = z
  .int()
  .openapi({ description: 'Number of sms sent for this verify request.', example: '1' })
  .openapi('SmsEventCount')

const TtsEventCountSchema = z
  .int()
  .openapi({ description: 'Number of tts sent for this verify request.', example: '1' })
  .openapi('TtsEventCount')

const VerifyStatusSchema = z
  .string()
  .openapi({ description: 'Status of the verify request.', example: 'SUCCESS' })
  .openapi('VerifyStatus')

const CsvVerifySchema = z
  .object({
    account_id: AccountIdSchema.exactOptional(),
    country: CountrySchema.exactOptional(),
    country_name: CountryNameSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    date_finalized: DateFinalizedSchema.exactOptional(),
    date_received: DateSchema.exactOptional(),
    estimated_price: EstimatedPriceSchema.exactOptional(),
    first_event_date: FirstEventDateSchema.exactOptional(),
    from: FromSchema.exactOptional(),
    last_event_date: LastEventDateSchema.exactOptional(),
    locale: LocaleSchema.exactOptional(),
    network: NetworkSchema.exactOptional(),
    network_name: NetworkNameSchema.exactOptional(),
    number_type: NumberTypeSchema.exactOptional(),
    price: PriceSchema.exactOptional(),
    pricing_model: PricingModelSchema.exactOptional(),
    request_id: RequestIdSchema.exactOptional(),
    sms_event_count: SmsEventCountSchema.exactOptional(),
    to: ToSchema.exactOptional(),
    tts_event_count: TtsEventCountSchema.exactOptional(),
    verify_status: VerifyStatusSchema.exactOptional(),
  })
  .openapi({ description: 'Verify', 'x-tab-id': 'verify', required: [] })
  .openapi('CsvVerify')

const VoiceStatusDescriptionSchema = z
  .string()
  .openapi({
    description: 'Description of the status of the call.',
    example: 'The call was successful.',
  })
  .openapi('VoiceStatusDescription')

const CsvVoiceSchema = z
  .object({
    account_id: AccountIdSchema.exactOptional(),
    call_id: RequestIdSchema.exactOptional(),
    country: CountrySchema.exactOptional(),
    country_name: CountryNameSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    date_end: CallEndDateSchema.exactOptional(),
    date_start: CallStartDateSchema.exactOptional(),
    direction: DirectionSchema.exactOptional(),
    duration: DurationSchema.exactOptional(),
    from: FromSchema.exactOptional(),
    network: NetworkSchema.exactOptional(),
    network_name: NetworkNameSchema.exactOptional(),
    price: PriceSchema.exactOptional(),
    status: VoiceStatusSchema.exactOptional(),
    status_description: VoiceStatusDescriptionSchema.exactOptional(),
    to: ToSchema.exactOptional(),
    total_price: TotalPriceSchema.exactOptional(),
  })
  .openapi({ description: 'Voice Call', 'x-tab-id': 'voice-call', required: [] })
  .openapi('CsvVoice')

const CsvWebsocketsSchema = z
  .object({
    account_id: AccountIdSchema.exactOptional(),
    call_id: RequestIdSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    date_end: CallEndDateSchema.exactOptional(),
    date_start: CallStartDateSchema.exactOptional(),
    duration: DurationSchema.exactOptional(),
    price: PriceSchema.exactOptional(),
    status: WebsocketStatusSchema.exactOptional(),
    total_price: TotalPriceSchema.exactOptional(),
  })
  .openapi({ description: 'WebSocket Call', 'x-tab-id': 'websocket-call', required: [] })
  .openapi('CsvWebsockets')

const FileIdSchema = z
  .string()
  .openapi({
    description: 'Id of the generated report file.',
    example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
  })
  .openapi('FileId')

const IdsNotFoundSchema = z
  .string()
  .openapi({
    description:
      'If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.',
    example: '7b10a0c2-1a05-11eb-bad9-38f9d331649,7b1091b8-1a05-11eb-bad9-38f9d331493',
  })
  .openapi('IdsNotFound')

const InAppVoiceResponseCreateReportSchema = ReportResponseCreateReportSchema.and(
  InAppVoiceFieldsSchema,
)
  .openapi({ description: 'In App Voice', 'x-tab-id': 'in-app-voice' })
  .openapi('InAppVoiceResponseCreateReport')

const InAppVoiceResponseGetReportSchema = ReportResponseSchema.and(InAppVoiceFieldsSchema)
  .openapi({ description: 'In App Voice', 'x-tab-id': 'in-app-voice' })
  .openapi('InAppVoiceResponseGetReport')

const InstanceSchema = z
  .string()
  .openapi({ example: 'f94b4e56604e07e5e5ad5a7228618f81' })
  .openapi('Instance')

const JsonSmsInboundSchema = z
  .object({
    account_id: AccountIdSchema.exactOptional(),
    country: CountrySchema.exactOptional(),
    country_name: CountryNameSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    date_received: DateSchema.exactOptional(),
    direction: DirectionSchema.and(z.any().openapi({ example: 'inbound' })).exactOptional(),
    from: FromSchema.exactOptional(),
    message_id: MessageIdSchema.exactOptional(),
    network: NetworkSchema.exactOptional(),
    network_name: NetworkNameSchema.exactOptional(),
    to: ToSchema.exactOptional(),
    total_price: PriceSchema.exactOptional(),
  })
  .openapi({ description: 'Inbound SMS', 'x-tab-id': 'inbound-sms', required: [] })
  .openapi('JsonSmsInbound')

const JsonSmsInboundWithBodySchema = JsonSmsInboundSchema.and(
  z.object({ message_body: MessageBodySchema.exactOptional() }).openapi({ required: [] }),
).openapi('JsonSmsInboundWithBody')

const JsonSmsOutboundSchema = z
  .object({
    account_id: AccountIdSchema.exactOptional(),
    client_ref: ClientRefSchema.exactOptional(),
    concatenated: ConcatenatedSchema.exactOptional(),
    country: CountrySchema.exactOptional(),
    country_name: CountryNameSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    date_finalized: DateFinalizedSchema.exactOptional(),
    date_received: DateSchema.exactOptional(),
    direction: DirectionSchema.exactOptional(),
    error_code: ErrorCodeSchema.exactOptional(),
    error_code_description: ErrorCodeDescriptionSchema.exactOptional(),
    from: FromSchema.exactOptional(),
    latency: LatencySchema.exactOptional(),
    message_id: MessageIdSchema.exactOptional(),
    network: NetworkSchema.exactOptional(),
    network_name: NetworkNameSchema.exactOptional(),
    status: SmsStatusSchema.exactOptional(),
    to: ToSchema.exactOptional(),
    total_price: PriceSchema.exactOptional(),
  })
  .openapi({ description: 'Outbound SMS', 'x-tab-id': 'outbound-sms', required: [] })
  .openapi('JsonSmsOutbound')

const JsonSmsOutboundWithBodySchema = JsonSmsOutboundSchema.and(
  z.object({ message_body: MessageBodySchema.exactOptional() }).openapi({ required: [] }),
).openapi('JsonSmsOutboundWithBody')

const MessagesResponseCreateReportSchema = ReportResponseCreateReportSchema.and(
  MessagesFieldsSchema,
)
  .openapi({ description: 'Messages', 'x-tab-id': 'messages' })
  .openapi('MessagesResponseCreateReport')

const MessagesResponseGetReportSchema = ReportResponseSchema.and(MessagesFieldsSchema)
  .openapi({ description: 'Messages', 'x-tab-id': 'messages' })
  .openapi('MessagesResponseGetReport')

const NumberInsightResponseCreateReportSchema = ReportResponseCreateReportSchema.and(
  NumberInsightFieldsSchema,
)
  .openapi({ description: 'Number Insight', 'x-tab-id': 'number-insight' })
  .openapi('NumberInsightResponseCreateReport')

const NumberInsightResponseGetReportSchema = ReportResponseSchema.and(NumberInsightFieldsSchema)
  .openapi({ description: 'Number Insight', 'x-tab-id': 'number-insight' })
  .openapi('NumberInsightResponseGetReport')

const ReportResponseTopLevelSchema = z
  .object({
    _links: z
      .object({
        self: z
          .object({
            href: z
              .string()
              .exactOptional()
              .openapi({
                example:
                  'https://api.nexmo.com/v2/reports/records?product=SMS&direction=outbound&date_start=2020-03-05T13%3A00%3A00Z&date_end=2020-03-05T14%0A00%3A00Z&account_id=abcdef01',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    account_id: AccountIdSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    ids_not_found: IdsNotFoundSchema.exactOptional(),
    price: PriceSchema.exactOptional(),
    received_at: ReceiveTimeSchema.exactOptional(),
    request_id: RequestIdSchema.exactOptional(),
    request_status: RequestStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportResponseTopLevel')

const SmsResponseCreateReportSchema = ReportResponseCreateReportSchema.and(SmsFieldsSchema)
  .openapi({ description: 'SMS', 'x-tab-id': 'SMS' })
  .openapi('SmsResponseCreateReport')

const SmsResponseGetReportSchema = ReportResponseSchema.and(SmsFieldsSchema)
  .openapi({ description: 'SMS', 'x-tab-id': 'SMS' })
  .openapi('SmsResponseGetReport')

const VerifyApiResponseCreateReportSchema = ReportResponseCreateReportSchema.and(
  VerifyApiFieldsSchema,
)
  .openapi({ description: 'Verify', 'x-tab-id': 'verify' })
  .openapi('VerifyApiResponseCreateReport')

const VerifyApiResponseGetReportSchema = ReportResponseSchema.and(VerifyApiFieldsSchema)
  .openapi({ description: 'Verify', 'x-tab-id': 'verify' })
  .openapi('VerifyApiResponseGetReport')

const VoiceCallResponseCreateReportSchema = ReportResponseCreateReportSchema.and(
  VoiceCallFieldsSchema,
)
  .openapi({ description: 'Voice Call', 'x-tab-id': 'voice-call' })
  .openapi('VoiceCallResponseCreateReport')

const VoiceCallResponseGetReportSchema = ReportResponseSchema.and(VoiceCallFieldsSchema)
  .openapi({ description: 'Voice Call', 'x-tab-id': 'voice-call' })
  .openapi('VoiceCallResponseGetReport')

const WebsocketCallResponseCreateReportSchema = ReportResponseCreateReportSchema.and(
  WebsocketCallFieldsSchema,
)
  .openapi({ description: 'WebSocket Call', 'x-tab-id': 'websocket-call' })
  .openapi('WebsocketCallResponseCreateReport')

const WebsocketCallResponseGetReportSchema = ReportResponseSchema.and(WebsocketCallFieldsSchema)
  .openapi({ description: 'WebSocket Call', 'x-tab-id': 'websocket-call' })
  .openapi('WebsocketCallResponseGetReport')

const _401Response = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z
            .string()
            .exactOptional()
            .openapi({ example: 'You did not provide correct credentials.' }),
          instance: z
            .string()
            .exactOptional()
            .openapi({ example: 'f94b4e56604e07e5e5ad5a7228618f81' }),
          title: z.string().exactOptional().openapi({ example: 'Unauthorized' }),
          type: z
            .string()
            .exactOptional()
            .openapi({ example: 'https://developer.nexmo.com/api-errors#unauthorized' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const _403Response = {
  description: 'Forbidden',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z
            .string()
            .exactOptional()
            .openapi({ example: 'User not authorized to query the requested data.' }),
          instance: z
            .string()
            .exactOptional()
            .openapi({ example: 'f94b4e56604e07e5e5ad5a7228618f81' }),
          title: z.string().exactOptional().openapi({ example: 'Forbidden' }),
          type: z
            .string()
            .exactOptional()
            .openapi({ example: 'https://developer.nexmo.com/api-errors#forbidden' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const _404Response = {
  description: 'Not found',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z
            .string()
            .exactOptional()
            .openapi({
              example:
                'Report aaaaaaaa-bbbb-cccc-dddd-0123456789ab does not exist, or you do not have access.',
            }),
          instance: z
            .string()
            .exactOptional()
            .openapi({ example: 'f94b4e56604e07e5e5ad5a7228618f81' }),
          title: z.string().exactOptional().openapi({ example: 'Invalid report ID' }),
          type: z
            .string()
            .exactOptional()
            .openapi({ example: 'https://developer.nexmo.com/api-errors#not-found' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const _409Response = {
  description: 'Invalid Abort Operation',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z
            .string()
            .exactOptional()
            .openapi({
              example:
                'The job is already in a terminated state such as `SUCCESS`, `TRUNCATED`, `FAILED` or `ABORTED`.',
            }),
          instance: z
            .string()
            .exactOptional()
            .openapi({ example: 'f94b4e56604e07e5e5ad5a7228618f81' }),
          title: z.string().exactOptional().openapi({ example: 'Invalid Abort Operation' }),
          type: z
            .string()
            .exactOptional()
            .openapi({
              example: 'https://developer.nexmo.com/api-errors/reports#invalid-abort-operation',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const _422Response = {
  description: 'Unprocessable entity',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z.string().exactOptional().openapi({ example: 'Unprocessable entity.' }),
          instance: z
            .string()
            .exactOptional()
            .openapi({ example: 'f94b4e56604e07e5e5ad5a7228618f81' }),
          title: z.string().exactOptional().openapi({ example: 'Unprocessable entity' }),
          type: z
            .string()
            .exactOptional()
            .openapi({ example: 'https://developer.nexmo.com/api-errors#not-found' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const _400JsonResponse = {
  description: 'Bad Request',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z.string().exactOptional().openapi({ example: 'Malformed JSON payload.' }),
          instance: z
            .string()
            .exactOptional()
            .openapi({ example: 'f94b4e56604e07e5e5ad5a7228618f81' }),
          title: z.string().exactOptional().openapi({ example: 'Malformed JSON' }),
          type: z
            .string()
            .exactOptional()
            .openapi({ example: 'https://developer.nexmo.com/api-errors#invalid-json' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const _400ParamsResponse = {
  description: 'Bad Request',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z.string().exactOptional().openapi({ example: 'Invalid request parameter.' }),
          instance: z
            .string()
            .exactOptional()
            .openapi({ example: 'f94b4e56604e07e5e5ad5a7228618f81' }),
          title: z.string().exactOptional().openapi({ example: 'Invalid request parameter' }),
          type: z
            .string()
            .exactOptional()
            .openapi({
              example: 'https://developer.nexmo.com/api-errors/reports#invalid-request-parameters',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const CsvReportResponseResponse = {
  description: 'Zip file containing CSV files',
  content: {
    'application/octet-stream': {
      schema: z
        .object({
          report: z
            .array(
              z.union([
                CsvSmsOutboundSchema,
                CsvSmsInboundSchema,
                CsvVoiceSchema,
                CsvInAppVoiceSchema,
                CsvWebsocketsSchema,
                CsvVerifySchema,
                CsvNiSchema,
                CsvMessagesOutboundSchema,
                CsvMessagesInboundSchema,
                CsvAsrSchema,
              ]),
            )
            .exactOptional()
            .openapi({ description: 'The report in CSV format inside the zip archive.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const JsonRecordResponseResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z.xor([
        ReportResponseTopLevelSchema.and(
          z
            .object({
              direction: z
                .enum(['inbound', 'outbound'])
                .exactOptional()
                .openapi({
                  description:
                    'Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.',
                  example: 'outbound',
                }),
              include_message: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Include the text of messages in the report.',
                  example: 'true',
                }),
              items_count: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of returned records', example: 1 }),
              product: ProductSmsSchema.exactOptional(),
              records: z
                .array(JsonSmsOutboundWithBodySchema)
                .exactOptional()
                .openapi({ description: 'Records in JSON format' }),
              show_concatenated: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether the SMS was split up into multiple parts (due to its length).',
                  example: 'false',
                }),
            })
            .openapi({ description: 'SMS (Outbound)', 'x-tab-id': 'sms-outbound', required: [] }),
        ),
        ReportResponseTopLevelSchema.and(
          z
            .object({
              direction: z
                .enum(['inbound', 'outbound'])
                .exactOptional()
                .openapi({
                  description:
                    'Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.',
                  example: 'inbound',
                }),
              include_message: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Include the text of messages in the report.',
                  example: 'true',
                }),
              items_count: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of returned records', example: 1 }),
              product: ProductSmsSchema.exactOptional(),
              records: z
                .array(JsonSmsInboundWithBodySchema)
                .exactOptional()
                .openapi({ description: 'Records in JSON format' }),
              show_concatenated: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether the SMS was split up into multiple parts (due to its length).',
                  example: 'false',
                }),
            })
            .openapi({ description: 'SMS (Inbound)', 'x-tab-id': 'sms-inbound', required: [] }),
        ),
        ReportResponseTopLevelSchema.and(
          z
            .object({
              direction: DirectionSchema.exactOptional(),
              items_count: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of returned records', example: 1 }),
              product: ProductVoiceSchema.exactOptional(),
              records: z
                .array(CsvVoiceSchema)
                .exactOptional()
                .openapi({ description: 'Records in JSON format' }),
            })
            .openapi({ description: 'Voice Call', 'x-tab-id': 'voice-call', required: [] }),
        ),
        ReportResponseTopLevelSchema.and(
          z
            .object({
              items_count: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of returned records', example: 1 }),
              product: ProductInAppVoiceSchema.exactOptional(),
              records: z
                .array(CsvInAppVoiceSchema)
                .exactOptional()
                .openapi({ description: 'Records in JSON format' }),
            })
            .openapi({ description: 'In App Voice', 'x-tab-id': 'in-app-voice', required: [] }),
        ),
        ReportResponseTopLevelSchema.and(
          z
            .object({
              items_count: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of returned records', example: 1 }),
              product: ProductWebsocketSchema.exactOptional(),
              records: z
                .array(CsvWebsocketsSchema)
                .exactOptional()
                .openapi({ description: 'Records in JSON format' }),
            })
            .openapi({ description: 'WebSocket Call', 'x-tab-id': 'websocket-call', required: [] }),
        ),
        ReportResponseTopLevelSchema.and(
          z
            .object({
              items_count: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of returned records', example: 1 }),
              product: ProductVerifySchema.exactOptional(),
              records: z
                .array(CsvVerifySchema)
                .exactOptional()
                .openapi({ description: 'Records in JSON format' }),
            })
            .openapi({ description: 'Verify', 'x-tab-id': 'verify', required: [] }),
        ),
        ReportResponseTopLevelSchema.and(
          z
            .object({
              items_count: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of returned records', example: 1 }),
              product: ProductNiSchema.exactOptional(),
              records: z
                .array(CsvNiSchema)
                .exactOptional()
                .openapi({ description: 'Records in JSON format' }),
            })
            .openapi({ description: 'Number Insight', 'x-tab-id': 'number-insight', required: [] }),
        ),
        ReportResponseTopLevelSchema.and(
          z
            .object({
              direction: z
                .enum(['inbound', 'outbound'])
                .exactOptional()
                .openapi({
                  description:
                    'Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.',
                  example: 'outbound',
                }),
              include_message: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Include the text of messages in the report.',
                  example: 'true',
                }),
              items_count: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of returned records', example: 1 }),
              product: ProductMessagesSchema.exactOptional(),
              records: z
                .array(CsvMessagesOutboundSchema)
                .exactOptional()
                .openapi({ description: 'Records in JSON format' }),
              show_concatenated: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether the SMS was split up into multiple parts (due to its length).',
                  example: 'true',
                }),
            })
            .openapi({
              description: 'Messages (Outbound)',
              'x-tab-id': 'messages-outbound',
              required: [],
            }),
        ),
        ReportResponseTopLevelSchema.and(
          z
            .object({
              direction: z
                .enum(['inbound', 'outbound'])
                .exactOptional()
                .openapi({
                  description:
                    'Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.',
                  example: 'inbound',
                }),
              include_message: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Include the text of messages in the report.',
                  example: 'true',
                }),
              items_count: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of returned records', example: 1 }),
              product: ProductMessagesSchema.exactOptional(),
              records: z
                .array(CsvMessagesInboundSchema)
                .exactOptional()
                .openapi({ description: 'Records in JSON format' }),
              show_concatenated: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether the SMS was split up into multiple parts (due to its length).',
                  example: 'true',
                }),
            })
            .openapi({
              description: 'Messages (Inbound)',
              'x-tab-id': 'messages-inbound',
              required: [],
            }),
        ),
        ReportResponseTopLevelSchema.and(
          z
            .object({
              items_count: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of returned records', example: 1 }),
              product: ProductAsrSchema.exactOptional(),
              records: z
                .array(CsvAsrSchema)
                .exactOptional()
                .openapi({ description: 'Records in JSON format' }),
            })
            .openapi({ description: 'ASR', 'x-tab-id': 'asr', required: [] }),
        ),
        ReportResponseTopLevelSchema.and(
          z
            .object({
              items_count: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of returned records', example: 1 }),
              product: ProductConversationsSchema.exactOptional(),
              records: z
                .array(CsvConversationsSchema)
                .exactOptional()
                .openapi({ description: 'Records in JSON format' }),
            })
            .openapi({ description: 'Conversations', 'x-tab-id': 'conversations', required: [] }),
        ),
      ]),
    },
  },
}

const ListReportResponseResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z
        .object({
          items_count: z
            .int()
            .exactOptional()
            .openapi({ description: 'The number of reports in the list.' }),
          reports: z
            .array(
              z.union([
                SmsResponseGetReportSchema,
                VoiceCallResponseGetReportSchema,
                InAppVoiceResponseGetReportSchema,
                WebsocketCallResponseGetReportSchema,
                VerifyApiResponseGetReportSchema,
                NumberInsightResponseGetReportSchema,
                MessagesResponseGetReportSchema,
                ConversationsResponseGetReportSchema,
                AsrResponseGetReportSchema,
              ]),
            )
            .exactOptional()
            .openapi({ description: 'The list of reports.' }),
          self_link: z
            .url()
            .exactOptional()
            .openapi({
              description: 'URI of this search.',
              example: 'https://api.nexmo.com/v2/reports/',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ReportResponsesResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z.xor([
        SmsResponseGetReportSchema,
        VoiceCallResponseGetReportSchema,
        InAppVoiceResponseGetReportSchema,
        WebsocketCallResponseGetReportSchema,
        VerifyApiResponseGetReportSchema,
        NumberInsightResponseGetReportSchema,
        MessagesResponseGetReportSchema,
        ConversationsResponseGetReportSchema,
        AsrResponseGetReportSchema,
      ]),
    },
  },
}

const ReportResponsesCreateReportResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z.xor([
        SmsResponseCreateReportSchema,
        VoiceCallResponseCreateReportSchema,
        InAppVoiceResponseCreateReportSchema,
        WebsocketCallResponseCreateReportSchema,
        VerifyApiResponseCreateReportSchema,
        NumberInsightResponseCreateReportSchema,
        MessagesResponseCreateReportSchema,
        ConversationsResponseCreateReportSchema,
        AsrResponseCreateReportSchema,
      ]),
    },
  },
}

const AccountIdParamsSchema = z
  .string()
  .length(8)
  .openapi({
    param: {
      description: 'The account for which the list of reports will be queried.',
      example: 'abcd1234',
      in: 'query',
      name: 'account_id',
      required: true,
      schema: { maxLength: 8, minLength: 8, type: 'string' },
    },
  })

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const getV2ReportsRoute = createRoute({
  method: 'get',
  path: '/v2/reports',
  summary: 'List reports',
  description: 'List reports created by the specified account based on filtered provided.',
  operationId: 'list-reports',
  request: {
    query: z.object({
      account_id: AccountIdParamsSchema,
      status: z
        .string()
        .openapi({
          param: {
            description:
              'A comma-separated list of report status values. Reports with any of the statuses specified are returned. The values in the comma-seperated list specified for `status` can be any of `PENDING`, `PROCESSING`, `SUCCESS`, `ABORTED`, `FAILED`, `TRUNCATED`.',
            example: 'SUCCESS, FAILED',
            in: 'query',
            name: 'status',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date_from: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date from which the list of reports will be queried. Format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`.',
            example: '2019-06-28T00:00:00-00:00',
            in: 'query',
            name: 'date_from',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      date_to: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date until which the list of reports will be queried. Format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`.',
            example: '2019-06-28T23:59:59-00:00',
            in: 'query',
            name: 'date_to',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: ListReportResponseResponse, 400: _400ParamsResponse, 401: _401Response },
  security: [{ basicAuth: [] }],
})

export const postV2ReportsRoute = createRoute({
  method: 'post',
  path: '/v2/reports',
  summary: 'Create an asynchronous report',
  description: 'Request a report on your account activity',
  operationId: 'create-async-report',
  request: {
    body: {
      description:
        'The parameters of the JSON body will be used to create and filter the report.<br> The value of the `product` field will define which product the report will be created for and which parameters are accepted.\n',
      content: {
        'application/json': {
          schema: z
            .xor([
              SMSSchema,
              VOICECALLSchema,
              INAPPVOICESchema,
              WEBSOCKETCALLSchema,
              VERIFYAPISchema,
              NUMBERINSIGHTSchema,
              MESSAGESSchema,
              CONVERSATIONSSchema,
              ASRSchema,
            ])
            .openapi({ discriminator: { propertyName: 'product' } }),
        },
      },
    },
  },
  responses: {
    200: ReportResponsesCreateReportResponse,
    400: _400JsonResponse,
    401: _401Response,
    403: _403Response,
    422: _422Response,
  },
  security: [{ basicAuth: [] }],
})

export const getV2ReportsRecordsRoute = createRoute({
  method: 'get',
  path: '/v2/reports/records',
  summary: 'Load records synchronously',
  description: 'Fetch usage data synchronously',
  operationId: 'get-records',
  request: {
    query: z.object({
      account_id: z
        .string()
        .length(8)
        .openapi({
          param: {
            description: 'The account for which the list of reports will be queried.',
            example: 'abcd1234',
            in: 'query',
            name: 'account_id',
            required: true,
            schema: { maxLength: 8, minLength: 8, type: 'string' },
          },
        }),
      product: z
        .enum([
          'SMS',
          'VOICE-CALL',
          'VOICE-FAILED',
          'IN-APP-VOICE',
          'WEBSOCKET-CALL',
          'VERIFY-API',
          'NUMBER-INSIGHT',
          'MESSAGES',
          'ASR',
          'CONVERSATIONS',
          'REPORTS-USAGE',
        ])
        .openapi({
          param: {
            description: 'The product to return records for',
            example: 'SMS',
            in: 'query',
            name: 'product',
            required: true,
            schema: {
              enum: [
                'SMS',
                'VOICE-CALL',
                'VOICE-FAILED',
                'IN-APP-VOICE',
                'WEBSOCKET-CALL',
                'VERIFY-API',
                'NUMBER-INSIGHT',
                'MESSAGES',
                'ASR',
                'CONVERSATIONS',
                'REPORTS-USAGE',
              ],
              type: 'string',
            },
          },
        }),
      direction: z
        .enum(['inbound', 'outbound'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.',
            example: 'inbound',
            in: 'query',
            name: 'direction',
            schema: { enum: ['inbound', 'outbound'], type: 'string' },
            required: false,
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The UUID of the message or call to be searched for. You can specify a comma-separated list of UUIDs. If UUIDs are not found they are listed in the response in the `ids_not_found` field.\n\nIf you specify `id`, you must not specify `status`, `date_start` or `date_end`.\n',
            example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
            in: 'query',
            name: 'id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      date_start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports should begin. \n\nIt filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.\n\nIf you provide this, you must provide `date_end` and must not provide `id`.\n',
            example: '2017-12-01T00:00:00+0000',
            in: 'query',
            name: 'date_start',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      date_end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              '**Must be no more than 24 hours later than `date_start`**\n\nISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.\n\nIt is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR.\n\nIf you provide this, you must provide `date_start` and must not provide `id`.\n',
            example: '2018-01-01T00:00:00+0000',
            in: 'query',
            name: 'date_end',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      include_message: z
        .stringbool()
        .pipe(z.union([z.literal(true), z.literal(false)]))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include the message contents in the records. Only applicable for use with products `SMS` and `MESSAGES`, where it is optional.',
            example: true,
            in: 'query',
            name: 'include_message',
            schema: { default: false, enum: [true, false], type: 'boolean' },
            required: false,
          },
        }),
      show_concatenated: z
        .stringbool()
        .pipe(z.union([z.literal(true), z.literal(false)]))
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether the SMS was split up into multiple parts (due to its length).',
            example: false,
            in: 'query',
            name: 'show_concatenated',
            schema: { default: false, enum: [true, false], type: 'boolean' },
            required: false,
          },
        }),
      status: z
        .enum([
          'delivered',
          'expired',
          'failed',
          'rejected',
          'accepted',
          'buffered',
          'unknown',
          'deleted',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'The SMS status to search for. Optional where product is `SMS`.',
            example: 'delivered',
            in: 'query',
            name: 'status',
            schema: {
              default: 'none',
              enum: [
                'delivered',
                'expired',
                'failed',
                'rejected',
                'accepted',
                'buffered',
                'unknown',
                'deleted',
              ],
              type: 'string',
            },
            required: false,
          },
          default: 'none',
        }),
    }),
  },
  responses: {
    200: JsonRecordResponseResponse,
    403: {
      description: 'Unprocessable entity',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: 'User not authorized to query the requested data' }),
              instance: InstanceSchema.exactOptional(),
              title: z.string().exactOptional().openapi({ example: 'Forbidden' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                instance: InstanceSchema.exactOptional(),
                invalid_parameters: z
                  .array(
                    z
                      .object({
                        name: z.string().exactOptional().openapi({ example: 'date_end' }),
                        reason: z
                          .string()
                          .exactOptional()
                          .openapi({ example: 'Missing required parameter' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                title: z.string().exactOptional().openapi({ example: 'Unprocessable entity' }),
              })
              .openapi({ description: 'Missing parameter', required: [] }),
            z
              .object({
                instance: InstanceSchema.exactOptional(),
                invalid_parameters: z
                  .array(
                    z
                      .object({
                        name: z.string().exactOptional().openapi({ example: 'product' }),
                        reason: z
                          .string()
                          .exactOptional()
                          .openapi({
                            example:
                              'Could not resolve product name. Please use one of the following values [IN-APP-VOICE, MESSAGES, NUMBER-INSIGHT, SMS, VERIFY-API, VERIFY-SDK, VOICE-CALL, WEBSOCKET-CALL, ASR]',
                          }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                title: z.string().exactOptional().openapi({ example: 'Unprocessable entity' }),
              })
              .openapi({ description: 'Invalid Product', required: [] }),
            z
              .object({
                detail: z
                  .string()
                  .exactOptional()
                  .openapi({
                    example:
                      'When using message_id, the following parameters are not supported: [date_start, date_end]',
                  }),
                instance: InstanceSchema.exactOptional(),
                title: z.string().exactOptional().openapi({ example: 'Invalid filter' }),
                type: z
                  .string()
                  .exactOptional()
                  .openapi({
                    example: 'https://developer.nexmo.com/api-errors/reports#invalid-filter',
                  }),
              })
              .openapi({ description: 'Invalid filter', required: [] }),
          ]),
        },
      },
    },
  },
  security: [{ basicAuth: [] }],
})

export const getV2ReportsReportIdRoute = createRoute({
  method: 'get',
  path: '/v2/reports/{report_id}',
  summary: 'Get status of report',
  description: 'Retrieve status and metadata about a requested report.',
  operationId: 'get-report',
  request: {
    params: z.object({
      report_id: z
        .string()
        .openapi({
          param: {
            description: 'UUID of the report request (`request_id` in response).',
            in: 'path',
            name: 'report_id',
            required: true,
            schema: { example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab', type: 'string' },
          },
          example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
        }),
    }),
  },
  responses: { 200: ReportResponsesResponse, 401: _401Response, 404: _404Response },
  security: [{ basicAuth: [] }],
})

export const deleteV2ReportsReportIdRoute = createRoute({
  method: 'delete',
  path: '/v2/reports/{report_id}',
  summary: 'Cancel the execution of a report',
  description: 'Cancel the execution of a pending or processing report.',
  operationId: 'cancel-report',
  request: {
    params: z.object({
      report_id: z
        .string()
        .openapi({
          param: {
            description: 'UUID of the report',
            in: 'path',
            name: 'report_id',
            required: true,
            schema: { example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab', type: 'string' },
          },
          example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
        }),
    }),
  },
  responses: {
    200: ReportResponsesResponse,
    401: _401Response,
    404: _404Response,
    409: _409Response,
  },
  security: [{ basicAuth: [] }],
})

export const getV3MediaFileIdRoute = createRoute({
  method: 'get',
  path: '/v3/media/{file_id}',
  summary: 'Get report data',
  description:
    'Download a zipped archive of the rendered report. The file is available for download for 72 hours.<br> The zip file will be named `<PRODUCT>_<REPORT_ID>.zip`<br> The csv file in the zip archive will be named as `report_<PRODUCT>_<ACCOUNT_ID>_<DATE>.csv` the date will be formatted as `yyyyMMdd`.\n',
  operationId: 'download-report',
  request: {
    params: z.object({
      file_id: z
        .string()
        .openapi({
          param: {
            description: 'UUID of the file.',
            in: 'path',
            name: 'file_id',
            required: true,
            schema: { example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab', type: 'string' },
          },
          example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
        }),
    }),
  },
  responses: { 200: CsvReportResponseResponse, 401: _401Response, 404: _404Response },
  security: [{ basicAuth: [] }],
})
