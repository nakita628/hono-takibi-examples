type ListRealtimeContactAnalysisSegmentsResponse = { Segments: {}; NextToken?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/realtime-contact-analysis/analysis-segments': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            InstanceId: string
            ContactId: string
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListRealtimeContactAnalysisSegmentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
