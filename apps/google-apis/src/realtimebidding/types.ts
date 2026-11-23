type ActivateBiddingFunctionRequest = { [x: string]: unknown }
type BiddingFunction = {
  biddingFunction?: string | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'ARCHIVED' | undefined
  type?:
    | 'FUNCTION_TYPE_UNSPECIFIED'
    | 'TURTLEDOVE_SIMULATION_BIDDING_FUNCTION'
    | 'FLEDGE_BIDDING_FUNCTION'
    | undefined
}
type ArchiveBiddingFunctionRequest = { [x: string]: unknown }
type ListBiddingFunctionsResponse = {
  biddingFunctions?: BiddingFunction[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1alpha/:name:activate': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ActivateBiddingFunctionRequest }
        output: BiddingFunction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha/:name:archive': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ArchiveBiddingFunctionRequest }
        output: BiddingFunction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha/:parent/biddingFunctions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListBiddingFunctionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BiddingFunction }
        output: BiddingFunction
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
