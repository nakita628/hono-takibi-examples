type ItemID = string
type AttributeValue = string
type FilterAttributeValue = string
type GetPersonalizedRankingResponse = {
  personalizedRanking?: {} | undefined
  recommendationId?: {} | undefined
}
type Promotion = {
  name?: {} | undefined
  percentPromotedItems?: {} | undefined
  filterArn?: {} | undefined
  filterValues?: {} | undefined
}
type GetRecommendationsResponse = { itemList?: {} | undefined; recommendationId?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/personalize-ranking': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            campaignArn: string
            inputList: ItemID[]
            userId: string
            context?: { [x: string]: AttributeValue } | undefined
            filterArn?: string | undefined
            filterValues?: { [x: string]: FilterAttributeValue } | undefined
          }
        }
        output: GetPersonalizedRankingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/recommendations': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            campaignArn?: string | undefined
            itemId?: string | undefined
            userId?: string | undefined
            numResults?: number | undefined
            context?: { [x: string]: AttributeValue } | undefined
            filterArn?: string | undefined
            filterValues?: { [x: string]: FilterAttributeValue } | undefined
            recommenderArn?: string | undefined
            promotions?: Promotion[] | undefined
          }
        }
        output: GetRecommendationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
