type ApiKey = string
type ApiSecret = string
type CheckRequest = {
  api_key: ApiKey
  api_secret: ApiSecret
  code: string
  ip_address?: string | undefined
  request_id: string
}
type EstimatedPriceMessagesSent = string
type CheckResponse = {
  currency?: string | undefined
  estimated_price_messages_sent?: EstimatedPriceMessagesSent | undefined
  event_id?: string | undefined
  price?: string | undefined
  request_id?: string | undefined
  status?: string | undefined
}
type CheckErrorResponse = {
  error_text?: string | undefined
  request_id?: string | undefined
  status?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '16' | '17' | undefined
}
type ControlRequest = {
  api_key: ApiKey
  api_secret: ApiSecret
  cmd: 'cancel' | 'trigger_next_event'
  request_id: string
}
type ControlResponse = {
  command?: 'cancel' | 'trigger_next_event' | undefined
  status?: string | undefined
}
type ControlErrorResponse = {
  error_text?: string | undefined
  status?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '9' | '19' | undefined
}
type NetworkUnblock = { network?: string | undefined; unblock_duration?: number | undefined }
type NetworkUnblockResponseOk = {
  network?: string | undefined
  unblocked_until?: string | undefined
}
type NetworkUnblockResponseForbidden = {
  detail?: string | undefined
  instance?: string | undefined
  title?: string | undefined
  type?: string | undefined
}
type NetworkUnblockResponseNotFound = {
  detail?: string | undefined
  instance?: string | undefined
  title?: string | undefined
  type?: string | undefined
}
type NetworkUnblockResponseUnprocessableNetwork = {
  detail?: string | undefined
  instance?: string | undefined
  invalid_parameters?: { name?: string | undefined; reason?: string | undefined }[] | undefined
  title?: string | undefined
  type?: string | undefined
}
type NetworkUnblockResponseInvalidDuration = {
  detail?: string | undefined
  instance?: string | undefined
  invalid_parameters?: { name?: string | undefined; reason?: string | undefined }[] | undefined
  title?: string | undefined
  type?: string | undefined
}
type ErrorThrottled = { detail: string; instance: string; title: string; type: string }
type Psd2Request = {
  amount: number
  api_key: ApiKey
  api_secret: ApiSecret
  code_length?: 4 | 6 | undefined
  country?: string | undefined
  lg?:
    | 'en-gb'
    | 'bg-bg'
    | 'cs-cz'
    | 'da-dk'
    | 'de-de'
    | 'ee-et'
    | 'el-gr'
    | 'es-es'
    | 'fi-fi'
    | 'fr-fr'
    | 'ga-ie'
    | 'hu-hu'
    | 'it-it'
    | 'lv-lv'
    | 'lt-lt'
    | 'mt-mt'
    | 'nl-nl'
    | 'pl-pl'
    | 'sk-sk'
    | 'sl-si'
    | 'sv-se'
    | undefined
  next_event_wait?: number | undefined
  number: string
  payee: string
  pin_expiry?: number | undefined
  workflow_id?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined
}
type RequestResponse = { request_id?: string | undefined; status?: string | undefined }
type RequestErrorResponse = {
  error_text?: string | undefined
  network?: string | undefined
  request_id?: string | undefined
  status?:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '15'
    | '20'
    | '29'
    | undefined
}
type SearchResponse = {
  account_id?: string | undefined
  checks?:
    | {
        code?: string | undefined
        date_received?: string | undefined
        ip_address?: string | undefined
        status?: 'VALID' | 'INVALID' | undefined
      }[]
    | undefined
  currency?: string | undefined
  date_finalized?: string | undefined
  date_submitted?: string | undefined
  estimated_price_messages_sent?: EstimatedPriceMessagesSent | undefined
  events?: { id?: string | undefined; type?: 'tts' | 'sms' | undefined }[] | undefined
  first_event_date?: string | undefined
  last_event_date?: string | undefined
  number?: string | undefined
  price?: string | undefined
  request_id?: string | undefined
  sender_id?: string | undefined
  status?: 'IN PROGRESS' | 'SUCCESS' | 'FAILED' | 'EXPIRED' | 'CANCELLED' | undefined
}
type SearchErrorResponse = {
  error_text?: string | undefined
  request_id?: string | undefined
  status?: 'IN PROGRESS' | 'FAILED' | 'EXPIRED' | 'CANCELLED' | '101' | undefined
}
type VerifyRequest = {
  api_key: ApiKey
  api_secret: ApiSecret
  brand: string
  code_length?: 4 | 6 | undefined
  country?: string | undefined
  lg?:
    | 'ar-xa'
    | 'cs-cz'
    | 'cy-cy'
    | 'cy-gb'
    | 'da-dk'
    | 'de-de'
    | 'el-gr'
    | 'en-au'
    | 'en-gb'
    | 'en-in'
    | 'en-us'
    | 'es-es'
    | 'es-mx'
    | 'es-us'
    | 'fi-fi'
    | 'fil-ph'
    | 'fr-ca'
    | 'fr-fr'
    | 'hi-in'
    | 'hu-hu'
    | 'id-id'
    | 'is-is'
    | 'it-it'
    | 'ja-jp'
    | 'ko-kr'
    | 'nb-no'
    | 'nl-nl'
    | 'pl-pl'
    | 'pt-br'
    | 'pt-pt'
    | 'ro-ro'
    | 'ru-ru'
    | 'sv-se'
    | 'th-th'
    | 'tr-tr'
    | 'vi-vn'
    | 'yue-cn'
    | 'zh-cn'
    | 'zh-tw'
    | undefined
  next_event_wait?: number | undefined
  number: string
  pin_code?: string | undefined
  pin_expiry?: number | undefined
  sender_id?: string | undefined
  workflow_id?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/check/:format': {
      $post:
        | {
            input: { param: { format: 'json' | 'xml' } } & { json: CheckRequest } & {
              form: CheckRequest
            }
            output: CheckResponse | CheckErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { format: 'json' | 'xml' } } & { json: CheckRequest } & {
              form: CheckRequest
            }
            output: CheckResponse | CheckErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/control/:format': {
      $post:
        | {
            input: { param: { format: 'json' | 'xml' } } & { json: ControlRequest } & {
              form: ControlRequest
            }
            output: ControlResponse | ControlErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { format: 'json' | 'xml' } } & { json: ControlRequest } & {
              form: ControlRequest
            }
            output: ControlResponse | ControlErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/network-unblock': {
      $post:
        | {
            input: { json: NetworkUnblock }
            output: NetworkUnblockResponseOk
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: NetworkUnblock }
            output: NetworkUnblockResponseForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: NetworkUnblock }
            output: NetworkUnblockResponseNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: NetworkUnblock }
            output:
              | NetworkUnblockResponseUnprocessableNetwork
              | NetworkUnblockResponseInvalidDuration
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: NetworkUnblock }
            output: ErrorThrottled
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/psd2/:format': {
      $post: {
        input: { param: { format: 'json' | 'xml' } } & { json: Psd2Request } & { form: Psd2Request }
        output: RequestResponse | RequestErrorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/:format': {
      $get:
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: {
                api_key: ApiKey
                api_secret: ApiSecret
                request_id: string
                request_ids?: string[] | undefined
              }
            }
            output: SearchResponse | SearchErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: {
                api_key: ApiKey
                api_secret: ApiSecret
                request_id: string
                request_ids?: string[] | undefined
              }
            }
            output: SearchResponse | SearchErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:format': {
      $post:
        | {
            input: { param: { format: 'json' | 'xml' } } & { json: VerifyRequest } & {
              form: VerifyRequest
            }
            output: RequestResponse | RequestErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { format: 'json' | 'xml' } } & { json: VerifyRequest } & {
              form: VerifyRequest
            }
            output: RequestResponse | RequestErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
