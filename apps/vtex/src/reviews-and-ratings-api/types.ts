type SaveReviewRequest = {
  productId: string
  rating: number
  reviewerName: string
  text: string
  title: string
}
type SaveMultipleReviewsRequest = {
  approved: boolean
  id?: string | undefined
  productId: string
  rating: number
  reviewerName: string
  text: string
  title: string
  verifiedPurchaser: boolean
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/rating/:productId': {
      $get: {
        input: { param: { productId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: { average?: number | undefined; totalCount?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/review': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & { json: SaveReviewRequest }
        output: {
          approved?: boolean | undefined
          id?: string | undefined
          locale?: (string | null) | undefined
          location?: (string | null) | undefined
          pastReviews?: (string | null) | undefined
          productId?: string | undefined
          rating?: number | undefined
          reviewDateTime?: string | undefined
          reviewerName?: string | undefined
          searchDate?: string | undefined
          shopperId?: string | undefined
          sku?: (string | null) | undefined
          text?: string | undefined
          title?: string | undefined
          verifiedPurchaser?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/review/:reviewId': {
      $delete: {
        input: { param: { reviewId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { reviewId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          approved?: boolean | undefined
          id?: string | undefined
          locale?: (string | null) | undefined
          location?: (string | null) | undefined
          pastReviews?: (string | null) | undefined
          productId?: string | undefined
          rating?: number | undefined
          reviewDateTime?: string | undefined
          reviewerName?: string | undefined
          searchDate?: string | undefined
          shopperId?: string | undefined
          sku?: (string | null) | undefined
          text?: string | undefined
          title?: string | undefined
          verifiedPurchaser?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { reviewId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            locale?: (string | null) | undefined
            productId: string
            rating: number
            reviewerName: string
            shopperId?: string | undefined
            text: string
            title: string
            verifiedPurchaser?: boolean | undefined
          }
        }
        output: {
          approved?: boolean | undefined
          id?: string | undefined
          locale?: (string | null) | undefined
          location?: (string | null) | undefined
          pastReviews?: (string | null) | undefined
          productId?: string | undefined
          rating?: number | undefined
          reviewDateTime?: string | undefined
          reviewerName?: string | undefined
          searchDate?: string | undefined
          shopperId?: string | undefined
          sku?: (string | null) | undefined
          text?: string | undefined
          title?: string | undefined
          verifiedPurchaser?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reviews': {
      $delete: {
        input: { header: { 'Content-Type': string; Accept: string } } & { json: string[] }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            search_term: string
            from: string
            to: string
            order_by: string
            status: boolean
            product_id: string
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          data?:
            | {
                approved?: boolean | undefined
                id?: string | undefined
                locale?: (string | null) | undefined
                location?: (string | null) | undefined
                pastReviews?: (string | null) | undefined
                productId?: string | undefined
                rating?: number | undefined
                reviewDateTime?: string | undefined
                reviewerName?: string | undefined
                searchDate?: string | undefined
                shopperId?: string | undefined
                sku?: (string | null) | undefined
                text?: string | undefined
                title?: string | undefined
                verifiedPurchaser?: boolean | undefined
              }[]
            | undefined
          range?:
            | { from?: number | undefined; to?: number | undefined; total?: number | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: SaveMultipleReviewsRequest[]
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
