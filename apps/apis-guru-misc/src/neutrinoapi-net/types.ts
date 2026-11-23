type BadWordFilterResponse = {
  'bad-words-list': string[]
  'bad-words-total': number
  'censored-content': string
  'is-bad': boolean
}
type APIError = { apiError: number; apiErrorMsg: string }
type BINLookupResponse = {
  'bin-number': string
  'card-brand': string
  'card-category': string
  'card-type': string
  country: string
  'country-code': string
  'country-code3': string
  'currency-code': string
  'ip-blocklisted': boolean
  'ip-blocklists': string[]
  'ip-city': string
  'ip-country': string
  'ip-country-code': string
  'ip-country-code3': string
  'ip-matches-bin': boolean
  'ip-region': string
  'is-commercial': boolean
  'is-prepaid': boolean
  issuer: string
  'issuer-phone': string
  'issuer-website': string
  valid: boolean
}
type BrowserBotResponse = {
  content: string
  elements: string[]
  'error-message': string
  'exec-results': string[]
  'http-redirect-url': string
  'http-status-code': number
  'http-status-message': string
  'is-error': boolean
  'is-http-ok': boolean
  'is-http-redirect': boolean
  'is-secure': boolean
  'is-timeout': boolean
  'language-code': string
  'load-time': number
  'mime-type': string
  'response-headers': { [x: string]: string }
  'security-details': { [x: string]: string }
  'server-ip': string
  title: string
  url: string
}
type ConvertResponse = {
  'from-type': string
  'from-value': string
  result: string
  'result-float': number
  'to-type': string
  valid: boolean
}
type EmailValidateResponse = {
  domain: string
  'domain-error': boolean
  email: string
  'is-disposable': boolean
  'is-freemail': boolean
  'is-personal': boolean
  provider: string
  'syntax-error': boolean
  'typos-fixed': boolean
  valid: boolean
}
type EmailVerifyResponse = {
  domain: string
  'domain-error': boolean
  email: string
  'is-catch-all': boolean
  'is-deferred': boolean
  'is-disposable': boolean
  'is-freemail': boolean
  'is-personal': boolean
  provider: string
  'smtp-response': string
  'smtp-status': string
  'syntax-error': boolean
  'typos-fixed': boolean
  valid: boolean
  verified: boolean
}
type Timezone = {
  abbr: string
  date: string
  id: string
  name: string
  offset: string
  time: string
}
type Location = {
  address: string
  'address-components': { [x: string]: string }
  city: string
  country: string
  'country-code': string
  'country-code3': string
  'currency-code': string
  latitude: number
  'location-tags': string[]
  'location-type': string
  longitude: number
  'postal-address': string
  'postal-code': string
  'region-code': string
  state: string
  timezone: { [x: string]: Timezone }
}
type GeocodeAddressResponse = { found: number; locations: Location[] }
type GeocodeReverseResponse = {
  address: string
  'address-components': { [x: string]: string }
  city: string
  country: string
  'country-code': string
  'country-code3': string
  'currency-code': string
  found: boolean
  latitude: number
  'location-tags': string[]
  'location-type': string
  longitude: number
  'postal-address': string
  'postal-code': string
  'region-code': string
  state: string
  timezone: { [x: string]: Timezone }
}
type HLRLookupResponse = {
  country: string
  'country-code': string
  'country-code3': string
  'currency-code': string
  'current-network': string
  'hlr-status': string
  'hlr-valid': boolean
  imsi: string
  'international-calling-code': string
  'international-number': string
  'is-mobile': boolean
  'is-ported': boolean
  'is-roaming': boolean
  'local-number': string
  location: string
  mcc: string
  mnc: string
  msc: string
  msin: string
  'number-type': string
  'number-valid': boolean
  'origin-network': string
  'ported-network': string
  'roaming-country-code': string
}
type Blacklist = {
  'is-listed': boolean
  'list-host': string
  'list-name': string
  'list-rating': number
  'response-time': number
  'return-code': string
  'txt-record': string
}
type HostReputationResponse = {
  host: string
  'is-listed': boolean
  'list-count': number
  lists: Blacklist[]
}
type BlocklistSensor = { blocklist: string; description: string; id: number }
type IPBlocklistResponse = {
  blocklists: string[]
  cidr: string
  ip: string
  'is-bot': boolean
  'is-dshield': boolean
  'is-exploit-bot': boolean
  'is-hijacked': boolean
  'is-listed': boolean
  'is-malware': boolean
  'is-proxy': boolean
  'is-spam-bot': boolean
  'is-spider': boolean
  'is-spyware': boolean
  'is-tor': boolean
  'is-vpn': boolean
  'last-seen': number
  'list-count': number
  sensors: BlocklistSensor[]
}
type IPInfoResponse = {
  city: string
  'continent-code': string
  country: string
  'country-code': string
  'country-code3': string
  'currency-code': string
  'host-domain': string
  hostname: string
  ip: string
  'is-bogon': boolean
  'is-v4-mapped': boolean
  'is-v6': boolean
  latitude: number
  longitude: number
  region: string
  'region-code': string
  timezone: { [x: string]: Timezone }
  valid: boolean
}
type IPProbeResponse = {
  'as-age': number
  'as-cidr': string
  'as-country-code': string
  'as-country-code3': string
  'as-description': string
  'as-domains': string[]
  asn: string
  city: string
  'continent-code': string
  country: string
  'country-code': string
  'country-code3': string
  'currency-code': string
  'host-domain': string
  hostname: string
  ip: string
  'is-bogon': boolean
  'is-hosting': boolean
  'is-isp': boolean
  'is-proxy': boolean
  'is-v4-mapped': boolean
  'is-v6': boolean
  'is-vpn': boolean
  'provider-description': string
  'provider-domain': string
  'provider-type': string
  'provider-website': string
  region: string
  'region-code': string
  valid: boolean
  'vpn-domain': string
}
type PhonePlaybackResponse = { calling: boolean; 'number-valid': boolean }
type PhoneValidateResponse = {
  country: string
  'country-code': string
  'country-code3': string
  'currency-code': string
  'international-calling-code': string
  'international-number': string
  'is-mobile': boolean
  'local-number': string
  location: string
  'prefix-network': string
  type: string
  valid: boolean
}
type PhoneVerifyResponse = { calling: boolean; 'number-valid': boolean; 'security-code': string }
type SMSVerifyResponse = { 'number-valid': boolean; 'security-code': string; sent: boolean }
type UALookupResponse = {
  'browser-engine': string
  'browser-release': string
  'device-brand': string
  'device-height-px': number
  'device-model': string
  'device-model-code': string
  'device-pixel-ratio': number
  'device-ppi': number
  'device-price': number
  'device-release': string
  'device-resolution': string
  'device-width-px': number
  'is-mobile': boolean
  'is-webview': boolean
  name: string
  os: string
  'os-family': string
  'os-version': string
  'os-version-major': string
  type: string
  ua: string
  version: string
  'version-major': string
}
type URLInfoResponse = {
  content: string
  'content-encoding': string
  'content-size': number
  'content-type': string
  'http-ok': boolean
  'http-redirect': boolean
  'http-status': number
  'http-status-message': number
  'is-error': boolean
  'is-timeout': boolean
  'language-code': string
  'load-time': number
  query: { [x: string]: string }
  real: boolean
  'server-city': string
  'server-country': string
  'server-country-code': string
  'server-hostname': string
  'server-ip': string
  'server-name': string
  'server-region': string
  title: string
  url: string
  'url-path': string
  'url-port': number
  'url-protocol': string
  valid: boolean
}
type VerifySecurityCodeResponse = { verified: boolean }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bad-word-filter': {
      $post:
        | {
            input: {
              json: {
                catalog?: string | undefined
                'censor-character'?: string | undefined
                content: string
              }
            } & {
              form: {
                catalog?: string | undefined
                'censor-character'?: string | undefined
                content: string
              }
            }
            output: BadWordFilterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                catalog?: string | undefined
                'censor-character'?: string | undefined
                content: string
              }
            } & {
              form: {
                catalog?: string | undefined
                'censor-character'?: string | undefined
                content: string
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                catalog?: string | undefined
                'censor-character'?: string | undefined
                content: string
              }
            } & {
              form: {
                catalog?: string | undefined
                'censor-character'?: string | undefined
                content: string
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                catalog?: string | undefined
                'censor-character'?: string | undefined
                content: string
              }
            } & {
              form: {
                catalog?: string | undefined
                'censor-character'?: string | undefined
                content: string
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                catalog?: string | undefined
                'censor-character'?: string | undefined
                content: string
              }
            } & {
              form: {
                catalog?: string | undefined
                'censor-character'?: string | undefined
                content: string
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bin-list-download': {
      $get:
        | {
            input: {
              query: {
                'include-iso3'?: boolean | undefined
                'include-8digit'?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'include-iso3'?: boolean | undefined
                'include-8digit'?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'include-iso3'?: boolean | undefined
                'include-8digit'?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                'include-iso3'?: boolean | undefined
                'include-8digit'?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                'include-iso3'?: boolean | undefined
                'include-8digit'?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bin-lookup': {
      $get:
        | {
            input: { query: { 'bin-number': string; 'customer-ip'?: string | undefined } }
            output: BINLookupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'bin-number': string; 'customer-ip'?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { 'bin-number': string; 'customer-ip'?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { 'bin-number': string; 'customer-ip'?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { 'bin-number': string; 'customer-ip'?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/browser-bot': {
      $post:
        | {
            input: {
              json: {
                delay?: number | undefined
                exec?: string[] | undefined
                'ignore-certificate-errors'?: boolean | undefined
                selector?: string | undefined
                timeout?: number | undefined
                url: string
                'user-agent'?: string | undefined
              }
            } & {
              form: {
                delay?: number | undefined
                exec?: string[] | undefined
                'ignore-certificate-errors'?: boolean | undefined
                selector?: string | undefined
                timeout?: number | undefined
                url: string
                'user-agent'?: string | undefined
              }
            }
            output: BrowserBotResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                delay?: number | undefined
                exec?: string[] | undefined
                'ignore-certificate-errors'?: boolean | undefined
                selector?: string | undefined
                timeout?: number | undefined
                url: string
                'user-agent'?: string | undefined
              }
            } & {
              form: {
                delay?: number | undefined
                exec?: string[] | undefined
                'ignore-certificate-errors'?: boolean | undefined
                selector?: string | undefined
                timeout?: number | undefined
                url: string
                'user-agent'?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                delay?: number | undefined
                exec?: string[] | undefined
                'ignore-certificate-errors'?: boolean | undefined
                selector?: string | undefined
                timeout?: number | undefined
                url: string
                'user-agent'?: string | undefined
              }
            } & {
              form: {
                delay?: number | undefined
                exec?: string[] | undefined
                'ignore-certificate-errors'?: boolean | undefined
                selector?: string | undefined
                timeout?: number | undefined
                url: string
                'user-agent'?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                delay?: number | undefined
                exec?: string[] | undefined
                'ignore-certificate-errors'?: boolean | undefined
                selector?: string | undefined
                timeout?: number | undefined
                url: string
                'user-agent'?: string | undefined
              }
            } & {
              form: {
                delay?: number | undefined
                exec?: string[] | undefined
                'ignore-certificate-errors'?: boolean | undefined
                selector?: string | undefined
                timeout?: number | undefined
                url: string
                'user-agent'?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                delay?: number | undefined
                exec?: string[] | undefined
                'ignore-certificate-errors'?: boolean | undefined
                selector?: string | undefined
                timeout?: number | undefined
                url: string
                'user-agent'?: string | undefined
              }
            } & {
              form: {
                delay?: number | undefined
                exec?: string[] | undefined
                'ignore-certificate-errors'?: boolean | undefined
                selector?: string | undefined
                timeout?: number | undefined
                url: string
                'user-agent'?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/convert': {
      $get:
        | {
            input: { query: { 'from-value': string; 'from-type': string; 'to-type': string } }
            output: ConvertResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'from-value': string; 'from-type': string; 'to-type': string } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { 'from-value': string; 'from-type': string; 'to-type': string } }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { 'from-value': string; 'from-type': string; 'to-type': string } }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { 'from-value': string; 'from-type': string; 'to-type': string } }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/email-validate': {
      $get:
        | {
            input: { query: { email: string; 'fix-typos'?: boolean | undefined } }
            output: EmailValidateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { email: string; 'fix-typos'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { email: string; 'fix-typos'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { email: string; 'fix-typos'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { email: string; 'fix-typos'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/email-verify': {
      $get:
        | {
            input: { query: { email: string; 'fix-typos'?: boolean | undefined } }
            output: EmailVerifyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { email: string; 'fix-typos'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { email: string; 'fix-typos'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { email: string; 'fix-typos'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { email: string; 'fix-typos'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/geocode-address': {
      $get:
        | {
            input: {
              query: {
                address?: string | undefined
                'house-number'?: string | undefined
                street?: string | undefined
                city?: string | undefined
                county?: string | undefined
                state?: string | undefined
                'postal-code'?: string | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                'fuzzy-search'?: boolean | undefined
              }
            }
            output: GeocodeAddressResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                address?: string | undefined
                'house-number'?: string | undefined
                street?: string | undefined
                city?: string | undefined
                county?: string | undefined
                state?: string | undefined
                'postal-code'?: string | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                'fuzzy-search'?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                address?: string | undefined
                'house-number'?: string | undefined
                street?: string | undefined
                city?: string | undefined
                county?: string | undefined
                state?: string | undefined
                'postal-code'?: string | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                'fuzzy-search'?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                address?: string | undefined
                'house-number'?: string | undefined
                street?: string | undefined
                city?: string | undefined
                county?: string | undefined
                state?: string | undefined
                'postal-code'?: string | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                'fuzzy-search'?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                address?: string | undefined
                'house-number'?: string | undefined
                street?: string | undefined
                city?: string | undefined
                county?: string | undefined
                state?: string | undefined
                'postal-code'?: string | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                'fuzzy-search'?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/geocode-reverse': {
      $get:
        | {
            input: {
              query: {
                latitude: string
                longitude: string
                'language-code'?: string | undefined
                zoom?: string | undefined
              }
            }
            output: GeocodeReverseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                latitude: string
                longitude: string
                'language-code'?: string | undefined
                zoom?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                latitude: string
                longitude: string
                'language-code'?: string | undefined
                zoom?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                latitude: string
                longitude: string
                'language-code'?: string | undefined
                zoom?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                latitude: string
                longitude: string
                'language-code'?: string | undefined
                zoom?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/hlr-lookup': {
      $get:
        | {
            input: { query: { number: string; 'country-code'?: string | undefined } }
            output: HLRLookupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { number: string; 'country-code'?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { number: string; 'country-code'?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { number: string; 'country-code'?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { number: string; 'country-code'?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/host-reputation': {
      $get:
        | {
            input: {
              query: {
                host: string
                'list-rating'?: number | undefined
                zones?: string | undefined
              }
            }
            output: HostReputationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                host: string
                'list-rating'?: number | undefined
                zones?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                host: string
                'list-rating'?: number | undefined
                zones?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                host: string
                'list-rating'?: number | undefined
                zones?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                host: string
                'list-rating'?: number | undefined
                zones?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/html-clean': {
      $post:
        | {
            input: { json: { content: string; 'output-type': string } } & {
              form: { content: string; 'output-type': string }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { content: string; 'output-type': string } } & {
              form: { content: string; 'output-type': string }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { content: string; 'output-type': string } } & {
              form: { content: string; 'output-type': string }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { content: string; 'output-type': string } } & {
              form: { content: string; 'output-type': string }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { content: string; 'output-type': string } } & {
              form: { content: string; 'output-type': string }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/html-render': {
      $post:
        | {
            input: {
              json: {
                content: string
                css?: string | undefined
                delay?: number | undefined
                footer?: string | undefined
                format?: string | undefined
                grayscale?: boolean | undefined
                header?: string | undefined
                'ignore-certificate-errors'?: boolean | undefined
                'image-height'?: number | undefined
                'image-width'?: number | undefined
                landscape?: boolean | undefined
                margin?: number | undefined
                'margin-bottom'?: number | undefined
                'margin-left'?: number | undefined
                'margin-right'?: number | undefined
                'margin-top'?: number | undefined
                'page-height'?: number | undefined
                'page-size'?: string | undefined
                'page-width'?: number | undefined
                timeout?: number | undefined
                title?: string | undefined
                zoom?: number | undefined
              }
            } & {
              form: {
                content: string
                css?: string | undefined
                delay?: number | undefined
                footer?: string | undefined
                format?: string | undefined
                grayscale?: boolean | undefined
                header?: string | undefined
                'ignore-certificate-errors'?: boolean | undefined
                'image-height'?: number | undefined
                'image-width'?: number | undefined
                landscape?: boolean | undefined
                margin?: number | undefined
                'margin-bottom'?: number | undefined
                'margin-left'?: number | undefined
                'margin-right'?: number | undefined
                'margin-top'?: number | undefined
                'page-height'?: number | undefined
                'page-size'?: string | undefined
                'page-width'?: number | undefined
                timeout?: number | undefined
                title?: string | undefined
                zoom?: number | undefined
              }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                content: string
                css?: string | undefined
                delay?: number | undefined
                footer?: string | undefined
                format?: string | undefined
                grayscale?: boolean | undefined
                header?: string | undefined
                'ignore-certificate-errors'?: boolean | undefined
                'image-height'?: number | undefined
                'image-width'?: number | undefined
                landscape?: boolean | undefined
                margin?: number | undefined
                'margin-bottom'?: number | undefined
                'margin-left'?: number | undefined
                'margin-right'?: number | undefined
                'margin-top'?: number | undefined
                'page-height'?: number | undefined
                'page-size'?: string | undefined
                'page-width'?: number | undefined
                timeout?: number | undefined
                title?: string | undefined
                zoom?: number | undefined
              }
            } & {
              form: {
                content: string
                css?: string | undefined
                delay?: number | undefined
                footer?: string | undefined
                format?: string | undefined
                grayscale?: boolean | undefined
                header?: string | undefined
                'ignore-certificate-errors'?: boolean | undefined
                'image-height'?: number | undefined
                'image-width'?: number | undefined
                landscape?: boolean | undefined
                margin?: number | undefined
                'margin-bottom'?: number | undefined
                'margin-left'?: number | undefined
                'margin-right'?: number | undefined
                'margin-top'?: number | undefined
                'page-height'?: number | undefined
                'page-size'?: string | undefined
                'page-width'?: number | undefined
                timeout?: number | undefined
                title?: string | undefined
                zoom?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                content: string
                css?: string | undefined
                delay?: number | undefined
                footer?: string | undefined
                format?: string | undefined
                grayscale?: boolean | undefined
                header?: string | undefined
                'ignore-certificate-errors'?: boolean | undefined
                'image-height'?: number | undefined
                'image-width'?: number | undefined
                landscape?: boolean | undefined
                margin?: number | undefined
                'margin-bottom'?: number | undefined
                'margin-left'?: number | undefined
                'margin-right'?: number | undefined
                'margin-top'?: number | undefined
                'page-height'?: number | undefined
                'page-size'?: string | undefined
                'page-width'?: number | undefined
                timeout?: number | undefined
                title?: string | undefined
                zoom?: number | undefined
              }
            } & {
              form: {
                content: string
                css?: string | undefined
                delay?: number | undefined
                footer?: string | undefined
                format?: string | undefined
                grayscale?: boolean | undefined
                header?: string | undefined
                'ignore-certificate-errors'?: boolean | undefined
                'image-height'?: number | undefined
                'image-width'?: number | undefined
                landscape?: boolean | undefined
                margin?: number | undefined
                'margin-bottom'?: number | undefined
                'margin-left'?: number | undefined
                'margin-right'?: number | undefined
                'margin-top'?: number | undefined
                'page-height'?: number | undefined
                'page-size'?: string | undefined
                'page-width'?: number | undefined
                timeout?: number | undefined
                title?: string | undefined
                zoom?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                content: string
                css?: string | undefined
                delay?: number | undefined
                footer?: string | undefined
                format?: string | undefined
                grayscale?: boolean | undefined
                header?: string | undefined
                'ignore-certificate-errors'?: boolean | undefined
                'image-height'?: number | undefined
                'image-width'?: number | undefined
                landscape?: boolean | undefined
                margin?: number | undefined
                'margin-bottom'?: number | undefined
                'margin-left'?: number | undefined
                'margin-right'?: number | undefined
                'margin-top'?: number | undefined
                'page-height'?: number | undefined
                'page-size'?: string | undefined
                'page-width'?: number | undefined
                timeout?: number | undefined
                title?: string | undefined
                zoom?: number | undefined
              }
            } & {
              form: {
                content: string
                css?: string | undefined
                delay?: number | undefined
                footer?: string | undefined
                format?: string | undefined
                grayscale?: boolean | undefined
                header?: string | undefined
                'ignore-certificate-errors'?: boolean | undefined
                'image-height'?: number | undefined
                'image-width'?: number | undefined
                landscape?: boolean | undefined
                margin?: number | undefined
                'margin-bottom'?: number | undefined
                'margin-left'?: number | undefined
                'margin-right'?: number | undefined
                'margin-top'?: number | undefined
                'page-height'?: number | undefined
                'page-size'?: string | undefined
                'page-width'?: number | undefined
                timeout?: number | undefined
                title?: string | undefined
                zoom?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                content: string
                css?: string | undefined
                delay?: number | undefined
                footer?: string | undefined
                format?: string | undefined
                grayscale?: boolean | undefined
                header?: string | undefined
                'ignore-certificate-errors'?: boolean | undefined
                'image-height'?: number | undefined
                'image-width'?: number | undefined
                landscape?: boolean | undefined
                margin?: number | undefined
                'margin-bottom'?: number | undefined
                'margin-left'?: number | undefined
                'margin-right'?: number | undefined
                'margin-top'?: number | undefined
                'page-height'?: number | undefined
                'page-size'?: string | undefined
                'page-width'?: number | undefined
                timeout?: number | undefined
                title?: string | undefined
                zoom?: number | undefined
              }
            } & {
              form: {
                content: string
                css?: string | undefined
                delay?: number | undefined
                footer?: string | undefined
                format?: string | undefined
                grayscale?: boolean | undefined
                header?: string | undefined
                'ignore-certificate-errors'?: boolean | undefined
                'image-height'?: number | undefined
                'image-width'?: number | undefined
                landscape?: boolean | undefined
                margin?: number | undefined
                'margin-bottom'?: number | undefined
                'margin-left'?: number | undefined
                'margin-right'?: number | undefined
                'margin-top'?: number | undefined
                'page-height'?: number | undefined
                'page-size'?: string | undefined
                'page-width'?: number | undefined
                timeout?: number | undefined
                title?: string | undefined
                zoom?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/image-resize': {
      $post:
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                'resize-mode'?: string | undefined
                width: number
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                'resize-mode'?: string | undefined
                width: number
              }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                'resize-mode'?: string | undefined
                width: number
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                'resize-mode'?: string | undefined
                width: number
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                'resize-mode'?: string | undefined
                width: number
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                'resize-mode'?: string | undefined
                width: number
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                'resize-mode'?: string | undefined
                width: number
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                'resize-mode'?: string | undefined
                width: number
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                'resize-mode'?: string | undefined
                width: number
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                'resize-mode'?: string | undefined
                width: number
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/image-watermark': {
      $post:
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                opacity?: number | undefined
                position?: string | undefined
                'resize-mode'?: string | undefined
                'watermark-url': string
                width?: number | undefined
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                opacity?: number | undefined
                position?: string | undefined
                'resize-mode'?: string | undefined
                'watermark-url': string
                width?: number | undefined
              }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                opacity?: number | undefined
                position?: string | undefined
                'resize-mode'?: string | undefined
                'watermark-url': string
                width?: number | undefined
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                opacity?: number | undefined
                position?: string | undefined
                'resize-mode'?: string | undefined
                'watermark-url': string
                width?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                opacity?: number | undefined
                position?: string | undefined
                'resize-mode'?: string | undefined
                'watermark-url': string
                width?: number | undefined
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                opacity?: number | undefined
                position?: string | undefined
                'resize-mode'?: string | undefined
                'watermark-url': string
                width?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                opacity?: number | undefined
                position?: string | undefined
                'resize-mode'?: string | undefined
                'watermark-url': string
                width?: number | undefined
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                opacity?: number | undefined
                position?: string | undefined
                'resize-mode'?: string | undefined
                'watermark-url': string
                width?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                opacity?: number | undefined
                position?: string | undefined
                'resize-mode'?: string | undefined
                'watermark-url': string
                width?: number | undefined
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                format?: string | undefined
                height?: number | undefined
                'image-url': string
                opacity?: number | undefined
                position?: string | undefined
                'resize-mode'?: string | undefined
                'watermark-url': string
                width?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ip-blocklist': {
      $get:
        | {
            input: { query: { ip: string; 'vpn-lookup'?: boolean | undefined } }
            output: IPBlocklistResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ip: string; 'vpn-lookup'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { ip: string; 'vpn-lookup'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ip: string; 'vpn-lookup'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { ip: string; 'vpn-lookup'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ip-blocklist-download': {
      $get:
        | {
            input: {
              query: {
                format?: string | undefined
                'include-vpn'?: boolean | undefined
                cidr?: boolean | undefined
                ip6?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: string | undefined
                'include-vpn'?: boolean | undefined
                cidr?: boolean | undefined
                ip6?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                format?: string | undefined
                'include-vpn'?: boolean | undefined
                cidr?: boolean | undefined
                ip6?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                format?: string | undefined
                'include-vpn'?: boolean | undefined
                cidr?: boolean | undefined
                ip6?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                format?: string | undefined
                'include-vpn'?: boolean | undefined
                cidr?: boolean | undefined
                ip6?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ip-info': {
      $get:
        | {
            input: { query: { ip: string; 'reverse-lookup'?: boolean | undefined } }
            output: IPInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ip: string; 'reverse-lookup'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { ip: string; 'reverse-lookup'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ip: string; 'reverse-lookup'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { ip: string; 'reverse-lookup'?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ip-probe': {
      $get:
        | {
            input: { query: { ip: string } }
            output: IPProbeResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { ip: string } }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { query: { ip: string } }; output: APIError; outputFormat: 'json'; status: 403 }
        | { input: { query: { ip: string } }; output: APIError; outputFormat: 'json'; status: 500 }
        | { input: { query: { ip: string } }; output: APIError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/phone-playback': {
      $post:
        | {
            input: {
              json: {
                'audio-url': string
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
              }
            } & {
              form: {
                'audio-url': string
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
              }
            }
            output: PhonePlaybackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                'audio-url': string
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
              }
            } & {
              form: {
                'audio-url': string
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                'audio-url': string
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
              }
            } & {
              form: {
                'audio-url': string
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                'audio-url': string
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
              }
            } & {
              form: {
                'audio-url': string
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                'audio-url': string
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
              }
            } & {
              form: {
                'audio-url': string
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone-validate': {
      $get:
        | {
            input: {
              query: {
                number: string
                'country-code'?: string | undefined
                ip?: string | undefined
              }
            }
            output: PhoneValidateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                number: string
                'country-code'?: string | undefined
                ip?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                number: string
                'country-code'?: string | undefined
                ip?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                number: string
                'country-code'?: string | undefined
                ip?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                number: string
                'country-code'?: string | undefined
                ip?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/phone-verify': {
      $post:
        | {
            input: {
              json: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'playback-delay'?: number | undefined
                'security-code'?: number | undefined
              }
            } & {
              form: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'playback-delay'?: number | undefined
                'security-code'?: number | undefined
              }
            }
            output: PhoneVerifyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'playback-delay'?: number | undefined
                'security-code'?: number | undefined
              }
            } & {
              form: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'playback-delay'?: number | undefined
                'security-code'?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'playback-delay'?: number | undefined
                'security-code'?: number | undefined
              }
            } & {
              form: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'playback-delay'?: number | undefined
                'security-code'?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'playback-delay'?: number | undefined
                'security-code'?: number | undefined
              }
            } & {
              form: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'playback-delay'?: number | undefined
                'security-code'?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'playback-delay'?: number | undefined
                'security-code'?: number | undefined
              }
            } & {
              form: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'playback-delay'?: number | undefined
                'security-code'?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/qr-code': {
      $post:
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                content: string
                'fg-color'?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                content: string
                'fg-color'?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                content: string
                'fg-color'?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                content: string
                'fg-color'?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                content: string
                'fg-color'?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                content: string
                'fg-color'?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                content: string
                'fg-color'?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                content: string
                'fg-color'?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                'bg-color'?: string | undefined
                content: string
                'fg-color'?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            } & {
              form: {
                'bg-color'?: string | undefined
                content: string
                'fg-color'?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sms-verify': {
      $post:
        | {
            input: {
              json: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'security-code'?: number | undefined
              }
            } & {
              form: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'security-code'?: number | undefined
              }
            }
            output: SMSVerifyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'security-code'?: number | undefined
              }
            } & {
              form: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'security-code'?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'security-code'?: number | undefined
              }
            } & {
              form: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'security-code'?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'security-code'?: number | undefined
              }
            } & {
              form: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'security-code'?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'security-code'?: number | undefined
              }
            } & {
              form: {
                'code-length'?: number | undefined
                'country-code'?: string | undefined
                'language-code'?: string | undefined
                limit?: number | undefined
                'limit-ttl'?: number | undefined
                number: string
                'security-code'?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ua-lookup': {
      $get:
        | {
            input: {
              query: {
                ua: string
                'ua-version'?: string | undefined
                'ua-platform'?: string | undefined
                'ua-platform-version'?: string | undefined
                'ua-mobile'?: string | undefined
                'device-model'?: string | undefined
                'device-brand'?: string | undefined
              }
            }
            output: UALookupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ua: string
                'ua-version'?: string | undefined
                'ua-platform'?: string | undefined
                'ua-platform-version'?: string | undefined
                'ua-mobile'?: string | undefined
                'device-model'?: string | undefined
                'device-brand'?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ua: string
                'ua-version'?: string | undefined
                'ua-platform'?: string | undefined
                'ua-platform-version'?: string | undefined
                'ua-mobile'?: string | undefined
                'device-model'?: string | undefined
                'device-brand'?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ua: string
                'ua-version'?: string | undefined
                'ua-platform'?: string | undefined
                'ua-platform-version'?: string | undefined
                'ua-mobile'?: string | undefined
                'device-model'?: string | undefined
                'device-brand'?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ua: string
                'ua-version'?: string | undefined
                'ua-platform'?: string | undefined
                'ua-platform-version'?: string | undefined
                'ua-mobile'?: string | undefined
                'device-model'?: string | undefined
                'device-brand'?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/url-info': {
      $get:
        | {
            input: {
              query: {
                url: string
                'fetch-content'?: boolean | undefined
                'ignore-certificate-errors'?: boolean | undefined
                timeout?: number | undefined
                retry?: number | undefined
              }
            }
            output: URLInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                url: string
                'fetch-content'?: boolean | undefined
                'ignore-certificate-errors'?: boolean | undefined
                timeout?: number | undefined
                retry?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                url: string
                'fetch-content'?: boolean | undefined
                'ignore-certificate-errors'?: boolean | undefined
                timeout?: number | undefined
                retry?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                url: string
                'fetch-content'?: boolean | undefined
                'ignore-certificate-errors'?: boolean | undefined
                timeout?: number | undefined
                retry?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                url: string
                'fetch-content'?: boolean | undefined
                'ignore-certificate-errors'?: boolean | undefined
                timeout?: number | undefined
                retry?: number | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/verify-security-code': {
      $get:
        | {
            input: { query: { 'security-code': string; 'limit-by'?: string | undefined } }
            output: VerifySecurityCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'security-code': string; 'limit-by'?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { 'security-code': string; 'limit-by'?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { 'security-code': string; 'limit-by'?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { 'security-code': string; 'limit-by'?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
