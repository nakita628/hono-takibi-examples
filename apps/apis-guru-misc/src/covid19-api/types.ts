declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/country': {
      $get:
        | {
            input: { query: { name: string; format?: 'json' | 'xml' | undefined } }
            output: {
              confirmed?: number | undefined
              country?: string | undefined
              critical?: number | undefined
              deaths?: number | undefined
              lastChange?: string | undefined
              lastUpdate?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              recovered?: number | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string; format?: 'json' | 'xml' | undefined } }
            output: {
              confirmed?: number | undefined
              country?: string | undefined
              critical?: number | undefined
              deaths?: number | undefined
              lastChange?: string | undefined
              lastUpdate?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              recovered?: number | undefined
            }[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/country/all': {
      $get:
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {
              confirmed?: number | undefined
              country?: string | undefined
              critical?: number | undefined
              deaths?: number | undefined
              lastChange?: string | undefined
              lastUpdate?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              recovered?: number | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {
              confirmed?: number | undefined
              country?: string | undefined
              critical?: number | undefined
              deaths?: number | undefined
              lastChange?: string | undefined
              lastUpdate?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              recovered?: number | undefined
            }[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/country/code': {
      $get:
        | {
            input: { query: { code: string; format?: 'json' | 'xml' | undefined } }
            output: {
              confirmed?: number | undefined
              country?: string | undefined
              critical?: number | undefined
              deaths?: number | undefined
              lastChange?: string | undefined
              lastUpdate?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              recovered?: number | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { code: string; format?: 'json' | 'xml' | undefined } }
            output: {
              confirmed?: number | undefined
              country?: string | undefined
              critical?: number | undefined
              deaths?: number | undefined
              lastChange?: string | undefined
              lastUpdate?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              recovered?: number | undefined
            }[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/help/countries': {
      $get:
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {
              'alpha-2-code'?: string | undefined
              'alpha-3-code'?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              name?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {
              'alpha-2-code'?: string | undefined
              'alpha-3-code'?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              name?: string | undefined
            }[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/report/country/all': {
      $get:
        | {
            input: {
              query: {
                date: string
                'date-format'?:
                  | 'YYYY-MM-DD'
                  | 'YYYY-DD-MM'
                  | 'DD-MM-YYYY'
                  | 'MM-DD-YYYY'
                  | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {
              country?: string | undefined
              date?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              province?:
                | {
                    active?: number | undefined
                    confirmed?: number | undefined
                    deaths?: number | undefined
                    recovered?: number | undefined
                  }[]
                | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date: string
                'date-format'?:
                  | 'YYYY-MM-DD'
                  | 'YYYY-DD-MM'
                  | 'DD-MM-YYYY'
                  | 'MM-DD-YYYY'
                  | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {
              country?: string | undefined
              date?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              province?:
                | {
                    active?: number | undefined
                    confirmed?: number | undefined
                    deaths?: number | undefined
                    recovered?: number | undefined
                  }[]
                | undefined
            }[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/report/country/code': {
      $get:
        | {
            input: {
              query: {
                code: string
                date: string
                'date-format'?:
                  | 'YYYY-MM-DD'
                  | 'YYYY-DD-MM'
                  | 'DD-MM-YYYY'
                  | 'MM-DD-YYYY'
                  | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {
              country?: string | undefined
              date?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              province?:
                | {
                    active?: number | undefined
                    confirmed?: number | undefined
                    deaths?: number | undefined
                    recovered?: number | undefined
                  }[]
                | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                code: string
                date: string
                'date-format'?:
                  | 'YYYY-MM-DD'
                  | 'YYYY-DD-MM'
                  | 'DD-MM-YYYY'
                  | 'MM-DD-YYYY'
                  | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {
              country?: string | undefined
              date?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              province?:
                | {
                    active?: number | undefined
                    confirmed?: number | undefined
                    deaths?: number | undefined
                    recovered?: number | undefined
                  }[]
                | undefined
            }[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/report/country/name': {
      $get:
        | {
            input: {
              query: {
                name: string
                date: string
                'date-format'?:
                  | 'YYYY-MM-DD'
                  | 'YYYY-DD-MM'
                  | 'DD-MM-YYYY'
                  | 'MM-DD-YYYY'
                  | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {
              country?: string | undefined
              date?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              province?:
                | {
                    active?: number | undefined
                    confirmed?: number | undefined
                    deaths?: number | undefined
                    recovered?: number | undefined
                  }[]
                | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                date: string
                'date-format'?:
                  | 'YYYY-MM-DD'
                  | 'YYYY-DD-MM'
                  | 'DD-MM-YYYY'
                  | 'MM-DD-YYYY'
                  | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {
              country?: string | undefined
              date?: string | undefined
              latitude?: number | undefined
              longitude?: number | undefined
              province?:
                | {
                    active?: number | undefined
                    confirmed?: number | undefined
                    deaths?: number | undefined
                    recovered?: number | undefined
                  }[]
                | undefined
            }[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/report/totals': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                'date-format'?:
                  | 'YYYY-MM-DD'
                  | 'YYYY-DD-MM'
                  | 'DD-MM-YYYY'
                  | 'MM-DD-YYYY'
                  | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {
              active?: number | undefined
              confirmed?: number | undefined
              critical?: number | undefined
              date?: string | undefined
              deaths?: number | undefined
              recovered?: number | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                'date-format'?:
                  | 'YYYY-MM-DD'
                  | 'YYYY-DD-MM'
                  | 'DD-MM-YYYY'
                  | 'MM-DD-YYYY'
                  | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {
              active?: number | undefined
              confirmed?: number | undefined
              critical?: number | undefined
              date?: string | undefined
              deaths?: number | undefined
              recovered?: number | undefined
            }[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/totals': {
      $get:
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {
              confirmed?: number | undefined
              critical?: number | undefined
              deaths?: number | undefined
              lastChange?: string | undefined
              lastUpdate?: string | undefined
              recovered?: number | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {
              confirmed?: number | undefined
              critical?: number | undefined
              deaths?: number | undefined
              lastChange?: string | undefined
              lastUpdate?: string | undefined
              recovered?: number | undefined
            }[]
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
