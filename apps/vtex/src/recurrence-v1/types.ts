type Frequency = { interval: number; periodicity: string }
type Item = {
  frequency: Frequency
  quantity: number
  seller: string
  shippingAddressId: string
  sku: string
}
type UpdaterecurrenceRequest = {
  deliveryDay: number
  deliveryWeekday: string
  email: string
  items: Item[]
  paymentAccountId: string
}
type UpdaterecurrencesettingsRequest = { defaultSLA: string; salesChannel: string }
type UpdatepartialrecurrenceRequest = {
  deliveryDay: number
  deliveryWeekday: string
  status: string
}
type AddrecurrenceitemRequest = {
  frequency: Frequency
  quantity: number
  seller: string
  shippingAddressId: string
  sku: string
}
type ReindexrecurrenceRequest = { frequency: Frequency }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/subscriptions': {
      $get: {
        input: { query: { email?: string | undefined; cycleStatus?: string | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: UpdaterecurrenceRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions/me': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions/settings': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: UpdaterecurrencesettingsRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions/:recurrenceId': {
      $get: {
        input: { param: { recurrenceId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { param: { recurrenceId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: UpdatepartialrecurrenceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions/:recurrenceId/addresses': {
      $get: {
        input: { param: { recurrenceId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions/:recurrenceId/items': {
      $post: {
        input: { param: { recurrenceId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: AddrecurrenceitemRequest[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions/:recurrenceId/reindex': {
      $patch: {
        input: { param: { recurrenceId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: ReindexrecurrenceRequest[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions/:recurrenceid/accounts': {
      $get: {
        input: { param: { recurrenceid: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
