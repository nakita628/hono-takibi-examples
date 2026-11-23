type LeadsFilter = {
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  name?: string | undefined
}
type SortDirection = 'asc' | 'desc'
type LeadsSort = {
  by?: 'created_at' | 'updated_at' | 'name' | 'first_name' | 'last_name' | 'email' | undefined
  direction?: SortDirection | undefined
}
type RowVersion = string | null
type Address = {
  city?: (string | null) | undefined
  contact_name?: (string | null) | undefined
  country?: (string | null) | undefined
  county?: (string | null) | undefined
  email?: (string | null) | undefined
  fax?: (string | null) | undefined
  id?: (string | null) | undefined
  latitude?: (string | null) | undefined
  line1?: (string | null) | undefined
  line2?: (string | null) | undefined
  line3?: (string | null) | undefined
  line4?: (string | null) | undefined
  longitude?: (string | null) | undefined
  name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  row_version?: RowVersion | undefined
  salutation?: (string | null) | undefined
  state?: (string | null) | undefined
  street_number?: (string | null) | undefined
  string?: (string | null) | undefined
  type?: 'primary' | 'secondary' | 'home' | 'office' | 'shipping' | 'billing' | 'other' | undefined
  website?: (string | null) | undefined
}
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
type CustomField = {
  description?: string | undefined
  id: string
  name?: string | undefined
  value?: (string | null) | (number | null) | (boolean | null) | string[] | undefined
}
type Email = {
  email: string
  id?: string | undefined
  type?: 'primary' | 'secondary' | 'work' | 'personal' | 'billing' | 'other' | undefined
}
type PhoneNumber = {
  area_code?: (string | null) | undefined
  country_code?: (string | null) | undefined
  extension?: (string | null) | undefined
  id?: (string | null) | undefined
  number: string
  type?:
    | 'primary'
    | 'secondary'
    | 'home'
    | 'work'
    | 'office'
    | 'mobile'
    | 'assistant'
    | 'fax'
    | 'direct-dial-in'
    | 'personal'
    | 'other'
    | undefined
}
type SocialLink = {
  id?: (string | null) | undefined
  type?: (string | null) | undefined
  url: string
}
type Tags = string[]
type Website = {
  id?: (string | null) | undefined
  type?: 'primary' | 'secondary' | 'work' | 'personal' | 'other' | undefined
  url: string
}
type Lead = {
  addresses?: Address[] | undefined
  company_id?: (string | null) | undefined
  company_name: string | null
  contact_id?: (string | null) | undefined
  created_at?: string | undefined
  currency?: Currency | undefined
  custom_fields?: CustomField[] | undefined
  description?: (string | null) | undefined
  emails?: Email[] | undefined
  fax?: (string | null) | undefined
  first_name?: (string | null) | undefined
  id?: string | undefined
  language?: (string | null) | undefined
  last_name?: (string | null) | undefined
  lead_source?: (string | null) | undefined
  monetary_amount?: (number | null) | undefined
  name: string
  owner_id?: string | undefined
  phone_numbers?: PhoneNumber[] | undefined
  prefix?: (string | null) | undefined
  social_links?: SocialLink[] | undefined
  status?: (string | null) | undefined
  tags?: Tags | undefined
  title?: (string | null) | undefined
  updated_at?: string | undefined
  websites?: Website[] | undefined
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
type GetLeadsResponse = {
  data: Lead[]
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
type CreateLeadResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type DeleteLeadResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetLeadResponse = {
  data: Lead
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdateLeadResponse = {
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
    '/lead/leads': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: LeadsFilter | undefined
                sort?: LeadsSort | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetLeadsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: LeadsFilter | undefined
                sort?: LeadsSort | undefined
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
                filter?: LeadsFilter | undefined
                sort?: LeadsSort | undefined
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
                filter?: LeadsFilter | undefined
                sort?: LeadsSort | undefined
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
                filter?: LeadsFilter | undefined
                sort?: LeadsSort | undefined
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
                filter?: LeadsFilter | undefined
                sort?: LeadsSort | undefined
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
                filter?: LeadsFilter | undefined
                sort?: LeadsSort | undefined
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
            } & { json: Lead }
            output: CreateLeadResponse
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
            } & { json: Lead }
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
            } & { json: Lead }
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
            } & { json: Lead }
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
            } & { json: Lead }
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
            } & { json: Lead }
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
            } & { json: Lead }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lead/leads/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeleteLeadResponse
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
            output: GetLeadResponse
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
            } & { json: Lead }
            output: UpdateLeadResponse
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
            } & { json: Lead }
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
            } & { json: Lead }
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
            } & { json: Lead }
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
            } & { json: Lead }
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
            } & { json: Lead }
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
            } & { json: Lead }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
