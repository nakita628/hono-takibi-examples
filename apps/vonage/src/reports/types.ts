type Links = {
  download_report?: { href?: string | undefined } | undefined
  self?: { href?: string | undefined } | undefined
}
type AccountId = string
type CallbackUrl = string
type DateEnd = string
type DateStart = string
type IncludeSubaccounts = true | false
type ItemsCount = number
type Product =
  | 'SMS'
  | 'VOICE-CALL'
  | 'IN-APP-VOICE'
  | 'WEBSOCKET-CALL'
  | 'VERIFY-API'
  | 'NUMBER-INSIGHT'
  | 'MESSAGES'
  | 'CONVERSATIONS'
  | 'ASR'
type ReceiveTime = string
type RequestId = string
type RequestStatus = 'PENDING' | 'PROCESSING' | 'SUCCESS' | 'ABORTED' | 'FAILED' | 'TRUNCATED'
type StartTime = string
type AccountRef = string
type ClientRef = string
type Direction = 'inbound' | 'outbound'
type From = string
type IncludeMessage = boolean
type Network = string
type ProductSms =
  | 'SMS'
  | 'VOICE-CALL'
  | 'IN-APP-VOICE'
  | 'WEBSOCKET-CALL'
  | 'VERIFY-API'
  | 'NUMBER-INSIGHT'
  | 'MESSAGES'
  | 'CONVERSATIONS'
  | 'ASR'
type ShowConcatenated = boolean
type SmsStatus =
  | 'delivered'
  | 'expired'
  | 'failed'
  | 'rejected'
  | 'accepted'
  | 'buffered'
  | 'unknown'
type To = string
type SmsResponseGetReport = {
  _links?: Links | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  items_count?: ItemsCount | undefined
  product: ProductSms
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatus | undefined
  start_time?: StartTime | undefined
  account_ref?: AccountRef | undefined
  client_ref?: ClientRef | undefined
  direction: Direction
  from?: From | undefined
  include_message?: IncludeMessage | undefined
  network?: Network | undefined
  show_concatenated?: ShowConcatenated | undefined
  status?: SmsStatus | undefined
  to?: To | undefined
}
type ProductVoice =
  | 'SMS'
  | 'VOICE-CALL'
  | 'IN-APP-VOICE'
  | 'WEBSOCKET-CALL'
  | 'VERIFY-API'
  | 'NUMBER-INSIGHT'
  | 'MESSAGES'
  | 'CONVERSATIONS'
  | 'ASR'
type VoiceStatus = 'answered' | 'machine' | 'error' | 'failed'
type VoiceCallResponseGetReport = {
  _links?: Links | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  items_count?: ItemsCount | undefined
  product?: ProductVoice | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatus | undefined
  start_time?: StartTime | undefined
  direction?: Direction | undefined
  from?: From | undefined
  network?: Network | undefined
  status?: VoiceStatus | undefined
  to?: To | undefined
}
type CallConversationId = string
type ProductInAppVoice =
  | 'SMS'
  | 'VOICE-CALL'
  | 'IN-APP-VOICE'
  | 'WEBSOCKET-CALL'
  | 'VERIFY-API'
  | 'NUMBER-INSIGHT'
  | 'MESSAGES'
  | 'CONVERSATIONS'
  | 'ASR'
type InAppVoiceResponseGetReport = {
  _links?: Links | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  items_count?: ItemsCount | undefined
  product?: ProductInAppVoice | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatus | undefined
  start_time?: StartTime | undefined
  conversation_id?: CallConversationId | undefined
}
type ProductWebsocket =
  | 'SMS'
  | 'VOICE-CALL'
  | 'IN-APP-VOICE'
  | 'WEBSOCKET-CALL'
  | 'VERIFY-API'
  | 'NUMBER-INSIGHT'
  | 'MESSAGES'
  | 'CONVERSATIONS'
  | 'ASR'
type WebsocketStatus = string
type WebsocketCallResponseGetReport = {
  _links?: Links | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  items_count?: ItemsCount | undefined
  product?: ProductWebsocket | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatus | undefined
  start_time?: StartTime | undefined
  status?: WebsocketStatus | undefined
}
type ProductVerify =
  | 'SMS'
  | 'VOICE-CALL'
  | 'IN-APP-VOICE'
  | 'WEBSOCKET-CALL'
  | 'VERIFY-API'
  | 'NUMBER-INSIGHT'
  | 'MESSAGES'
  | 'CONVERSATIONS'
  | 'ASR'
type VerifyApiResponseGetReport = {
  _links?: Links | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  items_count?: ItemsCount | undefined
  product?: ProductVerify | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatus | undefined
  start_time?: StartTime | undefined
  network?: Network | undefined
  to?: To | undefined
}
type Number = string
type ProductNi =
  | 'SMS'
  | 'VOICE-CALL'
  | 'IN-APP-VOICE'
  | 'WEBSOCKET-CALL'
  | 'VERIFY-API'
  | 'NUMBER-INSIGHT'
  | 'MESSAGES'
  | 'CONVERSATIONS'
  | 'ASR'
type NumberInsightResponseGetReport = {
  _links?: Links | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  items_count?: ItemsCount | undefined
  product?: ProductNi | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatus | undefined
  start_time?: StartTime | undefined
  network?: Network | undefined
  number?: Number | undefined
}
type Id = string
type ProductMessages =
  | 'SMS'
  | 'VOICE-CALL'
  | 'IN-APP-VOICE'
  | 'VERIFY-API'
  | 'NUMBER-INSIGHT'
  | 'MESSAGES'
  | 'CONVERSATIONS'
  | 'ASR'
type MessagesResponseGetReport = {
  _links?: Links | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  items_count?: ItemsCount | undefined
  product: ProductMessages
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatus | undefined
  start_time?: StartTime | undefined
  direction: Direction
  from?: From | undefined
  id?: Id | undefined
  include_message?: IncludeMessage | undefined
  to?: To | undefined
}
type ConversationId = string
type ProductConversations =
  | 'SMS'
  | 'VOICE-CALL'
  | 'IN-APP-VOICE'
  | 'WEBSOCKET-CALL'
  | 'VERIFY-API'
  | 'NUMBER-INSIGHT'
  | 'MESSAGES'
  | 'CONVERSATIONS'
  | 'ASR'
type Status = string
type ConversationsResponseGetReport = {
  _links?: Links | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  items_count?: ItemsCount | undefined
  product?: ProductConversations | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatus | undefined
  start_time?: StartTime | undefined
  conversation_id?: ConversationId | undefined
  status?: Status | undefined
}
type ProductAsr =
  | 'SMS'
  | 'VOICE-CALL'
  | 'IN-APP-VOICE'
  | 'WEBSOCKET-CALL'
  | 'VERIFY-API'
  | 'NUMBER-INSIGHT'
  | 'MESSAGES'
  | 'CONVERSATIONS'
  | 'ASR'
type AsrStatus = 'ok' | 'error'
type AsrResponseGetReport = {
  _links?: Links | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  items_count?: ItemsCount | undefined
  product?: ProductAsr | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatus | undefined
  start_time?: StartTime | undefined
  direction?: Direction | undefined
  from?: From | undefined
  status?: AsrStatus | undefined
  to?: To | undefined
}
type SMS = {
  account_id: AccountId
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product: ProductSms
  account_ref?: AccountRef | undefined
  client_ref?: ClientRef | undefined
  direction: Direction
  from?: From | undefined
  include_message?: IncludeMessage | undefined
  network?: Network | undefined
  show_concatenated?: ShowConcatenated | undefined
  status?: SmsStatus | undefined
  to?: To | undefined
}
type VOICECALL = {
  account_id: AccountId
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product: ProductVoice
  direction?: Direction | undefined
  from?: From | undefined
  network?: Network | undefined
  status?: VoiceStatus | undefined
  to?: To | undefined
}
type INAPPVOICE = {
  account_id: AccountId
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product: ProductInAppVoice
  conversation_id?: CallConversationId | undefined
}
type WEBSOCKETCALL = {
  account_id: AccountId
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product: ProductWebsocket
  status?: WebsocketStatus | undefined
}
type VERIFYAPI = {
  account_id: AccountId
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product: ProductVerify
  network?: Network | undefined
  to?: To | undefined
}
type NUMBERINSIGHT = {
  account_id: AccountId
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product: ProductNi
  network?: Network | undefined
  number?: Number | undefined
}
type MESSAGES = {
  account_id: AccountId
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product: ProductMessages
  direction: Direction
  from?: From | undefined
  id?: Id | undefined
  include_message?: IncludeMessage | undefined
  to?: To | undefined
}
type CONVERSATIONS = {
  account_id: AccountId
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product: ProductConversations
  conversation_id?: ConversationId | undefined
  status?: Status | undefined
}
type ASR = {
  account_id: AccountId
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product: ProductAsr
  direction?: Direction | undefined
  from?: From | undefined
  status?: AsrStatus | undefined
  to?: To | undefined
}
type LinksCreateReport = { self?: { href?: string | undefined } | undefined }
type RequestStatusCreateReport =
  | 'PENDING'
  | 'PROCESSING'
  | 'SUCCESS'
  | 'ABORTED'
  | 'FAILED'
  | 'TRUNCATED'
type SmsResponseCreateReport = {
  _links?: LinksCreateReport | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product: ProductSms
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatusCreateReport | undefined
  start_time?: StartTime | undefined
  account_ref?: AccountRef | undefined
  client_ref?: ClientRef | undefined
  direction: Direction
  from?: From | undefined
  include_message?: IncludeMessage | undefined
  network?: Network | undefined
  show_concatenated?: ShowConcatenated | undefined
  status?: SmsStatus | undefined
  to?: To | undefined
}
type VoiceCallResponseCreateReport = {
  _links?: LinksCreateReport | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product?: ProductVoice | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatusCreateReport | undefined
  start_time?: StartTime | undefined
  direction?: Direction | undefined
  from?: From | undefined
  network?: Network | undefined
  status?: VoiceStatus | undefined
  to?: To | undefined
}
type InAppVoiceResponseCreateReport = {
  _links?: LinksCreateReport | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product?: ProductInAppVoice | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatusCreateReport | undefined
  start_time?: StartTime | undefined
  conversation_id?: CallConversationId | undefined
}
type WebsocketCallResponseCreateReport = {
  _links?: LinksCreateReport | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product?: ProductWebsocket | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatusCreateReport | undefined
  start_time?: StartTime | undefined
  status?: WebsocketStatus | undefined
}
type VerifyApiResponseCreateReport = {
  _links?: LinksCreateReport | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product?: ProductVerify | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatusCreateReport | undefined
  start_time?: StartTime | undefined
  network?: Network | undefined
  to?: To | undefined
}
type NumberInsightResponseCreateReport = {
  _links?: LinksCreateReport | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product?: ProductNi | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatusCreateReport | undefined
  start_time?: StartTime | undefined
  network?: Network | undefined
  number?: Number | undefined
}
type MessagesResponseCreateReport = {
  _links?: LinksCreateReport | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product: ProductMessages
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatusCreateReport | undefined
  start_time?: StartTime | undefined
  direction: Direction
  from?: From | undefined
  id?: Id | undefined
  include_message?: IncludeMessage | undefined
  to?: To | undefined
}
type ConversationsResponseCreateReport = {
  _links?: LinksCreateReport | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product?: ProductConversations | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatusCreateReport | undefined
  start_time?: StartTime | undefined
  conversation_id?: ConversationId | undefined
  status?: Status | undefined
}
type AsrResponseCreateReport = {
  _links?: LinksCreateReport | undefined
  account_id?: AccountId | undefined
  callback_url?: CallbackUrl | undefined
  date_end?: DateEnd | undefined
  date_start?: DateStart | undefined
  include_subaccounts?: IncludeSubaccounts | undefined
  product?: ProductAsr | undefined
  receive_time?: ReceiveTime | undefined
  request_id?: RequestId | undefined
  request_status?: RequestStatusCreateReport | undefined
  start_time?: StartTime | undefined
  direction?: Direction | undefined
  from?: From | undefined
  status?: AsrStatus | undefined
  to?: To | undefined
}
type Currency = string
type IdsNotFound = string
type Price = number
type Concatenated = boolean
type Country = string
type CountryName = string
type DateFinalized = string
type Date = string
type ErrorCode = string
type ErrorCodeDescription = string
type Latency = number
type MessageId = string
type NetworkName = string
type MessageBody = string
type JsonSmsOutboundWithBody = {
  account_id?: AccountId | undefined
  client_ref?: ClientRef | undefined
  concatenated?: Concatenated | undefined
  country?: Country | undefined
  country_name?: CountryName | undefined
  currency?: Currency | undefined
  date_finalized?: DateFinalized | undefined
  date_received?: Date | undefined
  direction?: Direction | undefined
  error_code?: ErrorCode | undefined
  error_code_description?: ErrorCodeDescription | undefined
  from?: From | undefined
  latency?: Latency | undefined
  message_id?: MessageId | undefined
  network?: Network | undefined
  network_name?: NetworkName | undefined
  status?: SmsStatus | undefined
  to?: To | undefined
  total_price?: Price | undefined
  message_body?: MessageBody | undefined
}
type JsonSmsInboundWithBody = {
  account_id?: AccountId | undefined
  country?: Country | undefined
  country_name?: CountryName | undefined
  currency?: Currency | undefined
  date_received?: Date | undefined
  direction?: {} | undefined
  from?: From | undefined
  message_id?: MessageId | undefined
  network?: Network | undefined
  network_name?: NetworkName | undefined
  to?: To | undefined
  total_price?: Price | undefined
  message_body?: MessageBody | undefined
}
type CallEndDate = string
type CallStartDate = string
type Duration = number
type VoiceStatusDescription = string
type TotalPrice = number
type CsvVoice = {
  account_id?: AccountId | undefined
  call_id?: RequestId | undefined
  country?: Country | undefined
  country_name?: CountryName | undefined
  currency?: Currency | undefined
  date_end?: CallEndDate | undefined
  date_start?: CallStartDate | undefined
  direction?: Direction | undefined
  duration?: Duration | undefined
  from?: From | undefined
  network?: Network | undefined
  network_name?: NetworkName | undefined
  price?: Price | undefined
  status?: VoiceStatus | undefined
  status_description?: VoiceStatusDescription | undefined
  to?: To | undefined
  total_price?: TotalPrice | undefined
}
type ApplicationId = string
type CdrId = string
type IpVoiceLegId = string
type IpVoiceStatus = string
type ConversationUserId = string
type CsvInAppVoice = {
  account_id?: AccountId | undefined
  application_id?: ApplicationId | undefined
  client_ref?: ClientRef | undefined
  conversation_id?: ConversationId | undefined
  currency?: Currency | undefined
  date_end?: CallEndDate | undefined
  date_start?: CallStartDate | undefined
  duration?: Duration | undefined
  id?: CdrId | undefined
  leg_id?: IpVoiceLegId | undefined
  price?: Price | undefined
  request_id?: RequestId | undefined
  status?: IpVoiceStatus | undefined
  total_price?: TotalPrice | undefined
  user_id?: ConversationUserId | undefined
}
type CsvWebsockets = {
  account_id?: AccountId | undefined
  call_id?: RequestId | undefined
  currency?: Currency | undefined
  date_end?: CallEndDate | undefined
  date_start?: CallStartDate | undefined
  duration?: Duration | undefined
  price?: Price | undefined
  status?: WebsocketStatus | undefined
  total_price?: TotalPrice | undefined
}
type EstimatedPrice = string
type FirstEventDate = string
type LastEventDate = string
type Locale = string
type NumberType = string
type PricingModel = string
type SmsEventCount = number
type TtsEventCount = number
type VerifyStatus = string
type CsvVerify = {
  account_id?: AccountId | undefined
  country?: Country | undefined
  country_name?: CountryName | undefined
  currency?: Currency | undefined
  date_finalized?: DateFinalized | undefined
  date_received?: Date | undefined
  estimated_price?: EstimatedPrice | undefined
  first_event_date?: FirstEventDate | undefined
  from?: From | undefined
  last_event_date?: LastEventDate | undefined
  locale?: Locale | undefined
  network?: Network | undefined
  network_name?: NetworkName | undefined
  number_type?: NumberType | undefined
  price?: Price | undefined
  pricing_model?: PricingModel | undefined
  request_id?: RequestId | undefined
  sms_event_count?: SmsEventCount | undefined
  to?: To | undefined
  tts_event_count?: TtsEventCount | undefined
  verify_status?: VerifyStatus | undefined
}
type NiCountry = string
type NiCountryName = string
type NiFirstName = string
type NiLastName = string
type NiNetwork = string
type NiNetworkName = string
type NiNetworkType = string
type NiNumber = string
type NiPorted = string
type NiProductType = string
type NiReachable = string
type NiResponseCode = string
type NiStatus = string
type NiValid = string
type CsvNi = {
  account_id?: AccountId | undefined
  country?: NiCountry | undefined
  country_name?: NiCountryName | undefined
  currency?: Currency | undefined
  date_received?: Date | undefined
  first_name?: NiFirstName | undefined
  last_name?: NiLastName | undefined
  network?: NiNetwork | undefined
  network_name?: NiNetworkName | undefined
  network_type?: NiNetworkType | undefined
  number?: NiNumber | undefined
  ported?: NiPorted | undefined
  product_type?: NiProductType | undefined
  reachable?: NiReachable | undefined
  request_id?: RequestId | undefined
  response_code?: NiResponseCode | undefined
  status?: NiStatus | undefined
  total_price?: TotalPrice | undefined
  valid?: NiValid | undefined
}
type MessagesErrorCode = string
type MessagesProvider = string
type MessagesStatus = string
type CsvMessagesOutbound = {
  account_id?: AccountId | undefined
  client_ref?: ClientRef | undefined
  country?: Country | undefined
  country_name?: CountryName | undefined
  currency?: Currency | undefined
  date_finalized?: DateFinalized | undefined
  date_received?: Date | undefined
  direction?: Direction | undefined
  error_code?: MessagesErrorCode | undefined
  from?: From | undefined
  latency?: Latency | undefined
  message_body?: MessageBody | undefined
  message_id?: MessageId | undefined
  provider?: MessagesProvider | undefined
  status?: MessagesStatus | undefined
  to?: To | undefined
  total_price?: TotalPrice | undefined
}
type CsvMessagesInbound = {
  account_id?: AccountId | undefined
  currency?: Currency | undefined
  date_received?: Date | undefined
  direction?: Direction | undefined
  from?: From | undefined
  message_body?: MessageBody | undefined
  message_id?: MessageId | undefined
  provider?: MessagesProvider | undefined
  to?: To | undefined
  total_price?: TotalPrice | undefined
}
type AsrStatusDescription = string
type CsvAsr = {
  account_id?: AccountId | undefined
  call_date_start?: CallStartDate | undefined
  call_id?: RequestId | undefined
  currency?: Currency | undefined
  date_end?: CallEndDate | undefined
  date_start?: CallStartDate | undefined
  direction?: Direction | undefined
  duration?: Duration | undefined
  from?: From | undefined
  price?: Price | undefined
  status?: AsrStatus | undefined
  status_description?: AsrStatusDescription | undefined
  to?: To | undefined
  total_price?: TotalPrice | undefined
}
type CreationDate = string
type CsvConversations = {
  account_id?: AccountId | undefined
  application_id?: ApplicationId | undefined
  client_ref?: ClientRef | undefined
  conversation_id?: ConversationId | undefined
  creation_date?: CreationDate | undefined
  currency?: Currency | undefined
  id?: CdrId | undefined
  price?: Price | undefined
  request_id?: RequestId | undefined
  total_price?: TotalPrice | undefined
  user_id?: ConversationUserId | undefined
}
type Instance = string
type CsvSmsOutbound = {
  account_id?: AccountId | undefined
  client_ref?: ClientRef | undefined
  country?: Country | undefined
  country_name?: CountryName | undefined
  currency?: Currency | undefined
  date_finalized?: DateFinalized | undefined
  date_received?: Date | undefined
  direction?: Direction | undefined
  error_code?: ErrorCode | undefined
  error_code_description?: ErrorCodeDescription | undefined
  from?: From | undefined
  latency?: Latency | undefined
  message_body?: MessageBody | undefined
  message_id?: MessageId | undefined
  network?: Network | undefined
  network_name?: NetworkName | undefined
  status?: SmsStatus | undefined
  to?: To | undefined
  total_price?: Price | undefined
}
type CsvSmsInbound = {
  account_id?: AccountId | undefined
  country?: Country | undefined
  country_name?: CountryName | undefined
  currency?: Currency | undefined
  date_received?: Date | undefined
  direction?: Direction | undefined
  from?: From | undefined
  message_body?: MessageBody | undefined
  message_id?: MessageId | undefined
  network?: Network | undefined
  network_name?: NetworkName | undefined
  to?: To | undefined
  total_price?: Price | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/reports': {
      $get:
        | {
            input: {
              query: {
                account_id: string
                status: string
                date_from?: string | undefined
                date_to?: string | undefined
              }
            }
            output: {
              items_count?: number | undefined
              reports?:
                | (
                    | SmsResponseGetReport
                    | VoiceCallResponseGetReport
                    | InAppVoiceResponseGetReport
                    | WebsocketCallResponseGetReport
                    | VerifyApiResponseGetReport
                    | NumberInsightResponseGetReport
                    | MessagesResponseGetReport
                    | ConversationsResponseGetReport
                    | AsrResponseGetReport
                  )[]
                | undefined
              self_link?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_id: string
                status: string
                date_from?: string | undefined
                date_to?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                account_id: string
                status: string
                date_from?: string | undefined
                date_to?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              json:
                | SMS
                | VOICECALL
                | INAPPVOICE
                | WEBSOCKETCALL
                | VERIFYAPI
                | NUMBERINSIGHT
                | MESSAGES
                | CONVERSATIONS
                | ASR
            }
            output:
              | SmsResponseCreateReport
              | VoiceCallResponseCreateReport
              | InAppVoiceResponseCreateReport
              | WebsocketCallResponseCreateReport
              | VerifyApiResponseCreateReport
              | NumberInsightResponseCreateReport
              | MessagesResponseCreateReport
              | ConversationsResponseCreateReport
              | AsrResponseCreateReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json:
                | SMS
                | VOICECALL
                | INAPPVOICE
                | WEBSOCKETCALL
                | VERIFYAPI
                | NUMBERINSIGHT
                | MESSAGES
                | CONVERSATIONS
                | ASR
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json:
                | SMS
                | VOICECALL
                | INAPPVOICE
                | WEBSOCKETCALL
                | VERIFYAPI
                | NUMBERINSIGHT
                | MESSAGES
                | CONVERSATIONS
                | ASR
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json:
                | SMS
                | VOICECALL
                | INAPPVOICE
                | WEBSOCKETCALL
                | VERIFYAPI
                | NUMBERINSIGHT
                | MESSAGES
                | CONVERSATIONS
                | ASR
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json:
                | SMS
                | VOICECALL
                | INAPPVOICE
                | WEBSOCKETCALL
                | VERIFYAPI
                | NUMBERINSIGHT
                | MESSAGES
                | CONVERSATIONS
                | ASR
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/reports/records': {
      $get:
        | {
            input: {
              query: {
                account_id: string
                product:
                  | 'SMS'
                  | 'VOICE-CALL'
                  | 'VOICE-FAILED'
                  | 'IN-APP-VOICE'
                  | 'WEBSOCKET-CALL'
                  | 'VERIFY-API'
                  | 'NUMBER-INSIGHT'
                  | 'MESSAGES'
                  | 'ASR'
                  | 'CONVERSATIONS'
                  | 'REPORTS-USAGE'
                direction?: 'inbound' | 'outbound' | undefined
                id?: string | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                include_message?: true | false | undefined
                show_concatenated?: true | false | undefined
                status?:
                  | 'delivered'
                  | 'expired'
                  | 'failed'
                  | 'rejected'
                  | 'accepted'
                  | 'buffered'
                  | 'unknown'
                  | 'deleted'
                  | undefined
              }
            }
            output:
              | {
                  _links?: { self?: { href?: string | undefined } | undefined } | undefined
                  account_id?: AccountId | undefined
                  currency?: Currency | undefined
                  ids_not_found?: IdsNotFound | undefined
                  price?: Price | undefined
                  received_at?: ReceiveTime | undefined
                  request_id?: RequestId | undefined
                  request_status?: RequestStatus | undefined
                  direction?: 'inbound' | 'outbound' | undefined
                  include_message?: boolean | undefined
                  items_count?: number | undefined
                  product?: ProductSms | undefined
                  records?: JsonSmsOutboundWithBody[] | undefined
                  show_concatenated?: boolean | undefined
                }
              | {
                  _links?: { self?: { href?: string | undefined } | undefined } | undefined
                  account_id?: AccountId | undefined
                  currency?: Currency | undefined
                  ids_not_found?: IdsNotFound | undefined
                  price?: Price | undefined
                  received_at?: ReceiveTime | undefined
                  request_id?: RequestId | undefined
                  request_status?: RequestStatus | undefined
                  direction?: 'inbound' | 'outbound' | undefined
                  include_message?: boolean | undefined
                  items_count?: number | undefined
                  product?: ProductSms | undefined
                  records?: JsonSmsInboundWithBody[] | undefined
                  show_concatenated?: boolean | undefined
                }
              | {
                  _links?: { self?: { href?: string | undefined } | undefined } | undefined
                  account_id?: AccountId | undefined
                  currency?: Currency | undefined
                  ids_not_found?: IdsNotFound | undefined
                  price?: Price | undefined
                  received_at?: ReceiveTime | undefined
                  request_id?: RequestId | undefined
                  request_status?: RequestStatus | undefined
                  direction?: Direction | undefined
                  items_count?: number | undefined
                  product?: ProductVoice | undefined
                  records?: CsvVoice[] | undefined
                }
              | {
                  _links?: { self?: { href?: string | undefined } | undefined } | undefined
                  account_id?: AccountId | undefined
                  currency?: Currency | undefined
                  ids_not_found?: IdsNotFound | undefined
                  price?: Price | undefined
                  received_at?: ReceiveTime | undefined
                  request_id?: RequestId | undefined
                  request_status?: RequestStatus | undefined
                  items_count?: number | undefined
                  product?: ProductInAppVoice | undefined
                  records?: CsvInAppVoice[] | undefined
                }
              | {
                  _links?: { self?: { href?: string | undefined } | undefined } | undefined
                  account_id?: AccountId | undefined
                  currency?: Currency | undefined
                  ids_not_found?: IdsNotFound | undefined
                  price?: Price | undefined
                  received_at?: ReceiveTime | undefined
                  request_id?: RequestId | undefined
                  request_status?: RequestStatus | undefined
                  items_count?: number | undefined
                  product?: ProductWebsocket | undefined
                  records?: CsvWebsockets[] | undefined
                }
              | {
                  _links?: { self?: { href?: string | undefined } | undefined } | undefined
                  account_id?: AccountId | undefined
                  currency?: Currency | undefined
                  ids_not_found?: IdsNotFound | undefined
                  price?: Price | undefined
                  received_at?: ReceiveTime | undefined
                  request_id?: RequestId | undefined
                  request_status?: RequestStatus | undefined
                  items_count?: number | undefined
                  product?: ProductVerify | undefined
                  records?: CsvVerify[] | undefined
                }
              | {
                  _links?: { self?: { href?: string | undefined } | undefined } | undefined
                  account_id?: AccountId | undefined
                  currency?: Currency | undefined
                  ids_not_found?: IdsNotFound | undefined
                  price?: Price | undefined
                  received_at?: ReceiveTime | undefined
                  request_id?: RequestId | undefined
                  request_status?: RequestStatus | undefined
                  items_count?: number | undefined
                  product?: ProductNi | undefined
                  records?: CsvNi[] | undefined
                }
              | {
                  _links?: { self?: { href?: string | undefined } | undefined } | undefined
                  account_id?: AccountId | undefined
                  currency?: Currency | undefined
                  ids_not_found?: IdsNotFound | undefined
                  price?: Price | undefined
                  received_at?: ReceiveTime | undefined
                  request_id?: RequestId | undefined
                  request_status?: RequestStatus | undefined
                  direction?: 'inbound' | 'outbound' | undefined
                  include_message?: boolean | undefined
                  items_count?: number | undefined
                  product?: ProductMessages | undefined
                  records?: CsvMessagesOutbound[] | undefined
                  show_concatenated?: boolean | undefined
                }
              | {
                  _links?: { self?: { href?: string | undefined } | undefined } | undefined
                  account_id?: AccountId | undefined
                  currency?: Currency | undefined
                  ids_not_found?: IdsNotFound | undefined
                  price?: Price | undefined
                  received_at?: ReceiveTime | undefined
                  request_id?: RequestId | undefined
                  request_status?: RequestStatus | undefined
                  direction?: 'inbound' | 'outbound' | undefined
                  include_message?: boolean | undefined
                  items_count?: number | undefined
                  product?: ProductMessages | undefined
                  records?: CsvMessagesInbound[] | undefined
                  show_concatenated?: boolean | undefined
                }
              | {
                  _links?: { self?: { href?: string | undefined } | undefined } | undefined
                  account_id?: AccountId | undefined
                  currency?: Currency | undefined
                  ids_not_found?: IdsNotFound | undefined
                  price?: Price | undefined
                  received_at?: ReceiveTime | undefined
                  request_id?: RequestId | undefined
                  request_status?: RequestStatus | undefined
                  items_count?: number | undefined
                  product?: ProductAsr | undefined
                  records?: CsvAsr[] | undefined
                }
              | {
                  _links?: { self?: { href?: string | undefined } | undefined } | undefined
                  account_id?: AccountId | undefined
                  currency?: Currency | undefined
                  ids_not_found?: IdsNotFound | undefined
                  price?: Price | undefined
                  received_at?: ReceiveTime | undefined
                  request_id?: RequestId | undefined
                  request_status?: RequestStatus | undefined
                  items_count?: number | undefined
                  product?: ProductConversations | undefined
                  records?: CsvConversations[] | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_id: string
                product:
                  | 'SMS'
                  | 'VOICE-CALL'
                  | 'VOICE-FAILED'
                  | 'IN-APP-VOICE'
                  | 'WEBSOCKET-CALL'
                  | 'VERIFY-API'
                  | 'NUMBER-INSIGHT'
                  | 'MESSAGES'
                  | 'ASR'
                  | 'CONVERSATIONS'
                  | 'REPORTS-USAGE'
                direction?: 'inbound' | 'outbound' | undefined
                id?: string | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                include_message?: true | false | undefined
                show_concatenated?: true | false | undefined
                status?:
                  | 'delivered'
                  | 'expired'
                  | 'failed'
                  | 'rejected'
                  | 'accepted'
                  | 'buffered'
                  | 'unknown'
                  | 'deleted'
                  | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: Instance | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                account_id: string
                product:
                  | 'SMS'
                  | 'VOICE-CALL'
                  | 'VOICE-FAILED'
                  | 'IN-APP-VOICE'
                  | 'WEBSOCKET-CALL'
                  | 'VERIFY-API'
                  | 'NUMBER-INSIGHT'
                  | 'MESSAGES'
                  | 'ASR'
                  | 'CONVERSATIONS'
                  | 'REPORTS-USAGE'
                direction?: 'inbound' | 'outbound' | undefined
                id?: string | undefined
                date_start?: string | undefined
                date_end?: string | undefined
                include_message?: true | false | undefined
                show_concatenated?: true | false | undefined
                status?:
                  | 'delivered'
                  | 'expired'
                  | 'failed'
                  | 'rejected'
                  | 'accepted'
                  | 'buffered'
                  | 'unknown'
                  | 'deleted'
                  | undefined
              }
            }
            output:
              | {
                  instance?: Instance | undefined
                  invalid_parameters?:
                    | { name?: string | undefined; reason?: string | undefined }[]
                    | undefined
                  title?: string | undefined
                }
              | {
                  instance?: Instance | undefined
                  invalid_parameters?:
                    | { name?: string | undefined; reason?: string | undefined }[]
                    | undefined
                  title?: string | undefined
                }
              | {
                  detail?: string | undefined
                  instance?: Instance | undefined
                  title?: string | undefined
                  type?: string | undefined
                }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/reports/:report_id': {
      $delete:
        | {
            input: { param: { report_id: string } }
            output:
              | SmsResponseGetReport
              | VoiceCallResponseGetReport
              | InAppVoiceResponseGetReport
              | WebsocketCallResponseGetReport
              | VerifyApiResponseGetReport
              | NumberInsightResponseGetReport
              | MessagesResponseGetReport
              | ConversationsResponseGetReport
              | AsrResponseGetReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { report_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { report_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { report_id: string } }
            output:
              | SmsResponseGetReport
              | VoiceCallResponseGetReport
              | InAppVoiceResponseGetReport
              | WebsocketCallResponseGetReport
              | VerifyApiResponseGetReport
              | NumberInsightResponseGetReport
              | MessagesResponseGetReport
              | ConversationsResponseGetReport
              | AsrResponseGetReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { report_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v3/media/:file_id': {
      $get:
        | {
            input: { param: { file_id: string } }
            output: {
              report?:
                | (
                    | CsvSmsOutbound
                    | CsvSmsInbound
                    | CsvVoice
                    | CsvInAppVoice
                    | CsvWebsockets
                    | CsvVerify
                    | CsvNi
                    | CsvMessagesOutbound
                    | CsvMessagesInbound
                    | CsvAsr
                  )[]
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { file_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
