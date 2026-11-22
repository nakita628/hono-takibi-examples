type Interval = {
  change?: (number | null) | undefined
  changePercent?: (number | null) | undefined
  end?: string | undefined
  high?: (number | null) | undefined
  last?: (number | null) | undefined
  low?: (number | null) | undefined
  open?: (number | null) | undefined
  start?: string | undefined
}
type IntervalCollection = {
  baseCurrency?: (string | null) | undefined
  intervals?: (Interval[] | null) | undefined
  name?: (string | null) | undefined
  symbol?: (string | null) | undefined
}
type IntervalCollectionResponse = {
  data?: IntervalCollection | undefined
  error?: (string | null) | undefined
  requestedCurrency?: (string | null) | undefined
  requestedSymbol?: (string | null) | undefined
  requestedUnitOfMeasure?: (string | null) | undefined
  success?: boolean | undefined
}
type Rate = {
  symbol?: (string | null) | undefined
  timestamp?: (string | null) | undefined
  value?: (number | null) | undefined
}
type RateResponse = {
  data?: Rate | undefined
  error?: (string | null) | undefined
  requestedCurrency?: (string | null) | undefined
  requestedSymbol?: (string | null) | undefined
  requestedUnitOfMeasure?: (string | null) | undefined
  success?: boolean | undefined
}
type Summary = {
  ask?: (number | null) | undefined
  baseCurrency?: (string | null) | undefined
  bid?: (number | null) | undefined
  fiftyTwoWeekHigh?: (number | null) | undefined
  fiftyTwoWeekLow?: (number | null) | undefined
  fiftyTwoWeekPercentChange?: (number | null) | undefined
  fourWeekPercentChange?: (number | null) | undefined
  high?: (number | null) | undefined
  last?: (number | null) | undefined
  low?: (number | null) | undefined
  oneDayChange?: (number | null) | undefined
  oneDayPercentChange?: (number | null) | undefined
  oneDayValue?: (number | null) | undefined
  open?: (number | null) | undefined
  symbol?: (string | null) | undefined
  timeStamp?: string | undefined
  twelveWeekPercentChange?: (number | null) | undefined
  yearToDatePercentChange?: (number | null) | undefined
}
type SummaryResponse = {
  data?: Summary | undefined
  error?: (string | null) | undefined
  requestedCurrency?: (string | null) | undefined
  requestedSymbol?: (string | null) | undefined
  requestedUnitOfMeasure?: (string | null) | undefined
  success?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/Currencies/history': {
      $get:
        | {
            input: {
              query: {
                pairs: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: IntervalCollectionResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pairs: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: IntervalCollectionResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pairs: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pairs: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Currencies/history/supported': {
      $get:
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Currencies/rate': {
      $get:
        | {
            input: { query: { pairs: string; format?: 'json' | 'xml' | undefined } }
            output: RateResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pairs: string; format?: 'json' | 'xml' | undefined } }
            output: RateResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { pairs: string; format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { pairs: string; format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Currencies/rate/supported': {
      $get:
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Currencies/summary': {
      $get:
        | {
            input: { query: { pairs: string; format?: 'json' | 'xml' | undefined } }
            output: SummaryResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pairs: string; format?: 'json' | 'xml' | undefined } }
            output: SummaryResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { pairs: string; format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { pairs: string; format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Currencies/summary/supported': {
      $get:
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Metals/benchmark/history': {
      $get:
        | {
            input: {
              query: {
                metals: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                historicalfx?: boolean | undefined
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: IntervalCollectionResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                metals: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                historicalfx?: boolean | undefined
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: IntervalCollectionResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                metals: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                historicalfx?: boolean | undefined
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                metals: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                historicalfx?: boolean | undefined
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Metals/benchmark/summary': {
      $get:
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: SummaryResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: SummaryResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Metals/benchmark/supported': {
      $get:
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Metals/spot/history': {
      $get:
        | {
            input: {
              query: {
                metals: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                historicalfx?: boolean | undefined
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: IntervalCollectionResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                metals: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                historicalfx?: boolean | undefined
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: IntervalCollectionResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                metals: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                historicalfx?: boolean | undefined
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                metals: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                historicalfx?: boolean | undefined
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Metals/spot/performance': {
      $get:
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: IntervalCollectionResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: IntervalCollectionResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Metals/spot/performance/annual': {
      $get:
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
                years?: number | undefined
              }
            }
            output: IntervalCollectionResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
                years?: number | undefined
              }
            }
            output: IntervalCollectionResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
                years?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
                years?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Metals/spot/ratio/history': {
      $get:
        | {
            input: {
              query: {
                pairs: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: IntervalCollectionResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pairs: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: IntervalCollectionResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pairs: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                pairs: string
                start: string
                end?: string | undefined
                interval?: string | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Metals/spot/ratio/summary': {
      $get:
        | {
            input: { query: { pairs: string; format?: 'json' | 'xml' | undefined } }
            output: SummaryResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pairs: string; format?: 'json' | 'xml' | undefined } }
            output: SummaryResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { pairs: string; format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { pairs: string; format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Metals/spot/summary': {
      $get:
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: SummaryResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: SummaryResponse[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                metals: string
                currency?: string | undefined
                unitofmeasure?: 'mg' | 'g' | 'kg' | 'gr' | 'oz' | 'toz' | 'ct' | 'dwt' | undefined
                format?: 'json' | 'xml' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Metals/spot/supported': {
      $get:
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/Metals/supported/currency': {
      $get:
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  },
  '/'
>
export default routes
