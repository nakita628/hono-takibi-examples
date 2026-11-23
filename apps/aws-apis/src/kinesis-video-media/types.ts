type GetMediaOutput = { Payload?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getMedia': {
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
            StreamName?: string | undefined
            StreamARN?: string | undefined
            StartSelector: {
              StartSelectorType?: {} | undefined
              AfterFragmentNumber?: {} | undefined
              StartTimestamp?: {} | undefined
              ContinuationToken?: {} | undefined
            }
          }
        }
        output: GetMediaOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
