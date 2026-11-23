declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/company/announcement/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: {
              countryCode?: string | undefined
              id?: string | undefined
              registrationNumber?: string | undefined
              structured?: string | undefined
              text?: string | undefined
              time?: string | undefined
              type?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/deepsearch/isin': {
      $post:
        | {
            input: { json: { isin?: string | undefined } } & { form: { isin?: string | undefined } }
            output: {
              isin?: string | undefined
              listings?:
                | {
                    additionalSecurityType?: string | undefined
                    exchCode?: string | undefined
                    identifier?: string | undefined
                    marketSector?: string | undefined
                    name?: string | undefined
                    securityDescription?: string | undefined
                    securityType?: string | undefined
                    shareClassId?: string | undefined
                    stockId?: string | undefined
                    symbol?: string | undefined
                  }[]
                | undefined
              validIsin?: boolean | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { isin?: string | undefined } } & { form: { isin?: string | undefined } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/deepsearch/lei/:number': {
      $get:
        | {
            input: { param: { number: string } } & { query: { page?: number | undefined } }
            output: {
              company?:
                | {
                    address?: string[] | undefined
                    country: string
                    dateOfIncorporation?: string | undefined
                    extraData?: { [x: string]: unknown } | undefined
                    formattedAddress?: string[] | undefined
                    id: string
                    legalForm?: string | undefined
                    managingDirectors?: string[] | undefined
                    name: string
                    registrationNumber: string
                    requestTime?: number | undefined
                    secretaries?: string[] | undefined
                    sicNaceCodes?: string[] | undefined
                    status?: string | undefined
                  }
                | undefined
              current_page?: number | undefined
              isins?: string[] | undefined
              last_page?: number | undefined
              lei?: string | undefined
              next_page?: string | undefined
              total_num_isins?: number | undefined
              validLei?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number: string } } & { query: { page?: number | undefined } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/deepsearch/name/:country/:name': {
      $get:
        | {
            input: { param: { country: string; name: string } }
            output: {
              address?: string[] | undefined
              country?: string | undefined
              dateOfIncorporation?: string | undefined
              extraData?: { [x: string]: unknown } | undefined
              formattedAddress?: string[] | undefined
              id?: string | undefined
              legalForm?: string | undefined
              managingDirectors?: string[] | undefined
              name?: string | undefined
              registrationNumber?: string | undefined
              requestTime?: number | undefined
              secretaries?: string[] | undefined
              sicNaceCodes?: string[] | undefined
              status?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string; name: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/deepsearch/number/:country/:number': {
      $get:
        | {
            input: { param: { country: string; number: string } }
            output: {
              address?: string[] | undefined
              country?: string | undefined
              dateOfIncorporation?: string | undefined
              extraData?: { [x: string]: unknown } | undefined
              formattedAddress?: string[] | undefined
              id?: string | undefined
              legalForm?: string | undefined
              managingDirectors?: string[] | undefined
              name?: string | undefined
              registrationNumber?: string | undefined
              requestTime?: number | undefined
              secretaries?: string[] | undefined
              sicNaceCodes?: string[] | undefined
              status?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string; number: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/monitoring/changeTypes': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/monitoring/list': {
      $get:
        | {
            input: {}
            output: {
              callbackCount?: number | undefined
              callbackUrl?: string | undefined
              created?: string | undefined
              monitorStatus?: string | undefined
              notificationId?: string | undefined
              subjectId?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/monitoring/list/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: {
              callbackCount?: number | undefined
              callbackUrl?: string | undefined
              created?: string | undefined
              monitorStatus?: string | undefined
              notificationId?: string | undefined
              subjectId?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/monitoring/register/:id': {
      $post:
        | {
            input: { param: { id: string } } & {
              json: { callbackUrl: string; changeType: string }
            } & { form: { callbackUrl: string; changeType: string } }
            output: { monitorStatus: string; notificationId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { callbackUrl: string; changeType: string }
            } & { form: { callbackUrl: string; changeType: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/monitoring/unregister/:id': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/notification/list': {
      $get:
        | {
            input: {}
            output: {
              callbackCount?: number | undefined
              callbackUrl?: string | undefined
              created?: string | undefined
              monitorStatus?: string | undefined
              notificationId?: string | undefined
              subjectId?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/notification/list/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: {
              callbackCount?: number | undefined
              callbackUrl?: string | undefined
              created?: string | undefined
              monitorStatus?: string | undefined
              notificationId?: string | undefined
              subjectId?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/notification/register/:id': {
      $post:
        | {
            input: { param: { id: string } } & { json: { callbackUrl: string } } & {
              form: { callbackUrl: string }
            }
            output: { monitorStatus: string; notificationId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { callbackUrl: string } } & {
              form: { callbackUrl: string }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/notification/unregister/:id': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/search/name/:country/:name': {
      $get:
        | {
            input: { param: { country: string; name: string } } & {
              query: { limit?: bigint | undefined }
            }
            output: {
              address?: string[] | undefined
              country?: string | undefined
              dateOfIncorporation?: string | undefined
              extraData?: { [x: string]: unknown } | undefined
              formattedAddress?: string[] | undefined
              id?: string | undefined
              legalForm?: string | undefined
              managingDirectors?: string[] | undefined
              name?: string | undefined
              registrationNumber?: string | undefined
              requestTime?: number | undefined
              secretaries?: string[] | undefined
              sicNaceCodes?: string[] | undefined
              status?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string; name: string } } & {
              query: { limit?: bigint | undefined }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/search/number/:country/:number': {
      $get:
        | {
            input: { param: { country: string; number: string } } & {
              query: { limit?: bigint | undefined }
            }
            output: {
              address?: string[] | undefined
              country?: string | undefined
              dateOfIncorporation?: string | undefined
              extraData?: { [x: string]: unknown } | undefined
              formattedAddress?: string[] | undefined
              id?: string | undefined
              legalForm?: string | undefined
              managingDirectors?: string[] | undefined
              name?: string | undefined
              registrationNumber?: string | undefined
              requestTime?: number | undefined
              secretaries?: string[] | undefined
              sicNaceCodes?: string[] | undefined
              status?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string; number: string } } & {
              query: { limit?: bigint | undefined }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/search/:country': {
      $post:
        | {
            input: { param: { country: string } } & {
              json: {
                address?: string | undefined
                name?: string | undefined
                number?: string | undefined
                phone?: string | undefined
                url?: string | undefined
                vat?: string | undefined
              }
            } & {
              form: {
                address?: string | undefined
                name?: string | undefined
                number?: string | undefined
                phone?: string | undefined
                url?: string | undefined
                vat?: string | undefined
              }
            }
            output: {
              address?: string[] | undefined
              country?: string | undefined
              dateOfIncorporation?: string | undefined
              extraData?: { [x: string]: unknown } | undefined
              formattedAddress?: string[] | undefined
              id?: string | undefined
              legalForm?: string | undefined
              managingDirectors?: string[] | undefined
              name?: string | undefined
              registrationNumber?: string | undefined
              requestTime?: number | undefined
              secretaries?: string[] | undefined
              sicNaceCodes?: string[] | undefined
              status?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string } } & {
              json: {
                address?: string | undefined
                name?: string | undefined
                number?: string | undefined
                phone?: string | undefined
                url?: string | undefined
                vat?: string | undefined
              }
            } & {
              form: {
                address?: string | undefined
                name?: string | undefined
                number?: string | undefined
                phone?: string | undefined
                url?: string | undefined
                vat?: string | undefined
              }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/:id/announcements': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                data?: boolean | undefined
              }
            }
            output: {
              countryCode?: string | undefined
              id?: string | undefined
              registrationNumber?: string | undefined
              structured?: string | undefined
              text?: string | undefined
              time?: string | undefined
              type?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                data?: boolean | undefined
              }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/:id/super/:country': {
      $get:
        | {
            input: { param: { id: string; country: string } } & {
              query: { lang?: '' | 'OG' | 'EN' | undefined }
            }
            output: {
              address?: string[] | undefined
              country?: string | undefined
              dateOfIncorporation?: string | undefined
              extraData?: { [x: string]: unknown } | undefined
              formattedAddress?: string[] | undefined
              id?: string | undefined
              legalForm?: string | undefined
              managingDirectors?: string[] | undefined
              name?: string | undefined
              registrationNumber?: string | undefined
              requestTime?: number | undefined
              secretaries?: string[] | undefined
              sicNaceCodes?: string[] | undefined
              status?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; country: string } } & {
              query: { lang?: '' | 'OG' | 'EN' | undefined }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company/:id/:dataset': {
      $get:
        | {
            input: {
              param: { id: string; dataset: '' | 'mini' | 'master' | 'full' | 'refresh' }
            } & {
              query: {
                check_stock_listing?: boolean | undefined
                lang?: '' | 'EN' | 'ES' | 'FR' | undefined
              }
            }
            output: {
              address?: string[] | undefined
              country: string
              dateOfIncorporation?: string | undefined
              extraData?: { [x: string]: unknown } | undefined
              formattedAddress?: string[] | undefined
              id: string
              legalForm?: string | undefined
              managingDirectors?: string[] | undefined
              name: string
              registrationNumber: string
              requestTime?: number | undefined
              secretaries?: string[] | undefined
              sicNaceCodes?: string[] | undefined
              status?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { id: string; dataset: '' | 'mini' | 'master' | 'full' | 'refresh' }
            } & {
              query: {
                check_stock_listing?: boolean | undefined
                lang?: '' | 'EN' | 'ES' | 'FR' | undefined
              }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/ein-verification/basic-check': {
      $get:
        | {
            input: { query: { ein: string } }
            output: {
              confidence_score: string
              confidence_score_explanation: string
              dba_score: string
              dba_score_explanation: string
              ein: string
              irs_score: string
              irs_score_explanation: string
              timestamp: number
              validationStatus: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ein: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/ein-verification/comprehensive-check': {
      $get:
        | {
            input: { query: { ein: string } }
            output: {
              ein: string
              matched_ein_companies: {
                address?: string[] | undefined
                company_score?: number | undefined
                company_score_explanation?: string | undefined
                confidence_score?: number | undefined
                confidence_score_explanation?: string | undefined
                dba_score?: string | undefined
                dba_score_explanation?: string | undefined
                ein?: string | undefined
                formattedAddress?: string[] | undefined
                irs_score?: string | undefined
                irs_score_explanation?: string | undefined
                name?: string | undefined
                provided_status?: string | undefined
                provided_status_explanation?: string | undefined
              }[]
              timestamp: number
              validationStatus: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ein: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/ein-verification/lookup': {
      $get:
        | {
            input: {
              query: {
                name: string
                state?: string | undefined
                zip?: string | undefined
                tight?: boolean | undefined
              }
            }
            output: {
              matched_ein_companies?:
                | {
                    address?: string[] | undefined
                    company_score?: number | undefined
                    company_score_explanation?: string | undefined
                    confidence_score?: number | undefined
                    confidence_score_explanation?: string | undefined
                    dba_score?: string | undefined
                    dba_score_explanation?: string | undefined
                    ein?: string | undefined
                    formattedAddress?: string[] | undefined
                    irs_score?: string | undefined
                    irs_score_explanation?: string | undefined
                    name?: string | undefined
                    provided_status?: string | undefined
                    provided_status_explanation?: string | undefined
                  }[]
                | undefined
              searchterm_name: string
              searchterm_state: string
              searchterm_zip: string
              tight_search: boolean
              timestamp: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                state?: string | undefined
                zip?: string | undefined
                tight?: boolean | undefined
              }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/iban-verification/check-iban': {
      $post:
        | {
            input: { json: { ibanNumber: string } } & { form: { ibanNumber: string } }
            output: { valid: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { ibanNumber: string } } & { form: { ibanNumber: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/iban-verification/comprehensive-check-iban': {
      $post:
        | {
            input: { json: { ibanNumber: string } } & { form: { ibanNumber: string } }
            output: { valid: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { ibanNumber: string } } & { form: { ibanNumber: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/nif-verification/basic-check/:country': {
      $post:
        | {
            input: { param: { country: string } } & {
              json: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                nifNumber: string
              }
            } & {
              form: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                nifNumber: string
              }
            }
            output: {
              companyName?: string | undefined
              confidenceScore: number
              nifNumber: number
              validationStatus: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string } } & {
              json: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                nifNumber: string
              }
            } & {
              form: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                nifNumber: string
              }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/nif-verification/comprehensive-check/:country': {
      $post:
        | {
            input: { param: { country: string } } & {
              json: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                nifNumber: string
              }
            } & {
              form: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                nifNumber: string
              }
            }
            output: {
              activity?: { [x: string]: unknown } | undefined
              address?: string | undefined
              capital?: number | undefined
              companyName?: string | undefined
              confidenceScore: number
              currency?: string | undefined
              email?: string | undefined
              fax?: string | undefined
              geo?: string | undefined
              legalType?: string | undefined
              nifNumber: number
              phone?: string | undefined
              status?: { [x: string]: unknown } | undefined
              validationStatus: boolean
              website?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string } } & {
              json: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                nifNumber: string
              }
            } & {
              form: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                nifNumber: string
              }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/pepsanction/monitor/list': {
      $get:
        | {
            input: {}
            output: {
              active?: boolean | undefined
              caseId?: string | undefined
              created?: string | undefined
              identifier?: string | undefined
              structured?: string | undefined
              updated?: string | undefined
              webhook?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/pepsanction/monitor/unregister/:id': {
      $post:
        | {
            input: { param: { id: string } }
            output: {
              active?: boolean | undefined
              caseId?: string | undefined
              created?: string | undefined
              identifier?: string | undefined
              structured?: string | undefined
              updated?: string | undefined
              webhook?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/pepsanction/monitor/update/:id': {
      $post:
        | {
            input: { param: { id: string } } & { json: { Webhook?: string | undefined } } & {
              form: { Webhook?: string | undefined }
            }
            output: {
              active?: boolean | undefined
              caseId?: string | undefined
              created?: string | undefined
              identifier?: string | undefined
              structured?: string | undefined
              updated?: string | undefined
              webhook?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { Webhook?: string | undefined } } & {
              form: { Webhook?: string | undefined }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/pepsanction/order/:type/:search': {
      $post:
        | {
            input: { param: { type: '' | 'B' | 'P'; search: string } } & {
              json: {
                Aliases?: string | undefined
                Country?: string | undefined
                DOB?: string | undefined
                FamilyName?: string | undefined
                Filters?: string | undefined
                GivenName?: string | undefined
                LEI?: string | undefined
                Locale?: string | undefined
                Medialists?: string | undefined
                MiddleName?: string | undefined
                Monitoring?: boolean | undefined
                Peplists?: string | undefined
                Region?: string | undefined
                SmartMatch?: boolean | undefined
                Watchlists?: string | undefined
                Webhook?: string | undefined
              }
            } & {
              form: {
                Aliases?: string | undefined
                Country?: string | undefined
                DOB?: string | undefined
                FamilyName?: string | undefined
                Filters?: string | undefined
                GivenName?: string | undefined
                LEI?: string | undefined
                Locale?: string | undefined
                Medialists?: string | undefined
                MiddleName?: string | undefined
                Monitoring?: boolean | undefined
                Peplists?: string | undefined
                Region?: string | undefined
                SmartMatch?: boolean | undefined
                Watchlists?: string | undefined
                Webhook?: string | undefined
              }
            }
            output: {
              availability: string
              category: string
              countryCode: string
              description: string
              hasOptions: boolean
              options: string[]
              price: number
              provider: string
              sku: string
              type: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: '' | 'B' | 'P'; search: string } } & {
              json: {
                Aliases?: string | undefined
                Country?: string | undefined
                DOB?: string | undefined
                FamilyName?: string | undefined
                Filters?: string | undefined
                GivenName?: string | undefined
                LEI?: string | undefined
                Locale?: string | undefined
                Medialists?: string | undefined
                MiddleName?: string | undefined
                Monitoring?: boolean | undefined
                Peplists?: string | undefined
                Region?: string | undefined
                SmartMatch?: boolean | undefined
                Watchlists?: string | undefined
                Webhook?: string | undefined
              }
            } & {
              form: {
                Aliases?: string | undefined
                Country?: string | undefined
                DOB?: string | undefined
                FamilyName?: string | undefined
                Filters?: string | undefined
                GivenName?: string | undefined
                LEI?: string | undefined
                Locale?: string | undefined
                Medialists?: string | undefined
                MiddleName?: string | undefined
                Monitoring?: boolean | undefined
                Peplists?: string | undefined
                Region?: string | undefined
                SmartMatch?: boolean | undefined
                Watchlists?: string | undefined
                Webhook?: string | undefined
              }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/pepsanction/retrieve/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { accept?: 'application/json' | 'application/pdf' | undefined }
            }
            output: {
              listsChecked: string
              results?:
                | {
                    Excerpts?: string | undefined
                    ResultsURL?: string | undefined
                    SearchType?: string | undefined
                    SourceAgency?: string | undefined
                    SourceEntity?: string | undefined
                    SourceID?: bigint | undefined
                    SourceName?: string | undefined
                    SourceType?: string | undefined
                  }
                | undefined
              search: string
              status: string
              timestamp: string
              type: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { accept?: 'application/json' | 'application/pdf' | undefined }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/product/availability/:sku/:subjectId': {
      $get:
        | {
            input: { param: { sku: string; subjectId: string } }
            output: {
              availability: string
              category: string
              countryCode: string
              description: string
              hasOptions: boolean
              options: string[]
              price: number
              provider: string
              sku: string
              type: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; subjectId: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/product/catalog/:country': {
      $get:
        | {
            input: { param: { country: string } }
            output: {
              countryCode?: string | undefined
              description?: string | undefined
              form?: string | undefined
              method?: string | undefined
              name?: string | undefined
              price?: number | undefined
              sku?: string | undefined
              url: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/product/notifier/:notifierId': {
      $get:
        | {
            input: { param: { notifierId: string } }
            output: {
              callback: string
              identity?: string | undefined
              lastCallTime: string
              lastResponseCode: number
              notifierType: string
              productOrderIdentity: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { notifierId: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/product/notifier/:orderId/:type/:uri': {
      $post:
        | {
            input: { param: { orderId: string; type: string; uri: string } }
            output: {
              callback: string
              identity?: string | undefined
              lastCallTime: string
              lastResponseCode: number
              notifierType: string
              productOrderIdentity: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: string; type: string; uri: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/product/order/concierge': {
      $post:
        | {
            input: {
              json: {
                companyName?: string | undefined
                contactEmail?: string | undefined
                contactPhone?: string | undefined
                costConfirmation?: boolean | undefined
                country?: string | undefined
                financialData?: boolean | undefined
                historicInformation?: boolean | undefined
                informationRequirements?: string | undefined
                locationInvestigation?: boolean | undefined
                priority?: string | undefined
                registerData?: boolean | undefined
                registerNumber?: string | undefined
                subjectId?: string | undefined
              }
            } & {
              form: {
                companyName?: string | undefined
                contactEmail?: string | undefined
                contactPhone?: string | undefined
                costConfirmation?: boolean | undefined
                country?: string | undefined
                financialData?: boolean | undefined
                historicInformation?: boolean | undefined
                informationRequirements?: string | undefined
                locationInvestigation?: boolean | undefined
                priority?: string | undefined
                registerData?: boolean | undefined
                registerNumber?: string | undefined
                subjectId?: string | undefined
              }
            }
            output: {
              identity: string
              option: string
              ordered: string
              owner: string
              price: number
              sku: string
              status: string
              subjectId: string
              subjectValue: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                companyName?: string | undefined
                contactEmail?: string | undefined
                contactPhone?: string | undefined
                costConfirmation?: boolean | undefined
                country?: string | undefined
                financialData?: boolean | undefined
                historicInformation?: boolean | undefined
                informationRequirements?: string | undefined
                locationInvestigation?: boolean | undefined
                priority?: string | undefined
                registerData?: boolean | undefined
                registerNumber?: string | undefined
                subjectId?: string | undefined
              }
            } & {
              form: {
                companyName?: string | undefined
                contactEmail?: string | undefined
                contactPhone?: string | undefined
                costConfirmation?: boolean | undefined
                country?: string | undefined
                financialData?: boolean | undefined
                historicInformation?: boolean | undefined
                informationRequirements?: string | undefined
                locationInvestigation?: boolean | undefined
                priority?: string | undefined
                registerData?: boolean | undefined
                registerNumber?: string | undefined
                subjectId?: string | undefined
              }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/product/order/ubo': {
      $post:
        | {
            input: {
              json: {
                callbackUrl?: string | undefined
                credits?: number | undefined
                includeDocs?: boolean | undefined
                levels?: string | undefined
                strategy?: string | undefined
                subjectId: string
              }
            } & {
              form: {
                callbackUrl?: string | undefined
                credits?: number | undefined
                includeDocs?: boolean | undefined
                levels?: string | undefined
                strategy?: string | undefined
                subjectId: string
              }
            }
            output: {
              identity: string
              option: string
              ordered: string
              owner: string
              price: number
              sku: string
              status: string
              subjectId: string
              subjectValue: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                callbackUrl?: string | undefined
                credits?: number | undefined
                includeDocs?: boolean | undefined
                levels?: string | undefined
                strategy?: string | undefined
                subjectId: string
              }
            } & {
              form: {
                callbackUrl?: string | undefined
                credits?: number | undefined
                includeDocs?: boolean | undefined
                levels?: string | undefined
                strategy?: string | undefined
                subjectId: string
              }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/product/order/:sku/:option/:subjectId': {
      $post:
        | {
            input: { param: { sku: string; option: string; subjectId: string } }
            output: {
              identity: string
              option: string
              ordered: string
              owner: string
              price: number
              sku: string
              status: string
              subjectId: string
              subjectValue: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; option: string; subjectId: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/product/order/:sku/:subjectId': {
      $post:
        | {
            input: { param: { sku: string; subjectId: string } }
            output: {
              identity: string
              option: string
              ordered: string
              owner: string
              price: number
              sku: string
              status: string
              subjectId: string
              subjectValue: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sku: string; subjectId: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/product/search/:subjectId': {
      $get:
        | {
            input: { param: { subjectId: string } }
            output: {
              availability?: string | undefined
              category?: string | undefined
              countryCode?: string | undefined
              description?: string | undefined
              hasOptions?: boolean | undefined
              options?: string[] | undefined
              price?: number | undefined
              provider?: string | undefined
              sku?: string | undefined
              type?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subjectId: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/product/status/:orderId': {
      $get:
        | {
            input: { param: { orderId: string } }
            output: {
              identity: string
              option: string
              ordered: string
              owner: string
              price: number
              sku: string
              status: string
              subjectId: string
              subjectValue: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/product/update/:action/:orderId': {
      $post:
        | {
            input: { param: { action: string; orderId: string } } & {
              json: { credits?: number | undefined }
            } & { form: { credits?: number | undefined } }
            output: {
              identity: string
              option: string
              ordered: string
              owner: string
              price: number
              sku: string
              status: string
              subjectId: string
              subjectValue: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { action: string; orderId: string } } & {
              json: { credits?: number | undefined }
            } & { form: { credits?: number | undefined } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/product/:orderId': {
      $get:
        | {
            input: { param: { orderId: string } }
            output:
              | {
                  childOrders?: string[] | undefined
                  data?: string | undefined
                  mimeType: string
                  productOrderId: string
                  uri: string
                }
              | {
                  data: { [x: string]: unknown }
                  mimeType: string
                  productOrderId: string
                  uri: string
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/system/countries': {
      $get:
        | {
            input: {}
            output: { country_code?: string | undefined; country_name?: string | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/system/health': {
      $get:
        | {
            input: {}
            output: { name?: string | undefined; status?: string | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/system/pricelist': {
      $get:
        | {
            input: {}
            output: {
              cost_per_unit?: string | undefined
              max?: string | undefined
              metric_id?: string | undefined
              min?: string | undefined
              sku?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tin-verification/basic-check': {
      $get:
        | {
            input: { query: { tin: string; name: string } }
            output: {
              matchStatus: string
              name: string
              possibleMatch: string
              tin: string
              validationStatus: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tin: string; name: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tin-verification/comprehensive-check': {
      $get:
        | {
            input: { query: { tin: string; name: string; threshold?: bigint | undefined } }
            output: {
              einResult: string
              matchedCompanies: {
                address?: string[] | undefined
                country?: string | undefined
                dateOfIncorporation?: string | undefined
                extraData?: { [x: string]: unknown } | undefined
                formattedAddress?: string[] | undefined
                id?: string | undefined
                legalForm?: string | undefined
                managingDirectors?: string[] | undefined
                name?: string | undefined
                registrationNumber?: string | undefined
                requestTime?: number | undefined
                secretaries?: string[] | undefined
                sicNaceCodes?: string[] | undefined
                status?: string | undefined
              }[]
              tinResult: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tin: string; name: string; threshold?: bigint | undefined } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tin-verification/name-lookup': {
      $get:
        | {
            input: { query: { tin: string } }
            output: { matchStatus: string; possibleMatch: string; tin: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tin: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/vat-verification/basic-check/:country': {
      $post:
        | {
            input: { param: { country: string } } & {
              json: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                companyNumber?: string | undefined
                vatNumber: string
              }
            } & {
              form: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                companyNumber?: string | undefined
                vatNumber: string
              }
            }
            output: {
              candidate?:
                | {
                    address?: string[] | undefined
                    country: string
                    dateOfIncorporation?: string | undefined
                    extraData?: { [x: string]: unknown } | undefined
                    formattedAddress?: string[] | undefined
                    id: string
                    legalForm?: string | undefined
                    managingDirectors?: string[] | undefined
                    name: string
                    registrationNumber: string
                    requestTime?: number | undefined
                    secretaries?: string[] | undefined
                    sicNaceCodes?: string[] | undefined
                    status?: string | undefined
                  }[]
                | undefined
              company?:
                | {
                    address?: string[] | undefined
                    country: string
                    dateOfIncorporation?: string | undefined
                    extraData?: { [x: string]: unknown } | undefined
                    formattedAddress?: string[] | undefined
                    id: string
                    legalForm?: string | undefined
                    managingDirectors?: string[] | undefined
                    name: string
                    registrationNumber: string
                    requestTime?: number | undefined
                    secretaries?: string[] | undefined
                    sicNaceCodes?: string[] | undefined
                    status?: string | undefined
                  }
                | undefined
              confidenceScore: number
              validationStatus: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string } } & {
              json: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                companyNumber?: string | undefined
                vatNumber: string
              }
            } & {
              form: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                companyNumber?: string | undefined
                vatNumber: string
              }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/vat-verification/comprehensive-check/:country': {
      $post:
        | {
            input: { param: { country: string } } & {
              json: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                companyNumber?: string | undefined
                vatNumber: string
              }
            } & {
              form: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                companyNumber?: string | undefined
                vatNumber: string
              }
            }
            output: {
              candidate?:
                | {
                    address?: string[] | undefined
                    country: string
                    dateOfIncorporation?: string | undefined
                    extraData?: { [x: string]: unknown } | undefined
                    formattedAddress?: string[] | undefined
                    id: string
                    legalForm?: string | undefined
                    managingDirectors?: string[] | undefined
                    name: string
                    registrationNumber: string
                    requestTime?: number | undefined
                    secretaries?: string[] | undefined
                    sicNaceCodes?: string[] | undefined
                    status?: string | undefined
                  }[]
                | undefined
              company?:
                | {
                    address?: string[] | undefined
                    country: string
                    dateOfIncorporation?: string | undefined
                    extraData?: { [x: string]: unknown } | undefined
                    formattedAddress?: string[] | undefined
                    id: string
                    legalForm?: string | undefined
                    managingDirectors?: string[] | undefined
                    name: string
                    registrationNumber: string
                    requestTime?: number | undefined
                    secretaries?: string[] | undefined
                    sicNaceCodes?: string[] | undefined
                    status?: string | undefined
                  }
                | undefined
              confidenceScore: number
              validationStatus: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string } } & {
              json: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                companyNumber?: string | undefined
                vatNumber: string
              }
            } & {
              form: {
                companyAddress?: string | undefined
                companyName?: string | undefined
                companyNumber?: string | undefined
                vatNumber: string
              }
            }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/vat-verification/leveltwo-check/:country': {
      $post:
        | {
            input: { param: { country: string } } & {
              json: { confirmation?: boolean | undefined; vatNumber: string }
            } & { form: { confirmation?: boolean | undefined; vatNumber: string } }
            output: {
              address?: string | undefined
              confirmation?: string | undefined
              level: string
              name?: string | undefined
              validationStatus: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string } } & {
              json: { confirmation?: boolean | undefined; vatNumber: string }
            } & { form: { confirmation?: boolean | undefined; vatNumber: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/vat-verification/lookup/:country': {
      $post:
        | {
            input: { param: { country: string } } & {
              json: { address?: string | undefined; name: string }
            } & { form: { address?: string | undefined; name: string } }
            output: {
              matches?:
                | {
                    company?:
                      | {
                          address?: string[] | undefined
                          country: string
                          dateOfIncorporation?: string | undefined
                          extraData?: { [x: string]: unknown } | undefined
                          formattedAddress?: string[] | undefined
                          id: string
                          legalForm?: string | undefined
                          managingDirectors?: string[] | undefined
                          name: string
                          registrationNumber: string
                          requestTime?: number | undefined
                          secretaries?: string[] | undefined
                          sicNaceCodes?: string[] | undefined
                          status?: string | undefined
                        }
                      | undefined
                    vat?: string | undefined
                  }[]
                | undefined
              searchterm_address?: string | undefined
              searchterm_country?: string | undefined
              searchterm_name?: string | undefined
              timestamp?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string } } & {
              json: { address?: string | undefined; name: string }
            } & { form: { address?: string | undefined; name: string } }
            output: { code: number; fault?: string | undefined; message: string; tag: string }
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
