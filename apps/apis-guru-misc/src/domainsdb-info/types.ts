type MXRecords = { exchange?: string | undefined; priority?: number | undefined }
type Domains = {
  A?: string[] | undefined
  CNAME?: string[] | undefined
  MX?: MXRecords[] | undefined
  NS?: string[] | undefined
  TXT?: string[] | undefined
  country?: string | undefined
  create_date?: string | undefined
  domain?: string | undefined
  isDead?: string | undefined
  update_date?: string | undefined
}
type SearchResults = {
  next_page?: string | undefined
  time: string
  total?: number | undefined
  domains?: Domains[] | undefined
}
type UpdateModel = {
  added?: string | undefined
  added_download?: string | undefined
  date?: string | undefined
  deleted?: string | undefined
  deleted_download?: string | undefined
}
type APIKeyInfo = {
  customer_email?: string | undefined
  customer_name?: string | undefined
  expires?: string | undefined
  item_id?: string | undefined
  item_name?: string | undefined
  license?: string | undefined
  license_limit?: string | undefined
  price_id?: string | undefined
  success?: string | undefined
}
type ZoneStatistics = { date: string; dec: number; inc: number; total: number; zone: string }
type ZoneStats = {
  next_page?: string | undefined
  time: string
  total?: number | undefined
  statistics?: ZoneStatistics[] | undefined
}
type ZoneInfo = {
  description?: string[] | undefined
  in_bundles?: string[] | undefined
  includes?: string[] | undefined
  type: string
  zone: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/domains/search': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
                domain?: string | undefined
                zone?: string | undefined
                country?: string | undefined
                isDead?: boolean | undefined
                A?: string | undefined
                NS?: string | undefined
                CNAME?: string | undefined
                MX?: string | undefined
                TXT?: string | undefined
              }
            }
            output: SearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
                domain?: string | undefined
                zone?: string | undefined
                country?: string | undefined
                isDead?: boolean | undefined
                A?: string | undefined
                NS?: string | undefined
                CNAME?: string | undefined
                MX?: string | undefined
                TXT?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
                domain?: string | undefined
                zone?: string | undefined
                country?: string | undefined
                isDead?: boolean | undefined
                A?: string | undefined
                NS?: string | undefined
                CNAME?: string | undefined
                MX?: string | undefined
                TXT?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/domains/tld/:zone_id': {
      $get:
        | {
            input: { param: { zone_id: string } } & {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
                domain?: string | undefined
                country?: string | undefined
                isDead?: boolean | undefined
                A?: string | undefined
                NS?: string | undefined
                CNAME?: string | undefined
                MX?: string | undefined
                TXT?: string | undefined
              }
            }
            output: SearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zone_id: string } } & {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
                domain?: string | undefined
                country?: string | undefined
                isDead?: boolean | undefined
                A?: string | undefined
                NS?: string | undefined
                CNAME?: string | undefined
                MX?: string | undefined
                TXT?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { zone_id: string } } & {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
                domain?: string | undefined
                country?: string | undefined
                isDead?: boolean | undefined
                A?: string | undefined
                NS?: string | undefined
                CNAME?: string | undefined
                MX?: string | undefined
                TXT?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/domains/tld/:zone_id/download': {
      $get:
        | {
            input: { param: { zone_id: string } } & {
              query: { api_key?: string | undefined; date?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { zone_id: string } } & {
              query: { api_key?: string | undefined; date?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/domains/tld/:zone_id/search': {
      $get:
        | {
            input: { param: { zone_id: string } } & {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
                domain?: string | undefined
                country?: string | undefined
                isDead?: boolean | undefined
                A?: string | undefined
                NS?: string | undefined
                CNAME?: string | undefined
                MX?: string | undefined
                TXT?: string | undefined
              }
            }
            output: SearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zone_id: string } } & {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
                domain?: string | undefined
                country?: string | undefined
                isDead?: boolean | undefined
                A?: string | undefined
                NS?: string | undefined
                CNAME?: string | undefined
                MX?: string | undefined
                TXT?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { zone_id: string } } & {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
                domain?: string | undefined
                country?: string | undefined
                isDead?: boolean | undefined
                A?: string | undefined
                NS?: string | undefined
                CNAME?: string | undefined
                MX?: string | undefined
                TXT?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/domains/updates/added': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
              }
            }
            output: SearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/domains/updates/added/download': {
      $get:
        | {
            input: { query: { api_key?: string | undefined; date?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { api_key?: string | undefined; date?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/domains/updates/deleted': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
              }
            }
            output: SearchResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                date?: string | undefined
                page?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/domains/updates/deleted/download': {
      $get:
        | {
            input: { query: { api_key?: string | undefined; date?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { api_key?: string | undefined; date?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/domains/updates/list': {
      $get:
        | {
            input: { query: { api_key?: string | undefined } }
            output: UpdateModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { api_key?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { api_key?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/info/api': {
      $get: {
        input: { query: { api_key?: string | undefined } }
        output: APIKeyInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/info/stat/': {
      $get: {
        input: { query: { page?: string | undefined; limit?: number | undefined } }
        output: ZoneStats[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/info/stat/:zone': {
      $get:
        | {
            input: { param: { zone: string } } & {
              query: { page?: string | undefined; limit?: number | undefined }
            }
            output: ZoneStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zone: string } } & {
              query: { page?: string | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/info/tld/': { $get: { input: {}; output: ZoneInfo[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/info/tld/:zone': {
      $get:
        | {
            input: { param: { zone: string } } & {
              query: { page?: string | undefined; limit?: number | undefined }
            }
            output: ZoneInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zone: string } } & {
              query: { page?: string | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
