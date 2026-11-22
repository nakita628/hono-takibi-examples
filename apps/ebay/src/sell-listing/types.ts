type Charity = { charityId?: string | undefined; donationPercentage?: string | undefined }
type Amount = { currency?: string | undefined; value?: string | undefined }
type PricingSummary = {
  auctionReservePrice?: Amount | undefined
  auctionStartPrice?: Amount | undefined
  price?: Amount | undefined
}
type Aspect = { name?: string | undefined; values?: string[] | undefined }
type Product = {
  aspects?: Aspect[] | undefined
  brand?: string | undefined
  description?: string | undefined
  epid?: string | undefined
  imageUrls?: string[] | undefined
  title?: string | undefined
}
type ItemDraft = {
  categoryId?: string | undefined
  charity?: Charity | undefined
  condition?: string | undefined
  format?: string | undefined
  pricingSummary?: PricingSummary | undefined
  product?: Product | undefined
}
type ItemDraftResponse = {
  itemDraftId?: string | undefined
  sellFlowNativeUri?: string | undefined
  sellFlowUrl?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/item_draft/': {
      $post:
        | {
            input: {
              header: { 'Content-Language'?: string | undefined; 'X-EBAY-C-MARKETPLACE-ID': string }
            } & { json: ItemDraft }
            output: ItemDraftResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: { 'Content-Language'?: string | undefined; 'X-EBAY-C-MARKETPLACE-ID': string }
            } & { json: ItemDraft }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              header: { 'Content-Language'?: string | undefined; 'X-EBAY-C-MARKETPLACE-ID': string }
            } & { json: ItemDraft }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
