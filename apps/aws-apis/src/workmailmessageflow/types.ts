type GetRawMessageContentResponse = { messageContent: {} }
type PutRawMessageContentResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/messages/:messageId': {
      $get: {
        input: { param: { messageId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetRawMessageContentResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { messageId: string } } & {
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
            content: {
              s3Reference?: { bucket: {}; key: {}; objectVersion?: {} | undefined } | undefined
            }
          }
        }
        output: PutRawMessageContentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
