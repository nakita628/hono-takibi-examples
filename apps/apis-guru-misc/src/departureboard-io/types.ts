declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getArrivalsAndDeparturesByCRS/:CRS': {
      $get:
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
                filterType?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
                filterType?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
                filterType?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
                filterType?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
                filterType?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
                filterType?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/getArrivalsByCRS/:CRS': {
      $get:
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/getDeparturesByCRS/:CRS': {
      $get:
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                numServices?: number | undefined
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
                filterStation?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/getFastestDeparturesByCRS/:CRS': {
      $get:
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                filterList: string
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                filterList: string
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                filterList: string
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                filterList: string
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                filterList: string
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                filterList: string
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/getNextDeparturesByCRS/:CRS': {
      $get:
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                filterList: string
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                filterList: string
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                filterList: string
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                filterList: string
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                filterList: string
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { CRS: string } } & {
              query: {
                apiKey: string
                filterList: string
                timeOffset?: number | undefined
                timeWindow?: number | undefined
                serviceDetails?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/getServiceDetailsByID/:serviceID': {
      $get:
        | {
            input: { param: { serviceID: string } } & { query: { apiKey: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { serviceID: string } } & { query: { apiKey: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceID: string } } & { query: { apiKey: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceID: string } } & { query: { apiKey: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { serviceID: string } } & { query: { apiKey: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { serviceID: string } } & { query: { apiKey: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  },
  '/'
>
export default routes
