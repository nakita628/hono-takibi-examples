type ConversationUuid = string
type Direction = 'outbound' | 'inbound'
type Duration = string
type EndTime = string
type From = { number?: string | undefined; type?: string | undefined }
type Network = string
type Price = string
type Rate = string
type StartTime = string
type Status = string
type To = { number?: string | undefined; type?: string | undefined }
type Uuid = string
type GetCallResponse = {
  _links?: { self?: { href?: string | undefined } | undefined } | undefined
  conversation_uuid?: ConversationUuid | undefined
  direction?: Direction | undefined
  duration?: Duration | undefined
  end_time?: EndTime | undefined
  from?: From | undefined
  network?: Network | undefined
  price?: Price | undefined
  rate?: Rate | undefined
  start_time?: StartTime | undefined
  status?: Status | undefined
  to?: To | undefined
  uuid?: Uuid | undefined
}
type GetCallsResponse = {
  _embedded?: { calls?: GetCallResponse[] | undefined } | undefined
  _links?: { self?: { href?: string | undefined } | undefined } | undefined
  count?: number | undefined
  page_size?: number | undefined
  record_index?: number | undefined
}
type AddressE164 = string
type EndpointPhoneFrom = { number: AddressE164; type: string }
type EndpointPhoneTo = { dtmfAnswer?: string | undefined; number: AddressE164; type: string }
type AddressSip = string
type EndpointSip = { type: string; uri?: AddressSip | undefined }
type AddressWebsocket = string
type EndpointWebsocket = {
  'content-type': 'audio/l16;rate=8000' | 'audio/l16;rate=16000'
  headers?: { customer_id?: string | undefined } | undefined
  type: string
  uri?: AddressWebsocket | undefined
}
type EndpointVBCExtension = { extension: string; type: string }
type CreateCallRequestNcco = {
  ncco?: { [x: string]: unknown }[] | undefined
  event_method?: 'POST' | 'GET' | undefined
  event_url?: string[] | undefined
  from: EndpointPhoneFrom
  length_timer?: number | undefined
  machine_detection?: 'continue' | 'hangup' | undefined
  random_from_number?: boolean | undefined
  ringing_timer?: number | undefined
  to: (EndpointPhoneTo | EndpointSip | EndpointWebsocket | EndpointVBCExtension)[]
}
type CreateCallRequestAnswerUrl = {
  answer_method?: 'POST' | 'GET' | undefined
  answer_url?: string[] | undefined
  event_method?: 'POST' | 'GET' | undefined
  event_url?: string[] | undefined
  from: EndpointPhoneFrom
  length_timer?: number | undefined
  machine_detection?: 'continue' | 'hangup' | undefined
  random_from_number?: boolean | undefined
  ringing_timer?: number | undefined
  to: (EndpointPhoneTo | EndpointSip | EndpointWebsocket | EndpointVBCExtension)[]
}
type CreateCallResponse = {
  conversation_uuid?: ConversationUuid | undefined
  direction?: Direction | undefined
  status?: Status | undefined
  uuid?: Uuid | undefined
}
type RequestTransferActionParam = 'transfer'
type UpdateCallRequestTransferNcco = {
  action: RequestTransferActionParam
  destination: { ncco: { [x: string]: unknown }[]; type: string }
}
type UpdateCallRequestTransferAnswerUrl = {
  action: RequestTransferActionParam
  destination: { type: string; url: string[] }
}
type UpdateCallRequestHangup = { action?: 'hangup' | undefined }
type UpdateCallRequestMute = { action?: 'mute' | undefined }
type UpdateCallRequestUnmute = { action?: 'mute' | undefined }
type UpdateCallRequestEarmuff = { action?: 'earmuff' | undefined }
type UpdateCallRequestUnearmuff = { action?: 'unearmuff' | undefined }
type DTMFRequest = { digits?: string | undefined }
type DTMFResponse = { message?: string | undefined; uuid?: Uuid | undefined }
type StopStreamResponse = { message?: string | undefined; uuid?: Uuid | undefined }
type StartStreamRequest = {
  level?: string | undefined
  loop?: number | undefined
  stream_url: string[]
}
type StartStreamResponse = { message?: string | undefined; uuid?: Uuid | undefined }
type StopTalkResponse = { message?: string | undefined; uuid?: Uuid | undefined }
type Language =
  | 'ar'
  | 'ca-ES'
  | 'cmn-CN'
  | 'cmn-TW'
  | 'cs-CZ'
  | 'cy-GB'
  | 'da-DK'
  | 'de-DE'
  | 'el-GR'
  | 'en-AU'
  | 'en-GB'
  | 'en-GB-WLS'
  | 'en-IN'
  | 'en-US'
  | 'en-ZA'
  | 'es-ES'
  | 'es-MX'
  | 'es-US'
  | 'eu-ES'
  | 'fi-FI'
  | 'fil-PH'
  | 'fr-CA'
  | 'fr-FR'
  | 'he-IL'
  | 'hi-IN'
  | 'hu-HU'
  | 'id-ID'
  | 'is-IS'
  | 'it-IT'
  | 'ja-JP'
  | 'ko-KR'
  | 'nb-NO'
  | 'nl-NL'
  | 'no-NO'
  | 'pl-PL'
  | 'pt-BR'
  | 'pt-PT'
  | 'ro-RO'
  | 'ru-RU'
  | 'sk-SK'
  | 'sv-SE'
  | 'th-TH'
  | 'tr-TR'
  | 'uk-UA'
  | 'vi-VN'
  | 'yue-CN'
type Style = number
type VoiceName =
  | 'Aditi'
  | 'Agnieszka'
  | 'Alva'
  | 'Amy'
  | 'Astrid'
  | 'Bianca'
  | 'Brian'
  | 'Carla'
  | 'Carmen'
  | 'Carmit'
  | 'Catarina'
  | 'Celine'
  | 'Cem'
  | 'Chantal'
  | 'Chipmunk'
  | 'Conchita'
  | 'Cristiano'
  | 'Damayanti'
  | 'Dora'
  | 'Emma'
  | 'Empar'
  | 'Enrique'
  | 'Eric'
  | 'Ewa'
  | 'Felipe'
  | 'Filiz'
  | 'Geraint'
  | 'Giorgio'
  | 'Gwyneth'
  | 'Hans'
  | 'Henrik'
  | 'Ines'
  | 'Ioana'
  | 'Iveta'
  | 'Ivy'
  | 'Jacek'
  | 'Jan'
  | 'Jennifer'
  | 'Joana'
  | 'Joanna'
  | 'Joey'
  | 'Jordi'
  | 'Justin'
  | 'Kanya'
  | 'Karl'
  | 'Kendra'
  | 'Kimberly'
  | 'Laila'
  | 'Laura'
  | 'Lea'
  | 'Lekha'
  | 'Liv'
  | 'Lotte'
  | 'Lucia'
  | 'Luciana'
  | 'Mads'
  | 'Maged'
  | 'Maja'
  | 'Mariska'
  | 'Marlene'
  | 'Mathieu'
  | 'Matthew'
  | 'Maxim'
  | 'Mei-Jia'
  | 'Melina'
  | 'Mia'
  | 'Miguel'
  | 'Miren'
  | 'Mizuki'
  | 'Montserrat'
  | 'Naja'
  | 'Nicole'
  | 'Nikos'
  | 'Nora'
  | 'Oskar'
  | 'Penelope'
  | 'Raveena'
  | 'Ricardo'
  | 'Ruben'
  | 'Russell'
  | 'Salli'
  | 'Satu'
  | 'Seoyeon'
  | 'Sin-Ji'
  | 'Sora'
  | 'Takumi'
  | 'Tarik'
  | 'Tatyana'
  | 'Tessa'
  | 'Tian-Tian'
  | 'Vicki'
  | 'Vitoria'
  | 'Yelda'
  | 'Zeina'
  | 'Zhiyu'
  | 'Zuzana'
type StartTalkRequest = {
  language?: Language | undefined
  level?: string | undefined
  loop?: number | undefined
  premium?: boolean | undefined
  style?: Style | undefined
  text: string
  voice_name?: VoiceName | undefined
}
type StartTalkResponse = { message?: string | undefined; uuid?: Uuid | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: {
        input: {
          query: {
            status?:
              | 'started'
              | 'ringing'
              | 'answered'
              | 'machine'
              | 'completed'
              | 'busy'
              | 'cancelled'
              | 'failed'
              | 'rejected'
              | 'timeout'
              | 'unanswered'
              | undefined
            date_start?: string | undefined
            date_end?: string | undefined
            page_size?: number | undefined
            record_index?: number | undefined
            order?: 'asc' | 'desc' | undefined
            conversation_uuid?: ConversationUuid | undefined
          }
        }
        output: GetCallsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateCallRequestNcco | CreateCallRequestAnswerUrl }
        output: CreateCallResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/:uuid': {
      $get: {
        input: { param: { uuid: string } }
        output: GetCallResponse
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { uuid: string } } & {
              json:
                | UpdateCallRequestTransferNcco
                | UpdateCallRequestTransferAnswerUrl
                | UpdateCallRequestHangup
                | UpdateCallRequestMute
                | UpdateCallRequestUnmute
                | UpdateCallRequestEarmuff
                | UpdateCallRequestUnearmuff
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { uuid: string } } & {
              json:
                | UpdateCallRequestTransferNcco
                | UpdateCallRequestTransferAnswerUrl
                | UpdateCallRequestHangup
                | UpdateCallRequestMute
                | UpdateCallRequestUnmute
                | UpdateCallRequestEarmuff
                | UpdateCallRequestUnearmuff
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { uuid: string } } & {
              json:
                | UpdateCallRequestTransferNcco
                | UpdateCallRequestTransferAnswerUrl
                | UpdateCallRequestHangup
                | UpdateCallRequestMute
                | UpdateCallRequestUnmute
                | UpdateCallRequestEarmuff
                | UpdateCallRequestUnearmuff
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/:uuid/dtmf': {
      $put: {
        input: { param: { uuid: string } } & { json: DTMFRequest }
        output: DTMFResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:uuid/stream': {
      $delete: {
        input: { param: { uuid: string } }
        output: StopStreamResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { uuid: string } } & { json: StartStreamRequest }
        output: StartStreamResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:uuid/talk': {
      $delete: {
        input: { param: { uuid: string } }
        output: StopTalkResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { uuid: string } } & { json: StartTalkRequest }
        output: StartTalkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
