declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/BulkLookup': {
      $get:
        | {
            input: {
              query: {
                key: string
                ips: string
                params?: string | undefined
                lang?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                key: string
                ips: string
                params?: string | undefined
                lang?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                key: string
                ips: string
                params?: string | undefined
                lang?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/Country': {
      $get:
        | {
            input: {
              query: {
                key: string
                CountryCode: string
                params?: string | undefined
                lang?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                key: string
                CountryCode: string
                params?: string | undefined
                lang?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                key: string
                CountryCode: string
                params?: string | undefined
                lang?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/GeoIP': {
      $get:
        | {
            input: {
              query: {
                key: string
                params?: string | undefined
                lang?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                key: string
                params?: string | undefined
                lang?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                key: string
                params?: string | undefined
                lang?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/IPLookup': {
      $get:
        | {
            input: {
              query: {
                key: string
                ip: string
                params?: string | undefined
                lang?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                key: string
                ip: string
                params?: string | undefined
                lang?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                key: string
                ip: string
                params?: string | undefined
                lang?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/badWords': {
      $get:
        | {
            input: {
              query: {
                key: string
                text: string
                listBadWords?: string | undefined
                scoreOnly?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                key: string
                text: string
                listBadWords?: string | undefined
                scoreOnly?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                key: string
                text: string
                listBadWords?: string | undefined
                scoreOnly?: string | undefined
                format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
