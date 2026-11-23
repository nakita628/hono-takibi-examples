type JobsFilter = { job_id?: string | undefined }
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
type Anonymized = boolean
type Archived = boolean
type CreatedAt = string
type CreatedBy = string | null
type CustomField = {
  description?: string | undefined
  id: string
  name?: string | undefined
  value?: (string | null) | (number | null) | (boolean | null) | string[] | undefined
}
type Deleted = boolean | null
type DeletedAt = string | null
type DeletedBy = string | null
type Email = {
  email: string
  id?: string | undefined
  type?: 'primary' | 'secondary' | 'work' | 'personal' | 'billing' | 'other' | undefined
}
type Id = string
type Initials = string | null
type LastInteractionAt = string
type OwnerId = string
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
type RecordUrl = string | null
type Tags = string[]
type Title = string | null
type UpdatedAt = string | null
type UpdatedBy = string | null
type Applicant = {
  addresses?: Address[] | undefined
  anonymized?: Anonymized | undefined
  applications?: (string[] | null) | undefined
  archived?: Archived | undefined
  birthday?: (string | null) | undefined
  confidential?: boolean | undefined
  coordinator_id?: string | undefined
  cover_letter?: string | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  custom_fields?: CustomField[] | undefined
  cv_url?: string | undefined
  deleted?: Deleted | undefined
  deleted_at?: DeletedAt | undefined
  deleted_by?: DeletedBy | undefined
  emails?: Email[] | undefined
  first_name?: (string | null) | undefined
  followers?: (string[] | null) | undefined
  headline?: string | undefined
  id?: Id | undefined
  initials?: Initials | undefined
  job_url?: (string | null) | undefined
  last_interaction_at?: LastInteractionAt | undefined
  last_name?: (string | null) | undefined
  middle_name?: (string | null) | undefined
  name?: string | undefined
  owner_id?: OwnerId | undefined
  phone_numbers?: PhoneNumber[] | undefined
  photo_url?: (string | null) | undefined
  position_id?: string | undefined
  record_url?: RecordUrl | undefined
  recruiter_id?: string | undefined
  rejected_at?: (string | null) | undefined
  social_links?:
    | { id?: (string | null) | undefined; type?: (string | null) | undefined; url: string }[]
    | undefined
  source_id?: string | undefined
  sourced_by?: (string | null) | undefined
  sources?: (string[] | null) | undefined
  stage_id?: string | undefined
  tags?: Tags | undefined
  title?: Title | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
  websites?:
    | {
        id?: (string | null) | undefined
        type?: 'primary' | 'secondary' | 'work' | 'personal' | 'other' | undefined
        url: string
      }[]
    | undefined
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
type GetApplicantsResponse = {
  data: Applicant[]
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
type CreateApplicantResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetApplicantResponse = {
  data: Applicant
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type Code = string
type Department = {
  code?: (string | null) | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  description?: (string | null) | undefined
  id?: Id | undefined
  name?: (string | null) | undefined
  parent_id?: string | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
}
type Description = string | null
type Language = string | null
type PublishedAt = string
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
type JobStatus = 'draft' | 'internal' | 'published' | 'completed' | 'on-hold' | 'private'
type Job = {
  addresses?: Address[] | undefined
  available_to_employees?: boolean | undefined
  blocks?: { content?: string | undefined; title?: string | undefined }[] | undefined
  branch?: { id?: Id | undefined; name?: string | undefined } | undefined
  closing?: (string | null) | undefined
  closing_date?: (string | null) | undefined
  closing_html?: (string | null) | undefined
  code?: Code | undefined
  confidential?: boolean | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  deleted?: Deleted | undefined
  department?: Department | undefined
  description?: Description | undefined
  description_html?: (string | null) | undefined
  employment_terms?:
    | 'full-time'
    | 'part-time'
    | 'internship'
    | 'contractor'
    | 'employee'
    | 'freelance'
    | 'temp'
    | 'seasonal'
    | 'volunteer'
    | 'other'
    | undefined
  experience?: string | undefined
  followers?: (string[] | null) | undefined
  hiring_managers?: { id?: string | undefined }[] | undefined
  id?: Id | undefined
  job_portal_url?: (string | null) | undefined
  language?: Language | undefined
  owner_id?: OwnerId | undefined
  published_at?: PublishedAt | undefined
  record_url?: RecordUrl | undefined
  recruiters?: (string[] | null) | undefined
  remote?: (boolean | null) | undefined
  requisition_id?: string | undefined
  salary?:
    | { currency?: Currency | undefined; max?: number | undefined; min?: number | undefined }
    | undefined
  sequence?: number | undefined
  slug?: (string | null) | undefined
  status?: JobStatus | undefined
  tags?: Tags | undefined
  title?: Title | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
  url?: (string | null) | undefined
  visibility?: 'public' | 'internal' | undefined
}
type GetJobsResponse = {
  data: Job[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetJobResponse = {
  data: Job
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ats/applicants': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: JobsFilter | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetApplicantsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: JobsFilter | undefined
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
                filter?: JobsFilter | undefined
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
                filter?: JobsFilter | undefined
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
                filter?: JobsFilter | undefined
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
                filter?: JobsFilter | undefined
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
                filter?: JobsFilter | undefined
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
            } & { json: Applicant }
            output: CreateApplicantResponse
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
            } & { json: Applicant }
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
            } & { json: Applicant }
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
            } & { json: Applicant }
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
            } & { json: Applicant }
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
            } & { json: Applicant }
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
            } & { json: Applicant }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ats/applicants/:id': {
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
            output: GetApplicantResponse
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
    }
  } & {
    '/ats/jobs': {
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
            output: GetJobsResponse
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
    }
  } & {
    '/ats/jobs/:id': {
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
            output: GetJobResponse
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
    }
  },
  '/'
>
export default routes
