type EligibleItem = { listingId?: string | undefined }
type PagedEligibleItemCollection = {
  eligibleItems?: EligibleItem[] | undefined
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
type TimeDuration = { unit?: string | undefined; value?: number | undefined }
type Amount = { currency?: string | undefined; value?: string | undefined }
type OfferedItem = {
  discountPercentage?: string | undefined
  listingId?: string | undefined
  price?: Amount | undefined
  quantity?: number | undefined
}
type CreateOffersRequest = {
  allowCounterOffer?: boolean | undefined
  message?: string | undefined
  offerDuration?: TimeDuration | undefined
  offeredItems?: OfferedItem[] | undefined
}
type User = { maskedUsername?: string | undefined }
type Offer = {
  allowCounterOffer?: boolean | undefined
  buyer?: User | undefined
  creationDate?: string | undefined
  initiatedBy?: string | undefined
  lastModifiedDate?: string | undefined
  message?: string | undefined
  offerDuration?: TimeDuration | undefined
  offerId?: string | undefined
  offerStatus?: string | undefined
  offerType?: string | undefined
  offeredItems?: OfferedItem[] | undefined
  revision?: string | undefined
}
type SendOfferToInterestedBuyersCollectionResponse = { offers?: Offer[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/find_eligible_items': {
      $get:
        | {
            input: { query: { limit?: string | undefined; offset?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: PagedEligibleItemCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: string | undefined; offset?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { limit?: string | undefined; offset?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { limit?: string | undefined; offset?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/send_offer_to_interested_buyers': {
      $post:
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & { json: CreateOffersRequest }
            output: SendOfferToInterestedBuyersCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & { json: CreateOffersRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & { json: CreateOffersRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & { json: CreateOffersRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
