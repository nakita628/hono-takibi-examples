type ItemID = string
type AttributeValue = string
type FilterAttributeValue = string
type GetPersonalizedRankingResponse = {
  personalizedRanking?: {} | undefined
  recommendationId?: {} | undefined
}
type InvalidInputException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
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
      $post:
        | {
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
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/recommendations': {
      $post:
        | {
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
        | {
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
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  },
  '/'
>
export default routes
