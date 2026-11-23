type BuyRecommendationResponse = {
  buyRecommendations?: string[] | undefined
  numberOfProducts?: bigint | undefined
  responseMessage?: string | undefined
  responseStatus?: string | undefined
}
type ProductDetailsResponse = {
  answeredQuestions?: bigint | undefined
  asin?: string | undefined
  countReview?: bigint | undefined
  features?: string[] | undefined
  fulfilledBy?: string | undefined
  manufacturer?: string | undefined
  price?: number | undefined
  priceSaving?: string | undefined
  priceShippingInformation?: string | undefined
  prime?: boolean | undefined
  productRating?: string | undefined
  productTitle?: string | undefined
  responseMessage?: string | undefined
  responseStatus?: string | undefined
  retailPrice?: number | undefined
  sizeSelection?: string[] | undefined
  soldBy?: string | undefined
  warehouseAvailability?: string | undefined
}
type KeywordSearchResponse = {
  domainCode?: string | undefined
  foundProducts?: string[] | undefined
  keyword?: string | undefined
  numberOfProducts?: bigint | undefined
  responseMessage?: string | undefined
  responseStatus?: string | undefined
  sortStrategy?: string | undefined
}
type SortOptionResponse = {
  responseMessage?: string | undefined
  responseStatus?: string | undefined
  resultSize?: bigint | undefined
  sortOptions?:
    | { order?: bigint | undefined; sortName?: string | undefined; strategy?: string | undefined }[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/amz/amazon-lookup-buy-recommendations': {
      $get:
        | {
            input: { query: { url: string } }
            output: BuyRecommendationResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { url: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { url: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { url: string } }; output: {}; outputFormat: string; status: 406 }
    }
  } & {
    '/amz/amazon-lookup-product': {
      $get:
        | {
            input: { query: { url: string; size?: string | undefined } }
            output: ProductDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { url: string; size?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { url: string; size?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { url: string; size?: string | undefined } }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/amz/amazon-search-by-keyword': {
      $get:
        | {
            input: {
              query: {
                keyword: string
                domainCode: string
                sortBy?: string | undefined
                numberOfProducts?: number | undefined
              }
            }
            output: KeywordSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                keyword: string
                domainCode: string
                sortBy?: string | undefined
                numberOfProducts?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                keyword: string
                domainCode: string
                sortBy?: string | undefined
                numberOfProducts?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/amz/sort-options': {
      $get: { input: {}; output: SortOptionResponse; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
