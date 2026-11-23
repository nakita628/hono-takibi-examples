type CurrentKey = { current?: boolean | undefined }
type Expiry = { expires?: string | undefined; time?: string | undefined }
type KeyView = {
  action: string
  callbackOnModify: boolean
  callbackUrl?: (string | null) | undefined
  commenced: string
  created?: string | undefined
  current?: boolean | undefined
  custom?: ({ [x: string]: unknown } | null) | undefined
  frequency: string
  name?: (string | null) | undefined
  serial?: string | undefined
  updated?: (string | null) | undefined
}
type ProductCreateModify = {
  custom?: ({ [x: string]: unknown } | null) | undefined
  key?: string | undefined
  name?: (string | null) | undefined
  serial?: (string | null) | undefined
}
type ApiKey = { key?: string | undefined }
type CountOf = { count?: number | undefined }
type FindCredentials = { key?: string | undefined; serial?: string | undefined }
type SubscriptionView = {
  action: string
  callbackOnModify: boolean
  callbackUrl?: (string | null) | undefined
  commenced: string
  created?: string | undefined
  custom?: ({ [x: string]: unknown } | null) | undefined
  frequency: string
  keys?: (KeyView[] | null) | undefined
  name?: (string | null) | undefined
  updated?: (string | null) | undefined
}
type ProductView = {
  created?: string | undefined
  custom?: ({ [x: string]: unknown } | null) | undefined
  name?: (string | null) | undefined
  serial?: string | undefined
  subscriptions?: (SubscriptionView[] | null) | undefined
  updated?: (string | null) | undefined
}
type SubscriptionCreateModify = {
  action: string
  callbackOnModify?: (boolean | null) | undefined
  callbackUrl?: (string | null) | undefined
  custom?: ({ [x: string]: unknown } | null) | undefined
  frequency: string
  key?: string | undefined
  name?: (string | null) | undefined
  serial?: string | undefined
  startFrom?: (string | null) | undefined
}
type ApiCredentials = { key?: string | undefined; serial?: (string | null) | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/KeysApi/Current/:serial': {
      $get: {
        input: { param: { serial: string } }
        output: CurrentKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/KeysApi/Custom/:serial': {
      $get: {
        input: { param: { serial: string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/KeysApi/Expiry/:serial': {
      $get: {
        input: { param: { serial: string } }
        output: Expiry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/KeysApi/Find/:serial': {
      $get: {
        input: { param: { serial: string } }
        output: KeyView
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ProductsApi': {
      $patch: {
        input: { json: ProductCreateModify }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: { input: { json: ProductCreateModify }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/ProductsApi/Count': {
      $post: { input: { json: ApiKey }; output: CountOf; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/ProductsApi/Find': {
      $post: {
        input: { query: { page?: (number | null) | undefined } } & { json: FindCredentials }
        output: ProductView
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ProductsApi/List': {
      $post: {
        input: { query: { page?: (number | null) | undefined } } & { json: ApiKey }
        output: ProductView[] | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ProductsApi/Save': {
      $post: {
        input: { json: ProductCreateModify }
        output: ProductView
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/ProductsApi/:serial': {
      $delete: {
        input: { param: { serial: string } } & { header: { 'X-Api-Key': string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { serial: string } } & { header: { 'X-Api-Key': string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/SubscriptionsApi': {
      $post: {
        input: { json: SubscriptionCreateModify }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { json: SubscriptionCreateModify }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/SubscriptionsApi/Count': {
      $post: { input: { json: ApiCredentials }; output: CountOf; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/SubscriptionsApi/Disable': {
      $patch: { input: { json: FindCredentials }; output: {}; outputFormat: string; status: 204 }
      $post: { input: { json: FindCredentials }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/SubscriptionsApi/Enable': {
      $patch: { input: { json: FindCredentials }; output: {}; outputFormat: string; status: 204 }
      $post: { input: { json: FindCredentials }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/SubscriptionsApi/Find': {
      $post: {
        input: { json: FindCredentials }
        output: SubscriptionView
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/SubscriptionsApi/List': {
      $post: {
        input: { query: { page?: (number | null) | undefined } } & { json: FindCredentials }
        output: SubscriptionView[] | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/SubscriptionsApi/Save': {
      $post: {
        input: { json: SubscriptionCreateModify }
        output: KeyView
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/SubscriptionsApi/:serial': {
      $delete: {
        input: { param: { serial: string } } & { query: { keep: boolean | null } } & {
          header: { 'X-Api-Key': string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { serial: string } } & { query: { keep: boolean | null } } & {
          header: { 'X-Api-Key': string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
