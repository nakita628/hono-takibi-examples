type FindListingRecommendationRequest = { listingIds?: string[] | undefined }
type BidPercentages = { basis?: string | undefined; value?: string | undefined }
type Ad = { bidPercentages?: BidPercentages[] | undefined; promoteWithAd?: string | undefined }
type MarketingRecommendation = { ad?: Ad | undefined; message?: string | undefined }
type ListingRecommendation = {
  listingId?: string | undefined
  marketing?: MarketingRecommendation | undefined
}
type PagedListingRecommendationCollection = {
  href?: string | undefined
  limit?: number | undefined
  listingRecommendations?: ListingRecommendation[] | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/find': {
      $post:
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & {
              json: FindListingRecommendationRequest
            }
            output: PagedListingRecommendationCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & {
              json: FindListingRecommendationRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & {
              json: FindListingRecommendationRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & {
              json: FindListingRecommendationRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
