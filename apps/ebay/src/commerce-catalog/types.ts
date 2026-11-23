type Image = {
  height?: number | undefined
  imageUrl?: string | undefined
  width?: number | undefined
}
type Aspect = { localizedName?: string | undefined; localizedValues?: string[] | undefined }
type Product = {
  additionalImages?: Image[] | undefined
  aspects?: Aspect[] | undefined
  brand?: string | undefined
  description?: string | undefined
  ean?: string[] | undefined
  epid?: string | undefined
  gtin?: string[] | undefined
  image?: Image | undefined
  isbn?: string[] | undefined
  mpn?: string[] | undefined
  otherApplicableCategoryIds?: string[] | undefined
  primaryCategoryId?: string | undefined
  productWebUrl?: string | undefined
  title?: string | undefined
  upc?: string[] | undefined
  version?: string | undefined
}
type ProductSummary = {
  additionalImages?: Image[] | undefined
  aspects?: Aspect[] | undefined
  brand?: string | undefined
  ean?: string[] | undefined
  epid?: string | undefined
  gtin?: string[] | undefined
  image?: Image | undefined
  isbn?: string[] | undefined
  mpn?: string[] | undefined
  productHref?: string | undefined
  productWebUrl?: string | undefined
  title?: string | undefined
  upc?: string[] | undefined
}
type AspectValueDistribution = {
  localizedAspectValue?: string | undefined
  matchCount?: number | undefined
  refinementHref?: string | undefined
}
type AspectDistribution = {
  aspectValueDistributions?: AspectValueDistribution[] | undefined
  localizedAspectName?: string | undefined
}
type Refinement = {
  aspectDistributions?: AspectDistribution[] | undefined
  dominantCategoryId?: string | undefined
}
type ProductSearchResponse = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  productSummaries?: ProductSummary[] | undefined
  refinement?: Refinement | undefined
  total?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/product/:epid': {
      $get:
        | {
            input: { param: { epid: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined }
            }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { epid: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { epid: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { epid: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { epid: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/product_summary/search': {
      $get:
        | {
            input: {
              query: {
                aspect_filter?: string | undefined
                category_ids?: string | undefined
                fieldgroups?: string | undefined
                gtin?: string | undefined
                limit?: string | undefined
                mpn?: string | undefined
                offset?: string | undefined
                q?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined } }
            output: ProductSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                aspect_filter?: string | undefined
                category_ids?: string | undefined
                fieldgroups?: string | undefined
                gtin?: string | undefined
                limit?: string | undefined
                mpn?: string | undefined
                offset?: string | undefined
                q?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                aspect_filter?: string | undefined
                category_ids?: string | undefined
                fieldgroups?: string | undefined
                gtin?: string | undefined
                limit?: string | undefined
                mpn?: string | undefined
                offset?: string | undefined
                q?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                aspect_filter?: string | undefined
                category_ids?: string | undefined
                fieldgroups?: string | undefined
                gtin?: string | undefined
                limit?: string | undefined
                mpn?: string | undefined
                offset?: string | undefined
                q?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                aspect_filter?: string | undefined
                category_ids?: string | undefined
                fieldgroups?: string | undefined
                gtin?: string | undefined
                limit?: string | undefined
                mpn?: string | undefined
                offset?: string | undefined
                q?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
