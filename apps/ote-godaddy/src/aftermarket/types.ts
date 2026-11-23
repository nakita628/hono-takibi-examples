type AftermarketListingAction = { listingActionId: number }
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
type AftermarketListingExpiryCreate = {
  domain: string
  expiresAt: string
  losingRegistrarId: number
  pageViewsMonthly?: number | undefined
  revenueMonthly?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/aftermarket/listings': {
      $delete:
        | {
            input: { query: { domains: string[] } }
            output: AftermarketListingAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { domains: string[] } }
            output: AftermarketListingAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { domains: string[] } }
            output: AftermarketListingAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { domains: string[] } }
            output: AftermarketListingAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { domains: string[] } }
            output: AftermarketListingAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { query: { domains: string[] } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { query: { domains: string[] } }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { domains: string[] } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { query: { domains: string[] } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { query: { domains: string[] } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { domains: string[] } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/aftermarket/listings/expiry': {
      $post:
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: AftermarketListingAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: AftermarketListingAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: AftermarketListingAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: AftermarketListingAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: AftermarketListingAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: AftermarketListingExpiryCreate[] }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
