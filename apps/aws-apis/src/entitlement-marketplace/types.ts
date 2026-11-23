type GetEntitlementsRequest = {
  ProductCode: {}
  Filter?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetEntitlementsResult = { Entitlements?: {} | undefined; NextToken?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSMPEntitlementService.GetEntitlements': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSMPEntitlementService.GetEntitlements'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEntitlementsRequest }
        output: GetEntitlementsResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
