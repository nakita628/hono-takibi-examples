type Window = { start?: string | undefined; end?: string | undefined }
type Allocation = {
  name?: string | undefined
  cpuCost?: number | undefined
  cpuCoreUsageAverage?: number | undefined
  ramCost?: number | undefined
  ramByteUsageAverage?: number | undefined
  pvCost?: number | undefined
  networkCost?: number | undefined
  sharedCost?: number | undefined
  externalCost?: number | undefined
  totalCost?: number | undefined
  minutes?: number | undefined
  window?: Window | undefined
  properties?: { [x: string]: string } | undefined
}
type AllocationResponse = {
  code?: number | undefined
  status?: string | undefined
  data?: { [x: string]: Allocation }[] | undefined
}
type Asset = {
  type?: string | undefined
  totalCost?: number | undefined
  cpuCost?: number | undefined
  ramCost?: number | undefined
  providerID?: string | undefined
  window?: Window | undefined
}
type AssetsResponse = {
  code?: number | undefined
  status?: string | undefined
  data?: { [x: string]: Asset } | undefined
}
type CloudCostItem = { netCost?: { cost?: number | undefined } | undefined }
type CloudCostSet = { cloudCosts?: { [x: string]: CloudCostItem } | undefined }
type CloudCostResponse = {
  code?: number | undefined
  status?: string | undefined
  data?: { sets?: CloudCostSet[] | undefined } | undefined
}
type InferenceCostProperties = {
  modelName?: string | undefined
  modelVersion?: string | undefined
  namespace?: string | undefined
  cluster?: string | undefined
  pod?: string | undefined
  controller?: string | undefined
  controllerKind?: string | undefined
  container?: string | undefined
  workloadType?: string | undefined
}
type InferenceCostResponse = {
  properties?: InferenceCostProperties | undefined
  window?: Window | undefined
  costBasis?: 'allocation' | 'usage' | undefined
  totalCost?: number | undefined
  promptTokens?: number | undefined
  generationTokens?: number | undefined
  totalTokens?: number | undefined
  costPerMillionTokens?: number | undefined
  inputCost?: number | undefined
  outputCost?: number | undefined
  inputCostPerMillionTokens?: number | undefined
  outputCostPerMillionTokens?: number | undefined
  cacheSavingsFraction?: number | undefined
  allocationMethod?: 'compute_time' | 'prefix_caching_off' | 'multiplier' | undefined
}
type InferenceCostSet = {
  inferenceCosts?: { [x: string]: InferenceCostResponse } | undefined
  window?: Window | undefined
}
type InferenceCostSetResponse = {
  code?: number | undefined
  status?: string | undefined
  data?: InferenceCostSet | undefined
}
type InferenceCostSetRangeResponse = {
  code?: number | undefined
  status?: string | undefined
  data?:
    | { inferenceCostSets?: InferenceCostSet[] | undefined; window?: Window | undefined }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/allocation': {
      $get:
        | {
            input: {
              query: {
                window: string
                aggregate?: string | undefined
                step?: string | undefined
                accumulate?: boolean | undefined
              }
            }
            output: AllocationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                window: string
                aggregate?: string | undefined
                step?: string | undefined
                accumulate?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                window: string
                aggregate?: string | undefined
                step?: string | undefined
                accumulate?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/assets': {
      $get:
        | {
            input: { query: { window: string } }
            output: AssetsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { window: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { window: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/cloudCost': {
      $get:
        | {
            input: { query: { window: string } }
            output: CloudCostResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { window: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { window: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/inferenceCost/total': {
      $get:
        | {
            input: {
              query: {
                window: string
                costBasis?: 'allocation' | 'usage' | undefined
                aggregate?: string | undefined
                accumulate?: 'hour' | 'day' | 'week' | 'month' | undefined
                filter?: string | undefined
              }
            }
            output: InferenceCostSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                window: string
                costBasis?: 'allocation' | 'usage' | undefined
                aggregate?: string | undefined
                accumulate?: 'hour' | 'day' | 'week' | 'month' | undefined
                filter?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                window: string
                costBasis?: 'allocation' | 'usage' | undefined
                aggregate?: string | undefined
                accumulate?: 'hour' | 'day' | 'week' | 'month' | undefined
                filter?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 501
          }
    }
  } & {
    '/inferenceCost/timeseries': {
      $get:
        | {
            input: {
              query: {
                window: string
                accumulate: 'hour' | 'day' | 'week' | 'month'
                costBasis?: 'allocation' | 'usage' | undefined
                aggregate?: string | undefined
                filter?: string | undefined
              }
            }
            output: InferenceCostSetRangeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                window: string
                accumulate: 'hour' | 'day' | 'week' | 'month'
                costBasis?: 'allocation' | 'usage' | undefined
                aggregate?: string | undefined
                filter?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                window: string
                accumulate: 'hour' | 'day' | 'week' | 'month'
                costBasis?: 'allocation' | 'usage' | undefined
                aggregate?: string | undefined
                filter?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 501
          }
    }
  },
  '/'
>
export default routes
