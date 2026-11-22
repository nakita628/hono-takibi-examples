type EaseeCharger = {
  id?: string | undefined
  lastSession?: string | undefined
  name?: string | undefined
}
type Ommeters = {
  currentScalingFactor?: number | undefined
  loadProfileType?: string | undefined
  location?: string | undefined
  manufacturerId?: string | undefined
  measurementType?: string | undefined
  meta?: string | undefined
  meterId?: string | undefined
  scalingFactor?: number | undefined
  type?: string | undefined
  voltageScalingFactor?: number | undefined
}
type DispatchLocation = {
  energy?: number | undefined
  location?: { [x: string]: unknown } | undefined
}
type MarketData = {
  end_timestamp?: number | undefined
  marketprice?: number | undefined
  start_timestamp?: number | undefined
}
type ForecastItem = {
  co2_g_oekostrom?: number | undefined
  energyprice?: number | undefined
  epochtime?: number | undefined
  gsi?: number | undefined
  scaled?: boolean | undefined
  sci?: number | undefined
  timeStamp?: number | undefined
}
type Transactions = {
  cashier?: string | undefined
  timeStamp?: number | undefined
  txid?: string | undefined
  txtype?: string | undefined
  value?: number | undefined
}
type Balance = {
  balance?: number | undefined
  haben?: number | undefined
  soll?: number | undefined
  txs?: Transactions[] | undefined
  variation?: 'gsb' | 'erzeugung' | 'eigenstrom' | 'co2' | 'baeume' | undefined
}
type Componentsh0 = {
  components?: Componentsh0[] | undefined
  describtion?: string | undefined
  mutlityplier?: string | undefined
  per?: number | undefined
  sum?: number | undefined
}
type Tariffh0 = { ap?: number | undefined; gp?: number | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/alternative/easee/lastSessions': {
      $get: {
        input: { query: { username?: string | undefined; password?: string | undefined } }
        output: EaseeCharger[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/alternative/ocpp/lastSessions': {
      $get: { input: {}; output: EaseeCharger[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/alternative/openmeter/activities': {
      $get: { input: {}; output: Ommeters[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/alternative/openmeter/meters': {
      $get: { input: {}; output: Ommeters[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/alternative/openmeter/readings': {
      $get: { input: {}; output: Ommeters[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/gsi/bestHour': {
      $get: {
        input: {
          query: {
            zip?: string | undefined
            key?: string | undefined
            timeframe?: number | undefined
            hours?: number | undefined
          }
        }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gsi/dispatch': {
      $get: {
        input: { query: { zip?: string | undefined; key?: string | undefined } }
        output: {
          avg_distance_km?: number | undefined
          dispatch_from?: DispatchLocation[] | undefined
          dispatch_target?: DispatchLocation[] | undefined
          postmix?: { [x: string]: unknown } | undefined
          premix?: { [x: string]: unknown } | undefined
          timeframe?: { end?: number | undefined; start?: number | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gsi/marketdata': {
      $get: {
        input: { query: { zip?: string | undefined } }
        output: { data?: MarketData[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gsi/prediction': {
      $get: {
        input: { query: { zip?: string | undefined; key?: string | undefined } }
        output: {
          forecast?: ForecastItem[] | undefined
          location?: { city?: string | undefined; zip?: string | undefined } | undefined
          matrix?:
            | {
                h0?:
                  | {
                      avg_1?: string | undefined
                      avg_2?: string | undefined
                      avg_3?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/metering/reading': {
      $get: {
        input: { query: { account?: string | undefined } }
        output: {
          '1.8.0'?: number | undefined
          '1.8.1'?: number | undefined
          '1.8.2'?: number | undefined
          _processingTime?: number | undefined
          account?: string | undefined
          co2_g_oekostrom?: number | undefined
          co2_g_standard?: number | undefined
          credits?: { [x: string]: unknown } | undefined
          timeStamp?: number | undefined
          ttl?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            '1.8.0'?: number | undefined
            account?: string | undefined
            energy?: number | undefined
            secret?: string | undefined
            value?: number | undefined
            zip?: string | undefined
          }
        }
        output: {
          '1.8.0'?: number | undefined
          '1.8.1'?: number | undefined
          '1.8.2'?: number | undefined
          _processingTime?: number | undefined
          account?: string | undefined
          co2_g_oekostrom?: number | undefined
          co2_g_standard?: number | undefined
          timeStamp?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quittung/commit': {
      $post: {
        input: { json: { account?: string | undefined } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quittung/create': {
      $post: {
        input: { json: { email?: string | undefined } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quittung/prepare': {
      $post: {
        input: { json: { account?: string | undefined } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quittung/tse': {
      $post: {
        input: { query: { account?: string | undefined } }
        output: {
          data?: { [x: string]: unknown } | undefined
          publickey?: string | undefined
          raw?: string | undefined
          signature?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quittung/tsedata': {
      $post: {
        input: { query: { account?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/quittung/tsesignature': {
      $post: {
        input: { query: { account?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/quittung/zugferd': {
      $get: {
        input: { query: { account?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/stromkonto/balances': {
      $get: {
        input: { query: { account?: string | undefined } }
        output: Balance[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/stromkonto/choices': {
      $get: {
        input: { query: { account?: string | undefined } }
        output: Balance[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/stromkonto/login': {
      $post: {
        input: { json: { email?: string | undefined } }
        output: { status?: 'registered' | 'unregistered' | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/stromkonto/prepareTransaction': {
      $post: {
        input: {
          json: {
            account?: string | undefined
            signature?: string | undefined
            to?: string | undefined
            value?: number | undefined
            variation?: 'gsb' | 'erzeugung' | 'eigenstrom' | 'co2' | 'baeume' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/stromkonto/register': {
      $post: {
        input: {
          json: {
            email?: string | undefined
            first_name?: string | undefined
            last_name?: string | undefined
            zipcode?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tariff/components': {
      $get: {
        input: {
          query: {
            zipcode?: string | undefined
            email?: string | undefined
            kwha?: number | undefined
            milliseconds?: number | undefined
            wh?: number | undefined
          }
        }
        output: Componentsh0
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tariff/slph0': {
      $get: {
        input: { query: { zipcode?: string | undefined } }
        output: Tariffh0[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wim/status': {
      $get: {
        input: { query: { vid?: string | undefined } }
        output: { wim_started?: number | undefined; wim_status?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
