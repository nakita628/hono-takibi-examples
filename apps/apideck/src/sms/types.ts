type Currency =
  | 'UNKNOWN_CURRENCY'
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BOV'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYR'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'COU'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LTL'
  | 'LVL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXV'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STD'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRC'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'USN'
  | 'USS'
  | 'UYI'
  | 'UYU'
  | 'UZS'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XAG'
  | 'XAU'
  | 'XBA'
  | 'XBB'
  | 'XBC'
  | 'XBD'
  | 'XCD'
  | 'XDR'
  | 'XOF'
  | 'XPD'
  | 'XPF'
  | 'XPT'
  | 'XTS'
  | 'XXX'
  | 'YER'
  | 'ZAR'
  | 'ZMK'
  | 'ZMW'
  | 'BTC'
  | 'ETH'
type Message = {
  body: string
  created_at?: string | undefined
  created_by?: (string | null) | undefined
  direction?:
    | 'inbound'
    | 'outbound-api'
    | 'outbound-call'
    | 'outbound-reply'
    | 'unknown'
    | undefined
  error?: { code?: string | undefined; message?: string | undefined } | undefined
  from: string
  id?: string | undefined
  messaging_service_id?: string | undefined
  number_of_media_files?: number | undefined
  number_of_units?: number | undefined
  price?:
    | {
        currency?: Currency | undefined
        per_unit?: string | undefined
        total_amount?: string | undefined
      }
    | undefined
  reference?: string | undefined
  scheduled_at?: string | undefined
  sent_at?: string | undefined
  status?:
    | 'accepted'
    | 'scheduled'
    | 'canceled'
    | 'queued'
    | 'sending'
    | 'sent'
    | 'failed'
    | 'delivered'
    | 'undelivered'
    | 'receiving'
    | 'received'
    | 'read'
    | undefined
  subject?: string | undefined
  to: string
  type?: 'sms' | 'mms' | undefined
  updated_at?: (string | null) | undefined
  updated_by?: (string | null) | undefined
  webhook_url?: string | undefined
}
type Links = {
  current?: string | undefined
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type Meta = {
  cursors?:
    | {
        current?: (string | null) | undefined
        next?: (string | null) | undefined
        previous?: (string | null) | undefined
      }
    | undefined
  items_on_page?: number | undefined
}
type GetMessagesResponse = {
  data: Message[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type BadRequestResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnauthorizedResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type PaymentRequiredResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type NotFoundResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnprocessableResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnexpectedErrorResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnifiedId = { id: string }
type CreateMessageResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type DeleteMessageResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetMessageResponse = {
  data: Message
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdateMessageResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/sms/messages': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetMessagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: CreateMessageResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sms/messages/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeleteMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: UpdateMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Message }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
