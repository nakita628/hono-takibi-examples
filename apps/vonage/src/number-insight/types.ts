type NiStandardAdvancedStatus = 0 | 1 | 3 | 4 | 5 | 9 | 19 | 43 | 44 | 45 | 999
type NiResponseAsync = {
  error_text?: string | undefined
  number?: string | undefined
  remaining_balance?: string | undefined
  request_id?: string | undefined
  request_price?: string | undefined
  status?: NiStandardAdvancedStatus | undefined
}
type NiCallerIdentity = {
  caller_name?: string | undefined
  caller_type?: 'business' | 'consumer' | 'unknown' | undefined
  first_name?: string | undefined
  last_name?: string | undefined
}
type NiCurrentCarrierProperties = {
  country?: (string | null) | undefined
  name?: (string | null) | undefined
  network_code?: (string | null) | undefined
  network_type?:
    | 'mobile'
    | 'landline'
    | 'landline_premium'
    | 'landline_tollfree'
    | 'virtual'
    | 'unknown'
    | 'pager'
    | 'null'
    | undefined
} | null
type NiInitialCarrierProperties = {
  country?: (string | null) | undefined
  name?: (string | null) | undefined
  network_code?: (string | null) | undefined
  network_type?:
    | 'mobile'
    | 'landline'
    | 'landline_premium'
    | 'landline_tollfree'
    | 'virtual'
    | 'unknown'
    | 'pager'
    | 'null'
    | undefined
} | null
type NiRealtimeData = {
  active_status?: string | undefined
  handset_status?: string | undefined
} | null
type NiRoaming = {
  roaming_country_code?: string | undefined
  roaming_network_code?: string | undefined
  roaming_network_name?: string | undefined
  status?: 'roaming' | 'not_roaming' | undefined
} | null
type NiResponseJsonAdvancedSync = {
  caller_identity?: NiCallerIdentity | undefined
  country_code: string
  country_code_iso3: string
  country_name: string
  country_prefix: string
  current_carrier?: NiCurrentCarrierProperties | undefined
  international_format_number: string
  lookup_outcome?: 0 | 1 | 2 | undefined
  lookup_outcome_message?: string | undefined
  national_format_number: string
  original_carrier?: NiInitialCarrierProperties | undefined
  ported?:
    | 'unknown'
    | 'ported'
    | 'not_ported'
    | 'assumed_not_ported'
    | 'assumed_ported'
    | 'null'
    | undefined
  reachable?:
    | 'unknown'
    | 'reachable'
    | 'undeliverable'
    | 'absent'
    | 'bad_number'
    | 'blacklisted'
    | 'null'
    | undefined
  real_time_data?: NiRealtimeData | undefined
  refund_price?: string | undefined
  remaining_balance?: string | undefined
  request_id: string
  request_price?: string | undefined
  roaming?: NiRoaming | undefined
  status: NiStandardAdvancedStatus
  status_message: string
  valid_number?: 'unknown' | 'valid' | 'not_valid' | 'inferred' | 'inferred_not_valid' | undefined
}
type NiResponseJsonAdvancedRoamingUnknown = {
  caller_identity?: NiCallerIdentity | undefined
  country_code: string
  country_code_iso3: string
  country_name: string
  country_prefix: string
  current_carrier?: NiCurrentCarrierProperties | undefined
  international_format_number: string
  lookup_outcome?: 0 | 1 | 2 | undefined
  lookup_outcome_message?: string | undefined
  national_format_number: string
  original_carrier?: NiInitialCarrierProperties | undefined
  ported?:
    | 'unknown'
    | 'ported'
    | 'not_ported'
    | 'assumed_not_ported'
    | 'assumed_ported'
    | 'null'
    | undefined
  reachable?:
    | 'unknown'
    | 'reachable'
    | 'undeliverable'
    | 'absent'
    | 'bad_number'
    | 'blacklisted'
    | 'null'
    | undefined
  refund_price?: string | undefined
  remaining_balance?: string | undefined
  request_id: string
  request_price?: string | undefined
  roaming?: 'unknown' | undefined
  status: NiStandardAdvancedStatus
  status_message: string
  valid_number?: 'unknown' | 'valid' | 'not_valid' | 'inferred' | 'inferred_not_valid' | undefined
}
type NiResponseXmlAdvanced = {
  caller_identity?:
    | {
        'caller-name'?: string | undefined
        'caller-type'?: 'business' | 'consumer' | 'unknown' | undefined
        'first-name'?: string | undefined
        'last-name'?: string | undefined
      }
    | undefined
  caller_name?: string | undefined
  caller_type?: 'business' | 'consumer' | 'unknown' | undefined
  current_carrier?: NiCurrentCarrierProperties | undefined
  error?: { code?: string | undefined; status_text?: string | undefined } | undefined
  firs_name?: string | undefined
  international_format_number?: string | undefined
  ip_warnings?: (string | null) | undefined
  last_name?: string | undefined
  local_number?:
    | {
        country_code?: string | undefined
        country_code_iso3?: string | undefined
        country_name?: string | undefined
        country_prefix?: string | undefined
        number?: string | undefined
      }
    | undefined
  lookup_outcome?:
    | { code?: 0 | 1 | 2 | undefined; lookup_outcome_message?: string | undefined }
    | undefined
  original_carrier?: NiInitialCarrierProperties | undefined
  ported?:
    | ({
        ported_message?:
          | 'unknown'
          | 'ported'
          | 'not_ported'
          | 'assumed_not_ported'
          | 'assumed_ported'
          | undefined
      } | null)
    | undefined
  reachable?:
    | 'unknown'
    | 'reachable'
    | 'undeliverable'
    | 'absent'
    | 'bad_number'
    | 'blacklisted'
    | 'null'
    | undefined
  remaining_balance?: string | undefined
  request_id?: string | undefined
  request_price?: string | undefined
  roaming?: NiRoaming | undefined
  valid_number?: 'unknown' | 'valid' | 'not_valid' | 'inferred_not_valid' | undefined
}
type NiBasicStatus = 0 | 1 | 3 | 4 | 5 | 9
type NiResponseJsonBasic = {
  country_code?: string | undefined
  country_code_iso3?: string | undefined
  country_name?: string | undefined
  country_prefix?: string | undefined
  international_format_number?: string | undefined
  national_format_number?: string | undefined
  request_id?: string | undefined
  status?: NiBasicStatus | undefined
  status_message?: string | undefined
}
type NiResponseXmlBasic = {
  error?: { code?: string | undefined; status_text?: string | undefined } | undefined
  international_format_number?: string | undefined
  local_number?:
    | {
        country_code?: string | undefined
        country_code_iso3?: string | undefined
        country_name?: string | undefined
        country_prefix?: string | undefined
        number?: string | undefined
      }
    | undefined
  request_id?: string | undefined
}
type NiResponseJsonStandard = {
  country_code?: string | undefined
  country_code_iso3?: string | undefined
  country_name?: string | undefined
  country_prefix?: string | undefined
  international_format_number?: string | undefined
  national_format_number?: string | undefined
  request_id?: string | undefined
  status?: NiBasicStatus | undefined
  status_message?: string | undefined
  caller_identity?: NiCallerIdentity | undefined
  caller_name?: string | undefined
  caller_type?: 'business' | 'consumer' | 'unknown' | undefined
  current_carrier?:
    | {
        country?: (string | null) | undefined
        name?: (string | null) | undefined
        network_code?: (string | null) | undefined
        network_type?:
          | 'mobile'
          | 'landline'
          | 'landline_premium'
          | 'landline_tollfree'
          | 'virtual'
          | 'unknown'
          | 'pager'
          | 'null'
          | undefined
      }
    | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  original_carrier?: NiInitialCarrierProperties | undefined
  ported?:
    | 'unknown'
    | 'ported'
    | 'not_ported'
    | 'assumed_not_ported'
    | 'assumed_ported'
    | 'null'
    | undefined
  refund_price?: string | undefined
  remaining_balance?: string | undefined
  request_price?: string | undefined
}
type NiResponseXmlStandard = {
  caller_identity?:
    | {
        'caller-name'?: string | undefined
        'caller-type'?: 'business' | 'consumer' | 'unknown' | undefined
        caller_name?: string | undefined
        caller_type?: 'business' | 'consumer' | 'unknown' | undefined
        firs_name?: string | undefined
        'first-name'?: string | undefined
        'last-name'?: string | undefined
        last_name?: string | undefined
      }
    | undefined
  current_carrier?:
    | {
        country?: (string | null) | undefined
        name?: (string | null) | undefined
        network_code?: (string | null) | undefined
        network_type?:
          | 'mobile'
          | 'landline'
          | 'landline_premium'
          | 'landline_tollfree'
          | 'virtual'
          | 'unknown'
          | 'pager'
          | 'null'
          | undefined
      }
    | undefined
  error?: { code?: string | undefined; status_text?: string | undefined } | undefined
  international_format_number?: string | undefined
  local_number?:
    | {
        country_code?: string | undefined
        country_code_iso3?: string | undefined
        country_name?: string | undefined
        country_prefix?: string | undefined
        number?: string | undefined
      }
    | undefined
  original_carrier?: NiInitialCarrierProperties | undefined
  ported?:
    | ({
        ported_message?:
          | 'unknown'
          | 'ported'
          | 'not_ported'
          | 'assumed_not_ported'
          | 'assumed_ported'
          | undefined
      } | null)
    | undefined
  remaining_balance?: string | undefined
  request_id?: string | undefined
  request_price?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/advanced/async/:format': {
      $get:
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: {
                callback: string
                number: string
                country?: string | undefined
                cnam?: boolean | undefined
                ip?: string | undefined
              }
            }
            output: NiResponseAsync
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: {
                callback: string
                number: string
                country?: string | undefined
                cnam?: boolean | undefined
                ip?: string | undefined
              }
            }
            output: NiResponseAsync
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/advanced/:format': {
      $get:
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: {
                real_time_data?: boolean | undefined
                number: string
                country?: string | undefined
                cnam?: boolean | undefined
                ip?: string | undefined
              }
            }
            output: NiResponseJsonAdvancedSync | NiResponseJsonAdvancedRoamingUnknown
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: {
                real_time_data?: boolean | undefined
                number: string
                country?: string | undefined
                cnam?: boolean | undefined
                ip?: string | undefined
              }
            }
            output: NiResponseXmlAdvanced
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/basic/:format': {
      $get:
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: { number: string; country?: string | undefined }
            }
            output: NiResponseJsonBasic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: { number: string; country?: string | undefined }
            }
            output: NiResponseXmlBasic
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/standard/:format': {
      $get:
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: { number: string; country?: string | undefined; cnam?: boolean | undefined }
            }
            output: NiResponseJsonStandard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { format: 'json' | 'xml' } } & {
              query: { number: string; country?: string | undefined; cnam?: boolean | undefined }
            }
            output: NiResponseXmlStandard
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
