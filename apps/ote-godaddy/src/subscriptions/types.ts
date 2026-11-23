type Pagination = {
  first?: string | undefined
  last?: string | undefined
  next?: string | undefined
  previous?: string | undefined
  total?: number | undefined
}
type SubscriptionAddon = { commitment: 'PAID' | 'FREE' | 'TRIAL'; pfid: number; quantity: number }
type SubscriptionBilling = {
  commitment: 'PAID' | 'FREE' | 'TRIAL'
  pastDueTypes?: ('ADDON' | 'BURST' | 'SUBSCRIPTION')[] | undefined
  renewAt: string
  status: 'CURRENT' | 'PAST_DUE'
}
type SubscriptionProduct = {
  label: string
  namespace: string
  pfid: number
  productGroupKey: string
  renewalPeriod: number
  renewalPeriodUnit: 'MONTH' | 'QUARTER' | 'SEMI_ANNUAL' | 'YEAR'
  renewalPfid: number
  supportBillOn: boolean
}
type SubscriptionRelations = { children?: string[] | undefined; parent?: string | undefined }
type Subscription = {
  addons?: SubscriptionAddon[] | undefined
  billing: SubscriptionBilling
  cancelable?: boolean | undefined
  createdAt: string
  expiresAt?: string | undefined
  label?: string | undefined
  launchUrl?: string | undefined
  paymentProfileId?: number | undefined
  priceLocked: boolean
  product: SubscriptionProduct
  relations?: SubscriptionRelations | undefined
  renewAuto: boolean
  renewable: boolean
  status: 'ACTIVE' | 'PENDING' | 'CANCELED'
  subscriptionId: string
  upgradeable: boolean
}
type SubscriptionList = { pagination: Pagination; subscriptions: Subscription[] }
type ErrorField = {
  code: string
  message?: string | undefined
  path: string
  pathRelated?: string | undefined
}
type Error = { code: string; fields?: ErrorField[] | undefined; message?: string | undefined }
type ErrorLimit = {
  code: string
  fields?: ErrorField[] | undefined
  message?: string | undefined
  retryAfterSec: number
}
type ProductGroup = { productGroupKey: string; subscriptionCount: number }
type SubscriptionUpdate = { paymentProfileId?: number | undefined; renewAuto?: boolean | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/subscriptions': {
      $get:
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: SubscriptionList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: SubscriptionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: SubscriptionList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: SubscriptionList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: SubscriptionList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                productGroupKeys?: string[] | undefined
                includes?: 'addons' | 'relations' | undefined
                offset?: number | undefined
                limit?: number | undefined
                sort?: 'expiresAt' | '-expiresAt' | undefined
              }
            } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/subscriptions/productGroups': {
      $get:
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ProductGroup[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ProductGroup[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ProductGroup[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ProductGroup[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ProductGroup[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/subscriptions/:subscriptionId': {
      $delete:
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 504
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
      $get:
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Subscription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Subscription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Subscription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Subscription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 504
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'X-Shopper-Id'?: string | undefined; 'X-Market-Id'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 504
          }
      $patch:
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionUpdate } & {
              form: SubscriptionUpdate
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionUpdate } & {
              form: SubscriptionUpdate
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionUpdate } & {
              form: SubscriptionUpdate
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionUpdate } & {
              form: SubscriptionUpdate
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionUpdate } & {
              form: SubscriptionUpdate
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionUpdate } & {
              form: SubscriptionUpdate
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionUpdate } & {
              form: SubscriptionUpdate
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionUpdate } & {
              form: SubscriptionUpdate
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionUpdate } & {
              form: SubscriptionUpdate
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionUpdate } & {
              form: SubscriptionUpdate
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriptionId: string } } & { json: SubscriptionUpdate } & {
              form: SubscriptionUpdate
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
